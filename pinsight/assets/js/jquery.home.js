$(window).on("load", function() {

	var images = [
		'pin-cyan.png', 'pin-green.png', 'pin-red.png', 'pin-yellow.png', 'hashtag.png',
		'bg-red.jpg', 'bg-yellow.jpg', 'bg-green.jpg', 'bg-cyan.jpg'
	];
	var imageIndex = 0;

	function preloadImage() {

	    var img = new Image();

	    img.onload = function () {
	        if ( imageIndex < images.length ) {
	            preloadImage();
	        }
	        else {
    			$("#preloader").fadeOut("fast", function() {
					$(this).remove();
					$("#wrapper").fadeIn("fast", function() { init(); });
				});	
	        }
	    }
	    img.src = "assets/images/" + images[imageIndex];
    	++imageIndex;
	}
	preloadImage();

	function init() {

		var colours = [ 
			[ "red", "green", "cyan", "yellow" ],
			[ "red", "yellow", "cyan", "green" ],
			[ "cyan", "red", "yellow", "green" ],
			[ "cyan", "green", "red", "yellow" ],
			[ "green", "yellow", "red", "cyan" ],
			[ "green", "cyan", "yellow", "red" ],
			[ "yellow", "red", "green", "cyan" ],
			[ "yellow", "cyan", "red", "green" ]
		];

		var quadLastPalette = 0;
		var pinLastPalette = 0;

		setInterval( changeQuadrants, 1800);

		function changeQuadrants()
		{
			var quadRandNum = Math.floor(Math.random()*(colours.length)+0);
			var quadImageRandNum1 = Math.floor(Math.random()*(4)+0);
			var quadImageRandNum2 = Math.floor(Math.random()*(4)+0);
			var pinRandNum = Math.floor(Math.random()*(colours.length)+0);

			// Avoid same in a row by redoing
			if ( quadRandNum == quadLastPalette )
				quadRandNum = Math.floor(Math.random()*(colours.length)+0);
			if ( pinRandNum == pinLastPalette )
				pinRandNum = Math.floor(Math.random()*(colours.length)+0);

			quadLastPalette = quadRandNum;
			pinLastPalette = pinRandNum;

			var quadPalette = colours[ quadRandNum ];
			var pinPalette = colours[ pinRandNum ];
			
			$(".quadrant").each( function(i) {

				// Change the quadrant bg colour
				$(this)
					.removeClass( quadPalette.join(" ") + " image" )
					.addClass( quadPalette[i] );

				// Make it a bg image if randomly selected
				if ( i == quadImageRandNum1 )
					$(this).addClass("image");
				if ( ! $(this).hasClass("image")
						&& i == quadImageRandNum2 )
					$(this).addClass("image");

				// Change the quadrant's pin's colour
				// $(".pin", this)
				// 	.removeClass( pinPalette.join(" ") + " image" )
				// 	.addClass( pinPalette[i] );
			});
		}
	}

});

$(document).ready( function() {

	// Disclaimer

	$("#disclaimer button").click( function() {

		$("#wrapper").toggleClass("pushed");
		$("#disclaimer-content").toggleClass("active");

		if ( $(this).text() == "Disclaimer" )
			$(this).text("Hide");
		else
			$(this).text("Disclaimer");
	});

});