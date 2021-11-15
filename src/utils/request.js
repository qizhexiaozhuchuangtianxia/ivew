import axios from 'axios'
export const postRequest = (url, baseURL, params) => {
    return axios({
      method: 'post',
      baseURL: `${baseURL}`,
      url: `${url}`,
      data: params,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": '*',
        "Access-Control-Allow-Methods": "POST,GET",
      }
    });
  }
  
export const postJsonRequest = (url, baseURL, params) => {
  return axios({
    method: 'post',
    baseURL: `${baseURL}`,
    url: `${url}`,
    data: params,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    }
  });
}

export const putRequest = (url, baseURL, params) => {
  return axios({
    method: 'put',
    baseURL: `${baseURL}`,
    url: `${url}`,
    data: params,
    timeout: 30000,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    }
  });
}

export const deleteRequest = (url, baseURL, params) => {
  return axios({
    method: 'delete',
    baseURL: `${baseURL}`,
    url: `${url}`,
    data: params,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    }
  });
}

export const getRequest = (url, baseURL, params,isToken) => {
  if(isToken){
    params.token= token
  }
  return axios({
    method: 'get',
    baseURL: `${baseURL}`,
    url: `${url}`,
    params,
    timeout: 30000,
    headers: {}
  });
}
 
