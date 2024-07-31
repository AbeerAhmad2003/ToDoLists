import './polyfills.server.mjs';
import{A as b,B as T,C as Z,D as J,E as Y,F as o,G as a,H as C,I as X,J as f,K as w,L as ke,M as Oe,N as l,O as E,P as Pe,Q as K,R as Q,S as ee,T as te,U as m,V as Te,W as Ne,Y as je,a as we,aa as Ge,b as Ae,c as Ee,ca as Re,d as Fe,e as L,ea as Ue,f as W,fa as N,g as he,ga as V,h as fe,ha as Be,i as A,ia as ve,j as O,k as p,ka as He,l as pe,la as Le,m as _,ma as We,n as Se,o as $,p as z,pa as $e,q as xe,r as me,s as y,t as Ie,u,v as c,va as ze,w as ge,x as P,y as M,z as q}from"./chunk-DD6JAJBR.mjs";import{a as g,b as v}from"./chunk-5XUXGTUW.mjs";var qe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=p({type:e,selectors:[["app-header"]],standalone:!0,features:[m],decls:7,vars:0,consts:[["src","assets/task-management-logo.png","alt","a to do list"]],template:function(r,s){r&1&&(o(0,"header"),C(1,"img",0),o(2,"div")(3,"h1"),l(4,"Easy Task"),a(),o(5,"p"),l(6,"Enterprise-level task mangement without friction"),a()()())},styles:["header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:1rem;width:90%;max-width:50rem;margin:0 auto 2rem;text-align:center;background:linear-gradient(to bottom,#2c0a4c,#450d80);padding:1rem;border-bottom-right-radius:12px;border-bottom-left-radius:12px;box-shadow:0 1px 8px #0009}img[_ngcontent-%COMP%]{width:3.5rem;object-fit:contain}h1[_ngcontent-%COMP%]{font-size:1.25rem;margin:0;padding:0}p[_ngcontent-%COMP%]{margin:0;font-size:.8rem;text-wrap:balance}@media (min-width: 768px){header[_ngcontent-%COMP%]{padding:2rem}img[_ngcontent-%COMP%]{width:4.5rem}h1[_ngcontent-%COMP%]{font-size:1.5rem;margin:0;padding:0}}"]});let t=e;return t})();var St=["*"],ne=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=p({type:e,selectors:[["app-card"]],standalone:!0,features:[m],ngContentSelectors:St,decls:2,vars:0,template:function(r,s){r&1&&(ke(),o(0,"div"),Oe(1),a())},styles:["div[_ngcontent-%COMP%]{border-radius:6px;box-shadow:0 1px 6px #0000001a;overflow:hidden}"]});let t=e;return t})();var Ze=(()=>{let e=class e{constructor(){this.select=new y}get imagepath(){return"assets/"+this.user.avatar}onSelectUser(){this.select.emit(this.user.id)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=p({type:e,selectors:[["app-user"]],inputs:{user:"user",selected:"selected"},outputs:{select:"select"},standalone:!0,features:[m],decls:5,vars:5,consts:[[3,"click"],[3,"src","alt"]],template:function(r,s){r&1&&(o(0,"app-card")(1,"button",0),f("click",function(){return s.onSelectUser()}),C(2,"img",1),o(3,"span"),l(4),a()()()),r&2&&(u(),T("active",s.selected),u(),b("src",s.imagepath,Ie)("alt",s.user.name),u(2),E(s.user.name))},dependencies:[ne],styles:["div[_ngcontent-%COMP%]{border-radius:6px;box-shadow:0 1px 6px #0000001a;overflow:hidden}button[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;padding:.35rem .5rem;background-color:#433352;color:#c3b3d1;border:none;font:inherit;cursor:pointer;width:100%;min-width:10rem;text-align:left}button[_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:active, .active[_ngcontent-%COMP%]{background-color:#9965dd;color:#150722}img[_ngcontent-%COMP%]{width:2rem;object-fit:contain;border-radius:50%;box-shadow:0 1px 8px #0000004d}span[_ngcontent-%COMP%]{margin:0;padding:0;font-size:.8rem;font-weight:400}"]});let t=e;return t})();var Je=[{id:"u1",name:"Jasmine Washington",avatar:"user-1.jpg"},{id:"u2",name:"Emily Thompson",avatar:"user-2.jpg"},{id:"u3",name:"Marcus Johnson",avatar:"user-3.jpg"},{id:"u4",name:"David Miller",avatar:"user-4.jpg"},{id:"u5",name:"Priya Patel",avatar:"user-5.jpg"},{id:"u6",name:"Arjun Singh",avatar:"user-6.jpg"}];var F=(()=>{let e=class e{getUserTasks(n){return this.tasks.filter(r=>r.userId===n)}addTask(n,r){this.tasks.unshift({id:Date.now().toString(),userId:r,title:n.title,summary:n.summary,dueDate:n.date}),this.saveTasks()}removeTask(n){this.tasks=this.tasks.filter(r=>r.id!==n),this.saveTasks()}constructor(){this.tasks=[{id:"t1",userId:"u1",title:"Master Angular",summary:"Learn all the basic and advanced features of Angular & how to apply them.",dueDate:"2025-12-31"},{id:"t2",userId:"u3",title:"Build first prototype",summary:"Build a first prototype of the online shop website",dueDate:"2024-05-31"},{id:"t3",userId:"u3",title:"Prepare issue template",summary:"Prepare and describe an issue template which will help with project management",dueDate:"2024-06-15"}];let n=localStorage.getItem("tasks");n&&(this.tasks=JSON.parse(n))}saveTasks(){localStorage.setItem("tasks",JSON.stringify(this.tasks))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=he({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Ye=(()=>{let e=class e{constructor(){this.tasksService=O(F)}onCompleteTask(){this.tasksService.removeTask(this.task.id)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=p({type:e,selectors:[["app-task"]],inputs:{task:"task"},standalone:!0,features:[m],decls:12,vars:6,consts:[[1,"actions"],[3,"click"]],template:function(r,s){r&1&&(o(0,"app-card")(1,"article")(2,"h2"),l(3),a(),o(4,"time"),l(5),Te(6,"date"),a(),o(7,"p"),l(8),a(),o(9,"p",0)(10,"button",1),f("click",function(){return s.onCompleteTask()}),l(11," Complete "),a()()()()),r&2&&(u(3),E(s.task.title),u(2),E(Ne(6,3,s.task.dueDate,"short")),u(3),E(s.task.summary))},dependencies:[ne,He],styles:["article[_ngcontent-%COMP%]{padding:1rem;color:#25113d;background-color:#bf9ee5}h2[_ngcontent-%COMP%]{margin:0}time[_ngcontent-%COMP%]{color:#3c2c50}.actions[_ngcontent-%COMP%]{text-align:right;margin:0}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font:inherit;font-size:.9rem;cursor:pointer;background-color:#380774;color:#decdf2;border-radius:4px;padding:.5rem 1.5rem;border:none;box-shadow:0 1px 3px #0000004d;transition:all .3s ease}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{background-color:#4a0774;box-shadow:0 1px 6px #0000004d}"]});let t=e;return t})();var rt=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(c(ge),c(me))},e.\u0275dir=_({type:e});let t=e;return t})(),It=(()=>{let e=class e extends rt{};e.\u0275fac=(()=>{let n;return function(s){return(n||(n=xe(e)))(s||e)}})(),e.\u0275dir=_({type:e,features:[M]});let t=e;return t})(),st=new A("");var kt={provide:st,useExisting:W(()=>de),multi:!0};function Ot(){let t=ve()?ve().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Pt=new A(""),de=(()=>{let e=class e extends rt{constructor(n,r,s){super(n,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Ot())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(c(ge),c(me),c(Pt,8))},e.\u0275dir=_({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&f("input",function(d){return s._handleInput(d.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(d){return s._compositionEnd(d.target.value)})},features:[te([kt]),M]});let t=e;return t})();var ot=new A(""),at=new A("");function lt(t){return t!=null}function ut(t){return je(t)?Ae(t):t}function dt(t){let e={};return t.forEach(i=>{e=i!=null?g(g({},e),i):e}),Object.keys(e).length===0?null:e}function ct(t,e){return e.map(i=>i(t))}function Tt(t){return!t.validate}function ht(t){return t.map(e=>Tt(e)?e:i=>e.validate(i))}function Nt(t){if(!t)return null;let e=t.filter(lt);return e.length==0?null:function(i){return dt(ct(i,e))}}function ye(t){return t!=null?Nt(ht(t)):null}function jt(t){if(!t)return null;let e=t.filter(lt);return e.length==0?null:function(i){let n=ct(i,e).map(ut);return Fe(n).pipe(Ee(dt))}}function Ce(t){return t!=null?jt(ht(t)):null}function Xe(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Gt(t){return t._rawValidators}function Rt(t){return t._rawAsyncValidators}function _e(t){return t?Array.isArray(t)?t:[t]:[]}function re(t,e){return Array.isArray(t)?t.includes(e):t===e}function Ke(t,e){let i=_e(e);return _e(t).forEach(r=>{re(i,r)||i.push(r)}),i}function Qe(t,e){return _e(e).filter(i=>!re(t,i))}var se=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ye(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ce(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},I=class extends se{get formDirective(){return null}get path(){return null}},H=class extends se{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},oe=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Ut={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Yn=v(g({},Ut),{"[class.ng-submitted]":"isSubmitted"}),ft=(()=>{let e=class e extends oe{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(c(H,2))},e.\u0275dir=_({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&T("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[M]});let t=e;return t})(),pt=(()=>{let e=class e extends oe{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(c(I,10))},e.\u0275dir=_({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&T("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[M]});let t=e;return t})();var j="VALID",ie="INVALID",S="PENDING",G="DISABLED",k=class{},ae=class extends k{constructor(e,i){super(),this.value=e,this.source=i}},U=class extends k{constructor(e,i){super(),this.pristine=e,this.source=i}},B=class extends k{constructor(e,i){super(),this.touched=e,this.source=i}},x=class extends k{constructor(e,i){super(),this.status=e,this.source=i}};function mt(t){return(ce(t)?t.validators:t)||null}function Bt(t){return Array.isArray(t)?ye(t):t||null}function gt(t,e){return(ce(e)?e.asyncValidators:t)||null}function Ht(t){return Array.isArray(t)?Ce(t):t||null}function ce(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Lt(t,e,i){let n=t.controls;if(!(e?Object.keys(n):n).length)throw new L(1e3,"");if(!n[i])throw new L(1001,"")}function Wt(t,e,i){t._forEachChild((n,r)=>{if(i[r]===void 0)throw new L(1002,"")})}var le=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=N(()=>this.statusReactive()),this.statusReactive=P(void 0),this._pristine=N(()=>this.pristineReactive()),this.pristineReactive=P(!0),this._touched=N(()=>this.touchedReactive()),this.touchedReactive=P(!1),this._events=new we,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return V(this.statusReactive)}set status(e){V(()=>this.statusReactive.set(e))}get valid(){return this.status===j}get invalid(){return this.status===ie}get pending(){return this.status==S}get disabled(){return this.status===G}get enabled(){return this.status!==G}get pristine(){return V(this.pristineReactive)}set pristine(e){V(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return V(this.touchedReactive)}set touched(e){V(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ke(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ke(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Qe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Qe(e,this._rawAsyncValidators))}hasValidator(e){return re(this._rawValidators,e)}hasAsyncValidator(e){return re(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let i=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(v(g({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new B(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(i=>i.markAllAsTouched(e))}markAsUntouched(e={}){let i=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),i&&e.emitEvent!==!1&&this._events.next(new B(!1,n))}markAsDirty(e={}){let i=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(v(g({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new U(!1,n))}markAsPristine(e={}){let i=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),i&&e.emitEvent!==!1&&this._events.next(new U(!0,n))}markAsPending(e={}){this.status=S;let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new x(this.status,i)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(v(g({},e),{sourceControl:i}))}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=G,this.errors=null,this._forEachChild(r=>{r.disable(v(g({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new ae(this.value,n)),this._events.next(new x(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(v(g({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=j,this._forEachChild(n=>{n.enable(v(g({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(v(g({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,i){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},i),this._parent._updateTouched({},i))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===j||this.status===S)&&this._runAsyncValidator(n,e.emitEvent)}let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new ae(this.value,i)),this._events.next(new x(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(v(g({},e),{sourceControl:i}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?G:j}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,i){if(this.asyncValidator){this.status=S,this._hasOwnPendingAsyncValidator={emitEvent:i!==!1};let n=ut(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:i,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1,this,i.shouldHaveEmitted)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,i,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new x(this.status,i)),this._parent&&this._parent._updateControlsErrors(e,i,n)}_initObservables(){this.valueChanges=new y,this.statusChanges=new y}_calculateStatus(){return this._allControlsDisabled()?G:this.errors?ie:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(S)?S:this._anyControlsHaveStatus(ie)?ie:j}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,i){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),r&&this._events.next(new U(this.pristine,i))}_updateTouched(e={},i){this.touched=this._anyControlsTouched(),this._events.next(new B(this.touched,i)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){ce(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Bt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Ht(this._rawAsyncValidators)}},ue=class extends le{constructor(e,i,n){super(mt(i),gt(n,i)),this.controls=e,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,i){return this.controls[e]?this.controls[e]:(this.controls[e]=i,i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange),i)}addControl(e,i,n={}){this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}setControl(e,i,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],i&&this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,i={}){Wt(this,!0,e),Object.keys(e).forEach(n=>{Lt(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(e,i={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(e={},i={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i,this),this._updateTouched(i,this),this.updateValueAndValidity(i)}getRawValue(){return this._reduceChildren({},(e,i,n)=>(e[n]=i.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(i,n)=>n._syncPendingControls()?!0:i);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(i=>{let n=this.controls[i];n&&e(n,i)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[i,n]of Object.entries(this.controls))if(this.contains(i)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(i,n,r)=>((n.enabled||this.disabled)&&(i[r]=n.value),i))}_reduceChildren(e,i){let n=e;return this._forEachChild((r,s)=>{n=i(n,r,s)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var be=new A("CallSetDisabledState",{providedIn:"root",factory:()=>Ve}),Ve="always";function $t(t,e){return[...e.path,t]}function vt(t,e,i=Ve){_t(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),qt(t,e),Jt(t,e),Zt(t,e),zt(t,e)}function et(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function zt(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function _t(t,e){let i=Gt(t);e.validator!==null?t.setValidators(Xe(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=Rt(t);e.asyncValidator!==null?t.setAsyncValidators(Xe(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();et(e._rawValidators,r),et(e._rawAsyncValidators,r)}function qt(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&yt(t,e)})}function Zt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&yt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function yt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Jt(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function Yt(t,e){t==null,_t(t,e)}function Xt(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function Kt(t){return Object.getPrototypeOf(t.constructor)===It}function Qt(t,e){t._syncPendingControls(),e.forEach(i=>{let n=i.control;n.updateOn==="submit"&&n._pendingChange&&(i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function en(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(s=>{s.constructor===de?i=s:Kt(s)?n=s:r=s}),r||n||i||null}var tn={provide:I,useExisting:W(()=>De)},R=Promise.resolve(),De=(()=>{let e=class e extends I{get submitted(){return V(this.submittedReactive)}constructor(n,r,s){super(),this.callSetDisabledState=s,this._submitted=N(()=>this.submittedReactive()),this.submittedReactive=P(!1),this._directives=new Set,this.ngSubmit=new y,this.form=new ue({},ye(n),Ce(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(n){R.then(()=>{let r=this._findContainer(n.path);n.control=r.registerControl(n.name,n.control),vt(n.control,n,this.callSetDisabledState),n.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(n)})}getControl(n){return this.form.get(n.path)}removeControl(n){R.then(()=>{let r=this._findContainer(n.path);r&&r.removeControl(n.name),this._directives.delete(n)})}addFormGroup(n){R.then(()=>{let r=this._findContainer(n.path),s=new ue({});Yt(s,n),r.registerControl(n.name,s),s.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(n){R.then(()=>{let r=this._findContainer(n.path);r&&r.removeControl(n.name)})}getFormGroup(n){return this.form.get(n.path)}updateModel(n,r){R.then(()=>{this.form.get(n.path).setValue(r)})}setValue(n){this.control.setValue(n)}onSubmit(n){return this.submittedReactive.set(!0),Qt(this.form,this._directives),this.ngSubmit.emit(n),n?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(n=void 0){this.form.reset(n),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(n){return n.pop(),n.length?this.form.get(n):this.form}};e.\u0275fac=function(r){return new(r||e)(c(ot,10),c(at,10),c(be,8))},e.\u0275dir=_({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,s){r&1&&f("submit",function(d){return s.onSubmit(d)})("reset",function(){return s.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[te([tn]),M]});let t=e;return t})();function tt(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function nt(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var nn=class extends le{constructor(e=null,i,n){super(mt(i),gt(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ce(i)&&(i.nonNullable||i.initialValueIsDefault)&&(nt(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){tt(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){tt(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){nt(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var rn={provide:H,useExisting:W(()=>Me)},it=Promise.resolve(),Me=(()=>{let e=class e extends H{constructor(n,r,s,h,d,Ft){super(),this._changeDetectorRef=d,this.callSetDisabledState=Ft,this.control=new nn,this._registered=!1,this.name="",this.update=new y,this._parent=n,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=en(this,h)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let r=n.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),Xt(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){vt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){it.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let r=n.isDisabled.currentValue,s=r!==0&&Ue(r);it.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?$t(n,this._parent):[n]}};e.\u0275fac=function(r){return new(r||e)(c(I,9),c(ot,10),c(at,10),c(st,10),c(Re,8),c(be,8))},e.\u0275dir=_({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[te([rn]),M,Se]});let t=e;return t})(),Ct=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=_({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var sn=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=pe({type:e}),e.\u0275inj=fe({});let t=e;return t})();var bt=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:be,useValue:n.callSetDisabledState??Ve}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=pe({type:e}),e.\u0275inj=fe({imports:[sn]});let t=e;return t})();var Vt=(()=>{let e=class e{constructor(){this.close=new y,this.tasksService=O(F),this.enteredTitle="",this.enteredSummary="",this.enteredDate=""}onCancel(){this.close.emit()}onSubmit(){this.tasksService.addTask({title:this.enteredTitle,summary:this.enteredSummary,date:this.enteredDate},this.userId),this.close.emit()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=p({type:e,selectors:[["app-new-task"]],inputs:{userId:"userId"},outputs:{close:"close"},standalone:!0,features:[m],decls:22,vars:3,consts:[[1,"backdrop",3,"click"],["open",""],[3,"ngSubmit"],["for","title"],["type","text","id","title","name","title",3,"ngModelChange","ngModel"],["for","summary"],["id","summary","rows","5","name","summary",3,"ngModelChange","ngModel"],["for","due-date"],["type","date","id","due-date","name","due-date",3,"ngModelChange","ngModel"],[1,"actions"],["type","button",3,"click"],["type","submit"]],template:function(r,s){r&1&&(o(0,"div",0),f("click",function(){return s.onCancel()}),a(),o(1,"dialog",1)(2,"h2"),l(3,"Add Task"),a(),o(4,"form",2),f("ngSubmit",function(){return s.onSubmit()}),o(5,"p")(6,"label",3),l(7,"Title"),a(),o(8,"input",4),ee("ngModelChange",function(d){return Q(s.enteredTitle,d)||(s.enteredTitle=d),d}),a()(),o(9,"p")(10,"label",5),l(11,"Summary"),a(),o(12,"textarea",6),ee("ngModelChange",function(d){return Q(s.enteredSummary,d)||(s.enteredSummary=d),d}),a()(),o(13,"p")(14,"label",7),l(15,"Due Date"),a(),o(16,"input",8),ee("ngModelChange",function(d){return Q(s.enteredDate,d)||(s.enteredDate=d),d}),a()(),o(17,"p",9)(18,"button",10),f("click",function(){return s.onCancel()}),l(19,"Cancel"),a(),o(20,"button",11),l(21,"Create"),a()()()()),r&2&&(u(8),K("ngModel",s.enteredTitle),u(4),K("ngModel",s.enteredSummary),u(4),K("ngModel",s.enteredDate))},dependencies:[bt,Ct,de,ft,pt,Me,De],styles:[".backdrop[_ngcontent-%COMP%]{background-color:#000000e6;position:fixed;top:0;left:0;width:100%;height:100vh}dialog[_ngcontent-%COMP%]{width:90%;max-width:30rem;background-color:#433352;border-radius:6px;border:none;box-shadow:0 1px 6px #0006;overflow:hidden;padding:1rem;top:5rem}h2[_ngcontent-%COMP%]{margin:0;color:#d0c2e1}label[_ngcontent-%COMP%]{display:block;font-weight:700;font-size:.85rem;color:#ab9ac0}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%;font:inherit;padding:.15rem .25rem;border-radius:4px;border:1px solid #ab9ac0;background-color:#d0c2e1}.actions[_ngcontent-%COMP%]{margin:1rem 0 0;display:flex;justify-content:flex-end;gap:.25rem}button[_ngcontent-%COMP%]{font:inherit;cursor:pointer;border:none;padding:.35rem 1.25rem;border-radius:4px;background-color:transparent}button[type=button][_ngcontent-%COMP%]{color:#bdadcf}button[type=button][_ngcontent-%COMP%]:hover, button[type=button][_ngcontent-%COMP%]:active{color:#d0c2e1}button[type=submit][_ngcontent-%COMP%]{background-color:#9c73ca;box-shadow:0 1px 3px #0000004d;transition:all .3s ease}button[type=submit][_ngcontent-%COMP%]:hover, button[type=submit][_ngcontent-%COMP%]:active{background-color:#895cce;box-shadow:0 1px 6px #0000004d}@media (min-width: 768px){dialog[_ngcontent-%COMP%]{padding:2rem}}"]});let t=e;return t})();var an=(t,e)=>e.id;function ln(t,e){if(t&1){let i=X();o(0,"app-new-task",3),f("close",function(){$(i);let r=w();return z(r.onCloseAddingTask())}),a()}if(t&2){let i=w();b("userId",i.userId)}}function un(t,e){if(t&1&&(o(0,"li"),C(1,"app-task",4),a()),t&2){let i=e.$implicit;u(),b("task",i)}}var Dt=(()=>{let e=class e{constructor(n){this.taskService=n,this.isAddingTask=!1}get SelectedUserTasks(){return this.taskService.getUserTasks(this.userId)}onStartAddTask(){this.isAddingTask=!0}onCloseAddingTask(){this.isAddingTask=!1}};e.\u0275fac=function(r){return new(r||e)(c(F))},e.\u0275cmp=p({type:e,selectors:[["app-tasks"]],inputs:{name:"name",userId:"userId"},standalone:!0,features:[m],decls:11,vars:2,consts:[[3,"userId"],["id","tasks"],[3,"click"],[3,"close","userId"],[3,"task"]],template:function(r,s){r&1&&(q(0,ln,1,1,"app-new-task",0),o(1,"section",1)(2,"header")(3,"h2"),l(4),a(),o(5,"menu")(6,"button",2),f("click",function(){return s.onStartAddTask()}),l(7,"Add Tasks"),a()()(),o(8,"ul"),J(9,un,2,1,"li",null,an),a()()),r&2&&(Z(s.isAddingTask?0:-1),u(4),Pe("",s.name,"'s Tasks"),u(5),Y(s.SelectedUserTasks))},dependencies:[Ye,Vt],styles:["#tasks[_ngcontent-%COMP%]{padding:1rem;border-radius:8px;max-height:60vh;overflow:auto;background-color:#3a2c54}header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:2rem;gap:1rem}h2[_ngcontent-%COMP%]{margin:0;font-size:.9rem;width:60%;text-wrap:balance}menu[_ngcontent-%COMP%]{margin:0;padding:0}menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font:inherit;cursor:pointer;background-color:#9965dd;border-radius:4px;border:none;padding:.35rem .8rem;font-size:.9rem}menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{background-color:#a565dd}ul[_ngcontent-%COMP%]{list-style:none;margin:1rem 0;padding:0;display:flex;flex-direction:column;gap:1rem;max-height:50vh;overflow:auto}@media (min-width: 768px){h2[_ngcontent-%COMP%]{font-size:1.25rem}menu[_ngcontent-%COMP%]{width:auto}}"]});let t=e;return t})();var dn=(t,e)=>e.id;function cn(t,e){if(t&1){let i=X();o(0,"li")(1,"app-user",2),f("select",function(r){$(i);let s=w();return z(s.onSelectUserr(r))}),a()()}if(t&2){let i=e.$implicit,n=w();u(),b("user",i)("selected",i.id===n.userId)}}function hn(t,e){if(t&1&&C(0,"app-tasks",1),t&2){let i=w();b("userId",i.userSelected.id)("name",i.userSelected.name)}}function fn(t,e){t&1&&(o(0,"h2"),l(1,"Select a user to see their tasks"),a())}var Mt=(()=>{let e=class e{constructor(){this.users=Je,this.title="udemy"}get userSelected(){return this.users.find(n=>n.id===this.userId)}onSelectUserr(n){this.userId=n}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=p({type:e,selectors:[["app-root"]],standalone:!0,features:[m],decls:7,vars:1,consts:[["id","users"],[3,"userId","name"],[3,"select","user","selected"]],template:function(r,s){r&1&&(C(0,"app-header"),o(1,"main")(2,"ul",0),J(3,cn,2,2,"li",null,dn),a(),q(5,hn,1,2,"app-tasks",1)(6,fn,2,0,"h2"),a()),r&2&&(u(3),Y(s.users),u(2),Z(s.userSelected?5:6))},dependencies:[qe,Ze,Dt],styles:["main[_ngcontent-%COMP%]{width:90%;max-width:50rem;margin:2.5rem auto;display:grid;grid-auto-flow:row;gap:2rem}#users[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;display:flex;gap:.5rem;overflow:auto}#fallback[_ngcontent-%COMP%]{font-weight:700;font-size:1.15rem;margin:0;text-align:center}@media (min-width: 768px){main[_ngcontent-%COMP%]{margin:4rem auto;grid-template-columns:1fr 3fr}#users[_ngcontent-%COMP%]{flex-direction:column}#fallback[_ngcontent-%COMP%]{font-size:1.5rem;text-align:left}}"]});let t=e;return t})();var wt=[];var At={providers:[Ge({eventCoalescing:!0}),ze(wt),We()]};var pn={providers:[$e()]},Et=Be(At,pn);var mn=()=>Le(Mt,Et),Ei=mn;export{Ei as a};
