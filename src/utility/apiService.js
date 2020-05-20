import axios from "../config/axiosInstance";

const apiService = async ({ url, data = { params: {} } }) => {
  let response = null;
  let error = null;
  const params = data.params || {};

  const customHeader = {
    headers: {},
  };

  try {
    if (data.requestType === "GET") {
      const resp = await axios.get(
        url,
        {
          params: params,
        },
        customHeader
      );

      response = { data: resp.data };
    } else if (data.requestType === "POST" && params) {
      const resp = await axios.post(url, params, customHeader);

      response = { data: resp.data };
    }
  } catch (errorDetails) {
    error = { data: errorDetails.response };
  }

  return { response, error };
};

export { apiService };
