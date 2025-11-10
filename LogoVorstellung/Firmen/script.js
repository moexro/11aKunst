const params = new URLSearchParams(window.location.search);
const type = params.get("type");
const firms = JSON.parse(localStorage.getItem("Firmen") || "{}");

document.body.style.setProperty(
  "--bg-img",
  `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)),
   url("../Firmen/images/background_${type}.jpg")`
);


const brand = document.querySelector("#topbar .brand");
if (brand && firms[type] && firms[type].firma) {
  brand.textContent = firms[type].firma;
}

const logo = document.getElementById("logo");
logo.style.backgroundImage = `url("../Firmen/images/logo_${type}.jpg")`;

const text = document.getElementById("sec");
text.textContent = firms[type].text;

const favicon = document.getElementById("favicon");
favicon.href = `../Firmen/images/logo_${type}.jpg`;

const title = document.getElementById("title");
title.textContent = firms[type].firma;

function set() {
  // Theme-Color anhand des body::before-Hintergrunds setzen
  const style = getComputedStyle(document.body, "::before");
  const bg = style.backgroundImage;
  const urlMatch = bg.match(/url\(["']?(.+?)["']?\)/);
  if (!urlMatch) return;

  const imageUrl = urlMatch[1];
  const img = new Image();
  img.crossOrigin = "Anonymous";
  img.src = imageUrl;

  img.onload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = img.naturalWidth;
    canvas.height = 1;
    ctx.drawImage(img, 0, 0, canvas.width, 1);

    const data = ctx.getImageData(0, 0, canvas.width, 1).data;
    let r = 0, g = 0, b = 0;

    for (let i = 0; i < data.length; i += 4) {
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
    }

    const pixelCount = data.length / 4;
    r = Math.round(r / pixelCount);
    g = Math.round(g / pixelCount);
    b = Math.round(b / pixelCount);

    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", `rgb(${r}, ${g}, ${b})`);
  };
}

document.addEventListener("DOMContentLoaded", () => {
  set();
});
