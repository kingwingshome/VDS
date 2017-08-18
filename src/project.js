require=function e(t,n,s){function a(o,r){if(!n[o]){if(!t[o]){var i="function"==typeof require&&require;if(!r&&i)return i(o,!0);if(c)return c(o,!0);var d=new Error("Cannot find module '"+o+"'");throw d.code="MODULE_NOT_FOUND",d}var v=n[o]={exports:{}};t[o][0].call(v.exports,function(e){var n=t[o][1][e];return a(n?n:e)},v,v.exports,e,t,n,s)}return n[o].exports}for(var c="function"==typeof require&&require,o=0;o<s.length;o++)a(s[o]);return a}({Game:[function(e,t,n){"use strict";cc._RF.push(t,"50ac6+379FLF6xhnQkray/q","Game");var s=e("MyCommon"),a=e("SeatTextureDataSet"),c=a.DataSet,o=e("MyTypes"),r=o.MaterialType;o.SeatTexture;cc.Class({"extends":cc.Component,properties:{splashScreen:cc.Node,progressBar:{"default":null,type:cc.ProgressBar},mainScreen:cc.Node,eventSystemNode:cc.Node,panelBody:cc.Node,panelHead:cc.Node,panelBodyTextureBalls:cc.Node,panelHeadTextureBalls:cc.Node,bodyTextureModel:cc.Node,headTextureModel:cc.Node,views:{"default":[],type:cc.Node}},isBodyTextureLoaded:!1,isHeadTextureLoaded:!1,isBackTextureLoaded:!1,onLoad:function(){console.log("Game OnLoad"),this.initUI(),this.initVars()},initUI:function(){Global.progressBarExecution=this.progressBar,this.show(this.panelBodyTextureBalls),this.hide(this.panelHeadTextureBalls),this.panelBody.getChildByName("bg").opacity=200,this.panelHead.getChildByName("bg").opacity=128,this.panelBodyTextureBalls.getChildByName("view").getChildByName("bg").opacity=200,this.panelHeadTextureBalls.getChildByName("view").getChildByName("bg").opacity=128},initVars:function(){s.eventSystemNode=this.eventSystemNode,this.node.on("onExecuted",this.onExecuted,this),this.node.on("onBodyTextureLoaded",this.onBodyTextureLoaded,this),this.node.on("onHeadTextureLoaded",this.onHeadTextureLoaded,this),this.node.on("onBackTextureLoaded",this.onBackTextureLoaded,this),this.initBodyTextureBalls(),this.initHeadTextureBalls(),c.init(),this.currentBodyTexture=c.bodyTextures.get(6),this.currentHeadTexture=c.headTextures.get(8),this.currentBackTexture=c.backTextures.get(0)},initBodyTextureBalls:function(){var e=this.panelBodyTextureBalls.getChildByName("view").getChildByName("content").children;this.bodyTextureBalls=[];var t=0;e.forEach(function(e){var n=e.getComponent("TextureBall");n.selectedCallFunc=cc.callFunc(this.onBodyTextureBallSelected,this,n),this.bodyTextureBalls[t]=n,t+=1},this)},onBodyTextureBallSelected:function(e,t){console.log(t.id),this.bodyTextureBalls.forEach(function(e){e.id!=t.id&&(e.selected=!1)},this);var n=this.changeBodyTexture(t.id);this.bodyTextureModel.getComponent(cc.Label).string=n.materialType==r.Fabric?"面料"+n.name:"皮革"+n.name,this.currentBodyTexture=n,this.currentBodyTexture.materialType==r.Leather?(this.currentBackTexture=this.changeBackTexture(t.id),this.currentHeadTexture.materialType==r.Fabric&&this.onHeadTextureBallSelected(this,this.headTextureBalls[t.id-1])):this.currentBackTexture.materialType!=r.Fabric&&(this.currentBackTexture=this.changeBackTexture(0))},initHeadTextureBalls:function(){var e=this.panelHeadTextureBalls.getChildByName("view").getChildByName("content").children;this.headTextureBalls=[];var t=0;e.forEach(function(e){var n=e.getComponent("TextureBall");0==t?n.selected=!0:n.selected=!1,n.selectedCallFunc=cc.callFunc(this.onHeadTextureBallSelected,this,n),this.headTextureBalls[t]=n,t+=1},this)},onHeadTextureBallSelected:function(e,t){console.log(t.id),this.headTextureBalls.forEach(function(e){e.id!=t.id&&(e.selected=!1)},this);var n=this.changeHeadTexture(t.id);this.headTextureModel.getComponent(cc.Label).string=n.materialType==r.Fabric?"面料"+n.name:"皮革"+n.name,this.currentHeadTexture=n,this.currentHeadTexture.materialType==r.Fabric?(this.currentBackTexture.materialType!=r.Fabric&&(this.currentBackTexture=this.changeBackTexture(0)),this.currentBodyTexture.materialType==r.Leather&&this.onBodyTextureBallSelected(this,this.bodyTextureBalls[t.id-1])):this.currentBodyTexture.materialType==r.Leather?this.currentBackTexture.id!=this.currentBodyTexture.id&&(this.currentBackTexture=this.changeBackTexture(this.currentBodyTexture.id)):this.currentBackTexture.materialType!=r.Fabric&&(this.currentBackTexture=this.changeBackTexture(0))},changeBodyTexture:function(e){var t=c.bodyTextures.get(e);return this.views[0].getChildByName("Seat").getComponent("SeatViewItem").SetBodyTexture(t.views[0]),this.views[1].getChildByName("Seat").getComponent("SeatViewItem").SetBodyTexture(t.views[1]),t},changeHeadTexture:function(e){var t=c.headTextures.get(e);return this.views[0].getChildByName("Seat").getComponent("SeatViewItem").SetHeadTexture(t.views[0]),this.views[1].getChildByName("Seat").getComponent("SeatViewItem").SetHeadTexture(t.views[1]),t},changeBackTexture:function(e){var t=c.backTextures.get(e);return this.views[0].getChildByName("Seat").getComponent("SeatViewItem").SetBackTexture(t.views[0]),this.views[1].getChildByName("Seat").getComponent("SeatViewItem").SetBackTexture(t.views[1]),t},ShowPanelBody:function(){this.panelBodyTextureBalls.active===!1&&(this.show(this.panelBodyTextureBalls),this.hide(this.panelHeadTextureBalls),this.panelBody.getChildByName("bg").opacity=200,this.panelHead.getChildByName("bg").opacity=128,this.panelBodyTextureBalls.getChildByName("view").getChildByName("bg").opacity=200,this.panelHeadTextureBalls.getChildByName("view").getChildByName("bg").opacity=128)},ShowPanelHead:function(){this.panelHeadTextureBalls.active===!1&&(this.hide(this.panelBodyTextureBalls),this.show(this.panelHeadTextureBalls),this.panelBody.getChildByName("bg").opacity=128,this.panelHead.getChildByName("bg").opacity=200,this.panelBodyTextureBalls.getChildByName("view").getChildByName("bg").opacity=128,this.panelHeadTextureBalls.getChildByName("view").getChildByName("bg").opacity=200)},show:function(e){e.active=!0},hide:function(e){e.active=!1},onBodyTextureLoaded:function(){console.log("onBodyTextureLoaded"),this.isBodyTextureLoaded=!0},onHeadTextureLoaded:function(){console.log("onHeadTextureLoaded"),this.isHeadTextureLoaded=!0},onBackTextureLoaded:function(){console.log("onBackTextureLoaded"),this.isBackTextureLoaded=!0},onExecuted:function(e){switch(e.detail.id){case"onBodyTextureLoaded":Global.progessBodyTextureLoding=e.detail.progress;break;case"onHeadTextureLoaded":Global.progessHeadTextureLoding=e.detail.progress;break;case"onBackTextureLoaded":Global.progessBackTextureLoding=e.detail.progress}var t=(Global.progessBodyTextureLoding+Global.progessHeadTextureLoding+Global.progessBackTextureLoding)/3;Global.progressBarExecution.progress=t,console.log(t),t>=1&&(this.splashScreen.active=!1)}}),cc._RF.pop()},{MyCommon:"MyCommon",MyTypes:"MyTypes",SeatTextureDataSet:"SeatTextureDataSet"}],HelloWorld:[function(e,t,n){"use strict";cc._RF.push(t,"280c3rsZJJKnZ9RqbALVwtK","HelloWorld"),cc.Class({"extends":cc.Component,properties:{label:{"default":null,type:cc.Label},text:"Hello, World!"},onLoad:function(){this.label.string=this.text},update:function(e){}}),cc._RF.pop()},{}],Home:[function(e,t,n){"use strict";cc._RF.push(t,"b2db86CtcdG06JaXb9TlF9Y","Home");e("MyCommon");cc.Class({"extends":cc.Component,properties:{playButton:cc.Node,carPaintNode:cc.Node},onLoad:function(){var e=this.playButton.children[0];e.getComponent(cc.Label).string="加载中\n。。。。。",Global.startNode=this.playButton,this.playButton.getComponent(cc.Button).interactable=!1;var t=this.carPaintNode.getComponent(cc.Animation);t.repeatCount=10,t.play().wrapMode=cc.WrapMode.PingPong,cc.director.preloadScene("SceneMain",function(){Global.startNode.getComponent(cc.Button).interactable=!0,e.getComponent(cc.Label).string="立即开始\n设计乘客椅"})},playGame:function(){var e=this.carPaintNode.getComponent(cc.Animation);e.stop(),cc.director.loadScene("SceneMain")}}),cc._RF.pop()},{MyCommon:"MyCommon"}],MyCommon:[function(e,t,n){"use strict";cc._RF.push(t,"604203knwpPI6VbMNynuHSc","MyCommon"),window.Global={startNode:null,progessBodyTextureLoding:0,progessHeadTextureLoding:0,progessBackTextureLoding:0,progressBarExecution:null};var s={eventSystemNode:null,startNode:null};t.exports={MyCommon:s},cc._RF.pop()},{}],MyTypes:[function(e,t,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}cc._RF.push(t,"3208fKlUp1Dsp7EV0pKaldo","MyTypes");var a=cc.Enum({Fabric:1,Leather:2}),c=function o(){s(this,o),this.model="K00",this.id=0,this.materialType=a.Fabric,this.views=[]};t.exports={MaterialType:a,SeatTexture:c},cc._RF.pop()},{}],SeatTextureDataSet:[function(e,t,n){"use strict";cc._RF.push(t,"99f0fms2XZFAYfNs818Pkvq","SeatTextureDataSet");var s=e("MyCommon"),a=e("MyTypes"),c=a.MaterialType,o=a.SeatTexture,r={_backTexturesCounter:0,_bodyTexturesCounter:0,_headTexturesCounter:0,backTextures:new Map,bodyTextures:new Map,headTextures:new Map,init:function(){this.initTextures(this.bodyTextures,"Seat/body/",this._backTexturesCounter,34,"onBodyTextureLoaded"),this.initTextures(this.headTextures,"Seat/head/",this._backTexturesCounter,34,"onHeadTextureLoaded"),this.initBackTexture(this.backTextures,"Seat/back/",this._backTexturesCounter,22,"onBackTextureLoaded")},initBackTexture:function(e,t,n,a,r){var i=new o;i.id=0,i.name="0",i.materialType=c.Fabric;var d=t+"01";cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0))),i.views[0]=t}),d=t+"02",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),i.views[1]=t});var v=new o;v.id=8,v.name="K15519",v.materialType=c.Leather,d=t+"01",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),v.views[0]=t}),d=t+"K15519",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),v.views[1]=t});var u=new o;u.id=9,u.name="K16",u.materialType=c.Leather,d=t+"01",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),u.views[0]=t}),d=t+"K16",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),u.views[1]=t});var l=new o;l.id=10,l.name="K20",l.materialType=c.Leather,d=t+"01",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),l.views[0]=t}),d=t+"K20",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),l.views[1]=t});var m=new o;m.id=11,m.name="K24720",m.materialType=c.Leather,d=t+"01",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),m.views[0]=t}),d=t+"K24720",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),m.views[1]=t});var p=new o;p.id=12,p.name="K25",p.materialType=c.Leather,d=t+"01",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),p.views[0]=t}),d=t+"K25",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),p.views[1]=t});var E=new o;E.id=13,E.name="K30",E.materialType=c.Leather,d=t+"01",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),E.views[0]=t}),d=t+"K30",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),E.views[1]=t});var h=new o;h.id=14,h.name="K31",h.materialType=c.Leather,d=t+"01",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),h.views[0]=t}),d=t+"K31",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),h.views[1]=t});var y=new o;y.id=15,y.name="K35",y.materialType=c.Leather,d=t+"01",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),y.views[0]=t}),d=t+"K35",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),y.views[1]=t});var w=new o;w.id=16,w.name="K36",w.materialType=c.Leather,d=t+"01",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),w.views[0]=t}),d=t+"K36",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),w.views[1]=t});var S=new o;S.id=17,S.name="K38",S.materialType=c.Leather,d=t+"01",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),S.views[0]=t}),d=t+"K38",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),S.views[1]=t}),e.set(0,i),e.set(8,v),e.set(9,u),e.set(10,l),e.set(11,m),e.set(12,p),e.set(13,E),e.set(14,h),e.set(15,y),e.set(16,w),e.set(17,S)},initTextures:function(e,t,n,a,r){var i=new o;i.id=1,i.name="K97614-1",i.materialType=c.Fabric;var d=t+"97614-1-01";cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),i.views[0]=t}),d=t+"97614-1-02",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),i.views[1]=t});var v=new o;v.id=2,v.name="K93303",v.materialType=c.Fabric,d=t+"93303-01",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),v.views[0]=t}),d=t+"93303-02",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),v.views[1]=t});var u=new o;u.id=3,u.name="K93328",u.materialType=c.Fabric,d=t+"93328-01",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),u.views[0]=t}),d=t+"93328-02",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),u.views[1]=t});var l=new o;l.id=4,l.name="K93379",l.materialType=c.Fabric,d=t+"93379-01",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),l.views[0]=t}),d=t+"93379-02",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),l.views[1]=t});var m=new o;m.id=5,m.name="K9697-1",m.materialType=c.Fabric,d=t+"9697-1-01",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),m.views[0]=t}),d=t+"9697-1-02",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),m.views[1]=t});var p=new o;p.id=6,p.name="K97728",p.materialType=c.Fabric,d=t+"97728-01",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),p.views[0]=t}),d=t+"97728-02",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),p.views[1]=t});var E=new o;E.id=7,E.name="KT603",E.materialType=c.Fabric,d=t+"T603-01",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),E.views[0]=t}),d=t+"T603-02",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),E.views[1]=t});var h=new o;h.id=8,h.name="K15519",h.materialType=c.Leather,d=t+"K15519-01",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),h.views[0]=t}),d=t+"K15519-02",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),h.views[1]=t});var y=new o;y.id=9,y.name="K16",y.materialType=c.Leather,d=t+"K16-01",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),y.views[0]=t}),d=t+"K16-02",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),y.views[1]=t});var w=new o;w.id=10,w.name="K20",w.materialType=c.Leather,d=t+"K20-01",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),w.views[0]=t}),d=t+"K20-02",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),w.views[1]=t});var S=new o;S.id=11,S.name="K24720",S.materialType=c.Leather,d=t+"K24720-01",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),S.views[0]=t}),d=t+"K24720-02",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),S.views[1]=t});var x=new o;x.id=12,x.name="K25",x.materialType=c.Leather,d=t+"K25-01",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),x.views[0]=t}),d=t+"K25-02",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),x.views[1]=t});var T=new o;T.id=13,T.name="K30",T.materialType=c.Leather,d=t+"K30-01",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),T.views[0]=t}),d=t+"K30-02",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),T.views[1]=t});var C=new o;C.id=14,C.name="K31",C.materialType=c.Leather,d=t+"K31-01",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),C.views[0]=t}),d=t+"K31-02",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),C.views[1]=t});var g=new o;g.id=15,g.name="K35",g.materialType=c.Leather,d=t+"K35-01",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),g.views[0]=t}),d=t+"K35-02",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),g.views[1]=t});var N=new o;N.id=16,N.name="K36",N.materialType=c.Leather,d=t+"K36-01",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),N.views[0]=t}),d=t+"K36-02",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),N.views[1]=t});var f=new o;f.id=17,f.name="K38",f.materialType=c.Leather,d=t+"K38-01",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),f.views[0]=t}),d=t+"K38-02",cc.loader.loadRes(d,cc.SpriteFrame,function(e,t){n+=1,cc.loader.setAutoRelease(d,!0),n==a&&s.eventSystemNode.dispatchEvent(new cc.Event.EventCustom(r,(!0)));var c=new cc.Event.EventCustom("onExecuted",(!0));c.setUserData({id:r,progress:n/a}),s.eventSystemNode.dispatchEvent(c),f.views[1]=t}),e.set(1,i),e.set(2,v),e.set(3,u),e.set(4,l),e.set(5,m),e.set(6,p),e.set(7,E),e.set(8,h),e.set(9,y),e.set(10,w),e.set(11,S),e.set(12,x),e.set(13,T),e.set(14,C),e.set(15,g),e.set(16,N),e.set(17,f)}};t.exports={DataSet:r},cc._RF.pop()},{MyCommon:"MyCommon",MyTypes:"MyTypes"}],SeatViewItem:[function(e,t,n){"use strict";cc._RF.push(t,"d21e6ly1O9Df4wzWQyiaRDy","SeatViewItem"),cc.Class({"extends":cc.Component,properties:{head:cc.Node,body:cc.Node,back:cc.Node,base:cc.Node},onLoad:function(){},SetHeadTexture:function(e){this.SetSpriteFrame(this.head,e)},SetBodyTexture:function(e){this.SetSpriteFrame(this.body,e)},SetBackTexture:function(e){this.SetSpriteFrame(this.back,e)},SetBaseTexture:function(e){this.SetSpriteFrame(this.base,e)},SetSpriteFrame:function(e,t){e.getComponent(cc.Sprite).spriteFrame=t}}),cc._RF.pop()},{}],TextureBall:[function(e,t,n){"use strict";cc._RF.push(t,"050b0AXtgRIzpB9VUN/sZq3","TextureBall");var s=e("MyTypes");cc.Class({"extends":cc.Component,properties:{materialType:{"default":s.MaterialType.Fabric,type:s.MaterialType},id:1,normalNode:cc.Node,highlightNode:cc.Node,modelNode:cc.Node,model:{get:function(){return this.modelNode.getComponent(cc.Label).string}},_selected:!1,selected:{get:function(){return this._selected},set:function(e){this._selected=e,this.normalNode.active=!e,this.highlightNode.active=e}},selectedCallFunc:{"default":null,type:cc.callFunc,visiable:!1}},onLoad:function(){},onSelected:function(){this.selected||(this.selected=!0,void 0!=this.selectedCallFunc&&this.node.runAction(this.selectedCallFunc))}}),cc._RF.pop()},{MyTypes:"MyTypes"}],Types:[function(e,t,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}cc._RF.push(t,"705e3kDt1pHpIAjns5xS1FY","Types");var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),c=cc.Enum({Fabric:1,Leather:2}),o=({SeatMaterialMap:new Map,init:function(){for(var e=1;e<3;e++);}},{Persons:new Map,init:function(){var e={name:"Skyline"},t={name:"Autoaves"},n={name:"TTT"};this.Persons.set("p1",e),this.Persons.set("p2",t),this.Persons.set("p3",n)}});o.init();var r=function(){function e(t,n){s(this,e),this.id=100,this.x=t,this.y=n}return a(e,[{key:"toString",value:function(){return"("+this.x+","+this.y+")"}}]),e}(),i={points:[],init:function(){var e=new r(1,2);e.id=1;var t=new r(3,4);t.id=10,this.points[0]=e,this.points[1]=t}};i.init(),t.exports={Persons:o.Persons,Points:i.points,MaterialType:c},cc._RF.pop()},{}],ViewsControl:[function(e,t,n){"use strict";cc._RF.push(t,"f109aaKLl9KhI3nVCYzXzRJ","ViewsControl"),cc.Class({"extends":cc.Component,properties:{view1:cc.Node,view2:cc.Node},onLoad:function(){},toggleVisibility:function(){this.view1.active===!0?(this.hide(this.view1),this.show(this.view2)):(this.hide(this.view2),this.show(this.view1))},show:function(e){e.active=!0},hide:function(e){e.active=!1}}),cc._RF.pop()},{}]},{},["Game","HelloWorld","Home","SeatViewItem","TextureBall","ViewsControl","MyCommon","MyTypes","SeatTextureDataSet","Types"]);