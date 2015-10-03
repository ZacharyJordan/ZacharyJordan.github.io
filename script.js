function open_fremd_page()
{
    window.open("http://fhs.d211.org/");
}

//Android and iOS are flipped


function moon()
{
	
		swal({   
		title: "Which One?",  
		text: "Would you like to be directed to the iOS or Android version?",
 		imageUrl: "question.png", 		
		 showCancelButton: true,   
		 allowOutsideClick: true, 
		confirmButtonColor: "#4CAF50",   
		confirmButtonText: "Android",    
		cancelButtonText: "iOS",   
		closeOnConfirm: true,   
		closeOnCancel: true }, 
		function(isConfirm){   
		if (isConfirm) {     
		openMoonIOS();
		} else {    
		openMoonAndroid();  } });
}

function touch()
{
    swal({   title: "Sorry!",   text: "This app is currently offline! Don't worry, it may come back someday.",   allowOutsideClick: true,  type: "error",   confirmButtonText: "Alright" });
}

function openStudentAndroid()
{
	swal({   title: "Sorry!",   text: "This app is currently offline! Don't worry, it may come back someday.",   allowOutsideClick: true,  type: "error",   confirmButtonText: "Alright" });
}

function openStudentIOS()
{
	window.open("https://play.google.com/store/apps/details?id=com.apexsoftware.studentcompanion");
}

function openMoonIOS()
{
	window.open("https://play.google.com/store/apps/details?id=com.apexsoftware.Lunarcy");
}

function openMoonAndroid()
{
	window.location = "https://itunes.apple.com/us/app/lunarcy-a-moon-exploration/id931234602?ls=1&mt=8";
}

function openEasySleepAndroid()
{
    window.open("https://play.google.com/store/apps/details?id=com.topboxSoftware.sleepeasy");
}

function openSlowCookAndroid()
{
    window.open("https://play.google.com/store/apps/details?id=com.topboxSoftware.slowCook");
}

function comingSoon()
{
    swal({   title: "Coming Soon!",   text: "This project is coming soon!",   allowOutsideClick: true,  type: "error",   confirmButtonText: "Alright" });
}