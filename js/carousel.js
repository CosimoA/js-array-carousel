// dichiarare arrey immagini carosello
const items = document.getElementsByClassName("item");
console.log(items);

// dichiaro il nome degli idem dentro al array
let activeImg = 0;

// dichiaro i pulsanti di navigazione
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

// creo evento al click per pulsante next

next.addEventListener("click", function(){

    if (activeImg < items.length -1) {
        // se click pulsante next togli la classe active dall'item
        items[activeImg].classList.remove("active");
        // incrementiamo l'indice di selezione dell'item
        activeImg++;
        console.log(activeImg);
        // assegno la classe item all'elemento corrispondente all'indice
        items[activeImg].classList.add("active");
        // se gli item array sono finiti nascondere pulsante next
        if (activeImg === items.length -1) {
            next.classList.add("hidden");
        }

        if (activeImg > 0) {
            prev.classList.remove("hidden");
        };
    }
});

// ripeto il processo al contrario per pulsante prev

prev.addEventListener("click", function(){

    if (activeImg <= items.length -1) {
        // se click pulsante next togli la classe active dall'item
        items[activeImg].classList.remove("active");
        // incrementiamo l'indice di selezione dell'item
        activeImg--;
        console.log(activeImg);
        // assegno la classe item all'elemento corrispondente all'indice
        items[activeImg].classList.add("active");
        // se gli item array sono finiti nascondere pulsante next
        if (activeImg === 0) {
            prev.classList.add("hidden");
        }

        if (activeImg < items.length -1) {
            next.classList.remove("hidden");
        };
    }
});



