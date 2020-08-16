let editor = document.getElementById('editor');
let preview = document.getElementById('preview');
let editorContainer = document.getElementById('editor-container');
let size = 'compress';
let editorResize = document.getElementById('editor-resize');

editor.innerHTML = `# Markdown Previewer Guide
## That^ is an H1 and this is an H2
### And this is an H3!

This is inline code: \`<div></div>\`
\`\`\`
\\\\ And this is a multi-line code block

const notReal = () => {
  console.log('I'm not real');
}
\`\`\`\

Here's some **bold text**

This is *italicized text*

And ***bold italics***

~scratch that~

I'm a [link]() to nowhere

> This is a block quote

And here's a table:

| Element | Markdown Syntax |
| - | - |
| H1 | # H1 |
| H2 | ## H2 |
| H3 | ### H3 |

- This is an unordered list
  - This is nested
    - This is extra nested

1. Numbered lists exist too
2. With multiple numbers
  - Obviously

And here's an embedded image:

![image](https://www.neat.la/wp-content/uploads/2017/02/logo-neat-circle.png)
`

const display = () => {
  editor.innerHTML = editor.value.replace(/<br\s*[\/]?>/gi, "\n");
  preview.innerHTML = marked(editor.value);
}

window.addEventListener('load', display);
editor.addEventListener('input', display);

window.addEventListener('resize', () => {
  if (size !== 'expand') {
    if (window.innerWidth < 600) {
      editorContainer.style.width = '100%';
      editorContainer.style.margin = '0';
      editorContainer.style.height = '250px';
    } else {
      editorContainer.style.width = '90%';
      editorContainer.style.marginTop = '2em';
      editorContainer.style.height = "350px";
    }
  } else {
    editorContainer.style.width = '100%';
    editorContainer.style.margin = '0';
    editorContainer.style.height = '100vh';
  }
});

const resize = () => {
  if (size === 'compress') {
    editorContainer.style.width = '100%';
    editorContainer.style.margin = '0';
    editorContainer.style.height = '100vh';
    editorResize.innerHTML = '<i class="fas fa-compress-alt"></i>'
    size = 'expand';
  } else {
    if (window.innerWidth < 600) {
      editorContainer.style.width = '100%';
      editorContainer.style.margin = '0';
      editorContainer.style.height = '250px';
    } else {
      editorContainer.style.width = '90%';
      editorContainer.style.marginTop = '2em';
      editorContainer.style.height = "350px";
    }
    editorResize.innerHTML = '<i class="fas fa-expand-alt"></i>';
    size = 'compress'
  }
}
