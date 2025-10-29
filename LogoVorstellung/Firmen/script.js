const params = new URLSearchParams(window.location.search);
const type = params.get("type");

document.body.style.backgroundImage = `
    linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)),
    url("../Firmen/images/background_${type}.jpg")`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundAttachment = "fixed";

const brand = document.querySelector("#topbar .brand");
if (brand) {
  brand.textContent = type; // nur den Text setzen, Logo bleibt erhalten
}
const logo = document.getElementById("logo");
logo.style.backgroundImage = `url("../Firmen/images/logo_${type}.jpg")`;
