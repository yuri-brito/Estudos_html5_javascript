
let url_token = " http://127.0.0.1:8000/token/";//Sua URL
let url = " http://127.0.0.1:8000/catalog/registros/";//Sua URL
let xhttp = new XMLHttpRequest();
xhttp.open("POST", url_token, false);
xhttp.setRequestHeader('Content-Type','application/json')
xhttp.send(JSON.stringify({'username':'09884422729','password':'Aline18097'}))
senha=JSON.parse(xhttp.responseText)
xhttp.open("GET",url,false)
xhttp.setRequestHeader('Authorization','Bearer '+senha['access'])
xhttp.send()
console.log(JSON.parse(xhttp.responseText));