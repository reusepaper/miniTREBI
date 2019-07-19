<template>
  <div>
    <div v-if="isAdmin" class="inputBox shadow">
      <!-- 엔터를 쳤을 때도 특정 로직이 실행되도록 돕는 v-on:keyup.enter 함수 -->
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
      <!-- <button v-on:click="addTodo">add</button> -->
      <span class="addContainer" v-on:click="addTodo">
        <i class="fas fa-plus addBtn"></i>
      </span>
      <modal-components v-if="showModal" @close="showModal = false">
        <!--
            you can use custom content here to overwrite
            default content
        -->
        <h3 slot="header">
          경고!
          <i class="closeModalBtn fas fa-times" @click="showModal=false"></i>
        </h3>
        <div slot="body">할 일을 입력해주세요.</div>
      </modal-components>
    </div>
  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import Modal from "../common/Modal.vue";

export default {
  data: function() {
    return {
      newTodoItem: "",
      showModal: false,
      admin: [
        "3YjEtT966mWsTcuEZzI6tUC1L423",
        "zqaDXS0la7TmeUKl6aypj3dkQYQ2",
        "xgc441Z24EfgMDTxhEkAuw2VaWD3",
        "ZTYM5VCPpIbvndytDt2cwlflv6E2",
        "NF8MhC7OKgXylePRyVUz9Ov539l1"
      ],
      isAdmin: false
    };
  },
  components: {
    "modal-components": Modal
  },
  mounted: function() {
    for (let admin_cnt = 0; admin_cnt < 5; admin_cnt++) {
      if (this.$store.state.user.uid == this.admin[admin_cnt]) {
        this.isAdmin = true;
        break;
      }
    }
  },
  methods: {
    addTodo: function() {
      if (this.newTodoItem != "") {
        // 이부분 수정 JSON stringify 사용한다.
        var obj = {
          completed: false,
          item: this.newTodoItem
        };
        FirebaseService.createToDo(false, this.newTodoItem);
        this.$store.commit("upTodoList", JSON.parse(JSON.stringify(obj)));
        console.log(this.$store.state.todoList);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput: function() {
      this.newTodoItem = "";
    },
    async getToDo() {
      this.todoItems = await FirebaseService.getToDo();
      this.$store.commit("setTodoList", this.todoItems);
    }
  }
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  height: 50px;
  line-height: 50px;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
