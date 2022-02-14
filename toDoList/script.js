function mainLogic(){
    var EleContainer = document.createElement("div");
    EleContainer.className = "EleContainer";
    document.getElementById("items").appendChild(EleContainer);
    var CreateTask = document.createElement("p");
    CreateTask.innerHTML = document.getElementById("inputText").value;
    EleContainer.appendChild(CreateTask);
    //Strike the paragraph element while clicking on "Done" button
    var taskDone = document.createElement("button");
    taskDone.innerHTML = "Done";
    taskDone.className = "taskDone";
    EleContainer.appendChild(taskDone);
    var StrikeEle = document.getElementsByClassName("taskDone");
    var j;
    for(j=0;j<StrikeEle.length;j++){
        StrikeEle[j].onclick = function(){
            var StrikeEleDiv = this.parentElement;
            var childDiv = StrikeEleDiv.children[0];
            childDiv.style.textDecoration = "line-through";
        }
    }
    //Deleting a tak while clicking delete button
    var taskDelete = document.createElement("button");
    taskDelete.innerHTML = "Delete"; 
    taskDelete.className = "taskDelete";
    EleContainer.appendChild(taskDelete);
    var DelEle = document.getElementsByClassName("taskDelete");
    for(var i=0;i<DelEle.length;i++){
        DelEle[i].onclick = function(){
            var DelEleDiv = this.parentElement;
            DelEleDiv.style.display = "none";
        }
    }
}