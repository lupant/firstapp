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
            
            append((new xui.UI.Pane())
            .setHost(host,"ctl_pane8")
            .setDock("fill")
            .setDockFloat(true)
            .setPosition("relative")
            .setOverflow("auto")
            );
            
            host.ctl_pane8.append((new xui.UI.Div())
            .setHost(host,"ctl_div11")
            .setDock("center")
            .setLeft(210)
            .setTop(70)
            .setWidth(600)
            .setHeight(350)
            .setVisibility("visible")
            .setHtml("<div id=\"slider\" class=\"swipe\"> <div class=\"swipe-wrap\"> <div><img src=\"http://blogs.independent.co.uk/wp-content/uploads/2012/12/google-zip.jpg\" width=\"600\" height=\"350\">\t</div>\t<div><img src=\"http://www.tuttoandroid.net/wp-content/uploads/2014/03/go.jpg\" width=\"600\" height=\"350\">\t</div>\t<div><img src=\"http://www.itespresso.it/wp-content/uploads/2013/04/google-fiber-austin.jpg\" width=\"600\" height=\"350\"></div><div><img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm89ylZErZ84ZfBkbSuxQQAPnkEp75SpKtKpDuOZWBY98jnzEJxw\" width=\"600\" height=\"350\"></div><div><img src=\"http://android.hdblog.it/wp-content/uploads/2013/06/google-apps-sphere1.jpeg\" width=\"600\" height=\"350\"></div></div><span class=\"nav prev\">Prev</span><span class=\"nav next\">Next</span> </div>")
            .setOverflow("hidden")
            );
            
            host.ctl_pane8.append((new xui.UI.Div())
            .setHost(host,"ctl_div48")
            .setDock("center")
            .setLeft(180)
            .setTop(460)
            .setWidth(600)
            .setHeight(450)
            .setHtml("<iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23841.872187536166!2d12.511056661300383!3d41.67228900958879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sit!4v1395472502339\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\"></iframe>")
            .setOverflow("hidden")
            );
            
            host.ctl_pane8.append((new xui.UI.SButton())
            .setHost(host,"ctl_sbutton3")
            .setDock("center")
            .setLeft(470)
            .setTop(30)
            .setWidth(90)
            .setCaption("Refresh")
            .onClick("_ctl_sbutton3_onclick")
            );
            
            append((new xui.UI.Div())
            .setHost(host,"ctl_div139")
            .setDock("left")
            .setWidth(100)
            );
            
            append((new xui.UI.Div())
            .setHost(host,"ctl_div140")
            .setDock("right")
            .setWidth(100)
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
        events : {},
        _ctl_sbutton3_onclick:function (profile,e,src,value){
            
            location.reload();
        }
        
    },
    Static:{
        viewSize:{"width":1280, "height":1024}
    }
});