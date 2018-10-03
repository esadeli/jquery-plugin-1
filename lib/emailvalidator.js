(function ($) {
	$.fn.emailValidator = function (email) {

		// your code here
		let regex = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        return regex.test(email)
	}
})(jQuery)