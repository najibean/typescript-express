import { STATUS_CODES } from 'http';
import { constants } from 'http2';

class ApiError extends Error {
  public code: number;
  public message: string;
  public errors: any;

  constructor(code: number, message: string, errors = <any>{}) {
    super(message);
    this.code = code;
    this.message = message;
    if (errors) {
      this.errors = errors;
    }
  }

  static badRequest(message: string): ApiError {
    return new ApiError(constants.HTTP_STATUS_BAD_REQUEST, message);
  }

  static unauthorized(
    message: string | undefined = STATUS_CODES[constants.HTTP_STATUS_UNAUTHORIZED]
  ): ApiError {
    return new ApiError(constants.HTTP_STATUS_UNAUTHORIZED, message ? message : 'Unauthorized');
  }

  static forbiden(
    message: string | undefined = STATUS_CODES[constants.HTTP_STATUS_FORBIDDEN]
  ): ApiError {
    return new ApiError(constants.HTTP_STATUS_FORBIDDEN, message ? message : 'Forbidden');
  }

  static notFound(
    message: string | undefined = STATUS_CODES[constants.HTTP_STATUS_NOT_FOUND]
  ): ApiError {
    return new ApiError(constants.HTTP_STATUS_NOT_FOUND, message ? message : 'Not found');
  }

  static unprocessableEntity(
    message: string | undefined = STATUS_CODES[constants.HTTP_STATUS_UNPROCESSABLE_ENTITY],
    errors: any = {}
  ): ApiError {
    return new ApiError(
      constants.HTTP_STATUS_UNPROCESSABLE_ENTITY,
      message ? message : 'Unprocessable entity',
      errors
    );
  }
}

export default ApiError;
