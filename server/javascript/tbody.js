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
var wenb = document.getElementById('wenb');
var time = document.getElementById('time');
var shrman = document.getElementById('shrman');

//让tbody的高度随内容的高度变化而变化
/*tbody.style.height = '700px';
tbodyleft.style.height = '675px';
tbodyright.style.height = '675px';
if (cont.offsetHeight + 100 > 675) {
    tbody.style.height = cont.offsetHeight + 125 + 'px';
    tbodyleft.style.height = cont.offsetHeight + 100 + 'px';
    tbodyright.style.height = cont.offsetHeight + 100 + 'px';
}*/

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
    //让tbody的高度随内容的高度变化而变化
    /*if (tbody.style.display === 'block') {
        tbody.style.height = '700px';
        tbodyleft.style.height = '675px';
        tbodyright.style.height = '675px';
        if (cont.offsetHeight + 100 > 675) {
            tbody.style.height = cont.offsetHeight + 125 + 'px';
            tbodyleft.style.height = cont.offsetHeight + 100 + 'px';
            tbodyright.style.height = cont.offsetHeight + 100 + 'px';
        }
    }*/
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
	if (event.target.childNodes[0].nodeValue === '英才招聘') {
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
	if (event.target.childNodes[0].nodeValue === '组织机构') {
        $.get("http://111.231.218.156:8080/Lab/api/Organization/getOrganization", {id: 1}, function(result){
            $("#checkResult").html(result);
                if (result.status === 1) {
                    tit.innerHTML = result.data.title;
                    wenb.innerHTML = result.data.content;
                    time.innerHTML = result.data.time;
                    shrman.innerHTML = result.data.publisher;
                }
        });
	}
	if (event.target.childNodes[0].nodeValue === '实验室概况') {//默认是工作室简介
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
        /*if (tbody.style.display === 'block') {
            tbody.style.height = '700px';
            tbodyleft.style.height = '675px';
            tbodyright.style.height = '675px';
            if (cont.offsetHeight + 100 > 675) {
                tbody.style.height = cont.offsetHeight + 125 + 'px';
                tbodyleft.style.height = cont.offsetHeight + 100 + 'px';
                tbodyright.style.height = cont.offsetHeight + 100 + 'px';
            }
        }*/
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
						// breadcrumb.children[2].children[0].innerHTML = event.target.parentNode.parentNode.childNodes[0].nodeValue;
					}
				}
				// console.log(event.target.parentNode.parentNode.children[0].children.length);
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
            if (event.target.innerHTML === '仪器平台') {
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
            $.get("http://111.231.218.156:8080/Lab/api/International/getInternational", {id: 1}, function(result){
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
            $.get("http://111.231.218.156:8080/Lab/api/School/getSchool", {id: 1}, function(result){
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
        //科研队伍
        if (event.target.parentNode.parentNode.childNodes[0].nodeValue === '科研队伍') {
            if (event.target.innerHTML === '教授') {
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
                if (event.target.innerHTML === '副教授') {
                $.get("http://111.231.218.156:8080/Lab/api/ResearchTeam/getResearchTeam", {id: 2}, function(result){
                $("#checkResult").html(result);
                    if (result.status === 1) {
                        tit.innerHTML = result.data.title;
                        wenb.innerHTML = result.data.content;
                        time.innerHTML = result.data.time;
                        shrman.innerHTML = result.data.publisher;
                    }
                });
            }
                if (event.target.innerHTML === '讲师') {
                $.get("http://111.231.218.156:8080/Lab/api/ResearchTeam/getResearchTeam", {id: 3}, function(result){
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
        if (event.target.parentNode.parentNode.childNodes[0].nodeValue === '实验室概况') {
            if (event.target.innerHTML === '工作室简介') {
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
            if (event.target.innerHTML === '工作条例') {
                $.get("http://111.231.218.156:8080/Lab/api/Work/getWorkById", {id: 1}, function(result){
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
        //工作室概况
        //研究领域
        if (event.target.innerHTML === '绿色建筑材料研究') {
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
        //科研团队
        if (event.target.innerHTML === '教授') {
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
                if (event.target.innerHTML === '副教授') {
                $.get("http://111.231.218.156:8080/Lab/api/ResearchTeam/getResearchTeam", {id: 2}, function(result){
                $("#checkResult").html(result);
                    if (result.status === 1) {
                        tit.innerHTML = result.data.title;
                        wenb.innerHTML = result.data.content;
                        time.innerHTML = result.data.time;
                        shrman.innerHTML = result.data.publisher;
                    }
                });
            }
                if (event.target.innerHTML === '讲师') {
                $.get("http://111.231.218.156:8080/Lab/api/ResearchTeam/getResearchTeam", {id: 3}, function(result){
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
            $.get("http://111.231.218.156:8080/Lab/api/International/getInternational", {id: 1}, function(result){
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
            $.get("http://111.231.218.156:8080/Lab/api/School/getSchool", {id: 1}, function(result){
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
        //实验室概况
        //工作室简介
        if (event.target.innerHTML === '工作室简介') {
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
        //工作条例
        if (event.target.innerHTML === '工作条例') {
            $.get("http://111.231.218.156:8080/Lab/api/Work/getWorkById", {id: 1}, function(result){
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
        //仪器共享
        if (event.target.innerHTML === '仪器共享') {
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