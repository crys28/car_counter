var mici = 0;
var mari = 0;
var microbuze = 0;
var biciclete = 0;

var miciB = 0;
var mariB = 0;
var microbuzeB = 0;
var bicicleteB = 0;

var miciC = 0;
var mariC = 0;
var microbuzeC = 0;
var bicicleteC = 0;

var miciD = 0;
var mariD = 0;
var microbuzeD = 0;
var bicicleteD = 0;


function mic(){
	mici++
	document.getElementById('mici').innerHTML = mici
}

function mar(){
	mari++
	document.getElementById('mari').innerHTML = mari
}

function micro(){
	microbuze++
	document.getElementById('microbuze').innerHTML = microbuze
}

function bic(){
	biciclete++
	document.getElementById('biciclete').innerHTML = biciclete
}

/****************************/

function micB(){
	miciB++
	document.getElementById('miciB').innerHTML = miciB
}

function marB(){
	mariB++
	document.getElementById('mariB').innerHTML = mariB
}

function microB(){
	microbuzeB++
	document.getElementById('microbuzeB').innerHTML = microbuzeB
}

function bicB(){
	bicicleteB++
	document.getElementById('bicicleteB').innerHTML = bicicleteB
}

/****************************/

function micC(){
	miciC++
	document.getElementById('miciC').innerHTML = miciC
}

function marC(){
	mariC++
	document.getElementById('mariC').innerHTML = mariC
}

function microC(){
	microbuzeC++
	document.getElementById('microbuzeC').innerHTML = microbuzeC
}

function bicC(){
	bicicleteC++
	document.getElementById('bicicleteC').innerHTML = bicicleteC
}

/****************************/

function micD(){
	miciD++
	document.getElementById('miciD').innerHTML = miciD
}

function marD(){
	mariD++
	document.getElementById('mariD').innerHTML = mariD
}

function microD(){
	microbuzeD++
	document.getElementById('microbuzeD').innerHTML = microbuzeD
}

function bicD(){
	bicicleteD++
	document.getElementById('bicicleteD').innerHTML = bicicleteD
}


/*****************************/


var selectVal = document.getElementById("selectVal");
var senseVal = document.getElementById("senseVal");


function remDiv() {
	if (selectVal.value == "A" && senseVal.value == "4 sensuri") {
	document.getElementById("divA").style.display = "none";
	document.getElementById("divB").style.display = "block";
	document.getElementById("divC").style.display = "block";
	document.getElementById("divD").style.display = "block";

	document.getElementById("rezA").style.display = "none";
	document.getElementById("rezB").style.display = "block";
	document.getElementById("rezC").style.display = "block";
	document.getElementById("rezD").style.display = "block";
}else if(selectVal.value == "B" && senseVal.value == "4 sensuri"){
    document.getElementById("divB").style.display = "none";
	document.getElementById("divA").style.display = "block";
	document.getElementById("divC").style.display = "block";
	document.getElementById("divD").style.display = "block";

	document.getElementById("rezB").style.display = "none";
	document.getElementById("rezA").style.display = "block";
	document.getElementById("rezC").style.display = "block";
	document.getElementById("rezD").style.display = "block";
}else if(selectVal.value == "C" && senseVal.value == "4 sensuri"){
   document.getElementById("divC").style.display = "none";
	document.getElementById("divB").style.display = "block";
	document.getElementById("divA").style.display = "block";
	document.getElementById("divD").style.display = "block";

	document.getElementById("rezC").style.display = "none";
	document.getElementById("rezB").style.display = "block";
	document.getElementById("rezA").style.display = "block";
	document.getElementById("rezD").style.display = "block";
}else if(selectVal.value == "D" && senseVal.value == "4 sensuri"){
	document.getElementById("divD").style.display = "none";
	document.getElementById("divB").style.display = "block";
	document.getElementById("divC").style.display = "block";
	document.getElementById("divA").style.display = "block";

	document.getElementById("rezD").style.display = "none";
	document.getElementById("rezB").style.display = "block";
	document.getElementById("rezC").style.display = "block";
	document.getElementById("rezA").style.display = "block";
}



if (selectVal.value == "A" && senseVal.value == "3 sensuri") {
	document.getElementById("divA").style.display = "none";
	document.getElementById("divB").style.display = "block";
	document.getElementById("divC").style.display = "block";
	document.getElementById("divD").style.display = "none";

	document.getElementById("rezA").style.display = "none";
	document.getElementById("rezB").style.display = "block";
	document.getElementById("rezC").style.display = "block";
	document.getElementById("rezD").style.display = "none";
}else if(selectVal.value == "B" && senseVal.value == "3 sensuri"){
    document.getElementById("divB").style.display = "none";
	document.getElementById("divA").style.display = "block";
	document.getElementById("divC").style.display = "block";
	document.getElementById("divD").style.display = "none";

	document.getElementById("rezB").style.display = "none";
	document.getElementById("rezA").style.display = "block";
	document.getElementById("rezC").style.display = "block";
	document.getElementById("rezD").style.display = "none";
}else if(selectVal.value == "C" && senseVal.value == "3 sensuri"){
   document.getElementById("divC").style.display = "none";
	document.getElementById("divB").style.display = "block";
	document.getElementById("divA").style.display = "block";
	document.getElementById("divD").style.display = "none";

	document.getElementById("rezC").style.display = "none";
	document.getElementById("rezB").style.display = "block";
	document.getElementById("rezA").style.display = "block";
	document.getElementById("rezD").style.display = "none";
}


}



function changeSense(){

	if (senseVal.value == "3 sensuri") {
		document.getElementById("divD").style.display = "none";
		document.getElementById("rezD").style.display = "none";
	}else{
		document.getElementById("divD").style.display = "block";
		document.getElementById("rezD").style.display = "block";
	}
}