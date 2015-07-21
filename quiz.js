var question; // Code by Justin Smith
var answer;  
var response;
var html = '';
var right = [];
var wrong = [];

var correct = 0;
var questions = [
	{
		question: 'What is the name of Jon Snow\'s mother?', 
		answer: 'Lyanna'
	},
	{	
		question: 'What king was killed by a boar?', 
		answer: 'Robert',
	},
	{	
		question: 'Who killed Tywin?',
		answer: 'Tyrion'
	},
	{
		question: 'What is Oberyn\'s last name?',
		answer: 'Martell'
	},
	{
		question: 'What is coming?', 
		answer: 'Winter'
	},
	{
		question: 'Who killed Ygritte?', 
		answer: 'Olly'
	}

];

function print(message) {
	var outputDiv = document.getElementById('output');
	outputDiv.innerHTML = message;
}

function buildList(arr) {
	var listHTML = '<ol>';
	for (var i = 0; i < arr.length; i += 1){ 
		listHTML += '<li>' + arr[i] + '</li>';
	}
	listHTML += '</ol>';
	return listHTML;
}


for (var i = 0; i < questions.length; i += 1 ){
	question = questions[i].question;
	answer = questions[i].answer;
	response = prompt(question);
	if (response === answer){
		correct += 1;
		right.push(question);
	} else {
		wrong.push(question);
	}
}

if (right.length > 0){
	html += '<h2>You got these questiosn right: </h2>';
	html += buildList(right);}
if (wrong.length > 0){
	html +='<h2>You got these questions wrong:</h2>';
	html += buildList(wrong);}
	
print(html);


if ( correct ===  6){
	document.write('<h1>You\'ve earned yourself a gold crown. The throne is yours...</h1>');
} else if ( correct === 5 || correct === 4){
	document.write('<h1>You\'ve earned yourself a silver crown. You have valor but there is work to be done.</h1>');
} else if ( correct === 3 || correct === 2){
	document.write('<h1>You\'ve earned yourself a bronze crown. Get in line!</h1>');
} else {
	document.write('<h1>No crown! Off with your head!</h1>');
} 
