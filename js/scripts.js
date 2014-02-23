(function () {
    "use strict";
    
    // COLLECTING DATA    
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    console.log('width at start is ' + x);
    console.log('height at start is ' + y);
    
    var ele = document.querySelector(".ele");
    var eles = document.querySelectorAll(".ele");
    var ele_h = ele.offsetHeight;
    console.log('one element is ' + ele_h + ' px in height');
    var ul_nh = y - 35;
    
    var one = ele_h;   
    var n_ele = Math.floor(ul_nh / one);
    var ele_o = eles.length - n_ele;
    console.log('you can see ' + n_ele + ' out of ' + eles.length + ' items');
    console.log('and hide ' + ele_o + ' items');   
    
    var ul = ele.parentNode;
    console.log(ul);    
        
    // INIT FUNCTION
    window.onload = function _INIT() {
    
        var pager;

        for (var i = 0; i < eles.length; i++) {
            if (i < n_ele) { 
                eles[i].className += " show";
            }  
            else if (i >= n_ele) {
                eles[i].className += " hide";
            }  
        };

        ul.style.height='' + ul_nh + 'px';
        
        if(eles.length > n_ele)
        {
            pager = d.createElement("div");
            pager.className = "pager";
            ul.parentNode.appendChild(pager);
        }
        
    };
    
    // FUNCTIONS HELPERS
    
    // check for mobile devices
    var check = {mobile:function(){return navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|iOS|Opera Mini|IEMobile/i);}};
    
    //addeventlistener ie8 comp
    var on = function(elem, type, eventHandle) {
        if (elem === null || elem === undefined) return;
        if ( elem.addEventListener ) {
            elem.addEventListener( type, eventHandle, false );
        } else if ( elem.attachEvent ) {
            elem.attachEvent( "on" + type, eventHandle );
        } else {
            elem["on"+type]=eventHandle;
        }
    };
    
    // safe remove
    Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
    }
    NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
        for(var i = 0, len = this.length; i < len; i++) {
            if(this[i] && this[i].parentElement) {
                this[i].parentElement.removeChild(this[i]);
            }
        }
    }
     
    // RESIZED
    function _RESIZING() {
        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.innerWidth || e.clientWidth || g.clientWidth,
            y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    
        var ul_nh = y - 35;
        var n_ele = Math.floor(ul_nh / one);
        var ele_o = eles.length - n_ele;
        console.log('you can see ' + n_ele + ' out of ' + eles.length + ' items');
        console.log('and hide ' + ele_o); 

        console.log('width on resize is ' + x);
        console.log('height on resize is ' + y);
        
        ul.style.height='' + ul_nh + 'px';

        for (var i = 0; i < eles.length; i++) {
            if (i < n_ele) {
                eles[i].className = eles[i].className.replace( /(?:^|\s)hide(?!\S)/g , ' show' );
            }  
            else if (i >= n_ele) { 
                eles[i].className = eles[i].className.replace( /(?:^|\s)show(?!\S)/g , ' hide' );
            }  
        }   
        
        var pager,
            pager_n;
        
        if (eles.length > n_ele) {
            pager = d.createElement("div");
            pager_n = ele_o;
            pager.className = "pager";
            ul.parentNode.appendChild(pager);
            var pg = d.getElementsByClassName('pager');
            console.log(pg.length);
            if(pg.length > 1) {
                ul.parentNode.removeChild(pager);
            }
        }         
        
        if (eles.length <= n_ele) {
            document.getElementsByClassName("pager").remove();
        }          
        
    };
        
    // this occurs when app viewed on mobile    
    function onMobile() {
        g.style.backgroundColor="red";
    };    
        
    // if mobile start onMobile
    if(check.mobile())onMobile();
    
   // on resize start resized
   on(window, "resize", function() {
       _RESIZING();      
   });





    
    
})();
