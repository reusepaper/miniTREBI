<template>
    <div class='inputBox shadow'>
        <!-- 엔터를 쳤을 때도 특정 로직이 실행되도록 돕는 v-on:keyup.enter 함수 -->
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <!-- <button v-on:click="addTodo">add</button> -->
        <span class="addContainer" v-on:click="addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            newTodoItem:''
        }
    },
    methods:{
        addTodo:function(){
            if(this.newTodoItem!=''){
            // 이부분 수정 JSON stringify 사용한다.
            var obj = {
                completed:false,
                item:this.newTodoItem
            }
            localStorage.setItem(this.newTodoItem, JSON.stringify(obj)); 
            this.clearInput();
            }
        },
        clearInput:function(){
            this.newTodoItem='';
        }
    }
}
</script>

<style scoped>
    input:focus{
        outline: none;
    }
    .inputBox{
        background:white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input{
        border-style: none;
        font-size: 0.9rem;
    }
    .addContainer{
        float:right;
        background:linear-gradient(to right,#6478fb,#8763fb);
        display: block;
        width:3rem;
        border-radius: 0 5px 5px 0;
        height: 50px;
        line-height: 50px;
    }
    .addBtn{
        color:white;
        vertical-align: middle;
    }
</style>
