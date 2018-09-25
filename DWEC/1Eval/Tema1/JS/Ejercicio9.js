document.write(protegerEmail("diego.garcia@ieslasenia.org"));

function protegerEmail(email) {
    
    email = email.split("@");

    delante = email[0];

    reemplazar = delante.split('');

    for (let i = 4; i < delante.length ; i++) {
        
        reemplazar[i] = ".";
        
    } 
    
    delante = reemplazar.join('');

    return delante + "@" + email[1];

}