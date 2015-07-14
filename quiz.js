var correct = 0
var question1 = prompt('What is the name of Jon Snow\'s mother?');
if ( question1 === 'Lyanna') {
	document.write("<p>That's right!</p>");
	correct += 1;
} 
var question2 = prompt('What king was killed by a boar?');
if ( question2 === 'Robert') {
	document.write("<p>That's right!</p>");
	correct += 1;
} 
var question3 = prompt('Who killed Tywin?');
if ( question3 === 'Tyrion') {
	document.write("<p>That's right!</p>");
	correct += 1;
} 
var question4 = prompt('What is Oberyn\'s last name?');
if ( question4 === 'Martell') {
	document.write("<p>That's right!</p>");
	correct += 1;
} 
var question5 = prompt('What is coming?');
if ( question5 === 'Winter') {
	document.write("<p>That's right!</p>");
	correct += 1;
}
var question6 = prompt('')

document.write('<p>You got ' + correct + ' right answers</p><b />');
document.write('<br />');

if ( correct ===  5){
	document.write('You\'ve earned yourself a gold crown. The throne is yours...');
} else if ( correct === 4 || correct === 3){
	document.write('You\'ve earned yourself a silver crown. You have valor but there is work to be done.');
} else if ( correct == 1 || correct == 2){
	document.write('You\'ve earned yourself a bronze crown. Get in line!');
} else {
	document.write('No crown! Off with your head!');
}
