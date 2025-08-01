module.exports = (request, h, err) => {
  const errors = err.details.map((e) => ({
    field: e.context.key,
    message: e.message,
  }));
  return h
    .response({
      message: 'Validation failed',
      errors,
    })
    .code(400)
    .takeover();
};
