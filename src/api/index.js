
import axios from "axios"
axios.defaults.baseURL="http://127.0.0.1:3000/dang/"

axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
//获取劲爆清仓数据
  export function getClearList(){
    return axios.get("clearlist")
  }
  

  //获取劲爆清仓数据
  export function getCateList(){
    return axios.get("catrList")
  }

  // 获取详情页banner图
export function getDetailBanner(){
  return axios.get("detailBanner")
}