var newsformat = document.getElementById('newsformat');
var newsforb = document.getElementById('newsforb');

var newsuls = document.getElementById('newsuls');
var tbody = document.getElementById('tbody');
var firstpb = document.getElementById('firstpb');
newsuls.addEventListener('click',function(event){
	if (event.target.className === 'newsuli') {
		newsformat.style.display = 'block';
		tbody.style.display = 'none';
		firstpb.style.display = 'none';
	}
},false);