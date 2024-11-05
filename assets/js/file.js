var liste = document.getElementById('contenire');
var listeImage= [{titre:"filme1",image:"./assets/img/OPI3.jpg"},{titre:"filme2",image:"./assets/img/OPI4.jpg"},{titre:"filme3",image:"./assets/img/OPI5.jpg"},{titre:"filme4",image:"./assets/img/OPI6.webp"},{titre:"filme5",image:"./assets/img/OPI9.jpg"},{titre:"filme6",image:"./assets/img/OIP22.jpg"},{titre:"filme7",image:"./assets/img/OIP21.jpg"},{titre:"filme8",image:"./assets/img/223.jpg"},{titre:"filme9",image:"./assets/img/45.jpg"},{titre:"filme10",image:"./assets/img/image44.jpg"}];
var lik =[];
var i=0;
function like(i){
    lik.push(listeImage[i]);
     i++;
     afiche(i);
}
function dislik(i){
     i++;
     afiche(i);
}
function createImg(i){
    
   
    liste.innerHTML=
    `
     <div class="liste1" >
         <img src="${listeImage[i].image}" alt="">
         <div class="liste2"> 

            <h1 >${listeImage[i].titre}</h1>
            <p> A</p>
            <div class="liste3">
                <button class="buttonLike" onclick="like(${i})"> lik </button>
                <button class="buttondislike" onclick="dislik(${i})">deslik</button>
            </div>
        </div>
    </div>
    `;
    
}
function  afiche(i){
    if(i==listeImage.length){
        liste.innerHTML=`
        <div id="divwrap">
        <h1> les filmes vous aimes </h1>
        </div>
        `;
        var listlike =document.getElementById('divwrap');
        for(var j=0;j<lik.length;j++ )
        {
            listlike.innerHTML+=`
            <img  class="imge" src="${lik[j].image}" alt="">
            `;
        }
    }else
     createImg(i);
}
afiche(i);