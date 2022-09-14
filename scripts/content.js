if(window.location.pathname == '/site/AVA/default.aspx')
{    
    let intervalo;
    const myinterval = () => {
        const usua = document.getElementById('tbLogin');
        const pass = document.getElementById('tbSenha'); 
        if (usua != undefined && pass != undefined) {
            usua.setAttribute('value','262228246');
            usua.dispatchEvent(new Event("change", {bubbles: true}));
            usua.dispatchEvent(new Event("blur", {bubbles: true}));
        
            pass.setAttribute('value','18092002')
            pass.dispatchEvent(new Event("change", {bubbles: true}));
            pass.dispatchEvent(new Event("blur", {bubbles: true}));
            
            setTimeout(() => document.querySelector('input[type="submit"]').click(),500)
            clearInterval(intervalo);
        }
    };
    intervalo = setInterval(myinterval,500);
}
else 
{
    //setTimeout(() => window.location.href = 'https://www.unoeste.br/Site/AVA/Usuario/Perfil.aspx', 500);
}



