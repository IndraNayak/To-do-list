let block=document.querySelector(".addition");
let task=document.querySelector("input");
let add=document.querySelector("button");
let tasksArray=[];
add.onclick=function(){
	if(task.value===""){
		alert("Enter a task");
	}
	else if(tasksArray.includes(task.value)){
		alert("This task is already present in the list");
	}
	else{
		tasksArray.push(task.value);	
		var newDiv = document.createElement("button"); 
		newDiv.innerHTML=task.value;
	    block.appendChild(newDiv);
	    newDiv.setAttribute("onclick","removeThisElement(this)");
	    newDiv.setAttribute("class","element-padding");
	    task.value="";
}
}

function removeThisElement(ele){
	block.removeChild(ele);
}



