//Recebe o email do usuario
let email = document.getElementById('input_email')
//Recebe a senha do usuario
let senha = document.getElementById('input_senha')
//Recebe o botao para efetuar o login
let login = document.getElementById('btn_login')

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

//Funcao para realizar login e gravar dados no console
function realizarLogin(){
    if(!validarEmail()) return

    if(!validarSenha()) return

    alert('Login realizado com sucesso!')

    console.log('Email: ', email.value)
    console.log('Senha: ', senha.value)
}

login.addEventListener('click', realizarLogin)