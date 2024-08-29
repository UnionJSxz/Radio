var chave = localStorage.getItem("ngIdle.expiry");
localStorage.removeItem("ngIdle.expiry");
var newChave = chave.replace('-08-','-05-')
localStorage.setItem("ngIdle.expiry",newChave)
setTimeout(()=>{document.title="TOTVS Manufatura(Limited)"},8000)