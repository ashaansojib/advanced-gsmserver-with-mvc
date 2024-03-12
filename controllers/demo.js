// @desc = get all demos files
// @routes = api/demos/
// @access = public
exports.getDemos = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, data: { id: 1, name: "demo services" } });
};
