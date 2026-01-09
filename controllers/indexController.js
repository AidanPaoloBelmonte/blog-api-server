async function get(req, res) {
  return res.send("GET index");
}

async function getLost(req, res) {
  return res.status(404).send("404 NOT FOUND");
}

export default {
  get,
  getLost,
};
