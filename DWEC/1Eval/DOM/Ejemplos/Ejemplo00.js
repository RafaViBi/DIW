function sacarValores() {
    
    var array = document.getElementsByTagName("p");

    for (let i = 0; i < array.length; i++) {

        alert(array[i].innerText);

    }

}