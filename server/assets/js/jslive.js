(function (window) {

	function getCode () {
		var code;
		code = $('.main-input-area').val()
		return code;
	}

	function recompileCode () {
		try	{
			eval(getCode());
		}
		catch(e) {			
		}
	}

	function recompileCodeWithDelay () {
		if(this.timer) clearTimeout(this.timer);
		this.timer = setTimeout(recompileCode,2000);
	}

	function setTextChangeListener () {
		$('.main-input-area').bind('input propertychange',function () {
			recompileCodeWithDelay()
		})
	}


	$(document).ready(function () {
		setTextChangeListener()
	})
})(window);