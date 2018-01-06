$ = jQuery.noConflict();
//Show and Hide our services
$(document).ready(function(){
		$("#mostrar").on( "click", function() {
      $('#oculto').slideDown(1500);
      $('#ocultar').css({'display':"block"});
      //$('#mostrar').css({'position':"absolute"});
      //$('#oculto').slideDown(2000);
      //$('#navbar-main').hide("slow");
      $('.container').css({'background-color':"rgba(0,0,0,.65)"});
      $('.hero').css({'display':"none"});
      $('#mostrar').css({'display':"none"});
	});
});

$(document).ready(function(){
  $("#ocultar").on( "click", function() {
    $('#ocultar').css({'display':"none"});
    $('#ocultar').css({'display':"none"});
  });
});
//Change background-image in our services
/*$(document).ready(function(){
	$(".effect-chico").mouseover(function(){
		$('.fondo').fadeIn(2000);
		$('.imagen').hide();
	});
});*/
/*//change icon
$("#mostrar").click(function(){
        $(".fa").removeClass("fa-angle-up");
        $(this).children("i").addClass("fa-angle-down");
    });*/


//Show logo
  $(document).ready(function()
  {
   $('.logo').hide().fadeIn(3000);
  });
//Show footer
/*$(function(){
  $('#mostrar').click(function () {
    $('.footer').fadeIn(1000);
    $('html, body').animate({
       scrollTop: $(document).height()
    }, 'slow');
    return false;
  });
});
*/
// Change background color for navbar
$/*(document).scroll(function(){
  if($(this).scrollTop() > 15) {
    $('#navbar-main').css({'display':"none"});
  } else {
    $('#navbar-main').css({'display':"block"});
  }
});
/*When the user clicks on the button,
toggle between hiding and showing the dropdown content*/
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
//input dinamico
var nextinput = 0;
function AgregarCampos(){
nextinput++;
campo = '<li id="rut'+nextinput+'">Campo:<input type="text" size="20" id="campo' + nextinput + '"&nbsp; name="campo' + nextinput + '"&nbsp; /></li>';
$("#campos").append(campo);
}

//other
$(document).ready(function(){
	var max_phone = 3;
	var phones = $(".list_phones");
	var add_phone = $(".add_more");

	var p=1;
	$(add_phone).click(function(e){
		e.preventDefault();
		if(p < max_phone){
			p++;
			$(phones).append('<div class="list_phones mt-2"><input name="phone" type="tel" pattern="\([0-9]{3}\) [0-9]{3}[ -][0-9]{4}" class="form-control-danger" required><button class="remove_phone btn btn-outline-success btn-sm boton_modal less"><i class="fa fa-minus" aria-hidden="true"></i></a></div>')
		}
	});
	$(phones).on("click",".remove_phone", function(e){
		e.preventDefault(); $(this).parent('div').remove(); p--;
	})
});

/*
$(function () {
    var options = {
        facebook: "profile.php?id=100011217752681", // Facebook page ID
        whatsapp: "52-55-81-77-73-95", // WhatsApp number
        call: "52-55-81-77-73-95", // Call phone number
        company_logo_url: "//static.whatshelp.io/img/flag.png", // URL of company logo (png, jpg, gif)
        greeting_message: "Hello, how may we help you? Just send us a message now to get assistance.", // Text of greeting message
        call_to_action: "Es un placer presentarle DIGIMUNDO TECHNOLOGIES co", // Call to action
        button_color: "#129BF4", // Color of button
        position: "right", // Position may be 'right' or 'left'
        order: "facebook,whatsapp,call" // Order of buttons
    };
    var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
});*/
/*
// Prevent projects square redirect
$("#projects-squares a").click(function(event){
  event.preventDefault();
});
$("#team a").click(function(event){
  event.preventDefault();
});

// Smooth scroll for menu anchors
// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
// On-page links
if (
  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
  &&
  location.hostname == this.hostname
  ) {
// Figure out element to scroll to
var target = $(this.hash);
var navHeight = $('#navbar-main').height();
var scrollToPosition = target.offset().top - (navHeight);
target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
// Does a scroll target exist?
if (target.length) {
// Only prevent default if animation is actually gonna happen
event.preventDefault();
$('html, body').animate({
  scrollTop: scrollToPosition
}, 1500, function() {
// Callback after animation
// Must change focus!
var $target = $(target);
$target.focus();
if ($target.is(":focus")) { // Checking if the target was focused
  return false;
} else {
$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
$target.focus(); // Set focus again
};
});
}
}
});*/
