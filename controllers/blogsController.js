import db from "../models/queries.js";

async function get(req, res) {
  const skip = req?.query?.skip | 0;
  const take = req?.query?.take | 10;

  const blogs = await db.getBlogPosts(skip, take);
  return res.status(200).json({
    blogs,
  });
}

export default {
  get,
};
