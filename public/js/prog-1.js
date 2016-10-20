	$(function() {
		$( "#slider_price1" ).slider({
			range: true,
			min: 0,
			max: 5000,
			values: [ 0, 5000 ],
			slide: function( event, ui ) {
				//Поле минимального значения
				$( "#price1" ).val(ui.values[ 0 ]);
				//Поле максимального значения
				$("#price1_2").val(ui.values[1]);			}
		});
		//Записываем значения ползунков в момент загрузки страницы
		//То есть значения по умолчанию
		$( "#price1" ).val($( "#slider_price1" ).slider( "values", 0 ));
		$("#price1_2").val($("#slider_price1").slider( "values", 1 ));
	});