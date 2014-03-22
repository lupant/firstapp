// The default code is a com class (inherited from linb.Com)
Class('App', 'xui.Com',{
    // Ensure that all the value of "key/value pair" does not refer to external variables
    Instance:{
        // To initialize instance(e.g. properties)
        initialize : function(){
            // To determine whether or not the com will be destroyed, when the first UI control be destroyed
            this.autoDestroy = true;
            // To initialize properties
            this.properties = {};
        },
        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Tools
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append((new xui.UI.Div())
            .setHost(host,"ctl_div11")
            .setDock("center")
            .setLeft(230)
            .setTop(150)
            .setWidth(600)
            .setHeight(350)
            .setHtml("<div id=\"slider\" class=\"swipe\">\n\t\t<div class=\"swipe-wrap\">\n\t\t\t<div>\n\t\t\t\t<img src=\"http://blogs.independent.co.uk/wp-content/uploads/2012/12/google-zip.jpg\" width=\"600\" height=\"350\">\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<img src=\"http://www.tuttoandroid.net/wp-content/uploads/2014/03/go.jpg\" width=\"600\" height=\"350\">\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<img src=\"http://www.itespresso.it/wp-content/uploads/2013/04/google-fiber-austin.jpg\" width=\"600\" height=\"350\">\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm89ylZErZ84ZfBkbSuxQQAPnkEp75SpKtKpDuOZWBY98jnzEJxw\" width=\"600\" height=\"350\">\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<img src=\"http://android.hdblog.it/wp-content/uploads/2013/06/google-apps-sphere1.jpeg\" width=\"600\" height=\"350\">\n\t\t\t</div>\n\t\t</div>\n\t\t<span class=\"nav prev\">Prev</span>\n\t\t<span class=\"nav next\">Next</span>\n\t</div>")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Tools
        },
        // Give a chance to load other com
        iniExComs : function(com, threadid){
        },
        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        // This instance's events
        events : {}
       
    },
    Static:{
        viewSize:{"width":1024, "height":768}
    }
});