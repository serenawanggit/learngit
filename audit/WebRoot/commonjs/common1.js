function validateLogin(){
	var cookie = document.cookie;
	if (cookie && cookie != "") {
		var cookies = cookie.split(";");
		for (var i = 0; i < cookies.length; i++) {
			var index = cookies[i].lastIndexOf("=");
			var cookiename = cookies[i].substring(0, index);
			if (myTrim(cookiename) == "uvocookie") {
				var value = cookies[i].substring(index + 1, cookies[i].length);
				var array = value.split("&");
				var url =  "/login?name=" + array[1] + "&password=" + array[2];
				$.getJSON(url, function(data) {
					$("#showname").html(eval(data).showname);
				});
			}
		}
	} else {
		window.location.href ="/";
	}
}
function myTrim(str) {
	for (var i = 0; i < str.length; i++) {
		var star = str.substring(0, 1);
		if (star == " ") {
			str = str.substring(1, str.length);
		}
		var end = str.substring(str.length - 1, str.length);
		if (end == " ") {
			str = str.substring(0, str.length - 1);
		}
	}
	return str;
}
