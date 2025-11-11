const vorstellungen = {
	MoritzHuemmer: {
		firma: "MHBergbahnenGmBH",
		text: `Wir sind Ihr verlässlicher Partner in den Bergen - modern, sicher und serviceorientiert. 
    Seit unserer Gründung stehen wir für innovative Seilbahn- und Liftlösungen, die Menschen sicher und komfortabel an ihr Ziel bringen. Unsere Anlagen verbinden Natur, Technik und Freizeitvergnügen und machen jeden Bergausflug zum Erlebnis. 
    
    Sicherheit, Zuverlässigkeit und Nachhaltigkeit stehen bei uns an erster Stelle. Mit unserem erfahrenen Team sorgen wir dafür, dass Sie entspannt die Berge genießen können – egal, ob als Skifahrer, Wanderer oder Naturliebhaber.
    `,
	},
	KilianScheuerlein: {
		firma: "KilianScheuerleinGmbh",
		text: `Diese Baufirma hebt sich von allen anderen durch ihre innovativen Baumethoden ab. 
    Denn wir bauen Häuser in wenigen Tagen durch gigantische 3D-Drucker - individuell, nachhaltig, günstig.`,
	},
	LeaHeppenstiel: {
		firma: "mordsangst Podcast",
		text: `Hi zusammen, ich heiße Lea Heppenstiel und mache hier einen True-Crime-Podcast. 
    Bei mir gibt es jeden Freitag eine neue spannende Folge. Ihr könnt ihn überall hören, wo es Podcasts gibt. 
    
    Es würde mich sehr freuen, wenn ihr mal reinhört :)`,
		bg: "contain",
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
		btn.id = key;
		btn.textContent = firmname;

		btn.addEventListener("click", () => {
			const url = `../LogoVorstellung/Firmen/?type=${encodeURIComponent(key)}`;
			window.location.href = url;
		});

		container.appendChild(btn);
	});

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
		let r = 0,
			g = 0,
			b = 0;

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
	localStorage.setItem("Firmen", JSON.stringify(vorstellungen));
	set();
});
