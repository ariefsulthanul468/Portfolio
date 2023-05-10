
window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var education = document.querySelector('#education');
  var headerPosition = header.getBoundingClientRect().top;
  var educationPosition = education.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 2;
  
  if (headerPosition < screenPosition) {
    header.classList.add('fade-in');
  }
  
  if (educationPosition < screenPosition) {
    education.classList.add('fade-in');
  }
});


// Toggle
//SSLC
var btn = document.getElementById("myBtn");
var box1 = document.getElementById("popup");
btn.onclick = function() {
  $('body').css('overflow', 'hidden');
box1.style.display ="block";

}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
box1.style.display = "none";
$('body').css('overflow', 'visible');
}

//HSC
var btn1 = document.getElementById("myBtn1");
var box2 = document.getElementById("popup1");
btn1.onclick = function() {
  $('body').css('overflow', 'hidden');
box2.style.display ="block";

}
span = document.getElementsByClassName("close")[1];
span.onclick = function() {
box2.style.display = "none";
$('body').css('overflow', 'visible');
}
//Bachelor of Engineering 

var btn2 = document.getElementById("myBtn2");
var box3 = document.getElementById("popup2");
btn2.onclick = function() {
  $('body').css('overflow', 'hidden');
box2.style.display ="block";

}
span = document.getElementsByClassName("close")[2];
span.onclick = function() {
box3.style.display = "none";
$('body').css('overflow', 'visible');
}

// Scroll fade effect
let elementsArray = document.querySelectorAll(".tile");
console.log(elementsArray);
window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 100;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}
fadeIn();


// Get the current year
const currentYear = new Date().getFullYear();
// Set the current year in the footer
document.getElementById('current-year').textContent = currentYear;

// Footer Form





   // Add event listener to form submission
   document.getElementById('myForm').addEventListener('submit', function(event) {
   
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Redirect to the success page
    window.location.href = '../success.html';

  });
  

    // const submitForm = ()=> {
    // const userName = document.getElementById("name").value;
    // const userMobile = document.getElementById("phone").value;
    // const userEmail = document.getElementById("email").value;
    // const userComment = document.getElementById("comment").value;
    // return console.log(userName);


    // }


   
 
