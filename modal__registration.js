document.addEventListener("DOMContentLoaded",()=>{
    const mainBtnReg = document.getElementById("main-btn-reg")
    const modalRegistration = document.getElementById("modal__registration")
    const modalRegistrationBg = document.getElementById("modal__registration_bg")
    const modalRegistrationContent = document.getElementById("modal__registration_content")
    
    mainBtnReg.addEventListener("click", ()=>{
        modalRegistration.classList.toggle("modal__registration-open")
    })
    modalRegistrationBg.addEventListener("click", ()=>{
        modalRegistration.classList.toggle("modal__registration-open")
    })
    modalRegistrationContent.addEventListener("submit", (e)=>{
        e.preventDefault()
        modalRegistration.classList.toggle("modal__registration-open")
        
        const form = e.target 
        alert(`Почта ${form["modal__registration_email_input"].value} 
        Пароль ${form["modal__registration_password_input"].value}`)
    })
    
})