const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event){
	if(event.keyCode === 13){
		search();
	}
})

function search(){
	const input = searchInput.value;

	window.location.href = "https://www.google.com/search?q=" + input + "&oq=" + input + "&aqs=chrome..69i57.3939j0j1&sourceid=chrome&ie=UTF-8"
}