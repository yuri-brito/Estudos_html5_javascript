function testando(string){
    var x=eval(string)
    return x
}
function troca(){
    tabela=document.getElementById("faturamento")
    tabela.getInnerHTML()
    linha1=document.querySelector('body > table > tbody > tr:nth-child(2) > td:nth-child(1)').getInnerHTML()
    linha2=document.querySelector('body > table > tbody > tr:nth-child(2) > td:nth-child(2)').getInnerHTML()
    document.querySelector('body > table > tbody > tr:nth-child(2) > td:nth-child(1)').innerHTML=linha2
    document.querySelector('body > table > tbody > tr:nth-child(2) > td:nth-child(2)').innerHTML=linha1
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
    var tab=document.getElementById("yuri")
    tab.innerHTML='<colgroup><col width="77" style="mso-width-source:userset;mso-width-alt:2676;width:58pt">\
    <col width="64" span="4" style="width:48pt">\
    </colgroup><tbody><tr height="19" style="height:14.5pt">\
    <td height="19" width="77" style="height:14.5pt;width:58pt">Data</td>\
    <td width="64" style="width:48pt">Subtotal</td>\
    <td width="64" style="width:48pt">Desconto</td>\
    <td width="64" style="width:48pt">Frete</td>\
    <td width="64" style="width:48pt">Total</td>\
    </tr>\
    <tr height="19" style="height:14.5pt">\
    <td height="19" class="xl65" align="right" style="height:14.5pt">08/12/2021</td>\
    <td align="right">623</td>\
    <td align="right">9,25</td>\
    <td align="right">0</td>\
    <td align="right">613,75</td>\
    </tr>\
    <tr height="19" style="height:14.5pt">\
    <td height="19" class="xl65" align="right" style="height:14.5pt">07/12/2021</td>\
    <td align="right">455</td>\
    <td align="right">3,5</td>\
    <td align="right">0</td>\
    <td align="right">451,5</td>\
    </tr>\
    <tr height="19" style="height:14.5pt">\
    <td height="19" style="height:14.5pt"></td>\
    <td align="right">1078</td>\
    <td align="right">12,75</td>\
    <td align="right">0</td>\
    <td align="right">1065,25</td>\
    </tr>\
    <!--[if supportMisalignedColumns]-->\
    <tr height="0" style="display:none">\
    <td width="77" style="width:58pt"></td>\
    <td width="64" style="width:48pt"></td>\
    <td width="64" style="width:48pt"></td>\
    <td width="64" style="width:48pt"></td>\
    <td width="64" style="width:48pt"></td>\
    </tr>\
    <!--[endif]-->\
    </tbody>'
}