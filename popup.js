if($.jStorage.get("host")=='undefined'){
	$.jStorage.set("host", document.getElementById('host').value);
	
}
else{
	try{
	document.getElementById('host').value = $.jStorage.get("host");
	}
	catch(e) {"Not In Main"}
}

	var host = $.jStorage.get("host")+'module/systemmetrics/';
	
	function setHost(){
		$.jStorage.set("host", document.getElementById('host').value);
		host = $.jStorage.get("host")+'module/systemmetrics/';
	}
	$('#host_button').click(function() { setHost();});
/*
 * Hide/Show Panel
 */
function hidePanel(mainDiv, toggleDiv){
	if($( "#"+mainDiv).val()=="+"){
		$( "#"+mainDiv).val("-");
		$( "#"+toggleDiv ).show();
	}
	else{
		$( "#"+mainDiv).val("+");
		$( "#"+toggleDiv ).hide();
	}
}

 /*
 * Generalize Value Retrieval
 */
 function indicatorCall(indicatorId, indicatorCallBack){  
	$.ajax({  
	    type : "GET",   
	    url : host+indicatorId+".form",
		data : {}, 
	    success : function(val) {  
			indicatorCallBack(val);
	    },  
	    error : function(e) {  
			console.error("Communication Error");	
	   }  
	}); 
}

function goBack() {
    window.history.back();
}