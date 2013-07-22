//javascript:
//(
document.getElementById('bm').addEventListener('click', function(){
    console.log('click');
    booky();


});

var booky = function () {
    if (typeof window.__MEFrame ==='undefined'){
    window.__MEFrame = document.createElement('iframe');
    __MEFrame.src = "http://message-everywhere.meteor.com/" + encodeURIComponent(window.location.href);
    __MEFrame.basicCSS = "border-bottom-left-radius:10px;position:fixed;top:0;right:0;border:none;z-index:2147483646;border:none;" + ['-webkit-', '-moz-', '-ms-', '-o-', ''].join('transition:all .1s;');
    __MEFrame.style.cssText = __MEFrame.basicCSS + "width:50px;height:50px";
    __MEFrame.open = false;
    var d = document.createElement('div');
    d.innerHTML = '&nabla;';
    d.style.cssText = 'width:30px;height:30px;position:fixed;top:10px;right:10px;background-color:#fb8;z-index:2147483647';
    d.onclick = function () {
        this.innerHTML = __MEFrame.open ? '&nabla;':'&Delta;';
        var s = __MEFrame.style;
        if (__MEFrame.open) {
            s.cssText = __MEFrame.basicCSS + 'width:50px;height:50px;'
        } else {
            s.cssText = __MEFrame.basicCSS + 'width:500px;height:500px;'
        }
        __MEFrame.open = !__MEFrame.open;
    };
    document.body.appendChild(__MEFrame);
    document.body.appendChild(d);
}};

//)();