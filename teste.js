function testando(string){
    x=eval(string)
    console.log(Date())
    return x
}
function troca(){
    tabela=document.getElementById("faturamento")
    tabela.getInnerHTML()
    linha1=document.querySelector('body > table > tbody > tr:nth-child(2) > td:nth-child(1)').getInnerHTML()
    linha2=document.querySelector('body > table > tbody > tr:nth-child(2) > td:nth-child(2)').getInnerHTML()
    document.querySelector('body > table > tbody > tr:nth-child(2) > td:nth-child(1)').innerHTML=linha2
    document.querySelector('body > table > tbody > tr:nth-child(2) > td:nth-child(2)').innerHTML=linha1
    console.log(tabela.textContent)
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