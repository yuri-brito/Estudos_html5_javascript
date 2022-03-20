var pki = new LacunaWebPKI();
pki.init();
var request = {
    // URL do servico
    url: "https://sa3.rfoc.srf/php/serv/cad_servidor.php?req=e-Bibliotecas:09884422729&chave=09884422729&dados=matSiapeCad|nomePessoa|nomeCargo",
    method: 'get'
}
 
request.certificateThumbprint = $('#certificateSelect').val();
pki.sendAuthenticatedRequest(request).success(function (response) {
    // Usa a resposta "response"
});
console.log(response)