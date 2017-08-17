
    function hsv(h, s, v){
    var r, g, b;
    var i;
    var f, p, q, t;
     
    if (s == 0){
        r = g = b = v;
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }
   
    h /= 60;
    i  = Math.floor(h);
    f = h - i;
    p = v *  (1 - s);
    q = v * (1 - s * f);
    t = v * (1 - s * (1 - f));
   
    switch( i ) {
        case 0:
            r = v;
            g = t;
            b = p;
            break;
        case 1:
            r = q;
            g = v;
            b = p;
            break;
        case 2:
            r = p;
            g = v;
            b = t;
            break;
        case 3:
            r = p;
            g = q;
            b = v;
            break;
        case 4:
            r = t;
            g = p;
            b = v;
            break;
        default:        // case 5:
            r = v;
            g = p;
            b = q;
            break;
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
        var ctx, canvas;
        //var rotSpeed = [];

        $( document ).ready(function() {
            drawBg();
            //draw the bg every 30 secs
            window.setInterval(drawBg, 30000);

        });
        
        function drawBg(){
            canvas = $("#canvas")[0]; 
	        ctx = canvas.getContext("2d");
	        
	        
	        
	        $(window).resize(function(event) {
		        //handleResize();
	        });
	        
	        
	 
	        //setInterval(function(){update();}, 10);
	        var y = 0;
	        $('div[id^="pst"]').each(function(index){
	            //rotSpeed[index] = -.4 + Math.random()*0.8;
                
	            var ry = (200+(Math.random()*300))*(index);
                var rx = Math.random()*(window.innerWidth-500);
                if(ry>y){
                    y = ry;
                }

	            $(this).css("top", ry+"px");
	            $(this).css("left", rx+"px");
	            $(this).scale('' + ( .5+Math.random()*.75 ));
	            $(this).css('zIndex', "2");
	            
	            $(this).hover(function () {
                    $(this).css("zIndex","4");
                },function () {
                    $(this).css("zIndex","2");
                });
                
                $(this).fadeIn();
              
                 //handleResize();
  
            });
            
            handleResize(y);
            doLine();
            $("#canvas").fadeIn();
           
        }
        /*
        function update(){
            $('div[id^="pst"]').each(function(index){
                $(this).animate({rotate: '+=' + rotSpeed[index] +'deg'
                }, 0);
            });
        }
        */
        
        function doLine(){
            var ww = canvas.width;
            var wh = canvas.height;
            
            ctx.beginPath();
            
            ctx.moveTo(Math.random()*ww, Math.random()*wh );
	
        	for(var i = 0; i < 10+Math.floor(Math.random()*20); i++){
        		
        		    var x = Math.random()*ww;
        		    var y = Math.random()*wh;
        			var px = Math.random()*ww;
        		    var py = Math.random()*wh;
        			
        			this.ctx.quadraticCurveTo(x, y, px, py);		
        		
        	}
        
        	this.ctx.lineWidth = 1+Math.random()*20;
        
        	var gradient=this.ctx.createLinearGradient(ww/2,0,ww/2,wh);
        	
        	var tm = new Date().getMilliseconds();
        	var brt =1
            
            var c1 = Math.random()*355;
            var c2 = c1+355/3;
            c2 = c2%355;
            var c3 = c2+(355/3);
            c3 = c3%355;
            
            
        	var col1 = hsv(c1, 1.0, 1);
        	var col2 = hsv(c2, 1.0, 1);
        	var col3 = hsv(c3, 1.0, 1);
        		
        	gradient.addColorStop("0",'rgba('+col1+',.2)');
        	gradient.addColorStop("0.5",'rgba('+col2+',2)');
        	gradient.addColorStop("1.0",'rgba('+col3+',2)');
        
        	ctx.strokeStyle = gradient;
        	ctx.stroke();
        
        	ctx.closePath();
        }
       
        function handleResize(y){
            if(y<window.innerHeight){
                canvas.width =window.innerWidth;
	            canvas.height =window.innerHeight;    
            }else{
                canvas.width =window.innerWidth;
	            canvas.height =y+700;    
            }
	        
        }
    