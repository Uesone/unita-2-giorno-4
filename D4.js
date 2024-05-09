/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  return l1 * l2;
}
let areaRettangolo = area(5, 6);
console.log(areaRettangolo);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(num1, num2) {
  if (num1 === num2) return (num1 + num2) * 3;
  else {
    return num1 + num2;
  }
}
console.log(crazySum(7, 6));
console.log(crazySum(7, 7));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(num) {
  const diffAssoluta = Math.abs(
    num - 19
  ); /* guardato da internet, ma perchè "-"" ? */
  if (num > 19) {
    return diffAssoluta * 3;
  } else {
    return diffAssoluta;
  }
}
console.log("Numero inferiore prova:" + crazyDiff(12));
console.log("Numero Pari prova:" + crazyDiff(19));
console.log("Numero Maggiore prova:" + crazyDiff(20));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}

console.log("non compreso prova:" + boundary(5));
console.log("se uguale a 20:" + boundary(20));
console.log("se uguale a 100:" + boundary(100));
console.log("compreso:" + boundary(88));
console.log("se 400:" + boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(stringa) {
  const scritta = "EPICODE";
  for (let i = 0; i < scritta.length; i++) {
    if (stringa[i] !== scritta[i]) {
      return scritta + stringa;
    } else {
      return stringa;
    }
  }
}
console.log(epify("prova"));
console.log(epify("EPICODE"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(numero) {
  if (numero > 0 && (numero % 3 === 0 || numero % 7 === 0)) {
    return true;
  } else {
    return false;
  }
}

console.log("multipo di 3:" + check3and7(12));
console.log("multiplo di 7" + check3and7(21));
console.log("non è multiplo ne di 3 ne di 7:" + check3and7(10));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(stringa) {
  return stringa.split("").reverse().join("");
}
console.log(reverseString("EPICODE"));
console.log(reverseString("prova"));
console.log(reverseString("AmoRoma"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(stringhe = "Ciao mi chiamo Franco!") {
  /* mi hanno aiutato, devo capirla. */
  return stringhe
    .split("")
    .map((parole) => parole.charAt(0).toLocaleUpperCase() + parole.slice(1))
    .join("");
}

console.log(upperFirst());

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
