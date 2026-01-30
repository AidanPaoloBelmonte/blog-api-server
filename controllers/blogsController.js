import query from "../models/queries.js";

async function get(req, res) {
  const skip = parseInt(req?.query?.skip) || 0;
  const take = parseInt(req?.query?.take) || 10;
  const { includeContents } = req.query;

  const blogs = await query.getBlogPosts(
    skip,
    take,
    includeContents,
    req?.requiresAdmin ?? false,
  );
  return res.status(200).json({
    blogs,
  });
}

async function getBlogPost(req, res) {
  const id = parseInt(req?.params?.id);

  const blog = await query.getBlogPost(id);

  if (!blog) {
    return res.status(404).json({ error: "Not Found" });
  }

  return res.status(200).json({ blog });
}

async function getBlogPostComments(req, res) {
  const id = parseInt(req?.params?.id);

  const comments = await query.getCommentsFromBlogPost(id);

  if (!comments) {
    return res.status(404).json({ error: "Not Found" });
  }

  return res.status(200).json({ comments });
}

async function postBlogPost(req, res) {
  const result = await query.postBlogPost(
    req?.body?.title,
    req?.body?.post,
    req?.body?.isPublished,
  );

  if (!result)
    return res.status(400).json({ error: "Failed to create blogpost" });

  return res.status(200).json({ blog: result });
}

async function postBlogPostComment(req, res) {
  const result = await query.postComment(
    req?.user?.id,
    parseInt(req.params.id),
    req.body.comment,
  );

  if (!result) return res.status(400);

  return res.status(200).json({ message: "Success" });
}

async function postToggleIsPublished(req, res) {
  const result = await query.toggleIsPublished(parseInt(req.params.id));

  if (!result) return res.status(400);
  return res.status(200).json({ published: result?.published });
}

async function deleteBlogPost(req, res) {
  const result = await query.deleteBlogPost(parseInt(req.params.id));

  if (!result) return res.status(400);
  return res.status(200).json({ message: "Success" });
}

export default {
  get,
  getBlogPost,
  getBlogPostComments,
  postBlogPost,
  postToggleIsPublished,
  postBlogPostComment,
  deleteBlogPost,
};
