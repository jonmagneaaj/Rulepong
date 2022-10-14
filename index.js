const center = document.querySelector("#center");
const refresh = document.querySelector("#refresh");

const spørsmaal = [
    {
        tittel: "Straff",
        spørsmål:"Ta 2 slurker"
    },
    {
        tittel: "Belønning",
        spørsmål:"Gi bort 2 slurker"
    },
    {
        tittel: "Belønning",
        spørsmål:"Få en ekstra ball til å spille med"
    },
    {
        tittel: "Straff",
        spørsmål:"Neste kast må være et trickshot"
    },
    {
        tittel: "Straff",
        spørsmål:"Bytt lag med en på det andre laget"
    },
    {
        tittel: "Straff",
        spørsmål:"Partneren du spiller med må si hvor dårlig du er i beerpong"
    },
    {
        tittel: "Straff",
        spørsmål:"Ta en skål med rommet"
    },
    {
        tittel: "Sacrifice",
        spørsmål:"Hvis det andre laget drikker opp sitt glass så kan koppen bli lagt tilbake"
    },
    {
        tittel: "Straff",
        spørsmål:"Deres neste kast må bli kastet av en som ikke spiller"
    },
    {
        tittel: "Straff",
        spørsmål:"Du må si til en som ikke spiller at de er pen/vakker/kjekk , det andre laget velger"
    },
    {
        tittel: "Mulighet",
        spørsmål:"Om deres neste kast bommer så mister dere en kopp, treffer dere så kan dere fjerne to"
    },
    {
        tittel: "Straff",
        spørsmål:"Ta en slurk per kopp dere har igjen"
    },
    {
        tittel: "Straff",
        spørsmål:"Ta en slurk for hvor mange kopper det andre laget har mistet"
    },
    {
        tittel: "Straff",
        spørsmål:"Begge lag tar en slurk"
    },
    {
        tittel: "Straff",
        spørsmål:"Eldste som spiller tar en slurk"
    },
    {
        tittel: "Straff",
        spørsmål:"Yngste som spiller tar en slurk"
    },
    {
        tittel: "Mulighet",
        spørsmål:"Stein-Saks-Papir med det andre laget, vinneren får en kopp"
    },
    {
        tittel: "Straff",
        spørsmål:"Neste kast må kastet på kne"
    },
    {
        tittel: "Belønning",
        spørsmål:"Treffer dere neste kast så fjernes to kopper"
    },
    {
        tittel: "Straff",
        spørsmål:"Ditt lag kan kun kaste trick-shots til en kopp blir truffet"
    },
    {
        tittel: ":)",
        spørsmål:"Si en positiv ting om bursdagsbarnet"
    },
    {
        tittel: "Straff",
        spørsmål:"Velg deg en Drinking-buddy på det andre laget"
    },
    {
        tittel: "Speil",
        spørsmål:"Fjern den samme koppen på deres side, om den alt er fjernet, ta den tilbake i spill"
    },
    {
        tittel: "Belønning",
        spørsmål:"Sprett-kastene deres er fra nå av imune"
    },
    {
        tittel: "Mulighet",
        spørsmål:"Vedd X antall slurker. Treffr du neste kast så må det andre laget ta X slurker, bommer du så må ditt lag ta X slurker"
    },
    {
        tittel: "Mulighet",
        spørsmål:"Neste laget som må drikke, må drikke dobbelt"
    },
    {
        tittel: "Revival-mania",
        spørsmål:"Plasser ut ditt lags utgåtte kopper hvorenn dere vil på bordet ( ingen kontakt med motstanderenes kopper)"
    },
    {
        tittel: "Jeg har aldri",
        spørsmål:"Si en ting du aldri har gjort, de som har må drikke"
    },
    {
        tittel: "Kategori",
        spørsmål:"Begge lagene spiller. Velg en kategori (feks biler ) si så bilmerker i rundgang til en ikke kommer på noe innen 3 sekunder. Taperen og dens lager drikker"
    },
    {
        tittel: "Belønning",
        spørsmål:"Velg en av lagets kopper, putt noe under. Hvis det andre laget treffer denne koppen så er den imun i en runde, og det blir deres runde"
    },
];

let i = 0;

function spill() {
    const random = Math.floor(Math.random() * spørsmaal.length);
    i = random;

    console.log("Dette er i: " + i)

    const oppgave = spørsmaal[i];

    console.log(oppgave+"    "+ i);
    
    center.innerHTML = `
        <h1>${oppgave.tittel}</h1>
        <p>${oppgave.spørsmål}</p>
    `
}



spill();