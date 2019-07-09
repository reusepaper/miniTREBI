<template>
    <div id="md-editor">
        <markdown-editor v-model="content" ref="markdownEditor"></markdown-editor>
        <button v-on:click="goHome" id="createButton">등록</button>
    </div>
</template>

<script>
  import markdownEditor from 'vue-simplemde/src/markdown-editor'

  export default {
    components: {
      markdownEditor
    },
    data () {
      return {
        content: '',
        configs: {
          spellChecker: false // disable spell check
        }
      }
    },
    methods: {
        goHome: function(){
        alert('저장할게요!');
        location.replace('/');
        }
    }
  }
</script>

<style>
  @import '~simplemde/dist/simplemde.min.css';
  #md-editor{
      padding: 1rem;
  }
  #createButton {
    background-color:white;
    color:black;
    border: 1px solid pink;
    border-radius: 15%;
    padding: 0.7rem;
    margin-left: 10px;
    z-index: 99;
  }
</style>