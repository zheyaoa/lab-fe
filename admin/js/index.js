window.onload = function(){
    //点击超链接  lframe 跳到对应网页
    document.querySelector('#navList').addEventListener('click',(e)=>{
        let src = e.target.getAttribute('src');
        if(src){
            setFrameSrc(src);
            var aList = document.querySelectorAll('a');
            [...aList].forEach((aDom)=>{
                aDom.classList.remove('active');
            })
            e.target.classList.add('active');
        }
        
    })

    //为iframe更换链接
    let setFrameSrc = (src) => {
        document.querySelector('.iframe').src=src;
    }

}