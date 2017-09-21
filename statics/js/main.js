// Change background color for navbar
$(document).scroll(function(){
  if($(this).scrollTop() > 100) {   
    $('#navbar-main').css({"background-color":"rgba(0,0,0,0.8)"});
  } else {
    $('#navbar-main').css({"background-color":"transparent"});
  }
});
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function showMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// Prevent projects square redirect
$("#projects-squares a").click(function(event){
    event.preventDefault();
});
$("#team a").click(function(event){
    event.preventDefault();
});