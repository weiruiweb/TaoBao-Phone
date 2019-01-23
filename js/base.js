window.base={
    g_restUrl:'https://solelynet.com/public/index.php/api/v1/',

    getData:function(params){
        if(!params.type){
            params.type='get';
        }
        var that=this;
        $.ajax({
            type:params.type,
            url:this.g_restUrl+params.url,
            data:params.data,
            beforeSend: function (XMLHttpRequest) {
                if (params.tokenFlag) {
                    XMLHttpRequest.setRequestHeader('token', that.getLocalStorage('token'));
                }
            },
            success:function(res){
                params.sCallback && params.sCallback(res);
            },
            error:function(res){
                params.eCallback && params.eCallback(res);
            }
        });
    },

    articleList:function(param,callback) {
  
        var allParams = {
            url:'UserArticle/GetList',
            type:'post',
            data:param,
            sCallback: function(data){
                callback&&callback(data);
            }
        };
        this.getData(allParams)
    },

    messages:function(param,callback) {
  
        var allParams = {
            url:'UserMessage/addMessage',
            type:'post',
            data:param,
            sCallback: function(data){
                callback&&callback(data);
            }
        };
        this.getData(allParams)
    },


    articleOne:function(param,callback) {
        var allParams = {
            url:'UserArticle/GetInfo',
            type:'post',
            data:param,
            sCallback: function(data){
                callback&&callback(data);
            }
        };
        this.getData(allParams)
    },

    menuOne:function(param,callback) {
        var allParams = {
            url:'UserMenu/GetInfo',
            type:'post',
            data:param,
            sCallback: function(data){
                callback&&callback(data);
            }
        };
        this.getData(allParams)
    },

    menuTree:function(param,callback) {
        var allParams = {
            url:'UserMenu/GetTree',
            type:'post',
            data:param,
            sCallback: function(data){
                callback&&callback(data);
            }
        };
        this.getData(allParams)
    },

    themeList:function(param,callback) {
        var allParams = {
            url:'UserContent/GetList',
            type:'post',
            data:param,
            sCallback: function(data){
                callback&&callback(data);
            }
        };
        this.getData(allParams)
    },

    themeOne:function(param,callback) {
        var allParams = {
            url:'UserContent/GetInfo',
            type:'post',
            data:param,
            sCallback: function(data){
                callback&&callback(data);
            }
        };
        this.getData(allParams)
    },

    themeNum:function(param,callback) {
        var allParams = {
            url:'UserContent/GetHomeTheme',
            type:'post',
            data:param,
            sCallback: function(data){
                callback&&callback(data);
            }
        };
        this.getData(allParams)
    },

    categoryTree:function(param,callback) {
        var allParams = {
            url:'UserCategory/GetTree',
            type:'post',
            data:param,
            sCallback: function(data){
                callback&&callback(data);
            }
        };
        this.getData(allParams)
    },

    cloneForm:function(form) {
        var res =  JSON.parse(JSON.stringify(form));   
        return form; 
    },
    
    getDataSet:function(e) {   
        return e.target.dataset; 
    },
    
    GetRequest:function() {  
       var url = location.search; //获取url中"?"符后的字串  
       var theRequest = new Object();  
       if (url.indexOf("?") != -1) {  
          var str = url.substr(1);  //去掉“？”
          strs = str.split("&");  
          for(var i = 0; i < strs.length; i ++) {  
             theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);  
          }  
       }  
       return theRequest;  
    },


    computePageArr:function(self) {   
        self.allPages = Math.ceil(self.paginate['count']/self.paginate['pagesize']);
        console.log(self.allPages);
        self.pageArray = [];
        self.pageArray.push(self.paginate.currentPage);
        if(self.paginate.currentPage+1 <= self.allPages){
            if(self.paginate.currentPage+2 <= self.allPages){
                self.pageArray.push(self.paginate.currentPage+1);
                self.pageArray.push(self.paginate.currentPage+2);
            }else{
                self.pageArray.push(self.paginate.currentPage+1);
            }
        };
        if(self.paginate.currentPage-1 > 0){
            if(self.paginate.currentPage-2 > 0){
                self.pageArray.unshift(self.paginate.currentPage-1);
                self.pageArray.unshift(self.paginate.currentPage-2);
                
            }else{
                self.pageArray.unshift(self.paginate.currentPage-1);
            }
        };
         
    },

    changePage:function(dataSet,self) {   
        if(dataSet.type == 'next'){
            if(self.paginate.currentPage >= self.allPages){
                alert('已经到底啦')
            }else{
                self.paginate.currentPage++;
                self.getMainData();
            }
        };
        if(dataSet.type == 'back'){
            if(self.paginate.currentPage == 1){
                alert('已经没有啦')
            }else{
                self.paginate.currentPage--;
                self.getMainData();
            }
        };
         
    },

    linkTo:function(self) {   
        if(self.linkPage>self.allPages||self.linkPage<1){
            alert('没有那一页');
            self.linkPage = '';
        }else{
            self.paginate.currentPage = self.linkPage;
            self.getMainData();
        }
         
    },



}

// console.log(this);