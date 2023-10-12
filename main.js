function myFunction(x) {

  x.classList.toggle("change");
  var x = document.getElementById("myLinks");
  if (x.className === "nav-links hide-nav-item") {
    x.className = "nav-links show-nav-item";
  } else if (x.className == "nav-links show-nav-item") {
    x.className = "nav-links hide-nav-item";
  } 
}