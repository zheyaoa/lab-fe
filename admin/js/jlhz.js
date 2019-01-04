window.onload = function(){
    getData();
    //修改下拉框时重新请求数据
    document.querySelector('#theme').onchange = function(){
        document.querySelector('#list').innerHTML = '';
        getData();
    }
    document.querySelector('.content').addEventListener('click',function(e){
        var target = e.target;
        if(target.classList.contains('editor')){
            handleEditor(e)
        }else if(target.classList.contains("delete")){
            handleDelete(e)
        }
    })   
    document.querySelector('#add').onclick = function(){
        location.href = 'xgjlhz.html'
    }   
}


function getUrl(api){
    var baseUrl = 'http://111.231.218.156:8080/Lab';
    return baseUrl + api;
}

function createTemplate(item){
    var html = `
        <tr>
            <td class="title">${item.title}</td>
            <td>${item.publisher}</td>
            <td>${item.time}</td>
            <td class="btnGroup" data-id="${item.id}">
                <button type="button" class="btn btn-default editor" >编辑</button>
                <button type="button" class="btn btn-danger delete" >删除</button>
            </td>
        </tr>
    `
    return html;
}

function handleEditor(e){
    var selectIndex = document.querySelector('#theme').selectedIndex;
    var id = e.target.parentNode.getAttribute('data-id');
    var url = 'xgjlhz.html?id='+id+'&selectIndex='+selectIndex;
    location.href = url
}

function handleDelete(e){
    var url = getDeleteUrl();
    var id = e.target.parentNode.getAttribute('data-id');
    var data = JSON.stringify({id});
    $.ajax({
        type:'POST',
        url:url,
        beforeSend: function(xhr) {
            xhr.setRequestHeader("authorization",window.localStorage.getItem("token"));
        },
        data:data,
        contentType: "application/json", //必须有  
        dataType: "json", //表示返回值类型，不必须  
        success:function(res){
            alert('删除成功');
            location.reload();
        }
    })
}

function getDeleteUrl(){
    var selectIndex = document.querySelector('#theme').selectedIndex;
    var url;
    switch(selectIndex){
        case 0:
            url = getUrl('/api/Academic/deleteAcademic');
            break;
        case 1:
            url = getUrl('/api/International/deleteInternational');
            break;
        case 2:
            url = getUrl('/api/School/deleteSchool');
            break;
    }
    return url;
}

//根据主题
function getData(){
    var url = getApiUrl();
    $.ajax({
        type:'POST',
        url:url,
        contentType: "application/json", //必须有  
        dataType: "json", //表示返回值类型，不必须  
        success:function(res){
            var list = res.data;
            var pagination = new Pagination('#pagination',list,function(list){
                list.forEach(function(item){
                    document.querySelector('#list').innerHTML+= createTemplate(item);
                })
            });
            pagination.setPageSize(9);
            pagination.create();
        }
    })
}

//获取请求数据的url
function getApiUrl(){
    var selectedIndex = document.querySelector('#theme').selectedIndex;
    var url;
    switch(selectedIndex){
        case 0:
            url = getUrl('/api/Academic/getAllAcademic');
            break;
        case 1:
            url = getUrl('/api/International/getAllInternationals');
            break;
        case 2:
            url = getUrl('/api/School/getAllSchools');
            break;
    }
    return url;
}