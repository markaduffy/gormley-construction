$(document).ready(function(){
	
	$("div#slider1").codaSlider()
	// jQuery("div#slider2").codaSlider()
	// etc, etc. Beware of cross-linking difficulties if using multiple sliders on one page.
	
	// Developments Gallery. Back to top Link
	$("a.backToTop").click(function(){
		$("div.stripViewer").scrollTo( 0, 800, { queue:true } );
	})
	
	// Devlopments Target Links
	$("#vdcLink").click(function(){
		$("div.stripViewer").scrollTo( $('#vdcTarget'), 800 );
	})

	$("#oriannaLink").click(function(){
		$("div.stripViewer").scrollTo( $('#oriannaTarget'), 800 );
	})
	
	$("#atlantisLink").click(function(){
		$("div.stripViewer").scrollTo( $('#atlantisTarget'), 800 );
	})
	
	$("#rathlinLink").click(function(){
		$("div.stripViewer").scrollTo( $('#rathlinTarget'), 800 );
	})
	
	$("#magheraboyLink").click(function(){
		$("div.stripViewer").scrollTo( $('#magheraboyTarget'), 800 );
	})
	
	$("#ballymacreaLink").click(function(){
		$("div.stripViewer").scrollTo( $('#ballymacreaTarget'), 800 );
	})
	
	$("#loughanLink").click(function(){
		$("div.stripViewer").scrollTo( $('#loughanTarget'), 800 );
	})
	
	$("#pastLink").click(function(){
		$("div.stripViewer").scrollTo( $('#pastTarget'), 800 );
	})
	
	//Contact form Validation
	// validate signup form on keyup and submit
	$("#contactForm").validate({
		rules: {
			name: "required",
			email: {
				required: true,
				email: true
			},
			subject: "required",
			message: "required"
		},
		messages: {
			name: "Please enter your full name",
			email: "Please enter a valid email address",
			subject: "Please enter a subject",
			message: "Please enter a message"
		}
	});

	// Hide messageBox
	var timer = setInterval( hideDiv, 3000);
	
	function hideDiv() {
	 	$('#messageBox').fadeOut("slow");
	}
	
	
});

