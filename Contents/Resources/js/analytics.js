!function(){"use strict";function a(a){c.getConfig().addCallback(function(b){b.setTrackingPermitted(a)})}function b(){if(!i){i=!0;var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}}var c,d,e,f=this,g="UA-6111912-14",h="object"==typeof analytics,i=!1;h?(c=analytics.getService("Plex/Web"),d=c.getTracker(g)):(e||(e=[]),e.push(["_setAccount",g]),e.push(["_trackPageview"]));var j={set:function(a){h?d.set("dimension"+a.id,a.value):e.push(["_setCustomVar",a.id,a.name,a.value,2])},track:function(a){h?d.sendAppView(a):e.push(["_trackPageview","/"+a])},enable:function(){h?a(!0):b()},disable:function(){h&&a(!1)}};f._gaq=e,f._gamanager=j}.call(this);