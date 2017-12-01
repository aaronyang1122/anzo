<template>
	<div class="test">
		<!-- 获取数据 -->
		<h1>{{title}}</h1>
		<p>{{user.firstName}}</p>
		<p v-text="user.lastName"></p>
		<!-- v-if -->
		<p v-if="showName">{{user.firstName}}</p>
		<!-- v-else -->
		<p v-else>Nobody</p>
		<!-- v-for -->
		<p v-for="item in items">{{item.title}}</p>

		<!-- v-on -->
		<button v-on:click="greet('Hello Everybody!')">Say Greeting</button>
		<!-- 键盘事件 -->
		<input type="text" v-on:keyup="pressKey">
		<input type="text" v-on:keyup.enter="enterHit">
		<input type="text" v-on:keyup.alt.enter="altEnterHit">
		<hr>
		<!-- computed 计算属性 -->
		<label for="">First Name:</label>
		<input type="text" v-model="user.firstName">
		<br>
		<label for="">First Name:</label>
		<input type="text" v-model="user.lastName">
		<br>
		<h3>{{fullName}}</h3>


		<!-- props属性 -->
		<h2>{{msg}}</h2>
	</div>
</template>

<script>
	export default{ //让外部可以引用这个文件
		name: "test",
		props:{
			msg:{
				type:String,
				default:"默认就是当前这些文字"
			}

		},
		data(){
			return{
				title:"Hello Vue.js!",
				user:{
					firstName:"Hemiah",
					lastName:"Wu"
				},
				showName:false,
				items:[
					{title:"item1"},
					{title:"item2"},
					{title:"item3"},
				]
			}
		},
		methods:{
			greet:function(greeting){
				alert(greeting)
			},
			pressKey:function(){
				console.log("Pressed.....")
			},
			enterHit:function(){
				console.log("you pressed this enter key!")
			},
			altEnterHit:function(){
				console.log("you pressed alt + enter key!")
			}
		},
		computed:{
			fullName:function(){
				return this.user.firstName + this.user.lastName;
			}

		}

	};
</script>

<style scoped>
/*scoped 样式作用域*/
	
</style>