/**
 * @name jQuery waterfall Plugin
 * @version 1.0.7
 * @create 2012.1.30
 * @lastmodified 2013.10.13
 * @description Based on jQuery 1.4+
 * @author MuFeng (http://mufeng.me)
 * @url http://mufeng.me/waterfall.html
 **/
~function(c){var a,e=function(b,d){this.options=b;this.element=c(d);this.fun="";this.init()};e.prototype={init:function(){this.layout()},selector:function(){var b=this.options.selector,d=this.element;return!b?d.children().not(".waterfall"):d.filter(b).not(".waterfall").add(d.find(b))},measure:function(){var b=c(this.selector()[0]),d=this.options.isResizable,a=this.options.columnCount,f=this.options.columnWidth,b=b.outerWidth(!0),e=!d?this.element.width():c(window).width()-20,f=f||b,a=a||parseInt(e/
f);this.element.css("position","relative");d&&this.element.css({width:f*a,"margin-left":"auto","margin-right":"auto"});return[f,a]},layout:function(){var b=this.measure();a=a?a:Array(b[1]);c.each(a,function(b,c){void 0===c&&(a[b]=0)});this.selector().each(function(){var d=c(this),e=c.inArray(Math.min.apply(Math,a),a);d.css({left:e*b[0],top:a[e],position:"absolute"}).addClass("waterfall");a[e]+=d.outerHeight(!0)});this.element.css("height",Math.max.apply(Math,a));this.options.end.call(this)}};c.waterfall=
function(b,a){b=c.extend({selector:"",columnWidth:0,columnCount:0,isResizable:!1,end:function(){}},b);c.data(a,"waterfall",new e(b,a));return a};c.fn.waterfall=function(a){return c.waterfall(a,this)}}(jQuery); 
