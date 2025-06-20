import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Messages from '../pages/messages/list'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import youxifenleiList from '../pages/youxifenlei/list'
import youxifenleiDetail from '../pages/youxifenlei/detail'
import youxifenleiAdd from '../pages/youxifenlei/add'
import youxixinxiList from '../pages/youxixinxi/list'
import youxixinxiDetail from '../pages/youxixinxi/detail'
import youxixinxiAdd from '../pages/youxixinxi/add'
import haoyouxinxiList from '../pages/haoyouxinxi/list'
import haoyouxinxiDetail from '../pages/haoyouxinxi/detail'
import haoyouxinxiAdd from '../pages/haoyouxinxi/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'messages',
					component: Messages
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'youxifenlei',
					component: youxifenleiList
				},
				{
					path: 'youxifenleiDetail',
					component: youxifenleiDetail
				},
				{
					path: 'youxifenleiAdd',
					component: youxifenleiAdd
				},
				{
					path: 'youxixinxi',
					component: youxixinxiList
				},
				{
					path: 'youxixinxiDetail',
					component: youxixinxiDetail
				},
				{
					path: 'youxixinxiAdd',
					component: youxixinxiAdd
				},
				{
					path: 'haoyouxinxi',
					component: haoyouxinxiList
				},
				{
					path: 'haoyouxinxiDetail',
					component: haoyouxinxiDetail
				},
				{
					path: 'haoyouxinxiAdd',
					component: haoyouxinxiAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
