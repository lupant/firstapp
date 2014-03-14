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
            
            append((new xui.UI.SButton())
            .setHost(host,"ctl_sbutton1")
            .setDock("center")
            .setLeft(330)
            .setTop(310)
            .setCaption("click me")
            .onClick("_ctl_sbutton1_onclick")
            );
            
            append((new xui.UI.DatePicker())
            .setHost(host,"ctl_datepicker1")
            .setDock("center")
            .setLeft(250)
            .setTop(100)
            .setValue(new Date(2014,2,14,0,0,0,0))
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
        _ctl_sbutton1_onclick : function (profile, e, src, value) {
            var uictrl = profile.boxing();
            xui.alert(this.ctl_datepicker1.getUIValue());
        }
    }
});