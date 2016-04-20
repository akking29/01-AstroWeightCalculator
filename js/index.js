//create onclick function thats called when calculate button is pressed to perform calculation
function calc(){ 

	var userWeight = document.getElementById('userWeight').value; 
	//get user input value
	console.log(userWeight);
	//test if its working
	var userSelect = document.getElementById('planet').value;
	//get user selection (value) from option
	var planetSelect = document.getElementById('planet').selectedOptions[0].text

	document.getElementById('answer').innerHTML = 
	'If you were on ' + planetSelect + ' you would be ' + userWeight * userSelect + ' pounds.'; 
	// perform calculation and display in 'answer <p>'
	}

