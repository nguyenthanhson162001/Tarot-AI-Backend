import { HttpStatus } from "@nestjs/common";

export const swaggerResponse = {
  createSuccess() {
    return {
      status: HttpStatus.CREATED,
    };
  },

  getSuccess() {
    return {
      status: HttpStatus.OK,
    };
  },

  updateSuccess() {
    return {
      status: HttpStatus.OK,
    };
  },

  deleteSuccess() {
    return {
      status: HttpStatus.NO_CONTENT,
    };
  },

  badRequest() {
    return {
      status: HttpStatus.BAD_REQUEST,
    };
  },

  notFound() {
    return {
      status: HttpStatus.NOT_FOUND,
    };
  },

  forbidden() {
    return {
      status: HttpStatus.FORBIDDEN,
    };
  },

  unAuthorized() {
    return {
      status: HttpStatus.UNAUTHORIZED,
    };
  },

  internalServerError() {
    return {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
    };
  },
};
