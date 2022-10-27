function verificarSenha() {
    var senha = document.getElementById('caixaDeTexto').value;

    let forca = 0;

    if ((senha.length >= 4) && (senha.length <= 7)) {
        forca += 10;


    } else if (senha.length > 7) {
        forca += 25;
        document.getElementById('caracter').innerHTML = "<span style= 'color:#A2FF33'>Possui mais do que 7 caracteres </span>"
        document.getElementById('numero').innerHTML = "<span style= 'color:#A2FF33'>Possui numero</span>"
    } else {
        document.getElementById('caracter').innerHTML = "<span style= 'color:#FFFFFF'>Precisa de no minimo 7 caracteres </span>"

    }
    if ((senha.length > 5) && (senha.match(/[0-9]+/))) {
        forca += 10
        document.getElementById('numero').innerHTML = "<span style= 'color:#A2FF33'>Possui numero</span>"
    } else {
        document.getElementById('numero').innerHTML = "<span style= 'color:#FFFFFF'>Precisa de numero</span>"
    }

    if ((senha.length > 5) && (senha.match(/[a-z]+/))) {
        forca += 10
        document.getElementById('minuscula').innerHTML = "<span style= 'color:#A2FF33'>Possui 5 caracteries e letra minuscula</span>"
    } else {
        document.getElementById('minuscula').innerHTML = "<span style= 'color:#FFFFFF'>Precisa de letra maiuscula</span>"
    }

    if ((senha.length > 5) && (senha.match(/[A-Z]+/))) {
        forca += 10
        document.getElementById('maiuscula').innerHTML = "<span style= 'color:#A2FF33'>Possui 5 caracteries e letra maiuscula</span>"
    } else {
        document.getElementById('maiuscula').innerHTML = "<span style= 'color:#FFFFFF'>Precisa de letra minúscula</span>"
    }
    if ((senha.length > 5) && (senha.match(/[!@#$%~,.;:]+/))) {
        forca += 30
        document.getElementById('especial').innerHTML = "<span style= 'color:#A2FF33'>Possui 5 caracteries e ao menos 1 especial</span>"
    } else {
        document.getElementById('especial').innerHTML = "<span style= 'color:#FFFFFF'>Precisa de um caracter especial</span>"
    }

    printForca(forca)
}

function printForca(forca) {

    if (forca < 30) {
        document.getElementById('forcaP').innerHTML = "<span style= 'color: #FF0000'>Fraca</span>"
    } else if ((forca >= 30) && (forca < 50)) {
        document.getElementById('forcaP').innerHTML = "<span style= 'color: #F3FF33'>Media</span>"
    } else if ((forca >= 50) && (forca < 70)) {
        document.getElementById('forcaP').innerHTML = "<span style= 'color: #A2FF33'>Forte</span>"
    } else if ((forca >= 70)) {
        document.getElementById('forcaP').innerHTML = "<span style= 'color: #42FF33'>Muito Forte</span>"
    }



}