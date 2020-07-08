let allElements = document.querySelectorAll('Div');
addclicks(allElements)

function addclicks(arr){
    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener('click', changeColor);
        
    }
}

//document.body.setAttribute('style','color:darkgreen');
    // template literal! '',"",`${};

function changeColor(e){
    console.log(e.target.innerHTML)
   document.body.style.color = e.target.innerHTML

}










