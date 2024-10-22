//Consegna
//Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
//Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)


//BTN
const myButtonEl = document.getElementById ("btn-lettering");


//IMG
//genero il nodo dell'img
const myFigurElement = document.getElementById ("img-container");
//recupero il tag img
const myCustumImg = document.createElement ('img');
myCustumImg.src = "./img/white_lamp.png";
myCustumImg.add = ("img-fluid");

//aggiungo il nodo dell'immagine al nodo figure
myFigurElement.append(myCustumImg);

//click function
myButtonEl.addEventListener("click", () =>{
    if (myButtonEl.textContent === "Accendi"){
         myCustumImg.src ="./img/yellow_lamp.png";
    myButtonEl.textContent= "Spegni"
    }
   else{
     myCustumImg.src ="./img/white_lamp.png";
    myButtonEl.textContent= "Accendi"
   }
    
    }
    );