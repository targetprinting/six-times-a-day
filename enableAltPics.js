function enableAltPics() {
    var allimages = document.getElementsByTagName("img");
    var preloadimages = [];
    var classes, src;
    for (var i = 0; i < allimages.length; i++) {
        classes = allimages[i].className;
        if (classes) { // <img includes classes
            if (classes.search("\\baltImg\\b") != -1) { // <img classes include "altImg"
                src = allimages[i].getAttribute("src");
                if (src.charAt[src.length - 5] != "b") { // protect against attempted second loading when src has been altered
                    preloadimages.push(new Image()); //preload alternate image
                    preloadimages[preloadimages.length - 1].src = src.slice(0, -4) + "b.jpg";
                    allimages[i].onmouseover = function () { // add terminal "b" to title & filename
                        var src = this.getAttribute("src"),
                            title = this.getAttribute("title");
                        if (title.charAt[title.length - 1] != "b") {
                            this.setAttribute("title", title + "b");
                            this.setAttribute("src", src.slice(0, -4) + "b.jpg");
                        } //end if
                    } // end function
                    allimages[i].onmouseout = function () { // delete terminal "b" from title & filename
                        var src = this.getAttribute("src"),
                            title = this.getAttribute("title");
                        //						if (title.charAt[title.length-1] == "b"){
                        this.setAttribute("title", title.slice(0, -1));
                        this.setAttribute("src", src.slice(0, -5) + ".jpg");
                        //						} //end if
                    } // end function
                } //end if
            } //end if
        } //end if
    } //end for
} // end function


(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W8MLLR6');

