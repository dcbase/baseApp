import axios from 'axios'
import qs from 'qs'


let host='test'
let baseUrl=''
if(host==='test'){
    baseUrl='http://apms-test.fpi-inc.site/apms-server/api/v1/mobile'
}else if(host==='localhost'){
    baseUrl='http://172.19.23.2:8088/apms-server/api/v1/mobile'
}else{
    baseUrl='http://apms-test.fpi-inc.site/apms-server/api/v1/mobile'
}

axios.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'

    return config
})

axios.interceptors.response.use(({ data, config }) => {
    if(data.code === 400) { //未登录，或者登陆失效
        //appStore.logout()
        return Promise.reject('未登录')
    }
    if(data.success === false) {
        return Promise.reject(data)
    }
    if (data.code === undefined) {
        log(config, data.data)
        return data
    }
    if(data.code !== 200) { //其他错误,返回msg字段作为业务错误的标志

        log(config, data.data, data.message, false)
        return { msg: data.message }
    }
    log(config, data.data,data.message)
    return data || {}
}, err => {
    return Promise.reject(err)
})

function parseURL (URL) {
    let [ url, query ] = URL.split('?'), queryData = {}
    if(query) {
        queryData = qs.parse(query)
    }
    return {url, queryData}
}

//统一处理请求失败的回调
function errCatch (err) {
    if(err.config) { //处理来自axios的错误
        log(err.config, {}, err.message)
    } else {
        console.info('httpClient[error]:', err)
    }
}

function log (config, res={}, msg='', type=true) {
    let params
    if(config.method === 'get') {
        params = JSON.stringify(config.params)
    } else {
        params = config.data
    }
    /*console.log(`%c接口调用${type ? '正常' : '出错'}:`,`color:${type ? 'green' : 'red'}`)
    console.log(`method: ${config.method}
        msg: ${msg ? msg : ''}
        url: ${config.url}
        params: ${params}
        res: ${JSON.stringify(res)}
    `.replace(/ /g, '').replace(/\n\s/g, ''))*/
}

function proxy (method = 'get', ...otherParams) {
    axios.defaults.baseURL = baseUrl
    return new Promise(resolve => {
        axios[method].apply(axios, otherParams).then(res => {
            resolve(res)
        }).catch(errCatch)
    })
}

const $get = (URL, data = {}) => {
    let {url , queryData} = parseURL(URL)
    queryData = Object.assign(queryData, data)
    return proxy('get', url, { params: queryData })
}

const $post = (URL, data) => proxy('post', URL, data)

const $delete = (URL, data, server = 'agms') =>  proxy('delete', URL, data, server)

//以下三种请求方式均可以
// $get('sd/lk', {a: 1, b: 3})
// $get('sd/lk?k=2')
// $get('/sd/lk')

export default {
    baseURL: axios.defaults.baseURL,
    $get,
    $post,
    $delete
}


