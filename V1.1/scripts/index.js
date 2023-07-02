/*====================================================================== */
'use strict'
/*============= Declarações das variareis globais======================= */
/*====================================================================== */
const btn_email = document.querySelector('.btn-email')
const div_send = document.querySelector('.send')

const btn_senha = document.querySelector('.btn-senha')
const btn_nome = document.querySelector('.btn-nome')

const div_senha = document.querySelector('.div-senha')
const div_senha1 = document.querySelector('.div-senha1')

const div_nome = document.querySelector('.div-nome')
const div_nome1 = document.querySelector('.div-nome1')
/*====================================================================== */
btn_email.addEventListener('click', () => {
    let emailTxt = document.getElementById('email').value
    let emailtxt = document.getElementById('email')

    if (emailTxt == '') {
        document.querySelector('#txtE').textContent = "Enter your email!"
        document.getElementById('email').focus()
    } 
    else if(!(/\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(emailTxt)) ) {

        document.querySelector('#txtE').textContent = "Email inválido!"
        document.querySelector('#txtE').style.color = "red"
   

        return false;
    }
    
    else {

        document.querySelector('#txtE').textContent = ""
        div_senha.style = 'display: block'

        div_senha1.style = 'display: block'
        btn_email.style = 'display: none'
        document.getElementById('password').focus()

 
        emailtxt.addEventListener('click', () => {
            btn_email.style = 'display: block'
        })
    }
})

btn_senha.addEventListener('click', () => {
    let password = document.getElementById('password').value

    let passworD = document.getElementById('password')
    let tamanho = password.length
 
    if (password == '') {
        document.querySelector('#txtS').textContent = "Campo vazio!"
    }
    else if(tamanho >= 0 && tamanho < 8){
        document.querySelector('#txtS').textContent = "Senha deve ter no minimo 8 caracteres!"
        
    }
    else {
        document.querySelector('#txtS').textContent = ""
        div_nome.style = 'display: block'
        div_nome1.style = 'display: block'

        btn_senha.style = 'display: none'
        document.getElementById('username').focus()

        passworD.addEventListener('click', () => {
            btn_senha.style = 'display: block'
        })
    }
})
btn_nome.addEventListener('click', ()=>{
    let username = document.getElementById('username').value

    if (username == '') {
        document.querySelector('#txtU').textContent = "Campo vazio!"
    } else {
        div_send.style = 'display: block'
        btn_nome.style = 'display: none'
    
        username.addEventListener('click', () =>{
            btn_nome.style = 'display: block'
        })
    }


})