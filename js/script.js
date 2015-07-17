
var active_modal = "";

function app_enlarge(value)
{
	var element = document.getElementById(value);
	element.className = "icon_image" + " " + "grow";
}

function app_shrink(value)
{
	var element = document.getElementById(value);
	element.className = "icon_image" + " " + "shrink";
}

function modal_enter(value)
{
	var element = document.getElementById(value);
	element.className = "absolute_center center_container modal_color" + " enter" + " modal_exist";
	
	var element2 = document.getElementById("engage_scrolling");
	element2.className = "active";
	
	document.getElementById("my_apps_text").style.opacity = 0;
	document.getElementById("my_websites_text").style.opacity = 0;
	
	active_modal = value;
	
	engage_modal();
}

function modal_exit(value)
{
	var element = document.getElementById(active_modal);
	element.className = "absolute_center center_container modal_color" + " exit";
	
	var element2 = document.getElementById("engage_scrolling");
	element2.className = "inactive";
	
		document.getElementById("my_apps_text").style.opacity = 1;
		document.getElementById("my_websites_text").style.opacity = 1;
}

function engage_modal()
{
	$('html, body').css({
	    'overflow': 'hidden',
	    'height': '100%'
	});
}

function disengage_modal(value)
{
	modal_exit(value);
	
	$('html, body').css({
    'overflow': 'auto',
    'height': 'auto'
	});
}