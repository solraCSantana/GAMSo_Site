function handleEverything(event) {
	handleClick(event);
	handleHidden(event);
}

function handleClick(event) {
	const buttons = document.querySelectorAll("form .student-button button")
	const clickedButton = event.target;
	if (buttons[0] === clickedButton) {
		unclickedButton = buttons[1];
	} else {
		unclickedButton = buttons[0];
	}

	if(clickedButton.classList.contains('normal') && unclickedButton.classList.contains('normal')) {
		clickedButton.classList.toggle("selected");
		clickedButton.classList.toggle("normal");
		unclickedButton.classList.toggle("unselected");
		unclickedButton.classList.toggle("normal");
		return
	}

	if(unclickedButton.classList.contains('selected')) {
		unclickedButton.classList.toggle("selected");
		unclickedButton.classList.toggle("unselected");
	}

	clickedButton.classList.toggle("selected");
	clickedButton.classList.toggle("unselected");

	if(clickedButton.classList.contains('unselected') && unclickedButton.classList.contains('unselected')) {
		clickedButton.classList.toggle("unselected");
		clickedButton.classList.toggle("normal");
		unclickedButton.classList.toggle("unselected");
		unclickedButton.classList.toggle("normal");
	}
}

function handleHidden(event) {
	redButton = document.querySelector("button[id=red]");
	greenButton = document.querySelector("button[id=green]");
	student = document.querySelector(".ufscar-student");
	outer = document.querySelector(".outer");
	studentElements = document.querySelectorAll(".ufscar-student input");
	outerElements = document.querySelectorAll(".outer input");
	hiddenInput = document.querySelector("input[name=student]");

	if (redButton.classList.contains('selected')) {
		outer.classList.remove('hidden');
		student.classList.add('hidden');
	} else if (greenButton.classList.contains('selected')) {
		outer.classList.add('hidden');
		student.classList.remove('hidden');
	} else {
		outer.classList.add('hidden');
		student.classList.add('hidden');
	}

	if(!outer.classList.contains('hidden')) {
		for (input of outerElements) {
			input.required = true;
			console.log(input);
		}
		hiddenInput.required = false;
	} else {
		for (input of outerElements) {
			input.required = false;
			console.log(input);
		}
	}

	if(!student.classList.contains('hidden')) {
		for (input of studentElements) {
			input.required = true;
			console.log(input);
		}
		hiddenInput.required = false;
	} else {
		for (input of studentElements) {
			input.required = false;
			console.log(input);
		}
	}

	if(student.classList.contains('hidden') && outer.classList.contains('hidden')) {
		hiddenInput.required = true;
	}

	console.log(outerElements);
	console.log(studentElements);
}

const buttonList = document.querySelectorAll("form .student-button button")

for (const button of buttonList) {
	button.addEventListener("click", handleEverything);
}

const areaList = document.querySelectorAll(".areas-grid li")
    
for (const area of areaList) {
    area.addEventListener("click", handleSelectedArea)
}

const chosenAreas =  document.querySelector("input[name=areas]")
let selectedAreas = []

function handleSelectedArea(event) {
    const areaLi = event.target;

    areaLi.classList.toggle("selected");

    const areaId = areaLi.dataset.id;

    const alreadySelected = selectedAreas.findIndex(area => area == areaId);

    if(alreadySelected >= 0) {
        const filteredAreas = selectedAreas.filter( area => area != areaId);
        selectedAreas = filteredAreas;
    } else {
        selectedAreas.push(areaId);
    }

    chosenAreas.value = selectedAreas;
}