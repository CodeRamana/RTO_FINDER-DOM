const resetBtn =document.querySelector(".reset")
const tdEl=document.querySelectorAll("tr td")
const span=document.getElementById("span")

const emptyTable =()=>{
    span.innerText=""
    tdEl.forEach((data)=>{
        data.innerText =""
    })
}

resetBtn.addEventListener('click',emptyTable)






const getJSONData = async ()=>{
const response = await fetch("./assets/json/data.json")
return await response.json()

}
const searchRecord =async (value)=>{
    const codes = value.toUpperCase()
    console.log()
    const JSONData =await getJSONData()
    console.log(JSONData)
    const result = JSONData.find((item)=>{
        return item.code === codes || codes.startsWith(item.code)
    })
    span.innerText=result.code
    document.getElementById("id").innerText=result.id
    document.getElementById("code").innerText=result.code
    document.getElementById("location").innerText=result.location
    document.getElementById("type").innerText=result.type
    document.getElementById("district").innerText=result.district

} 
const mainEl =document.querySelector("main")
const inputField = document.getElementById("input-field");

inputField.addEventListener("keydown",(event)=>{
  if (event.key === "Enter") {
    event.preventDefault(); 
    mainEl.classList.remove("hidden")
    let len =inputField.value.length
    if(len>=4){
        searchRecord(inputField.value)
        emptyTable()
    }
    else{
        span.innerText=""
        emptyTable()
    }
  }
});