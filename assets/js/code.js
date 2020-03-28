$('ul').on('click','li',function(){
	$(this).toggleClass('textCheck');
});
$('ul').on('click','span',function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("input[type='text'").keypress(function(event){
	if(event.which === 13 ){
	var toDoText = $(this).val();
	if( toDoText === "" ){
		alert("Please enter a valid value!!");
		stopPropagation();
	}
	$('ul').append('<li><span><i class="fa fa-trash"></i> </span>'+ toDoText +'</li>')
	$(this).val('');
	}
});
$('.fa-plus').on('click',function(){
	$('input').fadeToggle();
});
