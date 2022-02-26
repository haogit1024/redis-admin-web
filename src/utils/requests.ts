import axios, {Axios, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'
import Qs from 'qs'

// link: https://www.axios-http.cn/
const service: AxiosInstance = axios.create({
    // TODO 获取环境变量
    baseURL: '',
    timeout: 300000, // 5分钟
    // `paramsSerializer`是可选方法，主要用于序列化`params`
    // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
    // qs.stringify()将对象 序列化成URL的形式，以&进行拼接
    paramsSerializer: (params: any) => {
        return Qs.stringify(params, {arrayFormat: 'brackets', allowDots: true, skipNulls: true})
    },
})

// 请求拦截器
service.interceptors.request.use((config: AxiosRequestConfig) => {
    // 在发送请求之前做些什么
    // TODO 设置token
    return config;
}, error => {
    // 对请求错误做些什么
    console.log('请求出错', error)
    return Promise.reject(error);
})

// 详情拦截器
service.interceptors.response.use((response: AxiosResponse) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    // 下面是模仿element-admin写一些配置
    const res = response.data
    if (res.code === 6001) {
        // token已过期
        return Promise.reject(new Error(res.message || 'Error'))
    } else if (res.code !== 1) {
        // 业务请求失败
        // TODO 通用响应
        return Promise.reject(res)
    }
    return res;
}, (error: any) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    console.error(JSON.stringify(error))
    // TODO 通用请求失败响应
    return Promise.reject(error);
})

export default service
