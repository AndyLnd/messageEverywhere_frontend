document.getElementById('bm').addEventListener('click', function(){
    console.log('click');
    booky();


});


//javascript:
//(
var booky = function () {
    if (typeof window.__MEFrame ==='undefined'){
        window.__MEFrame = document.createElement('iframe');
        __MEFrame.src = "http://message-everywhere.meteor.com/" + encodeURIComponent(window.location.href);
        __MEFrame.scrolling = 'no';
        __MEFrame.basicCSS = "border-bottom-left-radius:10px;position:fixed;top:0;right:0;border:none;z-index:2147483646;border:none;" + ['-webkit-', '-moz-', '-ms-', '-o-', '',''].join('transition:all .1s;');
        __MEFrame.style.cssText = __MEFrame.basicCSS + "width:50px;height:50px";
        __MEFrame.open = false;
        var d = document.createElement('div');
        d.style.cssText = 'width:50px;height:50px;position:fixed;top:0;0;z-index:2147483647;'+ ['-webkit-', '-moz-', '-ms-', '-o-', '',''].join('user-select:none;');
        console.log(d.style.cssText);
        d.addEventListener('click',function () {
            var s = __MEFrame.style;
            if (__MEFrame.open) {
                s.cssText = __MEFrame.basicCSS + 'width:50px;height:50px;';
            } else {
                s.cssText = __MEFrame.basicCSS + 'width:500px;height:500px;';
            }
            __MEFrame.open = !__MEFrame.open;
        });
        document.body.appendChild(__MEFrame);
        document.body.appendChild(d);
    }}

//)();
