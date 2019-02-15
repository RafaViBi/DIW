document.addEventListener("DOMContentLoaded", cargar, false);

function cargar() {
    
    document.getElementById("continuarCompra").addEventListener("click",volver);
    
}

function updateCartItem(obj,id){
    $.get("AccionCarta.php", {action:"updateCartItem", id:id, qty:obj.value}, function(data){
        if(data == 'ok'){
            location.reload();
        }else{
            alert('Cart update failed, please try again.');
        }
    });
}

function volver(){
    window.history.back();
}