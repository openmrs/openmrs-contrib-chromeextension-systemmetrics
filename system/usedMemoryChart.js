	  var memory_total_jvm_val,memory_free_jvm_val;
	  function getTotalJVM(val){
		memory_total_jvm_val = val;
	  }
	  function getFreeJVM(val){
		memory_free_jvm_val = val;
	  }
	  function updateMemoryChart() {
		document.getElementById('ram_head').innerHTML = ' : '+Math.round((memory_total_jvm_val-memory_free_jvm_val)*100/memory_total_jvm_val)+'%';
      }
	  setInterval(function(){
		indicatorCall("memory_total_jvm",getTotalJVM);
		indicatorCall("memory_free_jvm",getFreeJVM);	
		updateMemoryChart();
	  }, 1000);