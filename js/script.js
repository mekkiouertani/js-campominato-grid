//creiamo la base su html con div che sarà la scacchiera e un bottone
//OBIETTIVO: al click del bottone dobbiamo stampare dei quadrati per formare una scacchiera
//creiamo una funzione che creetà i vari quadrati
    //dichiarare il numero di quadratini che vogliamo
    //inserire la formula della radice quadrata
    //
//dichiariamo il campo da gioco (playground) dentro il la funzione del click
//creiamo ciclo for per far stampare i quarati
//aggiungiamo classi per dare effetti ai quadrati
    
//dichiariamo il bottone dall'html
const btn = document.querySelector('button');

//creiamo evento sul click
btn.addEventListener('click', function(){
    //dichiariamo il div dove stamperemo i nostri quadrati
    const playGround = document.getElementById('playground');
    //evitiamo di stampare infiniti campi da gioco
    playGround.innerHTML = '';
    //dichiariamo il numero di quadratini che vogliamo
    const numSquare = 100;
    
    //creiamo il ciclo for per far stampare i 100 quadratini
    
    
});

//funzione per stampare i quadrati
function drawSquare(){
    //formula per il quadrato
    const squareWidth = Math.sqrt(numSquare);
    //creiamo il div che diventerà un quadrato
    const square = document.createElement('div');
    //aggiungiamo la classe con i bordi per vedere il div
    square.classList.add('square');
    //diamo una dimensione al div per farlo diventare un quadrato
    square.style.width = `calc(100% / ${squareWidth})`;
};
