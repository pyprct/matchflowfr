// === MATCH FLOW - DARK BLUE NEON EDITION ===

// 1 random match per major league
const matches = [
  {
    home: "Manchester City",
    away: "Arsenal",
    comp: "Premier League",
    date: "Nov 12, 2025",
    time: "10:00 PM",
    logo1: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    logo2: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
    link: "https://www.premierleague.com/"
  },
  {
    home: "Real Madrid",
    away: "Barcelona",
    comp: "La Liga",
    date: "Nov 13, 2025",
    time: "9:30 PM",
    logo1: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    logo2: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    link: "https://www.laliga.com/en-GB"
  },
  {
    home: "AC Milan",
    away: "Juventus",
    comp: "Serie A",
    date: "Nov 14, 2025",
    time: "8:45 PM",
    logo1: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg",
    logo2: "https://upload.wikimedia.org/wikipedia/en/2/2d/Juventus_FC_2017_logo.svg",
    link: "https://www.legaseriea.it/en"
  },
  {
    home: "Bayern Munich",
    away: "Borussia Dortmund",
    comp: "Bundesliga",
    date: "Nov 15, 2025",
    time: "10:30 PM",
    logo1: "https://upload.wikimedia.org/wikipedia/en/1/1f/FC_Bayern_München_logo_%282017%29.svg",
    logo2: "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg",
    link: "https://www.bundesliga.com/en"
  },
  {
    home: "PSG",
    away: "Marseille",
    comp: "Ligue 1",
    date: "Nov 16, 2025",
    time: "10:15 PM",
    logo1: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
    logo2: "https://upload.wikimedia.org/wikipedia/en/8/89/Olympique_de_Marseille_logo.svg",
    link: "https://www.ligue1.com/"
  },
  {
    home: "Ajax",
    away: "PSV Eindhoven",
    comp: "Eredivisie",
    date: "Nov 17, 2025",
    time: "8:00 PM",
    logo1: "https://upload.wikimedia.org/wikipedia/en/7/79/Ajax_Amsterdam.svg",
    logo2: "https://upload.wikimedia.org/wikipedia/en/0/05/PSV_Eindhoven.svg",
    link: "https://eredivisie.eu/"
  },
  {
    home: "Porto",
    away: "Benfica",
    comp: "Primeira Liga",
    date: "Nov 18, 2025",
    time: "9:45 PM",
    logo1: "https://upload.wikimedia.org/wikipedia/en/f/f1/FC_Porto.svg",
    logo2: "https://upload.wikimedia.org/wikipedia/en/a/a2/SL_Benfica_logo.svg",
    link: "https://www.ligaportugal.pt/"
  },
  {
    home: "Celtic",
    away: "Rangers",
    comp: "Scottish Premiership",
    date: "Nov 19, 2025",
    time: "10:00 PM",
    logo1: "https://upload.wikimedia.org/wikipedia/en/3/35/Celtic_FC.svg",
    logo2: "https://upload.wikimedia.org/wikipedia/en/4/43/Rangers_FC.svg",
    link: "https://spfl.co.uk/"
  },
  {
    home: "Galatasaray",
    away: "Fenerbahçe",
    comp: "Super Lig",
    date: "Nov 20, 2025",
    time: "8:30 PM",
    logo1: "https://upload.wikimedia.org/wikipedia/en/b/b7/Galatasaray_Sports_Club_Logo.svg",
    logo2: "https://upload.wikimedia.org/wikipedia/en/3/39/Fenerbah%C3%A7e.svg",
    link: "https://www.tff.org/"
  },
  {
    home: "Inter Miami",
    away: "LA Galaxy",
    comp: "Major League Soccer",
    date: "Nov 21, 2025",
    time: "7:45 PM",
    logo1: "https://upload.wikimedia.org/wikipedia/en/c/c1/Inter_Miami_CF_logo.svg",
    logo2: "https://upload.wikimedia.org/wikipedia/en/0/0c/LA_Galaxy_logo.svg",
    link: "https://www.mlssoccer.com/"
  }
];

// === Render Matches ===
const container = document.getElementById("matches");

function displayMatches(list) {
  container.innerHTML = "";
  list.forEach(m => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div class="match-top">
        <div class="teams">
          <div class="team">
            <img src="${m.logo1}" class="team-logo" alt="${m.home}">
            <span class="team-name">${m.home}</span>
          </div>
          <span class="vs">VS</span>
          <div class="team">
            <img src="${m.logo2}" class="team-logo" alt="${m.away}">
            <span class="team-name">${m.away}</span>
          </div>
        </div>
        <div class="meta">${m.date} | ${m.time}</div>
      </div>
      <div class="card-footer">
        <span class="pill">${m.comp}</span>
        <a href="${m.link}" target="_blank" class="btn primary">Watch</a>
      </div>
    `;
    container.appendChild(card);
  });
}

// Initial Display
displayMatches(matches);

// === Search and Filter ===
const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");
const resetBtn = document.getElementById("reset");

function filterMatches() {
  const searchTerm = searchInput.value.toLowerCase();
  const filterValue = filterSelect.value;
  const filtered = matches.filter(m =>
    (filterValue === "all" || m.comp === filterValue) &&
    (m.home.toLowerCase().includes(searchTerm) || m.away.toLowerCase().includes(searchTerm))
  );
  displayMatches(filtered);
}

searchInput.addEventListener("input", filterMatches);
filterSelect.addEventListener("change", filterMatches);
resetBtn.addEventListener("click", () => {
  searchInput.value = "";
  filterSelect.value = "all";
  displayMatches(matches);
});
