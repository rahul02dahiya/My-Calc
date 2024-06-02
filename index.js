
let showData = "";

document.querySelector("#number-pad").addEventListener("click",(e)=>{

    let clickedData = e.target.textContent;
    if (clickedData === "=") {
        calculateResult() ;
    }
    else{
        showData += clickedData;
        const ans = document.getElementById("ans");
        ans.innerHTML = showData ;
        console.log(showData)
    }
   
})

document.querySelector("#clear-btn").addEventListener("click",()=>{
    document.getElementById("ans").innerHTML = "" ;
    showData = "";
})

function calculateResult() {
    const ans = document.getElementById("ans");
    try {
        showData = eval(ans.innerText).toFixed(6).replace(/\.?0+$/, '');
        ans.innerText = showData;

    } catch {
        ans.innerText = "Error";
        showData = "";
    }
}