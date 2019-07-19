<template>
  <div>
    <transition-group name="list" tag="ul">
      <li
        v-for="(todoItem,index) in this.$store.state.todoList"
        v-bind:key="todoItem.item"
        class="shadow"
      >
        <span
          class="checkBtn"
          v-on:click="toggleComplete(todoItem,index)"
          v-bind:class="{checkBtnCompleted : todoItem.completed}"
        >
          <i class="fas fa-check" v-bind:class="{checkBtnCompleted : todoItem.completed}"></i>
        </span>
        <span v-bind:class="{textCompleted : todoItem.completed}">{{todoItem.item}}</span>
        <span
          class="removeBtn"
          v-on:click="removeTodo(todoItem,index)"
          v-bind:class="{checkBtnCompleted : todoItem.completed}"
        >
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";

export default {
  data: function() {
    return {
      todoItems: []
    };
  },
  created: function() {
    this.getToDo();
    // if(localStorage.length>0){
    //     for(var i =0;i<localStorage.length;i++){
    //         if(localStorage.key(i) !== "loglevel:webpack-dev-server"
    //             && localStorage.key(i) !== "firebase:previous_websocket_failure"
    //             && localStorage.key(i) !== "firebase:host:webmobile-sub2-510fa.firebaseio.com"){
    //             this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    //         }
    //     }
    // }
  },
  methods: {
    removeTodo: function(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    toggleComplete: function(todoItem, index) {
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item, index);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    async getToDo() {
      this.todoItems = await FirebaseService.getToDo();
      this.$store.commit("setTodoList", this.todoItems);
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0px;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  line-height: 45px;
  color: #45acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

/* 리스트 아이템 트랜지션 효과 */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>