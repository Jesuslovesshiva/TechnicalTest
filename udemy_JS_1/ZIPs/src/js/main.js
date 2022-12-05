"use strict";

const Haushaltsbuch = {

    Gesamt_bilanz: new Map(),
    Fehler: [],
    Eintraege: [],

    eintrag_erfassen() {
                let neuer_eintrag = new Map();
                neuer_eintrag.set("titel", this.titel_verarbeiten(prompt("Titel:").trim()));
                neuer_eintrag.set("typ", this.typ_verarbeiten(prompt("Typ (Einnahme oder Ausgabe):").trim()));
                neuer_eintrag.set("betrag", this.betrag_verarbeiten(prompt("Betrag (in Euro, ohne €-Zeichen):").trim()));
                neuer_eintrag.set("datum",  this.datum_verarbeiten((prompt("Datum (jjjj-mm-tt):")).trim()));
                neuer_eintrag.set("timestamp", Date.now());
                if (this.Fehler.length === 0) {
                this.Eintraege.push(neuer_eintrag);
                } else {
                    console.log("Folgenede Fehler wurden gefunden:")
                    this.Fehler.forEach(function(fehler) {
                        console.log(fehler)
                    });
                }
    },

    titel_verarbeiten(titel) {
        titel = titel.trim();
        if (this.titel_validieren(titel)) {
            return titel;
        } else {
           this.Fehler.push("Kein Titel angebeben");
        }
    },

    titel_validieren(titel) {
        if (titel !== "") {
            return true;
        } else {
            return false;
        }
    },

    typ_verarbeiten(typ) {
        typ = typ.trim().toLowerCase();
        if (this.typ_validieren(typ)) {
            return typ;
        } else {
            this.Fehler.push(`Ungültiger Eintrags-Typ: "${typ}."`);
            return false;
        }
    },

    typ_validieren(typ) {
        if (typ.match(/^(?:einnahme|ausgabe)$/) !== null) {
            return true;
        } else {
            return false;
        }
    },


    betrag_verarbeiten(betrag) {
        betrag = betrag.trim();
        if (this.betrag_validieren(betrag)) {
            return parseFloat(betrag.replace(",", ".")) * 100;
        } else {
            this.Fehler.push(`Ungültiger Betrag: ${betrag} €.`);
            return false;
        }
    },

    betrag_validieren(betrag) {
        if (betrag.match(/^\d+(?:(?:,|\.)\d\d?)?$/) !== null) {
            return true;
        } else {
            return false;
        }
    },

    datum_verarbeiten(datum) {
        datum = datum.trim();
        if (this.datum_validieren(datum)) {
            return new Date(`${datum} 00:00:00`);
        } else {
            this.Fehler.push(`Ungültiges Datumformat: "${datum}".`);
            return false;
        }
    },

    datum_validieren(datum) {
        if (datum.match(/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/) !== null) {
            return true;
        } else {
            return false;
        }
    },

   

    eintraege_sortieren() {
        this.Eintraege.sort((a, b) => {
            if  (a.get.datum > b.get.datum) {
                return -1;
            } else if (a.get.datum < b.get.datum) {
                return 1;
            } else {
                return 0;
            }
    });
},

    eintraege_ausgeben() { 
        console.clear();
        this.Eintraege.forEach(function(eintrag) { 
            console.log(`Titel: ${eintrag.get("titel")}\n`
                + `Typ: ${eintrag.get("typ")}\n`
                + `Betrag: ${(eintrag.get("betrag") / 100).toFixed(2)} €\n`
                + `Datum: ${eintrag.get("datum").toLocaleDateString("de-DE", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                })}`
            );
        });
    },

    Gesamtbilanz_erstellen() {
        let neue_Gesamtbilanz = new Map();

        neue_Gesamtbilanz.set("einnahmen", 0);
        neue_Gesamtbilanz.set("ausgaben", 0);
        neue_Gesamtbilanz.set("bilanz", 0);

        this.Eintraege.forEach(function(eintrag) { 
        switch (eintrag.get("typ")) {
            case "einnahme":
                neue_Gesamtbilanz.set("einnahmen", neue_Gesamtbilanz.get("einnahmen") + eintrag.get("betrag"));
                neue_Gesamtbilanz.set("bilanz", neue_Gesamtbilanz.get("bilanz") + eintrag.get("betrag"));
            break;
            case "ausgabe":
                neue_Gesamtbilanz.set("ausgaben", neue_Gesamtbilanz.get("ausgaben") + eintrag.get("betrag"));
                neue_Gesamtbilanz.set("bilanz", neue_Gesamtbilanz.get("bilanz") - eintrag.get("betrag"));
                neue_Gesamtbilanz.bilanz -= eintrag.get("betrag");
            break;
            default: 
                console.log(`Der Typ "${eintrag.get("typ")}" wird nicht erkannt`);
        }
        });
        this.Gesamt_bilanz = neue_Gesamtbilanz;
    },

    gesamtbilanz_ausgeben() {
        console.log(`Einnahmen: ${(this.Gesamt_bilanz.get("einnahmen") / 100).toFixed(2)} €\n`
                    + `Ausgaben: ${(this.Gesamt_bilanz.get("ausgaben") / 100).toFixed(2)} €\n`
                    + `Bilanz: ${(this.Gesamt_bilanz.get("bilanz") / 100).toFixed(2)} €\n`
                    + `Bilanz ist positv: ${(this.Gesamt_bilanz.get("bilanz") / 100) >= 0}`
                 );
              },

    eintrag_hinzufuegen() {
       let weiterer_eintrag = true;
        while (weiterer_eintrag) {
            this.eintrag_erfassen();
            if (this.Fehler.length === 0) {
                this.eintraege_sortieren();
                this.eintraege_ausgeben();
                this.Gesamtbilanz_erstellen();
                this.gesamtbilanz_ausgeben();    
            } else {
                this.Fehler = [];
            }
            weiterer_eintrag = confirm("Weiteren Eintrag hinzufügen?");
        } 
    },
};



Haushaltsbuch.eintrag_hinzufuegen();
// Haushaltsbuch.eintrag_hinzufuegen();
console.log(Haushaltsbuch)
