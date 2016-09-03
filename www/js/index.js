// Bat dau update
$(document).ready(function(){
	tao_de(6);
	tao_board();
	chay_tgian();
});

function chay_tgian () {
	var t=10;
	var str;
	var timeinterval=setInterval(function () {
		str=t.toString();
		str=str.length<2?"0:0"+str:"0:"+str;
		document.getElementById("thoigian").innerHTML = str;
		t-=1;
		if (t<0) { 
			hetgio();
			clearInterval(timeinterval);
		};
	},1000);
}

function hetgio () {
	alert("het gio");
}
//Ket thuc update
function tao_de (sl) {
	var kthuoc=sl*40+100;
	$("#de").css("width",kthuoc);
	var htmlstr="";
	for (var i = 1; i <= sl; i++) {
		htmlstr+="<td class=\"ode\"></td>";
	};
	$("#dongde").append(htmlstr);
}

function tao_board () {
	var htmlstr="";
	for (var i = 1; i <= 10; i++) {
		for (var j = 1; j <= 10; j++) {
			if ((i+j)%2==0) {
				htmlstr+="<td class=\"den\" id=\""+i+"-"+j+"\"></td>";
			} else{
				htmlstr+="<td class=\"trang\" id=\""+i+"-"+j+"\"></td>";
			};
		};
		htmlstr="<tr>"+htmlstr+"</tr>";
	};
	htmlstr="<table class=\"table table-bordered\"><tbody>"+htmlstr+"</tbody></table>";
	$("#board").append(htmlstr);
}

function chat () {
	$("#chat-input").show();
	$("#ds-input").hide();
}

function danhsach () {
	$("#chat-input").hide();
	$("#ds-input").show();
}