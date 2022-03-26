
let url_token = " http://127.0.0.1:8000/token/";//Sua URL
let url = " http://127.0.0.1:8000/catalog/registros/?setor= ESPEI/7RF&cpf=09884422729&excluido=0&concluido=1&data_final__lte=2022-03-31&data_final__gte=2022-01-01";//Sua URL
let url_sa3="https://sa3.rfoc.srf/php/serv/cad_servidor.php?req=e-Bibliotecas:09884422729&chave=09884422729&dados=matSiapeCad|nomePessoa|nomeCargo"
let xhttp = new XMLHttpRequest();
xhttp.open("POST", url_token, false);
xhttp.setRequestHeader('Content-Type','application/json')
xhttp.send(JSON.stringify({'username':'09884422729','password':'Aline18097'}))
senha=JSON.parse(xhttp.responseText)
xhttp.open("GET",url,false)
xhttp.setRequestHeader('Authorization','Bearer '+senha['access'])
xhttp.send()
dados=JSON.parse(xhttp.responseText)
console.log(dados)
let soma_horas=0
for (v=0;v <dados.length;v++){
    soma_horas=soma_horas+dados[v]['horas_trabalhadas']
}

function produz_tabela (dados,id_tabela){
    let tab=document.getElementById(id_tabela)
    let tab_body=document.createElement('tbody')
    let tab_head=document.createElement('thead')
    tab.appendChild(tab_head)
    tab.appendChild(tab_body)
    tab_tr=document.createElement("tr")
    tab_head.appendChild(tab_tr)
    let i=0
    for (j in dados[0]){
        titulo=document.createElement("th")
        titulo.textContent=j
        titulo.id="titulo"+i
        tab_tr.appendChild(titulo)
        i=i+1
    }

    for (i in dados){
        tab_tr=document.createElement("tr")
        tab_body.appendChild(tab_tr)
        let c=0
        for (j in dados[i]){
            tab_td=document.createElement('td')
            tab_td.contentEditable=true
            
            if (c===0) {tab_td.style.width='1%'
                        tab_td.textContent=dados[i][j]
            }
            if (c===1) {tab_td.style.width='1%'
                        tab_td.textContent=dados[i][j]
            }
            if (c===2) {tab_td.style.width='6%'
                        if (dados[i][j]===null){tab_td.textContent=''
                        }
                        else{data=new Date(dados[i][j])
                            data_=data.toLocaleDateString('pt-PT')
                            tab_td.textContent=data_
                        }
            }
            if (c===3) {tab_td.style.width='2%'
                        tab_td.textContent=dados[i][j]
            }
            if (c===4) {tab_td.style.width='2%'
                        tab_td.textContent=dados[i][j]
            }
            if (c===5) {tab_td.style.width='10%'
                        data=new Date(dados[i][j])
                        data_hora=data.toLocaleDateString()+" "+data.toLocaleTimeString()
                        tab_td.textContent=data_hora
            }
            if (c===6) {tab_td.style.width='3%'
                        tab_td.textContent=dados[i][j]
            }
            if (c===7) {tab_td.style.width='4%'
                        tab_td.textContent=dados[i][j]
            }
            if (c===8) {tab_td.style.width='5%'
                        tab_td.textContent=dados[i][j]
            }
            if (c===9) {tab_td.style.width='40%'
                        tab_td.textContent=dados[i][j]
            }
            if (c===10) {tab_td.style.width='6%'
                        if (dados[i][j]===null){tab_td.textContent=''
                        }
                        else{data=new Date(dados[i][j])
                        data_=data.toLocaleDateString('pt-PT')
                        tab_td.textContent=data_
                        }
            }
            if (c===11) {tab_td.style.width='6%'
                        if (dados[i][j]===null){tab_td.textContent=''
                        }
                        else{data=new Date(dados[i][j])
                        data_=data.toLocaleDateString('pt-PT')
                        tab_td.textContent=data_
                        }
            }
            if (c===12) {tab_td.style.width='10%'
                        tab_td.textContent=dados[i][j]
            }
            if (c===13) {tab_td.style.width='6%'
                        tab_td.textContent=dados[i][j]
            }
            if (c===14) {tab_td.style.width='6%'
                        tab_td.textContent=dados[i][j]
            }
            if (c===15) {tab_td.style.width='1%'
                        tab_td.textContent=dados[i][j]
            }
            if (c===16) {tab_td.style.width='10%'
                        tab_td.textContent=dados[i][j]
            }
            if (c===17) {tab_td.style.width='6%'
                        tab_td.textContent=dados[i][j]
            }
            if (c===18) {tab_td.style.width='10%'
                        tab_td.textContent=dados[i][j]
            }
            tab_tr.appendChild(tab_td)
            c=c+1     
        }
    }

}

produz_tabela(dados,"yuri")
/*xhttp.open("GET","https://sa3.rfoc.srf/php/serv/cad_servidor.php?req=e-Bibliotecas:09884422729&chave=09884422729&dados=matSiapeCad|nomePessoa|nomeCargo",true)
xhttp.withCredentials=true
console.log(xhttp.withCredentials)
xhttp.send()*/
