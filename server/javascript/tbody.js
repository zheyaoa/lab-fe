var uls = document.getElementById('uls');
var lis = uls.children;
var len = lis.length;
var breadcrumb = document.getElementById('breadcrumb');
var prelude = document.getElementById('prelude');
var active = document.getElementById('active');
var theader = document.getElementById('theader');
var listLeftbg = document.getElementById('listLeftbg');
var tbody = document.getElementById('tbody');
var tbodyleft = document.getElementById('tbody-left');
var tbodyright = document.getElementById('tbody-right');
var firstpb = document.getElementById('firstpb');
var newsformat = document.getElementById('newsformat');
var cont = document.getElementById('cont');
var tit = document.getElementById('tit');
var timti = document.getElementById('timti');
var timti2 = document.getElementById('timti2');
var wenb = document.getElementById('wenb');
var time = document.getElementById('time');
var shrman = document.getElementById('shrman');
var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');
var four = document.getElementById('four');
var five = document.getElementById('five');
var frow3 = document.getElementById('frow3');
var srow3 = document.getElementById('srow3');
var trow3 = document.getElementById('trow3');
var trow4 = document.getElementById('trow4');
var trow5 = document.getElementById('trow5');
var syyq = document.getElementById('syyq');
var newsftit = document.getElementById('newsf-tit');
var zhengw = document.getElementById('zhengw');
var tup = document.getElementById('tup');
var thename = document.getElementById('thename');
var thephone = document.getElementById('thephone');
var neiro = document.getElementById('neiro');
var newsulst = document.getElementById('newsulst');
var academicul = document.getElementById('academicul');
var time2 = document.getElementById('time2');
var newsftit2 = document.getElementById('newsf-tit2');
var shrman2 = document.getElementById('shrman2');

// timti.style.display = 'block';


syyq.style.padding = '20px 0px 0px';
four.style.padding = '20px 0px 0px';
five.style.padding = '20px 0px 0px';
//头部导航栏部分
theader.addEventListener('click',function(event){
	if (event.target.innerHTML === '首页') {
		tbody.style.display = 'none';
		firstpb.style.display = 'block';
		newsformat.style.display = 'none';
	}
	else if (event.target.className === 'header-nav-item') {
        tbody.style.display = 'block';
        firstpb.style.display = 'none';
        newsformat.style.display = 'none';
        syyq.style.display = 'none';
    if (event.target.children.length != 0) {
        active.style.display = 'inline-block';
        active.innerHTML = event.target.children[0].children[0].innerHTML;
    }
	listLeftbg.innerHTML = event.target.innerHTML;
	
	tbody.style.display = 'block';
	firstpb.style.display = 'none';
	prelude.children[0].innerHTML = event.target.innerHTML;
	//点击头部导航栏时，路径消失,并且左侧导航栏背景颜色全部变成默认颜色
	active.style.display = 'none';
	//点击头部导航栏的下拉菜单，左侧导航栏的内容为头部导航栏下拉菜单的内容，多余的进行隐藏
	if (event.target.children[0]) {
		for(var j = 0;j < event.target.children[0].children.length;j++){
			lis[j].children[0].innerHTML = event.target.children[0].children[j].innerHTML;
			lis[j].style.backgroundColor = '';
			lis[j].children[0].style.color = '#666';
		}
		for(var m = 0;m < 5;m++){
			lis[m].setAttribute("class","block");
		}
		for(var i = event.target.children[0].children.length;i < 5;i++){
				lis[i].setAttribute("class","none");
			}
	} else {
		for(var m = 0;m < 5;m++){
			lis[m].setAttribute("class","none");
		}
	}
	//接口部分start
	if (event.target.childNodes[0].nodeValue === '联系我们') {
        wenb.style.display = 'block';
        tit.style.display = 'block';
        timti.style.display = 'block';
        yqye.style.display = 'none';
        $.get("http://111.231.218.156:8080/Lab/api/Contact/getContact", {id: 1}, function(result){
            $("#checkResult").html(result);
            if (result.status === 1) {
                tit.innerHTML = result.data.title;
                wenb.innerHTML = result.data.content;
                time.innerHTML = result.data.time;
                shrman.innerHTML = result.data.publisher;
            }
        });
	}
	if (event.target.childNodes[0].nodeValue === '人才招聘') {
        wenb.style.display = 'block';
        tit.style.display = 'block';
        timti.style.display = 'block';
        yqye.style.display = 'none';
        $.get("http://111.231.218.156:8080/Lab/api/Recruit/getRecruit", {id: 1}, function(result){
            $("#checkResult").html(result);
            if (result.status === 1) {
                tit.innerHTML = result.data.title;
                wenb.innerHTML = result.data.content;
                time.innerHTML = result.data.time;
                shrman.innerHTML = result.data.publisher;
            }
        });
	}
	if (event.target.childNodes[0].nodeValue === '科技动态') {
        syyq.style.display = 'block';
        first.style.display = 'none';
        second.style.display = 'block';
        yqye.style.display = 'none';
        third.style.display = 'none';
        four.style.display = 'none';
        five.style.display = 'none';
        frow3.style.display = 'none';
        srow3.style.display = 'block';
        trow3.style.display = 'none';
        trow4.style.display = 'none';
        trow5.style.display = 'none';
        wenb.style.display = 'none';
        tit.style.display = 'none';
        timti.style.display = 'none';
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
	if (event.target.childNodes[0].nodeValue === '仪器平台') {
        wenb.style.display = 'none';
        syyq.style.display = 'block';
        yqye.style.display = 'none';
        first.style.display = 'block';
        frow3.style.display = 'block';
        second.style.display = 'none';
        srow3.style.display = 'none';
        third.style.display = 'none';
        trow3.style.display = 'none';
        four.style.display = 'none';
        trow4.style.display = 'none';
        five.style.display = 'none';
        trow5.style.display = 'none';
        tit.style.display = 'none';
        timti.style.display = 'none';
        $.get("http://111.231.218.156:8080/Lab/api/Instrument/getInstrumentById", {id: 1}, function(result){
            $("#checkResult").html(result);
            if (result.status === 1) {
                tit.innerHTML = result.data.title;
                wenb.innerHTML = result.data.content;
                time.innerHTML = result.data.time;
                shrman.innerHTML = result.data.publisher;
            } 
        });
	}
	if (event.target.childNodes[0].nodeValue === '人才培养') {
        wenb.style.display = 'block';
        tit.style.display = 'block';
        timti.style.display = 'block';
        yqye.style.display = 'none';
        $.get("http://111.231.218.156:8080/Lab/api/PersonnelTraining/getPersonnelTraining", {id: 1}, function(result){
            $("#checkResult").html(result);
            if (result.status === 1) {
                tit.innerHTML = result.data.title;
                wenb.innerHTML = result.data.content;
                time.innerHTML = result.data.time;
                shrman.innerHTML = result.data.publisher;
            }
        });
	}
	if (event.target.childNodes[0].nodeValue === '合作交流') {//默认是学术交流
        wenb.style.display = 'none';
        syyq.style.display = 'block';
        yqye.style.display = 'none';
        first.style.display = 'none';
        second.style.display = 'none';
        third.style.display = 'block';
        four.style.display = 'none';
        five.style.display = 'none';
        frow3.style.display = 'none';
        srow3.style.display = 'none';
        trow3.style.display = 'block';
        trow4.style.display = 'none';
        trow5.style.display = 'none';
        tit.style.display = 'none';
        timti.style.display = 'none';
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
	if (event.target.childNodes[0].nodeValue === '科研成果') {//默认是科研项目
        wenb.style.display = 'block';
        tit.style.display = 'block';
        timti.style.display = 'block';
        yqye.style.display = 'none';
        $.get("http://111.231.218.156:8080/Lab/api/ResearchResults/getResearchResults", {id: 1}, function(result){
            $("#checkResult").html(result);
            if (result.status === 1) {
                tit.innerHTML = result.data.title;
                wenb.innerHTML = result.data.content;
                time.innerHTML = result.data.time;
                shrman.innerHTML = result.data.publisher;
            }
        });
	}
	if (event.target.childNodes[0].nodeValue === '科研队伍') {//默认是教授
        wenb.style.display = 'block';
        tit.style.display = 'block';
        timti.style.display = 'block';
        yqye.style.display = 'none';
        $.get("http://111.231.218.156:8080/Lab/api/ResearchTeam/getResearchTeam", {id: 1}, function(result){
            $("#checkResult").html(result);
            if (result.status === 1) {
                tit.innerHTML = result.data.title;
                wenb.innerHTML = result.data.content;
                time.innerHTML = result.data.time;
                shrman.innerHTML = result.data.publisher;
            }
        });
	}
	if (event.target.childNodes[0].nodeValue === '研究领域') {//默认是绿色建筑材料研究
        wenb.style.display = 'block';
        tit.style.display = 'block';
        timti.style.display = 'block';
        yqye.style.display = 'none';
        $.get("http://111.231.218.156:8080/Lab/api/ResearchAreas/getResearchAreas", {id: 1}, function(result){
            $("#checkResult").html(result);
            if (result.status === 1) {
                tit.innerHTML = result.data.title;
                wenb.innerHTML = result.data.content;
                time.innerHTML = result.data.time;
                shrman.innerHTML = result.data.publisher;
            }
        });
	}
	if (event.target.childNodes[0].nodeValue === '实验室简介') {//默认是工作室简介
        wenb.style.display = 'block';
        timti.style,display = 'none';
        $.get("http://111.231.218.156:8080/Lab/api/Introduction/getIntroductionById", {id: 1}, function(result){
            $("#checkResult").html(result);
            if (result.status === 1) {
                tit.innerHTML = result.data.title;
                wenb.innerHTML = result.data.content;
                time.innerHTML = result.data.time;
                shrman.innerHTML = result.data.publisher;
            }
        });
	}
	//接口部分end
	} else {//点击头部导航栏下拉内容时
		tbody.style.display = 'block';
		firstpb.style.display = 'none';
		newsformat.style.display = 'none';
        wenb.style.display = 'block';
        syyq.style.display = 'none';
		for(var i = 0;i < event.target.parentNode.children.length;i++){
			var li = lis[i];
			if (event.target.parentNode.children[i].innerHTML === event.target.innerHTML) {
				for(var s = 0;s < len;s++){
					lis[s].style.backgroundColor = '';
					lis[s].children[0].style.color = '#666';
				}
				lis[i].style.backgroundColor = '#2667c6';
				lis[i].children[0].style.color = '#fff';
				for(var t = 0;t < event.target.parentNode.parentNode.childNodes.length;t++){
					if (event.target.parentNode.parentNode.childNodes[0].nodeType === 3) {
						listLeftbg.innerHTML = event.target.parentNode.parentNode.childNodes[0].nodeValue;
						prelude.children[0].innerHTML = event.target.parentNode.parentNode.childNodes[0].nodeValue;
					}
				}
				for(var j = 0;j < event.target.parentNode.parentNode.children[0].children.length;j++){
					lis[j].children[0].innerHTML = event.target.parentNode.parentNode.children[0].children[j].innerHTML;
				}
				for(var m = 0;m < 5;m++){
					lis[m].setAttribute("class","block");
				}
				for(var i = event.target.parentNode.parentNode.children[0].children.length;i < 5;i++){
					lis[i].setAttribute("class","none");
				}
				active.style.display = 'inline-block';
				active.innerHTML = event.target.innerHTML;
			}
		}
        //接口部分start
        if (event.target.parentNode.parentNode.childNodes[0].nodeValue === '仪器平台') {
            if (event.target.innerHTML === '科研仪器') {
                wenb.style.display = 'none';
                syyq.style.display = 'block';
                yqye.style.display = 'none';
                first.style.display = 'block';
                frow3.style.display = 'block';
                second.style.display = 'none';
                srow3.style.display = 'none';
                third.style.display = 'none';
                trow3.style.display = 'none';
                four.style.display = 'none';
                five.style.display = 'none';
                trow4.style.display = 'none';
                trow5.style.display = 'none';
                tit.style.display = 'none';
                timti.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/Instrument/getInstrumentById", {id: 1}, function(result){
                $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
            });
            }
            if (event.target.innerHTML === '仪器共享') {
                syyq.style.display = 'none';
                wenb.style.display = 'block';
                tit.style.display = 'block';
                timti.style.display = 'block';
                yqye.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/Instrument/getInstrumentById", {id: 2}, function(result){
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
        if (event.target.parentNode.parentNode.childNodes[0].nodeValue === '人才培养') {
            if (event.target.innerHTML === '博士后') {
                tit.style.display = 'block';
                timti.style.display = 'block';
                yqye.style.display = 'none';
            $.get("http://111.231.218.156:8080/Lab/api/PersonnelTraining/getPersonnelTraining", {id: 1}, function(result){
                $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
            });
        }
        if (event.target.innerHTML === '博士研究生') {
            tit.style.display = 'block';
            timti.style.display = 'block';
            yqye.style.display = 'none';
            $.get("http://111.231.218.156:8080/Lab/api/PersonnelTraining/getPersonnelTraining", {id: 2}, function(result){
                $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
            });
        }
        if (event.target.innerHTML === '硕士研究生') {
            tit.style.display = 'block';
            timti.style.display = 'block';
            yqye.style.display = 'none';
            $.get("http://111.231.218.156:8080/Lab/api/PersonnelTraining/getPersonnelTraining", {id: 3}, function(result){
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
        //合作交流
        if (event.target.parentNode.parentNode.childNodes[0].nodeValue === '合作交流') {
        //学术交流
        if (event.target.innerHTML === '学术交流') {
            wenb.style.display = 'none';
            syyq.style.display = 'block';
            yqye.style.display = 'none';
            first.style.display = 'none';
            second.style.display = 'none';
            third.style.display = 'block';
            frow3.style.display = 'none';
            srow3.style.display = 'none';
            trow3.style.display = 'block';
            tit.style.display = 'none';
            timti.style.display = 'none';
            four.style.display = 'none';
            five.style.display = 'none';
            trow4.style.display = 'none';
            trow5.style.display = 'none';
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
        //国际合作
        if (event.target.innerHTML === '国际合作') {
            tit.style.display = 'none';
            timti.style.display = 'none';
            wenb.style.display = 'none';
            first.style.display = 'none';
            yqye.style.display = 'none';
            syyq.style.display = 'block';
            third.style.display = 'none';
            four.style.display = 'block';
            five.style.display = 'none';
            frow3.style.display = 'none';
            trow3.style.display = 'none';
            trow4.style.display = 'block';
            trow5.style.display = 'none';
            $.get("http://111.231.218.156:8080/Lab/api/International/getInternational", {id: 2}, function(result){
                $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
            });
        }
        //校企合作
        if (event.target.innerHTML === '校企合作') {
            tit.style.display = 'none';
            timti.style.display = 'none';
            wenb.style.display = 'none';
            first.style.display = 'none';
            yqye.style.display = 'none';
            syyq.style.display = 'block';
            third.style.display = 'none';
            four.style.display = 'none';
            five.style.display = 'block';
            frow3.style.display = 'none';
            trow3.style.display = 'none';
            trow4.style.display = 'none';
            trow5.style.display = 'block';
            $.get("http://111.231.218.156:8080/Lab/api/School/getSchool", {id: 2}, function(result){
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
        //科研成果
        if (event.target.parentNode.parentNode.childNodes[0].nodeValue === '科研成果') {
            if (event.target.innerHTML === '科研项目') {
                tit.style.display = 'block';
                timti.style.display = 'block';
                yqye.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/ResearchResults/getResearchResults", {id: 1}, function(result){
                    $("#checkResult").html(result);
                    if (result.status === 1) {
                        tit.innerHTML = result.data.title;
                        wenb.innerHTML = result.data.content;
                        time.innerHTML = result.data.time;
                        shrman.innerHTML = result.data.publisher;
                    }
                });
            }
            if (event.target.innerHTML === '发表论文') {
                tit.style.display = 'block';
                timti.style.display = 'block';
                yqye.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/ResearchResults/getResearchResults", {id: 2}, function(result){
                    $("#checkResult").html(result);
                    if (result.status === 1) {
                        tit.innerHTML = result.data.title;
                        wenb.innerHTML = result.data.content;
                        time.innerHTML = result.data.time;
                        shrman.innerHTML = result.data.publisher;
                    }
                });
            }
            if (event.target.innerHTML === '授权专利') {
                tit.style.display = 'block';
                timti.style.display = 'block';
                yqye.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/ResearchResults/getResearchResults", {id: 3}, function(result){
                    $("#checkResult").html(result);
                    if (result.status === 1) {
                        tit.innerHTML = result.data.title;
                        wenb.innerHTML = result.data.content;
                        time.innerHTML = result.data.time;
                        shrman.innerHTML = result.data.publisher;
                    }
                });
            }
            if (event.target.innerHTML === '科研成果奖') {
                tit.style.display = 'block';
                timti.style.display = 'block';
                yqye.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/ResearchResults/getResearchResults", {id: 4}, function(result){
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
        //研究领域
        if (event.target.parentNode.parentNode.childNodes[0].nodeValue === '研究领域') {
            if (event.target.innerHTML === '绿色建筑材料研究') {
                tit.style.display = 'block';
                timti.style.display = 'block';
                yqye.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/ResearchAreas/getResearchAreas", {id: 1}, function(result){
                    $("#checkResult").html(result);
                    if (result.status === 1) {
                        tit.innerHTML = result.data.title;
                        wenb.innerHTML = result.data.content;
                        time.innerHTML = result.data.time;
                        shrman.innerHTML = result.data.publisher;
                    }
                });
            }
            if (event.target.innerHTML === '高性能围护结构研究') {
                tit.style.display = 'block';
                timti.style.display = 'block';
                yqye.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/ResearchAreas/getResearchAreas", {id: 2}, function(result){
                    $("#checkResult").html(result);
                    if (result.status === 1) {
                        tit.innerHTML = result.data.title;
                        wenb.innerHTML = result.data.content;
                        time.innerHTML = result.data.time;
                        shrman.innerHTML = result.data.publisher;
                    }
                });
            }
            if (event.target.innerHTML === '新型装配化结构体系研究') {
                tit.style.display = 'block';
                timti.style.display = 'block';
                yqye.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/ResearchAreas/getResearchAreas", {id: 3}, function(result){
                    $("#checkResult").html(result);
                    if (result.status === 1) {
                        tit.innerHTML = result.data.title;
                        wenb.innerHTML = result.data.content;
                        time.innerHTML = result.data.time;
                        shrman.innerHTML = result.data.publisher;
                    }
                });
            }
            if (event.target.innerHTML === '健康舒适的室内环境营造技术研究') {
                tit.style.display = 'block';
                timti.style.display = 'block';
                yqye.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/ResearchAreas/getResearchAreas", {id: 4}, function(result){
                    $("#checkResult").html(result);
                    if (result.status === 1) {
                        tit.innerHTML = result.data.title;
                        wenb.innerHTML = result.data.content;
                        time.innerHTML = result.data.time;
                        shrman.innerHTML = result.data.publisher;
                    }
                });
            }
            if (event.target.innerHTML === '超低能耗建筑使用后评估研究') {
                tit.style.display = 'block';
                timti.style.display = 'block';
                yqye.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/ResearchAreas/getResearchAreas", {id: 5}, function(result){
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
        if (event.target.parentNode.parentNode.childNodes[0].nodeValue === '实验室简介') {
            if (event.target.innerHTML === '实验室概况') {
                tit.style.display = 'block';
                timti.style.display = 'block';
                yqye.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/Introduction/getIntroductionById", {id: 1}, function(result){
                $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
            });
        }
        if (event.target.innerHTML === '组织结构') {
            tit.style.display = 'block';
            timti.style.display = 'block';
            yqye.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/Introduction/getIntroductionById", {id: 2}, function(result){
                $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
            });
        }
        if (event.target.innerHTML === '管理委员会') {
            tit.style.display = 'block';
            timti.style.display = 'block';
            yqye.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/Introduction/getIntroductionById", {id: 3}, function(result){
                $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
            });
        }
        if (event.target.innerHTML === '学术委员会') {
            tit.style.display = 'block';
            timti.style.display = 'block';
            yqye.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/Introduction/getIntroductionById", {id: 4}, function(result){
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
        //接口部分end
	}
},false);

//1.给左边的导航栏注册点击事件
uls.addEventListener('click',function(){
	if (event.target.parentNode.nodeName === 'LI') {
		for(var i = 0;i < event.target.parentNode.parentNode.children.length;i++){
			event.target.parentNode.parentNode.children[i].style.backgroundColor = '';
			event.target.parentNode.parentNode.children[i].children[0].style.color = '#666';
		}
		event.target.parentNode.style.backgroundColor = '#2667c6';
		event.target.style.color = '#fff';
		breadcrumb.children[3].innerHTML = event.target.innerHTML;
		//点击左侧导航栏时，显示路径
		active.style.display = 'inline-block';
        //接口start
        //实验室简介
        if (event.target.innerHTML === '实验室概况') {
            tit.style.display = 'block';
            timti.style.display = 'block';
            yqye.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/Introduction/getIntroductionById", {id: 1}, function(result){
                $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
            });
        }
        if (event.target.innerHTML === '组织结构') {
            tit.style.display = 'block';
            timti.style.display = 'block';
            yqye.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/Introduction/getIntroductionById", {id: 2}, function(result){
                $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
            });
        }
        if (event.target.innerHTML === '管理委员会') {
            tit.style.display = 'block';
            timti.style.display = 'block';
            yqye.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/Introduction/getIntroductionById", {id: 3}, function(result){
                $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
            });
        }
        if (event.target.innerHTML === '学术委员会') {
            tit.style.display = 'block';
            timti.style.display = 'block';
            yqye.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/Introduction/getIntroductionById", {id: 4}, function(result){
                $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
            });
        }
        //研究领域
        if (event.target.innerHTML === '绿色建筑材料研究') {
            tit.style.display = 'block';
            timti.style.display = 'block';
            yqye.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/ResearchAreas/getResearchAreas", {id: 1}, function(result){
                $("#checkResult").html(result);
                    if (result.status === 1) {
                        tit.innerHTML = result.data.title;
                        wenb.innerHTML = result.data.content;
                        time.innerHTML = result.data.time;
                        shrman.innerHTML = result.data.publisher;
                    }
                });
            }
            if (event.target.innerHTML === '高性能围护结构研究') {
                tit.style.display = 'block';
                timti.style.display = 'block';
                yqye.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/ResearchAreas/getResearchAreas", {id: 2}, function(result){
                $("#checkResult").html(result);
                    if (result.status === 1) {
                        tit.innerHTML = result.data.title;
                        wenb.innerHTML = result.data.content;
                        time.innerHTML = result.data.time;
                        shrman.innerHTML = result.data.publisher;
                    }
                });
            }
            if (event.target.innerHTML === '新型装配化结构体系研究') {
                tit.style.display = 'block';
                timti.style.display = 'block';
                yqye.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/ResearchAreas/getResearchAreas", {id: 3}, function(result){
                $("#checkResult").html(result);
                    if (result.status === 1) {
                        tit.innerHTML = result.data.title;
                        wenb.innerHTML = result.data.content;
                        time.innerHTML = result.data.time;
                        shrman.innerHTML = result.data.publisher;
                    }
                });
            }
            if (event.target.innerHTML === '健康舒适的室内环境营造技术研究') {
                tit.style.display = 'block';
                timti.style.display = 'block';
                yqye.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/ResearchAreas/getResearchAreas", {id: 4}, function(result){
                $("#checkResult").html(result);
                    if (result.status === 1) {
                        tit.innerHTML = result.data.title;
                        wenb.innerHTML = result.data.content;
                        time.innerHTML = result.data.time;
                        shrman.innerHTML = result.data.publisher;
                    }
                });
            }
            if (event.target.innerHTML === '超低能耗建筑使用后评估研究') {
                tit.style.display = 'block';
                timti.style.display = 'block';
                yqye.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/ResearchAreas/getResearchAreas", {id: 5}, function(result){
                $("#checkResult").html(result);
                    if (result.status === 1) {
                        tit.innerHTML = result.data.title;
                        wenb.innerHTML = result.data.content;
                        time.innerHTML = result.data.time;
                        shrman.innerHTML = result.data.publisher;
                    }
                });
            }
        //科研成果
        if (event.target.innerHTML === '科研项目') {
            tit.style.display = 'block';
            timti.style.display = 'block';
            yqye.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/ResearchResults/getResearchResults", {id: 1}, function(result){
                $("#checkResult").html(result);
                    if (result.status === 1) {
                        tit.innerHTML = result.data.title;
                        wenb.innerHTML = result.data.content;
                        time.innerHTML = result.data.time;
                        shrman.innerHTML = result.data.publisher;
                    }
                });
            }
            if (event.target.innerHTML === '发表论文') {
                tit.style.display = 'block';
                timti.style.display = 'block';
                yqye.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/ResearchResults/getResearchResults", {id: 2}, function(result){
                $("#checkResult").html(result);
                    if (result.status === 1) {
                        tit.innerHTML = result.data.title;
                        wenb.innerHTML = result.data.content;
                        time.innerHTML = result.data.time;
                        shrman.innerHTML = result.data.publisher;
                    }
                });
            }
            if (event.target.innerHTML === '授权专利') {
                tit.style.display = 'block';
                timti.style.display = 'block';
                yqye.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/ResearchResults/getResearchResults", {id: 3}, function(result){
                $("#checkResult").html(result);
                    if (result.status === 1) {
                        tit.innerHTML = result.data.title;
                        wenb.innerHTML = result.data.content;
                        time.innerHTML = result.data.time;
                        shrman.innerHTML = result.data.publisher;
                    }
                });
            }
            if (event.target.innerHTML === '科研成果奖') {
                tit.style.display = 'block';
                timti.style.display = 'block';
                yqye.style.display = 'none';
                $.get("http://111.231.218.156:8080/Lab/api/ResearchResults/getResearchResults", {id: 4}, function(result){
                $("#checkResult").html(result);
                    if (result.status === 1) {
                        tit.innerHTML = result.data.title;
                        wenb.innerHTML = result.data.content;
                        time.innerHTML = result.data.time;
                        shrman.innerHTML = result.data.publisher;
                    }
                });
            }
        //合作交流
        //学术交流
        if (event.target.innerHTML === '学术交流') {
            syyq.style.display = 'block';
            wenb.style.display = 'none';
            first.style.display = 'none';
            second.style.display = 'none';
            third.style.display = 'block';
            four.style.display = 'none';
            five.style.display = 'none';
            frow3.style.display = 'none';
            srow3.style.display = 'none';
            trow3.style.display = 'block';
            trow4.style.display = 'none';
            trow5.style.display = 'none';
            tit.style.display = 'none';
            timti.style.display = 'none';
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
        //国际合作
        if (event.target.innerHTML === '国际合作') {
            syyq.style.display = 'none';
            wenb.style.display = 'none';
            tit.style.display = 'none';
            timti.style.display = 'none';
            wenb.style.display = 'none';
            first.style.display = 'none';
            syyq.style.display = 'block';
            yqye.style.display = 'none';
            third.style.display = 'none';
            four.style.display = 'block';
            five.style.display = 'none';
            trow3.style.display = 'none';
            trow4.style.display = 'block';
            trow5.style.display = 'none';
            $.get("http://111.231.218.156:8080/Lab/api/International/getInternational", {id: 2}, function(result){
                $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
            });
        }
        //校企合作
        if (event.target.innerHTML === '校企合作') {
            syyq.style.display = 'none';
            wenb.style.display = 'none';
            tit.style.display = 'none';
            timti.style.display = 'none';
            wenb.style.display = 'none';
            first.style.display = 'none';
            syyq.style.display = 'block';
            yqye.style.display = 'none';
            third.style.display = 'none';
            four.style.display = 'none';
            five.style.display = 'block';
            trow4.style.display = 'none';
            trow5.style.display = 'block';
            $.get("http://111.231.218.156:8080/Lab/api/School/getSchool", {id: 2}, function(result){
                $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
            });
        }
        //人才培养
        if (event.target.innerHTML === '博士后') {
            tit.style.display = 'block';
            timti.style.display = 'block';
            yqye.style.display = 'none';
            $.get("http://111.231.218.156:8080/Lab/api/PersonnelTraining/getPersonnelTraining", {id: 1}, function(result){
                $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
            });
        }
        if (event.target.innerHTML === '博士研究生') {
            tit.style.display = 'block';
            timti.style.display = 'block';
            yqye.style.display = 'none';
            $.get("http://111.231.218.156:8080/Lab/api/PersonnelTraining/getPersonnelTraining", {id: 2}, function(result){
                $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
            });
        }
        if (event.target.innerHTML === '硕士研究生') {
            tit.style.display = 'block';
            timti.style.display = 'block';
            yqye.style.display = 'none';
            $.get("http://111.231.218.156:8080/Lab/api/PersonnelTraining/getPersonnelTraining", {id: 3}, function(result){
                $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
            });
        }
        //仪器平台
        //科研仪器
        if (event.target.innerHTML === '科研仪器') {
            wenb.style.display = 'none';
            syyq.style.display = 'block';
            yqye.style.display = 'none';
            first.style.display = 'block';
            frow3.style.display = 'block';
            second.style.display = 'none';
            srow3.style.display = 'none';
            third.style.display = 'none';
            trow3.style.display = 'none';
            four.style.display = 'none';
            five.style.display = 'none';
            trow4.style.display = 'none';
            trow5.style.display = 'none';
            tit.style.display = 'none';
            timti.style.display = 'none';
            $.get("http://111.231.218.156:8080/Lab/api/Instrument/getInstrumentById", {id: 5}, function(result){
                $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
            });
        }
        //仪器共享
        if (event.target.innerHTML === '仪器共享') {
            syyq.style.display = 'none';
            wenb.style.display = 'block';
            tit.style.display = 'block';
            timti.style.display = 'block';
            yqye.style.display = 'none';
            $.get("http://111.231.218.156:8080/Lab/api/Instrument/getInstrumentById", {id: 2}, function(result){
                $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
            });
        }
        //接口end
	}
},false);

//路径问题
var hpage = document.getElementById('hpage');
var resf = document.getElementById('resf');

//点击首页，tbody消失
var firstpage = document.getElementById('firstpage');
firstpage.addEventListener('click',function(){
	tbody.style.display = 'none';
},false);

//点击路径上的首页，转换到首页部分
var hpage = document.getElementById('hpage');
hpage.addEventListener('click',function(){
	tbody.style.display = 'none';
	firstpb.style.display = 'block';
},false);

//创建仪器对象
 function Instrument(num){
    //仪器的名称 仪器管理员 管理员电话 仪器的图片
    this.name = num.name;
    this.publisher = num.publisher;
    this.tel = num.tel;
    this.img = num.img;
}
Instrument.prototype.render = function(name,publisher,img,tel,i) {
    var first = document.getElementById('first');
    //设置整个仪器的大小
    var span1 = document.createElement('span');
    span1.style.display = 'inline-block';
    span1.style.width = '285px';
    span1.style.height = '220px';
    first.appendChild(span1);
    //设置图片
    var image1 = document.createElement('div');
    image1.style.width = '200px';
    image1.style.height = '150px';
    image1.style.margin = '0 auto';
    image1.setAttribute("class",i);
    span1.appendChild(image1);
    var a1 = document.createElement('a');
    a1.style.width = '200px';
    a1.style.height = '150px';
    a1.href = 'javascript:void(0)';
    image1.appendChild(a1);
    var imgs = document.createElement('img');
    imgs.setAttribute("class",i);
    imgs.style.width = '200px';
    imgs.style.height = '150px';
    imgs.src = img;
    a1.appendChild(imgs);
    //仪器名称
    var div1 = document.createElement('div');
    div1.style.height = '20px';
    span1.appendChild(div1);
    var a2 = document.createElement('a');
    a2.setAttribute("class",i);
    a2.style.margin = '0px 0px 0px 70px';
    a2.style.color = '#000';
    a2.style.width = '125px';
    a2.style.height = '20px';
    a2.style.display = 'inline-block';
    a2.href = 'javascript:void(0)';
    a2.style.textDecoration = 'none';
    a2.innerHTML = name;
    div1.appendChild(a2);
    //仪器管理员
    var div2 = document.createElement('div');
    div2.style.height = '20px';
    div2.style.margin = '5px 0px 0px 0px';
    span1.appendChild(div2);
    var adm = document.createElement('span');
    adm.style.display = 'inline-block';
    adm.style.width = '85px';
    adm.style.height = '20px';
    adm.innerHTML = '仪器管理员:';
    adm.style.margin = '0px 0px 0px 60px';
    div2.appendChild(adm);
    var xingm = document.createElement('span');
    xingm.style.display = 'inline-block';
    xingm.style.width = '60px';
    xingm.style.height = '20px';
    xingm.innerHTML = publisher;
    div2.appendChild(xingm);
    //电话
    var div3 = document.createElement('div');
    div3.style.height = '20px';
    span1.appendChild(div3);
    var pho = document.createElement('span');
    pho.style.display = 'inline-block';
    pho.style.width = '40px';
    pho.style.height = '20px';
    pho.innerHTML = '电话:';
    pho.style.margin = '0px 0px 0px 60px';
    div3.appendChild(pho);
    var dianh = document.createElement('span');
    dianh.style.display = 'inline-block';
    dianh.style.width = '105px';
    dianh.style.height = '20px';
    dianh.innerHTML = tel;
    div3.appendChild(dianh);
}


//实验仪器
var obj = [];
function reloadobj(){
    $.post("http://111.231.218.156:8080/Lab/api/Instrument/getAllInstrument", {id: 2}, function(result){
        $("#checkResult").html(result);
        if (result.status === 1) {
            for(var i = 0;i < result.data.length;i++){
                var thedata = {};
                thedata.name = result.data[i].name;
                thedata.publisher = result.data[i].publisher;
                thedata.tel = result.data[i].tel;
                thedata.img = result.data[i].img;
                thedata.id = result.data[i].id;
                obj.push(thedata);
            }
            for(var i = 0;i < obj.length;i++){
                var instru = new Instrument(obj[i]);
                instru.render(obj[i].name,obj[i].publisher,obj[i].img,obj[i].tel,obj[i].id);
            }
            //仪器个数
            var tiaos = document.getElementById('tiaos');
            tiaos.innerHTML = '共' + first.children.length + '条';
            //在第几页
            var jfzjl = document.getElementById('jfzjl');
            //总共页数
            var jfzjr = document.getElementById('jfzjr');
            if (first.children.length < 6) {
                jfzjr.innerHTML = 1;
            } else {
                if (first.children.length % 6 === 0) {
                    var count = first.children.length / 6;
                    jfzjr.innerHTML = count;
                } else {
                    var count = parseInt(first.children.length / 6) + 1;
                    jfzjr.innerHTML = count;
                }
            }
            //首页
            var shouye = document.getElementById('shouye');
            shouye.addEventListener('click',function(event){
                var count = 1;
                lnub = count;
                jfzjl.innerHTML = count;
                console.log(1);
                for(var i = 6;i < first.children.length;i++){
                    var spage = first.children[i];
                    spage.style.display = 'none';
                }
                if (first.children.length > 6) {
                    for(var i = 0;i < 6;i++){
                        var spage = first.children[i];
                        spage.style.display = 'inline-block';
                    }
                } else {
                    for(var i = 0;i < first.children.length;i++){
                        var spage = first.children[i];
                        spage.style.display = 'inline-block';
                    }
                }
            },false);
            //上页
            var lnub = parseInt(jfzjl.innerHTML);
            var rnub = parseInt(jfzjr.innerHTML);
            var shangye = document.getElementById('shangye');
            shangye.addEventListener('click',function(event){
                if (lnub > 1) {
                    lnub --;
                    for(var i = 0;i < first.children.length;i++){
                        var spage = first.children[i];
                        spage.style.display = 'none';
                    }
                    if (lnub * 6 < first.children.length) {
                        for(var j = 6 * (lnub - 1);j < lnub * 6;j++){
                            var spage = first.children[j];
                            spage.style.display = 'inline-block';
                        }
                    }
                    jfzjl.innerHTML = lnub;
                }
            },false);
            //下页
            var xiaye = document.getElementById('xiaye');
            xiaye.addEventListener('click',function(event){
                if (lnub < rnub) {
                    lnub ++;
                    for(var i = 0;i < first.children.length;i++){
                        var spage = first.children[i];
                        spage.style.display = 'none';
                    }
                    if (lnub * 6 > first.children.length) {
                        for(var j =  6 * (lnub - 1);j < first.children.length;j++){
                            var spage = first.children[j];
                            spage.style.display = 'inline-block';
                        }
                    } else {
                        for(var j =  6 * (lnub - 1);j < lnub * 6;j++){
                            var spage = first.children[j];
                            spage.style.display = 'inline-block';
                        }
                    }
                    jfzjl.innerHTML = lnub;
                }
            },false);
            //尾页
            var weiye = document.getElementById('weiye');
            weiye.addEventListener('click',function(event){
                for(var i = 0;i < first.children.length;i++){
                    var spage = first.children[i];
                    spage.style.display = 'none';
                }
                for(var j =  6 * (rnub - 1);j < first.children.length;j++){
                    var spage = first.children[j];
                    spage.style.display = 'inline-block';
                }
                lnub = rnub
                jfzjl.innerHTML = lnub;
            },false);
            //跳转
            var zdao = document.getElementById('zdao');
            //页数
            var yeshu = document.getElementById('yeshu');
            zdao.addEventListener('click',function(){
                if (yeshu.value <= rnub && yeshu.value > 0 && yeshu.value != '') {
                    if (yeshu.value <= rnub) {
                        for(var i = 0;i < first.children.length;i++){
                            var spage = first.children[i];
                            spage.style.display = 'none';
                        }
                        if (yeshu.value * 6 > first.children.length) {
                            for(var j =  6 * (yeshu.value - 1);j < first.children.length;j++){
                                var spage = first.children[j];
                                spage.style.display = 'inline-block';
                            }
                            lnub = yeshu.value;
                            jfzjl.innerHTML = lnub;
                        } else {
                            for(var j =  6 * (yeshu.value - 1);j < yeshu.value * 6;j++){
                                var spage = first.children[j];
                                spage.style.display = 'inline-block';
                            }
                            lnub = yeshu.value;
                            jfzjl.innerHTML = lnub;
                        }
                    }
                }
                yeshu.value = '';
            },false);
            if (first.children.length > 6) {
                for(var i = 6;i < first.children.length;i++){
                    var spage = first.children[i];
                    spage.style.display = 'none';
                }
            }
        }
    });
}
reloadobj();

//当点击仪器平台时，将小页面换掉，然后根据列表中仪器的个数创建仪器，创建完所有的仪器后，
//根据仪器的个数进行分页，将仪器的个数除以6，并对6进行取余，当余数大于0时，除以6的结果则再加1,
//否则不加，此时前六个元素的display为block，剩余的几个则为none，前六个元素放在第一页，
//当元素的标号大于6小于12时，这些元素放在第二页，以此类推，其他的元素也这样进行分页，

//给整个first注册点击事件
var syyq = document.getElementById('syyq');
var yqye = document.getElementById('yqye');
first.addEventListener('click',function(event){
    if (event.target.tagName === 'A' || event.target.tagName === 'IMG') {
        wenb.style.display = 'none';
        syyq.style.display = 'none';
        yqye.style.display = 'block';
        second.style.display = 'none';
        srow3.style.display = 'none';
        var m = parseInt(event.target.getAttribute('class'));
        $.get("http://111.231.218.156:8080/Lab/api/Instrument/getInstrumentById", {id: m}, function(result){
            $("#checkResult").html(result);
            if (result.status === 1) {
                tup.src = result.data.img;
                thename.innerHTML = result.data.manager;
                thephone.innerHTML = result.data.tel;
                neiro.innerHTML = result.data.introduction;
            }
        });
    }
},false);


//信息列表
second.style.padding = '20px 0px 0px';
third.style.padding = '20px 0px 0px';


function List(num){
    this.title = num.title;
    this.time = num.time;
}
List.prototype.getcreat = function(title,time,i){
    var thelist = document.createElement('div');
    thelist.style.height = '40px';
    thelist.style.width = '855px';
    thelist.style.fontSize = '20px';
    second.appendChild(thelist);
    var divle = document.createElement('div');
    divle.style.float = 'left';
    divle.style.width = '600px';
    divle.style.height = '40px';
    var a3 = document.createElement('a');
    a3.style.width = '600px';
    a3.style.height = '40px';
    a3.innerHTML = title;
    a3.style.cursor = 'pointer';
    a3.style.color = '#000';
    a3.setAttribute('class',i);
    divle.appendChild(a3);
    thelist.appendChild(divle);
    var divri = document.createElement('div');
    divri.style.float = 'right';
    divri.style.width = '120px';
    divri.style.height = '40px';
    divri.innerHTML = time.substring(0,10);
    thelist.appendChild(divri);
}


//科技动态
var temp = [];
function reloadtemp(){
    $.post("http://111.231.218.156:8080/Lab/api/Dynamic/getAllDynamic", {id: 3}, function(result){
        $("#checkResult").html(result);
        if (result.status === 1) {
            for(var i = 0;i < result.data.length;i++){
                var thedata = {};
                thedata.title = result.data[i].title;
                thedata.time = result.data[i].time;
                thedata.id = result.data[i].id;
                temp.push(thedata);
            }
        }
        for(var i = 0;i < temp.length;i++){
            var list = new List(temp[i]);
            list.getcreat(temp[i].title,temp[i].time,temp[i].id);
        }

        //科技动态首页的列表
        if (newsulst.children.length > temp.length) {
            for(var i = 0;i < temp.length;i++) {
                newsulst.children[i].children[0].innerHTML = temp[i].title;
                newsulst.children[i].children[0].title = temp[i].title;
                newsulst.children[i].children[0].setAttribute('theid',temp[i].id);
                newsulst.children[i].children[1].innerHTML = temp[i].time.substring(5,10);
            }
            for(var i = temp.length;i < newsulst.children.length;i++) {
                newsulst.children[i].children[0].innerHTML = '';
                newsulst.children[i].children[1].innerHTML = '';
            }
        } else if (newsulst.children.length < temp.length) {
            for(var i = 0;i < newsulst.children.length;i++) {
                newsulst.children[i].children[0].innerHTML = temp[i].title;
                newsulst.children[i].children[0].title = temp[i].title;
                newsulst.children[i].children[0].setAttribute('theid',temp[i].id);
                newsulst.children[i].children[1].innerHTML = temp[i].time.substring(5,10);
            }
        }
        
        //列表项个数
        var tiaos2 = document.getElementById('tiaos2');
        tiaos2.innerHTML = '共' + second.children.length + '条';
        //在第几页
        var jfzjl2 = document.getElementById('jfzjl2');
        //总共页数
        var jfzjr2 = document.getElementById('jfzjr2');
        if (second.children.length < 10) {
            jfzjr2.innerHTML = 1;
        } else {
            if (second.children.length % 10 === 0) {
                var count = second.children.length / 10;
                jfzjr2.innerHTML = count;
            } else {
                var count = parseInt(second.children.length / 10) + 1;
                jfzjr2.innerHTML = count;
            }
        }
        //首页
        var shouye2 = document.getElementById('shouye2');
        shouye2.addEventListener('click',function(event){
            var count = 1;
            lnub2 = count;
            jfzjl2.innerHTML = count;
            for(var i = 10;i < second.children.length;i++){
                var spage = second.children[i];
                spage.style.display = 'none';
            }
            if (second.children.length > 10) {
                for(var i = 0;i < 10;i++){
                    var spage = second.children[i];
                    spage.style.display = 'block';
                }
            } else {
                for(var i = 0;i < second.children.length;i++){
                    var spage = second.children[i];
                    spage.style.display = 'block';
                }
            }
        },false);
        //上页
        var lnub2 = parseInt(jfzjl2.innerHTML);
        var rnub2 = parseInt(jfzjr2.innerHTML);
        var shangye2 = document.getElementById('shangye2');
        shangye2.addEventListener('click',function(event){
            if (lnub2 > 1) {
                lnub2 --;
                for(var i = 0;i < second.children.length;i++){
                    var spage = second.children[i];
                    spage.style.display = 'none';
                }
                if (lnub2 * 10 < second.children.length) {
                    for(var j = 10 * (lnub2 - 1);j < lnub2 * 10;j++){
                        var spage = second.children[j];
                        spage.style.display = 'block';
                    }
                }
                jfzjl2.innerHTML = lnub2;
            }
        },false);
        //下页
        var xiaye2 = document.getElementById('xiaye2');
        xiaye2.addEventListener('click',function(event){
            if (lnub2 < rnub2) {
                lnub2 ++;
                for(var i = 0;i < second.children.length;i++){
                    var spage = second.children[i];
                    spage.style.display = 'none';
                }
                if (lnub2 * 10 > second.children.length) {
                    for(var j =  10 * (lnub2 - 1);j < second.children.length;j++){
                        var spage = second.children[j];
                        spage.style.display = 'block';
                    }
                } else {
                    for(var j =  10 * (lnub2 - 1);j < lnub2 * 10;j++){
                        var spage = second.children[j];
                        spage.style.display = 'block';
                    }
                }
                jfzjl2.innerHTML = lnub2;
            }
        },false);
        //尾页
        var weiye2 = document.getElementById('weiye2');
        weiye2.addEventListener('click',function(event){
            for(var i = 0;i < second.children.length;i++){
                var spage = second.children[i];
                spage.style.display = 'none';
            }
            for(var j =  10 * (rnub2 - 1);j < second.children.length;j++){
                var spage = second.children[j];
                spage.style.display = 'block';
            }
            lnub2 = rnub2
            jfzjl2.innerHTML = lnub2;
        },false);
        //跳转
        var zdao2 = document.getElementById('zdao2');
        //页数
        var yeshu2 = document.getElementById('yeshu2');
        zdao2.addEventListener('click',function(){
            if (yeshu2.value <= rnub2 && yeshu2.value > 0 && yeshu2.value != '') {
                for(var i = 0;i < second.children.length;i++){
                    var spage = second.children[i];
                    spage.style.display = 'none';
                }
                if (yeshu2.value * 10 > second.children.length) {
                    for(var j =  10 * (yeshu2.value - 1);j < second.children.length;j++){
                        var spage = second.children[j];
                        spage.style.display = 'block';
                    }
                    lnub2 = yeshu2.value;
                    jfzjl2.innerHTML = lnub2;
                } else {
                    for(var j =  10 * (yeshu2.value - 1);j < yeshu2.value * 10;j++){
                        var spage = second.children[j];
                        spage.style.display = 'block';
                    }
                    lnub2 = yeshu2.value;
                    jfzjl2.innerHTML = lnub2;
                }
            }
            yeshu2.value = '';
        },false);
        if (second.children.length > 10) {
            for(var i = 10;i < second.children.length;i++){
                var spage = second.children[i];
                spage.style.display = 'none';
            }
        }
    });
}
reloadtemp();

second.addEventListener('click',function(event){
    if (event.target.tagName === 'A') {
        newsformat.style.display = 'block';
        tbody.style.display = 'none';
        firstpb.style.display = 'none';
        timti2.style.display = 'block';
        var m = parseInt(event.target.getAttribute('class'));
        $.get("http://111.231.218.156:8080/Lab/api/Dynamic/getDynamic", {id: m}, function(result){
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



function List2(num){
    this.title = num.title;
    this.time = num.time;
}
List2.prototype.getcreat = function(title,time,id){
    var thelist = document.createElement('div');
    thelist.style.height = '40px';
    thelist.style.width = '855px';
    thelist.style.fontSize = '20px';
    third.appendChild(thelist);
    var divle = document.createElement('div');
    divle.style.float = 'left';
    divle.style.width = '600px';
    divle.style.height = '40px';
    var a3 = document.createElement('a');
    a3.style.width = '600px';
    a3.style.height = '40px';
    a3.innerHTML = title;
    a3.style.cursor = 'pointer';
    a3.style.color = '#000';
    a3.setAttribute('class',id);
    divle.appendChild(a3);
    thelist.appendChild(divle);
    var divri = document.createElement('div');
    divri.style.float = 'right';
    divri.style.width = '120px';
    divri.style.height = '40px';
    divri.innerHTML = time.substring(0,10);
    thelist.appendChild(divri);
}


//学术交流
var temp2 = [];
function reloadtemp2(){
    $.post("http://111.231.218.156:8080/Lab/api/Academic/getAllAcademic", {id: 2}, function(result){
        $("#checkResult").html(result);
        if (result.status === 1) {
            for(var i = 0;i < result.data.length;i++){
                var thedata = {};
                thedata.title = result.data[i].title;
                thedata.time = result.data[i].time;
                thedata.id = result.data[i].id;
                temp2.push(thedata);
            }
        }
        for(var i = 0;i < temp2.length;i++){
            var list = new List2(temp2[i]);
            list.getcreat(temp2[i].title,temp2[i].time,temp2[i].id);
        }

        //学术交流首页的列表
        if (academicul.children.length > temp2.length) {
            for(var i = 0;i < temp2.length;i++) {
                academicul.children[i].children[0].innerHTML = temp2[i].title;
                academicul.children[i].children[0].title = temp2[i].title;
                academicul.children[i].children[0].setAttribute('theid',temp2[i].id);
            }
            for(var i = temp2.length;i < academicul.children.length;i++) {
                academicul.children[i].children[0].innerHTML = '';
            }
        } else if (academicul.children.length < temp2.length) {
            for(var i = 0;i < academicul.children.length;i++) {
                academicul.children[i].children[0].innerHTML = temp2[i].title;
                academicul.children[i].children[0].title = temp2[i].title;
                academicul.children[i].children[0].setAttribute('theid',temp2[i].id);
            }
        }

        //列表项个数
        var tiaos3 = document.getElementById('tiaos3');
        tiaos3.innerHTML = '共' + third.children.length + '条';
        //在第几页
        var jfzjl3 = document.getElementById('jfzjl3');
        //总共页数
        var jfzjr3 = document.getElementById('jfzjr3');
        if (third.children.length < 10) {
            jfzjr3.innerHTML = 1;
        } else {
            if (third.children.length % 10 === 0) {
                var count = third.children.length / 10;
                jfzjr3.innerHTML = count;
            } else {
                var count = parseInt(third.children.length / 10) + 1;
                jfzjr3.innerHTML = count;
            }
        }
        //首页
        var shouye3 = document.getElementById('shouye3');
        shouye3.addEventListener('click',function(event){
            var count = 1;
            lnub3 = count;
            jfzjl3.innerHTML = count;
            for(var i = 10;i < third.children.length;i++){
                var spage = third.children[i];
                spage.style.display = 'none';
            }
            if (third.children.length > 10) {
                for(var i = 0;i < 10;i++){
                    var spage = third.children[i];
                    spage.style.display = 'block';
                }
            } else {
                for(var i = 0;i < third.children.length;i++){
                    var spage = third.children[i];
                    spage.style.display = 'block';
                }
            }
        },false);
        //上页
        var lnub3 = parseInt(jfzjl3.innerHTML);
        var rnub3 = parseInt(jfzjr3.innerHTML);
        var shangye3 = document.getElementById('shangye3');
        shangye3.addEventListener('click',function(event){
            if (lnub3 > 1) {
                lnub3 --;
                for(var i = 0;i < third.children.length;i++){
                    var spage = third.children[i];
                    spage.style.display = 'none';
                }
                if (lnub3 * 10 < third.children.length) {
                    for(var j = 10 * (lnub3 - 1);j < lnub3 * 10;j++){
                        var spage = third.children[j];
                        spage.style.display = 'block';
                    }
                }
                jfzjl3.innerHTML = lnub3;
            }
        },false);
        //下页
        var xiaye3 = document.getElementById('xiaye3');
        xiaye3.addEventListener('click',function(event){
            if (lnub3 < rnub3) {
                lnub3 ++;
                for(var i = 0;i < third.children.length;i++){
                    var spage = third.children[i];
                    spage.style.display = 'none';
                }
                if (lnub3 * 10 > third.children.length) {
                    for(var j =  10 * (lnub3 - 1);j < third.children.length;j++){
                        var spage = third.children[j];
                        spage.style.display = 'block';
                    }
                } else {
                    for(var j =  10 * (lnub3 - 1);j < lnub3 * 10;j++){
                        var spage = third.children[j];
                        spage.style.display = 'block';
                    }
                }
                jfzjl3.innerHTML = lnub3;
            }
        },false);
        //尾页
        var weiye3 = document.getElementById('weiye3');
        weiye3.addEventListener('click',function(event){
            for(var i = 0;i < third.children.length;i++){
                var spage = third.children[i];
                spage.style.display = 'none';
            }
            for(var j =  10 * (rnub3 - 1);j < third.children.length;j++){
                var spage = third.children[j];
                spage.style.display = 'block';
            }
            lnub3 = rnub3;
            jfzjl3.innerHTML = lnub3;
        },false);
        //跳转
        var zdao3 = document.getElementById('zdao3');
        //页数
        var yeshu3 = document.getElementById('yeshu3');
        zdao3.addEventListener('click',function(){
            if (yeshu3.value <= rnub3 && yeshu3.value > 0 && yeshu3.value != '') {
                for(var i = 0;i < third.children.length;i++){
                    var spage = third.children[i];
                    spage.style.display = 'none';
                }
                if (yeshu3.value * 10 > third.children.length) {
                    for(var j =  10 * (yeshu3.value - 1);j < third.children.length;j++){
                        var spage = third.children[j];
                        spage.style.display = 'block';
                    }
                    lnub3 = yeshu3.value;
                    jfzjl3.innerHTML = lnub3;
                } else {
                    for(var j =  10 * (yeshu3.value - 1);j < yeshu3.value * 10;j++){
                        var spage = third.children[j];
                        spage.style.display = 'block';
                    }
                    lnub3 = yeshu3.value;
                    jfzjl3.innerHTML = lnub3;
                }
            }
            yeshu3.value = '';
        },false);
        if (third.children.length > 10) {
            for(var i = 10;i < third.children.length;i++){
                var spage = third.children[i];
                spage.style.display = 'none';
            }
        }
    });
}
reloadtemp2();

third.addEventListener('click',function(event){
    if (event.target.tagName === 'A') {
        newsformat.style.display = 'block';
        tbody.style.display = 'none';
        firstpb.style.display = 'none';
        timti2.style.display = 'block';
        var m = parseInt(event.target.getAttribute('class'));
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


//国际合作
function List4(num){
    this.title = num.title;
    this.time = num.time;
}
List4.prototype.getcreat = function(title,time,id){
    var thelist = document.createElement('div');
    thelist.style.height = '40px';
    thelist.style.width = '855px';
    thelist.style.fontSize = '20px';
    four.appendChild(thelist);
    var divle = document.createElement('div');
    divle.style.float = 'left';
    divle.style.width = '600px';
    divle.style.height = '40px';
    var a3 = document.createElement('a');
    a3.style.width = '600px';
    a3.style.height = '40px';
    a3.innerHTML = title;
    a3.style.cursor = 'pointer';
    a3.style.color = '#000';
    a3.setAttribute('class',id);
    divle.appendChild(a3);
    thelist.appendChild(divle);
    var divri = document.createElement('div');
    divri.style.float = 'right';
    divri.style.width = '120px';
    divri.style.height = '40px';
    divri.innerHTML = time.substring(0,10);
    thelist.appendChild(divri);
}



var temp4 = [];
function reloadtemp4(){
    $.post("http://111.231.218.156:8080/Lab/api/International/getAllInternationals", {id: 2}, function(result){
        $("#checkResult").html(result);
        if (result.status === 1) {
            for(var i = 0;i < result.data.length;i++){
                var thedata = {};
                thedata.title = result.data[i].title;
                thedata.time = result.data[i].time;
                thedata.id = result.data[i].id;
                temp4.push(thedata);
            }
        }
        for(var i = 0;i < temp4.length;i++){
            var list = new List4(temp4[i]);
            list.getcreat(temp4[i].title,temp4[i].time,temp4[i].id);
        }


        //列表项个数
        var tiaos4 = document.getElementById('tiaos4');
        tiaos4.innerHTML = '共' + four.children.length + '条';
        //在第几页
        var jfzjl4 = document.getElementById('jfzjl4');
        //总共页数
        var jfzjr4 = document.getElementById('jfzjr4');
        if (four.children.length < 10) {
            jfzjr4.innerHTML = 1;
        } else {
            if (four.children.length % 10 === 0) {
                var count = four.children.length / 10;
                jfzjr4.innerHTML = count;
            } else {
                var count = parseInt(four.children.length / 10) + 1;
                jfzjr4.innerHTML = count;
            }
        }
        //首页
        var shouye4 = document.getElementById('shouye4');
        shouye4.addEventListener('click',function(event){
            var count = 1;
            lnub4 = count;
            jfzjl4.innerHTML = count;
            for(var i = 10;i < four.children.length;i++){
                var spage = four.children[i];
                spage.style.display = 'none';
            }
            if (four.children.length > 10) {
                for(var i = 0;i < 10;i++){
                    var spage = four.children[i];
                    spage.style.display = 'block';
                }
            } else {
                for(var i = 0;i < four.children.length;i++){
                    var spage = four.children[i];
                    spage.style.display = 'block';
                }
            }
        },false);
        //上页
        var lnub4 = parseInt(jfzjl4.innerHTML);
        var rnub4 = parseInt(jfzjr4.innerHTML);
        var shangye4 = document.getElementById('shangye4');
        shangye4.addEventListener('click',function(event){
            if (lnub4 > 1) {
                lnub4 --;
                for(var i = 0;i < four.children.length;i++){
                    var spage = four.children[i];
                    spage.style.display = 'none';
                }
                if (lnub4 * 10 < four.children.length) {
                    for(var j = 10 * (lnub4 - 1);j < lnub4 * 10;j++){
                        var spage = four.children[j];
                        spage.style.display = 'block';
                    }
                }
                jfzjl4.innerHTML = lnub4;
            }
        },false);
        //下页
        var xiaye4 = document.getElementById('xiaye4');
        xiaye4.addEventListener('click',function(event){
            if (lnub4 < rnub4) {
                lnub4 ++;
                for(var i = 0;i < four.children.length;i++){
                    var spage = four.children[i];
                    spage.style.display = 'none';
                }
                if (lnub4 * 10 > four.children.length) {
                    for(var j =  10 * (lnub4 - 1);j < four.children.length;j++){
                        var spage = four.children[j];
                        spage.style.display = 'block';
                    }
                } else {
                    for(var j =  10 * (lnub4 - 1);j < lnub4 * 10;j++){
                        var spage = four.children[j];
                        spage.style.display = 'block';
                    }
                }
                jfzjl4.innerHTML = lnub4;
            }
        },false);
        //尾页
        var weiye4 = document.getElementById('weiye4');
        weiye4.addEventListener('click',function(event){
            for(var i = 0;i < four.children.length;i++){
                var spage = four.children[i];
                spage.style.display = 'none';
            }
            for(var j =  10 * (rnub4 - 1);j < four.children.length;j++){
                var spage = four.children[j];
                spage.style.display = 'block';
            }
            lnub4 = rnub4;
            jfzjl4.innerHTML = lnub4;
        },false);
        //跳转
        var zdao4 = document.getElementById('zdao4');
        //页数
        var yeshu4 = document.getElementById('yeshu4');
        zdao4.addEventListener('click',function(){
            if (yeshu4.value <= rnub4 && yeshu4.value > 0 && yeshu4.value != '') {
                for(var i = 0;i < four.children.length;i++){
                    var spage = four.children[i];
                    spage.style.display = 'none';
                }
                if (yeshu4.value * 10 > four.children.length) {
                    for(var j =  10 * (yeshu4.value - 1);j < four.children.length;j++){
                        var spage = four.children[j];
                        spage.style.display = 'block';
                    }
                    lnub4 = yeshu4.value;
                    jfzjl4.innerHTML = lnub4;
                } else {
                    for(var j =  10 * (yeshu4.value - 1);j < yeshu4.value * 10;j++){
                        var spage = four.children[j];
                        spage.style.display = 'block';
                    }
                    lnub4 = yeshu4.value;
                    jfzjl4.innerHTML = lnub4;
                }
            }
            yeshu4.value = '';
        },false);
        if (four.children.length > 10) {
            for(var i = 10;i < four.children.length;i++){
                var spage = four.children[i];
                spage.style.display = 'none';
            }
        }
    });
}
reloadtemp4();

four.addEventListener('click',function(event){
    if (event.target.tagName === 'A') {
        newsformat.style.display = 'block';
        tbody.style.display = 'none';
        firstpb.style.display = 'none';
        timti2.style.display = 'block';
        var m = parseInt(event.target.getAttribute('class'));
        $.get("http://111.231.218.156:8080/Lab/api/International/getInternational", {id: m}, function(result){
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

//校企合作
function List5(num){
    this.title = num.title;
    this.time = num.time;
}
List5.prototype.getcreat = function(title,time,id){
    var thelist = document.createElement('div');
    thelist.style.height = '40px';
    thelist.style.width = '855px';
    thelist.style.fontSize = '20px';
    five.appendChild(thelist);
    var divle = document.createElement('div');
    divle.style.float = 'left';
    divle.style.width = '600px';
    divle.style.height = '40px';
    var a3 = document.createElement('a');
    a3.style.width = '600px';
    a3.style.height = '40px';
    a3.innerHTML = title;
    a3.style.cursor = 'pointer';
    a3.style.color = '#000';
    a3.setAttribute('class',id);
    divle.appendChild(a3);
    thelist.appendChild(divle);
    var divri = document.createElement('div');
    divri.style.float = 'right';
    divri.style.width = '120px';
    divri.style.height = '40px';
    divri.innerHTML = time.substring(0,10);
    thelist.appendChild(divri);
}


var temp5 = [];
function reloadtemp5(){
    $.post("http://111.231.218.156:8080/Lab/api/School/getAllSchools", {id: 2}, function(result){
        $("#checkResult").html(result);
        if (result.status === 1) {
            for(var i = 0;i < result.data.length;i++){
                var thedata = {};
                thedata.title = result.data[i].title;
                thedata.time = result.data[i].time;
                thedata.id = result.data[i].id;
                temp5.push(thedata);
            }
        }
        for(var i = 0;i < temp5.length;i++){
            var list = new List5(temp5[i]);
            list.getcreat(temp5[i].title,temp5[i].time,temp5[i].id);
        }


        //列表项个数
        var tiaos5 = document.getElementById('tiaos5');
        tiaos5.innerHTML = '共' + five.children.length + '条';
        //在第几页
        var jfzjl5 = document.getElementById('jfzjl5');
        //总共页数
        var jfzjr5 = document.getElementById('jfzjr5');
        if (five.children.length < 10) {
            jfzjr5.innerHTML = 1;
        } else {
            if (five.children.length % 10 === 0) {
                var count = five.children.length / 10;
                jfzjr5.innerHTML = count;
            } else {
                var count = parseInt(five.children.length / 10) + 1;
                jfzjr5.innerHTML = count;
            }
        }
        //首页
        var shouye5 = document.getElementById('shouye5');
        shouye5.addEventListener('click',function(event){
            var count = 1;
            lnub5 = count;
            jfzjl5.innerHTML = count;
            for(var i = 10;i < five.children.length;i++){
                var spage = five.children[i];
                spage.style.display = 'none';
            }
            if (five.children.length > 10) {
                for(var i = 0;i < 10;i++){
                    var spage = five.children[i];
                    spage.style.display = 'block';
                }
            } else {
                for(var i = 0;i < five.children.length;i++){
                    var spage = five.children[i];
                    spage.style.display = 'block';
                }
            }
        },false);
        //上页
        var lnub5 = parseInt(jfzjl5.innerHTML);
        var rnub5 = parseInt(jfzjr5.innerHTML);
        var shangye5 = document.getElementById('shangye5');
        shangye5.addEventListener('click',function(event){
            if (lnub5 > 1) {
                lnub5 --;
                for(var i = 0;i < five.children.length;i++){
                    var spage = five.children[i];
                    spage.style.display = 'none';
                }
                if (lnub5 * 10 < five.children.length) {
                    for(var j = 10 * (lnub5 - 1);j < lnub5 * 10;j++){
                        var spage = five.children[j];
                        spage.style.display = 'block';
                    }
                }
                jfzjl5.innerHTML = lnub5;
            }
        },false);
        //下页
        var xiaye5 = document.getElementById('xiaye5');
        xiaye5.addEventListener('click',function(event){
            if (lnub5 < rnub5) {
                lnub5 ++;
                for(var i = 0;i < five.children.length;i++){
                    var spage = five.children[i];
                    spage.style.display = 'none';
                }
                if (lnub5 * 10 > five.children.length) {
                    for(var j =  10 * (lnub5 - 1);j < five.children.length;j++){
                        var spage = five.children[j];
                        spage.style.display = 'block';
                    }
                } else {
                    for(var j =  10 * (lnub5 - 1);j < lnub5 * 10;j++){
                        var spage = five.children[j];
                        spage.style.display = 'block';
                    }
                }
                jfzjl5.innerHTML = lnub5;
            }
        },false);
        //尾页
        var weiye5 = document.getElementById('weiye5');
        weiye5.addEventListener('click',function(event){
            for(var i = 0;i < five.children.length;i++){
                var spage = five.children[i];
                spage.style.display = 'none';
            }
            for(var j =  10 * (rnub5 - 1);j < five.children.length;j++){
                var spage = five.children[j];
                spage.style.display = 'block';
            }
            lnub5 = rnub5;
            jfzjl5.innerHTML = lnub5;
        },false);
        //跳转
        var zdao5 = document.getElementById('zdao5');
        //页数
        var yeshu5 = document.getElementById('yeshu5');
        zdao5.addEventListener('click',function(){
            if (yeshu5.value <= rnub5 && yeshu5.value > 0 && yeshu5.value != '') {
                for(var i = 0;i < five.children.length;i++){
                    var spage = five.children[i];
                    spage.style.display = 'none';
                }
                if (yeshu5.value * 10 > five.children.length) {
                    for(var j =  10 * (yeshu5.value - 1);j < five.children.length;j++){
                        var spage = five.children[j];
                        spage.style.display = 'block';
                    }
                    lnub5 = yeshu5.value;
                    jfzjl5.innerHTML = lnub5;
                } else {
                    for(var j =  10 * (yeshu5.value - 1);j < yeshu5.value * 10;j++){
                        var spage = five.children[j];
                        spage.style.display = 'block';
                    }
                    lnub5 = yeshu5.value;
                    jfzjl5.innerHTML = lnub5;
                }
            }
            yeshu5.value = '';
        },false);
        if (five.children.length > 10) {
            for(var i = 10;i < five.children.length;i++){
                var spage = five.children[i];
                spage.style.display = 'none';
            }
        }
    });
}
reloadtemp5();

five.addEventListener('click',function(event){
    if (event.target.tagName === 'A') {
        newsformat.style.display = 'block';
        tbody.style.display = 'none';
        firstpb.style.display = 'none';
        timti2.style.display = 'block';
        var m = parseInt(event.target.getAttribute('class'));
        $.get("http://111.231.218.156:8080/Lab/api/School/getSchool", {id: m}, function(result){
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