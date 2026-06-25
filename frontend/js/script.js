const button = document.getElementById("addGoalBtn");

const input = document.getElementById("goalInput");

const goalList = document.getElementById("goalList");



let goals = JSON.parse(localStorage.getItem("goals")) || [];



function displayGoals(){

    goalList.innerHTML = "";


    goals.forEach(function(goal){

    createGoalElement(goal);

});

}



function createGoalElement(goal){


    const goalElement = document.createElement("p");

    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";

    checkbox.checked = goal.completed;


    checkbox.onclick = function(){

    goal.completed = checkbox.checked;


    if(goal.completed){

        goalElement.classList.add("completed");

    }

    else{

        goalElement.classList.remove("completed");

    }


    localStorage.setItem(
        "goals",
        JSON.stringify(goals)
    );

};


    goalElement.appendChild(checkbox);


    goalElement.appendChild(
    document.createTextNode(goal.text)
);

if(goal.completed){

    goalElement.classList.add("completed");

}


    const deleteButton = document.createElement("button");


    deleteButton.textContent = "Delete";


    deleteButton.className = "deleteBtn";



    deleteButton.onclick = function(){


        goals = goals.filter(function(item){

            return item !== goal;

        });


        localStorage.setItem("goals", JSON.stringify(goals));


        displayGoals();

    };



    goalElement.appendChild(deleteButton);


    goalList.appendChild(goalElement);

}



function addGoal(){


    const goalText = input.value;



    if(goalText === ""){

        return;

    }



    goals.push({

    text: goalText,

    completed: false

});



    localStorage.setItem("goals", JSON.stringify(goals));



    displayGoals();



    input.value = "";

}



button.onclick = function(){

    addGoal();

};



input.addEventListener("keypress", function(event){


    if(event.key === "Enter"){

        addGoal();

    }


});



displayGoals();