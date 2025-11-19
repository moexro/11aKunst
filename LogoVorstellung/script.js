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
	LucaSolleder: {
		firma: "SKII",
		text: `Bei SKII dreht sich alles um Leidenschaft für den Schnee. Wir bieten dir hochwertige Ski, Skischuhe und Skizubehör von führenden Marken, damit du auf der Piste immer bestens ausgestattet bist. Ob du Anfänger oder Profi bist – bei uns findest du die passende Ausrüstung für deinen Stil und dein Können.

		Unser Sortiment umfasst:

	• Ski & Snowboards für jedes Terrain
	• Skischuhe, Bindungen & Stöcke für maximalen Komfort und Kontrolle
	• Helme, Brillen & Bekleidung für Sicherheit und Performance
	• Pflege- & Servicetools, damit deine Ausrüstung in Topform bleibt

Mit kompetenter Beratung, fairen Preisen und schneller Lieferung machen wir deinen nächsten Skitag noch besser. Entdecke jetzt unsere Angebote und erlebe den Winter mit SKII – Style. Kontrolle. Innovation.`,
	},
	JakobEirich: {
		firma: "SK8",
		text: `Willkommen bei SK8 ! Bei SK8 dreht sich alles um Kreativität, Freiheit und Style. Gestalte dein eigenes Skateboard – von klassischen Motiven bis zu modernen Designs. Ob du auf der Straße oder im Skatepark unterwegs bist, wir bieten dir hochwertige Decks, die so einzigartig sind wie du.
			Unsere Mission: Dein Board, dein Statement.
			Let‘s Roll!`,
	},
	FelixBinner: {
		firma: "Hoch- und Tiefbau Binner",
		text: `Hoch- und Tiefbau Binner – Qualität, die Bestand hat.
		Seit Generationen stehen wir für solides Handwerk, Verlässlichkeit und Präzision im Bauwesen. Ob Wohnbau, Gewerbeobjekt oder Infrastrukturprojekt – wir planen, bauen und realisieren mit Erfahrung, Verantwortung und technischem Know-how.
		Unser Ziel: nachhaltige Bauwerke, die Werte schaffen und Vertrauen verdienen`,
	},
	FinnSchmitt: {
		firma: "Schmitt & Partner",
		text: `YOU HAVE RIGHTS - EXERCISE THEM
		Willkommen bei Ihrer Kanzlei für Strafrecht in Karlburg
		In unserer Kanzlei stehen Sie als Mandant im Mittelpunkt. Wir vertreten Sie engagiert und kompetent in sämtlichen Bereichen des Strafrechts – von der Beratung in Ermittlungsverfahren über die Verteidigung in Gerichtsprozessen bis hin zur Begleitung in allen Phasen des Strafverfahrens. Ihr Recht auf eine faire Behandlung und auf professionelle Verteidigung ist unser oberstes Anliegen.
		Unser erfahrenes Team unterstützt Sie bei:
		
		• Strafverteidigung: Wir vertreten Sie in allen Strafsachen, seien es Wirtschaftsstraftaten, Verkehrsdelikte, Betäubungsmittelstrafrecht oder andere strafbare Handlungen.
		• Beratung bei Ermittlungsverfahren: Wir stehen Ihnen bereits in einem frühen Stadium zur Seite, prüfen Ihre Rechte und entwickeln gemeinsam die beste Verteidigungsstrategie.
		• Opfervertretung im Strafverfahren: Auch Geschädigte eines Verbrechens finden bei uns rechtliche Unterstützung, um ihre Ansprüche geltend zu machen und ihre Interessen zu wahren.
		• Internationale Strafrechtsfragen: Unsere Kanzlei berät und vertritt Mandanten auch in grenzüberschreitenden Fällen.
		Wir legen besonderen Wert auf persönliche Betreuung, Diskretion und schnelle Reaktionszeiten. Unser Ziel ist es, für Sie Klarheit und Sicherheit in oft komplexen und belastenden Situationen zu schaffen. Vertrauen Sie auf unsere Expertise und unseren Einsatz für Ihre Rechte.
		Kontaktieren Sie uns noch heute für eine erste Beratung. Wir beraten Sie verständlich, verständnisvoll und jederzeit professionell. `,
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
