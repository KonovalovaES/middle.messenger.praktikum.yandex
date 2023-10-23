const wr=(t,e)=>{const r=document.querySelector(t);if(r!==null){const s=e.getContent();s&&r.appendChild(s)}return r},Cr=(t,e)=>t===e;class Sr{constructor(e,r,s){this._block=null,this._pathname=e,this._blockClass=r,this._props=s}navigate(e){this.match(e)&&this.render()}leave(){this._block&&(this._block.destroy(),this._block=null)}match(e){return Cr(e,this._pathname)}render(){this._block=new this._blockClass(this._props),wr(this._props.rootQuery,this._block)}get path(){return this._pathname}}class Pr{constructor(e){this.routes=[],this.history=window.history,this._currentRoute=null,this._rootQuery=e}use(e,r,s){const h=new Sr(e,r,{...s,rootQuery:this._rootQuery});return this.routes.push(h),this}start(){window.onpopstate=e=>{var r;return this._onRoute((r=e.currentTarget)==null?void 0:r.location.pathname)},this._onRoute(window.location.pathname)}_onRoute(e){const r=this.getRoute(e);r&&(this._currentRoute&&this._currentRoute.leave(),this._currentRoute=r,r.render())}go(e){this.history.pushState({},"",e),this._onRoute(e)}getRoute(e){const r=this.routes.find(s=>s.match(e));return r||this.routes.find(s=>s.match("/404"))}get route(){return this._currentRoute}}const F=new Pr("#app");function br(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var De={exports:{}},Te={exports:{}},V={},A={};A.__esModule=!0;A.extend=Rt;A.indexOf=Ir;A.escapeExpression=Or;A.isEmpty=Ar;A.createFrame=Er;A.blockParams=Nr;A.appendContextPath=Br;var Mr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},xr=/[&<>"'`=]/g,kr=/[&<>"'`=]/;function Lr(t){return Mr[t]}function Rt(t){for(var e=1;e<arguments.length;e++)for(var r in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],r)&&(t[r]=arguments[e][r]);return t}var lt=Object.prototype.toString;A.toString=lt;var Re=function(e){return typeof e=="function"};Re(/x/)&&(A.isFunction=Re=function(t){return typeof t=="function"&&lt.call(t)==="[object Function]"});A.isFunction=Re;var Ft=Array.isArray||function(t){return t&&typeof t=="object"?lt.call(t)==="[object Array]":!1};A.isArray=Ft;function Ir(t,e){for(var r=0,s=t.length;r<s;r++)if(t[r]===e)return r;return-1}function Or(t){if(typeof t!="string"){if(t&&t.toHTML)return t.toHTML();if(t==null)return"";if(!t)return t+"";t=""+t}return kr.test(t)?t.replace(xr,Lr):t}function Ar(t){return!t&&t!==0?!0:!!(Ft(t)&&t.length===0)}function Er(t){var e=Rt({},t);return e._parent=t,e}function Nr(t,e){return t.path=e,t}function Br(t,e){return(t?t+".":"")+e}var Fe={exports:{}};(function(t,e){e.__esModule=!0;var r=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function s(h,p){var d=p&&p.loc,u=void 0,a=void 0,c=void 0,o=void 0;d&&(u=d.start.line,a=d.end.line,c=d.start.column,o=d.end.column,h+=" - "+u+":"+c);for(var f=Error.prototype.constructor.call(this,h),n=0;n<r.length;n++)this[r[n]]=f[r[n]];Error.captureStackTrace&&Error.captureStackTrace(this,s);try{d&&(this.lineNumber=u,this.endLineNumber=a,Object.defineProperty?(Object.defineProperty(this,"column",{value:c,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:o,enumerable:!0})):(this.column=c,this.endColumn=o))}catch{}}s.prototype=new Error,e.default=s,t.exports=e.default})(Fe,Fe.exports);var W=Fe.exports,ce={},Ue={exports:{}};(function(t,e){e.__esModule=!0;var r=A;e.default=function(s){s.registerHelper("blockHelperMissing",function(h,p){var d=p.inverse,u=p.fn;if(h===!0)return u(this);if(h===!1||h==null)return d(this);if(r.isArray(h))return h.length>0?(p.ids&&(p.ids=[p.name]),s.helpers.each(h,p)):d(this);if(p.data&&p.ids){var a=r.createFrame(p.data);a.contextPath=r.appendContextPath(p.data.contextPath,p.name),p={data:a}}return u(h,p)})},t.exports=e.default})(Ue,Ue.exports);var Dr=Ue.exports,He={exports:{}};(function(t,e){e.__esModule=!0;function r(d){return d&&d.__esModule?d:{default:d}}var s=A,h=W,p=r(h);e.default=function(d){d.registerHelper("each",function(u,a){if(!a)throw new p.default("Must pass iterator to #each");var c=a.fn,o=a.inverse,f=0,n="",l=void 0,i=void 0;a.data&&a.ids&&(i=s.appendContextPath(a.data.contextPath,a.ids[0])+"."),s.isFunction(u)&&(u=u.call(this)),a.data&&(l=s.createFrame(a.data));function m(g,y,M){l&&(l.key=g,l.index=y,l.first=y===0,l.last=!!M,i&&(l.contextPath=i+g)),n=n+c(u[g],{data:l,blockParams:s.blockParams([u[g],g],[i+g,null])})}if(u&&typeof u=="object")if(s.isArray(u))for(var v=u.length;f<v;f++)f in u&&m(f,f,f===u.length-1);else if(typeof Symbol=="function"&&u[Symbol.iterator]){for(var w=[],_=u[Symbol.iterator](),C=_.next();!C.done;C=_.next())w.push(C.value);u=w;for(var v=u.length;f<v;f++)m(f,f,f===u.length-1)}else(function(){var g=void 0;Object.keys(u).forEach(function(y){g!==void 0&&m(g,f-1),g=y,f++}),g!==void 0&&m(g,f-1,!0)})();return f===0&&(n=o(this)),n})},t.exports=e.default})(He,He.exports);var Tr=He.exports,Ve={exports:{}};(function(t,e){e.__esModule=!0;function r(p){return p&&p.__esModule?p:{default:p}}var s=W,h=r(s);e.default=function(p){p.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new h.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},t.exports=e.default})(Ve,Ve.exports);var Rr=Ve.exports,qe={exports:{}};(function(t,e){e.__esModule=!0;function r(d){return d&&d.__esModule?d:{default:d}}var s=A,h=W,p=r(h);e.default=function(d){d.registerHelper("if",function(u,a){if(arguments.length!=2)throw new p.default("#if requires exactly one argument");return s.isFunction(u)&&(u=u.call(this)),!a.hash.includeZero&&!u||s.isEmpty(u)?a.inverse(this):a.fn(this)}),d.registerHelper("unless",function(u,a){if(arguments.length!=2)throw new p.default("#unless requires exactly one argument");return d.helpers.if.call(this,u,{fn:a.inverse,inverse:a.fn,hash:a.hash})})},t.exports=e.default})(qe,qe.exports);var Fr=qe.exports,We={exports:{}};(function(t,e){e.__esModule=!0,e.default=function(r){r.registerHelper("log",function(){for(var s=[void 0],h=arguments[arguments.length-1],p=0;p<arguments.length-1;p++)s.push(arguments[p]);var d=1;h.hash.level!=null?d=h.hash.level:h.data&&h.data.level!=null&&(d=h.data.level),s[0]=d,r.log.apply(r,s)})},t.exports=e.default})(We,We.exports);var Ur=We.exports,ze={exports:{}};(function(t,e){e.__esModule=!0,e.default=function(r){r.registerHelper("lookup",function(s,h,p){return s&&p.lookupProperty(s,h)})},t.exports=e.default})(ze,ze.exports);var Hr=ze.exports,Ge={exports:{}};(function(t,e){e.__esModule=!0;function r(d){return d&&d.__esModule?d:{default:d}}var s=A,h=W,p=r(h);e.default=function(d){d.registerHelper("with",function(u,a){if(arguments.length!=2)throw new p.default("#with requires exactly one argument");s.isFunction(u)&&(u=u.call(this));var c=a.fn;if(s.isEmpty(u))return a.inverse(this);var o=a.data;return a.data&&a.ids&&(o=s.createFrame(a.data),o.contextPath=s.appendContextPath(a.data.contextPath,a.ids[0])),c(u,{data:o,blockParams:s.blockParams([u],[o&&o.contextPath])})})},t.exports=e.default})(Ge,Ge.exports);var Vr=Ge.exports;ce.__esModule=!0;ce.registerDefaultHelpers=rs;ce.moveHelperToHooks=ss;function Z(t){return t&&t.__esModule?t:{default:t}}var qr=Dr,Wr=Z(qr),zr=Tr,Gr=Z(zr),$r=Rr,Kr=Z($r),Jr=Fr,Qr=Z(Jr),jr=Ur,Yr=Z(jr),Zr=Hr,Xr=Z(Zr),es=Vr,ts=Z(es);function rs(t){Wr.default(t),Gr.default(t),Kr.default(t),Qr.default(t),Yr.default(t),Xr.default(t),ts.default(t)}function ss(t,e,r){t.helpers[e]&&(t.hooks[e]=t.helpers[e],r||delete t.helpers[e])}var ct={},$e={exports:{}};(function(t,e){e.__esModule=!0;var r=A;e.default=function(s){s.registerDecorator("inline",function(h,p,d,u){var a=h;return p.partials||(p.partials={},a=function(c,o){var f=d.partials;d.partials=r.extend({},f,p.partials);var n=h(c,o);return d.partials=f,n}),p.partials[u.args[0]]=u.fn,a})},t.exports=e.default})($e,$e.exports);var ns=$e.exports;ct.__esModule=!0;ct.registerDefaultDecorators=ls;function is(t){return t&&t.__esModule?t:{default:t}}var as=ns,os=is(as);function ls(t){os.default(t)}var Ke={exports:{}};(function(t,e){e.__esModule=!0;var r=A,s={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(p){if(typeof p=="string"){var d=r.indexOf(s.methodMap,p.toLowerCase());d>=0?p=d:p=parseInt(p,10)}return p},log:function(p){if(p=s.lookupLevel(p),typeof console<"u"&&s.lookupLevel(s.level)<=p){var d=s.methodMap[p];console[d]||(d="log");for(var u=arguments.length,a=Array(u>1?u-1:0),c=1;c<u;c++)a[c-1]=arguments[c];console[d].apply(console,a)}}};e.default=s,t.exports=e.default})(Ke,Ke.exports);var Ut=Ke.exports,te={},ut={};ut.__esModule=!0;ut.createNewLookupObject=us;var cs=A;function us(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return cs.extend.apply(void 0,[Object.create(null)].concat(e))}te.__esModule=!0;te.createProtoAccessControl=fs;te.resultIsAllowed=ms;te.resetLoggedProperties=vs;function hs(t){return t&&t.__esModule?t:{default:t}}var vt=ut,ps=Ut,ds=hs(ps),Ce=Object.create(null);function fs(t){var e=Object.create(null);e.constructor=!1,e.__defineGetter__=!1,e.__defineSetter__=!1,e.__lookupGetter__=!1;var r=Object.create(null);return r.__proto__=!1,{properties:{whitelist:vt.createNewLookupObject(r,t.allowedProtoProperties),defaultValue:t.allowProtoPropertiesByDefault},methods:{whitelist:vt.createNewLookupObject(e,t.allowedProtoMethods),defaultValue:t.allowProtoMethodsByDefault}}}function ms(t,e,r){return _t(typeof t=="function"?e.methods:e.properties,r)}function _t(t,e){return t.whitelist[e]!==void 0?t.whitelist[e]===!0:t.defaultValue!==void 0?t.defaultValue:(gs(e),!1)}function gs(t){Ce[t]!==!0&&(Ce[t]=!0,ds.default.log("error",'Handlebars: Access has been denied to resolve the property "'+t+`" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`))}function vs(){Object.keys(Ce).forEach(function(t){delete Ce[t]})}V.__esModule=!0;V.HandlebarsEnvironment=Je;function Ht(t){return t&&t.__esModule?t:{default:t}}var Y=A,_s=W,xe=Ht(_s),ys=ce,ws=ct,Cs=Ut,Se=Ht(Cs),Ss=te,Ps="4.7.8";V.VERSION=Ps;var bs=8;V.COMPILER_REVISION=bs;var Ms=7;V.LAST_COMPATIBLE_COMPILER_REVISION=Ms;var xs={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};V.REVISION_CHANGES=xs;var ke="[object Object]";function Je(t,e,r){this.helpers=t||{},this.partials=e||{},this.decorators=r||{},ys.registerDefaultHelpers(this),ws.registerDefaultDecorators(this)}Je.prototype={constructor:Je,logger:Se.default,log:Se.default.log,registerHelper:function(e,r){if(Y.toString.call(e)===ke){if(r)throw new xe.default("Arg not supported with multiple helpers");Y.extend(this.helpers,e)}else this.helpers[e]=r},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,r){if(Y.toString.call(e)===ke)Y.extend(this.partials,e);else{if(typeof r>"u")throw new xe.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=r}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,r){if(Y.toString.call(e)===ke){if(r)throw new xe.default("Arg not supported with multiple decorators");Y.extend(this.decorators,e)}else this.decorators[e]=r},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){Ss.resetLoggedProperties()}};var ks=Se.default.log;V.log=ks;V.createFrame=Y.createFrame;V.logger=Se.default;var Qe={exports:{}};(function(t,e){e.__esModule=!0;function r(s){this.string=s}r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},e.default=r,t.exports=e.default})(Qe,Qe.exports);var Ls=Qe.exports,j={},ht={};ht.__esModule=!0;ht.wrapHelper=Is;function Is(t,e){if(typeof t!="function")return t;var r=function(){var h=arguments[arguments.length-1];return arguments[arguments.length-1]=e(h),t.apply(this,arguments)};return r}j.__esModule=!0;j.checkRevision=Ds;j.template=Ts;j.wrapProgram=_e;j.resolvePartial=Rs;j.invokePartial=Fs;j.noop=Vt;function Os(t){return t&&t.__esModule?t:{default:t}}function As(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}var Es=A,G=As(Es),Ns=W,$=Os(Ns),K=V,yt=ce,Bs=ht,wt=te;function Ds(t){var e=t&&t[0]||1,r=K.COMPILER_REVISION;if(!(e>=K.LAST_COMPATIBLE_COMPILER_REVISION&&e<=K.COMPILER_REVISION))if(e<K.LAST_COMPATIBLE_COMPILER_REVISION){var s=K.REVISION_CHANGES[r],h=K.REVISION_CHANGES[e];throw new $.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+s+") or downgrade your runtime to an older version ("+h+").")}else throw new $.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}function Ts(t,e){if(!e)throw new $.default("No environment passed to template");if(!t||!t.main)throw new $.default("Unknown template object: "+typeof t);t.main.decorator=t.main_d,e.VM.checkRevision(t.compiler);var r=t.compiler&&t.compiler[0]===7;function s(d,u,a){a.hash&&(u=G.extend({},u,a.hash),a.ids&&(a.ids[0]=!0)),d=e.VM.resolvePartial.call(this,d,u,a);var c=G.extend({},a,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),o=e.VM.invokePartial.call(this,d,u,c);if(o==null&&e.compile&&(a.partials[a.name]=e.compile(d,t.compilerOptions,e),o=a.partials[a.name](u,c)),o!=null){if(a.indent){for(var f=o.split(`
`),n=0,l=f.length;n<l&&!(!f[n]&&n+1===l);n++)f[n]=a.indent+f[n];o=f.join(`
`)}return o}else throw new $.default("The partial "+a.name+" could not be compiled when running in runtime-only mode")}var h={strict:function(u,a,c){if(!u||!(a in u))throw new $.default('"'+a+'" not defined in '+u,{loc:c});return h.lookupProperty(u,a)},lookupProperty:function(u,a){var c=u[a];if(c==null||Object.prototype.hasOwnProperty.call(u,a)||wt.resultIsAllowed(c,h.protoAccessControl,a))return c},lookup:function(u,a){for(var c=u.length,o=0;o<c;o++){var f=u[o]&&h.lookupProperty(u[o],a);if(f!=null)return u[o][a]}},lambda:function(u,a){return typeof u=="function"?u.call(a):u},escapeExpression:G.escapeExpression,invokePartial:s,fn:function(u){var a=t[u];return a.decorator=t[u+"_d"],a},programs:[],program:function(u,a,c,o,f){var n=this.programs[u],l=this.fn(u);return a||f||o||c?n=_e(this,u,l,a,c,o,f):n||(n=this.programs[u]=_e(this,u,l)),n},data:function(u,a){for(;u&&a--;)u=u._parent;return u},mergeIfNeeded:function(u,a){var c=u||a;return u&&a&&u!==a&&(c=G.extend({},a,u)),c},nullContext:Object.seal({}),noop:e.VM.noop,compilerInfo:t.compiler};function p(d){var u=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],a=u.data;p._setup(u),!u.partial&&t.useData&&(a=Us(d,a));var c=void 0,o=t.useBlockParams?[]:void 0;t.useDepths&&(u.depths?c=d!=u.depths[0]?[d].concat(u.depths):u.depths:c=[d]);function f(n){return""+t.main(h,n,h.helpers,h.partials,a,o,c)}return f=qt(t.main,f,h,u.depths||[],a,o),f(d,u)}return p.isTop=!0,p._setup=function(d){if(d.partial)h.protoAccessControl=d.protoAccessControl,h.helpers=d.helpers,h.partials=d.partials,h.decorators=d.decorators,h.hooks=d.hooks;else{var u=G.extend({},e.helpers,d.helpers);Hs(u,h),h.helpers=u,t.usePartial&&(h.partials=h.mergeIfNeeded(d.partials,e.partials)),(t.usePartial||t.useDecorators)&&(h.decorators=G.extend({},e.decorators,d.decorators)),h.hooks={},h.protoAccessControl=wt.createProtoAccessControl(d);var a=d.allowCallsToHelperMissing||r;yt.moveHelperToHooks(h,"helperMissing",a),yt.moveHelperToHooks(h,"blockHelperMissing",a)}},p._child=function(d,u,a,c){if(t.useBlockParams&&!a)throw new $.default("must pass block params");if(t.useDepths&&!c)throw new $.default("must pass parent depths");return _e(h,d,t[d],u,0,a,c)},p}function _e(t,e,r,s,h,p,d){function u(a){var c=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],o=d;return d&&a!=d[0]&&!(a===t.nullContext&&d[0]===null)&&(o=[a].concat(d)),r(t,a,t.helpers,t.partials,c.data||s,p&&[c.blockParams].concat(p),o)}return u=qt(r,u,t,d,s,p),u.program=e,u.depth=d?d.length:0,u.blockParams=h||0,u}function Rs(t,e,r){return t?!t.call&&!r.name&&(r.name=t,t=r.partials[t]):r.name==="@partial-block"?t=r.data["partial-block"]:t=r.partials[r.name],t}function Fs(t,e,r){var s=r.data&&r.data["partial-block"];r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var h=void 0;if(r.fn&&r.fn!==Vt&&function(){r.data=K.createFrame(r.data);var p=r.fn;h=r.data["partial-block"]=function(u){var a=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];return a.data=K.createFrame(a.data),a.data["partial-block"]=s,p(u,a)},p.partials&&(r.partials=G.extend({},r.partials,p.partials))}(),t===void 0&&h&&(t=h),t===void 0)throw new $.default("The partial "+r.name+" could not be found");if(t instanceof Function)return t(e,r)}function Vt(){return""}function Us(t,e){return(!e||!("root"in e))&&(e=e?K.createFrame(e):{},e.root=t),e}function qt(t,e,r,s,h,p){if(t.decorator){var d={};e=t.decorator(e,d,r,s&&s[0],h,p,s),G.extend(e,d)}return e}function Hs(t,e){Object.keys(t).forEach(function(r){var s=t[r];t[r]=Vs(s,e)})}function Vs(t,e){var r=e.lookupProperty;return Bs.wrapHelper(t,function(s){return G.extend({lookupProperty:r},s)})}var je={exports:{}};(function(t,e){e.__esModule=!0,e.default=function(r){(function(){typeof globalThis!="object"&&(Object.prototype.__defineGetter__("__magic__",function(){return this}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__)})();var s=globalThis.Handlebars;r.noConflict=function(){return globalThis.Handlebars===r&&(globalThis.Handlebars=s),r}},t.exports=e.default})(je,je.exports);var Wt=je.exports;(function(t,e){e.__esModule=!0;function r(_){return _&&_.__esModule?_:{default:_}}function s(_){if(_&&_.__esModule)return _;var C={};if(_!=null)for(var g in _)Object.prototype.hasOwnProperty.call(_,g)&&(C[g]=_[g]);return C.default=_,C}var h=V,p=s(h),d=Ls,u=r(d),a=W,c=r(a),o=A,f=s(o),n=j,l=s(n),i=Wt,m=r(i);function v(){var _=new p.HandlebarsEnvironment;return f.extend(_,p),_.SafeString=u.default,_.Exception=c.default,_.Utils=f,_.escapeExpression=f.escapeExpression,_.VM=l,_.template=function(C){return l.template(C,_)},_}var w=v();w.create=v,m.default(w),w.default=w,e.default=w,t.exports=e.default})(Te,Te.exports);var qs=Te.exports,Ye={exports:{}};(function(t,e){e.__esModule=!0;var r={helpers:{helperExpression:function(h){return h.type==="SubExpression"||(h.type==="MustacheStatement"||h.type==="BlockStatement")&&!!(h.params&&h.params.length||h.hash)},scopedId:function(h){return/^\.|this\b/.test(h.original)},simpleId:function(h){return h.parts.length===1&&!r.helpers.scopedId(h)&&!h.depth}}};e.default=r,t.exports=e.default})(Ye,Ye.exports);var zt=Ye.exports,ue={},Ze={exports:{}};(function(t,e){e.__esModule=!0;var r=function(){var s={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(u,a,c,o,f,n,l){var i=n.length-1;switch(f){case 1:return n[i-1];case 2:this.$=o.prepareProgram(n[i]);break;case 3:this.$=n[i];break;case 4:this.$=n[i];break;case 5:this.$=n[i];break;case 6:this.$=n[i];break;case 7:this.$=n[i];break;case 8:this.$=n[i];break;case 9:this.$={type:"CommentStatement",value:o.stripComment(n[i]),strip:o.stripFlags(n[i],n[i]),loc:o.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:n[i],value:n[i],loc:o.locInfo(this._$)};break;case 11:this.$=o.prepareRawBlock(n[i-2],n[i-1],n[i],this._$);break;case 12:this.$={path:n[i-3],params:n[i-2],hash:n[i-1]};break;case 13:this.$=o.prepareBlock(n[i-3],n[i-2],n[i-1],n[i],!1,this._$);break;case 14:this.$=o.prepareBlock(n[i-3],n[i-2],n[i-1],n[i],!0,this._$);break;case 15:this.$={open:n[i-5],path:n[i-4],params:n[i-3],hash:n[i-2],blockParams:n[i-1],strip:o.stripFlags(n[i-5],n[i])};break;case 16:this.$={path:n[i-4],params:n[i-3],hash:n[i-2],blockParams:n[i-1],strip:o.stripFlags(n[i-5],n[i])};break;case 17:this.$={path:n[i-4],params:n[i-3],hash:n[i-2],blockParams:n[i-1],strip:o.stripFlags(n[i-5],n[i])};break;case 18:this.$={strip:o.stripFlags(n[i-1],n[i-1]),program:n[i]};break;case 19:var m=o.prepareBlock(n[i-2],n[i-1],n[i],n[i],!1,this._$),v=o.prepareProgram([m],n[i-1].loc);v.chained=!0,this.$={strip:n[i-2].strip,program:v,chain:!0};break;case 20:this.$=n[i];break;case 21:this.$={path:n[i-1],strip:o.stripFlags(n[i-2],n[i])};break;case 22:this.$=o.prepareMustache(n[i-3],n[i-2],n[i-1],n[i-4],o.stripFlags(n[i-4],n[i]),this._$);break;case 23:this.$=o.prepareMustache(n[i-3],n[i-2],n[i-1],n[i-4],o.stripFlags(n[i-4],n[i]),this._$);break;case 24:this.$={type:"PartialStatement",name:n[i-3],params:n[i-2],hash:n[i-1],indent:"",strip:o.stripFlags(n[i-4],n[i]),loc:o.locInfo(this._$)};break;case 25:this.$=o.preparePartialBlock(n[i-2],n[i-1],n[i],this._$);break;case 26:this.$={path:n[i-3],params:n[i-2],hash:n[i-1],strip:o.stripFlags(n[i-4],n[i])};break;case 27:this.$=n[i];break;case 28:this.$=n[i];break;case 29:this.$={type:"SubExpression",path:n[i-3],params:n[i-2],hash:n[i-1],loc:o.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:n[i],loc:o.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:o.id(n[i-2]),value:n[i],loc:o.locInfo(this._$)};break;case 32:this.$=o.id(n[i-1]);break;case 33:this.$=n[i];break;case 34:this.$=n[i];break;case 35:this.$={type:"StringLiteral",value:n[i],original:n[i],loc:o.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(n[i]),original:Number(n[i]),loc:o.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:n[i]==="true",original:n[i]==="true",loc:o.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:o.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:o.locInfo(this._$)};break;case 40:this.$=n[i];break;case 41:this.$=n[i];break;case 42:this.$=o.preparePath(!0,n[i],this._$);break;case 43:this.$=o.preparePath(!1,n[i],this._$);break;case 44:n[i-2].push({part:o.id(n[i]),original:n[i],separator:n[i-1]}),this.$=n[i-2];break;case 45:this.$=[{part:o.id(n[i]),original:n[i]}];break;case 46:this.$=[];break;case 47:n[i-1].push(n[i]);break;case 48:this.$=[];break;case 49:n[i-1].push(n[i]);break;case 50:this.$=[];break;case 51:n[i-1].push(n[i]);break;case 58:this.$=[];break;case 59:n[i-1].push(n[i]);break;case 64:this.$=[];break;case 65:n[i-1].push(n[i]);break;case 70:this.$=[];break;case 71:n[i-1].push(n[i]);break;case 78:this.$=[];break;case 79:n[i-1].push(n[i]);break;case 82:this.$=[];break;case 83:n[i-1].push(n[i]);break;case 86:this.$=[];break;case 87:n[i-1].push(n[i]);break;case 90:this.$=[];break;case 91:n[i-1].push(n[i]);break;case 94:this.$=[];break;case 95:n[i-1].push(n[i]);break;case 98:this.$=[n[i]];break;case 99:n[i-1].push(n[i]);break;case 100:this.$=[n[i]];break;case 101:n[i-1].push(n[i]);break}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(u,a){throw new Error(u)},parse:function(u){var a=this,c=[0],o=[null],f=[],n=this.table,l="",i=0,m=0;this.lexer.setInput(u),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var v=this.lexer.yylloc;f.push(v);var w=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function _(){var ee;return ee=a.lexer.lex()||1,typeof ee!="number"&&(ee=a.symbols_[ee]||ee),ee}for(var C,g,y,M,P={},L,E,I,T;;){if(g=c[c.length-1],this.defaultActions[g]?y=this.defaultActions[g]:((C===null||typeof C>"u")&&(C=_()),y=n[g]&&n[g][C]),typeof y>"u"||!y.length||!y[0]){var X="";{T=[];for(L in n[g])this.terminals_[L]&&L>2&&T.push("'"+this.terminals_[L]+"'");this.lexer.showPosition?X="Parse error on line "+(i+1)+`:
`+this.lexer.showPosition()+`
Expecting `+T.join(", ")+", got '"+(this.terminals_[C]||C)+"'":X="Parse error on line "+(i+1)+": Unexpected "+(C==1?"end of input":"'"+(this.terminals_[C]||C)+"'"),this.parseError(X,{text:this.lexer.match,token:this.terminals_[C]||C,line:this.lexer.yylineno,loc:v,expected:T})}}if(y[0]instanceof Array&&y.length>1)throw new Error("Parse Error: multiple actions possible at state: "+g+", token: "+C);switch(y[0]){case 1:c.push(C),o.push(this.lexer.yytext),f.push(this.lexer.yylloc),c.push(y[1]),C=null,m=this.lexer.yyleng,l=this.lexer.yytext,i=this.lexer.yylineno,v=this.lexer.yylloc;break;case 2:if(E=this.productions_[y[1]][1],P.$=o[o.length-E],P._$={first_line:f[f.length-(E||1)].first_line,last_line:f[f.length-1].last_line,first_column:f[f.length-(E||1)].first_column,last_column:f[f.length-1].last_column},w&&(P._$.range=[f[f.length-(E||1)].range[0],f[f.length-1].range[1]]),M=this.performAction.call(P,l,m,i,this.yy,y[1],o,f),typeof M<"u")return M;E&&(c=c.slice(0,-1*E*2),o=o.slice(0,-1*E),f=f.slice(0,-1*E)),c.push(this.productions_[y[1]][0]),o.push(P.$),f.push(P._$),I=n[c[c.length-2]][c[c.length-1]],c.push(I);break;case 3:return!0}}return!0}},h=function(){var d={EOF:1,parseError:function(a,c){if(this.yy.parser)this.yy.parser.parseError(a,c);else throw new Error(a)},setInput:function(a){return this._input=a,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var c=a.match(/(?:\r\n?|\n).*/g);return c?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},unput:function(a){var c=a.length,o=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-c-1),this.offset-=c;var f=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),o.length-1&&(this.yylineno-=o.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:o?(o.length===f.length?this.yylloc.first_column:0)+f[f.length-o.length].length-o[0].length:this.yylloc.first_column-c},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-c]),this},more:function(){return this._more=!0,this},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),c=new Array(a.length+1).join("-");return a+this.upcomingInput()+`
`+c+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,c,o,f,n;this._more||(this.yytext="",this.match="");for(var l=this._currentRules(),i=0;i<l.length&&(o=this._input.match(this.rules[l[i]]),!(o&&(!c||o[0].length>c[0].length)&&(c=o,f=i,!this.options.flex)));i++);return c?(n=c[0].match(/(?:\r\n?|\n).*/g),n&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+c[0].length},this.yytext+=c[0],this.match+=c[0],this.matches=c,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(c[0].length),this.matched+=c[0],a=this.performAction.call(this,this.yy,this,l[f],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),a||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return typeof a<"u"?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(a){this.begin(a)}};return d.options={},d.performAction=function(a,c,o,f){function n(l,i){return c.yytext=c.yytext.substring(l,c.yyleng-i+l)}switch(o){case 0:if(c.yytext.slice(-2)==="\\\\"?(n(0,1),this.begin("mu")):c.yytext.slice(-1)==="\\"?(n(0,1),this.begin("emu")):this.begin("mu"),c.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),this.conditionStack[this.conditionStack.length-1]==="raw"?15:(n(5,9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(c.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return c.yytext=n(1,2).replace(/\\"/g,'"'),80;case 32:return c.yytext=n(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return c.yytext=c.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},d.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],d.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},d}();s.lexer=h;function p(){this.yy={}}return p.prototype=s,s.Parser=p,new p}();e.default=r,t.exports=e.default})(Ze,Ze.exports);var Ws=Ze.exports,Xe={exports:{}},et={exports:{}};(function(t,e){e.__esModule=!0;function r(c){return c&&c.__esModule?c:{default:c}}var s=W,h=r(s);function p(){this.parents=[]}p.prototype={constructor:p,mutating:!1,acceptKey:function(o,f){var n=this.accept(o[f]);if(this.mutating){if(n&&!p.prototype[n.type])throw new h.default('Unexpected node type "'+n.type+'" found when accepting '+f+" on "+o.type);o[f]=n}},acceptRequired:function(o,f){if(this.acceptKey(o,f),!o[f])throw new h.default(o.type+" requires "+f)},acceptArray:function(o){for(var f=0,n=o.length;f<n;f++)this.acceptKey(o,f),o[f]||(o.splice(f,1),f--,n--)},accept:function(o){if(o){if(!this[o.type])throw new h.default("Unknown type: "+o.type,o);this.current&&this.parents.unshift(this.current),this.current=o;var f=this[o.type](o);if(this.current=this.parents.shift(),!this.mutating||f)return f;if(f!==!1)return o}},Program:function(o){this.acceptArray(o.body)},MustacheStatement:d,Decorator:d,BlockStatement:u,DecoratorBlock:u,PartialStatement:a,PartialBlockStatement:function(o){a.call(this,o),this.acceptKey(o,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:d,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(o){this.acceptArray(o.pairs)},HashPair:function(o){this.acceptRequired(o,"value")}};function d(c){this.acceptRequired(c,"path"),this.acceptArray(c.params),this.acceptKey(c,"hash")}function u(c){d.call(this,c),this.acceptKey(c,"program"),this.acceptKey(c,"inverse")}function a(c){this.acceptRequired(c,"name"),this.acceptArray(c.params),this.acceptKey(c,"hash")}e.default=p,t.exports=e.default})(et,et.exports);var Gt=et.exports;(function(t,e){e.__esModule=!0;function r(o){return o&&o.__esModule?o:{default:o}}var s=Gt,h=r(s);function p(){var o=arguments.length<=0||arguments[0]===void 0?{}:arguments[0];this.options=o}p.prototype=new h.default,p.prototype.Program=function(o){var f=!this.options.ignoreStandalone,n=!this.isRootSeen;this.isRootSeen=!0;for(var l=o.body,i=0,m=l.length;i<m;i++){var v=l[i],w=this.accept(v);if(w){var _=d(l,i,n),C=u(l,i,n),g=w.openStandalone&&_,y=w.closeStandalone&&C,M=w.inlineStandalone&&_&&C;w.close&&a(l,i,!0),w.open&&c(l,i,!0),f&&M&&(a(l,i),c(l,i)&&v.type==="PartialStatement"&&(v.indent=/([ \t]+$)/.exec(l[i-1].original)[1])),f&&g&&(a((v.program||v.inverse).body),c(l,i)),f&&y&&(a(l,i),c((v.inverse||v.program).body))}}return o},p.prototype.BlockStatement=p.prototype.DecoratorBlock=p.prototype.PartialBlockStatement=function(o){this.accept(o.program),this.accept(o.inverse);var f=o.program||o.inverse,n=o.program&&o.inverse,l=n,i=n;if(n&&n.chained)for(l=n.body[0].program;i.chained;)i=i.body[i.body.length-1].program;var m={open:o.openStrip.open,close:o.closeStrip.close,openStandalone:u(f.body),closeStandalone:d((l||f).body)};if(o.openStrip.close&&a(f.body,null,!0),n){var v=o.inverseStrip;v.open&&c(f.body,null,!0),v.close&&a(l.body,null,!0),o.closeStrip.open&&c(i.body,null,!0),!this.options.ignoreStandalone&&d(f.body)&&u(l.body)&&(c(f.body),a(l.body))}else o.closeStrip.open&&c(f.body,null,!0);return m},p.prototype.Decorator=p.prototype.MustacheStatement=function(o){return o.strip},p.prototype.PartialStatement=p.prototype.CommentStatement=function(o){var f=o.strip||{};return{inlineStandalone:!0,open:f.open,close:f.close}};function d(o,f,n){f===void 0&&(f=o.length);var l=o[f-1],i=o[f-2];if(!l)return n;if(l.type==="ContentStatement")return(i||!n?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(l.original)}function u(o,f,n){f===void 0&&(f=-1);var l=o[f+1],i=o[f+2];if(!l)return n;if(l.type==="ContentStatement")return(i||!n?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(l.original)}function a(o,f,n){var l=o[f==null?0:f+1];if(!(!l||l.type!=="ContentStatement"||!n&&l.rightStripped)){var i=l.value;l.value=l.value.replace(n?/^\s+/:/^[ \t]*\r?\n?/,""),l.rightStripped=l.value!==i}}function c(o,f,n){var l=o[f==null?o.length-1:f-1];if(!(!l||l.type!=="ContentStatement"||!n&&l.leftStripped)){var i=l.value;return l.value=l.value.replace(n?/\s+$/:/[ \t]+$/,""),l.leftStripped=l.value!==i,l.leftStripped}}e.default=p,t.exports=e.default})(Xe,Xe.exports);var zs=Xe.exports,q={};q.__esModule=!0;q.SourceLocation=Ks;q.id=Js;q.stripFlags=Qs;q.stripComment=js;q.preparePath=Ys;q.prepareMustache=Zs;q.prepareRawBlock=Xs;q.prepareBlock=en;q.prepareProgram=tn;q.preparePartialBlock=rn;function Gs(t){return t&&t.__esModule?t:{default:t}}var $s=W,pt=Gs($s);function dt(t,e){if(e=e.path?e.path.original:e,t.path.original!==e){var r={loc:t.path.loc};throw new pt.default(t.path.original+" doesn't match "+e,r)}}function Ks(t,e){this.source=t,this.start={line:e.first_line,column:e.first_column},this.end={line:e.last_line,column:e.last_column}}function Js(t){return/^\[.*\]$/.test(t)?t.substring(1,t.length-1):t}function Qs(t,e){return{open:t.charAt(2)==="~",close:e.charAt(e.length-3)==="~"}}function js(t){return t.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function Ys(t,e,r){r=this.locInfo(r);for(var s=t?"@":"",h=[],p=0,d=0,u=e.length;d<u;d++){var a=e[d].part,c=e[d].original!==a;if(s+=(e[d].separator||"")+a,!c&&(a===".."||a==="."||a==="this")){if(h.length>0)throw new pt.default("Invalid path: "+s,{loc:r});a===".."&&p++}else h.push(a)}return{type:"PathExpression",data:t,depth:p,parts:h,original:s,loc:r}}function Zs(t,e,r,s,h,p){var d=s.charAt(3)||s.charAt(2),u=d!=="{"&&d!=="&",a=/\*/.test(s);return{type:a?"Decorator":"MustacheStatement",path:t,params:e,hash:r,escaped:u,strip:h,loc:this.locInfo(p)}}function Xs(t,e,r,s){dt(t,r),s=this.locInfo(s);var h={type:"Program",body:e,strip:{},loc:s};return{type:"BlockStatement",path:t.path,params:t.params,hash:t.hash,program:h,openStrip:{},inverseStrip:{},closeStrip:{},loc:s}}function en(t,e,r,s,h,p){s&&s.path&&dt(t,s);var d=/\*/.test(t.open);e.blockParams=t.blockParams;var u=void 0,a=void 0;if(r){if(d)throw new pt.default("Unexpected inverse block on decorator",r);r.chain&&(r.program.body[0].closeStrip=s.strip),a=r.strip,u=r.program}return h&&(h=u,u=e,e=h),{type:d?"DecoratorBlock":"BlockStatement",path:t.path,params:t.params,hash:t.hash,program:e,inverse:u,openStrip:t.strip,inverseStrip:a,closeStrip:s&&s.strip,loc:this.locInfo(p)}}function tn(t,e){if(!e&&t.length){var r=t[0].loc,s=t[t.length-1].loc;r&&s&&(e={source:r.source,start:{line:r.start.line,column:r.start.column},end:{line:s.end.line,column:s.end.column}})}return{type:"Program",body:t,strip:{},loc:e}}function rn(t,e,r,s){return dt(t,r),{type:"PartialBlockStatement",name:t.path,params:t.params,hash:t.hash,program:e,openStrip:t.strip,closeStrip:r&&r.strip,loc:this.locInfo(s)}}ue.__esModule=!0;ue.parseWithoutProcessing=Kt;ue.parse=hn;function sn(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function $t(t){return t&&t.__esModule?t:{default:t}}var nn=Ws,tt=$t(nn),an=zs,on=$t(an),ln=q,cn=sn(ln),un=A;ue.parser=tt.default;var ye={};un.extend(ye,cn);function Kt(t,e){if(t.type==="Program")return t;tt.default.yy=ye,ye.locInfo=function(s){return new ye.SourceLocation(e&&e.srcName,s)};var r=tt.default.parse(t);return r}function hn(t,e){var r=Kt(t,e),s=new on.default(e);return s.accept(r)}var he={};he.__esModule=!0;he.Compiler=rt;he.precompile=mn;he.compile=gn;function Jt(t){return t&&t.__esModule?t:{default:t}}var pn=W,oe=Jt(pn),le=A,dn=zt,re=Jt(dn),fn=[].slice;function rt(){}rt.prototype={compiler:rt,equals:function(e){var r=this.opcodes.length;if(e.opcodes.length!==r)return!1;for(var s=0;s<r;s++){var h=this.opcodes[s],p=e.opcodes[s];if(h.opcode!==p.opcode||!Qt(h.args,p.args))return!1}r=this.children.length;for(var s=0;s<r;s++)if(!this.children[s].equals(e.children[s]))return!1;return!0},guid:0,compile:function(e,r){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=r,this.stringParams=r.stringParams,this.trackIds=r.trackIds,r.blockParams=r.blockParams||[],r.knownHelpers=le.extend(Object.create(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},r.knownHelpers),this.accept(e)},compileProgram:function(e){var r=new this.compiler,s=r.compile(e,this.options),h=this.guid++;return this.usePartial=this.usePartial||s.usePartial,this.children[h]=s,this.useDepths=this.useDepths||s.useDepths,h},accept:function(e){if(!this[e.type])throw new oe.default("Unknown type: "+e.type,e);this.sourceNode.unshift(e);var r=this[e.type](e);return this.sourceNode.shift(),r},Program:function(e){this.options.blockParams.unshift(e.blockParams);for(var r=e.body,s=r.length,h=0;h<s;h++)this.accept(r[h]);return this.options.blockParams.shift(),this.isSimple=s===1,this.blockParams=e.blockParams?e.blockParams.length:0,this},BlockStatement:function(e){Ct(e);var r=e.program,s=e.inverse;r=r&&this.compileProgram(r),s=s&&this.compileProgram(s);var h=this.classifySexpr(e);h==="helper"?this.helperSexpr(e,r,s):h==="simple"?(this.simpleSexpr(e),this.opcode("pushProgram",r),this.opcode("pushProgram",s),this.opcode("emptyHash"),this.opcode("blockValue",e.path.original)):(this.ambiguousSexpr(e,r,s),this.opcode("pushProgram",r),this.opcode("pushProgram",s),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(e){var r=e.program&&this.compileProgram(e.program),s=this.setupFullMustacheParams(e,r,void 0),h=e.path;this.useDecorators=!0,this.opcode("registerDecorator",s.length,h.original)},PartialStatement:function(e){this.usePartial=!0;var r=e.program;r&&(r=this.compileProgram(e.program));var s=e.params;if(s.length>1)throw new oe.default("Unsupported number of partial arguments: "+s.length,e);s.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):s.push({type:"PathExpression",parts:[],depth:0}));var h=e.name.original,p=e.name.type==="SubExpression";p&&this.accept(e.name),this.setupFullMustacheParams(e,r,void 0,!0);var d=e.indent||"";this.options.preventIndent&&d&&(this.opcode("appendContent",d),d=""),this.opcode("invokePartial",p,h,d),this.opcode("append")},PartialBlockStatement:function(e){this.PartialStatement(e)},MustacheStatement:function(e){this.SubExpression(e),e.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(e){this.DecoratorBlock(e)},ContentStatement:function(e){e.value&&this.opcode("appendContent",e.value)},CommentStatement:function(){},SubExpression:function(e){Ct(e);var r=this.classifySexpr(e);r==="simple"?this.simpleSexpr(e):r==="helper"?this.helperSexpr(e):this.ambiguousSexpr(e)},ambiguousSexpr:function(e,r,s){var h=e.path,p=h.parts[0],d=r!=null||s!=null;this.opcode("getContext",h.depth),this.opcode("pushProgram",r),this.opcode("pushProgram",s),h.strict=!0,this.accept(h),this.opcode("invokeAmbiguous",p,d)},simpleSexpr:function(e){var r=e.path;r.strict=!0,this.accept(r),this.opcode("resolvePossibleLambda")},helperSexpr:function(e,r,s){var h=this.setupFullMustacheParams(e,r,s),p=e.path,d=p.parts[0];if(this.options.knownHelpers[d])this.opcode("invokeKnownHelper",h.length,d);else{if(this.options.knownHelpersOnly)throw new oe.default("You specified knownHelpersOnly, but used the unknown helper "+d,e);p.strict=!0,p.falsy=!0,this.accept(p),this.opcode("invokeHelper",h.length,p.original,re.default.helpers.simpleId(p))}},PathExpression:function(e){this.addDepth(e.depth),this.opcode("getContext",e.depth);var r=e.parts[0],s=re.default.helpers.scopedId(e),h=!e.depth&&!s&&this.blockParamIndex(r);h?this.opcode("lookupBlockParam",h,e.parts):r?e.data?(this.options.data=!0,this.opcode("lookupData",e.depth,e.parts,e.strict)):this.opcode("lookupOnContext",e.parts,e.falsy,e.strict,s):this.opcode("pushContext")},StringLiteral:function(e){this.opcode("pushString",e.value)},NumberLiteral:function(e){this.opcode("pushLiteral",e.value)},BooleanLiteral:function(e){this.opcode("pushLiteral",e.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(e){var r=e.pairs,s=0,h=r.length;for(this.opcode("pushHash");s<h;s++)this.pushParam(r[s].value);for(;s--;)this.opcode("assignToHash",r[s].key);this.opcode("popHash")},opcode:function(e){this.opcodes.push({opcode:e,args:fn.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(e){e&&(this.useDepths=!0)},classifySexpr:function(e){var r=re.default.helpers.simpleId(e.path),s=r&&!!this.blockParamIndex(e.path.parts[0]),h=!s&&re.default.helpers.helperExpression(e),p=!s&&(h||r);if(p&&!h){var d=e.path.parts[0],u=this.options;u.knownHelpers[d]?h=!0:u.knownHelpersOnly&&(p=!1)}return h?"helper":p?"ambiguous":"simple"},pushParams:function(e){for(var r=0,s=e.length;r<s;r++)this.pushParam(e[r])},pushParam:function(e){var r=e.value!=null?e.value:e.original||"";if(this.stringParams)r.replace&&(r=r.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),e.depth&&this.addDepth(e.depth),this.opcode("getContext",e.depth||0),this.opcode("pushStringParam",r,e.type),e.type==="SubExpression"&&this.accept(e);else{if(this.trackIds){var s=void 0;if(e.parts&&!re.default.helpers.scopedId(e)&&!e.depth&&(s=this.blockParamIndex(e.parts[0])),s){var h=e.parts.slice(1).join(".");this.opcode("pushId","BlockParam",s,h)}else r=e.original||r,r.replace&&(r=r.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",e.type,r)}this.accept(e)}},setupFullMustacheParams:function(e,r,s,h){var p=e.params;return this.pushParams(p),this.opcode("pushProgram",r),this.opcode("pushProgram",s),e.hash?this.accept(e.hash):this.opcode("emptyHash",h),p},blockParamIndex:function(e){for(var r=0,s=this.options.blockParams.length;r<s;r++){var h=this.options.blockParams[r],p=h&&le.indexOf(h,e);if(h&&p>=0)return[r,p]}}};function mn(t,e,r){if(t==null||typeof t!="string"&&t.type!=="Program")throw new oe.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var s=r.parse(t,e),h=new r.Compiler().compile(s,e);return new r.JavaScriptCompiler().compile(h,e)}function gn(t,e,r){if(e===void 0&&(e={}),t==null||typeof t!="string"&&t.type!=="Program")throw new oe.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+t);e=le.extend({},e),"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var s=void 0;function h(){var d=r.parse(t,e),u=new r.Compiler().compile(d,e),a=new r.JavaScriptCompiler().compile(u,e,void 0,!0);return r.template(a)}function p(d,u){return s||(s=h()),s.call(this,d,u)}return p._setup=function(d){return s||(s=h()),s._setup(d)},p._child=function(d,u,a,c){return s||(s=h()),s._child(d,u,a,c)},p}function Qt(t,e){if(t===e)return!0;if(le.isArray(t)&&le.isArray(e)&&t.length===e.length){for(var r=0;r<t.length;r++)if(!Qt(t[r],e[r]))return!1;return!0}}function Ct(t){if(!t.path.parts){var e=t.path;t.path={type:"PathExpression",data:!1,depth:0,parts:[e.original+""],original:e.original+"",loc:e.loc}}}var st={exports:{}},nt={exports:{}},se={},Le={},de={},fe={},St;function vn(){if(St)return fe;St=1;var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");return fe.encode=function(e){if(0<=e&&e<t.length)return t[e];throw new TypeError("Must be between 0 and 63: "+e)},fe.decode=function(e){var r=65,s=90,h=97,p=122,d=48,u=57,a=43,c=47,o=26,f=52;return r<=e&&e<=s?e-r:h<=e&&e<=p?e-h+o:d<=e&&e<=u?e-d+f:e==a?62:e==c?63:-1},fe}var Pt;function jt(){if(Pt)return de;Pt=1;var t=vn(),e=5,r=1<<e,s=r-1,h=r;function p(u){return u<0?(-u<<1)+1:(u<<1)+0}function d(u){var a=(u&1)===1,c=u>>1;return a?-c:c}return de.encode=function(a){var c="",o,f=p(a);do o=f&s,f>>>=e,f>0&&(o|=h),c+=t.encode(o);while(f>0);return c},de.decode=function(a,c,o){var f=a.length,n=0,l=0,i,m;do{if(c>=f)throw new Error("Expected more digits in base 64 VLQ value.");if(m=t.decode(a.charCodeAt(c++)),m===-1)throw new Error("Invalid base64 digit: "+a.charAt(c-1));i=!!(m&h),m&=s,n=n+(m<<l),l+=e}while(i);o.value=d(n),o.rest=c},de}var Ie={},bt;function pe(){return bt||(bt=1,function(t){function e(g,y,M){if(y in g)return g[y];if(arguments.length===3)return M;throw new Error('"'+y+'" is a required argument.')}t.getArg=e;var r=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,s=/^data:.+\,.+$/;function h(g){var y=g.match(r);return y?{scheme:y[1],auth:y[2],host:y[3],port:y[4],path:y[5]}:null}t.urlParse=h;function p(g){var y="";return g.scheme&&(y+=g.scheme+":"),y+="//",g.auth&&(y+=g.auth+"@"),g.host&&(y+=g.host),g.port&&(y+=":"+g.port),g.path&&(y+=g.path),y}t.urlGenerate=p;function d(g){var y=g,M=h(g);if(M){if(!M.path)return g;y=M.path}for(var P=t.isAbsolute(y),L=y.split(/\/+/),E,I=0,T=L.length-1;T>=0;T--)E=L[T],E==="."?L.splice(T,1):E===".."?I++:I>0&&(E===""?(L.splice(T+1,I),I=0):(L.splice(T,2),I--));return y=L.join("/"),y===""&&(y=P?"/":"."),M?(M.path=y,p(M)):y}t.normalize=d;function u(g,y){g===""&&(g="."),y===""&&(y=".");var M=h(y),P=h(g);if(P&&(g=P.path||"/"),M&&!M.scheme)return P&&(M.scheme=P.scheme),p(M);if(M||y.match(s))return y;if(P&&!P.host&&!P.path)return P.host=y,p(P);var L=y.charAt(0)==="/"?y:d(g.replace(/\/+$/,"")+"/"+y);return P?(P.path=L,p(P)):L}t.join=u,t.isAbsolute=function(g){return g.charAt(0)==="/"||r.test(g)};function a(g,y){g===""&&(g="."),g=g.replace(/\/$/,"");for(var M=0;y.indexOf(g+"/")!==0;){var P=g.lastIndexOf("/");if(P<0||(g=g.slice(0,P),g.match(/^([^\/]+:\/)?\/*$/)))return y;++M}return Array(M+1).join("../")+y.substr(g.length+1)}t.relative=a;var c=function(){var g=Object.create(null);return!("__proto__"in g)}();function o(g){return g}function f(g){return l(g)?"$"+g:g}t.toSetString=c?o:f;function n(g){return l(g)?g.slice(1):g}t.fromSetString=c?o:n;function l(g){if(!g)return!1;var y=g.length;if(y<9||g.charCodeAt(y-1)!==95||g.charCodeAt(y-2)!==95||g.charCodeAt(y-3)!==111||g.charCodeAt(y-4)!==116||g.charCodeAt(y-5)!==111||g.charCodeAt(y-6)!==114||g.charCodeAt(y-7)!==112||g.charCodeAt(y-8)!==95||g.charCodeAt(y-9)!==95)return!1;for(var M=y-10;M>=0;M--)if(g.charCodeAt(M)!==36)return!1;return!0}function i(g,y,M){var P=v(g.source,y.source);return P!==0||(P=g.originalLine-y.originalLine,P!==0)||(P=g.originalColumn-y.originalColumn,P!==0||M)||(P=g.generatedColumn-y.generatedColumn,P!==0)||(P=g.generatedLine-y.generatedLine,P!==0)?P:v(g.name,y.name)}t.compareByOriginalPositions=i;function m(g,y,M){var P=g.generatedLine-y.generatedLine;return P!==0||(P=g.generatedColumn-y.generatedColumn,P!==0||M)||(P=v(g.source,y.source),P!==0)||(P=g.originalLine-y.originalLine,P!==0)||(P=g.originalColumn-y.originalColumn,P!==0)?P:v(g.name,y.name)}t.compareByGeneratedPositionsDeflated=m;function v(g,y){return g===y?0:g===null?1:y===null?-1:g>y?1:-1}function w(g,y){var M=g.generatedLine-y.generatedLine;return M!==0||(M=g.generatedColumn-y.generatedColumn,M!==0)||(M=v(g.source,y.source),M!==0)||(M=g.originalLine-y.originalLine,M!==0)||(M=g.originalColumn-y.originalColumn,M!==0)?M:v(g.name,y.name)}t.compareByGeneratedPositionsInflated=w;function _(g){return JSON.parse(g.replace(/^\)]}'[^\n]*\n/,""))}t.parseSourceMapInput=_;function C(g,y,M){if(y=y||"",g&&(g[g.length-1]!=="/"&&y[0]!=="/"&&(g+="/"),y=g+y),M){var P=h(M);if(!P)throw new Error("sourceMapURL could not be parsed");if(P.path){var L=P.path.lastIndexOf("/");L>=0&&(P.path=P.path.substring(0,L+1))}y=u(p(P),y)}return d(y)}t.computeSourceURL=C}(Ie)),Ie}var Oe={},Mt;function Yt(){if(Mt)return Oe;Mt=1;var t=pe(),e=Object.prototype.hasOwnProperty,r=typeof Map<"u";function s(){this._array=[],this._set=r?new Map:Object.create(null)}return s.fromArray=function(p,d){for(var u=new s,a=0,c=p.length;a<c;a++)u.add(p[a],d);return u},s.prototype.size=function(){return r?this._set.size:Object.getOwnPropertyNames(this._set).length},s.prototype.add=function(p,d){var u=r?p:t.toSetString(p),a=r?this.has(p):e.call(this._set,u),c=this._array.length;(!a||d)&&this._array.push(p),a||(r?this._set.set(p,c):this._set[u]=c)},s.prototype.has=function(p){if(r)return this._set.has(p);var d=t.toSetString(p);return e.call(this._set,d)},s.prototype.indexOf=function(p){if(r){var d=this._set.get(p);if(d>=0)return d}else{var u=t.toSetString(p);if(e.call(this._set,u))return this._set[u]}throw new Error('"'+p+'" is not in the set.')},s.prototype.at=function(p){if(p>=0&&p<this._array.length)return this._array[p];throw new Error("No element indexed by "+p)},s.prototype.toArray=function(){return this._array.slice()},Oe.ArraySet=s,Oe}var Ae={},xt;function _n(){if(xt)return Ae;xt=1;var t=pe();function e(s,h){var p=s.generatedLine,d=h.generatedLine,u=s.generatedColumn,a=h.generatedColumn;return d>p||d==p&&a>=u||t.compareByGeneratedPositionsInflated(s,h)<=0}function r(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}return r.prototype.unsortedForEach=function(h,p){this._array.forEach(h,p)},r.prototype.add=function(h){e(this._last,h)?(this._last=h,this._array.push(h)):(this._sorted=!1,this._array.push(h))},r.prototype.toArray=function(){return this._sorted||(this._array.sort(t.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},Ae.MappingList=r,Ae}var kt;function Zt(){if(kt)return Le;kt=1;var t=jt(),e=pe(),r=Yt().ArraySet,s=_n().MappingList;function h(p){p||(p={}),this._file=e.getArg(p,"file",null),this._sourceRoot=e.getArg(p,"sourceRoot",null),this._skipValidation=e.getArg(p,"skipValidation",!1),this._sources=new r,this._names=new r,this._mappings=new s,this._sourcesContents=null}return h.prototype._version=3,h.fromSourceMap=function(d){var u=d.sourceRoot,a=new h({file:d.file,sourceRoot:u});return d.eachMapping(function(c){var o={generated:{line:c.generatedLine,column:c.generatedColumn}};c.source!=null&&(o.source=c.source,u!=null&&(o.source=e.relative(u,o.source)),o.original={line:c.originalLine,column:c.originalColumn},c.name!=null&&(o.name=c.name)),a.addMapping(o)}),d.sources.forEach(function(c){var o=c;u!==null&&(o=e.relative(u,c)),a._sources.has(o)||a._sources.add(o);var f=d.sourceContentFor(c);f!=null&&a.setSourceContent(c,f)}),a},h.prototype.addMapping=function(d){var u=e.getArg(d,"generated"),a=e.getArg(d,"original",null),c=e.getArg(d,"source",null),o=e.getArg(d,"name",null);this._skipValidation||this._validateMapping(u,a,c,o),c!=null&&(c=String(c),this._sources.has(c)||this._sources.add(c)),o!=null&&(o=String(o),this._names.has(o)||this._names.add(o)),this._mappings.add({generatedLine:u.line,generatedColumn:u.column,originalLine:a!=null&&a.line,originalColumn:a!=null&&a.column,source:c,name:o})},h.prototype.setSourceContent=function(d,u){var a=d;this._sourceRoot!=null&&(a=e.relative(this._sourceRoot,a)),u!=null?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[e.toSetString(a)]=u):this._sourcesContents&&(delete this._sourcesContents[e.toSetString(a)],Object.keys(this._sourcesContents).length===0&&(this._sourcesContents=null))},h.prototype.applySourceMap=function(d,u,a){var c=u;if(u==null){if(d.file==null)throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);c=d.file}var o=this._sourceRoot;o!=null&&(c=e.relative(o,c));var f=new r,n=new r;this._mappings.unsortedForEach(function(l){if(l.source===c&&l.originalLine!=null){var i=d.originalPositionFor({line:l.originalLine,column:l.originalColumn});i.source!=null&&(l.source=i.source,a!=null&&(l.source=e.join(a,l.source)),o!=null&&(l.source=e.relative(o,l.source)),l.originalLine=i.line,l.originalColumn=i.column,i.name!=null&&(l.name=i.name))}var m=l.source;m!=null&&!f.has(m)&&f.add(m);var v=l.name;v!=null&&!n.has(v)&&n.add(v)},this),this._sources=f,this._names=n,d.sources.forEach(function(l){var i=d.sourceContentFor(l);i!=null&&(a!=null&&(l=e.join(a,l)),o!=null&&(l=e.relative(o,l)),this.setSourceContent(l,i))},this)},h.prototype._validateMapping=function(d,u,a,c){if(u&&typeof u.line!="number"&&typeof u.column!="number")throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if(!(d&&"line"in d&&"column"in d&&d.line>0&&d.column>=0&&!u&&!a&&!c)){if(d&&"line"in d&&"column"in d&&u&&"line"in u&&"column"in u&&d.line>0&&d.column>=0&&u.line>0&&u.column>=0&&a)return;throw new Error("Invalid mapping: "+JSON.stringify({generated:d,source:a,original:u,name:c}))}},h.prototype._serializeMappings=function(){for(var d=0,u=1,a=0,c=0,o=0,f=0,n="",l,i,m,v,w=this._mappings.toArray(),_=0,C=w.length;_<C;_++){if(i=w[_],l="",i.generatedLine!==u)for(d=0;i.generatedLine!==u;)l+=";",u++;else if(_>0){if(!e.compareByGeneratedPositionsInflated(i,w[_-1]))continue;l+=","}l+=t.encode(i.generatedColumn-d),d=i.generatedColumn,i.source!=null&&(v=this._sources.indexOf(i.source),l+=t.encode(v-f),f=v,l+=t.encode(i.originalLine-1-c),c=i.originalLine-1,l+=t.encode(i.originalColumn-a),a=i.originalColumn,i.name!=null&&(m=this._names.indexOf(i.name),l+=t.encode(m-o),o=m)),n+=l}return n},h.prototype._generateSourcesContent=function(d,u){return d.map(function(a){if(!this._sourcesContents)return null;u!=null&&(a=e.relative(u,a));var c=e.toSetString(a);return Object.prototype.hasOwnProperty.call(this._sourcesContents,c)?this._sourcesContents[c]:null},this)},h.prototype.toJSON=function(){var d={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return this._file!=null&&(d.file=this._file),this._sourceRoot!=null&&(d.sourceRoot=this._sourceRoot),this._sourcesContents&&(d.sourcesContent=this._generateSourcesContent(d.sources,d.sourceRoot)),d},h.prototype.toString=function(){return JSON.stringify(this.toJSON())},Le.SourceMapGenerator=h,Le}var ne={},Ee={},Lt;function yn(){return Lt||(Lt=1,function(t){t.GREATEST_LOWER_BOUND=1,t.LEAST_UPPER_BOUND=2;function e(r,s,h,p,d,u){var a=Math.floor((s-r)/2)+r,c=d(h,p[a],!0);return c===0?a:c>0?s-a>1?e(a,s,h,p,d,u):u==t.LEAST_UPPER_BOUND?s<p.length?s:-1:a:a-r>1?e(r,a,h,p,d,u):u==t.LEAST_UPPER_BOUND?a:r<0?-1:r}t.search=function(s,h,p,d){if(h.length===0)return-1;var u=e(-1,h.length,s,h,p,d||t.GREATEST_LOWER_BOUND);if(u<0)return-1;for(;u-1>=0&&p(h[u],h[u-1],!0)===0;)--u;return u}}(Ee)),Ee}var Ne={},It;function wn(){if(It)return Ne;It=1;function t(s,h,p){var d=s[h];s[h]=s[p],s[p]=d}function e(s,h){return Math.round(s+Math.random()*(h-s))}function r(s,h,p,d){if(p<d){var u=e(p,d),a=p-1;t(s,u,d);for(var c=s[d],o=p;o<d;o++)h(s[o],c)<=0&&(a+=1,t(s,a,o));t(s,a+1,o);var f=a+1;r(s,h,p,f-1),r(s,h,f+1,d)}}return Ne.quickSort=function(s,h){r(s,h,0,s.length-1)},Ne}var Ot;function Cn(){if(Ot)return ne;Ot=1;var t=pe(),e=yn(),r=Yt().ArraySet,s=jt(),h=wn().quickSort;function p(c,o){var f=c;return typeof c=="string"&&(f=t.parseSourceMapInput(c)),f.sections!=null?new a(f,o):new d(f,o)}p.fromSourceMap=function(c,o){return d.fromSourceMap(c,o)},p.prototype._version=3,p.prototype.__generatedMappings=null,Object.defineProperty(p.prototype,"_generatedMappings",{configurable:!0,enumerable:!0,get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),p.prototype.__originalMappings=null,Object.defineProperty(p.prototype,"_originalMappings",{configurable:!0,enumerable:!0,get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),p.prototype._charIsMappingSeparator=function(o,f){var n=o.charAt(f);return n===";"||n===","},p.prototype._parseMappings=function(o,f){throw new Error("Subclasses must implement _parseMappings")},p.GENERATED_ORDER=1,p.ORIGINAL_ORDER=2,p.GREATEST_LOWER_BOUND=1,p.LEAST_UPPER_BOUND=2,p.prototype.eachMapping=function(o,f,n){var l=f||null,i=n||p.GENERATED_ORDER,m;switch(i){case p.GENERATED_ORDER:m=this._generatedMappings;break;case p.ORIGINAL_ORDER:m=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var v=this.sourceRoot;m.map(function(w){var _=w.source===null?null:this._sources.at(w.source);return _=t.computeSourceURL(v,_,this._sourceMapURL),{source:_,generatedLine:w.generatedLine,generatedColumn:w.generatedColumn,originalLine:w.originalLine,originalColumn:w.originalColumn,name:w.name===null?null:this._names.at(w.name)}},this).forEach(o,l)},p.prototype.allGeneratedPositionsFor=function(o){var f=t.getArg(o,"line"),n={source:t.getArg(o,"source"),originalLine:f,originalColumn:t.getArg(o,"column",0)};if(n.source=this._findSourceIndex(n.source),n.source<0)return[];var l=[],i=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",t.compareByOriginalPositions,e.LEAST_UPPER_BOUND);if(i>=0){var m=this._originalMappings[i];if(o.column===void 0)for(var v=m.originalLine;m&&m.originalLine===v;)l.push({line:t.getArg(m,"generatedLine",null),column:t.getArg(m,"generatedColumn",null),lastColumn:t.getArg(m,"lastGeneratedColumn",null)}),m=this._originalMappings[++i];else for(var w=m.originalColumn;m&&m.originalLine===f&&m.originalColumn==w;)l.push({line:t.getArg(m,"generatedLine",null),column:t.getArg(m,"generatedColumn",null),lastColumn:t.getArg(m,"lastGeneratedColumn",null)}),m=this._originalMappings[++i]}return l},ne.SourceMapConsumer=p;function d(c,o){var f=c;typeof c=="string"&&(f=t.parseSourceMapInput(c));var n=t.getArg(f,"version"),l=t.getArg(f,"sources"),i=t.getArg(f,"names",[]),m=t.getArg(f,"sourceRoot",null),v=t.getArg(f,"sourcesContent",null),w=t.getArg(f,"mappings"),_=t.getArg(f,"file",null);if(n!=this._version)throw new Error("Unsupported version: "+n);m&&(m=t.normalize(m)),l=l.map(String).map(t.normalize).map(function(C){return m&&t.isAbsolute(m)&&t.isAbsolute(C)?t.relative(m,C):C}),this._names=r.fromArray(i.map(String),!0),this._sources=r.fromArray(l,!0),this._absoluteSources=this._sources.toArray().map(function(C){return t.computeSourceURL(m,C,o)}),this.sourceRoot=m,this.sourcesContent=v,this._mappings=w,this._sourceMapURL=o,this.file=_}d.prototype=Object.create(p.prototype),d.prototype.consumer=p,d.prototype._findSourceIndex=function(c){var o=c;if(this.sourceRoot!=null&&(o=t.relative(this.sourceRoot,o)),this._sources.has(o))return this._sources.indexOf(o);var f;for(f=0;f<this._absoluteSources.length;++f)if(this._absoluteSources[f]==c)return f;return-1},d.fromSourceMap=function(o,f){var n=Object.create(d.prototype),l=n._names=r.fromArray(o._names.toArray(),!0),i=n._sources=r.fromArray(o._sources.toArray(),!0);n.sourceRoot=o._sourceRoot,n.sourcesContent=o._generateSourcesContent(n._sources.toArray(),n.sourceRoot),n.file=o._file,n._sourceMapURL=f,n._absoluteSources=n._sources.toArray().map(function(M){return t.computeSourceURL(n.sourceRoot,M,f)});for(var m=o._mappings.toArray().slice(),v=n.__generatedMappings=[],w=n.__originalMappings=[],_=0,C=m.length;_<C;_++){var g=m[_],y=new u;y.generatedLine=g.generatedLine,y.generatedColumn=g.generatedColumn,g.source&&(y.source=i.indexOf(g.source),y.originalLine=g.originalLine,y.originalColumn=g.originalColumn,g.name&&(y.name=l.indexOf(g.name)),w.push(y)),v.push(y)}return h(n.__originalMappings,t.compareByOriginalPositions),n},d.prototype._version=3,Object.defineProperty(d.prototype,"sources",{get:function(){return this._absoluteSources.slice()}});function u(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}d.prototype._parseMappings=function(o,f){for(var n=1,l=0,i=0,m=0,v=0,w=0,_=o.length,C=0,g={},y={},M=[],P=[],L,E,I,T,X;C<_;)if(o.charAt(C)===";")n++,C++,l=0;else if(o.charAt(C)===",")C++;else{for(L=new u,L.generatedLine=n,T=C;T<_&&!this._charIsMappingSeparator(o,T);T++);if(E=o.slice(C,T),I=g[E],I)C+=E.length;else{for(I=[];C<T;)s.decode(o,C,y),X=y.value,C=y.rest,I.push(X);if(I.length===2)throw new Error("Found a source, but no line and column");if(I.length===3)throw new Error("Found a source and line, but no column");g[E]=I}L.generatedColumn=l+I[0],l=L.generatedColumn,I.length>1&&(L.source=v+I[1],v+=I[1],L.originalLine=i+I[2],i=L.originalLine,L.originalLine+=1,L.originalColumn=m+I[3],m=L.originalColumn,I.length>4&&(L.name=w+I[4],w+=I[4])),P.push(L),typeof L.originalLine=="number"&&M.push(L)}h(P,t.compareByGeneratedPositionsDeflated),this.__generatedMappings=P,h(M,t.compareByOriginalPositions),this.__originalMappings=M},d.prototype._findMapping=function(o,f,n,l,i,m){if(o[n]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+o[n]);if(o[l]<0)throw new TypeError("Column must be greater than or equal to 0, got "+o[l]);return e.search(o,f,i,m)},d.prototype.computeColumnSpans=function(){for(var o=0;o<this._generatedMappings.length;++o){var f=this._generatedMappings[o];if(o+1<this._generatedMappings.length){var n=this._generatedMappings[o+1];if(f.generatedLine===n.generatedLine){f.lastGeneratedColumn=n.generatedColumn-1;continue}}f.lastGeneratedColumn=1/0}},d.prototype.originalPositionFor=function(o){var f={generatedLine:t.getArg(o,"line"),generatedColumn:t.getArg(o,"column")},n=this._findMapping(f,this._generatedMappings,"generatedLine","generatedColumn",t.compareByGeneratedPositionsDeflated,t.getArg(o,"bias",p.GREATEST_LOWER_BOUND));if(n>=0){var l=this._generatedMappings[n];if(l.generatedLine===f.generatedLine){var i=t.getArg(l,"source",null);i!==null&&(i=this._sources.at(i),i=t.computeSourceURL(this.sourceRoot,i,this._sourceMapURL));var m=t.getArg(l,"name",null);return m!==null&&(m=this._names.at(m)),{source:i,line:t.getArg(l,"originalLine",null),column:t.getArg(l,"originalColumn",null),name:m}}}return{source:null,line:null,column:null,name:null}},d.prototype.hasContentsOfAllSources=function(){return this.sourcesContent?this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some(function(o){return o==null}):!1},d.prototype.sourceContentFor=function(o,f){if(!this.sourcesContent)return null;var n=this._findSourceIndex(o);if(n>=0)return this.sourcesContent[n];var l=o;this.sourceRoot!=null&&(l=t.relative(this.sourceRoot,l));var i;if(this.sourceRoot!=null&&(i=t.urlParse(this.sourceRoot))){var m=l.replace(/^file:\/\//,"");if(i.scheme=="file"&&this._sources.has(m))return this.sourcesContent[this._sources.indexOf(m)];if((!i.path||i.path=="/")&&this._sources.has("/"+l))return this.sourcesContent[this._sources.indexOf("/"+l)]}if(f)return null;throw new Error('"'+l+'" is not in the SourceMap.')},d.prototype.generatedPositionFor=function(o){var f=t.getArg(o,"source");if(f=this._findSourceIndex(f),f<0)return{line:null,column:null,lastColumn:null};var n={source:f,originalLine:t.getArg(o,"line"),originalColumn:t.getArg(o,"column")},l=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",t.compareByOriginalPositions,t.getArg(o,"bias",p.GREATEST_LOWER_BOUND));if(l>=0){var i=this._originalMappings[l];if(i.source===n.source)return{line:t.getArg(i,"generatedLine",null),column:t.getArg(i,"generatedColumn",null),lastColumn:t.getArg(i,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},ne.BasicSourceMapConsumer=d;function a(c,o){var f=c;typeof c=="string"&&(f=t.parseSourceMapInput(c));var n=t.getArg(f,"version"),l=t.getArg(f,"sections");if(n!=this._version)throw new Error("Unsupported version: "+n);this._sources=new r,this._names=new r;var i={line:-1,column:0};this._sections=l.map(function(m){if(m.url)throw new Error("Support for url field in sections not implemented.");var v=t.getArg(m,"offset"),w=t.getArg(v,"line"),_=t.getArg(v,"column");if(w<i.line||w===i.line&&_<i.column)throw new Error("Section offsets must be ordered and non-overlapping.");return i=v,{generatedOffset:{generatedLine:w+1,generatedColumn:_+1},consumer:new p(t.getArg(m,"map"),o)}})}return a.prototype=Object.create(p.prototype),a.prototype.constructor=p,a.prototype._version=3,Object.defineProperty(a.prototype,"sources",{get:function(){for(var c=[],o=0;o<this._sections.length;o++)for(var f=0;f<this._sections[o].consumer.sources.length;f++)c.push(this._sections[o].consumer.sources[f]);return c}}),a.prototype.originalPositionFor=function(o){var f={generatedLine:t.getArg(o,"line"),generatedColumn:t.getArg(o,"column")},n=e.search(f,this._sections,function(i,m){var v=i.generatedLine-m.generatedOffset.generatedLine;return v||i.generatedColumn-m.generatedOffset.generatedColumn}),l=this._sections[n];return l?l.consumer.originalPositionFor({line:f.generatedLine-(l.generatedOffset.generatedLine-1),column:f.generatedColumn-(l.generatedOffset.generatedLine===f.generatedLine?l.generatedOffset.generatedColumn-1:0),bias:o.bias}):{source:null,line:null,column:null,name:null}},a.prototype.hasContentsOfAllSources=function(){return this._sections.every(function(o){return o.consumer.hasContentsOfAllSources()})},a.prototype.sourceContentFor=function(o,f){for(var n=0;n<this._sections.length;n++){var l=this._sections[n],i=l.consumer.sourceContentFor(o,!0);if(i)return i}if(f)return null;throw new Error('"'+o+'" is not in the SourceMap.')},a.prototype.generatedPositionFor=function(o){for(var f=0;f<this._sections.length;f++){var n=this._sections[f];if(n.consumer._findSourceIndex(t.getArg(o,"source"))!==-1){var l=n.consumer.generatedPositionFor(o);if(l){var i={line:l.line+(n.generatedOffset.generatedLine-1),column:l.column+(n.generatedOffset.generatedLine===l.line?n.generatedOffset.generatedColumn-1:0)};return i}}}return{line:null,column:null}},a.prototype._parseMappings=function(o,f){this.__generatedMappings=[],this.__originalMappings=[];for(var n=0;n<this._sections.length;n++)for(var l=this._sections[n],i=l.consumer._generatedMappings,m=0;m<i.length;m++){var v=i[m],w=l.consumer._sources.at(v.source);w=t.computeSourceURL(l.consumer.sourceRoot,w,this._sourceMapURL),this._sources.add(w),w=this._sources.indexOf(w);var _=null;v.name&&(_=l.consumer._names.at(v.name),this._names.add(_),_=this._names.indexOf(_));var C={source:w,generatedLine:v.generatedLine+(l.generatedOffset.generatedLine-1),generatedColumn:v.generatedColumn+(l.generatedOffset.generatedLine===v.generatedLine?l.generatedOffset.generatedColumn-1:0),originalLine:v.originalLine,originalColumn:v.originalColumn,name:_};this.__generatedMappings.push(C),typeof C.originalLine=="number"&&this.__originalMappings.push(C)}h(this.__generatedMappings,t.compareByGeneratedPositionsDeflated),h(this.__originalMappings,t.compareByOriginalPositions)},ne.IndexedSourceMapConsumer=a,ne}var Be={},At;function Sn(){if(At)return Be;At=1;var t=Zt().SourceMapGenerator,e=pe(),r=/(\r?\n)/,s=10,h="$$$isSourceNode$$$";function p(d,u,a,c,o){this.children=[],this.sourceContents={},this.line=d??null,this.column=u??null,this.source=a??null,this.name=o??null,this[h]=!0,c!=null&&this.add(c)}return p.fromStringWithSourceMap=function(u,a,c){var o=new p,f=u.split(r),n=0,l=function(){var _=g(),C=g()||"";return _+C;function g(){return n<f.length?f[n++]:void 0}},i=1,m=0,v=null;return a.eachMapping(function(_){if(v!==null)if(i<_.generatedLine)w(v,l()),i++,m=0;else{var C=f[n]||"",g=C.substr(0,_.generatedColumn-m);f[n]=C.substr(_.generatedColumn-m),m=_.generatedColumn,w(v,g),v=_;return}for(;i<_.generatedLine;)o.add(l()),i++;if(m<_.generatedColumn){var C=f[n]||"";o.add(C.substr(0,_.generatedColumn)),f[n]=C.substr(_.generatedColumn),m=_.generatedColumn}v=_},this),n<f.length&&(v&&w(v,l()),o.add(f.splice(n).join(""))),a.sources.forEach(function(_){var C=a.sourceContentFor(_);C!=null&&(c!=null&&(_=e.join(c,_)),o.setSourceContent(_,C))}),o;function w(_,C){if(_===null||_.source===void 0)o.add(C);else{var g=c?e.join(c,_.source):_.source;o.add(new p(_.originalLine,_.originalColumn,g,C,_.name))}}},p.prototype.add=function(u){if(Array.isArray(u))u.forEach(function(a){this.add(a)},this);else if(u[h]||typeof u=="string")u&&this.children.push(u);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+u);return this},p.prototype.prepend=function(u){if(Array.isArray(u))for(var a=u.length-1;a>=0;a--)this.prepend(u[a]);else if(u[h]||typeof u=="string")this.children.unshift(u);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+u);return this},p.prototype.walk=function(u){for(var a,c=0,o=this.children.length;c<o;c++)a=this.children[c],a[h]?a.walk(u):a!==""&&u(a,{source:this.source,line:this.line,column:this.column,name:this.name})},p.prototype.join=function(u){var a,c,o=this.children.length;if(o>0){for(a=[],c=0;c<o-1;c++)a.push(this.children[c]),a.push(u);a.push(this.children[c]),this.children=a}return this},p.prototype.replaceRight=function(u,a){var c=this.children[this.children.length-1];return c[h]?c.replaceRight(u,a):typeof c=="string"?this.children[this.children.length-1]=c.replace(u,a):this.children.push("".replace(u,a)),this},p.prototype.setSourceContent=function(u,a){this.sourceContents[e.toSetString(u)]=a},p.prototype.walkSourceContents=function(u){for(var a=0,c=this.children.length;a<c;a++)this.children[a][h]&&this.children[a].walkSourceContents(u);for(var o=Object.keys(this.sourceContents),a=0,c=o.length;a<c;a++)u(e.fromSetString(o[a]),this.sourceContents[o[a]])},p.prototype.toString=function(){var u="";return this.walk(function(a){u+=a}),u},p.prototype.toStringWithSourceMap=function(u){var a={code:"",line:1,column:0},c=new t(u),o=!1,f=null,n=null,l=null,i=null;return this.walk(function(m,v){a.code+=m,v.source!==null&&v.line!==null&&v.column!==null?((f!==v.source||n!==v.line||l!==v.column||i!==v.name)&&c.addMapping({source:v.source,original:{line:v.line,column:v.column},generated:{line:a.line,column:a.column},name:v.name}),f=v.source,n=v.line,l=v.column,i=v.name,o=!0):o&&(c.addMapping({generated:{line:a.line,column:a.column}}),f=null,o=!1);for(var w=0,_=m.length;w<_;w++)m.charCodeAt(w)===s?(a.line++,a.column=0,w+1===_?(f=null,o=!1):o&&c.addMapping({source:v.source,original:{line:v.line,column:v.column},generated:{line:a.line,column:a.column},name:v.name})):a.column++}),this.walkSourceContents(function(m,v){c.setSourceContent(m,v)}),{code:a.code,map:c}},Be.SourceNode=p,Be}var Et;function Pn(){return Et||(Et=1,se.SourceMapGenerator=Zt().SourceMapGenerator,se.SourceMapConsumer=Cn().SourceMapConsumer,se.SourceNode=Sn().SourceNode),se}(function(t,e){e.__esModule=!0;var r=A,s=void 0;try{var h=Pn();s=h.SourceNode}catch{}s||(s=function(u,a,c,o){this.src="",o&&this.add(o)},s.prototype={add:function(a){r.isArray(a)&&(a=a.join("")),this.src+=a},prepend:function(a){r.isArray(a)&&(a=a.join("")),this.src=a+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}});function p(u,a,c){if(r.isArray(u)){for(var o=[],f=0,n=u.length;f<n;f++)o.push(a.wrap(u[f],c));return o}else if(typeof u=="boolean"||typeof u=="number")return u+"";return u}function d(u){this.srcFile=u,this.source=[]}d.prototype={isEmpty:function(){return!this.source.length},prepend:function(a,c){this.source.unshift(this.wrap(a,c))},push:function(a,c){this.source.push(this.wrap(a,c))},merge:function(){var a=this.empty();return this.each(function(c){a.add(["  ",c,`
`])}),a},each:function(a){for(var c=0,o=this.source.length;c<o;c++)a(this.source[c])},empty:function(){var a=this.currentLocation||{start:{}};return new s(a.start.line,a.start.column,this.srcFile)},wrap:function(a){var c=arguments.length<=1||arguments[1]===void 0?this.currentLocation||{start:{}}:arguments[1];return a instanceof s?a:(a=p(a,this,c),new s(c.start.line,c.start.column,this.srcFile,a))},functionCall:function(a,c,o){return o=this.generateList(o),this.wrap([a,c?"."+c+"(":"(",o,")"])},quotedString:function(a){return'"'+(a+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(a){var c=this,o=[];Object.keys(a).forEach(function(n){var l=p(a[n],c);l!=="undefined"&&o.push([c.quotedString(n),":",l])});var f=this.generateList(o);return f.prepend("{"),f.add("}"),f},generateList:function(a){for(var c=this.empty(),o=0,f=a.length;o<f;o++)o&&c.add(","),c.add(p(a[o],this));return c},generateArray:function(a){var c=this.generateList(a);return c.prepend("["),c.add("]"),c}},e.default=d,t.exports=e.default})(nt,nt.exports);var bn=nt.exports;(function(t,e){e.__esModule=!0;function r(n){return n&&n.__esModule?n:{default:n}}var s=V,h=W,p=r(h),d=A,u=bn,a=r(u);function c(n){this.value=n}function o(){}o.prototype={nameLookup:function(l,i){return this.internalNameLookup(l,i)},depthedLookup:function(l){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(l),")"]},compilerInfo:function(){var l=s.COMPILER_REVISION,i=s.REVISION_CHANGES[l];return[l,i]},appendToBuffer:function(l,i,m){return d.isArray(l)||(l=[l]),l=this.source.wrap(l,i),this.environment.isSimple?["return ",l,";"]:m?["buffer += ",l,";"]:(l.appendToBuffer=!0,l)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(l,i){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",l,",",JSON.stringify(i),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(l,i,m,v){this.environment=l,this.options=i,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!v,this.name=this.environment.name,this.isChild=!!m,this.context=m||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(l,i),this.useDepths=this.useDepths||l.useDepths||l.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||l.useBlockParams;var w=l.opcodes,_=void 0,C=void 0,g=void 0,y=void 0;for(g=0,y=w.length;g<y;g++)_=w[g],this.source.currentLocation=_.loc,C=C||_.loc,this[_.opcode].apply(this,_.args);if(this.source.currentLocation=C,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new p.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),`;
`]),this.decorators.push("return fn;"),v?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`),this.decorators.push(`}
`),this.decorators=this.decorators.merge()));var M=this.createFunctionContext(v);if(this.isChild)return M;var P={compiler:this.compilerInfo(),main:M};this.decorators&&(P.main_d=this.decorators,P.useDecorators=!0);var L=this.context,E=L.programs,I=L.decorators;for(g=0,y=E.length;g<y;g++)E[g]&&(P[g]=E[g],I[g]&&(P[g+"_d"]=I[g],P.useDecorators=!0));return this.environment.usePartial&&(P.usePartial=!0),this.options.data&&(P.useData=!0),this.useDepths&&(P.useDepths=!0),this.useBlockParams&&(P.useBlockParams=!0),this.options.compat&&(P.compat=!0),v?P.compilerOptions=this.options:(P.compiler=JSON.stringify(P.compiler),this.source.currentLocation={start:{line:1,column:0}},P=this.objectLiteral(P),i.srcName?(P=P.toStringWithSourceMap({file:i.destName}),P.map=P.map&&P.map.toString()):P=P.toString()),P},preamble:function(){this.lastContext=0,this.source=new a.default(this.options.srcName),this.decorators=new a.default(this.options.srcName)},createFunctionContext:function(l){var i=this,m="",v=this.stackVars.concat(this.registers.list);v.length>0&&(m+=", "+v.join(", "));var w=0;Object.keys(this.aliases).forEach(function(g){var y=i.aliases[g];y.children&&y.referenceCount>1&&(m+=", alias"+ ++w+"="+g,y.children[0]="alias"+w)}),this.lookupPropertyFunctionIsUsed&&(m+=", "+this.lookupPropertyFunctionVarDeclaration());var _=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&_.push("blockParams"),this.useDepths&&_.push("depths");var C=this.mergeSource(m);return l?(_.push(C),Function.apply(this,_)):this.source.wrap(["function(",_.join(","),`) {
  `,C,"}"])},mergeSource:function(l){var i=this.environment.isSimple,m=!this.forceBuffer,v=void 0,w=void 0,_=void 0,C=void 0;return this.source.each(function(g){g.appendToBuffer?(_?g.prepend("  + "):_=g,C=g):(_&&(w?_.prepend("buffer += "):v=!0,C.add(";"),_=C=void 0),w=!0,i||(m=!1))}),m?_?(_.prepend("return "),C.add(";")):w||this.source.push('return "";'):(l+=", buffer = "+(v?"":this.initializeBuffer()),_?(_.prepend("return buffer + "),C.add(";")):this.source.push("return buffer;")),l&&this.source.prepend("var "+l.substring(2)+(v?"":`;
`)),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return`
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim()},blockValue:function(l){var i=this.aliasable("container.hooks.blockHelperMissing"),m=[this.contextName(0)];this.setupHelperArgs(l,0,m);var v=this.popStack();m.splice(1,0,v),this.push(this.source.functionCall(i,"call",m))},ambiguousBlockValue:function(){var l=this.aliasable("container.hooks.blockHelperMissing"),i=[this.contextName(0)];this.setupHelperArgs("",0,i,!0),this.flushInline();var m=this.topStack();i.splice(1,0,m),this.pushSource(["if (!",this.lastHelper,") { ",m," = ",this.source.functionCall(l,"call",i),"}"])},appendContent:function(l){this.pendingContent?l=this.pendingContent+l:this.pendingLocation=this.source.currentLocation,this.pendingContent=l},append:function(){if(this.isInline())this.replaceStack(function(i){return[" != null ? ",i,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var l=this.popStack();this.pushSource(["if (",l," != null) { ",this.appendToBuffer(l,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(l){this.lastContext=l},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(l,i,m,v){var w=0;!v&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(l[w++])):this.pushContext(),this.resolvePath("context",l,w,i,m)},lookupBlockParam:function(l,i){this.useBlockParams=!0,this.push(["blockParams[",l[0],"][",l[1],"]"]),this.resolvePath("context",i,1)},lookupData:function(l,i,m){l?this.pushStackLiteral("container.data(data, "+l+")"):this.pushStackLiteral("data"),this.resolvePath("data",i,0,!0,m)},resolvePath:function(l,i,m,v,w){var _=this;if(this.options.strict||this.options.assumeObjects){this.push(f(this.options.strict&&w,this,i,m,l));return}for(var C=i.length;m<C;m++)this.replaceStack(function(g){var y=_.nameLookup(g,i[m],l);return v?[" && ",y]:[" != null ? ",y," : ",g]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(l,i){this.pushContext(),this.pushString(i),i!=="SubExpression"&&(typeof l=="string"?this.pushString(l):this.pushStackLiteral(l))},emptyHash:function(l){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(l?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var l=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(l.ids)),this.stringParams&&(this.push(this.objectLiteral(l.contexts)),this.push(this.objectLiteral(l.types))),this.push(this.objectLiteral(l.values))},pushString:function(l){this.pushStackLiteral(this.quotedString(l))},pushLiteral:function(l){this.pushStackLiteral(l)},pushProgram:function(l){l!=null?this.pushStackLiteral(this.programExpression(l)):this.pushStackLiteral(null)},registerDecorator:function(l,i){var m=this.nameLookup("decorators",i,"decorator"),v=this.setupHelperArgs(i,l);this.decorators.push(["fn = ",this.decorators.functionCall(m,"",["fn","props","container",v])," || fn;"])},invokeHelper:function(l,i,m){var v=this.popStack(),w=this.setupHelper(l,i),_=[];m&&_.push(w.name),_.push(v),this.options.strict||_.push(this.aliasable("container.hooks.helperMissing"));var C=["(",this.itemsSeparatedBy(_,"||"),")"],g=this.source.functionCall(C,"call",w.callParams);this.push(g)},itemsSeparatedBy:function(l,i){var m=[];m.push(l[0]);for(var v=1;v<l.length;v++)m.push(i,l[v]);return m},invokeKnownHelper:function(l,i){var m=this.setupHelper(l,i);this.push(this.source.functionCall(m.name,"call",m.callParams))},invokeAmbiguous:function(l,i){this.useRegister("helper");var m=this.popStack();this.emptyHash();var v=this.setupHelper(0,l,i),w=this.lastHelper=this.nameLookup("helpers",l,"helper"),_=["(","(helper = ",w," || ",m,")"];this.options.strict||(_[0]="(helper = ",_.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",_,v.paramsInit?["),(",v.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",v.callParams)," : helper))"])},invokePartial:function(l,i,m){var v=[],w=this.setupParams(i,1,v);l&&(i=this.popStack(),delete w.name),m&&(w.indent=JSON.stringify(m)),w.helpers="helpers",w.partials="partials",w.decorators="container.decorators",l?v.unshift(i):v.unshift(this.nameLookup("partials",i,"partial")),this.options.compat&&(w.depths="depths"),w=this.objectLiteral(w),v.push(w),this.push(this.source.functionCall("container.invokePartial","",v))},assignToHash:function(l){var i=this.popStack(),m=void 0,v=void 0,w=void 0;this.trackIds&&(w=this.popStack()),this.stringParams&&(v=this.popStack(),m=this.popStack());var _=this.hash;m&&(_.contexts[l]=m),v&&(_.types[l]=v),w&&(_.ids[l]=w),_.values[l]=i},pushId:function(l,i,m){l==="BlockParam"?this.pushStackLiteral("blockParams["+i[0]+"].path["+i[1]+"]"+(m?" + "+JSON.stringify("."+m):"")):l==="PathExpression"?this.pushString(i):l==="SubExpression"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:o,compileChildren:function(l,i){for(var m=l.children,v=void 0,w=void 0,_=0,C=m.length;_<C;_++){v=m[_],w=new this.compiler;var g=this.matchExistingProgram(v);if(g==null){this.context.programs.push("");var y=this.context.programs.length;v.index=y,v.name="program"+y,this.context.programs[y]=w.compile(v,i,this.context,!this.precompile),this.context.decorators[y]=w.decorators,this.context.environments[y]=v,this.useDepths=this.useDepths||w.useDepths,this.useBlockParams=this.useBlockParams||w.useBlockParams,v.useDepths=this.useDepths,v.useBlockParams=this.useBlockParams}else v.index=g.index,v.name="program"+g.index,this.useDepths=this.useDepths||g.useDepths,this.useBlockParams=this.useBlockParams||g.useBlockParams}},matchExistingProgram:function(l){for(var i=0,m=this.context.environments.length;i<m;i++){var v=this.context.environments[i];if(v&&v.equals(l))return v}},programExpression:function(l){var i=this.environment.children[l],m=[i.index,"data",i.blockParams];return(this.useBlockParams||this.useDepths)&&m.push("blockParams"),this.useDepths&&m.push("depths"),"container.program("+m.join(", ")+")"},useRegister:function(l){this.registers[l]||(this.registers[l]=!0,this.registers.list.push(l))},push:function(l){return l instanceof c||(l=this.source.wrap(l)),this.inlineStack.push(l),l},pushStackLiteral:function(l){this.push(new c(l))},pushSource:function(l){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),l&&this.source.push(l)},replaceStack:function(l){var i=["("],m=void 0,v=void 0,w=void 0;if(!this.isInline())throw new p.default("replaceStack on non-inline");var _=this.popStack(!0);if(_ instanceof c)m=[_.value],i=["(",m],w=!0;else{v=!0;var C=this.incrStack();i=["((",this.push(C)," = ",_,")"],m=this.topStack()}var g=l.call(this,m);w||this.popStack(),v&&this.stackSlot--,this.push(i.concat(g,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var l=this.inlineStack;this.inlineStack=[];for(var i=0,m=l.length;i<m;i++){var v=l[i];if(v instanceof c)this.compileStack.push(v);else{var w=this.incrStack();this.pushSource([w," = ",v,";"]),this.compileStack.push(w)}}},isInline:function(){return this.inlineStack.length},popStack:function(l){var i=this.isInline(),m=(i?this.inlineStack:this.compileStack).pop();if(!l&&m instanceof c)return m.value;if(!i){if(!this.stackSlot)throw new p.default("Invalid stack pop");this.stackSlot--}return m},topStack:function(){var l=this.isInline()?this.inlineStack:this.compileStack,i=l[l.length-1];return i instanceof c?i.value:i},contextName:function(l){return this.useDepths&&l?"depths["+l+"]":"depth"+l},quotedString:function(l){return this.source.quotedString(l)},objectLiteral:function(l){return this.source.objectLiteral(l)},aliasable:function(l){var i=this.aliases[l];return i?(i.referenceCount++,i):(i=this.aliases[l]=this.source.wrap(l),i.aliasable=!0,i.referenceCount=1,i)},setupHelper:function(l,i,m){var v=[],w=this.setupHelperArgs(i,l,v,m),_=this.nameLookup("helpers",i,"helper"),C=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");return{params:v,paramsInit:w,name:_,callParams:[C].concat(v)}},setupParams:function(l,i,m){var v={},w=[],_=[],C=[],g=!m,y=void 0;g&&(m=[]),v.name=this.quotedString(l),v.hash=this.popStack(),this.trackIds&&(v.hashIds=this.popStack()),this.stringParams&&(v.hashTypes=this.popStack(),v.hashContexts=this.popStack());var M=this.popStack(),P=this.popStack();(P||M)&&(v.fn=P||"container.noop",v.inverse=M||"container.noop");for(var L=i;L--;)y=this.popStack(),m[L]=y,this.trackIds&&(C[L]=this.popStack()),this.stringParams&&(_[L]=this.popStack(),w[L]=this.popStack());return g&&(v.args=this.source.generateArray(m)),this.trackIds&&(v.ids=this.source.generateArray(C)),this.stringParams&&(v.types=this.source.generateArray(_),v.contexts=this.source.generateArray(w)),this.options.data&&(v.data="data"),this.useBlockParams&&(v.blockParams="blockParams"),v},setupHelperArgs:function(l,i,m,v){var w=this.setupParams(l,i,m);return w.loc=JSON.stringify(this.source.currentLocation),w=this.objectLiteral(w),v?(this.useRegister("options"),m.push("options"),["options=",w]):m?(m.push(w),""):w}},function(){for(var n="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),l=o.RESERVED_WORDS={},i=0,m=n.length;i<m;i++)l[n[i]]=!0}(),o.isValidJavaScriptVariableName=function(n){return!o.RESERVED_WORDS[n]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(n)};function f(n,l,i,m,v){var w=l.popStack(),_=i.length;for(n&&_--;m<_;m++)w=l.nameLookup(w,i[m],v);return n?[l.aliasable("container.strict"),"(",w,", ",l.quotedString(i[m]),", ",JSON.stringify(l.source.currentLocation)," )"]:w}e.default=o,t.exports=e.default})(st,st.exports);var Mn=st.exports;(function(t,e){e.__esModule=!0;function r(_){return _&&_.__esModule?_:{default:_}}var s=qs,h=r(s),p=zt,d=r(p),u=ue,a=he,c=Mn,o=r(c),f=Gt,n=r(f),l=Wt,i=r(l),m=h.default.create;function v(){var _=m();return _.compile=function(C,g){return a.compile(C,g,_)},_.precompile=function(C,g){return a.precompile(C,g,_)},_.AST=d.default,_.Compiler=a.Compiler,_.JavaScriptCompiler=o.default,_.Parser=u.parser,_.parse=u.parse,_.parseWithoutProcessing=u.parseWithoutProcessing,_}var w=v();w.create=v,i.default(w),w.Visitor=n.default,w.default=w,e.default=w,t.exports=e.default})(De,De.exports);var xn=De.exports;const k=br(xn),kn=`
  <svg class='icon {{ className }}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
    <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    <path d='M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22l0 72L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l288 0 0 72c0 9.6 5.7 18.2 14.5 22z'/>
  </svg>
`,Ln=`
  <svg class='icon {{ className }}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
    <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    <path d='M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22l0 72 288 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-288 0 0 72c0 9.6-5.7 18.2-14.5 22z'/>
  </svg>
`,Xt=`
  <svg class='{{ className }}' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'>
    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    <path d='M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z'/>
  </svg>
`,er=`
  <svg class='icon {{ className }}'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
    <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
  </svg>
`,tr=`
  <svg class='icon {{ className }}'  xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
    <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    <path d='M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z'/>
  </svg>
`,rr=`
  <svg class='icon {{ className }}'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
  </svg>
`,In=`
  <svg class='icon {{ className }}' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 448 512'>
    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    <path d='M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z'/>
  </svg>
`,On=`
  <svg class='icon {{ className }}' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 384 512'>
    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    <path d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z'/>
  </svg>
`,sr=`
  <svg class='icon {{ className }}' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'>
    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    <path d='M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z'/>
  </svg>
`,nr=`
  <svg class='icon {{ className }}' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 448 512'>
    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    <path d='M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z'/>
  </svg>
`,ir=`
  <svg class='icon {{ className }}' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'>
    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    <path d='M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z'/>
  </svg>
`,ar=`
  <svg class='icon {{ className }}' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 640 512'>
    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    <path d="M256 0c-25.3 0-47.2 14.7-57.6 36c-7-2.6-14.5-4-22.4-4c-35.3 0-64 28.7-64 64V261.5l-2.7-2.7c-25-25-65.5-25-90.5 0s-25 65.5 0 90.5L106.5 437c48 48 113.1 75 181 75H296h8c1.5 0 3-.1 4.5-.4c91.7-6.2 165-79.4 171.1-171.1c.3-1.5 .4-3 .4-4.5V160c0-35.3-28.7-64-64-64c-5.5 0-10.9 .7-16 2V96c0-35.3-28.7-64-64-64c-7.9 0-15.4 1.4-22.4 4C303.2 14.7 281.3 0 256 0zM240 96.1c0 0 0-.1 0-.1V64c0-8.8 7.2-16 16-16s16 7.2 16 16V95.9c0 0 0 .1 0 .1V232c0 13.3 10.7 24 24 24s24-10.7 24-24V96c0 0 0 0 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16v55.9c0 0 0 .1 0 .1v80c0 13.3 10.7 24 24 24s24-10.7 24-24V160.1c0 0 0-.1 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16V332.9c-.1 .6-.1 1.3-.2 1.9c-3.4 69.7-59.3 125.6-129 129c-.6 0-1.3 .1-1.9 .2H296h-8.5c-55.2 0-108.1-21.9-147.1-60.9L52.7 315.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L119 336.4c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V96c0-8.8 7.2-16 16-16c8.8 0 16 7.1 16 15.9V232c0 13.3 10.7 24 24 24s24-10.7 24-24V96.1z"/>
  </svg>
`,or=`
  <svg class='icon {{ class }}' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 640 512'>
    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    <path d='M181.5 197.1l12.9 6.4c5.9 3 12.4 4.5 19.1 4.5c23.5 0 42.6-19.1 42.6-42.6V144c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v21.4c0 23.5 19.1 42.6 42.6 42.6c6.6 0 13.1-1.5 19.1-4.5l12.9-6.4 8.4-4.2L135.1 185c-4.5-3-7.1-8-7.1-13.3V168c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v3.7c0 5.3-2.7 10.3-7.1 13.3l-11.8 7.9 8.4 4.2zm-8.6 49.4L160 240l-12.9 6.4c-12.6 6.3-26.5 9.6-40.5 9.6c-3.6 0-7.1-.2-10.6-.6v.6c0 35.3 28.7 64 64 64h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384V336 320c0-23.7 12.9-44.4 32-55.4c9.4-5.4 20.3-8.6 32-8.6V240c0-26.5 21.5-48 48-48c8.8 0 16 7.2 16 16v32 16 48c0 8.8 7.2 16 16 16s16-7.2 16-16V204.3c0-48.2-30.8-91-76.6-106.3l-8.5-2.8c-8-2.7-12.6-11.1-10.4-19.3s10.3-13.2 18.6-11.6l19.9 4C576 86.1 640 164.2 640 254.9l0 1.1h0c0 123.7-100.3 224-224 224h-1.1H256h-.6C132 480 32 380 32 256.6V256 216.8c-10.1-14.6-16-32.3-16-51.4V144l0-1.4C6.7 139.3 0 130.5 0 120c0-13.3 10.7-24 24-24h2.8C44.8 58.2 83.3 32 128 32h64c44.7 0 83.2 26.2 101.2 64H296c13.3 0 24 10.7 24 24c0 10.5-6.7 19.3-16 22.6l0 1.4v21.4c0 1.4 0 2.8-.1 4.3c12-6.2 25.7-9.6 40.1-9.6h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-13.3 0-24 10.7-24 24v8h56.4c-15.2 17-24.4 39.4-24.4 64H320c-42.3 0-78.2-27.4-91-65.3c-5.1 .9-10.3 1.3-15.6 1.3c-14.1 0-27.9-3.3-40.5-9.6zM96 128a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm112 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z'/>
  </svg>
`,lr=`
  <svg class='icon {{ className }}' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'>
    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    <path d='M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z'/>
  </svg>
`,cr=`
  <svg class='icon {{ className }}' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 448 512'>
    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    <path d='M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z'/>
  </svg>
`,ur=`
  <svg class='icon {{ className }}' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 640 512'>
    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    <path d='M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z'/>
  </svg>
`,An=()=>{k.registerPartial("AngleRightIcon",kn),k.registerPartial("AngleLeftIcon",Ln),k.registerPartial("PenIcon",Xt),k.registerPartial("EllipsisIcon",er),k.registerPartial("PaperclipIcon",tr),k.registerPartial("SearchIcon",rr),k.registerPartial("PlusIcon",In),k.registerPartial("XmarkIcon",On),k.registerPartial("PencilIcon",sr),k.registerPartial("LockIcon",nr),k.registerPartial("ExitIcon",ir),k.registerPartial("HandIcon",ar),k.registerPartial("OtterIcon",or),k.registerPartial("PhotoIcon",lr),k.registerPartial("TrashIcon",cr),k.registerPartial("AddIcon",ur)};var O=(t=>(t.getMessageClass="getMessageClass",t.getChatTime="getChatTime",t.getMessageTime="getMessageTime",t.getDate="getDate",t.isCurrentUserById="isCurrentUserById",t.isCurrentUserByLogin="isCurrentUserByLogin",t.isCountMembersShow="isCountMembersShow",t.getMembers="getMembers",t.isAnyChatOpen="isAnyChatOpen",t.getChatAvatar="getChatAvatar",t.getChatTitle="getChatTitle",t.getGroupMessagesByDate="getGroupMessagesByDate",t.normalizeMessageGroupsOrder="normalizeMessageGroupsOrder",t.getMessagesAtDate="getMessagesAtDate",t.isChatActive="isChatActive",t.getIcon="getIcon",t.and="and",t.or="or",t.createHref="createHref",t.createBaseHref="createBaseHref",t.getFunction="getFunction",t.getName="getName",t.getNameById="getNameById",t.getNameByLogin="getNameByLogin",t.getNewMessagesCount="getNewMessagesCount",t.sortChatsByTime="sortChatsByTime",t.getUserAvatar="getUserAvatar",t))(O||{}),B=(t=>(t.signin="/",t.signup="/sign-up",t.error="/error",t.messenger="/messenger",t.settings="/settings",t.error404="/404",t))(B||{});const En=["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],Nn=1,Bn=1e3*Nn,Dn=60*Bn,Tn=60*Dn,hr=24*Tn,Rn=7*hr,Fn=""+new URL("user-114b75bf.png",import.meta.url).href;class pr{constructor(){this.listeners={}}on(e,r){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(r)}off(e,r){this.listeners[e]&&(this.listeners[e]=this.listeners[e].filter(s=>s!==r))}emit(e,...r){this.listeners[e]&&this.listeners[e].forEach(s=>s(...r))}}var Pe=(t=>(t.Updated="updated",t))(Pe||{});const it=(t,e)=>{for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r))try{if(e[r].constructor===Object)t[r]=it(t[r],e[r]);else if(e[r].constructor===Array){const s=[];for(let h=0;h<e[r].length;h++)s.push(it(t[r][h],e[r][h]));t[r]=s}else t[r]=e[r]}catch{t[r]=e[r]}return t},Un=(t,e,r)=>{if(typeof t!="object"||t===null)return t;const s=e.split(".").reduceRight((h,p)=>({[p]:h}),r);return it(t,s)},Hn=t=>typeof t=="object"&&t!==null&&t.constructor===Object&&Object.prototype.toString.call(t)==="[object Object]",Vn=t=>Array.isArray(t),Nt=t=>Hn(t)||Vn(t),dr=(t,e)=>{if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const[r,s]of Object.entries(t)){const h=e[r];if(Nt(s)&&Nt(h)){if(dr(s,h))continue;return!1}if(s!==h)return!1}return!0},fr=t=>{const e=(t==null?void 0:t.constructor)===Array?[]:{};for(const[r,s]of Object.entries(t))s===null||(s==null?void 0:s.constructor)!==Object&&(s==null?void 0:s.constructor)!==Array?e[r]=s:e[r]=fr(s);return e},ie={GET:"GET",PUT:"PUT",POST:"POST",DELETE:"DELETE"},qn=t=>!t||typeof t=="string"?t:Object.entries(t).reduce((e,[r,s])=>`${e}${e.length===1?"":"&"}${r}=${s}`,"?"),Wn=t=>typeof t=="object"&&t!==null&&Object.prototype.hasOwnProperty.call(t,"reason"),H=t=>alert(Wn(t)?t.reason:String(t)),Bt=t=>t.sort((e,r)=>{var s,h;return new Date((s=r==null?void 0:r.last_message)==null?void 0:s.time).getTime()-new Date((h=e==null?void 0:e.last_message)==null?void 0:h.time).getTime()});class ft{constructor(e){this.get=(r,s)=>{const h=qn(s.data);return this.request(`${this._url}${r||""}${h||""}`,{...s,method:ie.GET,data:h})},this.put=(r,s)=>this.request(`${this._url}${r||""}`,{...s,method:ie.PUT}),this.post=(r,s)=>this.request(`${this._url}${r||""}`,{...s,method:ie.POST}),this.delete=(r,s)=>this.request(`${this._url}${r||""}`,{...s,method:ie.DELETE}),this._url=`https://ya-praktikum.tech/api/v2/${e}`}request(e,r,s=1e4){const{method:h,data:p,headers:d}=r;return new Promise((u,a)=>{const c=new XMLHttpRequest;if(c.withCredentials=!0,c.open(h,e),c.timeout=s,c.onload=()=>{try{c.status>=200&&c.status<300&&u(c.response.includes('"')?JSON.parse(c.response):c.response),a(c.response.includes('"')?JSON.parse(c.response):c.response)}catch(o){H(o)}},c.onabort=()=>a(new Error("Запрос был отменен")),c.onerror=()=>a(new Error("Произошла ошибка во время запроса")),c.ontimeout=()=>a(new Error("Превышено время ожидания запроса")),p instanceof FormData)c.send(p);else{const o={"content-type":"application/json",...d};Object.keys(o).forEach(f=>c.setRequestHeader(f,o[f])),c.send(h===ie.GET||!p?void 0:JSON.stringify(p))}})}}const me=new ft("auth");class zn{signup(e){return me.post("/signup",{data:e})}signin(e){return me.post("/signin",{data:e})}getUser(){return me.get("/user",{})}logout(){return me.post("/logout",{})}}const ge=new zn;class Gn{async signup(e){if(!e){alert("Проверьте корректность введнных данных");return}try{await ge.signup(e),await this.getUser(),F.go(B.messenger)}catch(r){H(r)}}async signin(e){if(!e){alert("Проверьте корректность введнных данных");return}try{await ge.signin(e),await this.getUser(),F.go(B.messenger)}catch(r){if(typeof r=="object"&&r!==null&&gr(r,"reason")){const s=r;alert(s.reason),s.reason==="User already in system"&&(await this.getUser(),F.go(B.messenger))}else alert(r)}}async getUser(e){var r,s,h,p;try{S.set("user",await ge.getUser()),(((r=F.route)==null?void 0:r.path)===B.signin||((s=F.route)==null?void 0:s.path)===B.signup)&&F.go(B.messenger)}catch(d){if(!e){H(d);return}((h=F.route)==null?void 0:h.path)!==B.signin&&((p=F.route)==null?void 0:p.path)!==B.signup&&F.go(B.signin)}}async logout(){try{await ge.logout(),S.clear(),F.go(B.signin)}catch(e){H(e)}}}const be=new Gn;class $n extends pr{constructor(){super(...arguments),this._state={}}get state(){return this._state}set(e,r){Un(this._state,e,r),this.emit(Pe.Updated)}async init(){await be.getUser(!0)}clear(){this._state={}}}const S=new $n,Kn=t=>{if(!t)return{};const e={};return t.forEach(r=>{const s=new Date(r.time).toDateString();e[s]||(e[s]=[]),e[s].push(r)}),e},Jn=t=>Object.keys(t).sort((e,r)=>new Date(r).getTime()-new Date(e).getTime()),Qn=(t,e)=>t[e].reverse(),jn=t=>{const e=new Date(t),r=new Date,s=r.getTime()-e.getTime();return s<hr?e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):s<Rn?En[e.getDay()]:e.getFullYear()===r.getFullYear()?e.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit"}):e.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit"})},Yn=t=>new Date(t).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),Zn=t=>{const e=new Date,r=new Date(t);return r.getFullYear()===e.getFullYear()?r.toLocaleDateString("ru-RU",{day:"2-digit",month:"long"}):r.toLocaleDateString("ru-RU",{day:"2-digit",month:"long",year:"numeric"})},Xn=t=>{var e;return t===((e=S.state.user)==null?void 0:e.id)},ei=t=>{var e;return t===((e=S.state.user)==null?void 0:e.login)},ti=t=>t&&t.length>2?t.length:null,ri=t=>t%10===1&&t%100!==11?`${t} участник`:[2,3,4].includes(t%10)&&![12,13,14].includes(t%100)?`${t} участника`:`${t} участников`,si=t=>!!(t||t===0),mr=t=>{var e;return(e=S.state.chats)==null?void 0:e.find(r=>r.id===t)},ni=t=>{const e=mr(t);if(e)return e.avatar},ii=t=>{const e=mr(t);if(e)return e.title},ai=(t,e)=>t===e,oi=(t,e)=>{const r=k.partials[t];if(r)return new k.SafeString(r.split("{{ className }}").join(`${e}`));console.warn(`Иконка ${t} не найдена`)},li=t=>t?"outgoing":"incoming",ci=t=>`https://ya-praktikum.tech/api/v2/resources${t}`,ui=t=>new URL(Object.assign({"/static/images/user.png":Fn})[`/static/images/${t}`],self.location),hi=(t,e)=>!!(t&&e),pi=(t,e)=>!!(t||e),gr=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)&&e!==void 0,di=(t,e,r,s)=>{if(t)return e;if(r)return s},mt=(t,e,r)=>t||`${e} ${r}`,fi=t=>{var r,s;const e=(s=(r=S.state.chat)==null?void 0:r.users)==null?void 0:s.find(h=>h.id===t);return e?mt(e.display_name,e.first_name,e.second_name):"Unknown User"},mi=(t,e)=>{var s,h,p;const r=S.state.chats?(p=(h=(s=S.state.chats)==null?void 0:s.find(d=>d.id===e))==null?void 0:h.users)==null?void 0:p.find(d=>d.login===t):void 0;return r?mt(r.display_name,r.first_name,r.second_name):"Unknown User"},gi=t=>{var e,r;return(r=(e=S.state.chats)==null?void 0:e.find(s=>s.id===t))==null?void 0:r.unread_count},vi=t=>{var r,s;const e=(s=(r=S.state.chat)==null?void 0:r.users)==null?void 0:s.find(h=>h.id===t);if(e)return e.avatar},_i=()=>{k.registerHelper(O.getMessageClass,li),k.registerHelper(O.getChatTime,jn),k.registerHelper(O.getMessageTime,Yn),k.registerHelper(O.getDate,Zn),k.registerHelper(O.isCurrentUserById,Xn),k.registerHelper(O.isCurrentUserByLogin,ei),k.registerHelper(O.isCountMembersShow,ti),k.registerHelper(O.getMembers,ri),k.registerHelper(O.isAnyChatOpen,si),k.registerHelper(O.getChatAvatar,ni),k.registerHelper(O.getChatTitle,ii),k.registerHelper(O.getGroupMessagesByDate,Kn),k.registerHelper(O.normalizeMessageGroupsOrder,Jn),k.registerHelper(O.getMessagesAtDate,Qn),k.registerHelper(O.isChatActive,ai),k.registerHelper(O.getIcon,oi),k.registerHelper(O.and,hi),k.registerHelper(O.or,pi),k.registerHelper(O.createHref,ci),k.registerHelper(O.createBaseHref,ui),k.registerHelper(O.getFunction,di),k.registerHelper(O.getName,mt),k.registerHelper(O.getNameById,fi),k.registerHelper(O.getNameByLogin,mi),k.registerHelper(O.getNewMessagesCount,gi),k.registerHelper(O.getUserAvatar,vi)},x=(t,e)=>{if(t in k.helpers)throw`Компонент с именем "${t}" уже зарегистрирован`;k.registerHelper(t,function({hash:r,data:s,fn:h}){const p=new e(r),d=`data-id="${p.id}"`;"ref"in r&&((s.root.__refs=s.root.__refs||{})[r.ref]=p),(s.root.__children=s.root.__children||[]).push({component:p,embded(a){var o;const c=a.querySelector(`[${d}]`);c&&((o=p.getContent())==null||o.append(...Array.from(c.childNodes)),c.replaceWith(p.getContent()))}});const u=h?h(this):"";return`<div ${d}>${u}</div>`})};let ve;const yi=new Uint8Array(16);function wi(){if(!ve&&(ve=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ve))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ve(yi)}const R=[];for(let t=0;t<256;++t)R.push((t+256).toString(16).slice(1));function Ci(t,e=0){return R[t[e+0]]+R[t[e+1]]+R[t[e+2]]+R[t[e+3]]+"-"+R[t[e+4]]+R[t[e+5]]+"-"+R[t[e+6]]+R[t[e+7]]+"-"+R[t[e+8]]+R[t[e+9]]+"-"+R[t[e+10]]+R[t[e+11]]+R[t[e+12]]+R[t[e+13]]+R[t[e+14]]+R[t[e+15]]}const Si=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Dt={randomUUID:Si};function Pi(t,e,r){if(Dt.randomUUID&&!e&&!t)return Dt.randomUUID();t=t||{};const s=t.random||(t.rng||wi)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,e){r=r||0;for(let h=0;h<16;++h)e[r+h]=s[h];return e}return Ci(s)}const U=class U{constructor(e){this.id=Pi(),this.props={events:{}},this.refs={},this._element=null,this.setProps=s=>{s&&Object.assign(this.props,s)};const r=new pr;this.props=this._makePropsProxy({events:this.props.events,...e},this),this.eventBus=()=>r,this._registerEvents(r),r.emit(U.EVENTS.INIT)}_addEventListeners(){const{events:e={}}=this.props;this._element&&Object.keys(e).forEach(r=>{var s;gr(e,r)&&((s=this._element)==null||s.addEventListener(r,e[r]))})}_registerEvents(e){e.on(U.EVENTS.INIT,this._init.bind(this)),e.on(U.EVENTS.FLOW_CDM,this._componentDidMount.bind(this)),e.on(U.EVENTS.FLOW_CDU,this._componentDidUpdate.bind(this)),e.on(U.EVENTS.FLOW_CWU,this._componentWillUnmount.bind(this)),e.on(U.EVENTS.FLOW_RENDER,this._render.bind(this))}_init(){this.init(),this.eventBus().emit(U.EVENTS.FLOW_RENDER)}init(){}_checkInDom(){if(document.body.contains(this._element)){setTimeout(()=>this._checkInDom(),1e3);return}this.eventBus().emit(U.EVENTS.FLOW_CWU,this.props)}_componentDidMount(){this._checkInDom(),this.componentDidMount()}componentDidMount(){}dispatchComponentDidMount(){this.eventBus().emit(U.EVENTS.FLOW_CDM)}_componentDidUpdate(e,r){this.componentDidUpdate(e,r)&&this.eventBus().emit(U.EVENTS.FLOW_RENDER)}componentDidUpdate(e,r){return!0}get element(){return this._element}_render(){const r=this._compile(this.render(),this.props).firstElementChild;this._element&&this._element.replaceWith(r),this._element=r,this._addEventListeners()}_compile(e,r){var d;const s={...r,__refs:this.refs},h=k.compile(e)(s),p=document.createElement("template");return p.innerHTML=h,(d=s.__children)==null||d.forEach(({embded:u})=>{u(p.content)}),p.content}render(){return""}getContent(){var e,r;return((r=(e=this.element)==null?void 0:e.parentNode)==null?void 0:r.nodeType)===Node.DOCUMENT_FRAGMENT_NODE&&setTimeout(()=>{var s,h;((h=(s=this.element)==null?void 0:s.parentNode)==null?void 0:h.nodeType)!==Node.DOCUMENT_FRAGMENT_NODE&&this.dispatchComponentDidMount()},100),this.element}_makePropsProxy(e,r){return new Proxy(e,{get(s,h){const p=s[h.toString()];return typeof p=="function"?p.bind(s):p},set(s,h,p){const d={...s};return s[h]=p,r.eventBus().emit(U.EVENTS.FLOW_CDU,d,s),!0},deleteProperty(){throw new Error("Нет доступа")}})}_unmountComponent(){this._element&&(this._componentWillUnmount(),this._removeListeners())}_componentWillUnmount(){this.componentWillUnmount()}componentWillUnmount(){}_removeListeners(){const{events:e}=this.props;e&&Object.keys(e).forEach(r=>{var s;(s=this._element)==null||s.removeEventListener(r,e[r])})}destroy(){this._unmountComponent(),this.element&&this.element.remove()}};U.EVENTS={INIT:"init",FLOW_CDM:"flow:component-did-mount",FLOW_CDU:"flow:component-did-update",FLOW_CWU:"flow:component-will-unmount",FLOW_RENDER:"flow:render"};let b=U;const bi=`
  <div class='menu__item'>
      {{ getIcon icon iconClass }}
    <span class='menu__title'>{{ text }}</span>
  </div>
`;class Mi extends b{constructor(e){super(e),this.props.events={click:this.props.onClick||(()=>{})}}render(){return bi}}const xi=`
  <div>
    {{{ ProfileItem
      label='Новый пароль'
      placeholder='Новый пароль'
      name='new_password'
      type='password'
      ref='new_password'
      text=errorText
      validate=passwordValidate
      onBlur=onPasswordBlur
    }}}
    {{{ ProfileItem
      label='Новый пароль (повтор)'
      placeholder='Новый пароль'
      name='repeat_new_password'
      type='password'
      ref='repeat_new_password'
      text=errorText
      validate=repeatPasswordValidate
      onBlur=onRepeatPasswordBlur
    }}}
  </div>
`,gt=(t,e)=>(t.length===0&&e.setProps({text:"Введите логин"}),t.length<3?(e.setProps({text:"Логин не может содержать меньше 3 символов"}),!1):/^\S*$/.test(t)?/^[^\u0410-\u044F\u0401\u0451]+$/.test(t)?/^[a-zA-Z0-9\-_]*$/.test(t)?/^(?![0-9]+$)[a-zA-Z0-9\-_]*$/.test(t)?t.length>20?(e.setProps({text:"Логин не может содержать больше 20 символов"}),!1):(e.setProps({text:""}),!0):(e.setProps({text:"Логин не может состоять только из цифр"}),!1):(e.setProps({text:'Логин не может содержать спецсимволы, кроме "-" и "_"'}),!1):(e.setProps({text:"Логин не может содержать буквы кириллицы"}),!1):(e.setProps({text:"Логин не может содержать пробелы"}),!1)),Me=(t,e)=>(t.length===0&&e.setProps({text:"Введите пароль"}),t.length<8?(e.setProps({text:"Пароль не может содержать меньше 8 символов"}),!1):/[A-Z]/.test(t)?/\d/.test(t)?t.length>40?(e.setProps({text:"Пароль не может содержать больше 40 символов"}),!1):(e.setProps({text:""}),!0):(e.setProps({text:"Пароль должен содержать хотя бы одну цифру"}),!1):(e.setProps({text:"Пароль должен содержать хотя бы одну заглавную букву"}),!1)),vr=(t,e)=>{const[r,s]=t;return r&&s&&r!==s?(e.setProps({text:"Пароли должны совпадать"}),!1):(e.setProps({text:""}),!0)},at=(t,e)=>/^[\p{Lu}A-ZА-ЯЁ][\p{L}A-Za-z]*$/u.test(t)?/^[^\d]*$/.test(t)?/^\S*$/.test(t)?/^[a-zA-Zа-яА-Я0-9-]*$/.test(t)?(e.setProps({text:""}),!0):(e.setProps({text:'Наличие спецсимволов, кроме "-" недопустимо'}),!1):(e.setProps({text:"Наличие пробелов недопустимо"}),!1):(e.setProps({text:"Наличие цифр недопустимо"}),!1):(e.setProps({text:"Первая буква должна быть заглавной"}),!1),_r=(t,e)=>/^[^\u0410-\u044F\u0401\u0451]+$/.test(t)?/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t)?(e.setProps({text:""}),!0):(e.setProps({text:'Email должен содержать логин, символ "@", а затем домен через точку'}),!1):(e.setProps({text:"Email не может содержать буквы кириллицы"}),!1),yr=(t,e)=>/^(?:\+?[78]|8)\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/.test(t)?(e.setProps({text:""}),!0):(e.setProps({text:'Номер телефона может содержать от 10 до 15 цифр и допускает наличие символа "+" в начале'}),!1);class ki extends b{constructor(e){super(e),this.props.passwordValidate=Me,this.props.repeatPasswordValidate=vr,this.props.onPasswordBlur=()=>this._isValidPassword&&this._isPasswordsSame,this.props.onRepeatPasswordBlur=()=>this._isPasswordsSame}get _password(){return this.refs.new_password.rawValue}get _repeatPassword(){return this.refs.repeat_new_password.rawValue}get value(){if(this._isValidPassword&&this._isPasswordsSame)return this._password;console.error("Валидация не пройдена")}get _isValidPassword(){return this.props.passwordValidate(this._password,this.refs.new_password.refs.errorText)}get _isPasswordsSame(){return this.props.repeatPasswordValidate([this._password,this._repeatPassword],this.refs.repeat_new_password.refs.errorText)}render(){return xi}}const Li=`
  <div class='loader'></div>
`;class Ii extends b{render(){return Li}}const Oi=`
  <button class='button button_icon {{ class }}'>
    {{ getIcon icon iconClass }}
    {{# if text }}
      <span class='button__title'>{{ text }}</span>
    {{/if}}
  </button>
`;class Ai extends b{constructor(e){super(e),this.props.events={click:this.props.onClick||(()=>{})}}render(){return Oi}}const Ei=`
  <li class='form-field' ref={{ ref }}>
      <label class='form-field__label'>
          {{ title }}
          {{{ Input
            className='form-field__input'
            name=name
            type=type
            onBlur=onBlur
            onChange=onChange
            ref='input'
          }}}
          {{{ ErrorMessage text=errorText ref='errorText' }}}
      </label>
  </li>
`;class Ni extends b{constructor(e){super(e),this.props.onBlur=()=>this._isValid,this.props.validate=this.props.validate||(()=>!0)}get _value(){return this.refs.input.element.value}get value(){if(this._isValid)return this._value;console.error("Валидация не пройдена")}get _isValid(){return this.props.validate(this._value,this.refs.errorText)}render(){return Ei}}const Bi=`
  <form class='form' ref={{ ref }}>
    <div class='form__header'>
      <h3 class='form__title'>{{ title }}</h3>
    </div>
    <div class='form__body'>
      {{# if text }}
        <p class='form__text'>{{ text }}</p>
      {{/if}}
      {{# if fields }}
        <ul class='form__fields-list'>
          {{# each fields }}
            {{{ FormInput
              title=this.label
              type=this.type
              name=this.name
              errorText=this.errorText
              validate=this.validate
              ref=this.ref
            }}}
          {{/ each }}
        </ul>
      {{/if}}
      {{# if imgLoad }}
        {{{ ImageInput
          withAddIcon=true
          withRemoveIcon=(or avatar '')
          avatar=avatar
          errorText=errorText
          onChange=onAvatarChange
        }}}
      {{/if}}
    </div>
    <div class='form__footer'>
      {{# if mainButtonTitle }}
        {{{ Button
          type='primary'
          title=mainButtonTitle
          className='modal-width'
          onClick=onMainButtonClick
        }}}
      {{/if}}
      {{{ Button
        type='link'
        title=additionalButtonTitle
        className='modal-width'
        onClick=onAdditionalButtonClick
      }}}
    </div>
  </form>
`;class Di extends b{constructor(e){super(e),this.props.events={submit:this.props.onSubmit||(r=>{r.preventDefault()})}}get values(){if(Object.keys(this.refs).length===1)return Object.entries(this.refs)[0][1].value;let e=!1;const r=Object.entries(this.refs).reduce((s,[h,p])=>(p.value||(e=!0),s[h]=p.value,s),{});return e?void 0:r}render(){return Bi}}const Ti=`
  <p class='error {{ className }}' ref='{{ ref }}'>{{ text }}</p>
`;class Ri extends b{render(){return Ti}}const Fi=`
  <div class='wrapper wrapper_avatar'>
    {{# if avatar }}
      <img src='{{ createHref avatar }}' alt='Аватар' class='avatar {{ avatarClass }}'/>
    {{ else }}
      {{# if user_avatar }}
        <img src='{{ createHref user_avatar }}' alt='Аватар' class='avatar {{ avatarClass }}'/>
      {{ else }}
        <img src={{ createBaseHref 'user.png' }}
          alt='Без аватара' class='no-avatar {{ avatarClass }}'/>
      {{/ if }}
    {{/ if }}
  </div>
`;class Ui extends b{render(){return Fi}}const Hi=`
  <div class='content'>
    <div class='content__title{{# if search }} content__title_search{{/ if }}'>{{ title }}</div>
    {{# unless search }}
      {{# if content }}
        <p class='content__text'>
          {{# if (isCurrentUserByLogin login) }}
            <span class='content__author'>Вы: </span>
          {{ else }}
            <span class='content__author'>{{ getNameByLogin login id }}: </span>
          {{/ if }}
          {{ content }}
        </p>
      {{/if}}
    {{/ unless }}
  </div>
`,D=(t,e)=>class extends t{constructor(r){let s=e(S.state);super({...r,...s}),this._onChangeStoreCb=()=>{const h=e(S.state);dr(s,h)||(this.setProps({...h}),s=fr(h))},S.on(Pe.Updated,this._onChangeStoreCb)}componentWillUnmount(){super.componentWillUnmount(),S.off(Pe.Updated,this._onChangeStoreCb)}};class Vi extends b{render(){return Hi}}const qi=t=>({search:t.search}),Wi=D(Vi,qi),zi=`
  <div class='image-preview {{ imgClass }}'>
    {{# if withAddIcon }}
      {{{ UploadButton onClick=onUpload }}}
    {{/if}}
    {{# if withRemoveIcon }}
      {{{ RemoveButton onClick=onRemove }}}
    {{/if}}
      <img
        class='previewImage {{ imgClass }}'
        src='{{# if img }}{{ createHref img }}{{ else }}{{ createBaseHref 'user.png' }}{{/if}}'
        alt='Загруженное фото'
      />
  </div>
`;class Gi extends b{render(){return zi}}const $i=`
  <div class='info'>
    {{# unless search }}
      {{# if time }}
          <div class='info__time'>{{ getChatTime time }}</div>
      {{/if}}
    {{/ unless }}
    {{# if (getNewMessagesCount id unreadCount) }}
      <div class='info__new-messages{{# if search }} info__new-messages_search{{/ if }}'>
        {{ getNewMessagesCount id unreadCount }}
      </div>
    {{/ if }}
  </div>
`;class Ki extends b{render(){return $i}}const Ji=t=>({search:t.search}),Qi=D(Ki,Ji),ji=`
  <div class='custom-file-upload'>
    {{{ FilesInput onChange=onChange }}}
    {{{ ImagePreview
      img=avatar
      withAddIcon=withAddIcon
      withRemoveIcon=withRemoveIcon
      iconClass='icon_blue'
      onUpload=onUpload
      onRemove=onRemove
    }}}
    {{{ ErrorMessage errorText=errorText }}}
  </div>
`;class Yi extends b{constructor(e){super(e),this.props.onUpload=()=>{const[r]=document.querySelectorAll("#add_file");r.click()},this.props.onRemove=()=>{}}render(){return ji}}const Zi=`
  <input
    class='input {{ className }}'
    name={{ name }}
    placeholder={{ placeholder }} 
    ref={{ ref }}
    type='{{ type }}'
    value={{ value }}
  >
`;class Xi extends b{constructor(e){super({...e,events:{blur:e.onBlur||(()=>{})}})}render(){return Zi}}const ea=`
  <div class='menu menu_members-list'>
    <ul class='menu__list'>
      {{{ MembersAddItem }}}
      <li class='menu__item'>
        <div class='chat-item__divider'/>
      </li>
        {{# each users }}
          {{{ MembersRemoveItem
            id=this.id
            login=this.login
            display_name=(getName this.display_name this.first_name this.second_name)
          }}}
      {{/each}}
    </ul>
  </div>
`;class ta extends b{render(){return ea}}const ra=t=>{var e;return{users:(e=t.chat)==null?void 0:e.users}},sa=D(ta,ra),na=`
  <div class='menu menu_files'>
    <div class='menu__item'>
      {{{ ImageIcon className='icon_blue' }}}
      <span class='menu__title'>Фото или видео</span>
    </div>
    <div class='menu__item'>
      {{{ FileIcon className='icon_blue' }}}
      <span class='menu__title'>Файл</span>
    </div>
    <div class='menu__item'>
      {{{ LocationIcon className='icon_blue' }}}
      <span class='menu__title'>Локация</span>
    </div>
  </div>
`;class ia extends b{render(){return na}}const aa=`
  <div class='menu menu_members'>
    {{{ MenuItem
      icon='PhotoIcon'
      iconClass='icon_blue'
      text='Изменить аватар чата'
      onClick=onChangeAvatar
    }}}
    {{# if isAdmin }}
      {{{ MenuItem
        icon='TrashIcon'
        iconClass='icon_blue'
        text='Удалить чат'
        onClick=onRemoveChatHistory
      }}}
    {{/ if }}
  </div>
`;class oa{switchChatMenu(){var e,r,s,h;(e=S.state.modals)!=null&&e.isMembersOpen&&!((r=S.state.modals)!=null&&r.isChatMenuOpen)&&S.set("modals.isMembersOpen",!((s=S.state.modals)!=null&&s.isMembersOpen)),S.set("modals.isChatMenuOpen",!((h=S.state.modals)!=null&&h.isChatMenuOpen))}switchMembers(){var e,r,s,h;(e=S.state.modals)!=null&&e.isChatMenuOpen&&!((r=S.state.modals)!=null&&r.isMembersOpen)&&S.set("modals.isChatMenuOpen",!((s=S.state.modals)!=null&&s.isChatMenuOpen)),S.set("modals.isMembersOpen",!((h=S.state.modals)!=null&&h.isMembersOpen))}closeRemoveChat(){S.set("modals.isRemoveChatModalOpen",!1)}closeAvatarLoad(){S.set("modals.isAvatarLoadModalOpen",!1)}closeAddUser(){S.set("modals.isAddUserModalOpen",!1)}closeRemoveUser(){S.set("modals.isRemoveUserModalOpen",!1)}switchExit(){var e;S.set("modals.isExitModalOpen",!((e=S.state.modals)!=null&&e.isExitModalOpen))}switchEditProfile(){var e;S.set("modals.isEditProfileOpen",!((e=S.state.modals)!=null&&e.isEditProfileOpen))}switchEditPassword(){var e;S.set("modals.isEditPasswordOpen",!((e=S.state.modals)!=null&&e.isEditPasswordOpen))}switchCreateChat(){var e;S.set("modals.isCreateChatModalOpen",!((e=S.state.modals)!=null&&e.isCreateChatModalOpen))}switchFileMenu(){var e;S.set("modals.isFilesMenuOpen",!((e=S.state.modals)!=null&&e.isFilesMenuOpen))}switchAvatarLoad(){var e;S.set("modals.isAvatarLoadModalOpen",!((e=S.state.modals)!=null&&e.isAvatarLoadModalOpen))}switchRemoveChat(){var e;S.set("modals.isRemoveChatModalOpen",!((e=S.state.modals)!=null&&e.isRemoveChatModalOpen))}switchAddUser(){var e;S.set("modals.isAddUserModalOpen",!((e=S.state.modals)!=null&&e.isAddUserModalOpen))}switchRemoveUser(){var e;S.set("modals.isRemoveUserModalOpen",!((e=S.state.modals)!=null&&e.isRemoveUserModalOpen))}setSearch(e){S.set("search",e.trim())}closeAll(){S.set("modals",void 0)}setUserToRemove(e){S.set("chat.toRemove",e)}}const N=new oa;class la extends b{constructor(e){super(e),this.props.onChangeAvatar=()=>{N.switchAvatarLoad(),N.switchChatMenu()},this.props.onRemoveChatHistory=()=>{N.switchRemoveChat(),N.switchChatMenu()}}render(){return aa}}const ca=t=>{var e,r,s;return{isAdmin:((s=(r=(e=t.chat)==null?void 0:e.users)==null?void 0:r.find(h=>{var p;return h.id===((p=t.user)==null?void 0:p.id)}))==null?void 0:s.role)==="admin"}},ua=D(la,ca),ha=`
    <div class='message_wrapper {{# if outgoing }}outgoing{{ else }}incoming{{/ if }}'>
    {{# unless outgoing }}
        {{{ ImagePreview img=avatar imgClass='mini' }}}
    {{/unless}}
    <div class='message message_{{ getMessageClass outgoing }}'>
      {{# unless outgoing }}
          <div class='message__author'>{{ author }}</div>
      {{/ unless }}
      <div class='message__content {{ getMessageClass outgoing }}'>
        {{ content }}
        {{# if img }}
          <img src='{{ createHref img }}' alt='Изображение' class='message__image'/>
        {{/if}}
        <div class='message__time'>{{ getMessageTime time }}</div>
      </div>
    </div>
    {{# if outgoing }}
        {{{ ImagePreview img=userAvatar imgClass='mini' }}}
    {{/if}}
  </div>
`;class pa extends b{render(){return ha}}const da=t=>{var e;return{userAvatar:(e=t.user)==null?void 0:e.avatar}},fa=D(pa,da),ma=`
  <div class='body body_chat' id='chat_body'>
    {{# each (normalizeMessageGroupsOrder (getGroupMessagesByDate messages)) }}
      {{# each (getMessagesAtDate (getGroupMessagesByDate ../messages) this) }}
        {{{ Message
          content=this.content
          time=this.time
          outgoing=(isCurrentUserById this.user_id)
          author=(getNameById this.user_id)
          img=this.img
          avatar=(getUserAvatar this.user_id)
        }}}
      {{/ each }}
        <div class='chat__date'>{{ getDate this }}</div>
    {{/ each }}
  </div>
`;class ga extends b{render(){return ma}}const va=t=>{var e;return{messages:(e=t.chat)==null?void 0:e.messages}},_a=D(ga,va),ya=`
  <div class='footer footer_chat' ref='ref'>
    {{{ FormWithoutButtons
      ref='messageForm'
      refInput='messageInput'
      onSubmit=onSend
      className='input_chat input_message'
      placeholder='Сообщение'
      value=search
      name='message'
    }}}
    {{{ IconButton
      class='chat-space__button'
      icon='SearchIcon'
      iconClass='icon_light'
      onClick=onSend
    }}}
  </div>
`,Q=new ft("chats");class wa{get(e){return Q.get("/",{data:e})}create(e){return Q.post("/",{data:e})}delete(e){return Q.delete("/",{data:{chatId:e}})}getUsers(e){return Q.get(`/${e}/users`,{})}uploadAvatar(e,r){return r.append("chatId",e.toString()),Q.put("/avatar",{data:r})}addUsers(e){return Q.put("/users",{data:e})}deleteUsers(e){return Q.delete("/users",{data:e})}getToken(e){return Q.post(`/token/${e}`,{})}}const z=new wa,ae=new ft("user");class Ca{changeProfile(e){return ae.put("/profile",{data:e})}changeAvatar(e){return ae.put("/profile/avatar",{data:e})}changePassword(e){return ae.put("/password",{data:e})}get(e){return ae.get("/",{data:{id:e}})}search(e){return ae.post("/search",{data:{login:e}})}}const we=new Ca,Sa="wss://ya-praktikum.tech/ws/chats";class Pa{constructor({chatId:e,token:r}){var s;this._userId=((s=S.state.user)==null?void 0:s.id)||0,this._chatId=e,this._token=r,this.socket=this._createConnection(),this._start()}_createConnection(){return new WebSocket(`${Sa}/${this._userId}/${this._chatId}/${this._token}`)}_start(){this.socket.addEventListener("open",()=>{console.log(`${this._chatId}: Соединение установлено`),this._pingPong.bind(this)}),this.socket.addEventListener("close",e=>{e.wasClean?console.log("Соединение закрыто чисто"):(console.log("Обрыв соединения"),this.socket=this._createConnection(),this._start()),console.log(`Код: ${e.code} | Причина: ${e.reason}`)}),this.socket.addEventListener("message",async e=>{try{console.log("NEW",JSON.parse(e.data)),await J.setMessages(JSON.parse(e.data))}catch(r){H(r)}}),this.socket.addEventListener("error",e=>console.error("Ошибка",e))}async sendMessage(e){this.socket.send(JSON.stringify({content:e,type:"message"})),S.set("chat.last_message",{user:S.state.user,time:new Date,content:e})}getOldMessages(){this.socket.send(JSON.stringify({content:"0",type:"get old"}))}_pingPong(){setInterval(()=>this.socket.send(JSON.stringify({type:"ping"})),1e4)}}const ba=(t,e)=>{let r=0;for(const s of t.concat(e))r^=s;return r};class Ma{async createChat(e){var r,s,h;if(!e){alert("Проверьте корректность введнных данных");return}try{if(await z.create({title:e}),S.state.chats){const p=(r=S.state.chats)==null?void 0:r.map(a=>a.id);await this.getAllChats();const d=(s=S.state.chats)==null?void 0:s.map(a=>a.id),u=ba(d,p);S.set("chat",(h=S.state.chats)==null?void 0:h.find(a=>a.id===u)),S.set("modals.isCreateChatModalOpen",!1),S.set("modals.isAddUserModalOpen",!0)}}catch(p){H(p)}}async getAllChats(){try{const e=await z.get();if(S.state.chats)S.set("chats",Bt(e));else{const r=await Promise.all(e.map(async s=>({...s,socket:new Pa({token:(await z.getToken(s.id)).token,chatId:s.id}),users:await z.getUsers(s.id)})));S.set("chats",Bt(r))}}catch(e){H(e)}}async addUser(e){var r;if(!e){alert("Проверьте корректность введнных данных");return}if(!((r=S.state.chat)!=null&&r.id)){alert("Не выбран чат");return}try{const s=await we.search(e);if(s.length>1){alert("Введите логин пользователя полностью");return}await z.addUsers({users:[s[0].id],chatId:S.state.chat.id}),await this.getUsers(S.state.chat.id),S.set("modals.isAddUserModalOpen",!1)}catch(s){H(s)}}async removeUser(){var e,r;if(!((e=S.state.chat)!=null&&e.id)){alert("Не найден активный чат");return}if(!((r=S.state.chat)!=null&&r.toRemove)){alert("Не найден пользователь");return}try{await z.deleteUsers({chatId:S.state.chat.id,users:[S.state.chat.toRemove]}),await this.getUsers(S.state.chat.id),S.set("modals.isRemoveUserModalOpen",!1)}catch(s){H(s)}}async getUsers(e){if(e)try{const r=await z.getUsers(e);S.set("chat.users",r)}catch(r){H(r)}}sendMessage(e){var r,s;e&&((s=(r=S.state.chat)==null?void 0:r.socket)==null||s.sendMessage(e))}switchActiveChat(e){var s,h,p,d,u;let r=null;e!==((h=(s=S.state)==null?void 0:s.chat)==null?void 0:h.id)&&(r=e),r?(S.set("chat",{...(p=S.state.chats)==null?void 0:p.find(a=>a.id===r),messages:[]}),(u=(d=S.state.chat)==null?void 0:d.socket)==null||u.getOldMessages()):S.set("chat",void 0),N.closeAll()}async changeChatAvatar(e){var r;try{const s=(r=S.state.chat)==null?void 0:r.id;if(s){const h=await z.uploadAvatar(s,e);N.closeAvatarLoad(),S.set("chat",h),await this.getAllChats()}}catch(s){console.error(s)}}async setMessages(e){var r,s;if(Array.isArray(e))S.set("chat.messages",e.reverse());else if(e.type==="message"&&(S.set("chat.messages",[...((r=S.state.chat)==null?void 0:r.messages)||[],e]),e.user_id===((s=S.state.user)==null?void 0:s.id)))return;await this.getAllChats()}async removeChat(){var r;const e=(r=S.state.chat)==null?void 0:r.id;if(e)try{S.set("chat",void 0),await z.delete(e),await this.getAllChats()}catch(s){H(s)}}}const J=new Ma;class xa extends b{constructor(e){super(e),this.props.openFilesMenu=N.switchFileMenu,this.props.onSend=r=>{r.preventDefault(),J.sendMessage(this.message.trim()),this.refs.messageForm.clear()}}get message(){return this.refs.messageForm.value}render(){return ya}}const ka=t=>{var e;return{isFilesMenuOpen:(e=t.modals)==null?void 0:e.isFilesMenuOpen}},La=D(xa,ka),Ia=`
  <div class='header header_chat'>
    {{{ ChatInfo unreadCount=unreadCount }}}
    {{{ IconButton
      class='chat-space__menu'
      title='Настройки'
      icon='EllipsisIcon'
      iconClass='icon_blue'
      onClick=openChatMenu
    }}}
    {{# if isMembersOpen }}
      {{{ MembersModal }}}
    {{/ if }}
  </div>
`;class Oa extends b{constructor(e){super(e),this.props.openChatMenu=N.switchChatMenu}render(){return Ia}}const Aa=t=>{var e;return{isMembersOpen:(e=t.modals)==null?void 0:e.isMembersOpen}},Ea=D(Oa,Aa),Na=`
  <li class='chat-item{{# if (isChatActive id openChatId) }} chat-item_active{{/ if }}'>
    <div class='chat-item__divider'/> 
    <div class='chat-item__body'>
      {{{ Avatar avatar=avatar user_avatar=user.avatar }}}
      {{{ Content
        id=id
        title=title
        login=login
        content=content
      }}}
      {{{ Info time=time id=id }}}
    </div>
    <div class='chat-item__divider'>
  </li>
`;class Ba extends b{constructor(e){super(e),this.props.events={click:async()=>J.switchActiveChat(this.props.id)}}render(){return Na}}const Da=t=>{var e;return{openChatId:(e=t.chat)==null?void 0:e.id}},Ta=D(Ba,Da),Ra=`
  <ul class='chat-list'>
    {{# each chats }}
      {{{ ChatItem 
        id=this.id
        avatar=this.avatar
        user_avatar=this.last_message.user.avatar
        title=this.title
        login=this.last_message.user.login
        content=this.last_message.content
        time=this.last_message.time
      }}}
    {{/ each }}
  </ul>
`;class Fa extends b{render(){return Ra}}const Ua=t=>({chats:t.search&&t.chats?Object.values(t.chats).filter(e=>e.title.toLowerCase().includes((t.search||"").toLowerCase())):t.chats}),Ha=D(Fa,Ua),Va=`
  <div class='chat-space{{# if (isAnyChatOpen openChatId) }} chat-space_with-chat{{
  else }} chat-space_without-chat{{/ if }}'>
    {{# if openChatId }}
      {{{ Chat
        ref='chat'
        avatar=(getChatAvatar openChatId)
        title=(getChatTitle openChatId)
        users=users
      }}}
    {{ else }}
      {{{ WithoutChat }}}
    {{/ if }}
  </div>
`;class qa extends b{get message(){return this.refs.chat.message}get newUserName(){return this.refs.chat.newUserName}render(){return Va}}const Wa=t=>{var e;return{openChatId:(e=t.chat)==null?void 0:e.id,chat:t.chat}},za=D(qa,Wa),Ga=`
  <div class='chat-panel' ref={{ ref }}>
    <div class='chat-panel__header'>
      {{{ FormWithoutButtons
        ref='searchForm'
        refInput='searchInput'
        onChange=onSearch
        onSubmit=onSearch
        className='input_chat input_search'
        placeholder='Поиск'
        value=search
        name='search'
      }}}
      {{{ IconButton
        class='button_panel'
        title='Создать чат'
        icon='PenIcon'
        iconClass='icon_blue'
        onClick=openCreateChatModal
      }}}
      {{{ IconButton
        class='button_panel'
        title='Профиль'
        icon='AngleRightIcon'
        iconClass='icon_blue'
        onClick=goToProfile
      }}}
    </div>
    {{{ ChatList }}}
      {{# if isCreateChatModalOpen }}
        {{{ Modal
          title='Создать чат'
          buttonTitle='Создать'
          text='Введите название чата'
          fields=newChatFields
          onAction=createChat
          onCancel=openCreateChatModal
          ref='createChatModal'
        }}}
      {{/ if }}
  </div>
`;class $a extends b{constructor(e){super(e),this.props.openCreateChatModal=N.switchCreateChat,this.props.newChatFields=[{type:"text",name:"chat_name"}],this.props.createChat=async r=>{r.preventDefault(),await J.createChat(this.refs.createChatModal.newChatName.trim())},this.props.onSearch=r=>{r.preventDefault(),N.setSearch(this.searchString)},this.props.goToProfile=()=>F.go(B.settings)}get searchString(){return this.refs.searchForm.value}render(){return Ga}}const Ka=t=>{var e;return{search:t.search,isCreateChatModalOpen:(e=t.modals)==null?void 0:e.isCreateChatModalOpen}},Ja=D($a,Ka),Qa=`
  <div class='chat-space__body'>
    <p class='chat-space__dummy'>Выберите чат, чтобы отправить сообщение</p>
  </div>
`;class ja extends b{render(){return Qa}}const Ya=`
  <div class='wrapper wrapper_max wrapper_modal'>
    {{{ Form
      ref=ref
      title=title
      mainButtonTitle=buttonTitle
      additionalButtonTitle='Отменить'
      text=text
      imgLoad=imgLoad
      avatar=avatar
      errorText=errorText
      fields=fields
      onMainButtonClick=onAction
      onAdditionalButtonClick=onCancel
      onAvatarChange=onAvatarChange
    }}}
  </div>
`;class Za extends b{get newChatName(){var e;return(e=this.refs.createChatModal)==null?void 0:e.values}get newUserName(){var e;return(e=this.refs.addUserModal)==null?void 0:e.values}render(){return Ya}}const Xa=`
  <div class='item'>
    <div class='item__data'>
      <span class='item__label'>{{ label }}</span>
      {{# if (or isEditProfileOpen isEditPasswordOpen) }}
        {{{ TextInput
          className='item__value'
          value=value
          name=name
          type=type
          ref='input'
          onBlur=onBlur
          validate=validate
          placeholder=placeholder
        }}}
      {{ else }}
        <span class='item__value'>{{ value }}</span>
      {{/if}}
    </div>
      <div class='item__divider'></div>
      {{{ ErrorMessage text=errorText ref='errorText' className='error_min' }}}
  </div>
`;class eo extends b{constructor(e){super(e),this.props.onBlur=this.props.onBlur||(()=>this.isValid),this.props.validate=this.props.validate||(()=>!0)}get _value(){return this.refs.input.element.value}get rawValue(){return this._value}get value(){if(this.isValid)return this._value;console.error("Валидация не пройдена")}get isValid(){return this.props.validate(this._value,this.refs.errorText)}render(){return Xa}}const to=t=>{var e,r;return{isEditProfileOpen:(e=t.modals)==null?void 0:e.isEditProfileOpen,isEditPasswordOpen:(r=t.modals)==null?void 0:r.isEditPasswordOpen}},ro=D(eo,to),so=`
  <div class='body body_profile' ref={{ ref }}>
    {{# if isEditPasswordOpen }}
      {{{ ProfileItem
        label='Старый пароль'
        placeholder='Старый пароль'
        name='old_password'
        type='password'
        ref='oldPassword'
        text=errorText
        validate=passwordValidate
      }}}
      {{{ PasswordItems ref='newPassword' }}}
    {{ else }}
      {{{ ProfileItem
        label='Почта'
        placeholder='Почта'
        name='email'
        type='email'
        ref='email'
        value=email
        text=errorText
        validate=emailValidate
      }}}
      {{{ ProfileItem
        label='Логин'
        placeholder='Логин'
        name='login'
        type='text'
        ref='login'
        value=login
        text=errorText
        validate=loginValidate
      }}}
      {{{ ProfileItem
        label='Имя'
        placeholder='Имя'
        name='first_name'
        type='text'
        ref='first_name'
        value=first_name
        text=errorText
        validate=nameValidate
      }}}
      {{{ ProfileItem
        label='Фамилия'
        placeholder='Фамилия'
        name='second_name'
        type='text'
        ref='second_name'
        value=second_name
        text=errorText
        validate=nameValidate
      }}}
      {{{ ProfileItem
        label='Имя в чате'
        placeholder='Имя в чате'
        name='display_name'
        type='text'
        ref='display_name'
        value=display_name
        text=errorText
        validate=namealidate
      }}}
      {{{ ProfileItem
        label='Телефон'
        placeholder='Телефон'
        name='phone'
        type='tel'
        ref='phone'
        value=phone
        text=errorText
        validate=phoneValidate
      }}}
    {{/if}}
  </div>
`;class no extends b{constructor(e){super(e),this.props.emailValidate=_r,this.props.loginValidate=gt,this.props.passwordValidate=Me,this.props.repeatPasswordValidate=vr,this.props.nameValidate=at,this.props.phoneValidate=yr}get values(){let e=!1;const r=Object.entries(this.refs).reduce((s,[h,p])=>(p.value||(e=!0),s[h]=p.value,s),{});return e?void 0:r}render(){return so}}const io=t=>{var e,r,s,h,p,d,u,a;return{isEditProfileOpen:(e=t.modals)==null?void 0:e.isEditProfileOpen,isEditPasswordOpen:(r=t.modals)==null?void 0:r.isEditPasswordOpen,login:(s=t.user)==null?void 0:s.login,email:(h=t.user)==null?void 0:h.email,phone:(p=t.user)==null?void 0:p.phone,first_name:(d=t.user)==null?void 0:d.first_name,second_name:(u=t.user)==null?void 0:u.second_name,display_name:(a=t.user)==null?void 0:a.display_name}},ao=D(no,io),oo=`
  <div class='footer footer_profile {{# if (or isEditProfileOpen isEditPasswordOpen) }}edit{{/if}}'>
    {{# if (or isEditProfileOpen isEditPasswordOpen) }}
      {{{ Button
        type='primary'
        title='Сохранить'
        className='max-width'
        onClick=(getFunction isEditProfileOpen onSaveProfile isEditPasswordOpen onSavePassword)
      }}}
      {{{ Button
        type='link'
        title='Отменить'
        className='max-width'
        onClick=(getFunction isEditProfileOpen onEditProfile isEditPasswordOpen onEditPassword)
      }}}
    {{ else }}
      {{{ IconButton
        class='footer__button'
        title='Изменить данные'
        icon='PencilIcon'
        iconClass='icon_blue icon_large'
        onClick=onEditProfile
      }}}
      {{{ IconButton
        class='footer__button'
        title='Изменить пароль'
        icon='LockIcon'
        iconClass='icon_blue icon_large'
        onClick=onEditPassword
      }}}
      {{{ IconButton
        class='footer__button'
        title='Выйти из профиля'
        icon='ExitIcon'
        iconClass='icon_blue icon_large'
        onClick=onExit
      }}}
    {{/if}}
  </div>
`;class lo extends b{render(){return oo}}const co=t=>{var e,r;return{isEditProfileOpen:(e=t.modals)==null?void 0:e.isEditProfileOpen,isEditPasswordOpen:(r=t.modals)==null?void 0:r.isEditPasswordOpen}},uo=D(lo,co),ho=`
  <div class='header header_profile'>
    {{{ ImageInput
      avatar=avatar
      withAddIcon=isEditProfileOpen
      withRemoveIcon=(and isEditProfileOpen avatar)
      onChange=onAvatarChange
    }}}
    <p class='header__title'>{{ display_name }}</p>
  </div>
`;class po{async changeProfile(e){if(!e){alert("Проверьте корректность введнных данных");return}try{const r=await we.changeProfile(e);S.set("user",r),S.set("modals.isEditProfileOpen",!1)}catch(r){H(r)}}async changeAvatar(e){if(e)try{const r=await we.changeAvatar(e);S.set("user",r)}catch(r){H(r)}}async changePassword(e){if(!e){alert("Проверьте корректность введнных данных");return}try{await we.changePassword(e),S.set("modals.isEditPasswordOpen",!1)}catch(r){H(r)}}}const ot=new po;class fo extends b{constructor(e){super(e),this.props.onAvatarChange=async r=>{const s=r.target;if(s!=null&&s.files&&s.files.length>0){const h=new FormData;h.append("avatar",s.files[0]),await ot.changeAvatar(h)}}}render(){return ho}}const mo=t=>{var e,r,s;return{isEditProfileOpen:(e=t.modals)==null?void 0:e.isEditProfileOpen,avatar:(r=t.user)==null?void 0:r.avatar,display_name:(s=t.user)==null?void 0:s.display_name}},go=D(fo,mo),vo=`
  <button class='{{ type }}-button{{# if className }} {{ className }}{{/ if }}'>
    {{ title }}
  </button>
`;class _o extends b{constructor(e){super(e),this.props.events={click:this.props.onClick||(()=>{})}}render(){return vo}}const yo=`
  <input
    class='{{ className }}'
    name='{{ name }}'
    type='{{ type }}'
    placeholder='{{ placeholder }}'
    ref='{{ ref }}'
  />
`;class wo extends b{constructor(e){super(e),this.props.events={blur:this.props.onBlur||(()=>{})}}render(){return yo}}const Co=`
  <div class='chat-wrapper' ref='chat'>
    {{{ ChatHeader }}}
    <div class='chat-space__divider'></div>
    {{# if isChatMenuOpen }}
      {{{ MembersMenu }}}
    {{/ if }}
    {{{ ChatBody }}}
    <div class='chat-space__divider'></div>
    {{{ ChatFooter ref='chatFooter' }}}
    {{# if isAddUserModalOpen }}
      {{{ Modal
        title='Добавить пользователя'
        buttonTitle='Добавить'
        label='Логин'
        inputName='add'
        fields=addUserFields
        ref='addUserModal'
        onAction=addUser
        onCancel=closeAddUserModal
      }}}
      {{/ if }}
      {{# if isRemoveUserModalOpen }}
        {{{ Modal
          title='Удалить пользователя'
          buttonTitle='Удалить'
          text='Вы действительно хотите удалить пользователя из чата?'
          onCancel=closeRemoveUserModal
          onAction=removeUser
        }}}
      {{/ if }}
      {{# if isAvatarLoadModalOpen }}
        {{{ Modal
          title='Изменить аватар чата'
          imgLoad=true
          errorText='Ошибка, попробуйте еще раз'
          avatar=avatar
          onCancel=closeAvatarLoadModal
          onAvatarChange=onAvatarChange
        }}}
      {{/ if }}
      {{# if isRemoveChatModalOpen }}
        {{{ Modal
          title='Удалить чат'
          buttonTitle='Удалить'
          text='Вы действительно хотите удалить чат? Это действие нельзя отменить'
          onCancel=closeRemoveChatModal
          onAction=removeChat
        }}}
      {{/ if }}
  </div>
`;class So extends b{constructor(e){super(e),this.props.addUserFields=[{label:"Логин",type:"text",name:"login"}],this.props.closeRemoveChatModal=N.closeRemoveChat,this.props.closeAvatarLoadModal=N.closeAvatarLoad,this.props.closeAddUserModal=N.closeAddUser,this.props.closeRemoveUserModal=N.closeRemoveUser,this.props.addUser=async r=>{r.preventDefault(),await J.addUser(this.newUserName.trim())},this.props.removeUser=async r=>{r.preventDefault(),await J.removeUser()},this.props.removeChat=async r=>{r.preventDefault(),await J.removeChat()},this.props.onAvatarChange=async r=>{r.preventDefault();const s=r.target;if(s!=null&&s.files&&s.files.length>0){const h=new FormData;h.append("avatar",s.files[0]),await J.changeChatAvatar(h)}}}get message(){return this.refs.chatFooter.message}get newUserName(){return this.refs.addUserModal.newUserName}render(){return Co}}const Po=t=>{var e,r,s,h,p;return{isChatMenuOpen:(e=t.modals)==null?void 0:e.isChatMenuOpen,isAddUserModalOpen:(r=t.modals)==null?void 0:r.isAddUserModalOpen,isRemoveUserModalOpen:(s=t.modals)==null?void 0:s.isRemoveUserModalOpen,isRemoveChatModalOpen:(h=t.modals)==null?void 0:h.isRemoveChatModalOpen,isAvatarLoadModalOpen:(p=t.modals)==null?void 0:p.isAvatarLoadModalOpen}},bo=D(So,Po),Mo=`
  <form class='form_without-buttons' ref={{ ref }}>
    {{{ TextInput
      className=className
      placeholder=placeholder
      value=value
      name=name
      type='text'
      ref=refInput
      onChange=onChange
    }}}
  </form>
`;class xo extends b{constructor(e){super(e),this.props.events={submit:this.props.onSubmit||(r=>{r.preventDefault()})}}get value(){return Object.values(this.refs)[0].element.value}clear(){Object.values(this.refs)[0].element.value=""}render(){return Mo}}const ko=`
  <div class='chat-info'>
    {{{ Avatar avatar=avatar avatarClass='avatar_mini' }}}
    <div class='chat-info__data'>
      <div class='chat-info__title'>{{ title }}</div>
      {{# if (isCountMembersShow users) }}
        <div class='chat-info__members-count'>{{ getMembers (isCountMembersShow users) }}</div>
      {{/ if }}
    </div>
  </div>
`;class Lo extends b{constructor(e){super(e),this.props.events={click:N.switchMembers}}render(){return ko}}const Io=t=>{var e,r,s;return{users:(e=t.chat)==null?void 0:e.users,title:(r=t.chat)==null?void 0:r.title,avatar:(s=t.chat)==null?void 0:s.avatar}},Oo=D(Lo,Io),Ao=`
  <li class='menu__item menu__item_hover'>
    {{{ AddIcon className='icon_blue' }}}
    <span class='menu__title'>Добавить пользователя</span>
  </li>
`;class Eo extends b{constructor(e){super(e),this.props.events={click:()=>{N.switchAddUser(),N.switchMembers()}}}render(){return Ao}}const No=`
    <li class='menu__item'>
        {{{ RemoveIcon className='icon_blue' }}}
        <div class='user-info'>
            <span class='menu__title'>{{ display_name }}</span>
            <span class='menu__label'>{{ login }}</span>
        </div>
    </li>
`;class Bo extends b{constructor(e){super(e),this.props.events={click:()=>{N.setUserToRemove(this.props.id),N.switchRemoveUser(),N.switchMembers()}}}render(){return No}}const Do=`
  {{{ IconButton
    class='button_action button_add'
    title='Загрузить фото'
    icon='PlusIcon'
    iconClass='icon_blue'
    ref='uploadButton'
  }}}
`;class To extends b{constructor(e){super(e),this.props.events={click:this.props.onClick||(()=>{})}}render(){return Do}}const Ro=`
  {{{ IconButton
    class='button_action button_remove'
    title='Удалить фото'
    icon='XmarkIcon'
    iconClass='icon_blue'
  }}}
`;class Fo extends b{constructor(e){super(e),this.props.events={click:this.props.onClick||(()=>{})}}render(){return Ro}}const Uo=`
  <input id='add_file' name='avatar' type='file' accept='image/*'/>
`;class Ho extends b{constructor(e){super(e),this.props.events={change:this.props.onChange||(()=>{})}}render(){return Uo}}class Vo extends b{render(){return ur}}class qo extends b{render(){return er}}class Wo extends b{render(){return ir}}const zo=`
  <svg class='icon {{ className }}' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 384 512'>
    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    <path d='M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z'/>
  </svg>
`;class Go extends b{render(){return zo}}class $o extends b{render(){return ar}}const Ko=`
  <svg class='icon {{ className }}' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 384 512'>
    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    <path d='M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM64 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm152 32c5.3 0 10.2 2.6 13.2 6.9l88 128c3.4 4.9 3.7 11.3 1 16.5s-8.2 8.6-14.2 8.6H216 176 128 80c-5.8 0-11.1-3.1-13.9-8.1s-2.8-11.2 .2-16.1l48-80c2.9-4.8 8.1-7.8 13.7-7.8s10.8 2.9 13.7 7.8l12.8 21.4 48.3-70.2c3-4.3 7.9-6.9 13.2-6.9z'/>
  </svg>
`;class Jo extends b{render(){return Ko}}const Qo=`
  <svg class='icon {{ className }}' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 448 512'>
    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    <path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z'/>
  </svg>
`;class jo extends b{render(){return Qo}}const Yo=`
  <svg class='icon {{ className }}' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 384 512'>
    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z'/>
  </svg>
`;class Zo extends b{render(){return Yo}}class Xo extends b{render(){return nr}}class el extends b{render(){return or}}class tl extends b{render(){return tr}}class rl extends b{render(){return Xt}}class sl extends b{render(){return sr}}class nl extends b{render(){return lr}}const il=`
  <svg class='icon {{ className }}' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 640 512'>
    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    <path d='M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM472 200H616c13.3 0 24 10.7 24 24s-10.7 24-24 24H472c-13.3 0-24-10.7-24-24s10.7-24 24-24z'/>
  </svg>
`;class al extends b{render(){return il}}class ol extends b{render(){return rr}}class ll extends b{render(){return cr}}const cl=()=>{x("FilesInput",Ho),x("RemoveButton",Fo),x("UploadButton",To),x("MembersRemoveItem",Bo),x("MembersAddItem",Eo),x("ChatInfo",Oo),x("MenuItem",Mi),x("PasswordItems",ki),x("Loader",Ii),x("FormWithoutButtons",xo),x("Button",_o),x("IconButton",Ai),x("Input",wo),x("FormInput",Ni),x("Form",Di),x("ErrorMessage",Ri),x("Avatar",Ui),x("Content",Wi),x("ImagePreview",Gi),x("Info",Qi),x("ImageInput",Yi),x("TextInput",Xi),x("MembersModal",sa),x("FilesMenu",ia),x("MembersMenu",ua),x("Message",fa),x("ChatBody",_a),x("Chat",bo),x("ChatFooter",La),x("ChatHeader",Ea),x("ChatItem",Ta),x("ChatList",Ha),x("ChatSpace",za),x("ChatsPanel",Ja),x("WithoutChat",ja),x("Modal",Za),x("ProfileItem",ro),x("ProfileBody",ao),x("ProfileFooter",uo),x("ProfileHeader",go),x("AddIcon",Vo),x("EllipsisVerticalIcon",qo),x("ExitIcon",Wo),x("FileIcon",Go),x("HandIcon",$o),x("ImageIcon",Jo),x("LeftArrowIcon",jo),x("LocationIcon",Zo),x("LockIcon",Xo),x("OtterIcon",el),x("PaperclipIcon",tl),x("PenIcon",rl),x("PencilIcon",sl),x("PhotoIcon",nl),x("RemoveIcon",al),x("SearchIcon",ol),x("TrashIcon",ll)},ul=`
  <main class='wrapper wrapper_max wrapper_login'>
    {{# if loading }}
      {{{ Loader }}}
    {{ else }}
      {{{ Form
        title='Вход'
        mainButtonTitle='Авторизоваться'
        additionalButtonTitle='Нет аккаунта?'
        fields=fields
        onMainButtonClick=onLogin
        onAdditionalButtonClick=goToSignup
        ref='loginForm'
        onSubmit=onLogin
      }}}
    {{/if}}
  </main>
`;class hl extends b{constructor(e){super(e),this.props.fields=[{label:"Логин",type:"text",name:"login",validate:gt,ref:"login"},{label:"Пароль",type:"password",name:"password",validate:Me,ref:"password"}],this.props.onLogin=r=>{r.preventDefault(),be.signin(this.refs.loginForm.values).catch(console.error)},this.props.goToSignup=()=>F.go(B.signup)}render(){return ul}}const pl=t=>({user:t.user,loading:t.loading}),dl=D(hl,pl),fl=`
  <main class='wrapper wrapper_max wrapper_signup'>
  {{# if loading }}
      {{{ Loader }}}
  {{ else }}
    {{{ Form
      title='Регистрация'
      mainButtonTitle='Зарегистрироваться'
      additionalButtonTitle='Войти'
      fields=fields
      onMainButtonClick=onSignup
      onAdditionalButtonClick=goToLogin
      ref='signupForm'
      onSubmit=onSignup
    }}}
  {{/ if }}
  </main>
`;class ml extends b{constructor(e){super(e),this.props.fields=[{label:"Почта",type:"email",name:"email",validate:_r,ref:"email"},{label:"Логин",type:"text",name:"login",validate:gt,ref:"login"},{label:"Имя",type:"text",name:"first_name",validate:at,ref:"first_name"},{label:"Фамилия",type:"text",name:"second_name",validate:at,ref:"second_name"},{label:"Телефон",type:"tel",name:"phone",validate:yr,ref:"phone"},{label:"Пароль",type:"password",name:"password",validate:Me,ref:"password"}],this.props.onSignup=r=>{r.preventDefault(),be.signup(this.refs.signupForm.values).catch(console.error)},this.props.goToLogin=()=>F.go(B.signin)}render(){return fl}}const gl=t=>({user:t.user,loading:t.loading}),vl=D(ml,gl),_l=`
  <main class='wrapper wrapper_max wrapper_error'>
  {{# if loading }}
      {{{ Loader }}}
  {{ else }}
    <h1 class='error__code'>{{ code }}</h1>
      {{ getIcon icon 'icon_blue icon_big' }}
    <p class='error__message'>{{ message }}</p>
    {{{ IconButton
      class='back-button'
      icon='AngleLeftIcon'
      iconClass='icon_blue'
      text='Вернуться на главную'
      onClick=goToChats
    }}}
      {{/ if }}
  </main>
`;let Tt=class extends b{constructor(e){super(e),this.props.goToChats=()=>F.go(B.messenger)}render(){return _l}};const yl=`
  <main class='wrapper wrapper_max wrapper_max'>
    {{{ ChatsPanel }}}
    {{{ ChatSpace }}}
  </main>
`;class wl extends b{constructor(e){super(e),J.getAllChats().catch(console.error)}render(){return yl}}const Cl=`
  <main class='wrapper wrapper_max wrapper_profile'>
  {{# if loading }}
      {{{ Loader }}}
  {{ else }}
    {{{ IconButton
      class='button_chats'
      title='Чаты'
      icon='AngleLeftIcon'
      iconClass='icon_blue'
      onClick=goToChats
    }}}
    <form class='profile'>
      {{{ ProfileHeader }}}
      {{{ ProfileBody ref='profileData' }}}
      {{{ ProfileFooter
        onSave=onSave
        onExit=onExit
        onEditProfile=onEditProfile
        onEditPassword=onEditPassword
        onSaveProfile=onSaveProfile
        onSavePassword=onSavePassword
      }}}
    </form>
    {{# if isExitModalOpen }}
      {{{ Modal
        title='Выход'
        buttonTitle='Выйти'
        text='Вы действительно хотите выйти из профиля?'
        onCancel=onExit
        onAction=logout
      }}}
    {{/ if }}
  {{/ if }}
  </main>
`;class Sl extends b{constructor(e){super(e),this.props.logout=be.logout,this.props.onExit=N.switchExit,this.props.onEditProfile=N.switchEditProfile,this.props.onEditPassword=N.switchEditPassword,this.props.onSaveProfile=async r=>{r.preventDefault(),await ot.changeProfile(this.refs.profileData.values)},this.props.onSavePassword=async r=>{r.preventDefault(),await ot.changePassword(this.refs.profileData.values)},this.props.goToChats=()=>F.go(B.messenger),this.props.events={submit:this.props.onSave||(r=>r.preventDefault())}}render(){return Cl}}const Pl=t=>{var e;return{isExitModalOpen:(e=t.modals)==null?void 0:e.isExitModalOpen,user:t.user,loading:t.loading}},bl=D(Sl,Pl);An();_i();cl();document.addEventListener("DOMContentLoaded",async()=>{F.use(B.signin,dl).use(B.signup,vl).use(B.error,Tt,{code:500,message:"Уже фиксим",icon:"OtterIcon"}).use(B.error404,Tt,{code:404,message:"Такой страницы нет",icon:"HandIcon"}).use(B.messenger,wl).use(B.settings,bl).start(),await S.init()});
