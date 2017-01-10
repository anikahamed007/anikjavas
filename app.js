$(document).ready(function(){
	alert("this is my alert ");
	$("button").click(function(){
		var a = $("h1").text();
		$("h2").text(a);
	});
});