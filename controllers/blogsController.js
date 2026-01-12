import db from "../models/queries.js";

async function get(req, res) {
  const skip = parseInt(req?.query?.skip) || 0;
  const take = parseInt(req?.query?.take) || 10;
  const { includeContents } = req.query;

  const blogs = await db.getBlogPosts(skip, take, includeContents);
  return res.status(200).json({
    blogs,
  });
}

export default {
  get,
};
