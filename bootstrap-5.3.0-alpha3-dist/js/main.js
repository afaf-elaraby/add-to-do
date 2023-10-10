function addTodo(){
    // botton   ///
    let textBot = document.getElementById("textBot")
    // input text ///
    let textInput = document.getElementById("textInput")

    textBot.addEventListener("click",function() {

        if(textInput.value == ""){
    alert("Please enter your task !!!")
    }
        else{
     let mainContainer = document.getElementById("mainContainer")
     let task = ` <div class="" id="task">
   <div id="right">
   <p class="paragraphe">${textInput.value} </p>
   </div>
   <div id="left">
       <i class="fa-solid fa-check"></i>
       <i class="fa-solid fa-trash"></i>
   </div>
</div>`;
 
mainContainer.innerHTML += task;

    }

    textInput.value = "";

  mainContainer.addEventListener("click",function(e){
    if(e.target.className == "fa-solid fa-check"){
     e.target.parentElement.parentElement.getElementsByClassName("paragraphe")[0].classList.toggle("DoneTask");
}
  else if(e.target.className == "fa-solid fa-trash"){
    e.target.parentElement.parentElement.remove();
  }
    
});
  
    });

}

addTodo();













