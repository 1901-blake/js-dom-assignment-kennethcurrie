/*-----------------------------------------------------------------------------------
PART II

Part II will focus on Javascript's ability to manipulate the DOM.
Use the provided index.html
-----------------------------------------------------------------------------------*/

/*1. USA
Define function getUSA()
Find the html element that contains "USA".
Print that element's contents.*/

function getUSA(){
	const fullList = document.querySelectorAll("*");
	let filteredList = [];
	fullList.forEach(Element =>{
		if(Element.innerText === "USA"){
			filteredList.push(Element);
		}
	})
	filteredList.forEach(Element =>{
		console.log(Element.outerHTML);
	})
}

getUSA();

/*2. Sales
Define function getPeopleInSales()
Print the names of all the people in the sales department.*/

function getPeopleInSales(){
	const fullList = document.querySelectorAll("tr");
	let filteredList = [];

	filteredList = [];
	fullList.forEach(Element =>{
		if(Element.innerText.includes("Sales")){
			filteredList.push(Element.firstElementChild);
		}
	})
	filteredList.forEach(Element =>{
		console.log(Element.innerText);
	})
}

getPeopleInSales();

/*3. Click Here
Define function getAnchorChildren()
Find all anchor elements with a <span> child.
Print the contents of <span>*/

function getAnchorChildren(){
	const anchorList = document.querySelectorAll("a span");
	anchorList.forEach(Element =>{
		console.log(Element.innerHTML);
	})
}

getAnchorChildren()

/*4. Hobbies
Define function getHobbies()
Find all checked options in the 'skills' select element.
Print the value and the contents.*/

function getHobbies(){ //actually  gets skills
	const fullList = document.querySelectorAll("select[name=skills] option");
	let filteredList = [];

	fullList.forEach(Element =>{
		if(Element.selected){
		filteredList.push(Element);
		}
	})
	
	filteredList.forEach(Element =>{
		console.log(`${Element.value}\t${Element.innerText}`);
	})
}

getHobbies();

/*5. Custom Attribute
Define function getCustomAttribute()
Find all elements with "data-customAttr" attribute
Print the value of the attribute.
Print the element that has the attribute.*/

function getCustomAttribute(){
	const attributeList = document.querySelectorAll("[data-customAttr]");
	
	attributeList.forEach(Element =>{
		console.log(Element.attributes["data-customAttr"]);
	})

	attributeList.forEach(Element =>{
		console.log(Element.outerHTML);
	})
}

getCustomAttribute()

/*6. Sum Event
NOTE: Write unobtrusive Javascript
Regarding these elements:
	<input id="num1" class="nums" type="text"/>
	<input id="num2" class="nums" type="text"/>
	<h3>Sum: <span id="sum"></span></h3>

Define onchange event handler.
Add <input> element values.
Put the sum in the <span> element.
If values cannot be added, put "Cannot add" in the <span> element*/

function add(){
	numOne = document.getElementById("num1").value;
	numTwo = document.getElementById("num2").value;
	console.log(`"${numOne}", "${numTwo}"`)
	try{
		if (numOne===''||numTwo===''||isNaN(Number(numOne))||isNaN(Number(numTwo))){
			document.getElementById("sum").innerText = 'Cannot add';
		} else {
			document.getElementById("sum").innerText = Number(numOne)+Number(numTwo);
		}
	}catch{
		document.getElementById("sum").innerText = 'Cannot add!';
	}
}

function setAdd(){
	document.getElementById("num1").setAttribute('onchange','add()');
	document.getElementById("num2").setAttribute('onchange','add()');
}

setAdd();

/*7. Skills Event
NOTE: Write unobtrusive Javascript
When user selects a skill, create an alert with a message similar to:
	"Are you sure CSS is one of your skills?"
NOTE: no alert should appear when user deselects a skill.*/

function skillPopUp(selected){
	window.alert(`"Are you sure ${selected} is one of your skills?"`);
}

function setSkillPopUp(){
	empList = document.getElementsByName("skills");
	empList.forEach(Element =>{
		Element.setAttribute('onchange','skillPopUp(this.value)');
	});
}

setSkillPopUp();

/*8. Favorite Color Event
NOTE: Write unobtrusive Javascript
NOTE: This is regarding the favoriteColor radio buttons.
When a user selects a color, create an alert with a message similar to:
	"So you like green more than blue now?"
In this example, green is the new value and blue is the old value.
Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor*/

function ColorPopUp(selected){
	if(color !== ''){
		window.alert(`"So you like ${selected} more than ${color} now?"`);
	}
	color = selected;
}

let color = '';

function setColorPopUp(){
	empList = document.getElementsByName("favoriteColor");
	empList.forEach(Element =>{
		Element.setAttribute('onchange','ColorPopUp(this.value)');
	});
}

setColorPopUp();

/*9. Show/Hide Event
NOTE: Write unobtrusive Javascript
When user hovers over an employees name:
	Hide the name if shown.
	Show the name if hidden.*/

function showHide(text){
	console.log(text);
	fullList = document.querySelectorAll(".empName");
	filteredList = [];
	fullList.forEach(Element =>{
		if(Element.innerHTML === text){
			console.log(Element.innerHTML);
			if(Element.innerHTML.includes("visibility:visible")){
				Element.innerHTML = Element.innerHTML.replace('visibility:visible', 'visibility:hidden');
			}else{
				Element.innerHTML = Element.innerHTML.replace('visibility:hidden', 'visibility:visible');
			}
		}
	});
}

function setShowHide(){
	empList = document.querySelectorAll(".empName");
	empList.forEach(Element =>{
		Element.innerHTML = `<div style="visibility:visible">${Element.innerHTML}</div>`;
	});
	empList.forEach(Element =>{
		Element.setAttribute('onmouseover','showHide(this.innerHTML)');
	});
}

setShowHide();

/*10. Current Time
Regarding this element:
	<h5 id="currentTime"></h5>
Show the current time in this element in this format: 9:05:23 AM
The time should be accurate to the second without having to reload the page.*/

function setTime(){
	document.getElementById("currentTime").innerHTML = new Date().toLocaleTimeString();
}

setInterval(setTime, 500);

/*11. Delay
Regarding this element:
	<p id="helloWorld">Hello, World!</p>
Three seconds after a user clicks on this element, change the text to a random color.*/

function helloWorldOnClick(){
	document.getElementById("helloWorld").setAttribute('style',`color:#${Math.floor(Math.random()*0xFFFFFF).toString(16)}`)
}

function setHelloWorldOnClick(){
 document.getElementById("helloWorld").setAttribute("onclick", "setTimeout(helloWorldOnClick,3000);")
}

setHelloWorldOnClick()

/*12. Walk the DOM
Define function walkTheDOM(node, func)
This function should traverse every node in the DOM. Use recursion.
On each node, call func(node).*/

function walkTheDOM(node, func){
	let branch ='';
	for (let i = 0; i < func; i++) {branch+='-';}
	console.log(branch, node.nodeName);
	func++;
	node.childNodes.forEach(child => {
		walkTheDOM(child, func);
	});
}

walkTheDOM(document, 0);
console.log();