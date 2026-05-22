(function () {
  var host = document.getElementById("baustellen-radar-embed");
  if (!host) return;

  var h = host.getAttribute("data-height") || "78vh";
  var minH = host.getAttribute("data-min-height") || "620";

  host.style.position = "relative";
  host.style.width = "100%";
  host.style.height = h;
  host.style.minHeight = minH + "px";
  host.style.border = "1px solid #d9e2ec";
  host.style.borderRadius = "12px";
  host.style.overflow = "hidden";

  var iframe = document.createElement("iframe");
  iframe.src = "https://cdu-aplerbeck.github.io/baustellen-radar/";
  iframe.title = "Baustellen-Radar Aplerbeck";
  iframe.loading = "lazy";
  iframe.style.position = "absolute";
  iframe.style.inset = "0";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "0";

  host.appendChild(iframe);
})();
