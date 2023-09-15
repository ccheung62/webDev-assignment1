let praiseButton = document.querySelector("#praise")
if (praiseButton){
    praiseButton.addEventListener("click", ()=>{
        document.querySelector("#happy").append(":D");
    })
}

let dogButton = document.querySelector("#dog")
if (dogButton){
    dogButton.addEventListener("click", ()=> {
        const dogWidth = document.querySelector("#friendly").offsetWidth * 1.5
        document.getElementById("friendly").style.width = `${dogWidth}px`
    })
}
