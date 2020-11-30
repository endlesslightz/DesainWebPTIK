window.jQuery = window.$ = jQuery;


/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/
function calculateScroll() {
	var contentTop      =   [];
	var contentBottom   =   [];
	var winTop      =   $(window).scrollTop();
	var rangeTop    =   200;
	var rangeBottom =   500;
	$('.main_menu').find('.scroll_btn a').each(function(){
		contentTop.push( $( $(this).attr('href') ).offset().top );
		contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
	});
	$.each( contentTop, function(i){
		if ( winTop > contentTop[i] - rangeTop && winTop < contentBottom[i] - rangeBottom ){
			$('.main_menu li')
			.removeClass('active')
			.eq(i).addClass('active');			
		}
	});
};

jQuery(document).ready(function() {
	//MobileMenu
	if ($(window).width() < 768){
		jQuery('.main_menu').prepend('<a href="javascript:void(0)" class="menu_toggler"><i class="fa fa-bars"></i></a>');
		jQuery('header .main_menu ul').hide();
		jQuery('.menu_toggler, .main_menu ul li a').click(function(){
			jQuery('header .main_menu ul').slideToggle(300);
		});
	}
		
	
	$(window).scroll(function(event) {
		calculateScroll();
	});
	$('.main_menu ul li.scroll_btn a, .mobile_menu ul li a').click(function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 64}, 1000);
		return false;
	});
	
	
	//Fixed Menu
	var fixed_menu = true;

	if (jQuery('header').size() && fixed_menu == true) {
		setInterval(scrolled_menu, 0);
	}
	
});

function scrolled_menu() {
	if (jQuery(window).scrollTop() > jQuery('header').height() - 70) {
		jQuery('header').addClass('menu_fixed');
	} else {
		jQuery('header').removeClass('menu_fixed');
	}
};



/*-----------------------------------------------------------------------------------*/
/*	Pricing Active class
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
	$(".price_item").hover(
		function () {
			$(this).addClass("active");
		}
	);
	$(".price_item").hover(
		function () {
			$('.price_item').removeClass("active");
				$(this).addClass("active");
			}
		);
});



/*-----------------------------------------------------------------------------------*/
/*	Newsletters FORM
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	$("#ajax-newsletters-form").submit(function() {
		var str = $(this).serialize();		
		$.ajax({
			type: "POST",
			url: "contact_form/newsletter.php",
			data: str,
			success: function(msg) {
				// Message Sent - Show the 'Thank You' message and hide the form
				if(msg == 'OK') {
					result = '<div class="notification_ok">Thank you that subscribed for our news</div>';
					$("#newsletters-fields").hide();
				} else {
					result = msg;
				}
				$('#newsletters-note').html(result);
			}
		});
		return false;
	});
});



/*-----------------------------------------------------------------------------------*/
/*	CONTACT FORM
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	$("#ajax-contact-form").submit(function() {
		var str = $(this).serialize();		
		$.ajax({
			type: "POST",
			url: "contact_form/contact_process.php",
			data: str,
			success: function(msg) {
				// Message Sent - Show the 'Thank You' message and hide the form
				if(msg == 'OK') {
					result = '<div class="notification_ok">Your message has been sent. Thank you!</div>';
					$("#fields").hide();
				} else {
					result = msg;
				}
				$('#note').html(result);
			}
		});
		return false;
	});
});




/*-----------------------------------------------------------------------------------*/
/*	Custom Select
/*-----------------------------------------------------------------------------------*/
var checkboxHeight = "25";
var radioHeight = "25";
var selectWidth = "190";

document.write('<style type="text/css">input.styled { display: none; } select.styled { position: relative; width: '+selectWidth+"px; opacity: 0; filter: alpha(opacity=0); z-index: 5; } .disabled { opacity: 0.5; filter: alpha(opacity=50); }</style>");var Custom={init:function(){var e,t,i,o=document.getElementsByTagName("input"),s=Array();for(a=0;a<o.length;a++)("checkbox"==o[a].type||"radio"==o[a].type)&&o[a].className.indexOf("styled")>-1&&(s[a]=document.createElement("span"),s[a].className=o[a].type,1==o[a].checked&&("checkbox"==o[a].type?(position="0 -"+2*checkboxHeight+"px",s[a].style.backgroundPosition=position):(position="0 -"+2*radioHeight+"px",s[a].style.backgroundPosition=position)),o[a].parentNode.insertBefore(s[a],o[a]),o[a].onchange=Custom.clear,o[a].getAttribute("disabled")?s[a].className=s[a].className+=" disabled":(s[a].onmousedown=Custom.pushed,s[a].onmouseup=Custom.check));for(o=document.getElementsByTagName("select"),a=0;a<o.length;a++)if(o[a].className.indexOf("styled")>-1){for(t=o[a].getElementsByTagName("option"),i=t[0].childNodes[0].nodeValue,e=document.createTextNode(i),b=0;b<t.length;b++)1==t[b].selected&&(e=document.createTextNode(t[b].childNodes[0].nodeValue));s[a]=document.createElement("span"),s[a].className="select",s[a].id="select"+o[a].name,s[a].appendChild(e),o[a].parentNode.insertBefore(s[a],o[a]),o[a].getAttribute("disabled")?o[a].previousSibling.className=o[a].previousSibling.className+=" disabled":o[a].onchange=Custom.choose}document.onmouseup=Custom.clear},pushed:function(){element=this.nextSibling,this.style.backgroundPosition=1==element.checked&&"checkbox"==element.type?"0 -"+3*checkboxHeight+"px":1==element.checked&&"radio"==element.type?"0 -"+3*radioHeight+"px":1!=element.checked&&"checkbox"==element.type?"0 -"+checkboxHeight+"px":"0 -"+radioHeight+"px"},check:function(){if(element=this.nextSibling,1==element.checked&&"checkbox"==element.type)this.style.backgroundPosition="0 0",element.checked=!1;else{if("checkbox"==element.type)this.style.backgroundPosition="0 -"+2*checkboxHeight+"px";else for(this.style.backgroundPosition="0 -"+2*radioHeight+"px",group=this.nextSibling.name,inputs=document.getElementsByTagName("input"),a=0;a<inputs.length;a++)inputs[a].name==group&&inputs[a]!=this.nextSibling&&(inputs[a].previousSibling.style.backgroundPosition="0 0");element.checked=!0}},clear:function(){inputs=document.getElementsByTagName("input");for(var a=0;a<inputs.length;a++)"checkbox"==inputs[a].type&&1==inputs[a].checked&&inputs[a].className.indexOf("styled")>-1?inputs[a].previousSibling.style.backgroundPosition="0 -"+2*checkboxHeight+"px":"checkbox"==inputs[a].type&&inputs[a].className.indexOf("styled")>-1?inputs[a].previousSibling.style.backgroundPosition="0 0":"radio"==inputs[a].type&&1==inputs[a].checked&&inputs[a].className.indexOf("styled")>-1?inputs[a].previousSibling.style.backgroundPosition="0 -"+2*radioHeight+"px":"radio"==inputs[a].type&&inputs[a].className.indexOf("styled")>-1&&(inputs[a].previousSibling.style.backgroundPosition="0 0")},choose:function(){for(option=this.getElementsByTagName("option"),d=0;d<option.length;d++)1==option[d].selected&&(document.getElementById("select"+this.name).childNodes[0].nodeValue=option[d].childNodes[0].nodeValue)}};window.onload=Custom.init;










