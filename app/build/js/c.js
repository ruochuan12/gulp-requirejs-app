define('c', ['a'], function (aM) {
    console.log('c模块');
    aM.aFn();
    var cFn = function () {
        console.log('这里是c模块的cFn函数');
    };
    return { cFn: cFn };
});