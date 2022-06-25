const inpName = document.querySelector("#username")
const inpPaswword = document.querySelector("#password")
const btnSubmit = document.querySelector("#submit_btn")
const btnCreate = document.querySelector("#createUser_btn")
const btnErase = document.querySelector("#Erase_btn")
const userInfoCont = document.querySelector("#user_info_container")
const userInfo = document.querySelector("#user_info")

localStorage.setItem("Username", "div")
localStorage.setItem("Password", "noJavascript")

btnSubmit.onclick = () => {
    const name = inpName.value
    const password = inpPaswword.value

    console.log(`${name}`)
    console.log(`${password}`)

    // Checar se o nome e senha estão certos
    if (name && password) {
        if (name == localStorage.getItem("Username") && password == localStorage.getItem("Password")) {
            location.href = 'login2.html'
        } else {
            if (name == localStorage.getItem("UsernameClient") && password == localStorage.getItem("PasswordClient")) {
                location.href = 'login2.html'                
            } else {
                alert(`ACCESS DENIED`)
                
                userInfoCont.style.display = "block";
                userInfo.innerHTML = `Name: ${name} <br> Password: ${password} <br> The account ${name} don't exist, please, register`
            }
        }
    } else {
        alert(`[ERROR 204] NAME_INPUT / PASSWORD_INPUT EMPTY`)
    }
    
    // Aparecer a informação dada nos inputs
    

    return false
}

btnCreate.onclick = () => {
    const name = inpName.value
    const password = inpPaswword.value

    if (name && password) {
        
        if (name == localStorage.getItem("UsernameClient") && password == localStorage.getItem("PasswordClient")) {
            alert(`This account already exist`)
        }
        localStorage.setItem("UsernameClient", name)
        localStorage.setItem("PasswordClient", password)

    } else {
        alert(`[ERROR 204] NAME_INPUT / PASSWORD_INPUT EMPTY`)
    }
    return false
}


btnErase.onclick = () => {
    localStorage.removeItem("UsernameClient")
    localStorage.removeItem("PasswordClient")
}