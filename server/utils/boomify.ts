const boomify = (statusCode: number, message: string | undefined): any => {
  const error: any = new Error();
  error.message = message;
  error.status = statusCode;
  return error;
};

export default boomify;

