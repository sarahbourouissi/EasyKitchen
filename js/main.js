var current_item=0;
var total_item=5;

window.onload = function () {
	
	
	if(sessionStorage.getItem("key")==null)
		
		navigation("right");
		
		
		else
			{
			current_item=sessionStorage.getItem("key");
			$("#btn_"+current_item).addClass("selected_btn");
			
			}
		
   
    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
	try {
	    tizen.application.getCurrentApplication().exit();
	} catch (ignore) {
	}
    });

    
   
   document.addEventListener('keydown', function(e) {
    	switch(e.keyCode){
    	case TvKeyCode.KEY_LEFT: //LEFT arrow 	
    		navigation("LEFT");

    		console.log("LEFT");
    		break;
    	case TvKeyCode.KEY_UP: //UP arrow
    		
    		break;
    	case TvKeyCode.KEY_RIGHT : //RIGHT arrow 
    		navigation("RIGHT");

    		console.log("RIGHT");
    		break;
    	case TvKeyCode.KEY_DOWN: //DOWN arrow
    		   		
    		break;
    	case TvKeyCode.KEY_ENTER: //OK button
    		go_to(current_item);
    		console.log("ENTER Button");
    		break;
    	default:
    		console.log("Key code : " + e.keyCode);
    		break;   		
    	}
    });
        
};

function tester(){
	console.log("TESTTTTTTT");
};

function navigation(direction){
	
	
	$("#btn_"+current_item).removeClass("selected_btn");
	if(direction == "LEFT"){
		if(current_item == 1)
			
			current_item = total_item;
		else
			current_item--;
	
		
	}else if(direction == "RIGHT"){
		if(current_item == total_item)
			current_item = 1;
		else
			current_item++;
	}
	console.log(current_item+"lll");
$("#btn_"+current_item).addClass("selected_btn");
};


function go_to(current_item){
	sessionStorage.setItem("key", current_item);
	if(current_item==5)
		parent.location="quizs.html";
	if(current_item==4)
		parent.location="recette4.html";
	
		if(current_item==3)
			parent.location="recette3.html";
		if(current_item==2)
			parent.location="recette2.html";
		if(current_item==1)
			parent.location="recette1.html";
		
	
};

