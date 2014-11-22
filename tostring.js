
var js_arr = "";


function tostr_init(){
	js_arr = "";
	var vls = $('#vars').val();
	vls = vls.trim();
	var vls_arr = vls.split(";");
	js_arr += "["
	vls_arr.forEach(printBr);
	 js_arr += "]";
	$('#res').val(js_arr);
	console.log(js_arr);
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
		js_arr += '{'+new_str+' : \"+'+new_str+'+\"}';
		
	}
	
}

function clean_str(str){
	var new_str = str.trim();
	var rem = ["String","int","double","float","boolean"];
	for(i=0;i<=rem.length;i++){
		if(new_str.indexOf(rem[i]) > -1){
			new_str = new_str.replace(rem[i],"");
			return new_str;
		}
	}
	new_str = new_str.trim();
	
	return new_str;
}
