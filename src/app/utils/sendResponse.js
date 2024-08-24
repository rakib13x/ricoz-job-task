const sendResponse = (res, response) => {
  const { statusCode, success, message, data, token } = response;

  const responseBody = {
    success,
    message,
    data,
  };

  if (token) {
    responseBody.token = token;
  }

  res.status(statusCode).json(responseBody);
};

export default sendResponse;
