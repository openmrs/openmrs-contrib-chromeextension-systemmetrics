
	  var cpu_usage_val,cpu_usage_jvm_val;
	  function getCPU(val){
		cpu_usage_val = val;
	  }
	  function getCPUJVM(val){
		cpu_usage_jvm_val= val;
	  }
	  function updateCPUChart() {
		document.getElementById('cpu_head').innerHTML = ' : '+Math.round(cpu_usage_val*100)+'%';
		document.getElementById('jvm_head').innerHTML = ' : '+Math.round(cpu_usage_jvm_val)+'%';
      }
	  setInterval(function(){
		indicatorCall("cpu_usage",getCPU);
		indicatorCall("cpu_usage_jvm",getCPUJVM);	
		updateCPUChart();
	  }, 1000);