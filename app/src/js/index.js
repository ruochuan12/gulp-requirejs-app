// @name:'index.js'
// @author:'lxchuan12@163.com'
// @time:'2017.04.06'

define(['main','a', 'b', 'c', './shop/shopDetail'],function(a,b,cM,shopDetail){
    //如果是a.js则是相对于路径默认与main.js在同一个目录（js子目录）。如果是a则是相对于data-main里的文件路径（也就是默认baseUrl）
    a.aFn();
    b.bFn();
    cM.cFn();
    shopDetail.shopShow();
    console.log($);
    $('body').append('<p>append----加载了jquery'+ $().jquery +'</p>');
    // $('body').append('<p>append----不冲突'+ $ +'</p>');
    // 执行结果：
    /**
     * 这里是main模块	main.js:2
     * =>这些顺序只有b会变到1,2,4的位置((b模块)->a模块->(b模块)->c模块->这里是a模块的aFn函数->(b模块))=>因为在c模块中依赖了a模块.
     * 	a.js:2 			a模块
     b.js:2 			b模块
     c.js:2 			c模块
     a.js:4 			这里是a模块的aFn函数
     =>以下输出固定不变（函数里输出）
     a.js:4 			这里是a模块的aFn函数
     b.js:4 			这里是b模块的bFn函数
     c.js:6 			这里是c模块的cFn函数
     */
});
