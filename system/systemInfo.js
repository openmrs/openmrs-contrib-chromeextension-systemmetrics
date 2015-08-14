
      function setOSName(val){
		document.getElementById('os_name').innerHTML = val;
	  }
	  function setOSArch(val){
		document.getElementById('os_arch').innerHTML = val;
	  }
	  function setOSVersion(val){
		document.getElementById('os_ver').innerHTML = val;
	  }
	  function setVMName(val){
		document.getElementById('jvm_name').innerHTML = val;
	  }
	  function setVMVendor(val){
		document.getElementById('jvm_vendor').innerHTML = val;
	  }
	  function setVMVersion(val){
		document.getElementById('jvm_ver').innerHTML = val;
	  }
	  function setAvailProcessors(val){
		document.getElementById('processor_count').innerHTML = val;
	  }
      function createTimeline() {
		indicatorCall("get_name",setOSName);
		indicatorCall("get_arch",setOSArch);
		indicatorCall("get_version",setOSVersion);
		indicatorCall("get_name_jvm",setVMName);
		indicatorCall("get_vendor_jvm",setVMVendor);
		indicatorCall("get_version_jvm",setVMVersion);
		indicatorCall("processor_avail_jvm",setAvailProcessors);
      }