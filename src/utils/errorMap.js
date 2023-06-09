const httpErros = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

const mapHttpError = (error) => httpErros[error] || 500;

module.exports = mapHttpError;