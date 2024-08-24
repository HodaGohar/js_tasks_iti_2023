var studentId = 1; 

function addStudent() {
  var nameInput = document.getElementById('name');
  var ageInput = document.getElementById('age');
  var studentTableBody = document.getElementById('studentTableBody');

  var name = nameInput.value;
  var age = ageInput.value;
  var row = document.createElement('tr');

  
  var idCell = document.createElement('td');
  idCell.innerHTML = studentId++;
  var nameCell = document.createElement('td');
  nameCell.innerHTML = name;
  var ageCell = document.createElement('td');
  ageCell.innerHTML = age;
  var actionsCell = document.createElement('td');
  var deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'Delete';
  deleteButton.onclick = function() {
    row.remove(); 
  };
  actionsCell.appendChild(deleteButton);

  
  row.appendChild(idCell);
  row.appendChild(nameCell);
  row.appendChild(ageCell);
  row.appendChild(actionsCell);

  
  studentTableBody.appendChild(row);

  
  nameInput.value = '';
  ageInput.value = '';
}
//--------------------------------------------------------------------------------

var currentIndex = 0;

function showImage(index) {
  var images = document.getElementsByClassName('slider-image');
  var buttons = document.getElementsByClassName('slider-button');

  for (var i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
  images[index].style.display = 'block';
  buttons[index].classList.add('active');
}

function prevImage() {
  currentIndex--;
  var images = document.getElementsByClassName('slider-image');
  var btn1 = document.getElementsByClassName('prev-button');

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  showImage(currentIndex);
}

function nextImage() {
  currentIndex++;
  var images = document.getElementsByClassName('slider-image');
  var btn2 = document.getElementsByClassName('next-button');

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  showImage(currentIndex);
}

//--------------------------------------------------------------------
var result = document.getElementById("result");
result.style.display = "none";
function downloadLink() {
 	result.style.display = "block";
	setTimeout(() => {
 		result.innerHTML = "<a href='#google'>Link</a>";
 	}, 3000);
 }
 //------------------------------------------------------------------
 
var userInput = document.getElementById("userInput");
var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var login = document.getElementById("login");
var errorMessage = document.getElementsByClassName("error-message");

login.addEventListener("click" , function(){
  if (userInput.value =="") {
    errorMessage[0].innerHTML = "name is required";
  }
  else if (userInput.value.length <= 3) {
    errorMessage[0].innerHTML = "name is shortless";
  }
  if (emailInput.value =="") {
    errorMessage[1].innerHTML = "email is required";
  }
  if (passwordInput.value =="") {
    errorMessage[2].innerHTML = "password is required";
  }
 else if (passwordInput.value.length <= 5) {
    errorMessage[2].innerHTML = "password  must be gretter than 5";
  }
})
function checkbox() {
  var choose = document.getElementsByClassName("choose");
var count = 0;

for (let i = 0; i < choose.length; i++) {
  if (choose[i].checked == true) {
    count++;
  console.log(count);

  }
  if (count > 2) {
    choose[i].checked = false;
    count--;
  console.log(count);

  }
  console.log(count);
}
}
//-------------------------------------------------------------------------
document.getElementById('stopButton').onclick = illuminateRed;
document.getElementById('slowButton').onclick = illuminateYellow;
document.getElementById('goButton').onclick = illuminateGreen;

function illuminateRed() {
  clearLights();
 var x = document.getElementById('stopLight').style.backgroundColor = "red";
  
 document.getElementById('stopLight').style.boxShadow = "0 0 12px 5px red";
}

function illuminateYellow() {
  clearLights();
  document.getElementById('slowLight').style.backgroundColor = "yellow";
   document.getElementById('slowLight').style.boxShadow = "0 0 12px 5px yellow";
}

function illuminateGreen() {
  clearLights();
  document.getElementById('goLight').style.backgroundColor = "green";
  document.getElementById('goLight').style.boxShadow = "0 0 12px 5px green";
}
function clearLights() {
  document.getElementById('stopLight').style.boxShadow = "unset";
  document.getElementById('slowLight').style.boxShadow = "unset";
  document.getElementById('goLight').style.boxShadow = "unset";
  
   document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}

//-------------------------------------------------------------------------
//swap the value of two variables using restructuring

let a = 10;
let b = 20;

console.log("Before swapping: a =", a, "b =", b);

[a, b] = [b, a];

console.log("After swapping: a =", a, "b =", b);
console.log("------------------------------------------------------");

//-----------------------------------------------------------------------
function findMax(...values) {
  const maxValue = Math.max(...values);
  const minValue = Math.min(...values);
  return [maxValue, minValue];
}

const array = [5, 10, 15, 20, 25];

const [maxValue, minValue] = findMax(...array);

console.log("Max value:", maxValue);
console.log("Min value:", minValue);
console.log("------------------------------------------------------");


//----------------------------------------------------------------------
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// 1. Test that every element in the given array is a string.
var areAllStrings = fruits.every(function(element) {
  return typeof element === "string";
});

console.log("Are all elements strings?", areAllStrings);
console.log("------------------------------------------------------");


// 2. Test that some of the array elements start with "a".
var someStartsWithA = fruits.some(function(element) {
  return element.startsWith("a");
});

console.log("Do some elements start with 'a'?", someStartsWithA);
console.log("------------------------------------------------------");


// 3. Generate a new array filtered from the given array with only elements that start with "b" or "s".
var filteredArray = fruits.filter(function(element) {
  return element.startsWith("b") || element.startsWith("s");
});

console.log("Filtered array:", filteredArray);
console.log("------------------------------------------------------");


// 4. Generate a new array where each element contains a string declaring that you like the given fruit element.
var likeArray = fruits.map(function(element) {
  return "I like " + element;
});

console.log("Like array:", likeArray);
console.log("------------------------------------------------------");


// 5. Use forEach to display all elements of the new array from the previous point.
likeArray.forEach(function(element) {
  console.log(element);
});


//---------------------------------------------



// Courses

function showCourses(options = {}) {
  let courseInfo = {
    courseName : "default course name",
    courseDuation : "default course duation",
    courseOwner : "default course owner",
  };
  Object.assign(courseInfo,options)
  console.log(`
  course name is ${courseInfo.courseName} , 
  course duation is ${courseInfo.courseDuation} , 
  course owner is ${courseInfo.courseOwner}
  `)
}

let frontendCourse = {
  courseName : "JavaScript",
  courseDuation : "1 week",
  courseOwner : "Eng .",
}
showCourses(frontendCourse);

console.log("--------------")
//-----------------------------------------------------------------
import Shape, {Rect, Square , Circle} from "./Shape.js" ;
console.log("---- Square ----")
let  obj = new Square(5);
obj.area();
obj.permeter();
console.log("--- Rectangle ---")
let  obj1 = new Rect(4,6);
obj1.area();
obj1.permeter();
console.log("--- Circle ---")
let  obj2 = new Circle(10);
obj2.area();
obj2.permeter();
console.log("--------------")
//---------------------- -------------------------------------------

function getAllUsers() {
	fetch("https://jsonplaceholder.typicode.com/users")
		.then(function (response) {
			return response.json();
		})
		.then((data) => {
			console.log(data);
		})
		.catch(function (error) {
			console.log(error);
		});
}

async function execute() {
	try {
		let response = await fetch("https://jsonplaceholder.typicode.com/users");
		let data = await response.json();
		console.log(data);
	} catch (error) {
		console.log("error");
	}
}
console.log("******** display data with promise ***********");
getAllUsers();
console.log("******** display data with Async/Await ***********");
execute();

