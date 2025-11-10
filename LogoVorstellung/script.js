const vorstellungen = {
  MoritzHuemmer: {
    firma: "MHBergbahnenGmBH",
    text: "Mein Vorstellungstext",
  },
  KilianScheuerlein: {
    firma: "KilianScheuerleinGmbh",
    text: "Diese Baufirma hebt sich von allen anderen durch ihre innovativen Baumethoden ab. Denn wir bauen Häuser in wenigen Tagen durch gigantische 3D-Drucker – individuell, nachhaltig, günstig.",
  },
  LeaHeppenstiel: { 
  		firma: "mordsangst Podcast",
 		text: "Hi zusammen, ich heiße Lea Heppenstiel und mache hier einen True-Crime-Podcast. Bei mir gibt es jeden Freitag eine neue spannende Folge. Ihr könnt ihn überall hören, wo es Podcasts gibt. Es würde mich sehr freuen, wenn ihr mal reinhört :)",
	},
};

let abgaben = 0;

function set() {
  const container = document.getElementById("sec");

  Object.entries(vorstellungen).forEach(([key, data]) => {
    const firmname = data.firma;
    const btn = document.createElement("button");

    btn.type = "button";
    btn.className = "get-to-vorstellung-btn";
    btn.id = key; // eindeutige ID pro Vorstellung
    btn.textContent = firmname;

    btn.addEventListener("click", () => {
      const url = `../LogoVorstellung/Firmen/?type=${encodeURIComponent(key)}`;
      window.location.href = url;
    });

    container.appendChild(btn);
  });
  
  
  document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  // Style des ::before-Pseudo-Elements auslesen
  const style = getComputedStyle(document.body, "::before");
  const bg = style.backgroundImage; // enthält linear-gradient(...) + url(...)
  const urlMatch = bg.match(/url\(["']?(.+?)["']?\)/);
  if (!urlMatch) return;

  const imageUrl = urlMatch[1];
  const img = new Image();
  img.crossOrigin = "Anonymous"; // wichtig, falls später externe Bilder kommen
  img.src = imageUrl;

  img.onload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = img.naturalWidth;
    canvas.height = 1; // nur oberste Zeile

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

    header.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  };
});
}

localStorage.setItem("Firmen", JSON.stringify(vorstellungen));
set();
