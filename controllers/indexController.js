async function get(req, res) {
  return res.send("GET index");
}

async function getLost(req, res) {
  return res.send("GET lost");
}

export default {
  get,
  getLost,
};
