function testando(string){
    var x=eval(string)
    return x
}
function troca(){
    tabela=document.getElementById("yuri")
    linha1=document.querySelector('body > table > tbody > tr:nth-child(1) > td:nth-child(1)').getInnerHTML()
    linha2=document.querySelector('body > table > tbody > tr:nth-child(1) > td:nth-child(2)').getInnerHTML()
    document.querySelector('body > table > tbody > tr:nth-child(1) > td:nth-child(1)').innerHTML=linha2
    document.querySelector('body > table > tbody > tr:nth-child(1) > td:nth-child(2)').innerHTML=linha1
}
function nova(){
      var span = document.getElementsByTagName('span')[0];
      span.textContent = 'interactive'; // change DOM text content
      span.style.display = 'inline';  // change CSSOM property
      // create a new element, style it, and append it to the DOM
      var loadTime = document.createElement('div');
      loadTime.textContent = 'You loaded this page on: ' + new Date();
      loadTime.style.color = 'blue';
      document.body.appendChild(loadTime);
}
function tabela(){
    let tab=document.getElementById("yuri")
    let tab_body=document.createElement('tbody')
    tab.appendChild(tab_body)
    tab_tr=document.createElement("tr")
    tab_body.appendChild(tab_tr)
    let lista=['yuri','aline','miguel']
    for (i in lista){
        tab_td=document.createElement('td')
        tab_td.textContent=lista[i]
        tab_tr.appendChild(tab_td)
    }
}
