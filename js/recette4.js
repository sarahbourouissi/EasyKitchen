var current_item=0;
var total_item=2;

window.onload = function () {
   
    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
	try {
		parent.location="index.html";
	} catch (ignore) {
	}
    });

    navigation("RIGHT");
   
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

		if(current_item==1)
			parent.location="index.html";
		if(current_item==2)
			parent.location="etape4.html";
		
	
};




