
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
  $('html').css('overflow', 'hidden');
box1.style.display ="block";

}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
box1.style.display = "none";
$('html').css('overflow', 'visible');
}

//HSC
var btn1 = document.getElementById("myBtn1");
var box2 = document.getElementById("popup1");
btn1.onclick = function() {
  $('html').css('overflow', 'hidden');
box2.style.display ="block";

}
span = document.getElementsByClassName("close")[1];
span.onclick = function() {
box2.style.display = "none";
$('html').css('overflow', 'visible');
}
//Bachelor of Engineering 

var btn2 = document.getElementById("myBtn2");
var box3 = document.getElementById("popup2");
btn2.onclick = function() {
  $('html').css('overflow', 'hidden');
box2.style.display ="block";

}
span = document.getElementsByClassName("close")[2];
span.onclick = function() {
box3.style.display = "none";
$('html').css('overflow', 'visible');
}





// Download button

function myFunction(){
  window.location.href ="https://www.google.com/search?rlz=1C1CHBF_enIN1052IN1052&sxsrf=APwXEdeWTQGLjIwMNNMbMwTvSLgbAV1QxA:1683817818807&q=Sulthanul+Arief&stick=H4sIAAAAAAAAAOOwesSozi3w8sc9YSm5SWtOXmOU4BLzSsxLLEl0LkpNLEkNTk0sSs5wTixK4VnEyh9cmlOSkZhXmqPgWJSZmgYAnxd7Kj4AAAA&sa=X&ved=2ahUKEwj1g9OXxu3-AhWjTWwGHXCkChcQnJoFegQIHRAG&biw=1536&bih=746&dpr=1.25"
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
    window.location.href = 'success.html';

  });
  

    // const submitForm = ()=> {
    // const userName = document.getElementById("name").value;
    // const userMobile = document.getElementById("phone").value;
    // const userEmail = document.getElementById("email").value;
    // const userComment = document.getElementById("comment").value;
    // return console.log(userName);


    // }



    // Download Resume


    function downloadResume() {
      // Replace "path/to/your/pdf.pdf" with the actual path to your PDF file
      var fileUrl = "pdf/MyResume.docx";

      // Create a temporary anchor element
      var resumeLink = document.createElement("a");
      resumeLink.href = fileUrl;
      resumeLink.target = "_blank";
      resumeLink.download = "MyResume.docx"; // Specify a default filename for the downloaded file

      // Append the anchor element to the document body
      document.body.appendChild(resumeLink);

      // Trigger a click event on the anchor element
      resumeLink.click();

      // Clean up
      document.body.removeChild(resumeLink);
    }

    // Download Experience Certificate 

    function downloadExperienceCertificate() {
      var filePath = "pdf/ExperienceCertificate.pdf";

      var experienceCertificate = document.createElement("a");
      experienceCertificate.href = filePath;
      experienceCertificate.target = "_blank";
      experienceCertificate.download = "ExperienceCertificate";


      document.body.appendChild(experienceCertificate);

      experienceCertificate.click();

      document.body.removeChild(experienceCertificate);
    }



   
 
