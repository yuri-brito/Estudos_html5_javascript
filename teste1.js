
let url_token = " http://127.0.0.1:8000/token/";//Sua URL
let url = " http://127.0.0.1:8000/catalog/registros/";//Sua URL
let url_sa3="https://sa3.rfoc.srf/php/serv/cad_servidor.php?req=e-Bibliotecas:09884422729&chave=09884422729&dados=matSiapeCad|nomePessoa|nomeCargo"
let xhttp = new XMLHttpRequest();
xhttp.open("POST", url_token, false);
xhttp.setRequestHeader('Content-Type','application/json')
xhttp.send(JSON.stringify({'username':'09884422729','password':'Aline18097'}))
senha=JSON.parse(xhttp.responseText)
xhttp.open("GET",url,false)
xhttp.setRequestHeader('Authorization','Bearer '+senha['access'])
xhttp.send()
console.log(JSON.parse(xhttp.responseText));
dados=JSON.parse(xhttp.responseText)
let tab=document.getElementById("yuri")
let tab_body=document.createElement('tbody')
tab.appendChild(tab_body)
tab_tr=document.createElement("tr")
tab_body.appendChild(tab_tr)
for (j in dados[0]){
    titulo=document.createElement("td")
    titulo.textContent=j
    tab_tr.appendChild(titulo)
}

for (i in dados){
    tab_tr=document.createElement("tr")
    tab_body.appendChild(tab_tr)
    
    for (j in dados[i]){
        tab_td=document.createElement('td')
        tab_td.contentEditable=true
        tab_td.textContent=dados[i][j]
        tab_tr.appendChild(tab_td)
    }}


xhttp.open("GET","https://sa3.rfoc.srf/php/serv/cad_servidor.php?req=e-Bibliotecas:09884422729&chave=09884422729&dados=matSiapeCad|nomePessoa|nomeCargo",true)
xhttp.withCredentials=true
console.log(xhttp.withCredentials)

xhttp.send()
