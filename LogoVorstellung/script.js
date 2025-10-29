const vorstellungen = {
  MoritzHuemmer: {
    firma: "Bergbahnen",
    text: "Mein Vorstellungstext",
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

set();
