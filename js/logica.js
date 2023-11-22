var picas, corazones, diamantes, treboles;
var objcarta_diamante, objcarta_trebol, objetocarta_corazon, objcarta_pica;
var carta_enemigo;
var lf_jugador=1000, lf_pc=1000;
class Carta
{
    constructor(rango){
        if(rango == "a"){
            this.defenza = aleatorio(0,200);
            this.ataque = aleatorio(0,200);
        }else         if(rango == "b"){
            this.defenza = aleatorio(201,400);
            this.ataque = aleatorio(201,400);
        }else         if(rango == "c"){
            this.defenza = aleatorio(401,800);
            this.ataque = aleatorio(401,800);
        }else         if(rango == "d"){
            this.defenza = aleatorio(600,1000);
            this.ataque = aleatorio(600,1000);
        }else {
            this.defenza = aleatorio(0,1000);
            this.ataque = aleatorio(0,1000);  
        }
    }

}
function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
function estadoCombate(e) {
    //preparamos el dom para el michi parrafo
    let objdom = document.getElementById("combate");
    //esto crea una etiqueta html
    let parrafo = document.createElement("p");
    //insertamos texto en dicha etiqueta
    parrafo.innerHTML="ataque ";
    //ponemos el michi parrafo en el dom
    objdom.appendChild(parrafo);
}
function Campeon() {
    let c_elejido;
    if(document.getElementById("misu").checked){
        c_elejido = "Misu";
    }else if(document.getElementById("tsuchi").checked){
        c_elejido = "Tsuchi";
    }else if(document.getElementById("hi").checked){
        c_elejido = "Hi";
    }else if(document.getElementById("kaze").checked){
        c_elejido = "Kaze";
    }else{
        alert("Debes elegir un campeon");
    }
    document.getElementById("campeon_jugador").innerHTML="<b>"+c_elejido+"</>";
    alert("Elejiste: "+c_elejido);
    CampeonEnemigo();

}
function CampeonEnemigo(){
    let c_enemigo;
    switch (aleatorio(0,3)) {
        case 0:
            c_enemigo = "Misu"
            break;
        case 1:
            c_enemigo = "Tsuchi"
            break;  
        case 2:
            c_enemigo = "Hi"
            break;
        case 3:
            c_enemigo = "Kaze"
            break; 
        default:
            c_enemigo = "Misu"
            break;
    }
    alert("La Pc elige a: "+c_enemigo);
    document.getElementById("campeon_pc").innerHTML="<b>"+c_enemigo+"</>";

}
function Atacar(e) {
   // alert(e.target.id);
    switch (e.target.id) {
        case "carta_1":
            objcarta_pica = new Carta();
            alert("ataque: "+objcarta_pica.ataque+" defenza: "+objcarta_pica.defenza);
            document.getElementById("carta_1").disabled = true;
            break;
        case "carta_2":
            objcarta_corazon = new Carta();
            alert("ataque: "+objcarta_corazon.ataque+" defenza: "+objcarta_corazon.defenza);
            document.getElementById("carta_2").disabled = true;
            break;
        case "carta_3":
            objcarta_diamante = new Carta();
            alert("ataque: "+objcarta_diamante.ataque+" defenza: "+objcarta_diamante.defenza);
            document.getElementById("carta_3").disabled = true;           
            break;
        case "carta_4":
            objcarta_trebol = new Carta();
            alert("ataque: "+objcarta_trebol.ataque+" defenza: "+objcarta_trebol.defenza);
            document.getElementById("carta_4").disabled = true;           
            break;   
    }
    //alert("Enemigo elije");
    ContraAtacar(e);
    estadoCombate();
}
function ContraAtacar(e) {
    carta_enemigo = new Carta();
    alert("ataque: "+carta_enemigo.ataque+" defenza: "+carta_enemigo.defenza);
    switch (e.target.id) {
        case "carta_1":
            if(objcarta_pica.ataque > carta_enemigo.defenza){
                lf_pc = lf_pc - (objcarta_pica.ataque - carta_enemigo.defenza);
                document.getElementById("vidas_pc").innerHTML = ""+lf_pc;
            }else {
                lf_jugador = lf_jugador - (carta_enemigo.ataque - objcarta_pica.defenza);
                document.getElementById("vidas_jugador").innerHTML = ""+lf_jugador;       
            }
            break;
        case "carta_2":
            if(objcarta_corazon.ataque > carta_enemigo.defenza){
                lf_pc = lf_pc - (objcarta_corazon.ataque - carta_enemigo.defenza);
                document.getElementById("vidas_pc").innerHTML = ""+lf_pc;
            }else {
                lf_jugador = lf_jugador - (carta_enemigo.ataque - objcarta_corazon.defenza);
                document.getElementById("vidas_jugador").innerHTML = ""+lf_jugador;       
            }
    //        objcarta_corazon
            break;
        case "carta_3":
            if(objcarta_diamante.ataque > carta_enemigo.defenza){
                lf_pc = lf_pc - (objcarta_diamante.ataque - carta_enemigo.defenza);
                document.getElementById("vidas_pc").innerHTML = ""+lf_pc;
            }else {
                lf_jugador = lf_jugador - (carta_enemigo.ataque - objcarta_diamante.defenza);
                document.getElementById("vidas_jugador").innerHTML = ""+lf_jugador;       
            }
        //    objcarta_diamante    
            break;
        case "carta_4":
            if(objcarta_trebol.ataque > carta_enemigo.defenza){
                lf_pc = lf_pc - (objcarta_trebol.ataque - carta_enemigo.defenza);
                document.getElementById("vidas_pc").innerHTML = ""+lf_pc;
            }else {
                lf_jugador = lf_jugador - (carta_enemigo.ataque - objcarta_trebol.defenza);
                document.getElementById("vidas_jugador").innerHTML = ""+lf_jugador;       
            }           
 //           objcarta_trebol
            break;   
    }     
}

//alert("Bienvenido");
window.onload = function(){
    let campeon = document.getElementById("campeon");
    picas= document.getElementById("carta_1");
    trebol= document.getElementById("carta_4");
    corazones = document.getElementById("carta_2");
    diamantes= document.getElementById("carta_3");

    picas.addEventListener("click",Atacar);
    trebol.addEventListener("click",Atacar);
    corazones.addEventListener("click",Atacar);
    diamantes.addEventListener("click",Atacar);

    campeon.addEventListener("click",Campeon);

}

