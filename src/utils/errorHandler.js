export default function errorHandler(error) {
  return error.response?.data?.message
    ? error.response.data.message
    : error.message;
}
