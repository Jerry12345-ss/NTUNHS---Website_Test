/* Scroll Top Button */
$(document).ready(function(){
	$(window).scroll(function () {
		if($(window).scrollTop() > 400) 
		{
			$("#back-to-top").fadeIn();
		}
		else
		{
			$("#back-to-top").fadeOut();
		}
	});

	$("#back-to-top").click(function(){
		$("body,html").animate({
			scrollTop: 0
		},400);
		return false;
	});
});

/*
// Navbar Scroll Shrink 
// Link => https://www.youtube.com/watch?v=W95rzsIoW98 、 https://www.youtube.com/watch?v=RYQpm6LX_HU 
$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 50)
		{
			$("nav").addClass("shrink");
			$("nav .nav-item a").addClass("shrink-padding");
		}
		else
		{
			$("nav").removeClass("shrink");
			$("nav .nav-item a").removeClass("shrink-padding");
		}
	});
});
*/

/* Slide Navbar dropdown-items */
/* 非常重要!! Link => https://www.jqueryscript.net/menu/Simplest-Dropdown-Navigation-With-jQuery-CSS.html */
$(document).ready(function(){
	$("nav li").hover(
        function(){
            $("ul", this).slideDown(300); 
        },
        /*
        function(){
            $("ul", this).slideUp(300);
        }
        */
        function(){
          $("ul", this).fadeOut(10);
        }
    );
});

/* The Color of Navbar Title Text */
$(document).ready(function(){

	var service_text = document.getElementById("service-content");
    var solution_text = document.getElementById("solution");

	/* The Color of Navbar Title Text ( Mouseenter or Mouseleave to Navbar Title Text ) */
    service_text.addEventListener("mouseenter",function(){
		service_text.style.color = "white";
	});

    service_text.addEventListener("mouseleave",function(){
		service_text.style.color = "dimgray";
	});
        
    solution_text.addEventListener("mouseenter",function(){
		solution_text.style.color = "white";
	});

    solution_text.addEventListener("mouseleave",function(){
		solution_text.style.color = "dimgray";
	});

	/* The Color of Navbar Title Text ( Mouseenter or Mouseleave to Navbar dropdown-items ) */
	$("nav ul #service-li ul li").mouseenter(function(){
		  service_text.style.color = "white";
	});

	$("nav ul #service-li ul li").mouseleave(function(){  /* jquery mouseleave() => https://www.w3school.com.cn/jquery/event_mouseleave.asp */
		  service_text.style.color = "dimgray";
	});

	$("nav ul #solution-li ul li").mouseenter(function(){
		  solution_text.style.color = "white";
	});

	$("nav ul #solution-li ul li").mouseleave(function(){
		  solution_text.style.color = "dimgray";
	});
});