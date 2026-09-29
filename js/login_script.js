let email = document.getElementById('input_email')
let senha = document.getElementById('input_senha')
let login = document.getElementById('btn_login')

function validarEmail(){

    if(email.value===""){
        alert("Por favor, digite seu email")
        return false
    } else if(!email.value.includes("@")){
        alert("Por favor, digite um email válido")
        return false
    }else return true
}

function validarSenha(){
    if(senha.value===""){
        alert("Por favor, digite sua senha")
        return false
    }else return true
}

function realizarLogin(){
    if(!validarEmail()) return

    if(!validarSenha()) return

    alert('Login realizado com sucesso!')

    console.log('Email: ', email.value)
    console.log('Senha: ', senha.value)
}

login.addEventListener('click', realizarLogin)