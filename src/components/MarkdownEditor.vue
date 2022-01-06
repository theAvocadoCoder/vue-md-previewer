<template>
  <h1>Editor:</h1>
  <div>
    <textarea id="editor" @keyup="updateMarkedText" :value="inputText" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { marked } from "marked";
import DOMPurify from "dompurify";

marked.setOptions({
  breaks: true,
  gfm: true,
  xhtml: true,
});

export default {
  //
  methods: {
    updateMarkedText: function (e) {
      const markedText = DOMPurify.sanitize(marked(e.target.value));
      this.$store.dispatch("setMarkedText", markedText);
    },
  },
  computed: {
    ...mapState({
      inputText: (state) => state.inputText,
    }),
  },
};
</script>

<style>
#editor {
  width: 200px;
  min-height: 250px;
}
</style>
