// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
let textToSpeak = '';
var speakButton = document.querySelector('#speakButton');

// arrays for buttons 1-5
let arr1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
let arr2 = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
let arr3 = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
let arr4 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
let arr5 = ["on the moon", "on the chair", "in my spaghetty", "in my soup", "on the grass", "in my shoes"];

// buttons 1-5
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
let button4 = document.querySelector('#button4');
let button5 = document.querySelector('#button5');

// array for words
let arrToSpeak = ["","","","",""];

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	textToSpeak = arrToSpeak.join(" ");
	console.log(textToSpeak);
	speakNow(textToSpeak);
}

button1.onclick = function() {
	let rand = Math.floor(Math.random() * arr1.length);
	arrToSpeak[0] = arr1[rand];
}

button2.onclick = function () {
	let rand = Math.floor(Math.random() * arr2.length);
	arrToSpeak[1] = arr2[rand];
}

button3.onclick = function () {
	let rand = Math.floor(Math.random() * arr3.length);
	arrToSpeak[2] = arr3[rand];
}

button4.onclick = function () {
	let rand = Math.floor(Math.random() * arr4.length);
	arrToSpeak[3] = arr4[rand];
}

button5.onclick = function () {
	let rand = Math.floor(Math.random() * arr5.length);
	arrToSpeak[4] = arr5[rand];
}