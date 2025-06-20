const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot0816q/",
            name: "springboot0816q",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot0816q/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Web的视频及游戏管理平台的设计及实现"
        } 
    }
}
export default base
