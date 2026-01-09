async function get(req, res) {
  return res.send("GET signup");
}

async function post(req, res) {
  return res.send("POST signup");
}

export default {
  get,
  post,
};
