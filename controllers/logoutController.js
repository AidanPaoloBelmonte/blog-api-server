function post(req, res) {
  return res
    .clearCookie("signature")
    .status(200)
    .json({ message: "Successfully Logged Out" });
}

export default {
  post,
};
