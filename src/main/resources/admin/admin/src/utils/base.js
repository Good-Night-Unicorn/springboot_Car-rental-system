const base = {
    get() {
        return {
            url : "http://localhost:8080/qichezulinwangzhan/",
            name: "qichezulinwangzhan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/qichezulinwangzhan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "汽车租赁系统"
        } 
    }
}
export default base
