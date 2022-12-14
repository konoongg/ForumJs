$(document).ready(function(){
    $('#btn').click(async function(){
        let login = $('#login').val()
        let password = $('#password').val()
        let mail = $('#mail').val()
        let body ={login,password,mail}
        a =  fetch('/auth/reg', { method: 'POST', headers: {'Content-Type': 'application/json;charset=utf-8' }, body: JSON.stringify(body)})
        .then(value =>{
            const j = value.json().then( val2 =>{
                if (val2.message=='reg'){
                    window.location.href = 'http://localhost:5000/'

                }
            })
        })
    })
})