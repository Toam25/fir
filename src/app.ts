
fir()
function change():void{
    fir()
}
function fir():void{
    let heightOfOneBody = <HTMLInputElement>document.getElementById("height");
    let nomberOfBody = <HTMLInputElement>document.getElementById("branch");
    let html : string;
    html=setBody(parseInt(heightOfOneBody.value),parseInt(nomberOfBody.value))
    html=setFoot(parseInt(heightOfOneBody.value), html)
    document.getElementById('fir').innerHTML=html;
  }

function setBody(LIMIT:number,stage:number)
:string
{
    let html :string=""
    let space:string=""
    for(let s=0; s<stage;s++){
        let start="*"
        
        for(let i:number=0;i<LIMIT;i++){
          for(let k:number=LIMIT-i;k>0;k--){
               space+="&nbsp&nbsp";
            }
         html+="<p>"+space+start+"</p>"
         start+="**"  
         space=""
     }
    }
    space=""
    return html
}
function setFoot(LIMIT:number, html:string)
:string
{
    let space=""
    for(let k=LIMIT-1;k>0;k--){
        space+="&nbsp&nbsp";
     }
    for(let i=0; i<5; i++){
        html+=space+"***"+"<br>"
    }
    return html
}