function generate()
{
    
    document.querySelector("#pass1").value = randomString(15);
    document.querySelector("#pass2").value = randomString(15);
    document.querySelector("#pass3").value = randomString(15);
    document.querySelector("#pass4").value = randomString(15);

}


function copyPass(id)
{
    let pass = document.querySelector("#pass"+id);

    pass.select();
    pass.setSelectionRange(0, 99999);


    navigator.clipboard.writeText(pass.value);

    document.querySelector("#msg").textContent = "Copied the password: " + pass.value
    setTimeout(function(){
        document.querySelector("#msg").textContent = '';
    }, 2500);

}


function randomString(n)
{
    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()";
    let outputString = "";
    for(let i = 0; i < n; i++)
        outputString += characters[Math.floor(Math.random()* characters.length)];
    
    
    return outputString;

}