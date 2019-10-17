





const _filters = {

};

export default (Vue) => {
    Object.keys(_filters).forEach(key => {
        Vue.filter(key, _filters[key])
    })
}
