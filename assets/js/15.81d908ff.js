(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{387:function(t,e,o){"use strict";o.r(e);var a={name:"VideoPlayer",props:{src:{type:[String,Array],require:!0},muted:{type:Boolean,default:!1},cover:{type:String},volume:{type:Number,default:.5},preload:{validator:function(t){return-1!==["none","metadata","auto "].indexOf(t)},default:"metadata"},loop:{type:Boolean,default:!1},logo:{type:String},title:{type:String},controls:{type:[Boolean,String],validator:function(t){return-1!==["fixed","auto",!1,!0].indexOf(t)},default:"auto"},autoplay:{type:Boolean,default:!1},lang:{type:String,default:"zh-CN"}}},l=o(2),r=Object(l.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"player-container"},[e("vue-core-video-player",{attrs:{src:t.src,muted:t.muted,cover:t.cover,volume:t.volume,preload:t.preload,loop:t.loop,logo:t.logo,title:t.title,controls:t.controls,autoplay:t.autoplay,lang:t.lang}})],1)}),[],!1,null,null,null);e.default=r.exports}}]);