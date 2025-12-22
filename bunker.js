(function () {

  const STORE_URL = "https://cdn.jsdelivr.net/gh/nanangkus/jquery@refs/heads/main/load.json";

  function createArticle(data) {
    let html = "";

    data.articles.forEach(item => {

      // 🔥 INI POSISI KODENYA BRO
      const anchorText = Array.isArray(item.anchor)
        ? item.anchor[Math.floor(Math.random() * item.anchor.length)]
        : item.anchor;

      html += item.text;

      if (item.link && anchorText) {
        html += ' <a href="' + item.link + '" target="_blank">' + anchorText + '</a>';
      }

      html += "<br>";
    });

    return html;
  }

  fetch(STORE_URL)
    .then(res => res.json())
    .then(json => {
      const target =
    document.querySelector(".elementor") ||
    document.querySelector("footer") ||
    document.body;

    target.appendChild(div);
    });

})();
