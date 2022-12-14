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
        spørsmål:"Si til partneren din hvor god den er i beerpong"
    },
    {
        tittel: "Straff",
        spørsmål:"Ta en skål med rommet"
    },
    {
        tittel: "Mulighet",
        spørsmål:"Hvis det andre laget drikker opp sine glass så kan koppen bli lagt tilbake"
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
        spørsmål:"Neste kast må kastes på kne"
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
        tittel: "Mulighet",
        spørsmål:"Si en positiv ting om bursdagsbarnet/hosten, gi så ut en slurk til hvem som helst i rommet "
    },
    {
        tittel: "Straff",
        spørsmål:"Velg deg en Drinking-buddy på det andre laget"
    },
    {
        tittel: "Mulighet",
        spørsmål:"Fjern den samme koppen på deres side, om den alt er fjernet, ta den tilbake i spill"
    },
    {
        tittel: "Mulighet",
        spørsmål:"Neste runde så må ballene til ditt lag sprettes, de er imune og hver ball telles dobbelt"
    },
    {
        tittel: "Mulighet",
        spørsmål:"Vedd X antall slurker. Treffer du neste kast så må det andre laget ta X slurker, bommer du så må ditt lag ta X slurker"
    },
    {
        tittel: "Mulighet",
        spørsmål:"Neste laget som må drikke, må drikke dobbelt"
    },
    {
        tittel: "Mulighet",
        spørsmål:"Plasser ut ditt lags utgåtte kopper hvorenn dere vil på bordet ( ingen kontakt med motstanderenes kopper)"
    },
    {
        tittel: "Mulighet",
        spørsmål:"Si en ting du aldri har gjort, de som har må drikke"
    },
    {
        tittel: "Mulighet",
        spørsmål:"Begge lagene spiller. Velg en kategori (feks biler ) si så bilmerker i rundgang til en ikke kommer på noe innen 3 sekunder. Taperen og dens lager drikker"
    },
    {
        tittel: "Belønning",
        spørsmål:"Velg en av lagets kopper, putt noe under. Hvis det andre laget treffer denne koppen så er den imun i en runde, og det blir deres runde"
    },
    {
        tittel: "Belønning",
        spørsmål:"Hvis den neste ballen ditt lag kaster treffer en kopp, så fjernes alle kopper som er på samme rad"
    },
    {
        tittel: "Belønning",
        spørsmål:"Hvis den neste ballen laget ditt kaster treffer en kopp, så er det ditt lags tur igjen, forsett til dere bommer"
    },
    {
        tittel: "Straff",
        spørsmål:"Ta fem slurker"
    },
    {
        tittel: "Straff",
        spørsmål:"Alle på laget ditt tar en slurk per deltager på laget"
    },
    {
        tittel: "Mulighet",
        spørsmål:"Den neste runden så må alle baller kastes på likt, drikk en slurk for hver som bommer, og gi bort dobbelt for hver som treffer"
    },
];

let i = 0;

function spill() {
    console.log("antall oppgaver: " + spørsmaal.length) 
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