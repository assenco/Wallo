//Recebe o nome do usuario
let nome = document.getElementById('input_nome')
//Recebe o email do usuario
let email = document.getElementById('input_email')
//Recebe a senha do usuario
let senha = document.getElementById('input_senha')
//Recebe a confirmação de senha do usuario
let confirmarSenha = document.getElementById('input_confirmar_senha')
//Recebe o telefone do usuario
let telefone = document.getElementById('input_telefone')
//Recebe o botao de realizar cadastro
let botao = document.getElementById('btn_cadastro')

//Funcao para verificar se o campo nome esta preenchido
function validarNome(){
    if(nome.value===""){
        alert("Por favor, digite seu nome")
        return false
    }else return true
}

//Funcao para verificar se o campo telefone esta preenchido
function validarTelefone(){
    if(telefone.value===""){
        alert("Por favor, digite seu telefone")
        return false
    }else return true
}

//Funcao para validar o formato do email e se o campo esta preenchido
function validarEmail(){
    //Verifica se o campo esta preenchido
    if(email.value===""){
        alert("Por favor, digite seu email")
        return false
    //Verifica se o email possui "@"
    } else if(!email.value.includes("@")){
        alert("Por favor, digite um email válido")
        return false
    }else return true
}

//Funcao para verificar se o campo senha esta preenchido
function validarSenha(){
    if(senha.value===""){
        alert("Por favor, digite sua senha")
        return false
    }else return true
}

//Funcao para verificar se o campo confirmar senha esta preenchido
function validarConfirmarSenha(){
    if(confirmarSenha.value===""){
        alert("Por favor, confirme sua senha")
        return false
    }else return true
}

//Função para comparar se senhas são iguais
function compararSenha(){
    if(senha.value!==confirmarSenha.value){
        alert("As senhas não são iguais")
        return false
    }else return true
}

//Funcao para realizar login e gravar dados no console
function realizarLogin(){

    if(!validarNome()) return

    if(!validarTelefone()) return

    if(!validarEmail()) return

    if(!validarSenha()) return

    if(!validarConfirmarSenha()) return

    if(!compararSenha()) return

    console.log('Nome: ', nome.value)
    console.log('Telefone: ', telefone.value)
    console.log('Email: ', email.value)
    console.log('Senha: ', senha.value)

    window.location.href = 'pesquisa.html'
}

botao.addEventListener('click', realizarLogin)