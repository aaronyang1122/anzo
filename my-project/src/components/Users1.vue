<template>
	<div class="users">
		<h1>Users</h1>
		<!-- 添加用户信息 -->
		<form action="" v-on:submit="addUsers">
			<input type="text" v-model="newUsers.name" placeholder="enter name">
			<input type="text" v-model="newUsers.email" placeholder="enter email">
			<input type="submit" value="submit">
		</form>
		<!-- 展示用户信息 -->
		<ul>
			<li v-for="user in users">
				{{user.name}}:{{user.email}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default{ //让外部可以引用这个文件
		name: "users",
		data(){
			return{
				newUsers:{},
				users:[
					{
						name:"Hemiah Wu",
						email:"hemiah@gmail.com",
						contacted:false
					},
					{
						name:"Henry Wu",
						email:"Henry@gmail.com",
						contacted:false
					},
					{
						name:"Emily Wu",
						email:"Emily@gmail.com",
						contacted:false
					},
					{
						name:"Allhemto Wu",
						email:"Allhemto@gmail.com",
						contacted:false
					}
				]
			}
		},
		methods:{
			addUsers:function(e){
				// console.log("Hello");
				this.users.push({
					name:this.newUsers.name,
					email:this.newUsers.email,
					contacted:false
				});
				e.preventDefault();

			}
		}
		
	};
</script>

<style scoped>
/*scoped 样式作用域*/
input[type="text"]{border:1px solid #ccc;
}
input[type="submit"]{
	border-collapse: 2px;border:1px solid #ccc;
}
	
</style>