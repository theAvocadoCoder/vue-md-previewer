<template>
  <h1>Previewer:</h1>
  <div class="preview-container">
    <section id="preview" v-html="markedText"></section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  //
  computed: {
    ...mapState({
      markedText: (state) => state.markedText,
    }),
  },
};
</script>

<style>
#preview {
  width: 200px;
  border: 1px solid black;
  color: black;
  padding: 4px;
}
.preview-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
