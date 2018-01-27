$ = jQuery.noConflict();
//Show and Hide our services
$(document).ready(function(){
		$("#mostrar").on( "click", function() {
      $('#oculto').css({'display':"block"});
      $('#ocultar').css({'display':"block"});
      $('.hero').css({'display':"none"});
      $('#mostrar').css({'display':"none"});
			$('.container-services').css({'height':"auto"});
			$(".nuestros_clientes").css({'margin-top':".5em"});
	});
});
/*mover botón whatsapp*/
		var whatsapp = document.getElementById('whats');
		var mc = new Hammer(whatsapp);
		mc.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }) );
		mc.on("pan", handleDrag);

		var lastPosX = 0;
		var lastPosY = 0;
		var isDragging = false;
		function handleDrag(ev) {

		  // for convience, let's get a reference to our object
		  var elem = ev.target;

		  if ( ! isDragging ) {
		    isDragging = true;
		    lastPosX = elem.offsetLeft;
		    lastPosY = elem.offsetTop;
		  }
		  // NOTE:
		  var posX = ev.deltaX + lastPosX;
		  var posY = ev.deltaY + lastPosY;

		  elem.style.left = posX + "px";
		  elem.style.top = posY + "px";

		  if (ev.isFinal) {
		    isDragging = false;
		  }
		}
/*form days personal*/
$( function() {
    $("#inlineFormCustomSelect").change( function() {
        if ($(this).val() === "4") {
            $(".personalizado").css({'display':"block"});
        } else {
          	$(".personalizado").css({'display':"none"});
        }
    });
});
/*mover slide*/




//Change background-image in our services
/*$(document).ready(function(){
		$('.fondo').fadeIn(2000);
		$('.imagen').hide();
	});
});*/

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
			$(phones).append('<div class="list_phones mt-2"><input name="phone[]" type="tel" pattern="\([0-9]{3}\) [0-9]{3}[ -][0-9]{4}" class="form-control-danger" required><button class="remove_phone btn btn-outline-success btn-sm boton_modal less"><i class="fa fa-minus" aria-hidden="true"></i></a></div>')
			if(p==3){
				$('.add_more').hide();
			}
			else{
				$('.add_more').show();
			}
		}
	});
	$(phones).on("click",".remove_phone", function(e){
		e.preventDefault(); $(this).parent('div').remove(); p--;
		$('.add_more').show();
	})
});
/*validate form
$(document).ready(function(){
	$("#datos_cliente").validate({
		rules:{
			Contacto:{required:true,
								maxlength:50
			},
			Empresa:{required:true},
			Telefono:{required:true},
			dias:{required:true}
			},
			messages:{
				Contacto:{
					required: "Por favor ingrese un contacto...",
				},
				Empresa:{
					required: "Por favor indique el nombre de la empresa",
				},
				Telefono:{
					required: "Escriba por lo menos un número telefónico por favor",
				},
				dias:{
					required:"Llene este campo por favor...",
			}
		}
	});
});*/
/*Customer banner*/
var slider = document.querySelector(".slier-prin");
	slider.innerHTML += slider.innerHTML;
/*control form*/
$(document).ready(function(){
	$("#cotiza_modal").on("click", function(){
		$("#cotizaya").delay(1000);
	});
});
/**/
$(document).ready(function(){
	$(".logo_cliente").hover(function(){

	});
});
/*change images*/
$(document).ready(function(){
	$('.effect-chico').hover(function(){
		$(this).remove('.imagen');

	}, function(){
		$('.imagen').css({"display":'block'});
		$('.fondo').css({"display":'none'});
	});
});
/**/
/*send contact
$(document).ready(function(){
	$('#datos_cliente').submit(function(){
		var url = "../envio.php"

		$.ajax({
			type:"POST",
			url:url,
			data: $('#datos_cliente').serialize(),
			success: function(data){
				$('#result').html(data);
			}
		});
		return false;
	});
});*/
