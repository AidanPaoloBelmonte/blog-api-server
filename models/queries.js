import bcrypt from "bcryptjs";

import { prisma } from "../lib/prisma.js";

async function validateLoginRequest(username, password) {
  const result = {
    code: 400,
    status: False,
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
    result.status = True;
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
    return False;
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
    return True;
  } catch (err) {
    console.log(err);
    return False;
  }
}

export default {
  validateLoginRequest,
  validateToken,
  registerUser,
};
