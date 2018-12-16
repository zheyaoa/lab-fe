window.onload = function(){
    document.querySelector('#header').innerHTML = getHeader();
    // document.querySelector('#footer').innerHTML = getFooter();
}
var getHeader = function(){
var html = `            
    <div class="header-top">
        <img src="../images/bg1.jpg" class="header-img">
    </div>
    <div class="header-nav">
        <div class="header-nav-item" index='1'>首页</div>
        <div class="header-nav-item" index='2'>实验室概况
            <div class="dropdown">                        
                <div title="0">工作室简介</div>
                <div title="1">工作条例</div>
            </div>
        </div>
        <div class="header-nav-item" index='3'>组织机构</div>
        <div class="header-nav-item" index='4'>研究领域
            <div class="dropdown">
                <div title="0">绿色建筑材料研究</div>
                <div title="1">高性能围护结构研究</div>
                <div title="2">新型装配化结构体系研究</div>
                <div title="3">健康舒适的室内环境营造技术研究</div>
                <div title="4">超低能耗建筑使用后评估研究</div>
            </div>
        </div>
        <div class="header-nav-item" index='5'>科研队伍
            <div class="dropdown">
                <div title="0">教授</div>
                <div title="1">副教授</div>
                <div title="2">讲师</div>
            </div> 
        </div>
        <div class="header-nav-item" index='6'>科研成果
            <div class="dropdown">
                <div title="0">科研项目</div>
                <div title="1">发表论文</div>
                <div title="2">授权专利</div>
                <div title="3">科研成果奖</div>
            </div> 
        </div>
        <div class="header-nav-item" index='10'>合作交流
            <div class="dropdown">
                <div title="0">学术交流</div>
                <div title="1">国际合作</div>
                <div title="2">校企合作</div>
            </div>
        </div>
        <div class="header-nav-item" index='7'>人才培养
            <div class="dropdown">
                <div title="0">博士后</div>
                <div title="1">博士研究生</div>
                <div title="2">硕士研究生</div> 
            </div>
        </div>
        <div class="header-nav-item" index='12'>仪器平台
            <div class="dropdown">
                <div title="0">科研仪器</div>
                <div title="1">仪器共享</div>
            </div>
        </div>
        <div class="header-nav-item" index='11'>科技动态</div>
        <div class="header-nav-item" index='8'>英才招聘</div>
        <div class="header-nav-item" index='9'>联系我们</div>
    </div>`
    return html;
}
var getFooter = function(){

}