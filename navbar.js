// Create a new div element
var navbar = document.createElement("div");
navbar.className = "topnav";

var home_state = set_state("home");
var videos_state = set_state("videos");
var courses_state = set_state("courses");
var about_state = set_state("about");

// Create and append the 'a' elements
var links = [
  { 
    href: "index.html", 
    text: "Home", 
    className: home_state, 
  },
  { 
    href: "videos.html", 
    text: "Videos", 
    className: videos_state,
  },
  { 
    href: "courses.html", 
    text: "Courses", 
    className: courses_state 
  },
  { 
    href: "about.html", 
    text: "About", 
    className: about_state 
  }
];

links.forEach(function(link) {
  var aTag = document.createElement('a');
  aTag.href = link.href;
  aTag.textContent = link.text;
  
  if (link.className) {
    aTag.className = link.className;
  }
  
  navbar.appendChild(aTag);
});

function set_state(page) {
  var currentLink = window.location.href;
  switch (page) {
    case 'home':
      if (currentLink == "https://fathdev.fath11.repl.co/index.html") {
        return "active";
      }
      else {
        return "not-active";
      }
      break;
    case 'videos':
      if (currentLink == "https://fathdev.fath11.repl.co/videos.html") {
        return "active";
      }
      else {
        return "not-active";
      }
      break;
    case 'courses':
      if (currentLink == "https://fathdev.fath11.repl.co/courses.html") {
        return "active";
      }
      else {
        return "not-active";
      }
      break;
    case 'about':
      if (currentLink == "https://fathdev.fath11.repl.co/about.html") {
        return "active";
      }
      else {
        return "not-active";
      }
      break;
  }
}


// Append the new div to the body
document.body.appendChild(navbar);
