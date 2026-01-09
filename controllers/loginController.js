async function get(req, res) {
  return res.send("GET login");
}

async function post(req, res) {
  return res.send("POST login");
}

export default {
  get,
  post,
};
