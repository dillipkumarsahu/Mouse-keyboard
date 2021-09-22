$(document).ready(function(){
	$("button").button();
	$("button").mouseup(function(event){
		switch(event.which)
		{
			case 1 : $("p").html('Left button'); 
			break;
			case 2 : $("p").html('Middle button'); 
			break;
			case 3 : $("p").html('Right button'); 
			break;
			default : $("p").html('invalid Click');
		}
	});
});