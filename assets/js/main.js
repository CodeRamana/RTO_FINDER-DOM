const resetBtn =document.querySelector(".reset")
const tdEl=document.querySelectorAll("tr td")

resetBtn.addEventListener('click',()=>{
    tdEl.forEach((data)=>{
        data.innerText =""
    })
})