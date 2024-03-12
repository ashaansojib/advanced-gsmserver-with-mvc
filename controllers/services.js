// @desc = get all services
// routes = /api/services/
// access = public
exports.getServices = (req, res, next) => {
  res.status(200).json({ success: true, data: { id: 1, name: "sojibs" } });
};

exports.getService = (req, res, next) => {
  res
    .status(200)
    .json({
      success: true,
      data: { id: 1, name: `single item from ${req.params.id}` },
    });
};
