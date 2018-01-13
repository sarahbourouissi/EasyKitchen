var current_item=0;
var total_item=5;

window.onload = function () {
   
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
    		

    		console.log("LEFT");
    		break;
    	case TvKeyCode.KEY_UP: //UP arrow
    		navigation("UP");
    		break;
    	case TvKeyCode.KEY_RIGHT : //RIGHT arrow 
    		

    		console.log("RIGHT");
    		break;
    	case TvKeyCode.KEY_DOWN: //DOWN arrow
    		navigation("DOWN");  		
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
	
	if(direction == "UP"){
		
	
		
	}
	if(direction == "DOWN"){
		if (current_item==0){
			$('#fullname').select();
			current_item++;
		}else if (current_item==1) {
			 $('#login').select();
			 current_item++;
		}else if (current_item==2) {
			$('#password').select();
			 current_item++;
		}else if (current_item==3) {
			 $('#btn1').addClass('selected_btn');
			 current_item++;
		}else if (current_item==4) {
			$('#btn2').addClass('selected_btn');
			$('#btn1').removeClass('selected_btn');
			 current_item++;
		}else {
			$('#btn2').removeClass('selected_btn');
			current_item=0;
		}
		
}

}
function go_to(current_item){
	sessionStorage.setItem("key", current_item);
	console.log(current_item);

		
		if(current_item==4)
			 $("#formreg").submit();
		if(current_item==5)
			
			parent.location="login.html";
}

