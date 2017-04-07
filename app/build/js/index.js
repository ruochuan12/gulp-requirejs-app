console.log('这里是main模块');
require.config({ paths: { jquery: '../vendor/jquery.min' } });
define('main', [], function () {
    return;
});
define('a', [], function () {
    console.log('a模块');
    var aFn = function () {
        console.log('这里是a模块的aFn函数');
    };
    return { aFn: aFn };
});
define('b', [], function () {
    console.log('b模块');
    var bFn = function () {
        console.log('这里是b模块的bFn函数');
    };
    return { bFn: bFn };
});
define('c', ['a'], function (aM) {
    console.log('c模块');
    aM.aFn();
    var cFn = function () {
        console.log('这里是c模块的cFn函数');
    };
    return { cFn: cFn };
});
define('src/js/shop/shopDetail', [], function () {
    console.log('这里是店铺详情');
    function showShop() {
        console.log('显示店铺详情');
    }
    return { shopShow: showShop };
});
define('./src/js/index', [
    'main',
    'a',
    'b',
    'c',
    'src/js/shop/shopDetail'
], function (a, b, cM, shopDetail) {
    a.aFn();
    b.bFn();
    cM.cFn();
    shopDetail.shopShow();
    console.log($);
    $('body').append('<p>append----加载了jquery' + $().jquery + '</p>');
});