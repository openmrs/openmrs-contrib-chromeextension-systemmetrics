	/*
	* Update Disk Usage Table
	*/
	var size = 0; // size stands for data size {Bytes, KB, MB, GB} 
	var disk_usage_val;
	function getDiskUsage(val){
		disk_usage_val = val;
	}
	function updateTable(){
		var disk_table = document.getElementById('disk_usage_data');
		disk_table.innerHTML = "";
		for(var i = 0; i < disk_usage_val.length; i++){
			disk_td= '<tr><td>'+disk_usage_val[i].absolutePath+
					'</td><td>'+((disk_usage_val[i].totalSpace-disk_usage_val[i].freeSpace)/Math.pow(1024,size)).toFixed(size)+
					'</td><td>'+(disk_usage_val[i].freeSpace/Math.pow(1024,size)).toFixed(size)+
					'</td><td>'+(disk_usage_val[i].totalSpace/Math.pow(1024,size)).toFixed(size)+
					'</td></tr>';
			disk_table.innerHTML += disk_td;
		}	
	}

	 setInterval(function(){indicatorCall("disk_usage",getDiskUsage);	updateTable();}, 1000);
	  
	 function setDataSize(){
		size = 2;
		updateTable();
	 }
	 
	 setDataSize();
