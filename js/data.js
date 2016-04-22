
var headerText = "Bahn-Bingo";

var footerText = "" // "<a href='https://github.com/jeffehobbs/HTML5-bingo/' target='_blank'>Fork me on Github</a> - based on <a href='https://github.com/jeffehobbs/HTML5-bingo/' target='_blank'>HTML5-Bingo</a>";

var winText = "Gewonnen!";

var clickSnd = new Audio("audio/click.mp3");

var winSnd = new Audio("audio/win.mp3");

var JSONBingo = {"squares": [
        {"square": "Strecken- sperrung"},
        {"square": "Personen im Gleis"},
        {"square": "Signalstörung"},
        {"square": "dichte Zugfolge"},
        {"square": "Stecken- abschnitt noch belegt"},
        {"square": "Notarzteinsatz am Gleis"},
        {"square": "Polizeiliche Ermittlungen"},
        {"square": "Verspätung aus vorheriger Fahrt"},
        {"square": "Technische Störung am Zug"},
        {"square": "Warten auf Fahrgäste aus einem anderen Zug"},
        {"square": "Weichen- störung"},
        {"square": "Bauarbeiten"},
        {"square": "Verzögerungen im Betriebsablauf"},
        {"square": "Verspätung im Ausland"},
        {"square": "Verzögerung beim Ein-/Ausstieg"},
        {"square": "Gegenstände im Gleis"},
        {"square": "Toilettenstörung"},
        {"square": "Türstörung"},
        {"square": "Fahrt entfällt"},
        {"square": "Störung an einem Bahnübergang"},
        {"square": "Entschärfung einer Fliegerbombe"},
        {"square": "Zusätzlicher Halt"},
        {"square": "Streik- auswirkungen"},
        {"square": "Klimaanlage defekt"},
        {"square": "Unerwarteter Wintereinbruch"},
        {"square": "spielende Kinder im Gleisbereich"},
        {"square": "Personenunfall"},
        {"square": "Warten auf verspäteten Gegenzug"},
        {"square": "Zugüberholung"},
        {"square": "Warten auf Anschluss- reisende"},
        {"square": "Stöung am Triebfahrzeug"},
        {"square": "Verspätete Bereitstellung"},
        {"square": "Technische Störung an einem anderen Zug"},
        {"square": "Fahrgastrechte"},
        {"square": "Senk ju vor träwelling"},
        {"square": "Hohe Auslastung"},
        {"square": "Stellwerks- störung"}
    ]
};
