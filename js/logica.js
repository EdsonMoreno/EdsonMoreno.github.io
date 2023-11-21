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
}
//alert("Bienvenido");
window.onload = function(){
    let campeon = document.getElementById("campeon");
    campeon.addEventListener("click",Campeon);

}

