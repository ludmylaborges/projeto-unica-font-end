function redirecionar() {
    window.location.href = "cadastro.html";
 }

function validarnome(nome){
    
    if(nome.length == 0) {
         return true;
     } else {
        alert("Preencha campo nome corretamente!");
     }
}

function validarsobrenome(sobrenome){
    
    if(sobrenome.length == 0) {
         return true;
     } else {
        alert("Preencha campo sobrenome corretamente!");
     }
}

function validarCPF(cpf){
    var reg = /^\d+$/;
    if(reg.test(cpf)  && cpf.length == 11) {
         return true;
     } else {
        alert('CPF invalido');
     }
}

function validaremail(email){
    
    if(email.length =='@' && email.length =='.') {
         return true;
     } else {
        alert("Preencha campo e-mail corretamente!");
     }
}

function validartelefone(telefone){
    
    if(telefone.length == 0) {
         return true;
     } else {
        alert("Preencha campo telefone corretamente!");
     }
}

function selectType(tipo){
    if(tipo == "f"){
    document.getElementById('fisica').setAttribute('style', 'display:block');
    document.getElementById('juridica').setAttribute('style', 'display:none');
    }
    else{
        document.getElementById('fisica').setAttribute('style', 'display:none');
    document.getElementById('juridica').setAttribute('style', 'display:block');
    }

}
function validarnome_j(nome_j){
    
    if(nome_j.length == 0) {
         return true;
     } else {
        alert("Preencha campo nome corretamente!");
     }
}

function validarnome_j(cnpj){
    
    if(cnpj.length == 0) {
         return true;
     } else {
        alert("Preencha campo nome corretamente!");
     }
}

function validaremail(email_j){
    
    if(email_j.length =='@' && e-mail_j.length =='.') {
         return true;
     } else {
        alert("Preencha campo e-mail corretamente!");
     }
}

function validartelefone(telefone_j){
    
    if(telefone_j.length == 0) {
         return true;
     } else {
        alert("Preencha campo telefone corretamente!");
     }
}

$('#blogCarousel').carousel({
    interval: 5000
});