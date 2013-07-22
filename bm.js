//javascript:
    //(
document.getElementById('bm').addEventListener('click',booky);
      var booky = function () {
        window.__MEFrame = document.createElement('iframe');
        __MEFrame.src = "http://10.0.0.2:3000/"+encodeURIComponent(window.location.href);

        __MEFrame.basicCSS = "position:fixed;top:0;right:0;border:none;z-index:2147483646;border:none;"+['-webkit-','-moz-','-ms-','-o-',''].join('transition:all .1s;');
        __MEFrame.style.cssText = __MEFrame.basicCSS+"width:60px;height:30px";
        var d = document.createElement('div');
        d.innerHTML='open';
        d.style.cssText='width:50px;height:20px;position:fixed;top:5px;right:5px;background-color:#fb8;z-index:2147483647';
        d.onclick=function(){
            this.innerHTML = this.innerHTML==='open'?'close':'open';
            var s = __MEFrame.style;
            console.log('click');
            console.log(s.width);
            if(s.width === '500px'){
                s.cssText=__MEFrame.basicCSS+'width:60px;height:30px;'

            }else{
                s.cssText=__MEFrame.basicCSS+'width:500px;height:200px;'

            }

        };
        document.body.appendChild(__MEFrame);
        document.body.appendChild(d);

    }

//)();