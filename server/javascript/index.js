var newsformat = document.getElementById('newsformat');
var newsforb = document.getElementById('newsforb');
var listLeftbg = document.getElementById('listLeftbg');
var uls = document.getElementById('uls');
var resf = document.getElementById('resf');
var active = document.getElementById('active');
var preludeleft = document.getElementById('prelude-left');
var third = document.getElementById('third');
var tit = document.getElementById('tit');
var timti = document.getElementById('timti2');
var time2 = document.getElementById('time2');
var newsftit2 = document.getElementById('newsf-tit2');
var shrman2 = document.getElementById('shrman2');
var heightd = 180;

//新闻资讯
var newsuls = document.getElementById('newsuls');
var tbody = document.getElementById('tbody');
var firstpb = document.getElementById('firstpb');
//科技动态
var newsulst = document.getElementById('newsulst');
newsulst.addEventListener('click',function(event){
	if (event.target.className === 'newsuli') {
		newsformat.style.display = 'block';
		tbody.style.display = 'none';
		firstpb.style.display = 'none';
        var m = parseInt(event.target.getAttribute('theid'));
        $.get("http://111.231.218.156:8080/Lab/api/Dynamic/getDynamic", {id: m}, function(result){
            $("#checkResult").html(result);
            if (result.status === 1) {
                newsftit2.innerHTML = result.data.title;
                zhengw.innerHTML = result.data.content;
                time2.innerHTML = result.data.time;
                shrman2.innerHTML = result.data.publisher;
                console.log(time2);
                console.log(shrman2);
                console.log(result.data.title);
                console.log(result.data.time);
                console.log(result.data.publisher);
            }
        });
	}
},false);
//科技动态MORE
var first = document.getElementById('first');
var second = document.getElementById('second');
var srow3 = document.getElementById('srow3');
var trow3 = document.getElementById('trow3');
var newstopright2 = document.getElementById('newstopright2');
newstopright2.addEventListener('click',function(){
	newsformat.style.display = 'none';
	tbody.style.display = 'block';
	firstpb.style.display = 'none';
    first.style.display = 'none';
    second.style.display = 'block';
    third.style.display = 'none';
    srow3.style.display = 'block';
    trow3.style.display = 'none';
    wenb.style.display = 'none';
    tit.style.display = 'none';
    timti.style.display = 'none';
	listLeftbg.innerHTML = newstopright2.parentNode.children[0].innerHTML;
	preludeleft.innerHTML = newstopright2.parentNode.children[0].innerHTML;
	active.style.display = 'none';
	for(var i = 0;i < uls.children.length;i++){
		uls.children[i].style.display = 'none';
	}
},false);
//学术交流
var academicul = document.getElementById('academicul');
academicul.addEventListener('click',function(event){
	if (event.target.className === 'newsuli') {
		newsformat.style.display = 'block';
		tbody.style.display = 'none';
		firstpb.style.display = 'none';
        console.log(event.target);
		var m = parseInt(event.target.getAttribute('theid'));
        $.get("http://111.231.218.156:8080/Lab/api/Academic/getAcademic", {id: m}, function(result){
            $("#checkResult").html(result);
            if (result.status === 1) {
                newsftit2.innerHTML = result.data.title;
                zhengw.innerHTML = result.data.content;
                time2.innerHTML = result.data.time;
                shrman2.innerHTML = result.data.publisher;
            }
        });
	}
},false);
//学术交流MORE
var academicright = document.getElementById('academic-right');
academicright.addEventListener('click',function(){
	newsformat.style.display = 'none';
	tbody.style.display = 'block';
	firstpb.style.display = 'none';
    wenb.style.display = 'none';
    first.style.display = 'none';
    second.style.display = 'none';
    third.style.display = 'block';
    srow3.style.display = 'none';
    trow3.style.display = 'block';
    tit.style.display = 'none';
    timti.style.display = 'none';
	listLeftbg.innerHTML = '合作交流';
	preludeleft.innerHTML = '合作交流';
	active.innerHTML = academicright.parentNode.children[0].innerHTML;
	for(var i = 0;i < uls.children.length;i++){
		uls.children[0].children[0].innerHTML = '学术交流';
		uls.children[0].style.backgroundColor = '#337ab7';
		uls.children[0].children[0].style.color = '#fff';
		uls.children[1].children[0].innerHTML = '国际合作';
		uls.children[2].children[0].innerHTML = '校企合作';
		uls.children[3].style.display = 'none';
		uls.children[4].style.display = 'none';
	}
},false);