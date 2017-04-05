define('./src/js/index', [
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