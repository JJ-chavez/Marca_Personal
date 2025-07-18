(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();
  
  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

})(jQuery);

// Logros Modal
document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById('logroModal');
  var modalImg = document.getElementById('logroModalImg');
  var closeBtn = document.getElementById('closeModal');

  document.querySelectorAll('.logro-card').forEach(card => {
    card.addEventListener('click', function() {
      const imgSrc = this.getAttribute('data-img');
      modalImg.src = imgSrc;
      modal.style.display = 'flex';
    });
  });

  // Cerrar modal al hacer clic en la X
  closeBtn.onclick = function(e) {
    modal.style.display = 'none';
    modalImg.src = ""; // Limpia la imagen para evitar flashes
    e.stopPropagation();
  };

  // Cerrar modal al hacer clic fuera de la imagen
  modal.onclick = function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalImg.src = "";
    }
  };

  // Cerrar modal con la tecla Escape
  document.addEventListener('keydown', function(e) {
    if (modal.style.display === 'flex' && e.key === 'Escape') {
      modal.style.display = 'none';
      modalImg.src = "";
    }
  });
});




document.addEventListener('DOMContentLoaded', function () {
    var voluntariadoSwiper = new Swiper('.voluntariado-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });



// Modal para imágenes de logros académicos
document.addEventListener('DOMContentLoaded', function() {
  // Selecciona todas las imágenes de las cards
  const imagenes = document.querySelectorAll('#logros-academicos .card-img-top');
  
  imagenes.forEach(imagen => {
    imagen.style.cursor = 'pointer'; // Cambia el cursor a pointer
    imagen.addEventListener('click', function() {
      const modal = new bootstrap.Modal(document.getElementById('imagenModal'));
      const imagenAmpliada = document.getElementById('imagenAmpliada');
      const modalTitle = document.getElementById('imagenModalLabel');
      
      // Configura la imagen ampliada
      imagenAmpliada.src = this.src;
      modalTitle.textContent = this.alt; // Usa el texto alt como título
      
      // Muestra el modal
      modal.show();
    });
  });
});



// Opcional: Si quieres que el clic en toda la tarjeta redirija
document.querySelectorAll('.work-box').forEach(box => {
  box.addEventListener('click', function(e) {
    // Evita redirección si se hace clic en los botones
    if (!e.target.closest('.project-links')) {
      const link = this.querySelector('a[target="_blank"]');
      if (link && link.href && !link.href.endsWith('.jpg') && !link.href.endsWith('.png')) {
        window.open(link.href, '_blank');
      }
    }
  });
});

// Mejora para lightbox
$(document).on('click', '[data-lightbox]', function() {
  // Solo abre lightbox para imágenes, no para enlaces externos
  if (this.href.match(/\.(jpeg|jpg|gif|png)$/) != null) {
    return true;
  }
  return false;
});


// Validación mejorada del formulario
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contactForm');
  
  if(form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      // Ocultar mensajes anteriores
      document.getElementById('sendmessage').style.display = 'none';
      document.getElementById('errormessage').style.display = 'none';
      
      // Validación básica mejorada
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.querySelector('textarea[name="message"]').value.trim();
      
      if(name.length < 4) {
        showError('El nombre debe tener al menos 4 caracteres');
        return;
      }
      
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError('Por favor ingresa un correo electrónico válido');
        return;
      }
      
      if(subject.length < 4) {
        showError('El asunto debe tener al menos 4 caracteres');
        return;
      }
      
      if(message.length < 10) {
        showError('El mensaje debe tener al menos 10 caracteres');
        return;
      }
      
      // Obtener el botón de submit
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      
      try {
        // Mostrar indicador de carga
        submitBtn.innerHTML = 'Enviando... <i class="fa fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;
        
        // Envío con Formspree
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if(response.ok) {
          showSuccess();
          form.reset();
        } else {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Error en el envío');
        }
      } catch (error) {
        showError(`Ocurrió un error: ${error.message}. Por favor inténtalo de nuevo más tarde.`);
      } finally {
        // Restablecer el botón siempre, tanto en éxito como en error
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
      }
    });
  }
  
  function showError(message) {
    const errorElement = document.getElementById('errormessage');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    errorElement.style.color = '#dc3545'; // Rojo para errores
    errorElement.style.padding = '10px';
    errorElement.style.marginTop = '10px';
    errorElement.style.borderRadius = '4px';
    errorElement.style.backgroundColor = '#f8d7da';
  }
  
  function showSuccess() {
    const successElement = document.getElementById('sendmessage');
    successElement.style.display = 'block';
    successElement.style.color = '#28a745'; // Verde para éxito
    successElement.style.padding = '10px';
    successElement.style.marginTop = '10px';
    successElement.style.borderRadius = '4px';
    successElement.style.backgroundColor = '#d4edda';
    
    // Ocultar después de 5 segundos
    setTimeout(() => {
      successElement.style.display = 'none';
    }, 5000);
  }
});