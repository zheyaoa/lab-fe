window.onload = function(){
    var editor = new wangEditor('#editor')
    editor.create()
    try{
        var id = location.href.split('?')[1].split('&')[0].split('=')[1];
        var selectedIndex = location.href.split('?')[1].split('&')[1].split('=')[1];
    }catch{
        var id = '';
        var selectedIndex = '';
    }
    if(id&&selectedIndex!=''){
        var url = getGetUrl(selectedIndex)
        document.querySelector('#theme').selectedIndex = selectedIndex;
        document.querySelector('#theme').disabled = true;
        $.get(url,{id:id},function(res){
            console.log(res);
            document.querySelector('#title').value = res.data.title;
            document.querySelector('#publisher').value = res.data.publisher;
            editor.txt.html(res.data.content)
        })
    }
    document.querySelector('#submit').onclick = function(){
        var data = {
            id:id,
            title:document.querySelector('#title').value,
            publisher:document.querySelector('#publisher').value,
            content:editor.txt.html()
        };
        data = JSON.stringify(data);
        //如果存在id和slectedIndex,则进行修改文章
        if(id&&selectedIndex!=''){
            var url = getUpdateUrl(selectedIndex);
            $.ajax({
                type:'POST',
                data:data,
                url:url,
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("authorization",window.localStorage.getItem('token'));
                },
                contentType: "application/json", //必须有  
                dataType: "json", //表示返回值类型，不必须  
                success:function(res){
                    alert('修改成功');
                    location.href = './jlhz.html'
                }
            })
        }else{
            //新建一篇文章并进行添加
            var url = getAddUrl()
            $.ajax({
                type:'POST',
                data:data,
                url:url,
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("authorization",window.localStorage.getItem('token'));
                },
                contentType: "application/json", //必须有  
                dataType: "json", //表示返回值类型，不必须  
                success:function(res){
                    alert('添加成功');
                    location.href = './jlhz.html'
                }
            })
        }
    }
}

//获取请求数据的api
function getUrl(api){
    var baseUrl = 'http://111.231.218.156:8080/Lab';
    return baseUrl + api;
}
function getGetUrl(selectedIndex){
    var url;
    switch(selectedIndex){
        case '0':
            url = getUrl('/api/Academic/getAcademic');
            break;
        case '1':
            url = getUrl('/api/International/getInternational');
            break;
        case '2':
            url = getUrl('/api/School/getSchool');
            break;
    }
    return url;
}
function getAddUrl(){
    var url;
    var selectedIndex = document.querySelector('#theme').selectedIndex;
    switch(selectedIndex){
        case 0:
            url = getUrl('/api/Academic/addAcademic');
            break;
        case 1:
            url = getUrl('/api/International/addInternational');
            break;
        case 2:
            url = getUrl('/api/School/addSchool');
            break;
    }
    return url;
}
function getUpdateUrl(){
    var url;
    var selectedIndex = document.querySelector('#theme').selectedIndex;
    switch(selectedIndex){
        case 0:
            url = getUrl('/api/Academic/updateAcademic');
            break;
        case 1:
            url = getUrl('/api/International/updateInternational');
            break;
        case 2:
            url = getUrl('/api/School/updateSchool');
            break;
    }
    return url;
}