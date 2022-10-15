const rules = document.querySelector("#rules");

const content = [
  "Hver gang en ball treffer i koppen så skal en ny oppgave fra appen brukes.",
  "Hvere gang en kopp blir tatt ut av spill så det påvirkede laget ta en slurk",
  "Det skal være likt innhold i alle koppene ( Basert på alkohol % ).",
  "Ballen skal ikke være i kontakt med noen før ballen har truffet bordet eller gått over bordet.",
  "En spiller kan ikke plassere en hånd, fot, ben, penis, osv. på bordet for å få ekstra rekkevidde og eller innflytelse.",
  "En kan ikke bruke noen andre kroppsdeler ( eller annet ) enn armen/hånden å spille med, om det ikke er et påkrevd trickshot.",
  "en skal ikke lene seg over bordet.",
  "Hele kroppen skal være bak bordet.",
  "Hvis en skyter mens en er nær bordet eller noen kroppsdeler er over bordet, telles dette som en glipp og ballen går til motstanderen.",
  "Hvis en treffer en kopp, og den velter, kan det både anses som et treff og bom. Dette avhenger om den treffer på toppen av koppen, eller på siden. Gjøres det med vilje og styrke å skyte direkte mot koppen, anses det som bom. Treffer en på toppen og koppen velter, anses det som et treff.",
  "Ingen spillere kan ta noen kroppsdeler ( eller annet ) over spillebrettet når et kast skal bli gjort",
  "Det er ikke lov å ta på, kaste eller på noen annen måte distrahere eller plage de andre spillerene",
  "Hvis en ball treffer oppi en kopp så skal ballen ligge i koppen til de resterende ballene er kastet",
  "Hvis en ball treffer en kopp som har alt en ball i seg så vil dette telles som 3 poeng",
  "Hvis en ball treffer oppi en kopp, men så spretter ut så telles dette ikke som et poeng",
  "Hvis en ball treffer oppi en kopp, spretter så ut og lander oppi en ny kopp så telles dette som 2 poeng, og begge koppene er ute av spill",
  "Når en kopp er ute av spill så skal disse bli satt på sidene av bordet, mot ditt lag",
  "Hvis en ball treffer oppi en kopp som er ute av spill, så vil denne koppen komme tilbake i spillet",
  "Kun en ball kan være i luften samtidig, om ikke pressisert",
  "Begge lag kan omplassere sine kopper i en ny samlet formasjon en gang iløpet av spillet",
  "Når et lag har slått ut alle koppene til motstanderen så har det andre laget en sjangs på komme tilbake. De får et kast hver, og om alle baller treffer oppi en kopp så vil deres kopp komme tilbake",
];

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";

    for (let i = 0; i < content.length; ++i) {
      const element = content[i];
      rules.innerHTML += `
        <p><b>${i+1}.</b> ${element}</p>
    `
  }
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    rules.innerHTML = ``
  }