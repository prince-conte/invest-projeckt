	$(function() {
		$( "#slider_price2" ).slider({
			range: true,
			min: 0,
			max: 2500,
			values: [ 0, 5000 ],
			slide: function( event, ui ) {
				//Поле минимального значения
				$( "#price2" ).val(ui.values[ 0 ]);
				//Поле максимального значения
				$("#price2_2").val(ui.values[1]);			}
		});
		//Записываем значения ползунков в момент загрузки страницы
		//То есть значения по умолчанию
		$( "#price2" ).val($( "#slider_price2" ).slider( "values", 0 ));
		$("#price2_2").val($("#slider_price2").slider( "values", 1 ));
	});