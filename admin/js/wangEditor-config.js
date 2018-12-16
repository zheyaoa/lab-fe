window.onload = function(){
    var editor = new wangEditor('#toolbar','#editor')
    editor.customConfig.menus = [
        'head',  // 标题
        'bold',  // 粗体
        'fontSize',  // 字号
        'fontName',  // 字体
        'italic',  // 斜体
        'underline',  // 下划线
        'strikeThrough',  // 删除线
        'foreColor',  // 文字颜色
        'backColor',  // 背景颜色
        'link',  // 插入链接
        'list',  // 列表
        'justify',  // 对齐方式
        'quote',  // 引用
        'table',  // 表格
        'undo',  // 撤销
        'redo'  // 重复
    ]
    editor.create()
    document.querySelectorAll('span').forEach((item)=>{
        item.style.display = 'block';
        item.style.fontSize = '18px';
        item.style.marginTop = '10px';
        item.style.lineHeight = '1.4em';
    })
    document.querySelector("#submit").onclick = function(){
        console.log(editor.txt.html())
    }
}