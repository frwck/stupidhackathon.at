
$(function() {
	// Set this variable with the height of your sidebar + header

var scrollCounter = 0
var showingLogo = true


var sourceSwap = function () {
    var $this = $(this);
    
    var newSource = $this.attr('data-alt-src');
    $this.attr('data-alt-src', $this.attr('src'));
    $this.attr('src', newSource);
 
}

//create the hover change image behavior
$('#logoImg').hover(sourceSwap, sourceSwap);

function randomColor(){
	return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function showRandomImage(){
		
	var tags = ["idiot","sex","stupid","genius", "hacking","shit", "3d", "invention","innovation","nerd"]
	var randTag = tags[Math.floor(Math.random() * tags.length)]
	
	$.getJSON( "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + randTag + "&fmt=json",
			function (jsonData){

			var url = jsonData.data.image_url
			var logo = $( "#logoImg" )

			logo.attr('data-alt-src', logo.attr('src'));
			logo.attr('src',url)
			logo.addClass('floatingLogoImg')
			
			}
		)
		
}



function toggleLogo(){
	if(showingLogo == false){
		var logo = $( "#logoImg" )
		logo.attr('data-alt-src', logo.attr('src'));
		logo.addClass('floatingLogoImg')
		logo.attr('src','img/logo.png')
		showingLogo = true			

	}
	else{
		showRandomImage()
		showingLogo = false
	}
}

function doScrollStuff(){

	$( "#registerButton" ).css({"color":randomColor()})	

	scrollCounter++;
	scrollCounter = scrollCounter % 15;		

	if((scrollCounter % 2) == 0){
		drawBg()
	}

	if(scrollCounter == 50){
		toggleLogo()
	}		
}

$('#logoImg').load(function(){
		//position image in the vertical middle
		$( ".floatingLogo" ).css({
			"margin-top": ((window.innerHeight/2) - $('#logoImg').height()/2)-50
		})
	}
)
$(window).scroll(function(event) {
	doScrollStuff();
});


window.setInterval(toggleLogo, 20000);
});
