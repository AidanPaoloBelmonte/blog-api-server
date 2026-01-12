import bcrypt from "bcryptjs";

import { prisma } from "../lib/prisma.js";

async function validateLoginRequest(username, password) {
  const result = {
    code: 400,
    status: false,
    msg: "An uknown error occursed.",
    content: {},
  };

  try {
    const user = await prisma.users.findFirst({
      where: {
        username: username,
      },
    });

    // Try Username
    if (!user) {
      result.msg = "The username and password do not match.";

      return result;
    }

    // Try Password
    const passwordMatched = await bcrypt.compare(password, user.password);
    if (!passwordMatched) {
      result.msg = "The username and password do not match";

      return result;
    }

    result.code = 200;
    result.msg = "Success!";
    result.status = true;
    result.content = user;

    return result;
  } catch (err) {
    console.error(err);

    result.code = 401;
    result.msg = err;

    return result;
  }
}

async function validateToken(id, username) {
  try {
    const user = await prisma.users.findFirst({
      where: {
        id: id,
        username: username,
      },
    });

    return !!user;
  } catch (err) {
    console.log(err);
    return false;
  }
}

async function registerUser(username, hashedPassword, email) {
  try {
    await prisma.users.create({
      data: {
        username,
        password: hashedPassword,
        email,
      },
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

async function getBlogPosts(skip = 0, take = 10, showUnpublished = true) {
  const opts = {};

  if (showUnpublished) opts.where.published = true;

  const posts = await prisma.blogposts.findMany({ skip, take, opts });

  return posts;
}

async function getBlogPost(id) {
  const post = await prisma.blogposts.findUnique({
    where: {
      id,
    },
  });

  return post;
}

async function getCommentsFromBlogPost(blogID, skip = 0, take = 10) {
  const comments = await prisma.comments.findMany({
    skip,
    take,
    where: {
      blogID,
    },
  });

  return comments;
}

async function getCommentsFromUser(authorID, skip = 0, take = 10) {
  const comments = await prisma.comments.findMany({
    skip,
    take,
    where: {
      authorID,
    },
  });

  return comments;
}

export default {
  validateLoginRequest,
  validateToken,
  registerUser,
  getBlogPosts,
  getBlogPost,
  getCommentsFromBlogPost,
  getCommentsFromUser,
};
