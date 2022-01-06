<template>
  <MarkdownEditor />
  <MarkdownPreviewer />
</template>

<script>
import MarkdownEditor from "./components/MarkdownEditor.vue";
import MarkdownPreviewer from "./components/MarkdownPreviewer.vue";
import { marked } from "marked";
import DOMPurify from "dompurify";

marked.setOptions({
  breaks: true,
  gfm: true,
  xhtml: true,
});

export default {
  created() {
    const placeholder = `# Header One
## Header Two
***
[I'm a link to Google](https://www.google.com)
***
### Other Title
Inline style:
![random image](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Random Image")

***
This is inline code: \`const x = 5;\`

But this is a block of code:
\`\`\`javascript
const x = y;
alert(x);
\`\`\`

This is a list:
- Item 1
- Item 2
- Item 3

And this is an ordered list:
1. Item A
2. Item B
3. Item C
***
This is a blockquote:
> This will properly get wrapped no matter how long I make the line. And as a plus, I can add other features such as *italics*, **bold text** and ~strike through~.

You can find a cheatsheet for Github flavored markdown [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
`;
    const markedText = DOMPurify.sanitize(marked(placeholder));
    this.$store.dispatch("setInputText", placeholder);
    this.$store.dispatch("setMarkedText", markedText);
  },
  components: {
    MarkdownEditor,
    MarkdownPreviewer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>