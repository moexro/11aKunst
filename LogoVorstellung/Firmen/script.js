const params = new URLSearchParams(window.location.search);
const type = params.get("type");
const firms = JSON.parse(localStorage.getItem("Firmen") || "{}");

document.body.style.backgroundImage = `
    linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)),
    url("../Firmen/images/background_${type}.jpg")`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundAttachment = "fixed";

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
