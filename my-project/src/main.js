 // The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import router from './router'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource' //使用http:// 组件引入
import App from './App'
import Users from './components/Users' //使用路由后添加 组件引入
import Test from './components/Test'	//使用路由后添加 组件引入


Vue.use(VueRouter)//路由
Vue.use(vueResource) //http:启用

//设置路由
const router =  new VueRouter({
	mode : 'history', //
	base : __dirname,  //当前路径
	routes:[
		{path:"/",component:Users},  //path:"路径",component:组件名
		{path:"/test",component:Test}
	]
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // el: '#app', 在使用router之后就不在这块bind了，所以注释掉（1）
  // template: '<App/>',   在使用router后，这边不直接使用template中的组件了（3）
  //这里template使用ES6中的话法    在链接中添加router-link标签进行路由添加路径 to="/"配置路由路径   添加<router-view> 标签用以路由执行 （4）
  // components: { App } 在使用router后，这边就不需要了 (5)
  router, //使用路由后添加 组件
   template:`
  	<div id="app">
		<ul>
			<li>
				<router-link to="/">Users</router-link>
			</li>
		</ul>
		<router-view></router-view>
  	</div>
  ` 
}).$mount("#app")             //在使用router后，通过使用$mount("#app")绑定原 new Vue（{ el:'#app'}）（2）
