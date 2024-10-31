let field = document.getElementById("inp_field");

function clear() {
	field.value = "";
}

document.querySelectorAll('button').forEach(function(btn) {
	btn.addEventListener('click', function() {
		if (btn.textContent == "C") {
			clear();
			
		} else if (btn.textContent == "=") {
			try {
				field.value = eval(field.value);
			} catch(e) {
				field.value = "Error";
				console.log(e);
			}
			
		} else if (btn.textContent == "+/-") {

			field.value = -field.value;
			
		} else {
			field.value += btn.textContent;
		}
	})
});
