//var Date = prompt('Dime la fecha');

//var Date = new Date();

document.write(comprobarDate(new Date));

function comprobarDate(Date) {
    return ({}).toString.call(Date).match(/\s([a-z|A-Z]+)/)[1]
}
