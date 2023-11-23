var picas, corazones, diamantes, treboles;
var objcarta_diamante, objcarta_trebol, objetocarta_corazon, objcarta_pica;
var carta_enemigo, carta_jugador;
var lf_jugador=1000, lf_pc=1000;
var c_elejido, c_enemigo;
var b_atacar;
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
function evaluarAtaque() {
    //ataque vs defenza
    // ataque jugador mayor defenza pc
    //      jugador gana
    //      ataque - defenza 
    // ataque pc mayor defenza jugador
    //      pc gana
    // ambos pierden la mitad del daño causado
    // 
    if (carta_jugador.ataque > carta_enemigo.defenza 
        && carta_enemigo.ataque > carta_jugador.defenza )
    {
        let danj = (carta_jugador.ataque - carta_enemigo.defenza) / 2;
        let danp = (carta_enemigo.ataque - carta_jugador.defenza) / 2;
        lf_jugador-=danp;
        lf_pc-=danj;
    }
    else if(carta_jugador.ataque > carta_enemigo.defenza)
    {
        lf_pc = lf_pc - (carta_jugador.ataque - carta_enemigo.defenza);
    }else if(carta_enemigo.ataque > carta_jugador.defenza)
    {
        lf_jugador = lf_jugador - (carta_enemigo.ataque - carta_jugador.defenza);
    }
}
function estadoCombate(e) {
    //preparamos el dom para el michi parrafo
    let objdom = document.getElementById("combate");
    //esto crea una etiqueta html
    let parrafo = document.createElement("p");
    //insertamos texto en dicha etiqueta
    parrafo.innerHTML="ataque jugador: "+carta_jugador.ataque+" defenza jugador: "+carta_jugador.defenza+
    " ataque pc: "+carta_enemigo.ataque+" defenza pc: "+carta_enemigo.defenza;
    //ponemos el michi parrafo en el dom
    objdom.appendChild(parrafo);
}
function Campeon() {
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
    document.getElementById("campeon_jugador").innerHTML="<b>"+c_elejido+"</b>";
    alert("Elejiste: "+c_elejido);
    CampeonEnemigo();

}
function CampeonEnemigo(){
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
    document.getElementById("campeon_pc").innerHTML="<b>"+c_enemigo+"</b>";

}
function Atacar(e) {
   // alert(e.target.id);
    switch (e.target.id) {
        case "carta_1":
            carta_jugador = new Carta();
            document.getElementById("carta_1").disabled = true;
            break;
        case "carta_2":
            carta_jugador = new Carta();
            document.getElementById("carta_2").disabled = true;
            break;
        case "carta_3":
            carta_jugador = new Carta();
            document.getElementById("carta_3").disabled = true;           
            break;
        case "carta_4":
            carta_jugador = new Carta();
            document.getElementById("carta_4").disabled = true;           
            break;   
    }
    //alert("Enemigo elije");
    ContraAtacar(e);
    evaluarAtaque();
 //   estadoCombate(e);
}
function ContraAtacar(e) {
    carta_enemigo = new Carta(); 
}

//alert("Bienvenido");
window.onload = function(){
    let campeon = document.getElementById("campeon");
    b_atacar = document.getElementById("atacar");
    picas= document.getElementById("carta_1");
    trebol= document.getElementById("carta_4");
    corazones = document.getElementById("carta_2");
    diamantes= document.getElementById("carta_3");

    picas.addEventListener("click",Atacar);
    trebol.addEventListener("click",Atacar);
    corazones.addEventListener("click",Atacar);
    diamantes.addEventListener("click",Atacar);
    b_atacar.addEventListener("click",estadoCombate)

    campeon.addEventListener("click",Campeon);

}

