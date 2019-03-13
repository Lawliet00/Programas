
var input = myForm.myInput;
var reader = new FileReader;

input.addEventListener('change', onChange);


function onChange(event) {
  var file = event.target.files[0];
  
  reader.readAsText(file);
  
  reader.onload = onLoad;
  
}

function onLoad() {
  var result = reader.result;
  var lineas = result.split('\n');
  
  lineas.forEach(function(linea){
  	if (linea.split("/").length > 1) {
  	var Linetext = linea.split(".");
	  	document.getElementById('texto').innerHTML += '[<br>    "group"=>"'+Linetext[0][1]+'", "subgroup"=>"'+Linetext[1]+'","item"=>"'+Linetext[2]+'", <br>    "account"=>"'+Linetext[3]+'",'+
	  	 '"first_sub_account"=>"'+Linetext[4]+'", "second_sub_account"=>"'+Linetext[5]+'",<br>    "denomination"=>"'+Linetext[6]+'",<br>    "active"=>false <br>],<br>';  		
  	}else{
	  	var Linetext = linea.split(".");
	  	document.getElementById('texto').innerHTML += '[<br>    "group"=>"'+Linetext[0]+'", "subgroup"=>"'+Linetext[1]+'","item"=>"'+Linetext[2]+'", <br>    "account"=>"'+Linetext[3]+'",'+
	  	 '"first_sub_account"=>"'+Linetext[4]+'", "second_sub_account"=>"'+Linetext[5]+'",<br>    "denomination"=>"'+Linetext[6]+'"<br>],<br>';  		
	}  
  });
}