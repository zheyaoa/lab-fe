var newsformat = document.getElementById('newsformat');
var newsforb = document.getElementById('newsforb');
var heightd = 210;
newsformat.style.height = '900px';
// console.log(newsforb.offsetHeight);
if (newsforb.offsetHeight + heightd > 900) {
	newsformat.style.height = newsforb.offsetHeight + heightd + 'px';
}
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