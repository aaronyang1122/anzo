<template>
  <div class="row" id="translateForm">
    <div class="col-md-6 col-md-offset-3">
      <form action="" class="well form-inline" id="transForm" v-on:submit="formSubmit">
      <input type="text" class="form-control inputText" placeholder="请输入需要翻译的内容" v-model="textToTranslate">
      <select name="" id="" class="form-control" v-model="language">
        <option value="en">English</option>
        <option value="ru">Russian</option>
        <option value="ko">Korean</option>
        <option value="ja">Janpenese</option>
      </select>
      <input type="submit" value="翻译" class="btn btn-primary">
    </form>
    </div>
  </div>
</template>

<script>


export default {
  name: 'translateForm',
  data:function(){      //通过一个data的方式去 去获取数据，并返回到相应的 v-model中
    return{
      textToTranslate:"",
      language:""
    }
  },
  methods:{
    formSubmit:function(e){
      // alert("HelloWorld!")
      //console.log(this.textToTranslate);
      this.$emit("formSubmitOutput",this.textToTranslate,this.language);//自定义传一个参数到TranslateOutput   重要！！！！！！！！！！！！
      e.preventDefault();

    }
  }

};
</script>

<style>
  #transForm{
    border-radius: 3px;
    border:1px solid #ccc;
  }
</style>
