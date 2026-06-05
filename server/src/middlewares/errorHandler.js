export function errorHandler(
  error,
  req,
  res,
  next
) {
  console.error(error);

  if (error.response?.status === 404) {
    return res.status(404).json({
      message: "City not found",
    });
  }

  return res.status(500).json({
    message: "Internal server error",
  });
}