(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
!function(t){function e(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function n(){this.raw=[],this.length=0}function r(){return"___"+C++}function i(t,e){var n=new Function;n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}function o(t){return O[t]}function s(t){return'"'+t.replace(/\x5C/g,"\\\\").replace(/"/g,'\\"').replace(/\x0A/g,"\\n").replace(/\x09/g,"\\t").replace(/\x0D/g,"\\r")+'"'}function a(t){return t.replace(/[\^\[\]\$\(\)\{\}\?\*\.\+]/g,function(t){return"\\"+t})}function p(t){var e=arguments;return t.replace(/\{([0-9]+)\}/g,function(t,n){return e[n-0+1]})}function h(t){return t=t.replace(/^\s*\*/,""),p('gv({0},["{1}"])',s(t),t.replace(/\[['"]?([^'"]+)['"]?\]/g,function(t,e){return"."+e}).split(".").join('","'))}function c(t,e,n,r,i,o){for(var s=n.length,a=t.split(e),p=0,h=[],c=0,l=a.length;l>c;c++){var f=a[c];if(c){var u=1;for(p++;;){var d=f.indexOf(n);if(0>d){h.push(p>1&&u?e:"",f);break}if(p=r?p-1:0,h.push(p>0&&u?e:"",f.slice(0,d),p>0?n:""),f=f.slice(d+s),u=0,0===p)break}0===p&&(i(h.join("")),o(f),h=[])}else f&&o(f)}p>0&&h.length>0&&(o(e),o(h.join("")))}function l(t,e,n){var r,i=[],o=e.options,a="",p="",f="",u="";return n&&(a="ts(",p=")",f=B,u=S,r=o.defaultFilter),c(t,o.variableOpen,o.variableClose,1,function(t){n&&t.indexOf("|")<0&&r&&(t+="|"+r);var o=t.indexOf("|"),s=(o>0?t.slice(0,o):t).replace(/^\s+/,"").replace(/\s+$/,""),c=o>0?t.slice(o+1):"",d=0===s.indexOf("*"),g=[d?"":a,h(s),d?"":p];if(c){c=l(c,e);for(var y=c.split("|"),v=0,m=y.length;m>v;v++){var R=y[v];/^\s*([a-z0-9_-]+)(\((.*)\))?\s*$/i.test(R)&&(g.unshift('fs["'+RegExp.$1+'"]('),RegExp.$3&&g.push(",",RegExp.$3),g.push(")"))}}i.push(f,g.join(""),u)},function(t){i.push(f,n?s(t):t,u)}),i.join("")}function f(t,e){this.value=t,this.engine=e}function u(t,e){this.value=t,this.engine=e,this.children=[],this.cloneProps=[]}function d(t,e){var n=t.stack,r=e?n.find(function(t){return t instanceof e}):n.bottom();if(r){for(var i;(i=n.top())!==r;){if(!i.autoClose)throw new Error(i.type+" must be closed manually: "+i.value);i.autoClose(t)}r.close(t)}return r}function g(t,e){if(!/^\s*([a-z0-9\/_-]+)\s*(\(\s*master\s*=\s*([a-z0-9\/_-]+)\s*\))?\s*/i.test(t))throw new Error("Invalid "+this.type+" syntax: "+t);this.master=RegExp.$3,this.name=RegExp.$1,u.call(this,t,e),this.blocks={}}function y(t,e){if(!/^\s*([a-z0-9\/_-]+)\s*$/i.test(t))throw new Error("Invalid "+this.type+" syntax: "+t);this.name=RegExp.$1,u.call(this,t,e),this.cloneProps=["name"]}function v(t,e){if(!/^\s*([a-z0-9\/_-]+)\s*$/i.test(t))throw new Error("Invalid "+this.type+" syntax: "+t);this.name=RegExp.$1,u.call(this,t,e),this.cloneProps=["name","state","blocks","target"],this.blocks={}}function m(t,e){if(!/^\s*([a-z0-9_]+)\s*=([\s\S]*)$/i.test(t))throw new Error("Invalid "+this.type+" syntax: "+t);this.name=RegExp.$1,this.expr=RegExp.$2,u.call(this,t,e),this.cloneProps=["name","expr"]}function R(t,e){if(!/^\s*([a-z0-9_-]+)\s*(\(([\s\S]*)\))?\s*$/i.test(t))throw new Error("Invalid "+this.type+" syntax: "+t);this.name=RegExp.$1,this.args=RegExp.$3,u.call(this,t,e),this.cloneProps=["name","args"]}function E(t,e){if(!/^\s*([a-z0-9\/_-]+)\s*(\(([\s\S]*)\))?\s*$/i.test(t))throw new Error("Invalid "+this.type+" syntax: "+t);this.name=RegExp.$1,this.args=RegExp.$3,u.call(this,t,e),this.cloneProps=["name","args"]}function x(t,e){var n=new RegExp(p("^\\s*({0}[\\s\\S]+{1})\\s+as\\s+{0}([0-9a-z_]+){1}\\s*(,\\s*{0}([0-9a-z_]+){1})?\\s*$",a(e.options.variableOpen),a(e.options.variableClose)),"i");if(!n.test(t))throw new Error("Invalid "+this.type+" syntax: "+t);this.list=RegExp.$1,this.item=RegExp.$2,this.index=RegExp.$4,u.call(this,t,e),this.cloneProps=["list","item","index"]}function w(t,e){u.call(this,t,e)}function b(t,e){w.call(this,t,e)}function $(t,e){u.call(this,t,e)}function k(t,e){e.target=t;var n=e.engine,r=t.name;if(n.targets[r])switch(n.options.namingConflict){case"override":n.targets[r]=t,e.targets.push(r);case"ignore":break;default:throw new Error("[ETPL_TARGET_EXISTS]"+r)}else n.targets[r]=t,e.targets.push(r)}function A(t,e){L[t]=e,e.prototype.type=t}function P(t){this.options={commandOpen:"<!--",commandClose:"-->",commandSyntax:/^\s*(\/)?([a-z]*)\s*(?::([\s\S]*))?$/,variableOpen:"${",variableClose:"}",defaultFilter:"html"},this.config(t),this.targets={},this.filters=e({},I)}function _(t,e){function r(){var t;if(l.length>0&&(t=l.join(""))){var n=new f(t,e);n.beforeAdd(h),p.top().addChild(n),l=[],e.options.strip&&h.current instanceof u&&(n.value=t.replace(/^[\x20\t\r]*\n/,"")),h.current=n}}var i,o=e.options.commandOpen,s=e.options.commandClose,a=e.options.commandSyntax,p=new n,h={engine:e,targets:[],stack:p,target:null},l=[];return c(t,o,s,0,function(t){var n,p=a.exec(t);if(p&&(n=p[2]||"target")&&(i=L[n.toLowerCase()])&&"function"==typeof i){r();var c=h.current;e.options.strip&&c instanceof f&&(c.value=c.value.replace(/\r?\n[\x20\t]*$/,"\n")),p[1]?c=d(h,i):(c=new i(p[3],e),"function"==typeof c.beforeOpen&&c.beforeOpen(h),c.open(h)),h.current=c}else/^\s*\/\//.test(t)||l.push(o,t,s);i=null},function(t){l.push(t)}),r(),d(h),h.targets}n.prototype={push:function(t){this.raw[this.length++]=t},pop:function(){if(this.length>0){var t=this.raw[--this.length];return this.raw.length=this.length,t}},top:function(){return this.raw[this.length-1]},bottom:function(){return this.raw[0]},find:function(t){for(var e=this.length;e--;){var n=this.raw[e];if(t(n))return n}}};var C=178245,O={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},I={html:function(t){return t.replace(/[&<>"']/g,o)},url:encodeURIComponent,raw:function(t){return t}},D='var r="";',B="r+=",S=";",j="return r;";"undefined"!=typeof navigator&&/msie\s*([0-9]+)/i.test(navigator.userAgent)&&RegExp.$1-0<8&&(D="var r=[],ri=0;",B="r[ri++]=",j='return r.join("");'),f.prototype={getRendererBody:function(){var t=this.value,e=this.engine.options;return!t||e.strip&&/^\s*$/.test(t)?"":l(t,this.engine,1)},clone:function(){return this}},u.prototype={addChild:function(t){this.children.push(t)},open:function(t){var e=t.stack.top();e&&e.addChild(this),t.stack.push(this)},close:function(t){t.stack.top()===this&&t.stack.pop()},getRendererBody:function(){for(var t=[],e=this.children,n=0;n<e.length;n++)t.push(e[n].getRendererBody());return t.join("")},clone:function(){for(var t=this.constructor,e=new t(this.value,this.engine),n=0,r=this.children.length;r>n;n++)e.addChild(this.children[n].clone());for(var n=0,r=this.cloneProps.length;r>n;n++){var i=this.cloneProps[n];e[i]=this[i]}return e}};var z='data=data||{};var v={},fs=engine.filters,hg=typeof data.get=="function",gv=function(n,ps){var p=ps[0],d=v[p];if(d==null){if(hg){return data.get(n);}d=data[p];}for(var i=1,l=ps.length;i<l;i++)if(d!=null)d = d[ps[i]];return d;},ts=function(s){if(typeof s==="string"){return s;}if(s==null){s="";}return ""+s;};';i(g,u),i(y,u),i(v,u),i(m,u),i(R,u),i(E,u),i(x,u),i(w,u),i(b,w),i($,w);var T={READING:1,READED:2,APPLIED:3,READY:4};v.prototype.applyMaster=g.prototype.applyMaster=function(t){function e(t){var r=t.children;if(r instanceof Array)for(var i=0,o=r.length;o>i;i++){var s=r[i];s instanceof y&&n[s.name]&&(s=r[i]=n[s.name]),e(s)}}if(this.state>=T.APPLIED)return 1;var n=this.blocks,r=this.engine.targets[t];if(r){if(r.applyMaster(r.master))return this.children=r.clone().children,e(this),this.state=T.APPLIED,1}else if("error"===this.engine.options.missTarget)throw new Error("[ETPL_MISS_TARGET]"+t+", when extended by "+(this.target?this.target.name:this.name))},g.prototype.isReady=function(){function t(i){for(var o=0,s=i.children.length;s>o;o++){var a=i.children[o];if(a instanceof v){var p=e.targets[a.name];if(!p&&"error"===e.options.missTarget)throw new Error("[ETPL_MISS_TARGET]"+a.name+", when imported by "+n);r=r&&p&&p.isReady(e)}else a instanceof u&&t(a)}}if(this.state>=T.READY)return 1;var e=this.engine,n=this.name,r=1;return this.applyMaster(this.master)?(t(this),r&&(this.state=T.READY),r):void 0},g.prototype.getRenderer=function(){if(this.renderer)return this.renderer;if(this.isReady()){var t=new Function("data","engine",[z,D,this.getRendererBody(),j].join("\n")),e=this.engine;return this.renderer=function(n){return t(n,e)},this.renderer}return null},g.prototype.open=function(t){d(t),u.prototype.open.call(this,t),this.state=T.READING,k(this,t)},m.prototype.open=E.prototype.open=function(t){t.stack.top().addChild(this)},y.prototype.open=function(t){u.prototype.open.call(this,t),t.stack.find(function(t){return t.blocks}).blocks[this.name]=this},b.prototype.open=function(t){var e=new $;e.open(t);var n=d(t,w);n.addChild(this),t.stack.push(this)},$.prototype.open=function(t){var e=d(t,w);e.addChild(this),t.stack.push(this)},v.prototype.open=function(t){this.parent=t.stack.top(),this.target=t.target,u.prototype.open.call(this,t),this.state=T.READING},E.prototype.close=m.prototype.close=function(){},v.prototype.close=function(t){u.prototype.close.call(this,t),this.state=T.READED},g.prototype.close=function(t){u.prototype.close.call(this,t),this.state=this.master?T.READED:T.APPLIED,t.target=null},v.prototype.autoClose=function(t){var e=this.parent.children;e.push.apply(e,this.children),this.children.length=0;for(var n in this.blocks)this.target.blocks[n]=this.blocks[n];this.blocks={},this.close(t)},E.prototype.beforeOpen=v.prototype.beforeOpen=m.prototype.beforeOpen=x.prototype.beforeOpen=R.prototype.beforeOpen=y.prototype.beforeOpen=w.prototype.beforeOpen=f.prototype.beforeAdd=function(t){if(!t.stack.bottom()){var e=new g(r(),t.engine);e.open(t)}},v.prototype.getRendererBody=function(){return this.applyMaster(this.name),u.prototype.getRendererBody.call(this)},E.prototype.getRendererBody=function(){return p("{0}engine.render({2},{{3}}){1}",B,S,s(this.name),l(this.args,this.engine).replace(/(^|,)\s*([a-z0-9_]+)\s*=/gi,function(t,e,n){return(e||"")+s(n)+":"}))},m.prototype.getRendererBody=function(){return this.expr?p("v[{0}]={1};",s(this.name),l(this.expr,this.engine)):""},w.prototype.getRendererBody=function(){return p("if({0}){{1}}",l(this.value,this.engine),u.prototype.getRendererBody.call(this))},$.prototype.getRendererBody=function(){return p("}else{{0}",u.prototype.getRendererBody.call(this))},x.prototype.getRendererBody=function(){return p('var {0}={1};if({0} instanceof Array)for (var {4}=0,{5}={0}.length;{4}<{5};{4}++){v[{2}]={4};v[{3}]={0}[{4}];{6}}else if(typeof {0}==="object")for(var {4} in {0}){v[{2}]={4};v[{3}]={0}[{4}];{6}}',r(),l(this.list,this.engine),s(this.index||r()),s(this.item),r(),r(),u.prototype.getRendererBody.call(this))},R.prototype.getRendererBody=function(){var t=this.args;return p("{2}fs[{5}]((function(){{0}{4}{1}})(){6}){3}",D,j,B,S,u.prototype.getRendererBody.call(this),s(this.name),t?","+l(t,this.engine):"")};var L={};A("target",g),A("block",y),A("import",v),A("use",E),A("var",m),A("for",x),A("if",w),A("elif",b),A("else",$),A("filter",R),P.prototype.config=function(t){e(this.options,t)},P.prototype.compile=P.prototype.parse=function(t){if(t){var e=_(t,this);if(e.length)return this.targets[e[0]].getRenderer()}return new Function('return ""')},P.prototype.getRenderer=function(t){var e=this.targets[t];return e?e.getRenderer():void 0},P.prototype.render=function(t,e){var n=this.getRenderer(t);return n?n(e):""},P.prototype.addFilter=function(t,e){"function"==typeof e&&(this.filters[t]=e)};var M=new P;M.Engine=P,M.version="3.1.0","object"==typeof exports&&"object"==typeof module?exports=module.exports=M:"function"==typeof define&&define.amd?define(M):t.etpl=M}(this);
},{}],2:[function(require,module,exports){
var GlobalKuNiao = function(){

};
	
	// 获取url里面传过来的参数
	GlobalKuNiao.prototype.getUrlParam = function(){
		var paramString = location.search.slice(1);
		var param = {};

		var vars = paramString.split('&');

		for(var i = 0 ; i < vars.length; i++){
			var temp = vars[i].split('=');

				if( param[temp[0]]){
					continue;
				}

				param[temp[0]] = temp[1];
		}

		return param;
	};

	//操作localstorage
	GlobalKuNiao.prototype.localStorage = {
		get : function(item){
			var ls = '';
				if(typeof localStorage[item] !== 'undefined'){
					try{
						ls = JSON.parse(localStorage[item]);
						if(typeof ls.value !== 'undefined'){
							return ls.value;
						}else{
							return ls;
						}
					}catch(e){
						return localStorage[item];
					}
				}else{
					return false;
				}
		},
		//item 本地存储item，value 相对应item的值（只支持布尔值，number，字符串，json）
		set : function(item,value){
			var t = '',
				v = '';

				// 未定义、null、函数、数组的时候返回false
				if( typeof value === 'undefined'){
					return false;
				}

				localStorage[item] = JSON.stringify({
					// type : t,
					value : value
				});

				return true;
		},
		del : function(item){
			if(typeof localStorage[item] === 'undefined'){
				console.log('this item is not exit!');
			}else{
				delete localStorage[item];
			}
		}
	};
	//操作sessionstorage 主要用于会话期间保存信息
	GlobalKuNiao.prototype.sessionStorage = {
		get : function(item){
			var ls = '';
				if(typeof sessionStorage[item] !== 'undefined'){
					try{
						ls = JSON.parse(sessionStorage[item]);
						if(typeof ls.value !== 'undefined'){
							return ls.value;
						}else{
							return ls;
						}
					}catch(e){
						return sessionStorage[item];
					}
				}else{
					return 'undefined';
				}
		},
		//item 本地存储item，value 相对应item的值（只支持布尔值，number，字符串，json）
		set : function(item,value){
			var t = '',
				v = '';

				// 未定义、null、函数、数组的时候返回false
				if( typeof value === 'undefined'){
					return false;
				}

				sessionStorage[item] = JSON.stringify({
					// type : t,
					value : value
				});

				return true;
		},
		del : function(item){
			if(typeof sessionStorage[item] === 'undefined'){
				console.log('this item is not exit!');
			}else{
				delete sessionStorage[item];
			}
		}
	};

	GlobalKuNiao.prototype.config = {
		serverBase: '/m/',
		knIndex : '/m/nav/kn/index',
		// loginBase : 'http://14.215.56.46:81/',
		loginHref : '/m/nav/login',
		logoutHref: '/m/nav/logout'
	};

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		module.exports = new GlobalKuNiao();
	} else {
		window.GlobalKuNiao = GlobalKuNiao;
	}


},{}],3:[function(require,module,exports){
/*!
 * Date picker for pickadate.js v3.5.6
 * http://amsul.github.io/pickadate.js/date.htm
 */

(function ( factory ) {

    // AMD.
    /*if ( typeof define == 'function' && define.amd )
        define( ['picker', 'jquery'], factory )

    // Node.js/browserify.
    else if ( typeof exports == 'object' )
        module.exports = factory( require('./picker.js'), require('jquery') )

    // Browser globals.
    else factory( Picker, $ )*/

    factory( Picker, $ );

}(function( Picker, $ ) {


/**
 * Globals and constants
 */
var DAYS_IN_WEEK = 7,
    WEEKS_IN_CALENDAR = 6,
    _ = Picker._



/**
 * The date picker constructor
 */
function DatePicker( picker, settings ) {

    var calendar = this,
        element = picker.$node[ 0 ],
        elementValue = element.value,
        elementDataValue = picker.$node.data( 'value' ),
        valueString = elementDataValue || elementValue,
        formatString = elementDataValue ? settings.formatSubmit : settings.format,
        isRTL = function() {

            return element.currentStyle ?

                // For IE.
                element.currentStyle.direction == 'rtl' :

                // For normal browsers.
                getComputedStyle( picker.$root[0] ).direction == 'rtl'
        }

    calendar.settings = settings
    calendar.$node = picker.$node

    // The queue of methods that will be used to build item objects.
    calendar.queue = {
        min: 'measure create',
        max: 'measure create',
        now: 'now create',
        select: 'parse create validate',
        highlight: 'parse navigate create validate',
        view: 'parse create validate viewset',
        disable: 'deactivate',
        enable: 'activate'
    }

    // The component's item object.
    calendar.item = {}

    calendar.item.clear = null
    calendar.item.disable = ( settings.disable || [] ).slice( 0 )
    calendar.item.enable = -(function( collectionDisabled ) {
        return collectionDisabled[ 0 ] === true ? collectionDisabled.shift() : -1
    })( calendar.item.disable )

    calendar.
        set( 'min', settings.min ).
        set( 'max', settings.max ).
        set( 'now' )

    // When there’s a value, set the `select`, which in turn
    // also sets the `highlight` and `view`.
    if ( valueString ) {
        calendar.set( 'select', valueString, {
            format: formatString,
            defaultValue: true
        })
    }

    // If there’s no value, default to highlighting “today”.
    else {
        calendar.
            set( 'select', null ).
            set( 'highlight', calendar.item.now )
    }


    // The keycode to movement mapping.
    calendar.key = {
        40: 7, // Down
        38: -7, // Up
        39: function() { return isRTL() ? -1 : 1 }, // Right
        37: function() { return isRTL() ? 1 : -1 }, // Left
        go: function( timeChange ) {
            var highlightedObject = calendar.item.highlight,
                targetDate = new Date( highlightedObject.year, highlightedObject.month, highlightedObject.date + timeChange )
            calendar.set(
                'highlight',
                targetDate,
                { interval: timeChange }
            )
            this.render()
        }
    }


    // Bind some picker events.
    picker.
        on( 'render', function() {
            picker.$root.find( '.' + settings.klass.selectMonth ).on( 'change', function() {
                var value = this.value
                if ( value ) {
                    picker.set( 'highlight', [ picker.get( 'view' ).year, value, picker.get( 'highlight' ).date ] )
                    picker.$root.find( '.' + settings.klass.selectMonth ).trigger( 'focus' )
                }
            })
            picker.$root.find( '.' + settings.klass.selectYear ).on( 'change', function() {
                var value = this.value
                if ( value ) {
                    picker.set( 'highlight', [ value, picker.get( 'view' ).month, picker.get( 'highlight' ).date ] )
                    picker.$root.find( '.' + settings.klass.selectYear ).trigger( 'focus' )
                }
            })
        }, 1 ).
        on( 'open', function() {
            var includeToday = ''
            if ( calendar.disabled( calendar.get('now') ) ) {
                includeToday = ':not(.' + settings.klass.buttonToday + ')'
            }
            picker.$root.find( 'button' + includeToday + ', select' ).attr( 'disabled', false )
        }, 1 ).
        on( 'close', function() {
            picker.$root.find( 'button, select' ).attr( 'disabled', true )
        }, 1 )

} //DatePicker


/**
 * Set a datepicker item object.
 */
DatePicker.prototype.set = function( type, value, options ) {

    var calendar = this,
        calendarItem = calendar.item

    // If the value is `null` just set it immediately.
    if ( value === null ) {
        if ( type == 'clear' ) type = 'select'
        calendarItem[ type ] = value
        return calendar
    }

    // Otherwise go through the queue of methods, and invoke the functions.
    // Update this as the time unit, and set the final value as this item.
    // * In the case of `enable`, keep the queue but set `disable` instead.
    //   And in the case of `flip`, keep the queue but set `enable` instead.
    calendarItem[ ( type == 'enable' ? 'disable' : type == 'flip' ? 'enable' : type ) ] = calendar.queue[ type ].split( ' ' ).map( function( method ) {
        value = calendar[ method ]( type, value, options )
        return value
    }).pop()

    // Check if we need to cascade through more updates.
    if ( type == 'select' ) {
        calendar.set( 'highlight', calendarItem.select, options )
    }
    else if ( type == 'highlight' ) {
        calendar.set( 'view', calendarItem.highlight, options )
    }
    else if ( type.match( /^(flip|min|max|disable|enable)$/ ) ) {
        if ( calendarItem.select && calendar.disabled( calendarItem.select ) ) {
            calendar.set( 'select', calendarItem.select, options )
        }
        if ( calendarItem.highlight && calendar.disabled( calendarItem.highlight ) ) {
            calendar.set( 'highlight', calendarItem.highlight, options )
        }
    }

    return calendar
} //DatePicker.prototype.set


/**
 * Get a datepicker item object.
 */
DatePicker.prototype.get = function( type ) {
    return this.item[ type ]
} //DatePicker.prototype.get


/**
 * Create a picker date object.
 */
DatePicker.prototype.create = function( type, value, options ) {

    var isInfiniteValue,
        calendar = this

    // If there’s no value, use the type as the value.
    value = value === undefined ? type : value


    // If it’s infinity, update the value.
    if ( value == -Infinity || value == Infinity ) {
        isInfiniteValue = value
    }

    // If it’s an object, use the native date object.
    else if ( $.isPlainObject( value ) && _.isInteger( value.pick ) ) {
        value = value.obj
    }

    // If it’s an array, convert it into a date and make sure
    // that it’s a valid date – otherwise default to today.
    else if ( $.isArray( value ) ) {
        value = new Date( value[ 0 ], value[ 1 ], value[ 2 ] )
        value = _.isDate( value ) ? value : calendar.create().obj
    }

    // If it’s a number or date object, make a normalized date.
    else if ( _.isInteger( value ) || _.isDate( value ) ) {
        value = calendar.normalize( new Date( value ), options )
    }

    // If it’s a literal true or any other case, set it to now.
    else /*if ( value === true )*/ {
        value = calendar.now( type, value, options )
    }

    // Return the compiled object.
    return {
        year: isInfiniteValue || value.getFullYear(),
        month: isInfiniteValue || value.getMonth(),
        date: isInfiniteValue || value.getDate(),
        day: isInfiniteValue || value.getDay(),
        obj: isInfiniteValue || value,
        pick: isInfiniteValue || value.getTime()
    }
} //DatePicker.prototype.create


/**
 * Create a range limit object using an array, date object,
 * literal “true”, or integer relative to another time.
 */
DatePicker.prototype.createRange = function( from, to ) {

    var calendar = this,
        createDate = function( date ) {
            if ( date === true || $.isArray( date ) || _.isDate( date ) ) {
                return calendar.create( date )
            }
            return date
        }

    // Create objects if possible.
    if ( !_.isInteger( from ) ) {
        from = createDate( from )
    }
    if ( !_.isInteger( to ) ) {
        to = createDate( to )
    }

    // Create relative dates.
    if ( _.isInteger( from ) && $.isPlainObject( to ) ) {
        from = [ to.year, to.month, to.date + from ];
    }
    else if ( _.isInteger( to ) && $.isPlainObject( from ) ) {
        to = [ from.year, from.month, from.date + to ];
    }

    return {
        from: createDate( from ),
        to: createDate( to )
    }
} //DatePicker.prototype.createRange


/**
 * Check if a date unit falls within a date range object.
 */
DatePicker.prototype.withinRange = function( range, dateUnit ) {
    range = this.createRange(range.from, range.to)
    return dateUnit.pick >= range.from.pick && dateUnit.pick <= range.to.pick
}


/**
 * Check if two date range objects overlap.
 */
DatePicker.prototype.overlapRanges = function( one, two ) {

    var calendar = this

    // Convert the ranges into comparable dates.
    one = calendar.createRange( one.from, one.to )
    two = calendar.createRange( two.from, two.to )

    return calendar.withinRange( one, two.from ) || calendar.withinRange( one, two.to ) ||
        calendar.withinRange( two, one.from ) || calendar.withinRange( two, one.to )
}


/**
 * Get the date today.
 */
DatePicker.prototype.now = function( type, value, options ) {
    value = new Date()
    if ( options && options.rel ) {
        value.setDate( value.getDate() + options.rel )
    }
    return this.normalize( value, options )
}


/**
 * Navigate to next/prev month.
 */
DatePicker.prototype.navigate = function( type, value, options ) {

    var targetDateObject,
        targetYear,
        targetMonth,
        targetDate,
        isTargetArray = $.isArray( value ),
        isTargetObject = $.isPlainObject( value ),
        viewsetObject = this.item.view/*,
        safety = 100*/


    if ( isTargetArray || isTargetObject ) {

        if ( isTargetObject ) {
            targetYear = value.year
            targetMonth = value.month
            targetDate = value.date
        }
        else {
            targetYear = +value[0]
            targetMonth = +value[1]
            targetDate = +value[2]
        }

        // If we’re navigating months but the view is in a different
        // month, navigate to the view’s year and month.
        if ( options && options.nav && viewsetObject && viewsetObject.month !== targetMonth ) {
            targetYear = viewsetObject.year
            targetMonth = viewsetObject.month
        }

        // Figure out the expected target year and month.
        targetDateObject = new Date( targetYear, targetMonth + ( options && options.nav ? options.nav : 0 ), 1 )
        targetYear = targetDateObject.getFullYear()
        targetMonth = targetDateObject.getMonth()

        // If the month we’re going to doesn’t have enough days,
        // keep decreasing the date until we reach the month’s last date.
        while ( /*safety &&*/ new Date( targetYear, targetMonth, targetDate ).getMonth() !== targetMonth ) {
            targetDate -= 1
            /*safety -= 1
            if ( !safety ) {
                throw 'Fell into an infinite loop while navigating to ' + new Date( targetYear, targetMonth, targetDate ) + '.'
            }*/
        }

        value = [ targetYear, targetMonth, targetDate ]
    }

    return value
} //DatePicker.prototype.navigate


/**
 * Normalize a date by setting the hours to midnight.
 */
DatePicker.prototype.normalize = function( value/*, options*/ ) {
    value.setHours( 0, 0, 0, 0 )
    return value
}


/**
 * Measure the range of dates.
 */
DatePicker.prototype.measure = function( type, value/*, options*/ ) {

    var calendar = this

    // If it’s anything false-y, remove the limits.
    if ( !value ) {
        value = type == 'min' ? -Infinity : Infinity
    }

    // If it’s a string, parse it.
    else if ( typeof value == 'string' ) {
        value = calendar.parse( type, value )
    }

    // If it's an integer, get a date relative to today.
    else if ( _.isInteger( value ) ) {
        value = calendar.now( type, value, { rel: value } )
    }

    return value
} ///DatePicker.prototype.measure


/**
 * Create a viewset object based on navigation.
 */
DatePicker.prototype.viewset = function( type, dateObject/*, options*/ ) {
    return this.create([ dateObject.year, dateObject.month, 1 ])
}


/**
 * Validate a date as enabled and shift if needed.
 */
DatePicker.prototype.validate = function( type, dateObject, options ) {

    var calendar = this,

        // Keep a reference to the original date.
        originalDateObject = dateObject,

        // Make sure we have an interval.
        interval = options && options.interval ? options.interval : 1,

        // Check if the calendar enabled dates are inverted.
        isFlippedBase = calendar.item.enable === -1,

        // Check if we have any enabled dates after/before now.
        hasEnabledBeforeTarget, hasEnabledAfterTarget,

        // The min & max limits.
        minLimitObject = calendar.item.min,
        maxLimitObject = calendar.item.max,

        // Check if we’ve reached the limit during shifting.
        reachedMin, reachedMax,

        // Check if the calendar is inverted and at least one weekday is enabled.
        hasEnabledWeekdays = isFlippedBase && calendar.item.disable.filter( function( value ) {

            // If there’s a date, check where it is relative to the target.
            if ( $.isArray( value ) ) {
                var dateTime = calendar.create( value ).pick
                if ( dateTime < dateObject.pick ) hasEnabledBeforeTarget = true
                else if ( dateTime > dateObject.pick ) hasEnabledAfterTarget = true
            }

            // Return only integers for enabled weekdays.
            return _.isInteger( value )
        }).length/*,

        safety = 100*/



    // Cases to validate for:
    // [1] Not inverted and date disabled.
    // [2] Inverted and some dates enabled.
    // [3] Not inverted and out of range.
    //
    // Cases to **not** validate for:
    // • Navigating months.
    // • Not inverted and date enabled.
    // • Inverted and all dates disabled.
    // • ..and anything else.
    if ( !options || (!options.nav && !options.defaultValue) ) if (
        /* 1 */ ( !isFlippedBase && calendar.disabled( dateObject ) ) ||
        /* 2 */ ( isFlippedBase && calendar.disabled( dateObject ) && ( hasEnabledWeekdays || hasEnabledBeforeTarget || hasEnabledAfterTarget ) ) ||
        /* 3 */ ( !isFlippedBase && (dateObject.pick <= minLimitObject.pick || dateObject.pick >= maxLimitObject.pick) )
    ) {


        // When inverted, flip the direction if there aren’t any enabled weekdays
        // and there are no enabled dates in the direction of the interval.
        if ( isFlippedBase && !hasEnabledWeekdays && ( ( !hasEnabledAfterTarget && interval > 0 ) || ( !hasEnabledBeforeTarget && interval < 0 ) ) ) {
            interval *= -1
        }


        // Keep looping until we reach an enabled date.
        while ( /*safety &&*/ calendar.disabled( dateObject ) ) {

            /*safety -= 1
            if ( !safety ) {
                throw 'Fell into an infinite loop while validating ' + dateObject.obj + '.'
            }*/


            // If we’ve looped into the next/prev month with a large interval, return to the original date and flatten the interval.
            if ( Math.abs( interval ) > 1 && ( dateObject.month < originalDateObject.month || dateObject.month > originalDateObject.month ) ) {
                dateObject = originalDateObject
                interval = interval > 0 ? 1 : -1
            }


            // If we’ve reached the min/max limit, reverse the direction, flatten the interval and set it to the limit.
            if ( dateObject.pick <= minLimitObject.pick ) {
                reachedMin = true
                interval = 1
                dateObject = calendar.create([
                    minLimitObject.year,
                    minLimitObject.month,
                    minLimitObject.date + (dateObject.pick === minLimitObject.pick ? 0 : -1)
                ])
            }
            else if ( dateObject.pick >= maxLimitObject.pick ) {
                reachedMax = true
                interval = -1
                dateObject = calendar.create([
                    maxLimitObject.year,
                    maxLimitObject.month,
                    maxLimitObject.date + (dateObject.pick === maxLimitObject.pick ? 0 : 1)
                ])
            }


            // If we’ve reached both limits, just break out of the loop.
            if ( reachedMin && reachedMax ) {
                break
            }


            // Finally, create the shifted date using the interval and keep looping.
            dateObject = calendar.create([ dateObject.year, dateObject.month, dateObject.date + interval ])
        }

    } //endif


    // Return the date object settled on.
    return dateObject
} //DatePicker.prototype.validate


/**
 * Check if a date is disabled.
 */
DatePicker.prototype.disabled = function( dateToVerify ) {

    var
        calendar = this,

        // Filter through the disabled dates to check if this is one.
        isDisabledMatch = calendar.item.disable.filter( function( dateToDisable ) {

            // If the date is a number, match the weekday with 0index and `firstDay` check.
            if ( _.isInteger( dateToDisable ) ) {
                return dateToVerify.day === ( calendar.settings.firstDay ? dateToDisable : dateToDisable - 1 ) % 7
            }

            // If it’s an array or a native JS date, create and match the exact date.
            if ( $.isArray( dateToDisable ) || _.isDate( dateToDisable ) ) {
                return dateToVerify.pick === calendar.create( dateToDisable ).pick
            }

            // If it’s an object, match a date within the “from” and “to” range.
            if ( $.isPlainObject( dateToDisable ) ) {
                return calendar.withinRange( dateToDisable, dateToVerify )
            }
        })

    // If this date matches a disabled date, confirm it’s not inverted.
    isDisabledMatch = isDisabledMatch.length && !isDisabledMatch.filter(function( dateToDisable ) {
        return $.isArray( dateToDisable ) && dateToDisable[3] == 'inverted' ||
            $.isPlainObject( dateToDisable ) && dateToDisable.inverted
    }).length

    // Check the calendar “enabled” flag and respectively flip the
    // disabled state. Then also check if it’s beyond the min/max limits.
    return calendar.item.enable === -1 ? !isDisabledMatch : isDisabledMatch ||
        dateToVerify.pick < calendar.item.min.pick ||
        dateToVerify.pick > calendar.item.max.pick

} //DatePicker.prototype.disabled


/**
 * Parse a string into a usable type.
 */
DatePicker.prototype.parse = function( type, value, options ) {

    var calendar = this,
        parsingObject = {}

    // If it’s already parsed, we’re good.
    if ( !value || typeof value != 'string' ) {
        return value
    }

    // We need a `.format` to parse the value with.
    if ( !( options && options.format ) ) {
        options = options || {}
        options.format = calendar.settings.format
    }

    // Convert the format into an array and then map through it.
    calendar.formats.toArray( options.format ).map( function( label ) {

        var
            // Grab the formatting label.
            formattingLabel = calendar.formats[ label ],

            // The format length is from the formatting label function or the
            // label length without the escaping exclamation (!) mark.
            formatLength = formattingLabel ? _.trigger( formattingLabel, calendar, [ value, parsingObject ] ) : label.replace( /^!/, '' ).length

        // If there's a format label, split the value up to the format length.
        // Then add it to the parsing object with appropriate label.
        if ( formattingLabel ) {
            parsingObject[ label ] = value.substr( 0, formatLength )
        }

        // Update the value as the substring from format length to end.
        value = value.substr( formatLength )
    })

    // Compensate for month 0index.
    return [
        parsingObject.yyyy || parsingObject.yy,
        +( parsingObject.mm || parsingObject.m ) - 1,
        parsingObject.dd || parsingObject.d
    ]
} //DatePicker.prototype.parse


/**
 * Various formats to display the object in.
 */
DatePicker.prototype.formats = (function() {

    // Return the length of the first word in a collection.
    function getWordLengthFromCollection( string, collection, dateObject ) {

        // Grab the first word from the string.
        // Regex pattern from http://stackoverflow.com/q/150033
        var word = string.match( /[^\x00-\x7F]+|\w+/ )[ 0 ]

        // If there's no month index, add it to the date object
        if ( !dateObject.mm && !dateObject.m ) {
            dateObject.m = collection.indexOf( word ) + 1
        }

        // Return the length of the word.
        return word.length
    }

    // Get the length of the first word in a string.
    function getFirstWordLength( string ) {
        return string.match( /\w+/ )[ 0 ].length
    }

    return {

        d: function( string, dateObject ) {

            // If there's string, then get the digits length.
            // Otherwise return the selected date.
            return string ? _.digits( string ) : dateObject.date
        },
        dd: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected date with a leading zero.
            return string ? 2 : _.lead( dateObject.date )
        },
        ddd: function( string, dateObject ) {

            // If there's a string, then get the length of the first word.
            // Otherwise return the short selected weekday.
            return string ? getFirstWordLength( string ) : this.settings.weekdaysShort[ dateObject.day ]
        },
        dddd: function( string, dateObject ) {

            // If there's a string, then get the length of the first word.
            // Otherwise return the full selected weekday.
            return string ? getFirstWordLength( string ) : this.settings.weekdaysFull[ dateObject.day ]
        },
        m: function( string, dateObject ) {

            // If there's a string, then get the length of the digits
            // Otherwise return the selected month with 0index compensation.
            return string ? _.digits( string ) : dateObject.month + 1
        },
        mm: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected month with 0index and leading zero.
            return string ? 2 : _.lead( dateObject.month + 1 )
        },
        mmm: function( string, dateObject ) {

            var collection = this.settings.monthsShort

            // If there's a string, get length of the relevant month from the short
            // months collection. Otherwise return the selected month from that collection.
            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
        },
        mmmm: function( string, dateObject ) {

            var collection = this.settings.monthsFull

            // If there's a string, get length of the relevant month from the full
            // months collection. Otherwise return the selected month from that collection.
            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
        },
        yy: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected year by slicing out the first 2 digits.
            return string ? 2 : ( '' + dateObject.year ).slice( 2 )
        },
        yyyy: function( string, dateObject ) {

            // If there's a string, then the length is always 4.
            // Otherwise return the selected year.
            return string ? 4 : dateObject.year
        },

        // Create an array by splitting the formatting string passed.
        toArray: function( formatString ) { return formatString.split( /(d{1,4}|m{1,4}|y{4}|yy|!.)/g ) },

        // Format an object into a string using the formatting options.
        toString: function ( formatString, itemObject ) {
            var calendar = this
            return calendar.formats.toArray( formatString ).map( function( label ) {
                return _.trigger( calendar.formats[ label ], calendar, [ 0, itemObject ] ) || label.replace( /^!/, '' )
            }).join( '' )
        }
    }
})() //DatePicker.prototype.formats




/**
 * Check if two date units are the exact.
 */
DatePicker.prototype.isDateExact = function( one, two ) {

    var calendar = this

    // When we’re working with weekdays, do a direct comparison.
    if (
        ( _.isInteger( one ) && _.isInteger( two ) ) ||
        ( typeof one == 'boolean' && typeof two == 'boolean' )
     ) {
        return one === two
    }

    // When we’re working with date representations, compare the “pick” value.
    if (
        ( _.isDate( one ) || $.isArray( one ) ) &&
        ( _.isDate( two ) || $.isArray( two ) )
    ) {
        return calendar.create( one ).pick === calendar.create( two ).pick
    }

    // When we’re working with range objects, compare the “from” and “to”.
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
        return calendar.isDateExact( one.from, two.from ) && calendar.isDateExact( one.to, two.to )
    }

    return false
}


/**
 * Check if two date units overlap.
 */
DatePicker.prototype.isDateOverlap = function( one, two ) {

    var calendar = this,
        firstDay = calendar.settings.firstDay ? 1 : 0

    // When we’re working with a weekday index, compare the days.
    if ( _.isInteger( one ) && ( _.isDate( two ) || $.isArray( two ) ) ) {
        one = one % 7 + firstDay
        return one === calendar.create( two ).day + 1
    }
    if ( _.isInteger( two ) && ( _.isDate( one ) || $.isArray( one ) ) ) {
        two = two % 7 + firstDay
        return two === calendar.create( one ).day + 1
    }

    // When we’re working with range objects, check if the ranges overlap.
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
        return calendar.overlapRanges( one, two )
    }

    return false
}


/**
 * Flip the “enabled” state.
 */
DatePicker.prototype.flipEnable = function(val) {
    var itemObject = this.item
    itemObject.enable = val || (itemObject.enable == -1 ? 1 : -1)
}


/**
 * Mark a collection of dates as “disabled”.
 */
DatePicker.prototype.deactivate = function( type, datesToDisable ) {

    var calendar = this,
        disabledItems = calendar.item.disable.slice(0)


    // If we’re flipping, that’s all we need to do.
    if ( datesToDisable == 'flip' ) {
        calendar.flipEnable()
    }

    else if ( datesToDisable === false ) {
        calendar.flipEnable(1)
        disabledItems = []
    }

    else if ( datesToDisable === true ) {
        calendar.flipEnable(-1)
        disabledItems = []
    }

    // Otherwise go through the dates to disable.
    else {

        datesToDisable.map(function( unitToDisable ) {

            var matchFound

            // When we have disabled items, check for matches.
            // If something is matched, immediately break out.
            for ( var index = 0; index < disabledItems.length; index += 1 ) {
                if ( calendar.isDateExact( unitToDisable, disabledItems[index] ) ) {
                    matchFound = true
                    break
                }
            }

            // If nothing was found, add the validated unit to the collection.
            if ( !matchFound ) {
                if (
                    _.isInteger( unitToDisable ) ||
                    _.isDate( unitToDisable ) ||
                    $.isArray( unitToDisable ) ||
                    ( $.isPlainObject( unitToDisable ) && unitToDisable.from && unitToDisable.to )
                ) {
                    disabledItems.push( unitToDisable )
                }
            }
        })
    }

    // Return the updated collection.
    return disabledItems
} //DatePicker.prototype.deactivate


/**
 * Mark a collection of dates as “enabled”.
 */
DatePicker.prototype.activate = function( type, datesToEnable ) {

    var calendar = this,
        disabledItems = calendar.item.disable,
        disabledItemsCount = disabledItems.length

    // If we’re flipping, that’s all we need to do.
    if ( datesToEnable == 'flip' ) {
        calendar.flipEnable()
    }

    else if ( datesToEnable === true ) {
        calendar.flipEnable(1)
        disabledItems = []
    }

    else if ( datesToEnable === false ) {
        calendar.flipEnable(-1)
        disabledItems = []
    }

    // Otherwise go through the disabled dates.
    else {

        datesToEnable.map(function( unitToEnable ) {

            var matchFound,
                disabledUnit,
                index,
                isExactRange

            // Go through the disabled items and try to find a match.
            for ( index = 0; index < disabledItemsCount; index += 1 ) {

                disabledUnit = disabledItems[index]

                // When an exact match is found, remove it from the collection.
                if ( calendar.isDateExact( disabledUnit, unitToEnable ) ) {
                    matchFound = disabledItems[index] = null
                    isExactRange = true
                    break
                }

                // When an overlapped match is found, add the “inverted” state to it.
                else if ( calendar.isDateOverlap( disabledUnit, unitToEnable ) ) {
                    if ( $.isPlainObject( unitToEnable ) ) {
                        unitToEnable.inverted = true
                        matchFound = unitToEnable
                    }
                    else if ( $.isArray( unitToEnable ) ) {
                        matchFound = unitToEnable
                        if ( !matchFound[3] ) matchFound.push( 'inverted' )
                    }
                    else if ( _.isDate( unitToEnable ) ) {
                        matchFound = [ unitToEnable.getFullYear(), unitToEnable.getMonth(), unitToEnable.getDate(), 'inverted' ]
                    }
                    break
                }
            }

            // If a match was found, remove a previous duplicate entry.
            if ( matchFound ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
                if ( calendar.isDateExact( disabledItems[index], unitToEnable ) ) {
                    disabledItems[index] = null
                    break
                }
            }

            // In the event that we’re dealing with an exact range of dates,
            // make sure there are no “inverted” dates because of it.
            if ( isExactRange ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
                if ( calendar.isDateOverlap( disabledItems[index], unitToEnable ) ) {
                    disabledItems[index] = null
                    break
                }
            }

            // If something is still matched, add it into the collection.
            if ( matchFound ) {
                disabledItems.push( matchFound )
            }
        })
    }

    // Return the updated collection.
    return disabledItems.filter(function( val ) { return val != null })
} //DatePicker.prototype.activate


/**
 * Create a string for the nodes in the picker.
 */
DatePicker.prototype.nodes = function( isOpen ) {

    var
        calendar = this,
        settings = calendar.settings,
        calendarItem = calendar.item,
        nowObject = calendarItem.now,
        selectedObject = calendarItem.select,
        highlightedObject = calendarItem.highlight,
        viewsetObject = calendarItem.view,
        disabledCollection = calendarItem.disable,
        minLimitObject = calendarItem.min,
        maxLimitObject = calendarItem.max,


        // Create the calendar table head using a copy of weekday labels collection.
        // * We do a copy so we don't mutate the original array.
        tableHead = (function( collection, fullCollection ) {

            // If the first day should be Monday, move Sunday to the end.
            if ( settings.firstDay ) {
                collection.push( collection.shift() )
                fullCollection.push( fullCollection.shift() )
            }

            // Create and return the table head group.
            return _.node(
                'thead',
                _.node(
                    'tr',
                    _.group({
                        min: 0,
                        max: DAYS_IN_WEEK - 1,
                        i: 1,
                        node: 'th',
                        item: function( counter ) {
                            return [
                                collection[ counter ],
                                settings.klass.weekdays,
                                'scope=col title="' + fullCollection[ counter ] + '"'
                            ]
                        }
                    })
                )
            ) //endreturn
        })( ( settings.showWeekdaysFull ? settings.weekdaysFull : settings.weekdaysShort ).slice( 0 ), settings.weekdaysFull.slice( 0 ) ), //tableHead


        // Create the nav for next/prev month.
        createMonthNav = function( next ) {

            // Otherwise, return the created month tag.
            return _.node(
                'div',
                ' ',
                settings.klass[ 'nav' + ( next ? 'Next' : 'Prev' ) ] + (

                    // If the focused month is outside the range, disabled the button.
                    ( next && viewsetObject.year >= maxLimitObject.year && viewsetObject.month >= maxLimitObject.month ) ||
                    ( !next && viewsetObject.year <= minLimitObject.year && viewsetObject.month <= minLimitObject.month ) ?
                    ' ' + settings.klass.navDisabled : ''
                ),
                'data-nav=' + ( next || -1 ) + ' ' +
                _.ariaAttr({
                    role: 'button',
                    controls: calendar.$node[0].id + '_table'
                }) + ' ' +
                'title="' + (next ? settings.labelMonthNext : settings.labelMonthPrev ) + '"'
            ) //endreturn
        }, //createMonthNav


        // Create the month label.
        createMonthLabel = function() {

            var monthsCollection = settings.showMonthsShort ? settings.monthsShort : settings.monthsFull

            // If there are months to select, add a dropdown menu.
            if ( settings.selectMonths ) {

                return _.node( 'select',
                    _.group({
                        min: 0,
                        max: 11,
                        i: 1,
                        node: 'option',
                        item: function( loopedMonth ) {

                            return [

                                // The looped month and no classes.
                                monthsCollection[ loopedMonth ], 0,

                                // Set the value and selected index.
                                'value=' + loopedMonth +
                                ( viewsetObject.month == loopedMonth ? ' selected' : '' ) +
                                (
                                    (
                                        ( viewsetObject.year == minLimitObject.year && loopedMonth < minLimitObject.month ) ||
                                        ( viewsetObject.year == maxLimitObject.year && loopedMonth > maxLimitObject.month )
                                    ) ?
                                    ' disabled' : ''
                                )
                            ]
                        }
                    }),
                    settings.klass.selectMonth,
                    ( isOpen ? '' : 'disabled' ) + ' ' +
                    _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +
                    'title="' + settings.labelMonthSelect + '"'
                )
            }

            // If there's a need for a month selector
            return _.node( 'div', monthsCollection[ viewsetObject.month ], settings.klass.month )
        }, //createMonthLabel


        // Create the year label.
        createYearLabel = function() {

            var focusedYear = viewsetObject.year,

            // If years selector is set to a literal "true", set it to 5. Otherwise
            // divide in half to get half before and half after focused year.
            numberYears = settings.selectYears === true ? 5 : ~~( settings.selectYears / 2 )

            // If there are years to select, add a dropdown menu.
            if ( numberYears ) {

                var
                    minYear = minLimitObject.year,
                    maxYear = maxLimitObject.year,
                    lowestYear = focusedYear - numberYears,
                    highestYear = focusedYear + numberYears

                // If the min year is greater than the lowest year, increase the highest year
                // by the difference and set the lowest year to the min year.
                if ( minYear > lowestYear ) {
                    highestYear += minYear - lowestYear
                    lowestYear = minYear
                }

                // If the max year is less than the highest year, decrease the lowest year
                // by the lower of the two: available and needed years. Then set the
                // highest year to the max year.
                if ( maxYear < highestYear ) {

                    var availableYears = lowestYear - minYear,
                        neededYears = highestYear - maxYear

                    lowestYear -= availableYears > neededYears ? neededYears : availableYears
                    highestYear = maxYear
                }

                return _.node( 'select',
                    _.group({
                        min: lowestYear,
                        max: highestYear,
                        i: 1,
                        node: 'option',
                        item: function( loopedYear ) {
                            return [

                                // The looped year and no classes.
                                loopedYear, 0,

                                // Set the value and selected index.
                                'value=' + loopedYear + ( focusedYear == loopedYear ? ' selected' : '' )
                            ]
                        }
                    }),
                    settings.klass.selectYear,
                    ( isOpen ? '' : 'disabled' ) + ' ' + _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +
                    'title="' + settings.labelYearSelect + '"'
                )
            }

            // Otherwise just return the year focused
            return _.node( 'div', focusedYear, settings.klass.year ) + '年'
        } //createYearLabel


    // Create and return the entire calendar.
    return _.node(
        'div',
        ( settings.selectYears ? createYearLabel() + createMonthLabel() : createYearLabel() + createMonthLabel() ) +
        createMonthNav() + createMonthNav( 1 ),
        settings.klass.header
    ) + _.node(
        'table',
        tableHead +
        _.node(
            'tbody',
            _.group({
                min: 0,
                max: WEEKS_IN_CALENDAR - 1,
                i: 1,
                node: 'tr',
                item: function( rowCounter ) {

                    // If Monday is the first day and the month starts on Sunday, shift the date back a week.
                    var shiftDateBy = settings.firstDay && calendar.create([ viewsetObject.year, viewsetObject.month, 1 ]).day === 0 ? -7 : 0

                    return [
                        _.group({
                            min: DAYS_IN_WEEK * rowCounter - viewsetObject.day + shiftDateBy + 1, // Add 1 for weekday 0index
                            max: function() {
                                return this.min + DAYS_IN_WEEK - 1
                            },
                            i: 1,
                            node: 'td',
                            item: function( targetDate ) {

                                // Convert the time date from a relative date to a target date.
                                targetDate = calendar.create([ viewsetObject.year, viewsetObject.month, targetDate + ( settings.firstDay ? 1 : 0 ) ])

                                var isSelected = selectedObject && selectedObject.pick == targetDate.pick,
                                    isHighlighted = highlightedObject && highlightedObject.pick == targetDate.pick,
                                    isDisabled = disabledCollection && calendar.disabled( targetDate ) || targetDate.pick < minLimitObject.pick || targetDate.pick > maxLimitObject.pick,
                                    formattedDate = _.trigger( calendar.formats.toString, calendar, [ settings.format, targetDate ] )

                                return [
                                    _.node(
                                        'div',
                                        (function(tarDate, priceData){
                                            var cnt = tarDate.date;
                                            if(priceData) {
                                                //给填写订单的日期控件添加价格
                                                var pk = tarDate.pick;
                                                for (var i = priceData.length - 1; i >= 0; i--) {
                                                    var pd = priceData[i];
                                                    if(pd.effectDate == pk) {
                                                        return cnt + '<div class="picker__price">¥'+pd.price+'</div>';
                                                    }
                                                }
                                            }
                                            return cnt;
                                        })(targetDate, settings.priceData),
                                        (function( klasses ) {

                                            // Add the `infocus` or `outfocus` classes based on month in view.
                                            klasses.push( viewsetObject.month == targetDate.month ? settings.klass.infocus : settings.klass.outfocus )
                                            // Add the `today` class if needed.
                                            if ( nowObject.pick == targetDate.pick ) {
                                                klasses.push( settings.klass.now )
                                            }

                                            // Add the `selected` class if something's selected and the time matches.
                                            if ( isSelected ) {
                                                klasses.push( settings.klass.selected )
                                            }

                                            // Add the `highlighted` class if something's highlighted and the time matches.
                                            if ( isHighlighted ) {
                                                klasses.push( settings.klass.highlighted )
                                            }

                                            // Add the `disabled` class if something's disabled and the object matches.
                                            if ( isDisabled ) {
                                                klasses.push( settings.klass.disabled )
                                            }

                                            return klasses.join( ' ' )
                                        })([ settings.klass.day ]),
                                        'data-pick=' + targetDate.pick + ' ' + _.ariaAttr({
                                            role: 'gridcell',
                                            label: formattedDate,
                                            selected: isSelected && calendar.$node.val() === formattedDate ? true : null,
                                            activedescendant: isHighlighted ? true : null,
                                            disabled: isDisabled ? true : null
                                        })
                                    ),
                                    '',
                                    _.ariaAttr({ role: 'presentation' })
                                ] //endreturn
                            }
                        })
                    ] //endreturn
                }
            })
        ),
        settings.klass.table,
        'id="' + calendar.$node[0].id + '_table' + '" ' + _.ariaAttr({
            role: 'grid',
            controls: calendar.$node[0].id,
            readonly: true
        })
    ) +

    // * For Firefox forms to submit, make sure to set the buttons’ `type` attributes as “button”.
    _.node(
        'div',
        _.node( 'button', settings.today, settings.klass.buttonToday,
            'type=button data-pick=' + nowObject.pick +
            ( isOpen && !calendar.disabled(nowObject) ? '' : ' disabled' ) + ' ' +
            _.ariaAttr({ controls: calendar.$node[0].id }) ) +
        _.node( 'button', settings.clear, settings.klass.buttonClear,
            'type=button data-clear=1' +
            ( isOpen ? '' : ' disabled' ) + ' ' +
            _.ariaAttr({ controls: calendar.$node[0].id }) ) +
        _.node('button', settings.close, settings.klass.buttonClose,
            'type=button data-close=true ' +
            ( isOpen ? '' : ' disabled' ) + ' ' +
            _.ariaAttr({ controls: calendar.$node[0].id }) ),
        settings.klass.footer
    ) //endreturn
} //DatePicker.prototype.nodes




/**
 * The date picker defaults.
 */
DatePicker.defaults = (function( prefix ) {

    return {

        // The title label to use for the month nav buttons
        labelMonthNext: 'Next month',
        labelMonthPrev: 'Previous month',

        // The title label to use for the dropdown selectors
        labelMonthSelect: 'Select a month',
        labelYearSelect: 'Select a year',

        // Months and weekdays
        monthsFull: [ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月' ],
        monthsShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
        weekdaysFull: [ '日', '一', '二', '三', '四', '五', '六' ],
        weekdaysShort: [ '日', '一', '二', '三', '四', '五', '六' ],
        // weekdaysShort: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],

        // Today and clear
        today: 'Today',
        clear: 'Clear',
        close: 'Close',

        // Picker close behavior
        closeOnSelect: true,
        closeOnClear: true,

        // The format to show on the `input` element
        format: 'd mmmm, yyyy',

        // Classes
        klass: {

            table: prefix + 'table',

            header: prefix + 'header',

            navPrev: prefix + 'nav--prev',
            navNext: prefix + 'nav--next',
            navDisabled: prefix + 'nav--disabled',

            month: prefix + 'month',
            year: prefix + 'year',

            selectMonth: prefix + 'select--month',
            selectYear: prefix + 'select--year',

            weekdays: prefix + 'weekday',

            day: prefix + 'day',
            disabled: prefix + 'day--disabled',
            selected: prefix + 'day--selected',
            highlighted: prefix + 'day--highlighted',
            now: prefix + 'day--today',
            infocus: prefix + 'day--infocus',
            outfocus: prefix + 'day--outfocus',

            footer: prefix + 'footer',

            buttonClear: prefix + 'button--clear',
            buttonToday: prefix + 'button--today',
            buttonClose: prefix + 'button--close'
        }
    }
})( Picker.klasses().picker + '__' )





/**
 * Extend the picker to add the date picker.
 */
Picker.extend( 'pickadate', DatePicker )


}));




},{}],4:[function(require,module,exports){
/*!
 * pickadate.js v3.5.6, 2015/04/20
 * By Amsul, http://amsul.ca
 * Hosted on http://amsul.github.io/pickadate.js
 * Licensed under MIT
 */

(function ( factory ) {

    // AMD.
    /*if ( typeof define == 'function' && define.amd )
        define( 'picker', ['jquery'], factory )

    // Node.js/browserify.
    else if ( typeof exports == 'object' )
        // module.exports = factory( require('jquery') )

    // Browser globals.
    else this.Picker = factory( $ )*/

    this.Picker = factory( $ )

}(function( $ ) {

var $window = $( window )
var $document = $( document )
var $html = $( document.documentElement )
var supportsTransitions = document.documentElement.style.transition != null


/**
 * The picker constructor that creates a blank picker.
 */
function PickerConstructor( ELEMENT, NAME, COMPONENT, OPTIONS ) {

    // If there’s no element, return the picker constructor.
    if ( !ELEMENT ) return PickerConstructor


    var
        IS_DEFAULT_THEME = false,


        // The state of the picker.
        STATE = {
            id: ELEMENT.id || 'P' + Math.abs( ~~(Math.random() * new Date()) )
        },


        // Merge the defaults and options passed.
        SETTINGS = COMPONENT ? $.extend( true, {}, COMPONENT.defaults, OPTIONS ) : OPTIONS || {},


        // Merge the default classes with the settings classes.
        CLASSES = $.extend( {}, PickerConstructor.klasses(), SETTINGS.klass ),


        // The element node wrapper into a jQuery object.
        $ELEMENT = $( ELEMENT ),


        // Pseudo picker constructor.
        PickerInstance = function() {
            return this.start()
        },


        // The picker prototype.
        P = PickerInstance.prototype = {

            constructor: PickerInstance,

            $node: $ELEMENT,


            /**
             * Initialize everything
             */
            start: function() {

                // If it’s already started, do nothing.
                if ( STATE && STATE.start ) return P


                // Update the picker states.
                STATE.methods = {}
                STATE.start = true
                STATE.open = false
                STATE.type = ELEMENT.type


                // Confirm focus state, convert into text input to remove UA stylings,
                // and set as readonly to prevent keyboard popup.
                ELEMENT.autofocus = ELEMENT == getActiveElement()
                ELEMENT.readOnly = !SETTINGS.editable
                ELEMENT.id = ELEMENT.id || STATE.id
                if ( ELEMENT.type != 'text' ) {
                    ELEMENT.type = 'text'
                }


                // Create a new picker component with the settings.
                P.component = new COMPONENT(P, SETTINGS)


                // Create the picker root and then prepare it.
                P.$root = $( '<div class="' + CLASSES.picker + '" id="' + ELEMENT.id + '_root" />' )
                prepareElementRoot()


                // Create the picker holder and then prepare it.
                P.$holder = $( createWrappedComponent() ).appendTo( P.$root )
                prepareElementHolder()


                // If there’s a format for the hidden input element, create the element.
                if ( SETTINGS.formatSubmit ) {
                    prepareElementHidden()
                }


                // Prepare the input element.
                prepareElement()


                // Insert the hidden input as specified in the settings.
                if ( SETTINGS.containerHidden ) $( SETTINGS.containerHidden ).append( P._hidden )
                else $ELEMENT.after( P._hidden )


                // Insert the root as specified in the settings.
                if ( SETTINGS.container ) $( SETTINGS.container ).append( P.$root )
                else $ELEMENT.after( P.$root )


                // Bind the default component and settings events.
                P.on({
                    start: P.component.onStart,
                    render: P.component.onRender,
                    stop: P.component.onStop,
                    open: P.component.onOpen,
                    close: P.component.onClose,
                    set: P.component.onSet
                }).on({
                    start: SETTINGS.onStart,
                    render: SETTINGS.onRender,
                    stop: SETTINGS.onStop,
                    open: SETTINGS.onOpen,
                    close: SETTINGS.onClose,
                    set: SETTINGS.onSet
                })


                // Once we’re all set, check the theme in use.
                IS_DEFAULT_THEME = isUsingDefaultTheme( P.$holder[0] )


                // If the element has autofocus, open the picker.
                if ( ELEMENT.autofocus ) {
                    P.open()
                }


                // Trigger queued the “start” and “render” events.
                return P.trigger( 'start' ).trigger( 'render' )
            }, //start


            /**
             * Render a new picker
             */
            render: function( entireComponent ) {

                // Insert a new component holder in the root or box.
                if ( entireComponent ) {
                    P.$holder = $( createWrappedComponent() )
                    prepareElementHolder()
                    P.$root.html( P.$holder )
                }
                else P.$root.find( '.' + CLASSES.box ).html( P.component.nodes( STATE.open ) )

                // Trigger the queued “render” events.
                return P.trigger( 'render' )
            }, //render


            /**
             * Destroy everything
             */
            stop: function() {

                // If it’s already stopped, do nothing.
                if ( !STATE.start ) return P

                // Then close the picker.
                P.close()

                // Remove the hidden field.
                if ( P._hidden ) {
                    P._hidden.parentNode.removeChild( P._hidden )
                }

                // Remove the root.
                P.$root.remove()

                // Remove the input class, remove the stored data, and unbind
                // the events (after a tick for IE - see `P.close`).
                $ELEMENT.removeClass( CLASSES.input ).removeData( NAME )
                setTimeout( function() {
                    $ELEMENT.off( '.' + STATE.id )
                }, 0)

                // Restore the element state
                ELEMENT.type = STATE.type
                ELEMENT.readOnly = false

                // Trigger the queued “stop” events.
                P.trigger( 'stop' )

                // Reset the picker states.
                STATE.methods = {}
                STATE.start = false

                return P
            }, //stop


            /**
             * Open up the picker
             */
            open: function( dontGiveFocus ) {

                // If it’s already open, do nothing.
                if ( STATE.open ) return P

                // Add the “active” class.
                $ELEMENT.addClass( CLASSES.active )
                aria( ELEMENT, 'expanded', true )

                // * A Firefox bug, when `html` has `overflow:hidden`, results in
                //   killing transitions :(. So add the “opened” state on the next tick.
                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
                setTimeout( function() {

                    // Add the “opened” class to the picker root.
                    P.$root.addClass( CLASSES.opened )
                    aria( P.$root[0], 'hidden', false )

                }, 0 )

                // If we have to give focus, bind the element and doc events.
                if ( dontGiveFocus !== false ) {

                    // Set it as open.
                    STATE.open = true

                    // Prevent the page from scrolling.
                    if ( IS_DEFAULT_THEME ) {
                        $html.
                            css( 'overflow', 'hidden' ).
                            css( 'padding-right', '+=' + getScrollbarWidth() )
                    }

                    // Pass focus to the root element’s jQuery object.
                    focusPickerOnceOpened()

                    // Bind the document events.
                    $document.on( 'click.' + STATE.id + ' focusin.' + STATE.id, function( event ) {

                        var target = event.target

                        // If the target of the event is not the element, close the picker picker.
                        // * Don’t worry about clicks or focusins on the root because those don’t bubble up.
                        //   Also, for Firefox, a click on an `option` element bubbles up directly
                        //   to the doc. So make sure the target wasn't the doc.
                        // * In Firefox stopPropagation() doesn’t prevent right-click events from bubbling,
                        //   which causes the picker to unexpectedly close when right-clicking it. So make
                        //   sure the event wasn’t a right-click.
                        if ( target != ELEMENT && target != document && event.which != 3 ) {

                            // If the target was the holder that covers the screen,
                            // keep the element focused to maintain tabindex.
                            P.close( target === P.$holder[0] )
                        }

                    }).on( 'keydown.' + STATE.id, function( event ) {

                        var
                            // Get the keycode.
                            keycode = event.keyCode,

                            // Translate that to a selection change.
                            keycodeToMove = P.component.key[ keycode ],

                            // Grab the target.
                            target = event.target


                        // On escape, close the picker and give focus.
                        if ( keycode == 27 ) {
                            P.close( true )
                        }


                        // Check if there is a key movement or “enter” keypress on the element.
                        else if ( target == P.$holder[0] && ( keycodeToMove || keycode == 13 ) ) {

                            // Prevent the default action to stop page movement.
                            event.preventDefault()

                            // Trigger the key movement action.
                            if ( keycodeToMove ) {
                                PickerConstructor._.trigger( P.component.key.go, P, [ PickerConstructor._.trigger( keycodeToMove ) ] )
                            }

                            // On “enter”, if the highlighted item isn’t disabled, set the value and close.
                            else if ( !P.$root.find( '.' + CLASSES.highlighted ).hasClass( CLASSES.disabled ) ) {
                                P.set( 'select', P.component.item.highlight )
                                if ( SETTINGS.closeOnSelect ) {
                                    P.close( true )
                                }
                            }
                        }


                        // If the target is within the root and “enter” is pressed,
                        // prevent the default action and trigger a click on the target instead.
                        else if ( $.contains( P.$root[0], target ) && keycode == 13 ) {
                            event.preventDefault()
                            target.click()
                        }
                    })
                }

                // Trigger the queued “open” events.
                return P.trigger( 'open' )
            }, //open


            /**
             * Close the picker
             */
            close: function( giveFocus ) {

                // If we need to give focus, do it before changing states.
                if ( giveFocus ) {
                    if ( SETTINGS.editable ) {
                        ELEMENT.focus()
                    }
                    else {
                        // ....ah yes! It would’ve been incomplete without a crazy workaround for IE :|
                        // The focus is triggered *after* the close has completed - causing it
                        // to open again. So unbind and rebind the event at the next tick.
                        P.$holder.off( 'focus.toOpen' ).focus()
                        setTimeout( function() {
                            P.$holder.on( 'focus.toOpen', handleFocusToOpenEvent )
                        }, 0 )
                    }
                }

                // Remove the “active” class.
                $ELEMENT.removeClass( CLASSES.active )
                aria( ELEMENT, 'expanded', false )

                // * A Firefox bug, when `html` has `overflow:hidden`, results in
                //   killing transitions :(. So remove the “opened” state on the next tick.
                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
                setTimeout( function() {

                    // Remove the “opened” and “focused” class from the picker root.
                    P.$root.removeClass( CLASSES.opened + ' ' + CLASSES.focused )
                    aria( P.$root[0], 'hidden', true )

                }, 0 )

                // If it’s already closed, do nothing more.
                if ( !STATE.open ) return P

                // Set it as closed.
                STATE.open = false

                // Allow the page to scroll.
                if ( IS_DEFAULT_THEME ) {
                    $html.
                        css( 'overflow', '' ).
                        css( 'padding-right', '-=' + getScrollbarWidth() )
                }

                // Unbind the document events.
                $document.off( '.' + STATE.id )

                // Trigger the queued “close” events.
                return P.trigger( 'close' )
            }, //close


            /**
             * Clear the values
             */
            clear: function( options ) {
                return P.set( 'clear', null, options )
            }, //clear


            /**
             * Set something
             */
            set: function( thing, value, options ) {

                var thingItem, thingValue,
                    thingIsObject = $.isPlainObject( thing ),
                    thingObject = thingIsObject ? thing : {}

                // Make sure we have usable options.
                options = thingIsObject && $.isPlainObject( value ) ? value : options || {}

                if ( thing ) {

                    // If the thing isn’t an object, make it one.
                    if ( !thingIsObject ) {
                        thingObject[ thing ] = value
                    }

                    // Go through the things of items to set.
                    for ( thingItem in thingObject ) {

                        // Grab the value of the thing.
                        thingValue = thingObject[ thingItem ]

                        // First, if the item exists and there’s a value, set it.
                        if ( thingItem in P.component.item ) {
                            if ( thingValue === undefined ) thingValue = null
                            P.component.set( thingItem, thingValue, options )
                        }

                        // Then, check to update the element value and broadcast a change.
                        if ( thingItem == 'select' || thingItem == 'clear' ) {
                            $ELEMENT.
                                val( thingItem == 'clear' ? '' : P.get( thingItem, SETTINGS.format ) ).
                                trigger( 'change' )
                        }
                    }

                    // Render a new picker.
                    P.render()
                }

                // When the method isn’t muted, trigger queued “set” events and pass the `thingObject`.
                return options.muted ? P : P.trigger( 'set', thingObject )
            }, //set


            /**
             * Get something
             */
            get: function( thing, format ) {

                // Make sure there’s something to get.
                thing = thing || 'value'

                // If a picker state exists, return that.
                if ( STATE[ thing ] != null ) {
                    return STATE[ thing ]
                }

                // Return the submission value, if that.
                if ( thing == 'valueSubmit' ) {
                    if ( P._hidden ) {
                        return P._hidden.value
                    }
                    thing = 'value'
                }

                // Return the value, if that.
                if ( thing == 'value' ) {
                    return ELEMENT.value
                }

                // Check if a component item exists, return that.
                if ( thing in P.component.item ) {
                    if ( typeof format == 'string' ) {
                        var thingValue = P.component.get( thing )
                        return thingValue ?
                            PickerConstructor._.trigger(
                                P.component.formats.toString,
                                P.component,
                                [ format, thingValue ]
                            ) : ''
                    }
                    return P.component.get( thing )
                }
            }, //get



            /**
             * Bind events on the things.
             */
            on: function( thing, method, internal ) {

                var thingName, thingMethod,
                    thingIsObject = $.isPlainObject( thing ),
                    thingObject = thingIsObject ? thing : {}

                if ( thing ) {

                    // If the thing isn’t an object, make it one.
                    if ( !thingIsObject ) {
                        thingObject[ thing ] = method
                    }

                    // Go through the things to bind to.
                    for ( thingName in thingObject ) {

                        // Grab the method of the thing.
                        thingMethod = thingObject[ thingName ]

                        // If it was an internal binding, prefix it.
                        if ( internal ) {
                            thingName = '_' + thingName
                        }

                        // Make sure the thing methods collection exists.
                        STATE.methods[ thingName ] = STATE.methods[ thingName ] || []

                        // Add the method to the relative method collection.
                        STATE.methods[ thingName ].push( thingMethod )
                    }
                }

                return P
            }, //on



            /**
             * Unbind events on the things.
             */
            off: function() {
                var i, thingName,
                    names = arguments;
                for ( i = 0, namesCount = names.length; i < namesCount; i += 1 ) {
                    thingName = names[i]
                    if ( thingName in STATE.methods ) {
                        delete STATE.methods[thingName]
                    }
                }
                return P
            },


            /**
             * Fire off method events.
             */
            trigger: function( name, data ) {
                var _trigger = function( name ) {
                    var methodList = STATE.methods[ name ]
                    if ( methodList ) {
                        methodList.map( function( method ) {
                            PickerConstructor._.trigger( method, P, [ data ] )
                        })
                    }
                }
                _trigger( '_' + name )
                _trigger( name )
                return P
            } //trigger
        } //PickerInstance.prototype


    /**
     * Wrap the picker holder components together.
     */
    function createWrappedComponent() {

        // Create a picker wrapper holder
        return PickerConstructor._.node( 'div',

            // Create a picker wrapper node
            PickerConstructor._.node( 'div',

                // Create a picker frame
                PickerConstructor._.node( 'div',

                    // Create a picker box node
                    PickerConstructor._.node( 'div',

                        // Create the components nodes.
                        P.component.nodes( STATE.open ),

                        // The picker box class
                        CLASSES.box
                    ),

                    // Picker wrap class
                    CLASSES.wrap
                ),

                // Picker frame class
                CLASSES.frame
            ),

            // Picker holder class
            CLASSES.holder,

            'tabindex="-1"'
        ) //endreturn
    } //createWrappedComponent



    /**
     * Prepare the input element with all bindings.
     */
    function prepareElement() {

        $ELEMENT.

            // Store the picker data by component name.
            data(NAME, P).

            // Add the “input” class name.
            addClass(CLASSES.input).

            // If there’s a `data-value`, update the value of the element.
            val( $ELEMENT.data('value') ?
                P.get('select', SETTINGS.format) :
                ELEMENT.value
            )


        // Only bind keydown events if the element isn’t editable.
        if ( !SETTINGS.editable ) {

            $ELEMENT.

                // On focus/click, open the picker.
                on( 'focus.' + STATE.id + ' click.' + STATE.id, function(event) {
                    event.preventDefault()
                    P.open()
                }).

                // Handle keyboard event based on the picker being opened or not.
                on( 'keydown.' + STATE.id, handleKeydownEvent )
        }


        // Update the aria attributes.
        aria(ELEMENT, {
            haspopup: true,
            expanded: false,
            readonly: false,
            owns: ELEMENT.id + '_root'
        })
    }


    /**
     * Prepare the root picker element with all bindings.
     */
    function prepareElementRoot() {
        aria( P.$root[0], 'hidden', true )
    }


     /**
      * Prepare the holder picker element with all bindings.
      */
    function prepareElementHolder() {

        P.$holder.

            on({

                // For iOS8.
                keydown: handleKeydownEvent,

                'focus.toOpen': handleFocusToOpenEvent,

                blur: function() {
                    // Remove the “target” class.
                    $ELEMENT.removeClass( CLASSES.target )
                },

                // When something within the holder is focused, stop from bubbling
                // to the doc and remove the “focused” state from the root.
                focusin: function( event ) {
                    P.$root.removeClass( CLASSES.focused )
                    event.stopPropagation()
                },

                // When something within the holder is clicked, stop it
                // from bubbling to the doc.
                'mousedown click': function( event ) {

                    var target = event.target

                    // Make sure the target isn’t the root holder so it can bubble up.
                    if ( target != P.$holder[0] ) {

                        event.stopPropagation()

                        // * For mousedown events, cancel the default action in order to
                        //   prevent cases where focus is shifted onto external elements
                        //   when using things like jQuery mobile or MagnificPopup (ref: #249 & #120).
                        //   Also, for Firefox, don’t prevent action on the `option` element.
                        if ( event.type == 'mousedown' && !$( target ).is( 'input, select, textarea, button, option' )) {

                            event.preventDefault()

                            // Re-focus onto the holder so that users can click away
                            // from elements focused within the picker.
                            P.$holder[0].focus()
                        }
                    }
                }

            }).

            // If there’s a click on an actionable element, carry out the actions.
            on( 'click', '[data-pick], [data-nav], [data-clear], [data-close]', function() {

                var $target = $( this ),
                    targetData = $target.data(),
                    targetDisabled = $target.hasClass( CLASSES.navDisabled ) || $target.hasClass( CLASSES.disabled ),

                    // * For IE, non-focusable elements can be active elements as well
                    //   (http://stackoverflow.com/a/2684561).
                    activeElement = getActiveElement()
                    activeElement = activeElement && ( activeElement.type || activeElement.href )

                // If it’s disabled or nothing inside is actively focused, re-focus the element.
                if ( targetDisabled || activeElement && !$.contains( P.$root[0], activeElement ) ) {
                    P.$holder[0].focus()
                }

                // If something is superficially changed, update the `highlight` based on the `nav`.
                if ( !targetDisabled && targetData.nav ) {
                    P.set( 'highlight', P.component.item.highlight, { nav: targetData.nav } )
                }

                // If something is picked, set `select` then close with focus.
                else if ( !targetDisabled && 'pick' in targetData ) {
                    P.set( 'select', targetData.pick )
                    if ( SETTINGS.closeOnSelect ) {
                        P.close( true )
                    }
                }

                // If a “clear” button is pressed, empty the values and close with focus.
                else if ( targetData.clear ) {
                    P.clear()
                    if ( SETTINGS.closeOnClear ) {
                        P.close( true )
                    }
                }

                else if ( targetData.close ) {
                    P.close( true )
                }

            }) //P.$holder

    }


     /**
      * Prepare the hidden input element along with all bindings.
      */
    function prepareElementHidden() {

        var name

        if ( SETTINGS.hiddenName === true ) {
            name = ELEMENT.name
            ELEMENT.name = ''
        }
        else {
            name = [
                typeof SETTINGS.hiddenPrefix == 'string' ? SETTINGS.hiddenPrefix : '',
                typeof SETTINGS.hiddenSuffix == 'string' ? SETTINGS.hiddenSuffix : '_submit'
            ]
            name = name[0] + ELEMENT.name + name[1]
        }

        P._hidden = $(
            '<input ' +
            'type=hidden ' +

            // Create the name using the original input’s with a prefix and suffix.
            'name="' + name + '"' +

            // If the element has a value, set the hidden value as well.
            (
                $ELEMENT.data('value') || ELEMENT.value ?
                    ' value="' + P.get('select', SETTINGS.formatSubmit) + '"' :
                    ''
            ) +
            '>'
        )[0]

        $ELEMENT.

            // If the value changes, update the hidden input with the correct format.
            on('change.' + STATE.id, function() {
                P._hidden.value = ELEMENT.value ?
                    P.get('select', SETTINGS.formatSubmit) :
                    ''
            })
    }


    // Wait for transitions to end before focusing the holder. Otherwise, while
    // using the `container` option, the view jumps to the container.
    function focusPickerOnceOpened() {

        if (IS_DEFAULT_THEME && supportsTransitions) {
            P.$holder.find('.' + CLASSES.frame).one('transitionend', function() {
                P.$holder[0].focus()
            })
        }
        else {
            P.$holder[0].focus()
        }
    }


    function handleFocusToOpenEvent(event) {

        // Stop the event from propagating to the doc.
        event.stopPropagation()

        // Add the “target” class.
        $ELEMENT.addClass( CLASSES.target )

        // Add the “focused” class to the root.
        P.$root.addClass( CLASSES.focused )

        // And then finally open the picker.
        P.open()
    }


    // For iOS8.
    function handleKeydownEvent( event ) {

        var keycode = event.keyCode,

            // Check if one of the delete keys was pressed.
            isKeycodeDelete = /^(8|46)$/.test(keycode)

        // For some reason IE clears the input value on “escape”.
        if ( keycode == 27 ) {
            P.close( true )
            return false
        }

        // Check if `space` or `delete` was pressed or the picker is closed with a key movement.
        if ( keycode == 32 || isKeycodeDelete || !STATE.open && P.component.key[keycode] ) {

            // Prevent it from moving the page and bubbling to doc.
            event.preventDefault()
            event.stopPropagation()

            // If `delete` was pressed, clear the values and close the picker.
            // Otherwise open the picker.
            if ( isKeycodeDelete ) { P.clear().close() }
            else { P.open() }
        }
    }


    // Return a new picker instance.
    return new PickerInstance()
} //PickerConstructor



/**
 * The default classes and prefix to use for the HTML classes.
 */
PickerConstructor.klasses = function( prefix ) {
    prefix = prefix || 'picker'
    return {

        picker: prefix,
        opened: prefix + '--opened',
        focused: prefix + '--focused',

        input: prefix + '__input',
        active: prefix + '__input--active',
        target: prefix + '__input--target',

        holder: prefix + '__holder',

        frame: prefix + '__frame',
        wrap: prefix + '__wrap',

        box: prefix + '__box'
    }
} //PickerConstructor.klasses



/**
 * Check if the default theme is being used.
 */
function isUsingDefaultTheme( element ) {

    var theme,
        prop = 'position'

    // For IE.
    if ( element.currentStyle ) {
        theme = element.currentStyle[prop]
    }

    // For normal browsers.
    else if ( window.getComputedStyle ) {
        theme = getComputedStyle( element )[prop]
    }

    return theme == 'fixed'
}



/**
 * Get the width of the browser’s scrollbar.
 * Taken from: https://github.com/VodkaBears/Remodal/blob/master/src/jquery.remodal.js
 */
function getScrollbarWidth() {

    if ( $html.height() <= $window.height() ) {
        return 0
    }

    var $outer = $( '<div style="visibility:hidden;width:100px" />' ).
        appendTo( 'body' )

    // Get the width without scrollbars.
    var widthWithoutScroll = $outer[0].offsetWidth

    // Force adding scrollbars.
    $outer.css( 'overflow', 'scroll' )

    // Add the inner div.
    var $inner = $( '<div style="width:100%" />' ).appendTo( $outer )

    // Get the width with scrollbars.
    var widthWithScroll = $inner[0].offsetWidth

    // Remove the divs.
    $outer.remove()

    // Return the difference between the widths.
    return widthWithoutScroll - widthWithScroll
}



/**
 * PickerConstructor helper methods.
 */
PickerConstructor._ = {

    /**
     * Create a group of nodes. Expects:
     * `
        {
            min:    {Integer},
            max:    {Integer},
            i:      {Integer},
            node:   {String},
            item:   {Function}
        }
     * `
     */
    group: function( groupObject ) {

        var
            // Scope for the looped object
            loopObjectScope,

            // Create the nodes list
            nodesList = '',

            // The counter starts from the `min`
            counter = PickerConstructor._.trigger( groupObject.min, groupObject )


        // Loop from the `min` to `max`, incrementing by `i`
        for ( ; counter <= PickerConstructor._.trigger( groupObject.max, groupObject, [ counter ] ); counter += groupObject.i ) {

            // Trigger the `item` function within scope of the object
            loopObjectScope = PickerConstructor._.trigger( groupObject.item, groupObject, [ counter ] )

            // Splice the subgroup and create nodes out of the sub nodes
            nodesList += PickerConstructor._.node(
                groupObject.node,
                loopObjectScope[ 0 ],   // the node
                loopObjectScope[ 1 ],   // the classes
                loopObjectScope[ 2 ]    // the attributes
            )
        }

        // Return the list of nodes
        return nodesList
    }, //group


    /**
     * Create a dom node string
     */
    node: function( wrapper, item, klass, attribute ) {

        // If the item is false-y, just return an empty string
        if ( !item ) return ''

        // If the item is an array, do a join
        item = $.isArray( item ) ? item.join( '' ) : item

        // Check for the class
        klass = klass ? ' class="' + klass + '"' : ''

        // Check for any attributes
        attribute = attribute ? ' ' + attribute : ''

        // Return the wrapped item
        return '<' + wrapper + klass + attribute + '>' + item + '</' + wrapper + '>'
    }, //node


    /**
     * Lead numbers below 10 with a zero.
     */
    lead: function( number ) {
        return ( number < 10 ? '0': '' ) + number
    },


    /**
     * Trigger a function otherwise return the value.
     */
    trigger: function( callback, scope, args ) {
        return typeof callback == 'function' ? callback.apply( scope, args || [] ) : callback
    },


    /**
     * If the second character is a digit, length is 2 otherwise 1.
     */
    digits: function( string ) {
        return ( /\d/ ).test( string[ 1 ] ) ? 2 : 1
    },


    /**
     * Tell if something is a date object.
     */
    isDate: function( value ) {
        return {}.toString.call( value ).indexOf( 'Date' ) > -1 && this.isInteger( value.getDate() )
    },


    /**
     * Tell if something is an integer.
     */
    isInteger: function( value ) {
        return {}.toString.call( value ).indexOf( 'Number' ) > -1 && value % 1 === 0
    },


    /**
     * Create ARIA attribute strings.
     */
    ariaAttr: ariaAttr
} //PickerConstructor._



/**
 * Extend the picker with a component and defaults.
 */
PickerConstructor.extend = function( name, Component ) {

    // Extend jQuery.
    $.fn[ name ] = function( options, action ) {

        // Grab the component data.
        var componentData = this.data( name )

        // If the picker is requested, return the data object.
        if ( options == 'picker' ) {
            return componentData
        }

        // If the component data exists and `options` is a string, carry out the action.
        if ( componentData && typeof options == 'string' ) {
            return PickerConstructor._.trigger( componentData[ options ], componentData, [ action ] )
        }

        // Otherwise go through each matched element and if the component
        // doesn’t exist, create a new picker using `this` element
        // and merging the defaults and options with a deep copy.
        return this.each( function() {
            var $this = $( this )
            if ( !$this.data( name ) ) {
                new PickerConstructor( this, name, Component, options )
            }
        })
    }

    // Set the defaults.
    $.fn[ name ].defaults = Component.defaults
} //PickerConstructor.extend



function aria(element, attribute, value) {
    if ( $.isPlainObject(attribute) ) {
        for ( var key in attribute ) {
            ariaSet(element, key, attribute[key])
        }
    }
    else {
        ariaSet(element, attribute, value)
    }
}
function ariaSet(element, attribute, value) {
    element.setAttribute(
        (attribute == 'role' ? '' : 'aria-') + attribute,
        value
    )
}
function ariaAttr(attribute, data) {
    if ( !$.isPlainObject(attribute) ) {
        attribute = { attribute: data }
    }
    data = ''
    for ( var key in attribute ) {
        var attr = (key == 'role' ? '' : 'aria-') + key,
            attrVal = attribute[key]
        data += attrVal == null ? '' : attr + '="' + attribute[key] + '"'
    }
    return data
}

// IE8 bug throws an error for activeElements within iframes.
function getActiveElement() {
    try {
        return document.activeElement
    } catch ( err ) { }
}



// Expose the picker constructor.
return PickerConstructor


}));




},{}],5:[function(require,module,exports){
var global = require('../common/global.js');
var etpl   = require('../common/etpl.js');
var tplProListItem = require('./tpl/proItem.html');
var tplTraveler = require('./tpl/traveler.html');

var picker = require('../common/picker.js');
var pickerDate = require('../common/picker.date.js');
var maskSku;//存储屏蔽的SKU
var defaultMaskSku;//存储不屏蔽的SKU
var startMask;//初始化绝对屏蔽的SKU
var KN_Order = {
	orderInfo : {
		spuCode : '',
		proItem : []
	},
	init:function(){
		// 检测浏览器是否支持本地存储
		if(!window.sessionStorage){
			$.alert('你的浏览器不支持本地存储哦，如果你启用了隐私模式，<br/>请切换回正常模式哦！',function(){
				location.href = global.config.knIndex;
			});
		}
		var orderInfo = global.sessionStorage.get('orderInfo');

			if(!orderInfo.hasOwnProperty('contact')){
				orderInfo.contact = {};
				global.sessionStorage.set('orderInfo',orderInfo);
			}

		if(orderInfo === 'undefined'){
			$.alert('该订单已经失效，请重新下单哦！',function(){
				location.href = global.config.knIndex;
			});
			return false;
		}

		//展示需二次确认提示文字
		if(orderInfo.confirmType == 2){
			$('.twoConfirmTip').css('display', 'block');
		}

		$('.fill-order-bd').find('input').on('focusin',function(){
			var _t = this;
				isFocus = true;
			setTimeout(function(){
				$(_t).get(0).scrollIntoView();
			},300);
		});

		this.orderInfo.spuCode = orderInfo.spuCode;

		// 初始化标题
		$('h2').html(orderInfo.name);
		//console.log(orderInfo);

		var title = orderInfo.name+"_特色旅游_酷鸟";
		var keywords = orderInfo.name+",特色旅游,高端旅游,旅游线路,酷鸟";
		var desc = orderInfo.name+"。酷鸟旅游网，一个提供特色旅游特色旅行线路的网站。";
		this.setSEO(title, keywords, desc, 1);
		$('.o-number').find('input').attr('value',orderInfo.limitMinNum);
		
		if(orderInfo.limitMinNum > 0){
			$('.o-number').find('.o-m-con .sub').addClass('disabled');
			$('.o-number').find('.o-m-con em').show().html('最低起订量' + orderInfo.limitMinNum);
		}
		
		//初始化返回按钮
		$("header .back").click(function(){
			if(orderInfo.spuCode && orderInfo.spuCode.trim().length>0 && orderInfo.shopCode && orderInfo.shopCode.trim().length>0){
				window.location.href = "../detail/detail.html?productCode="+orderInfo.spuCode+"&shopCode="+orderInfo.shopCode;
			}else{
				$(this).removeClass("external");
			}
		});
		
		this.addFilter();

		// 获取商品规格
		this.getShopInfo();
		
		this.getSkuInfo();

		this.traveler();

		// this.contacts();

		this.orderNum();

		// this.getEffectDay();

		this.getUserInfo();

		// console.log(orderInfo.hasOwnProperty('skuCode'));

		if(orderInfo.hasOwnProperty('skuCode')){
			this.getSkuDetail();
		}

		this.selectTracerler();

		// 短信验证码
		// this.getAuthCode();
		// 提交订单
		this.submit();

		$('.picker--opened').remove();

	},
	// 获取商品规格信息
	getShopInfo:function(){
		var _ts  = this;
		var url  = global.config.serverBase + 'api/product/queryProductSpecList.json';
		var data = {
			spu_code : this.orderInfo.spuCode
		};
			$.ajax({
				url : url,
				type : 'get',
				data : data,
				dataType: 'json',
				success:function(rs){
					if(rs.code === '100'){
						var orderInfo = global.sessionStorage.get('orderInfo');
							//设置该商品
							orderInfo.proList = rs.productSpecList;
							
							if(typeof orderInfo.selectedItemList === 'undefined'){
								orderInfo.selectedItemList = [];
							}

							global.sessionStorage.set('orderInfo',orderInfo);

							_ts.setShopInfo();
					}
				}
			});
	},
	//设置商品规格
	setShopInfo:function(){
		var _ts 	  = this,
			orderInfo = global.sessionStorage.get('orderInfo'),
			html 	  = '';
			// 初始化模板
			var render = etpl.compile(tplProListItem);
			//渲染数据
			var text   = render({
				data : orderInfo.proList
			});
			function repeat(arr){
							var result = [], hash = {};
						    for (var i = 0, elem; (elem = arr[i]) !== undefined ; i++) {
						        if (!hash[elem]) {
						            result.push(elem);
						            hash[elem] = true;
						        }
						    }
						    return result;
						}

			//判断数组完全包含 ,arr1 父数据 , arr2子数组 
			function containAry(arr1,arr2){
				var ps = false;
				arr1 = arr1.split('-');
				arr2 = arr2.split('-');
				if ($.isArray(arr1) && $.isArray(arr2)){
					$.each(arr2,function(i,v){
						if (arr1.indexOf(v) >=0){
							ps = true;
						}else{
							ps = false;
							return false;
						}
					});
				}
				return ps;
			}

			$('.order-info-con').find('.o-type').html(text);

			// 添加商品规格选择事件
			$('.o-type-item').on('click','span',function(){
				if ($(this).attr('className') == "disabled"){$(this).removeClass('cur');return false;}
				var $pro 	  = $(this).parents('.o-type-item'),
					index 	  = parseInt($pro.data('index'),10),
					proId     = $pro.data('proid'),
					itemId    = $(this).data('itemid'),
					orderInfo = global.sessionStorage.get('orderInfo');


					if (!!!$(this).hasClass("cur")){
						$pro.find('span').removeClass('cur');
						$(this).addClass('cur');
						orderInfo.selectedItemList[index] = [proId,itemId];
					}else{
						$(this).removeClass('cur');
						orderInfo.selectedItemList.splice(index,1);
					}

					global.sessionStorage.set('orderInfo',orderInfo);

					var _c = _ts.checkSkuCode();

					//console.log(_c);

					if( _c > 0){
						_ts.getSkuDetail();
					}
					if(_c !== 2){
						$('.o-time').removeClass('show');
							$('.order-mony em').html("￥ 0");
					}

					var tmpTypeItem = $('.o-type-item');
					var tmpSelect = [];
					var tmpMaskSku;

					//选中
					var select = $(tmpTypeItem).find('span.cur');
					var selectLength = select.length;

					


					//选了三个就干掉其它的
					if(selectLength == 3){
						$('.o-type-item').find('span').addClass('disabled');
						$(select).each(function(i,v){
							$(v).removeClass('disabled');
						});
					}else{

					
						tmpMaskSku = $.extend(true,{}, maskSku);
						var tmpSku = [];

						//拼接选中的项
						var select_id = [];
						$.each(select,function(i,v){
							select_id.push($(v).data('itemid'));
						});

						select_id = select_id.join("-");

						//抽取需要检查的数据
						var tmpdefaultMaskSku = [];
						$.each(defaultMaskSku,function(di,dv){
							var tmpid = dv.join("-");
								if (containAry(tmpid,select_id)){
								//if (tmpid.indexOf(select_id) >=0){
									tmpdefaultMaskSku.push(dv);
								}
						});
						var defAry = [];
						
						//查找选中对应的SKU
						$.each(tmpMaskSku,function(mi,mv){
							var tmpid = mv.join("-");
							if (containAry(tmpid,select_id)){
							//if (tmpid.indexOf(select_id) >=0){

								var tmpselect = select_id.split("-");
								var tmpselectlength = tmpselect.length;
								//select_id = select_id.split("-");
								if (tmpselectlength > 0 ){

									var needAry = [];

									$.each(tmpselect,function(i,v){
										v = v*1;
										mv.splice(mv.indexOf(v),1);


									});
									//检查屏蔽
									$.each(mv,function(mmi,mmv){
										var pass = true;
										$.each(tmpdefaultMaskSku,function(ddi,ddv){
											if (ddv.indexOf(mmv) >=0){
												pass = true;
												return false;
											}else{
												pass = false;
											}
										});
										if (pass === false){
											defAry.push(mmv);
										}
									});
									
								}
								
							}
						});

						
						defAry = repeat(defAry);
						var defAryLength = defAry.length;
			
						   	//$(tmpTypeItem).find('span.disabled').removeClass('disabled');
							$(tmpTypeItem).find('span').each(function(e,t){
								$(t).removeClass('disabled');
								if (defAryLength > 0){
									$.each(defAry,function(i,v){
											if (v == $(t).data('itemid')){
												$(t).removeClass('cur').addClass('disabled');
											}
									});
								}

								$.each(startMask,function(i,v){
										if (v == $(t).data('itemid')){
											$(t).removeClass('cur').addClass('disabled');
										}
								});
							});


					//选中后屏蔽同行
					if (!!!$(this).hasClass("cur")){
						

						$pro.find('span').each(function(i,v){
							var thisType = $(v).hasClass('disabled');
							if (!thisType && $(v).attr('data-deftype')){
								$(v).removeClass('disabled');
							}
						});



					}else{
						$pro.find('span').each(function(i,v){
							var thisType = $(v).hasClass('disabled');
							if (!thisType){
								$(v).addClass('disabled');
								$(v).attr('data-deftype',true);
							}else{
								$(v).attr('data-deftype',false);
							}
						});
					}
				
				}
			});

			// 恢复之前的操作
			if(typeof orderInfo.selectedItemList !== 'undefined'){
				for(var i =0 ;i < orderInfo.selectedItemList.length; i++){
					if(orderInfo.selectedItemList[i]!==null){
						var $fitem = $('.o-type-item[data-proid="'+orderInfo.selectedItemList[i][0]+'"]');
						$fitem.find('span').removeClass('cur');
						$fitem.find('span[data-itemid="'+orderInfo.selectedItemList[i][1]+'"]').addClass('cur');
					}
				}
			}
	},
	// 检查是否已经全选规格,
	// 0：未全选，
	// 1 ： stocktype = 1, 
	// 2 : stockType = 2,
	// -1 ： 意外情况
	checkSkuCode:function(){
		var orderInfo = global.sessionStorage.get('orderInfo');
		var selected  = orderInfo.selectedItemList;
		var stemp 	  = [];
		
		if(!orderInfo.hasOwnProperty('proList')){
			return 0;
		}

		for(var i = 0; i < orderInfo.proList.length;i++ ){
			//如果存在undefined，说明未全部选择
			if(typeof selected[i] === 'undefined'){
				return 0;
			}
		}

		//将选择的商品规格contact起来对比skulist获取skucode
		var skuCode  = '';
		for(var j = 0 ; j < selected.length;j++){
			stemp = stemp.concat(selected[j]);
		}

		for(var k = 0 ; k < orderInfo.skuList.length;k++){
			if(orderInfo.skuList[k].value.toString() === stemp.toString()){

				orderInfo.stockType = orderInfo.skuList[k].stockType;

				// 设置新的skucode之前，先对比是否跟之前的选择一致，不一致则删掉日期
				if(orderInfo.skuCode !== orderInfo.skuList[k].skuCode){
					try{
						delete orderInfo.effectDate;
					}catch(e){}
				}

				orderInfo.skuCode = orderInfo.skuList[k].skuCode;

				global.sessionStorage.set('orderInfo',orderInfo);

				if(orderInfo.skuList[k].stockType === 1){

					return 1;

				}else if(orderInfo.skuList[k].stockType === 2){
					return 2;
				}
			}
		}
		orderInfo.skuCode = null;
		global.sessionStorage.set('orderInfo',orderInfo);
		return -1;
	},
	// 获取用户信息
	getUserInfo : function(){
		var _ts  = this;
		var url  = global.config.serverBase + 'api/user/getUserInfo.json';
			$.ajax({
				url : url,
				type : 'get',
				dataType: 'json',
				success:function(rs){
					var orderInfo = global.sessionStorage.get('orderInfo');
					if(rs.code === '100'){

						if(orderInfo.hasOwnProperty('contact')){
							if(!orderInfo.contact.hasOwnProperty('name') && !orderInfo.contact.hasOwnProperty('mobile')){
								orderInfo.contact = {
									name : rs.userInfo.contact.name,
									mobile : rs.userInfo.contact.mobile
								};
							}
						}
						
						orderInfo.login = true;
						
						global.sessionStorage.set('orderInfo',orderInfo);
						
					}else{

						orderInfo.login = false;

						// delete orderInfo.contact;

						global.sessionStorage.set('orderInfo',orderInfo);
					}

					_ts.contacts();
				}
			});
	},
	// 获取商品sku信息
	getSkuInfo : function(){
		var url  = global.config.serverBase + 'api/product/queryProductSkuList.json';
		var data = {
			spu_code : this.orderInfo.spuCode
		};

			$.ajax({
				url : url,
				type : 'get',
				data : data,
				dataType: 'json',
				success:function(rs){
					if(rs.code === '100'){
						// 设置sku list列表
						var orderInfo = global.sessionStorage.get('orderInfo');

						var arr 	  = [];

						//将屏蔽的初始SKU储存起来
						maskSku = [];
						//将开放的初始SKU储存起来
						defaultMaskSku = [];
						//后端返回的初始屏蔽SKU
						startMask = [];

						//$('.o-type-item').find('span').removeClass('cur');

						var tmpMaskSku, tmpdefaultMaskSku;

						for(var i=0; i < rs.data.length ; i++){
							var data = {};
							// 只有stockType=2的时候，时间才有效
							var s = [];
							//需要屏蔽的SKU和可能屏蔽的SKU处理
							if (rs.data[i].saleStatus == 2){
								tmpMaskSku = [];
							}else{
								tmpdefaultMaskSku = [];
							}
							for(var j = 0; j < rs.data[i].productSkuSpecList.length ; j++){
								var sid = rs.data[i].productSkuSpecList[j].specId;
								var sitemId = rs.data[i].productSkuSpecList[j].specItemId;
								var onlyKey = rs.data[i].productSkuSpecList[j].onlyKey;
								var disableList = rs.disableList.initial;//startMask

								if (onlyKey){
									if(disableList.indexOf(onlyKey) >= 0){
										startMask.push(sitemId);
									}
								}

								if (rs.data[i].saleStatus == 2){
									tmpMaskSku.push(sitemId);
								}else{
									tmpdefaultMaskSku.push(sitemId);
								}
								s.push(sid,sitemId);
							}
							if (rs.data[i].saleStatus == 2){
								maskSku.push(tmpMaskSku);
							}else{
								defaultMaskSku.push(tmpdefaultMaskSku);
							}
							data.stockType = rs.data[i].stockType;
							data.skuCode = rs.data[i].skuCode;
							data.value   = s;
							arr.push(data);
						}
					    //console.log(defaultMaskSku);
						orderInfo.skuList = arr ;
						global.sessionStorage.set('orderInfo',orderInfo);

						//屏蔽不可以点的规格
						var tmpTypeItem = $('.o-type-item');
						$(tmpTypeItem).find('span.disabled').removeClass('disabled');
						$(tmpTypeItem).find('span').each(function(e,t){
							//console.log(tmpMaskSku);
							$.each(startMask,function(i,v){
									if (v == $(t).data('itemid')){
										$(t).removeClass('cur').addClass('disabled');
									}
								
							});
						});
						
					}
				}
				
			});
	},
	// 获取选择的商品规格的信息
	getSkuDetail : function(){
		var _ts  = this;
		var url  = global.config.serverBase + 'api/product/queryProductSkuAttrList.json';
		var orderInfo = global.sessionStorage.get('orderInfo');
		var data = {
			sku_code : orderInfo.skuCode
		};
			$.ajax({
				url : url,
				type : 'get',
				data : data,
				dataType: 'json',
				success:function(rs){
					if(rs.code === '100'){
						var orderInfo = global.sessionStorage.get('orderInfo');
							
							if(rs.stockType === 2){
								orderInfo.stockType  = 2;
								orderInfo.effectDateList = rs.productSkuDailyAttrList;
								global.sessionStorage.set('orderInfo',orderInfo);

								_ts.setEffectDate(rs.productSkuDailyAttrList);
							}else if(rs.stockType === 1){
								orderInfo.stockType  = 1;
								orderInfo.totalStock = rs.totalStock;
								orderInfo.price 	 = rs.skuPrice;
								global.sessionStorage.set('orderInfo',orderInfo);
								_ts.orderNum();
							}
					}
				}
			});
	},
	// 设置商品有效期
	setEffectDate : function(ds){
		var _ts   = this,
			_val  = '',
			$time = $('.o-time'),
			orderInfo = global.sessionStorage.get('orderInfo');

			//初始化选择日期提示
			var dateTip = '';
			if(orderInfo.productType === 'plan'){
				dateTip = '请选择出行日期';
			}else if(orderInfo.productType === 'hotel'){
				dateTip = '请选择入住日期';
			}else{
				dateTip = '请选择使用日期';
			}

			// $('#o-time-input').attr('placeholder',dateTip);

			if(orderInfo.hasOwnProperty('effectDate')){
				_val = orderInfo.effectDate;
			}

			$('#o-time-input').remove();

			$time.find('.o-m-con').html('<input type="text" name="o-time" placeholder="'+dateTip+'" id="o-time-input" readonly="" value='+_val+'>');

			// $('.date-order-calender').remove();
			/*if($('.date-order-calender').size() === 0){
				$('body').append('<div class="date-order-calender"></div>');
			}*/

			$('.date-order-calender').html(' ');
			
		if(!orderInfo.effectDateList.length) return;
		var l 		= orderInfo.effectDateList.length,
			minDate = formatDate(orderInfo.effectDateList[0].effectDate),
			maxDate = formatDate(orderInfo.effectDateList[l-1].effectDate),
			disable = disableDate(orderInfo.effectDateList);
			// console.log(disable);
			// console.log(minDate);
		var $timePicker = $('#o-time-input').pickadate({
				priceData: ds,
				today: '',
				clear: '',
				close: '',
				format : 'yyyy-m-d',
				min  : new Date(minDate[0],minDate[1],minDate[2]),
				max  : new Date(maxDate[0],maxDate[1],maxDate[2]),
				disable: disable,
				// container : '.date-order-calender',
				onSet : function(c){
					setOrderInfoDate(c.select);
				}
			});

		//设置选中日期
		if(_val){
			var picker = $timePicker.pickadate('picker');
			picker.set('select',_val);
		}
		
		$time.addClass('show');


		// 匹配信息看选择了那个日期
		function selectDate(n){
			var orderInfo = global.sessionStorage.get('orderInfo');

				for(var i =0 ;i < orderInfo.effectDateList.length ; i++){
					if(orderInfo.effectDateList[i].effectDate === n){
						return orderInfo.effectDateList[i];
					}
				}

				return false;
		}

		//设置订单日期和相关价格库存
		function setOrderInfoDate(n,dn){
			var data = selectDate(n);

				if(data !== false){
					var orderInfo = global.sessionStorage.get('orderInfo'),
						t 		  = formatDate(n);
						// console.log(data);
						orderInfo.totalStock = data.stock;
						orderInfo.price = data.price;
						orderInfo.number = orderInfo.limitMinNum === 0 ? 1 : orderInfo.limitMinNum;
						orderInfo.effectDate = t[0] + '-' + (t[1] + 1) + '-' + t[2];

						global.sessionStorage.set('orderInfo',orderInfo);
						
						$('.o-number').find('.o-m-con span').removeClass('disabled');

						_ts.updateTotalPrice();
						_ts.orderNum();
						// console.log(orderInfo);
				}
		}

		//格式化日期
		function formatDate(n){
			var s = new Date(n),
				y = s.getFullYear(),
				m = s.getMonth(),
				d = s.getDate();

			return [y,m,d];
		}

		function disableDate(list){
			var arr = [],
				al  = list.length;

			//从第二个开始
			for(var i = 1; i < al ; i++){
				// 第一个日期跟第二个日期是连续时间
				if(list[i].effectDate === list[i-1].effectDate + 60*60*24*1000){
					continue;
				}else{
					var f = formatDate(list[i-1].effectDate + 60*60*24*1000),
						t = formatDate(list[i].effectDate - 60*60*24*1000);

						arr.push({from:[f[0],f[1],f[2]],to:[t[0],t[1],t[2]]});
				}	
			}
			return arr;
		}
	},
	// 数量操作
	orderNum : function(){
		var _ts 	 = this,
			$oNumber = $('.o-number'),
			$sub     = $oNumber.find('.sub'),
			$add 	 = $oNumber.find('.add'),
			$text 	 = $oNumber.find('input');

		var orderInfo  = global.sessionStorage.get('orderInfo');
		var totalStock = orderInfo.totalStock || 1;
		var limit 	   = orderInfo.limitMinNum || 1;



			$oNumber.addClass('show');
			
			if(orderInfo.hasOwnProperty('number')){
				updateTotalNumber(orderInfo.number,true);
			}else{
				updateTotalNumber(limit,true);
			}

			//加
			$add.off('click').on('click',function(){
				var val = parseInt($text.val());

					if(_ts.checkSkuCode() === 0){
						$.toast('请先选择商品规格');
						return false;
					}

					if(orderInfo.preStatus != 1 && val + 1 > totalStock){
						$add.addClass('disabled');
						return false;
					}

					$sub.removeClass('disabled');
					updateTotalNumber(++val);
			});

			// 减
			$sub.off('click').on('click',function(){
				var val = parseInt($text.val());

					if(_ts.checkSkuCode() === 0){
						$.toast('请先选择商品规格');
						return false;
					}

					if(val - 1 < limit){
						$sub.addClass('disabled');
						return false;
					}else if(val == limit){
						updateTotalNumber(val);
						$sub.addClass('disabled');
						return false;
					}

					$add.removeClass('disabled');
					updateTotalNumber(--val);
			});

			//输入框
			$text.on('input',function(){
				var val = parseInt($text.val()) || '';

				if(val === ''){
					return false;
				}

				if(val > totalStock){
					val = totalStock;
				}else if(val < limit){
					val = limit;
				}

				updateTotalNumber(val);
				

			});

		function updateTotalNumber(n,t){
			var orderInfo = global.sessionStorage.get('orderInfo');

				orderInfo.number = n;

				if(!t){
					if(typeof orderInfo.skuCode === 'undefined'){
						$.toast('请先选择商品规格哦!');
						return false;
					}
				}
				$text.val(n);
				$text.attr('value',n);
				global.sessionStorage.set('orderInfo',orderInfo);

				_ts.renderTraveler();
				
				// 规格选完之后才更新价格
				if(_ts.checkSkuCode() > 0){
					_ts.updateTotalPrice();
				}
		}
	},
	updateTotalPrice : function(){
		var $totalPrice = $('.order-mony').find('em'),
			orderInfo   = global.sessionStorage.get('orderInfo');
			//orderInfo.totalPrice = (orderInfo.price*orderInfo.number).toFixed(2);
			orderInfo.totalPrice = orderInfo.price*orderInfo.number;
			if(isNaN(orderInfo.totalPrice)){
				orderInfo.totalPrice = 0;
			}
			global.sessionStorage.set('orderInfo',orderInfo);
			$totalPrice.html('￥' + orderInfo.totalPrice);
	},
	// 联系人
	contacts:function(){
		var $contact  = $('.o-contact'),
			$name     = $contact.find('input[name=contactName]'),
			$mobile   = $contact.find('input[name=contactPhone]'),
			$authCode = $contact.find('input[name=contactAuth]'),
			orderInfo = global.sessionStorage.get('orderInfo');

			// console.log(orderInfo.hasOwnProperty('contact'));

			if(orderInfo.hasOwnProperty('contact')){
				if(orderInfo.contact.hasOwnProperty('name')){
					$name.val(orderInfo.contact.name);
					// $name.attr('value',orderInfo.contact.name);
				}

				if(orderInfo.contact.hasOwnProperty('mobile')){
					$mobile.val(orderInfo.contact.mobile);
					// $mobile.attr('value',orderInfo.contact.mobile);
				}

				if(orderInfo.hasOwnProperty('verifyCode')){
					$authCode.attr('value',orderInfo.verifyCode);
				}			
				
			}	

			if(orderInfo.hasOwnProperty('login')){
				if(orderInfo.login){
					$('.u-yz').hide();
					$('.friends-btn').show();
				}else{
					$('.friends-btn').hide();
				}
			}else{
				$('.friends-btn').show();
			}


			$name.on('input',function(){
				var val = $(this).val();
				var o 	= global.sessionStorage.get('orderInfo');

						o.contact.name = val;
						global.sessionStorage.set('orderInfo',o);

			});	

			$mobile.on('input',function(){
				var val = $(this).val();
				var o = global.sessionStorage.get('orderInfo');
					o.contact.mobile = val;

					global.sessionStorage.set('orderInfo',o);
				
		
			});

			this.getAuthCode();
	},
	// 获取短信验证码
	getAuthCode : function(){
		var _ts		  = this,
			st 		  = true,
			$authBtn  = $('.auth-btn'),
			$authText = $('input[name="contactAuth"]'),
			$mobile   = $('.o-contact').find('input[name="contactPhone"]');

			$authBtn.off('click').on('click',function(){
				var url = global.config.serverBase + 'api/torder/sendVerifyCode.json';
				var mobile = $mobile.val().toString();

				if($(this).hasClass('has_send')){
					return false;
				}
				
				if(mobile === ''){
					$.toast('请填写手机号码');
					return false;
				}

				if(!mobile.match(/^1\d{10}$/)){
					$.toast('请填写正确的手机号码');
					return false;
				}
				if(!st){
					return false;
				}
				st = false;

				var data = {
					mobile : mobile
				};

				$.ajax({
					url : url,
					type : 'get',
					data : data,
					dataType: 'json',
					success:function(rs){
						if(rs.code === '100'){
							var $authcode = $('.auth-btn');

								$.toast('短信发送成功');
								$authcode.addClass('has_send');
								$authcode.html('<em>60</em>秒后重发');

							var countTimer = setInterval(function(){
								var s = parseInt($authcode.find('em').html(),10) - 1;
									if(s > 0){
										$authcode.find('em').html(s);
									}else{
										clearInterval(countTimer);
										$authcode.removeClass('has_send');
										$authcode.html('获取验证码');
									}
							},1000);
						}else{
							$.toast(rs.msg);
						}
						st = true;
					}
				});
			});

			$authText.on('input',function(){
				var val = $(this).val();

					if(val.length === 6 ){
						if(val.match(/\d{6}$/)){
							var orderInfo = global.sessionStorage.get('orderInfo');

							orderInfo.verifyCode = val;

							global.sessionStorage.set('orderInfo',orderInfo);
						}else{
							$.toast('请输入6位数字验证码');
						}
					}
			});
	},
	// 提交订单
	submit : function(){
		var _ts 	= this,
			$submit = $('.order-btn');

			$submit.off('click').on('click',function(){
				var orderInfo = global.sessionStorage.get('orderInfo');
					if(!_ts.checkSkuCode()){
						$.toast("请选择规格项目");
						return false;
					}

					if(orderInfo.stockType === 2){
						if(!orderInfo.hasOwnProperty('effectDate')){
							$.toast("请选择日期");
							return false;
						}
					}

					if(!orderInfo.contact.hasOwnProperty('name')){
						$.toast('请输入联系人名字');
						return false;
					}else if(orderInfo.contact.name.length < 2 && orderInfo.contact.name.length > 10){
						$.toast('联系人请输入2~10位中英文、"-"、"_"、空格');
						return false;
					}else if(!orderInfo.contact.name.match(/^(([a-zA-Z\u4e00-\u9fa5]|[-_]|[\s]|){2,10})$/)){
						$.toast('联系人请输入2~10位中英文、"-"、"_"、空格');
						return false;
					}

					if(!orderInfo.contact.hasOwnProperty('mobile')){
						$.toast('请填写手机号码');
						return false;
					}

					if(!orderInfo.contact.hasOwnProperty('mobile') || !orderInfo.contact.mobile.match(/\d{11}$/)){
						$.toast('请填写正确的的手机号码');
						return false;
					}

					if(!orderInfo.login){
						if(typeof orderInfo.verifyCode === 'undefined' || !orderInfo.verifyCode.match(/\d{6}$/)){
							$.toast('请输入验证码');
							return false;
						}
					}

					var traveler;

					//产品为【线路、酒店、门票、潜水】类型的产品游客信息为必填项；
					if(orderInfo.parentId > 0 && orderInfo.parentId < 5){
					
						//验证信息是否完整
						if(_ts.verifyTracerlerRequire()){
							traveler = _ts.saveTracerlerForSubmit();
							_ts.orderInfo.traveler = traveler;

							$.showPreloader();
							_ts.submitRequest();
						}
					}else{

						traveler = _ts.verifyTracerler();
						_ts.orderInfo.traveler = traveler;

						$.showPreloader();
				   		_ts.submitRequest();
					}
			});
	},
	submitRequest : function(){
		var orderInfo = global.sessionStorage.get('orderInfo'),
			url 	  = global.config.serverBase + 'api/torder/saveOrder.json',
			data  	  = {
				contact:{
					name : orderInfo.contact.name,
					mobile : orderInfo.contact.mobile
				},
				spuCode : orderInfo.spuCode,
				shopCode : orderInfo.shopCode,
				skuCode : orderInfo.skuCode,
				number : orderInfo.number,
				totalPrice : orderInfo.totalPrice,
				contactName : orderInfo.contact.name,
				contactMobile : orderInfo.contact.mobile,
				verifyCode : orderInfo.verifyCode
			};
			// console.log(orderInfo);
			if(orderInfo.stockType === 2){
				data.effectDate = orderInfo.effectDate;
			}

			if(this.orderInfo.traveler.length > 0){
				data.passengerList = this.orderInfo.traveler;
			}

			data = JSON.stringify(data);
			$.ajax({
					url : url,
					type : 'post',
					data : data,
					dataType: 'json',
					contentType:'application/json',
					success:function(rs){
						if(rs.code !== '100'){
							$.toast(rs.msg);
						}else if(rs.code === '100'){
							if (rs.orderStatus === 1) {
								$.router.load('./orderResult2.html?orderCode='+ rs.orderCode + '&paymentCode=' + rs.paymentCode,true);
							}else{
								$.router.load('./orderResult.html?orderCode='+ rs.orderCode + '&paymentCode=' + rs.paymentCode,true);
							}
						}
						$.hidePreloader();
					},
					error:function(){
						$.hidePreloader();
						$.alert('网络错误，请稍后再尝试！');
					}
			});
	},
	// 旅客信息
	traveler : function(){
		var $traveler = $('.o-user'),
			$btn 	  = $traveler.find('.more');

			$btn.off('click').on('click',function(){
				if($traveler.hasClass('show')){
					$traveler.removeClass('show');
				}else{
					$traveler.addClass('show');
				}
			});
	},
	renderTraveler : function(){
		var orderInfo  = global.sessionStorage.get('orderInfo'),
			$traveler  = $('.o-user').find('.user-list'),
			t  		   = [];


		if(orderInfo.hasOwnProperty('traveler')){
			t = orderInfo.traveler;
		}

		//如果保存的旅客信息多于预定的数量，截取预定的数量
		if(t.length > orderInfo.number){
			t = t.slice(0,orderInfo.number);
		}else{
			t = t.concat(new Array(orderInfo.number - t.length));
		}

		// 初始化模板
		var render = etpl.compile(tplTraveler);

		//渲染数据
		var text   = render({
			data : t,
			num  : orderInfo.number
		});

		$traveler.html(text);

		//如果选了旅客信息，显示
		if(!!global.sessionStorage.get('showTraverler')){
			global.sessionStorage.set('showTraverler',false);
			 $('.o-user').addClass('show');
		}

		$traveler.find('.contactType').off('click').on('click',function(){
				var $certType = $(this);

					//证件选择控件
					$.modal({
						title : '请选择证件类型',
						verticalButtons:true,
						extraClass : 'popup-certType',
						buttons : [
							{
								text: '身份证',
								close : true,
								onClick : function(){
									//_ts.param.certType = 1;
									$certType.attr('data-type',1);
									$certType.html('身份证');
								}
							},
							{
								text: '港澳通行证',
								close : true,
								onClick : function(){
									//_ts.param.certType = 4;
									$certType.attr('data-type',4);
									$certType.html('港澳通行证');
								}
							},
							{
								text: '学生证',
								close : true,
								onClick : function(){
									//_ts.param.certType = 6;
									$certType.attr('data-type',6);
									$certType.html('学生证');
								}
							},
							{
								text: '军官证',
								close : true,
								onClick : function(){
									//_ts.param.certType = 5;
									$certType.attr('data-type',5);
									$certType.html('军官证');
								}
							}
						]
					});
			});
	},
	//选择联系人，选择旅客
	selectTracerler : function(){
		var _ts = this;
		$('.o-contact').off('click').on('click','.friends-btn',function(){
			var orderInfo = global.sessionStorage.get('orderInfo');
				orderInfo.selectType = 'contact';

				//跳转页面保存旅客信息
				var traveler = _ts.saveTracerler();
				orderInfo.traveler = traveler;

				global.sessionStorage.set('orderInfo',orderInfo);

				$.router.load('./contacts.html');
		});
		$('.o-user').off('click').on('click','.friends-btn',function(){
			var orderInfo = global.sessionStorage.get('orderInfo');
				orderInfo.selectType = 'traveler';

				//跳转页面保存旅客信息
				var traveler = _ts.saveTracerler();
				orderInfo.traveler = traveler;

				global.sessionStorage.set('orderInfo',orderInfo);

				$.router.load('./contacts.html');
		});
	},
	//跳转页面或提交信息保存旅客信息,用于显示
	saveTracerler : function(){
		var $ouser = $('.o-user').find('.user-list').find('li');
		var arr    = [];

			for(var i = 0; i < $ouser.size(); i++){
				
				var name 	= $ouser.eq(i).find('input[name="contactName"]').val(),
					mobile  = $ouser.eq(i).find('input[name="contactPhone"]').val(),
					certType= $ouser.eq(i).find('.contactType').data('type'),
					certNumber = $ouser.eq(i).find('input[name="contactCertNumber"]').val(),
					certTypeTxt = $ouser.eq(i).find('.contactType').html(),
					sa      = {};

					sa.name = name;
                    sa.mobile = mobile;
                    sa.certType = certType;
                    sa.certNumber = certNumber;
                    sa.certTypeTxt = certTypeTxt;
                    
					if(Object.keys(sa).length > 0){
						arr.push(sa);
					}
			}

			return arr;
	},
	//保存旅客信息,用于提交数据
	saveTracerlerForSubmit : function(){
		var $ouser = $('.o-user').find('.user-list').find('li');
		var arr    = [];

			for(var i = 0; i < $ouser.size(); i++){
				
			var name = $ouser.eq(i).find('input[name="contactName"]').val(),
		        mobile = $ouser.eq(i).find('input[name="contactPhone"]').val(),
		        cardType = $ouser.eq(i).find('.contactType').data('type'),
		        cardNo = $ouser.eq(i).find('input[name="contactCertNumber"]').val(),
		        sa = {};

				sa.name = name;
                sa.phone = mobile;
                sa.cardType = cardType;
                sa.cardNo = cardNo;
                    
				if(Object.keys(sa).length > 0){
					arr.push(sa);
				}
			}

			return arr;
	},
	//旅客信息必填情况下验证
	verifyTracerlerRequire : function(){
		var _ts = this;
		var $ouser = $('.o-user').find('.user-list').find('li');
		var isVerify = true;

			for(var i = 0; i < $ouser.size(); i++){
				
				var name 	= $ouser.eq(i).find('input[name="contactName"]').val(),
					mobile  = $ouser.eq(i).find('input[name="contactPhone"]').val(),
					cardType= $ouser.eq(i).find('.contactType').data('type'),
					cardNo = $ouser.eq(i).find('input[name="contactCertNumber"]').val(),
					sa      = {};
				if (mobile !== '' || cardNo !== '' || name !== '') {
						//验证是否填写了旅客名字
						if(name !== ''){
							// 验证旅客名字长度
							if(name.length >=2 && name.length <= 10 ){
								// 验证旅客名字合法性
								if(name.match(/^(([a-zA-Z\u4e00-\u9fa5]|[-_]|[\s]){2,10})$/)){
									sa.name = name;

									// 如果旅客手机号码填写了
									if(mobile !== ''){
										if(mobile.match(/\d{11}$/)){
											sa.name  = name;
											sa.phone = mobile;

										}else{
											$.toast('请正确填写旅客的手机号码');
											isVerify = false;
											return false;
										}
									}else{
										$.toast('请填写旅客的手机号码');
										isVerify = false;
										return false;
									}

									// 如果旅客证件号码填写了
									if(cardNo !== ''){
										if(cardNo.match(/^[A-Za-z0-9]+$/)){

											//身份证认证信息
											if(cardType == 1){
												if(_ts.identityCodeValid(cardNo)){
													sa.cardType   = cardType;
													sa.cardNo = cardNo;
												}else{
													$.toast('请正确填写旅客的身份证号码');
													isVerify = false;
													return false;
												}
											}else{
												sa.cardType   = cardType;
												sa.cardNo = cardNo;
											}
										}else{
											$.toast('请正确填写旅客的证件号码');
											isVerify = false;
											return false;
										}
									}else{
										$.toast('请填写旅客的证件号码');
										isVerify = false;
										return false;
									}
								}else{
									$.toast('旅客名字只能是中英文或者空格组成');
									isVerify = false;
									return false;
								}
							}else{
								$.toast('旅客名字长度为2-10位');
								isVerify = false;
								return false;
							}
						}else{
							$.toast('请填写旅客名字');
							isVerify = false;
							return false;
						}
				} else {
		            $.toast('请填写旅客信息');
		            isVerify = false;
		            return false;
		        }
			}
			return isVerify;
	},
	verifyTracerler: function() {
	    var $ouser = $('.o-user').find('.user-list').find('li');
	    var arr = [];

	    for (var i = 0; i < $ouser.size(); i++) {
	        var name = $ouser.eq(i).find('input[name="contactName"]').val(),
	            mobile = $ouser.eq(i).find('input[name="contactPhone"]').val(),
	            cardType = $ouser.eq(i).find('.contactType').data('type'),
	            cardNo = $ouser.eq(i).find('input[name="contactCertNumber"]').val(),
	            sa = {};

	        // 如果用户填写了手机号码或者证件号码才去验证
	        if (mobile !== '' || cardNo !== '' || name !== '') {

	            //验证是否填写了旅客名字
	            if (name !== '') {
	                // 验证旅客名字长度
	                if (name.length >= 2 && name.length <= 10) {
	                    // 验证旅客名字合法性
	                    if (name.match(/^(([a-zA-Z\u4e00-\u9fa5]|[-_]|[\s]){2,10})$/)) {
	                        sa.name = name;
	                        // 如果旅客手机号码填写了
	                        if (mobile !== '') {
	                            if (mobile.match(/\d{11}$/)) {
	                                sa.name = name;
	                                sa.phone = mobile;

	                            } else {
	                                $.toast('请正确填写旅客' + (i + 1) + '的手机号码');
	                                return false;
	                            }
	                        } else {
	                            $.toast('请填写旅客' + (i + 1) + '的手机号码');
	                            return false;
	                        }

	                        // 如果旅客证件号码填写了
	                        if (cardNo !== '') {
	                            if (cardNo.match(/[0-9]+$/)) {
	                                sa.cardType = cardType;
	                                sa.cardNo = cardNo;
	                            } else {
	                                $.toast('请正确填写旅客' + (i + 1) + '的证件号码');
	                                return false;
	                            }
	                        }

	                    } else {
	                        $.toast('旅客' + (i + 1) + '名字只能是中英文或者空格组成');
	                        return false;
	                    }
	                } else {
	                    $.toast('旅客' + (i + 1) + '名字长度为2-10位');
	                    return false;
	                }
	            } else {
	                $.toast('请填写旅客' + (i + 1) + '名字');
	                return false;
	            }

	            // if()
	        }

	        if (Object.keys(sa).length > 0) {
	            arr.push(sa);
	        }
	    }

	    console.log(arr);
	    return arr;
	},
	//身份证认证信息
    identityCodeValid : function (no) { 
            var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
            var pass= true;
            //格式错误
            if(!no || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(no)){
                pass = false;
            }else if(!city[no.substr(0,2)]){
                pass = false;
            }else{
                //18位身份证需要验证最后一位校验位
                if(no.length == 18){
                    no = no.split('');
                    //加权因子
                    var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
                    //校验位
                    var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
                    var sum = 0;
                    var ai = 0;
                    var wi = 0;
                    for (var i = 0; i < 17; i++)
                    {
                        ai = no[i];
                        wi = factor[i];
                        sum += ai * wi;
                    }
                    var last = parity[sum % 11];
                    //校验位错误
                    if(parity[sum % 11] != no[17]){
                        pass =false;
                    }
                }
            }
            return pass;
    },
	addFilter : function(){
		etpl.addFilter('travelerIndex',function(s){
			return parseInt(s,10) +1;
		});
	},
	setSEO : function(title, keywords, description, isOg){
		if($.device.iphone){
			//动态为ios系统修改标题hack
			var body = document.getElementsByTagName('body')[0];
		    document.title = title;
		    var iframe = document.createElement("iframe");
		    iframe.style.display="none";
		    iframe.setAttribute("src", "http://named.cn/page/take/img/icon_phone.png");
		    var d = function() {
		      setTimeout(function() {
		        iframe.removeEventListener('load', d);
		        document.body.removeChild(iframe);
		      }, 0);
		    };
		    iframe.addEventListener('load', d);
		    document.body.appendChild(iframe);
		}else{
			document.title = title;
		}
		
		$('meta[name="Keywords"]').attr('content', keywords);
		$('meta[name="Description"]').attr('content', description);
		if(isOg){ //是否需要设置分享
			$('meta[name="ogTitle"]').attr('content', title);
			$('meta[name="ogDesc"]').attr('content', description);
			$('meta[name="ogFlag"]').attr('content', keywords);
		}
	}
};

var KN_OrderContacts = {
	arr : {},
	init : function(){
		this.getTraverler();
	},
	getTraverler : function(){
		var _ts = this;
		var url = global.config.serverBase + 'api/usercommon/getList.json';
		var data = {
			page_num : 1,
			page_size : 20
		};

		$.ajax({
			url : url,
			type : 'get',
			data : data,
			dataType: 'json',
			success:function(rs){
				if(rs.code === '100'){
					_ts.render(rs.userCommonContactList);
				}else if(rs.code === '403'){
					$.alert('你还未登陆哦，请先登陆！',function(){
						location.href = global.config.loginHref;
					});
				}else if(rs.code === '102'){
					_ts.render([]);
				}else{
					$.toast(rs.msg);
				}
			}
		});
	},
	render : function(data){
		var $list = $('.user-list').find('ul');
		var html  = '';

		for(var i = 0 ; i< data.length; i++){	
			html +='<li data-index="'+i+'" data-ucode="'+data[i].userCode+'" data-certType="'+data[i].certType+'" data-certNumber="'+data[i].certNumber+'" data-certTypeTxt="'+ this.formatCertType(data[i].certType) +'">';
			html += '<p><span>'+data[i].name+'</span><em>'+data[i].mobile+'</em></p>';

			if(data[i].certType > 0){
				html += '<p class="certType"><span>'+this.formatCertType(data[i].certType)+'</span><em>'+data[i].certNumber+'</em><em</p>';
			}

			html += '</li>';
		}
		$list.html(html);

		$('.infinite-scroll-preloader').hide();
		$('.sure-btn').show();
		this.selectTracerler();
	},
	selectTracerler : function(){
		var _ts 	  = this;
		var orderInfo = global.sessionStorage.get('orderInfo');
		var total     = 0;
		var arr 	  = {};
		var temp      = 0; //保存已选择数量
		var $li 	  = $('.user-list').find('li');
			if(orderInfo.selectType === 'contact'){
				total = 1;
			}else{
				total = orderInfo.number;
			}	

			$li.on('click',function(){
				var name    	= $(this).find('span').html(),
					mobile  	= $(this).find('em').html(),
					index   	= $(this).attr('data-index'),
					certType 	= $(this).attr('data-certtype'),
					usercode    = $(this).attr('data-ucode'),
					certTypeTxt = $(this).attr('data-certtypetxt'),
					certNumber  = $(this).attr('data-certnumber');

					if($(this).hasClass('selected')){
						$(this).removeClass('selected');
						delete arr[index];
						temp--;
					}else{

						if(temp >= total){
							$.toast('你最多只能选择'+ total +'个哦！');
							return false;
						}

						arr[index] = {
							name : name,
							mobile : mobile,
							usercode : usercode,
							certType : certType,
							certNumber : certNumber,
							certTypeTxt : certTypeTxt
						};
						temp++;
						$(this).addClass('selected');
					}
					_ts.arr = arr;
			});

			this.sureBtn();
	},
	sureBtn : function(){
		var _ts  = this;
		var $btn = $('.sure-btn');
			$btn.on('click',function(){
				//console.log(_ts.arr);
				if(Object.keys(_ts.arr).length > 0){
					var orderInfo = global.sessionStorage.get('orderInfo');
					var key  	  = '';
						if(orderInfo.selectType == 'contact'){
							for(key in _ts.arr){
								orderInfo.contact.name = _ts.arr[key].name;
								orderInfo.contact.mobile = _ts.arr[key].mobile;
							}
						}else{
							orderInfo.traveler = [];
							for(key in _ts.arr){
								var o   = _ts.arr[key];
								var tem = {
										'name' : o.name,
										'mobile' : o.mobile,
										'usercode' : o.usercode
								};  

									if(o.certType > 0){
										tem.certType = o.certType;
										tem.certNumber = o.certNumber;
										tem.certTypeTxt = o.certTypeTxt;
									}

									orderInfo.traveler.push(tem);
							}
						}
						// console.log(orderInfo);
						global.sessionStorage.set('orderInfo',orderInfo);

						global.sessionStorage.set('showTraverler',true);

						// console.log(global.sessionStorage.get('orderInfo'));
						$.router.load('./orderInfo.html');
				}else{	
					$.toast('请选择联系人');
				}
			});
	},
	formatCertType:function(s){
		var s1 = parseInt(s,10);
		var v = '';

		switch(s1){
			case 1 : v = '身份证';break;
			case 2 : v = '护照';break;
			case 3 : v = '其他';break;
			case 4 : v = '港澳通行证';break;
			case 5 : v = '军官证'; break;
			case 6 : v = '学生证'; break;
			default : 
				v = '';
		}

		return v ;
	}
};


// 路由load
$(document).on("pageInit",'#payfillOrder' ,function(e, pageId, $page) {
	// var s = {"limitMinNum":5,"spuCode":"6614577609782578766","shopCode":"4014576907211892974","name":"醉在春光烂漫时金川-丹巴-色达-海螺沟梨花主题七日之旅","number":5,"login":false,"proList":[{"specId":89,"specName":"成员","productSpecItemList":[{"specItemId":117,"specItemName":"儿童"},{"specItemId":114,"specItemName":"成人"}]},{"specId":93,"specName":"出游天数","productSpecItemList":[{"specItemId":119,"specItemName":"七天游"},{"specItemId":120,"specItemName":"日历库存"}]}],"selectedItemList":[null,null],"skuList":[{"stockType":1,"skuCode":"6814577609783319537","value":[89,117,93,119]},{"stockType":2,"skuCode":"6814577609783951486","value":[89,117,93,120]},{"stockType":2,"skuCode":"6814577609783425540","value":[89,114,93,120]},{"stockType":1,"skuCode":"6814577609783057079","value":[89,114,93,119]}],"skuCode":null,"contact":{}};

	// global.sessionStorage.set('orderInfo',s);
	KN_Order.init();
 });

$(document).on("pageInit",'#payOrderContacts' ,function(e, pageId, $page) {
	KN_OrderContacts.init();
 });
},{"../common/etpl.js":1,"../common/global.js":2,"../common/picker.date.js":3,"../common/picker.js":4,"./tpl/proItem.html":6,"./tpl/traveler.html":7}],6:[function(require,module,exports){
module.exports="<!-- for: ${data} as ${item},${index} --><div class=\"o-type-item\" data-proId=\'${item.specId}\' data-index=\"${index}\">	<h5>${item.specName}</h5>	<p>		<!-- for: ${item.productSpecItemList} as ${pitem},${pindex} -->				<span data-itemId=\'${pitem.specItemId}\'>${pitem.specItemName}</span>		<!-- /for-->	</p></div><!-- /for -->"
},{}],7:[function(require,module,exports){
module.exports="<!-- for: ${data} as ${item},${index} --><li>	<p class=\"u-t\">旅客${index|travelerIndex}</p>	<p class=\"u-cn\"><input type=\"text\" name=\"contactName\" placeholder=\"请输入名字\" value=\"${item.name}\" maxlength=\"10\"></p>	<p class=\"u-cp\"><input type=\"text\" name=\"contactPhone\" placeholder=\"请输入手机号码\" maxlength=\"11\" value=\"${item.mobile}\"></p>	<p class=\"u-ccard\">		<!-- if:${item.certType} -->		<span data-type=\"${item.certType}\" class=\"contactType\">${item.certTypeTxt}</span>		<!-- else -->		<span data-type=\"1\" class=\"contactType\">身份证</span>		<!-- /if -->		<input type=\"tel\" name=\"contactCertNumber\" placeholder=\"请输入证件号码\" maxlength=\"18\" value=\"${item.certNumber}\">	</p></li><!-- /for-->"
},{}]},{},[5]);
