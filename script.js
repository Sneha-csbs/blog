document.getElementById('search').addEventListener('input', function() {
  let searchVal = this.value.toLowerCase();
  document.querySelectorAll('#posts article').forEach(article => {
    let text = article.textContent.toLowerCase();
    article.style.display = text.includes(searchVal) ? '' : 'none';
  });
 });