
var js_arr = [];


function tostr_init(){
	var vls = $('#vars').val();
	vls = vls.trim();
	var vls_arr = vls.split(";");
	vls_arr.forEach(printBr);
	$('#res').val(JSON.stringify(js_arr));
	console.log(JSON.stringify(js_arr));
	return false;
	
}
if (!Array.prototype.forEach)
{
  Array.prototype.forEach = function(fun)
  {
    var len = this.length;
    if (typeof fun != "function")
      throw new TypeError();

    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in this)
        fun.call(thisp, this[i], i, this);
    }
  };
}

function printBr(element, index, array) {
	
	var new_str = clean_str(element)
	console.log(new_str);
	if(new_str !=''){
		var jsonData = {};
		js_arr.push(jsonData[new_str] = '+'+new_str+'+');
	}
	
}

function clean_str(str){
	var new_str = str.trim();
	if(new_str.indexOf("String") > -1){
	new_str = new_str.replace("String","");
	}else if(new_str.indexOf("int") > -1){
		new_str = new_str.replace("int","");
	}
	new_str = new_str.trim();
	
	return new_str;
}

