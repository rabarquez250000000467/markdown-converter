const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

function convertMarkdown(markdown) {
  let html = markdown;

  // Headings
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Bold (**text** or __text__)
  html = html.replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>');

  // Italics (*text* or _text_)
  html = html.replace(/(\*|_)(.*?)\1/g, '<em>$2</em>');

  // Images ![alt](url)
  html = html.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />');

  // Links [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');

  // Blockquotes (> text)
  html = html.replace(/^>\s*(.*$)/gim, '<blockquote>$1</blockquote>');

  return html;
}

// Update the output live as the user types
editor.addEventListener('input', () => {
  const markdownText = editor.value;
  preview.innerHTML = convertMarkdown(markdownText);
});
