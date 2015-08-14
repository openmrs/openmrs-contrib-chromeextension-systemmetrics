	var globalAppData;
	function getAppData(val){
		globalAppData = val;
	}
	
	function updateTable(dataArray){
		var data_table = document.getElementById('count_data');
		data_table.innerHTML = "";
		var data_td;
		for(var i = 0; i < dataArray.length; i+=2){
			data_td= '<tr><td>'+dataArray[i]+
					'</td><td>'+dataArray[i+1]+
					'</td></tr>';
			data_table.innerHTML += data_td;
		}	
	}
	function drawTable(){
		indicatorCall("globalAppTableData",getAppData);
		console.log(globalAppData);
		updateTable(globalAppData);
	}
	setInterval(function() {
		drawTable();
    }, 1000);