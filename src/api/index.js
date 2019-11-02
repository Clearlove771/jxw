import axios from "axios";
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
// banber图
export function getbanner(){
    return axios.get ("banner")
}
export function getlist(){
    return axios.get ("list")
}
export function getjiulist(){
    return axios.get ("jiulist")
}
export function getGoOne(){
    return axios.get ("goOne")
}
export function getDay(){
    return axios.get ("day")
}
export function getGoTwo(){
    return axios.get ("goTwo")
}
export function getGuan(){
    return axios.get ("guan")
}
export function getzhuti(){
    return axios.get ("zhuti")
}
export function getbaokuan(){
    return axios.get ("baokuan")
}