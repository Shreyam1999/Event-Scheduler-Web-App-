//Check off Specific Todos By Clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click","span",function(eventobj){
$(this).parent().fadeOut(700,function(){
	$(this).remove();
});
eventobj.stopPropagation();
})

//Adding new Todos by input text
$("input[type='text'").keypress(function(eventobj){
if(eventobj.which === 13){
	var newItem=$(this).val();
	$(this).val("");

	$("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + newItem + "</li>")
}	

});


$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});