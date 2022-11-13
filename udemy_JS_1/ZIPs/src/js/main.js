"use strict";
// Chapter 1: Global variables ------------------------------------------------------------------------------------------------------
let einnahmen   = 0, 
        ausgaben    = 0,
            bilanz      = 0;
let titel,
        typ,
            betrag, 
                datum;

const Haushaltsbuch = {
    Gesamt_bilanz: { 
    einnahmen: 0,
    ausgaben: 0,
    bilanz: 0,
    },

    // Neuer_Eintrag: {
    //     titel: null,
    //     typ: null,
    //     betrag: null,
    //     datum: null
    // },

    Eintraege: [],

    eintrag_erfassen() {
            this.Eintraege.push(
                {
                titel: prompt("Titel:"),
                typ: prompt("Typ (Einnahme oder Ausgabe):"),
                betrag: parseInt(prompt("Betrag (in Cent):")),
                datum: prompt("Datum (jjjj-mm-tt):"),
            }
        );
    },
    // eintrag_erfassen() {
    //     this.Neuer_Eintrag.titel = prompt("Titel:");
    //     this.Neuer_Eintrag.typ = prompt("Typ (Einnahme oder Ausgabe):");
    //     this.Neuer_Eintrag.betrag = parseInt(prompt("Betrag (in Cent):"));
    //     this.Neuer_Eintrag.datum = prompt("Datum (jjjj-mm-tt):");
    // },

//     eintrag_ausgeben() {
//         console.log(`Titel: ${this.Neuer_Eintrag.titel}
// Typ: ${this.Neuer_Eintrag.typ}
// Betrag: ${this.Neuer_Eintrag.betrag} ct
// Datum: ${this.Neuer_Eintrag.datum}`);
//     },

    // eintrag_mit_gesamtbilanz_verrechnen() {
    //     switch (this.Neuer_Eintrag.typ) {
    //         case "Einnahme":
    //             this.Gesamt_bilanz.einnahmen += this.Neuer_Eintrag.betrag;
    //             this.Gesamt_bilanz.bilanz += this.Neuer_Eintrag.betrag;
    //         break;
    //         case "Ausgabe":
    //             this.Gesamt_bilanz.ausgaben += this.Neuer_Eintrag.betrag;
    //             this.Gesamt_bilanz.bilanz -= this.Neuer_Eintrag.betrag;
    //         break;
    //         default:
    //             console.log(`Der Typ "${this.Neuer_Eintrag.typ}" wird nicht erkannt`);
    //     }
    // },

//     gesamtbilanz_ausgeben() {
//         console.log(`Einnahmen: ${this.Gesamt_bilanz.einnahmen} ct
//     Ausgaben: ${this.Gesamt_bilanz.ausgaben} ct 
//     Bilanz: ${this.Gesamt_bilanz.bilanz} ct
//     Bilanz ist positv: ${this.Gesamt_bilanz.bilanz >= 0}`
//  );
//     },
    eintrag_hinzufuegen() {
        this.eintrag_erfassen();
        // this.eintrag_ausgeben();
        // this.eintrag_mit_gesamtbilanz_verrechnen();
        // this.gesamtbilanz_ausgeben();
    },
};

Haushaltsbuch.eintrag_hinzufuegen();
// Haushaltsbuch.eintrag_hinzufuegen();
console.log(Haushaltsbuch)
