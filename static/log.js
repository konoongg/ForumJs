$(document).ready(function(){
    $('#btn').click(async function(){
        let login = $('#login').val()
        let password = $('#password').val()
        let body ={login,password}
        a =  fetch('/auth/log', { method: 'POST', headers: {'Content-Type': 'application/json;charset=utf-8' }, body: JSON.stringify(body)})
        .then(value =>{
            const j = value.json().then( val2 =>{
                
                if (val2.message=='log'){
                    window.location.href = 'http://localhost:5000/'

                 }
            })
        })
    })
})