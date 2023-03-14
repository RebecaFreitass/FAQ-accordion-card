const answers = document.querySelectorAll(".answer-faq")
const questions = document.querySelectorAll(".question-faq-btn")
const faqs = document.querySelectorAll(".faq-box")

faqs.forEach(event =>{
    event.addEventListener("click", ()=>{
        console.log("o button funciona")
    if (event.classList.contains("active")) {
        event.classList.remove("active");
      } else {
        event.classList.add("active");
      }
    
   })
})

    

