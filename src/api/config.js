// 配置所有请求的接口地址

const base = '/api'

export default {
    login: base + '/login',
    register: base + '/register',
    saveArticle: base + '/addArticle',
    deleteArticle: base + '/deleteArticle',
    getTypeList: base + '/typeList',
    getUserList: base + '/userList',
    getHomeList: base + '/homeList',
    getContent: base + '/getContent',
    setUserAdmin: base + '/setAdmin',
    setUserNormal: base + '/setNormal',
    addType: base + '/addType'
}