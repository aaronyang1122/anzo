<template>
	<div class="users">
		<h1>Users</h1>
		<form action="" v-on:submit="addUsers">
			<input type="text" v-model="newUsers.name">
			<input type="text" v-model="newUsers.email">
			<input type="submit" value="submit">
		</form>
		<ul>
			<li v-for="user in users">
				<input type="checkbox" class="toggle" v-model="user.contacted">
					<span :class="{contacted:user.contacted}">
						<!-- :class="{contacted:user.contacted}"  样式表达式 用『冒号』绑定 class="{key:val}" key为ture时显示-->
						{{user.name}}:{{user.email}}
					<button name="deleteUser" v-on:click="deleteUser(user)">X</button>
				</span>
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

				this.users.push({
					name:this.newUsers.name,
					email:this.newUsers.email,
					contacted:false
				});
				e.preventDefault();
			},
			deleteUser:function(user){
				// console.log(1)
				this.users.splice(this.users.indexOf(user),1); //控制删除users里的数组，删除里面的指定数组
				//splice插入、删除或替换数组的元素
				//.splice(1,1)	删除
				//.splice(0,0,"asp")	插入
				//.splice(1,1,"#c","ruby")	替换
			}
		},
		created:function(){					//创建数据
			// console.log("Helloworld");
			this.$http.get("http://jsonplaceholder.typicode.com/users")
			.then(function(response){		//在数据请求完需要调用这个方法，response 是对应的数据内容。
				//console.log(response.data);
				this.users = response.data;

			})
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
button[name="deleteUser"]{
	background:#eee;
}
	.contacted{
		text-decoration:line-through;
	}
</style>