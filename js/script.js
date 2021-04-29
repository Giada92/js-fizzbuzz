/* Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare? */


//Programma che stampa da 1 a 100
//var numeri = 0;

var numeri = 0;

for ( var i = 1; i <= 100; i++) {
        
        console.log(i);

    if ( i % 3 == 0 && i % 5 == 0 ) { 
        //console.log("QUESTO", i);
        //console.log("FizzBuzz");
        //numeri = i;
        //console.log("Numeri", i);
        numeri = "FizzBuzz";
        console.log(numeri);

    } else if ( i % 5 == 0 ) {
        numeri = "Buzz";
        console.log(numeri);
    } else if (i % 3 == 0) {
        numeri = "Fizz";
        console.log(numeri);
    }
}

