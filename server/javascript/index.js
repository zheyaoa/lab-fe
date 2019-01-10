var newsformat = document.getElementById('newsformat');
var newsforb = document.getElementById('newsforb');
var listLeftbg = document.getElementById('listLeftbg');
var uls = document.getElementById('uls');
var resf = document.getElementById('resf');
var active = document.getElementById('active');
var preludeleft = document.getElementById('prelude-left');
var heightd = 180;
/*if (newsformat.style.display === 'block') {
    newsformat.style.height = '900px';
    console.log(newsforb.offsetHeight);
    if (newsforb.offsetHeight + heightd > 900) {
        newsformat.style.height = newsforb.offsetHeight + heightd + 'px';
    }
}*/
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
		if (event.target.id === '1') {
			$.get("http://111.231.218.156:8080/Lab/api/Dynamic/getDynamic", {id: 1}, function(result){
            $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
        	});
		}
		if (event.target.id === '2') {
			$.get("http://111.231.218.156:8080/Lab/api/Dynamic/getDynamic", {id: 2}, function(result){
            $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
        	});
		}
		if (event.target.id === '3') {
			$.get("http://111.231.218.156:8080/Lab/api/Dynamic/getDynamic", {id: 3}, function(result){
            $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
        	});
		}
		if (event.target.id === '4') {
			$.get("http://111.231.218.156:8080/Lab/api/Dynamic/getDynamic", {id: 4}, function(result){
            $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
        	});
		}
		if (event.target.id === '5') {
			$.get("http://111.231.218.156:8080/Lab/api/Dynamic/getDynamic", {id: 5}, function(result){
            $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
        	});
		}
		if (event.target.id === '6') {
			$.get("http://111.231.218.156:8080/Lab/api/Dynamic/getDynamic", {id: 6}, function(result){
            $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
        	});
		}
		if (event.target.id === '7') {
			$.get("http://111.231.218.156:8080/Lab/api/Dynamic/getDynamic", {id: 7}, function(result){
            $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
        	});
		}
		if (event.target.id === '8') {
			$.get("http://111.231.218.156:8080/Lab/api/Dynamic/getDynamic", {id: 8}, function(result){
            $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
        	});
		}
		if (event.target.id === '9') {
			$.get("http://111.231.218.156:8080/Lab/api/Dynamic/getDynamic", {id: 9}, function(result){
            $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
        	});
		}
		if (event.target.id === '10') {
			$.get("http://111.231.218.156:8080/Lab/api/Dynamic/getDynamic", {id: 10}, function(result){
            $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
        	});
		}
		if (event.target.id === '11') {
			$.get("http://111.231.218.156:8080/Lab/api/Dynamic/getDynamic", {id: 11}, function(result){
            $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
        	});
		}
		if (event.target.id === '12') {
			$.get("http://111.231.218.156:8080/Lab/api/Dynamic/getDynamic", {id: 12}, function(result){
            $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
        	});
		}
		if (event.target.id === '13') {
			$.get("http://111.231.218.156:8080/Lab/api/Dynamic/getDynamic", {id: 13}, function(result){
            $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
        	});
		}
		if (event.target.id === '14') {
			$.get("http://111.231.218.156:8080/Lab/api/Dynamic/getDynamic", {id: 14}, function(result){
            $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
        	});
		}
		if (event.target.id === '15') {
			$.get("http://111.231.218.156:8080/Lab/api/Dynamic/getDynamic", {id: 15}, function(result){
            $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
        	});
		}

	}
},false);
//科技动态MORE
var newstopright2 = document.getElementById('newstopright2');
newstopright2.addEventListener('click',function(){
	newsformat.style.display = 'none';
	tbody.style.display = 'block';
	firstpb.style.display = 'none';
	listLeftbg.innerHTML = newstopright2.parentNode.children[0].innerHTML;
	preludeleft.innerHTML = newstopright2.parentNode.children[0].innerHTML;
	active.style.display = 'none';
	for(var i = 0;i < uls.children.length;i++){
		uls.children[i].style.display = 'none';
	}
		$.get("http://111.231.218.156:8080/Lab/api/Dynamic/getDynamic", {id: 1}, function(result){
            $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                } 
        });
},false);
//学术交流
var academicul = document.getElementById('academicul');
academicul.addEventListener('click',function(event){
	if (event.target.className === 'newsuli') {
		newsformat.style.display = 'block';
		tbody.style.display = 'none';
		firstpb.style.display = 'none';
		if (event.target.id === '1') {
			$.get("http://111.231.218.156:8080/Lab/api/Academic/getAcademic", {id: 1}, function(result){
            $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
        	});
		}
		if (event.target.id === '2') {
			$.get("http://111.231.218.156:8080/Lab/api/Academic/getAcademic", {id: 2}, function(result){
            $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
        	});
		}
		if (event.target.id === '3') {
			$.get("http://111.231.218.156:8080/Lab/api/Academic/getAcademic", {id: 3}, function(result){
            $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
        	});
		}
		if (event.target.id === '4') {
			$.get("http://111.231.218.156:8080/Lab/api/Academic/getAcademic", {id: 4}, function(result){
            $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                } 
        	});
		}
		if (event.target.id === '5') {
			$.get("http://111.231.218.156:8080/Lab/api/Academic/getAcademic", {id: 5}, function(result){
            $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
        	});
		}
	}
},false);
//学术交流MORE
var academicright = document.getElementById('academic-right');
academicright.addEventListener('click',function(){
	newsformat.style.display = 'none';
	tbody.style.display = 'block';
	firstpb.style.display = 'none';
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
	$.get("http://111.231.218.156:8080/Lab/api/Academic/getAcademic", {id: 1}, function(result){
            $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                } else if (result.status === 404) {
                    
                }
        });
},false);
//详细信息
var xinfor = document.getElementById('xinfor');
xinfor.addEventListener('click',function(){
	newsformat.style.display = 'none';
	tbody.style.display = 'block';
	firstpb.style.display = 'none';
	listLeftbg.innerHTML = '实验室概况';
	preludeleft.innerHTML = '实验室概况';
	active.innerHTML = '工作简介';
	for(var i = 0;i < uls.children.length;i++){
		uls.children[0].children[0].innerHTML = '工作简介';
		uls.children[0].style.backgroundColor = '#337ab7';
		uls.children[0].children[0].style.color = '#fff';
		uls.children[1].children[0].innerHTML = '工作条例';
		uls.children[2].style.display = 'none';
		uls.children[3].style.display = 'none';
		uls.children[4].style.display = 'none';
	}
		$.get("http://111.231.218.156:8080/Lab/api/Introduction/getIntroductionById", {id: 1}, function(result){
            $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                } 
        });
},false);