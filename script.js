// REQUIRED FUNCTION NAME
function convertMarkdown(markdown) {
  let html = markdown;

  // Headings (#, ##, ###)
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Bold (**text** or __text__)
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
  html = html.replace(/__(.*?)__/gim, '<strong>$1</strong>');

  // Italic (*text* or _text_)
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');
  html = html.replace(/_(.*?)_/gim, '<em>$1</em>');

  // Images (![alt](url))
  html = html.replace(/!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1" />');

  // Links ([text](url))
  html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');

  // Blockquotes (> text)
  html = html.replace(/^>\s*(.*$)/gim, '<blockquote>$1</blockquote>');

  return html;
}

// Live Update Listener
const markdownInput = document.getElementById('markdown-input');
const preview = document.getElementById('preview');
const htmlOutput = document.getElementById('html-output');

markdownInput.addEventListener('input', () => {
  const rawMarkdown = markdownInput.value;
  const convertedHTML = convertMarkdown(rawMarkdown);

  // Render styled HTML to preview box
  preview.innerHTML = convertedHTML;

  // Display raw HTML string output
  htmlOutput.textContent = convertedHTML;
});
