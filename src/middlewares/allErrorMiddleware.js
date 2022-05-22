export const errorHandlerMiddleware = async (err, req, res, next) => {
  console.log(err);
  let correlationId = req.headers["x-correlation-id"];
  return res.status(500).json({
    correlationId: correlationId,
    msg: err.message,
  });
};

export const notFoundHandlerMiddleware = async (req, res) => {
  return res.status(400).send("Route does not exit");
};
