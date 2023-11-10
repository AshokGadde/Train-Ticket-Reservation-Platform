var count = 0;
 
function result(){
	document.write("Thanks for your feedback!")
}
 
function startRating(item){
	count=item.id[0];
	sessionStorage.star = count;
	for(var i=0;i<5;i++){
		if(i < count){
			document.getElementById((i+1)).style.color="yellow";
		}
		else{
			document.getElementById((i+1)).style.color="black";
		}
	}
}

