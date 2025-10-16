/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

Consigli del giorno:

Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array" */

const countdownEl = document.getElementById("countdown")
const instructions = document.getElementById("instructions")
const randomEl = document.getElementById("numbers-list")
const answer_form = document.getElementById("answers-form")
let counter = 3 

const pc_numbers = [] //array per inserire i numeri generati random

instructions.addEventListener("click", function() {
    
    //creo i numeri e li inserisco nell'array
    for(let i=0; i<5; i++) {
        const random_number = Math.floor(Math.random() * 100 + 1)
        pc_numbers.push(random_number)

    //inserisco i numeri nell'html per visualizzarli in pagina
    let li = document.createElement("li")
    li.innerText = random_number
    randomEl.append(li)

    }

    //faccio scomparire le istruzioni dallo schermo
    instructions.style.display = "none"
    
    //imposto countdown
    setTimeout( () => {
    
    //svuoto i numeri
    randomEl.innerHTML = ''

    //mostro il form
    answer_form.classList.remove("d-none")
    }, 3000)

})

//nuovo evento (submit dei numeri)
answer_form.addEventListener("submit", function() {
    event.preventDefault() //evito il refresh della pagina

    //creo nuovo array per salvere i numeri inseriti dall'utente
    const array = document.querySelectorAll(".form-control")
    const numbers_array = []
    for(let i=0; i<array.length; i++) { 
        numbers_array.push(array[i].value)
    }
    
    let indovinati = 0
    for(i=0; i<pc_numbers.length; i++) {
        let trovato = false
        let j = 0
        while (trovato == false && j<numbers_array.length) {
            trovato = pc_numbers[i] == numbers_array[j]
            j++
        }
        if(trovato==1) {
            indovinati++        
        }
    }
    console.log(indovinati);
    
    answer_form.style.display = "none"
})
