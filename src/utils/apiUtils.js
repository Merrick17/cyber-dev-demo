import axios from "axios";

const BASE_URL = "https://reqres.in/api";

export const postApi = async (url, body, config = {}) => {
  try {
    let result = await axios.post(`${BASE_URL}/${url}`, body, config);
    return {
      success: true,
      result: result.data,
    };
  } catch (error) {
    return {
      success: false,
      result: error.message,
    };
  }
};

export const updateApi = async (url, body, config = {}) => {
  try {
    let result = await axios.put(`${BASE_URL}/${url}`, body, config);
    return {
      success: true,
      result: result.data,
    };
  } catch (error) {
    return {
      success: false,
      result: error.message,
    };
  }
};
export const deleteApi = async (url, body, config = {}) => {
  try {
    let result = await axios.delete(`${BASE_URL}/${url}`, body, config);
    return {
      success: true,
      result: result.data,
    };
  } catch (error) {
    return {
      success: false,
      result: error.message,
    };
  }
};
export const getApi = async (url, config = {}) => {
  try {
    let result = await axios.get(`${BASE_URL}/${url}`, config);
    return {
      success: true,
      result: result.data,
    };
  } catch (error) {
    return {
      success: false,
      result: error.message,
    };
  }
};