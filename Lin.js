
var chave = localStorage.getItem("ngIdle.expiry");

localStorage.removeItem("ngIdle.expiry");

var newMonth = "05";
var newChave = chave.substring(0, 32) + newMonth + chave.substring(34);

localStorage.setItem("ngIdle.expiry",newChave)

setTimeout(()=>{document.title="TOTVS Manufatura(Limited)"},8000)
