// 匹配配置baseUrl
// (function() {
//     var global = window || (0, eval)('this');
//     var rootPath = null;
//     for (var i = 0, scripts = document.getElementsByTagName('script'); i < scripts.length; ++i) {
//         if (RegExp('^.*/js/main[^/]*.js$').test(scripts[i].src)) {
//             rootPath = scripts[i].src.replace(/js\/main[^\/]*.js$/g, '');
//             eval('require.config({baseUrl: scripts[i].src.replace(/js\\/main[^\\/]*.js$/g, "")});');
//             break;
//         }
//     };
// })();

// require config
console.log('这里是main模块');
require.config({
	paths:{
		jquery:'../vendor/jquery.min'
	}
	//paths中可以写成['libs/angular','']，第二个是备选，第一个加载失败时加载第二个，比如使用cdn的时候。
	//shim:把没有支持amd写法的转成支持 amd写法。
	// 参考 [Javascript模块化编程（三）：require.js的用法](http://www.ruanyifeng.com/blog/2012/11/require_js.html)
});




//requirejs如何结合使用jquery

// require(['../vendor/jquery.min'],function(){			//这里不管参数是啥（即使为空），jquery都运行正常。
// 	// $('body').before('<p>加载了jquery</p>');
// 	$('body').append('<p>append----加载了jquery'+ $().jquery +'</p>');
// 	// $.noConflict(true); // 使用$
// 	console.log($);
// 	// $('body').append('<p>append----不冲突'+ $ +'</p>');
// });
