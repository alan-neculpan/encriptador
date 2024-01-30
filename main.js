
eventoClickEncriptar();

function encriptarMensaje () {    
    let mensaje = document.getElementById('mensaje').value.toLowerCase();
    
    var textoEncriptado = mensaje.replace(/e/img, 'enter');
    var textoEncriptado = textoEncriptado.replace(/o/img, 'ober');
    var textoEncriptado = textoEncriptado.replace(/i/img, 'imes');
    var textoEncriptado = textoEncriptado.replace(/a/img, 'ai');
    var textoEncriptado = textoEncriptado.replace(/u/img, 'ufat');

    document.getElementById('text_area').innerHTML = textoEncriptado;
}

function desEncriptarMensaje () {
    let mensaje = document.getElementById('mensaje').value.toLowerCase();
    
    var textoDesEncriptado = mensaje.replace(/enter/img, 'e');
    var textoDesEncriptado = textoDesEncriptado.replace(/ober/img, 'o');
    var textoDesEncriptado = textoDesEncriptado.replace(/imes/img, 'i');
    var textoDesEncriptado = textoDesEncriptado.replace(/ai/img, 'a');
    var textoDesEncriptado = textoDesEncriptado.replace(/ufat/img, 'u');

    document.getElementById('text_area').innerHTML = textoDesEncriptado;
}

function copiarMensaje() {
    var textArea = document.getElementById('text_area');
    textArea.select();
    document.execCommand('copy');
}

function eventoClickEncriptar() {
    let botonCopiar = document.getElementById('btn_copiar');
    let botonEncriptar = document.getElementById('btn_encriptar');

    botonEncriptar.addEventListener('click', function() {
        botonCopiar.style.display = 'block';
    });
}
