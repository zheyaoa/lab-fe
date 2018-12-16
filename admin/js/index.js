window.onload = function(){
    //点击超链接  lframe 跳到对应网页
    var items = [];
    document.querySelector('#navList').addEventListener('click',(e)=>{
        let src = e.target.getAttribute('src');
        if(src){
            setFrameSrc(src);
        }
    })

    //为iframe更换链接
    let setFrameSrc = (src) => {
        document.querySelector('.content').src=src;
    }

}