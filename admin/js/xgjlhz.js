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

function getGetUrl(selectedIndex){
    var apiUrl = {
        0:getUrl('/api/Academic/getAcademic'),
        1:getUrl('/api/International/getInternational'),
        2:getUrl('/api/School/getSchool')
    }
    return apiUrl[selectedIndex];
}

function getAddUrl(){
    var selectedIndex = document.querySelector('#theme').selectedIndex;
    var addUrl = {
        0:getUrl('/api/Academic/addAcademic'),
        1:getUrl('/api/International/addInternational'),
        2:getUrl('/api/School/addSchool')
    }
    return addUrl[selectedIndex];
}

function getUpdateUrl(){
    var selectedIndex = document.querySelector('#theme').selectedIndex;
    var updateUrl = {
        0:getUrl('/api/Academic/updateAcademic'),
        1:getUrl('/api/International/updateInternational'),
        2:getUrl('/api/School/updateSchool')
    }
    return updateUrl[selectedIndex];
}