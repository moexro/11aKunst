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
   text: "Hi zusammen ich heiße Lea Heppenstiel und mache hier einen true Crime Podcast, bei mir gibt es jeden Freitag eine neue spannende Podcast Folge. Ihr könnt ihn überall hören wo es Podcast gibt. Es würde mich sehr freuen wenn ihr mal reinhört :)",
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
}

localStorage.setItem("Firmen", JSON.stringify(vorstellungen));
set();
