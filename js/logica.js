function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
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
//alert("Bienvenido");
window.onload = function(){
    let campeon = document.getElementById("campeon");
    campeon.addEventListener("click",Campeon);

}

