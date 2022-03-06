
var url = "https://sa3.rfoc.srf/php/serv/cad_servidor.php?req=e-Bibliotecas:09884422729&chave=09884422729&dados=matSiapeCad|nomePessoa|nomeCargo";//Sua URL

var xhttp = new XMLHttpRequest();
xhttp.open("GET", url, true);

xhttp.onreadystatechange = function(){//Função a ser chamada quando a requisição retornar do servidor
    if ( xhttp.readyState == 4 && xhttp.status == 200 ) {//Verifica se o retorno do servidor deu certo
        console.log(xhttp.responseText);
    }
}

xhttp.send();