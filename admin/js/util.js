//导航栏插件
//暴露一个Pagination 防止变量污染
var Pagination = (function(){
    function Pagination(el,list,fn){
        //总数量
        this._totalSize = list.length;
        this.fn = fn
        //根元素
        this.el = document.querySelector(el);
        this._list = list;
        //每页的内容数量　
        this._pageSize = 8;
        //所处页数
        this._index;
        //分页数量
        this._pageNumber = Math.ceil(this._totalSize/this._pageSize);
        //分页列表
        this._pageList = [];
    
    }
    Pagination.prototype = {
        create(){
            this.createTemplate();
            this.configInit();
        },
        createTemplate(){
            this.el.innerHTML = `
            <div class='pag-content'>
                <span class='pag-totalsize'>共${this._totalSize}条</span>
            　  <div class='menu'>
                    <span class='pag-index'></span>/${this._pageNumber} 
                </div>    
            　  <button class='pag-first btn btn-default'>首页</button>                                 
            　  <button class='pag-last btn btn-default'>上页</button> 
            　  <button class='pag-next btn btn-default'>下页</button>
            　  <button class='pag-end btn btn-default'>尾页</button>                                 
                <div class='pag-nav'>
                    转到<input type='text' class='pag-input form-control'>页
                </div>
            　  <button class='pag-jump btn btn-default'>跳转</button>                                 

            `
        },
        configInit(){
            var _this = this;
            this.el.querySelector('.pag-first').onclick = function(){
                _this.setIndex(1);
            }
            this.el.querySelector('.pag-last').onclick = function(){
                _this.deleteIndex()
            }
            this.el.querySelector('.pag-next').onclick = function(){
                _this.addIndex()
            }
            this.el.querySelector('.pag-end').onclick = function(){
                _this.setIndex(_this._pageNumber)
            }
            this.el.querySelector('.pag-jump').onclick = function(){
                var index = new Number(_this.el.querySelector('.pag-input').value);
                if(!isNaN(index)){
                    _this.setIndex(index);
                }
                
            }
            this.setIndex(1);
        },
        //当index被修改时,执行handlePageList函数,将页面中的index进行修改
        setIndex(newIndex){
            if(newIndex>0&&newIndex<=this._pageNumber){
                this._index = newIndex;
                this.el.querySelector('.pag-index').innerHTML = newIndex;
                this.handlePageList()
            }
        },
        addIndex(){
            var index = this._index+1;
            this.setIndex(index);
        },
        deleteIndex(){
            var index = this._index-1;
            this.setIndex(index)
        },
        //当this._pageSize 被改变时，修改this._pageNumber的值
        setPageSize(size){
            this._pageSize = size;
            this._pageNumber =  Math.ceil(this._totalSize/size);
        },
        getPageNumber(){
            return this._pageNumber;
        },
        //获取该分页的数据项
        handlePageList(){
            var start =  (this._index-1)*this._pageSize;
            var pageList =  this._list.slice(start,start+this._pageSize);
            this.fn(pageList)
        },
        getSize(){
            return  this._totalSize;
        }
    }
    return Pagination;
})()
