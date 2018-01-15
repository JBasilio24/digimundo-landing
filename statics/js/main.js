$ = jQuery.noConflict();
//Show and Hide our services
$(document).ready(function(){
		$("#mostrar").on( "click", function() {
      $('#oculto').css({'display':"block"});
      $('#ocultar').css({'display':"block"});
      $('.hero').css({'display':"none"});
      $('#mostrar').css({'display':"none"});
			$('.container-services').css({'height':"auto"});
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
  $(document).ready(function(){
   $('.logo').hide().fadeIn(3000);
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
			$(phones).append('<div class="list_phones mt-2"><input name="Telefono" type="tel" pattern="\([0-9]{3}\) [0-9]{3}[ -][0-9]{4}" class="form-control-danger" required><button class="remove_phone btn btn-outline-success btn-sm boton_modal less"><i class="fa fa-minus" aria-hidden="true"></i></a></div>')
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
/*validate form */
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
});
/*change images
$(document).ready(function(){
	$('.imagen').hover(function(){
		$('.imagen').css("display", 'none');
		$('.fondo').css("display", 'block');
	}, function(){
		$('.imagen').css("display", 'block');
		$('.fondo').css("display", 'none');
	});
});*/

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
