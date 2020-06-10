/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/







// previous
(function($) {


	$(function () {
		$("#emailError").hide();
		$("#subjectError").hide();
		$("#form-submit-message").hide();
		var error_email = false;
	
		//check email error function
		function check_email() {
		  var pattern = new RegExp(/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i);
		  if (pattern.test($("#email").val())) {
			$("#emailError").hide();
		  } else {
			$("#emailError").html("Please enter a valid email id.");
			$("#emailError").show();
			error_email = true;
		  }
		}
	
		// check subject error fucntion
	
		//clear form function
		function clear_form() {
		  $("#name").val("");
		  $("#email").val("");
		  $("#message").val("");
		}
	
		//control messages on focus
		$("#name").focusin(function () {
		  $("#form-submit-error").hide();
		  $("#form-submit-message").hide();
		});
		$("#email").focusin(function () {
		  $("#form-submit-error").hide();
	
		  $("#form-submit-message").hide();
		});
		$("#message").focusin(function () {
		  $("#form-submit-error").hide();
		  $("#form-submit-message").hide();
		});
	
		$("#email").focusout(function () {
		  check_email();
		});
	
		//netlify fprm submission
		$("#contact-form").submit(function (e) {
		  e.preventDefault();
		  error_email = false;
	
		  //validating email before submission
		  check_email();
	
		  var emailInput = $("#email").val();
		  var textMsgInput = $("#message").val();
		  var nameInput = $("#name").val();
	
		  if (
			emailInput &&
			textMsgInput &&
			nameInput &&
			error_email == false
		  ) {
			var $form = $(this);
			$.post($form.attr("action"), $form.serialize()).then(function () {
			  $("#form-submit-message").html(
				"I have recevied your message! Thanks for writing."
			  );
			  $("#form-submit-message").show();
			  clear_form();
			});
		  } else {
			clear_form();
			$("#form-submit-error").html(
			  "Please fill in the details before submitting."
			);
			$("#form-submit-error").show();
		  }
		});
	
		$("#clear-form").click(function () {
		  $("#name").val("");
		  $("#email").val("");
		  $("#message").val("");
		  $("#form-submit-error").hide();
		  $("#form-submit-message").hide();
		  $("#emailError").hide();
		  $("#subjectError").hide();
		});
	  });

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 20

		};

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1800px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile) {

			// Turn on touch mode.
				$body.addClass('is-touch');

			// Height fix (mostly for iOS).
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);

		}

	// Footer.
		breakpoints.on('<=medium', function() {
			$footer.insertAfter($main);
		});

		breakpoints.on('>medium', function() {
			$footer.appendTo($header);
		});

	// Header.

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (browser.name == 'ie'
				||	browser.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				breakpoints.on('<=medium', function() {

					$window.off('scroll.strata_parallax');
					$header.css('background-position', '');

				});

				breakpoints.on('>medium', function() {

					$header.css('background-position', 'left 0px');

					$window.on('scroll.strata_parallax', function() {
						$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
					});

				});

				$window.on('load', function() {
					$window.triggerHandler('scroll');
				});

			}

	// Main Sections: Two.

		// Lightbox gallery.
			$window.on('load', function() {

				$('#two').poptrox({
					caption: function($a) { return $a.next('h3').text(); },
					overlayColor: '#2c2c2c',
					overlayOpacity: 0.85,
					popupCloserText: '',
					popupLoaderText: '',
					selector: '.work-item a.image',
					usePopupCaption: true,
					usePopupDefaultStyling: false,
					usePopupEasyClose: false,
					usePopupNav: true,
					windowMargin: (breakpoints.active('<=small') ? 0 : 50)
				});

			});

})(jQuery);









// (function ($) {
// 	//contact form functions
// 	$(function () {
// 	  $("#emailError").hide();
// 	  $("#subjectError").hide();
// 	  $("#form-submit-message").hide();
// 	  var error_email = false;
  
// 	  //check email error function
// 	  function check_email() {
// 		var pattern = new RegExp(/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i);
// 		if (pattern.test($("#email").val())) {
// 		  $("#emailError").hide();
// 		} else {
// 		  $("#emailError").html("Please enter a valid email id.");
// 		  $("#emailError").show();
// 		  error_email = true;
// 		}
// 	  }
  
// 	  // check subject error fucntion
// 	  function check_subject() {
// 		if ($("#subject").val().length > 50) {
// 		  $("#subjectError").hide();
// 		  return false;
// 		}
// 		if (
// 		  $("#subject").focusout(function () {
// 			$("#subjectError").hide();
// 		  })
// 		);
// 		$("#subjectError").html(
// 		  "Remaining characters : " + (100 - $("#subject").val().length)
// 		);
// 		$("#subjectError").show();
// 	  }
  
// 	  //clear form function
// 	  function clear_form() {
// 		$("#name").val("");
// 		$("#email").val("");
// 		$("#subject").val("");
// 		$("#message").val("");
// 	  }
  
// 	  //control messages on focus
// 	  $("#name").focusin(function () {
// 		$("#form-submit-error").hide();
// 		$("#form-submit-message").hide();
// 	  });
// 	  $("#email").focusin(function () {
// 		$("#form-submit-error").hide();
  
// 		$("#form-submit-message").hide();
// 	  });
// 	  $("#subject").focusin(function () {
// 		$("#form-submit-error").hide();
// 		$("#form-submit-message").hide();
// 	  });
// 	  $("#message").focusin(function () {
// 		$("#form-submit-error").hide();
// 		$("#form-submit-message").hide();
// 	  });
  
// 	  $("#subject").keypress(function () {
// 		check_subject();
// 	  });
  
// 	  $("#email").focusout(function () {
// 		check_email();
// 	  });
  
// 	  //netlify fprm submission
// 	  $("#contact-form").submit(function (e) {
// 		e.preventDefault();
// 		error_email = false;
  
// 		//validating email before submission
// 		check_email();
  
// 		var emailInput = $("#email").val();
// 		var subjectInput = $("#subject").val();
// 		var textMsgInput = $("#message").val();
// 		var nameInput = $("#name").val();
  
// 		if (
// 		  emailInput &&
// 		  subjectInput &&
// 		  textMsgInput &&
// 		  nameInput &&
// 		  error_email == false
// 		) {
// 		  var $form = $(this);
// 		  $.post($form.attr("action"), $form.serialize()).then(function () {
// 			$("#form-submit-message").html(
// 			  "I have recevied your message! Thanks for writing."
// 			);
// 			$("#form-submit-message").show();
// 			clear_form();
// 		  });
// 		} else {
// 		  clear_form();
// 		  $("#form-submit-error").html(
// 			"Please fill in the details before submitting."
// 		  );
// 		  $("#form-submit-error").show();
// 		}
// 	  });
  
// 	  $("#clear-form").click(function () {
// 		$("#name").val("");
// 		$("#email").val("");
// 		$("#subject").val("");
// 		$("#message").val("");
// 		$("#form-submit-error").hide();
// 		$("#form-submit-message").hide();
// 		$("#emailError").hide();
// 		$("#subjectError").hide();
// 	  });
// 	});
// 	var $window = $(window),
// 	  $body = $("body"),
// 	  $nav = $("#nav");
  
// 	// Breakpoints.
// 	breakpoints({
// 	  xlarge: ["1281px", "1680px"],
// 	  large: ["981px", "1280px"],
// 	  medium: ["737px", "980px"],
// 	  small: [null, "736px"],
// 	});
  
// 	// Play initial animations on page load.
// 	$window.on("load", function () {
// 	  window.setTimeout(function () {
// 		$body.removeClass("is-preload");
// 	  }, 100);
// 	});
  
// 	// Scrolly.
// 	$("#nav a, .scrolly").scrolly({
// 	  speed: 1000,
// 	  offset: function () {
// 		return $nav.height();
// 	  },
// 	});
//   })(jQuery);