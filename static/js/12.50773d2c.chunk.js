(this["webpackJsonpnecro-frontend"]=this["webpackJsonpnecro-frontend"]||[]).push([[12],{842:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l}));var r=n(9),o=n.n(r),c=n(17),a=n(188),i=n.n(a),s=n(80),u=function(e,t){return new(new i.a(e).eth.Contract)(s,t)},l=function(){var e=Object(c.a)(o.a.mark((function e(t,n,r){var c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=u(t,n),e.prev=1,e.next=4,c.methods.balanceOf(r).call();case 4:return a=e.sent,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,r){return e.apply(this,arguments)}}()},940:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ke}));var r=n(0),o=n(2),c=n(1),a=n(34),i=n(66),s=n(14),u=n.n(s),l=n(93),d=n(137),b=n(850),p=n(851),m=n(243),j=n(142),f=n(189),O=n(23),x=n(19),h=n(7),v=n(5),y=n(829);function T(){var e=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"]);return T=function(){return e},e}var k=v.e.div(T(),(function(e){return e.theme.colors.primary})),g=function(e){var t=e.onClick,n=e.expanded;return Object(r.jsxs)(k,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return t()},children:[Object(r.jsx)(d.Text,{color:"primary",bold:!0,children:n?"Hide":"Details"}),n?Object(r.jsx)(d.ChevronUpIcon,{}):Object(r.jsx)(d.ChevronDownIcon,{})]})};g.defaultProps={expanded:!1};var S=g,w=function(e){var t=e.quoteTokenAdresses,n=e.quoteTokenSymbol,r=e.tokenAddresses,o="BNB"===n?"ETH":t[56],c=r[56];return"".concat(o,"/").concat(c)};function C(){var e=Object(h.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"]);return C=function(){return e},e}function D(){var e=Object(h.a)(["\n  margin-top: 24px;\n"]);return D=function(){return e},e}var P=v.e.div(D()),A=Object(v.e)(d.LinkExternal)(C(),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),I=function(e){var t=e.bscScanAddress,n=e.removed,o=e.totalValueFormated,c=e.lpLabel,a=e.tokenUrl,i=e.quoteTokenAdresses,s=e.quoteTokenSymbol,u=e.tokenAddresses,l=Object(y.a)(),b=w({quoteTokenAdresses:i,quoteTokenSymbol:s,tokenAddresses:u});return Object(r.jsxs)(P,{children:[Object(r.jsxs)(d.Flex,{justifyContent:"space-between",children:[Object(r.jsxs)(d.Text,{children:[l(316,"Stake"),":"]}),Object(r.jsx)(A,{href:null!==a&&void 0!==a?a:"https://exchange.pancakeswap.finance/#/add/".concat(b),children:c})]}),!n&&Object(r.jsxs)(d.Flex,{justifyContent:"space-between",children:[Object(r.jsxs)(d.Text,{children:[l(23,"Total Liquidity"),":"]}),Object(r.jsx)(d.Text,{children:o})]}),Object(r.jsx)(d.Flex,{justifyContent:"flex-start",children:Object(r.jsx)(d.Link,{external:!0,href:t,bold:!1,children:l(356,"View on BscScan")})})]})},M=function(){return Object(r.jsx)(d.Tag,{variant:"success",outline:!0,startIcon:Object(r.jsx)(d.VerifiedIcon,{}),children:"No Fees"})};function B(){var e=Object(h.a)(["\n  margin-left: 4px;\n"]);return B=function(){return e},e}function F(){var e=Object(h.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]);return F=function(){return e},e}var E=Object(v.e)(d.Flex)(F()),q=Object(v.e)(d.Tag)(B()),z=function(e){var t=e.lpLabel,n=e.multiplier,o=e.farmImage,c=e.tokenSymbol,a=e.depositFee;return Object(r.jsxs)(E,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(r.jsx)(d.Image,{src:"/images/farms/".concat(o,".png"),alt:c,width:64,height:64}),Object(r.jsxs)(d.Flex,{flexDirection:"column",alignItems:"flex-end",children:[Object(r.jsx)(d.Heading,{mb:"4px",children:t}),Object(r.jsxs)(d.Flex,{justifyContent:"center",children:[0===a?Object(r.jsx)(M,{}):null,Object(r.jsx)(q,{variant:"secondary",children:n})]})]})]})},L=n(9),R=n.n(L),N=n(17),U=n(842),H=n(837),V=n(852),_=n(74);function Q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e,t,n){return t&&W(e.prototype,t),n&&W(e,n),e}function G(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Y(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function K(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=J(e);if(t){var o=J(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Y(this,n)}}function Z(e){return function(e){if(Array.isArray(e))return ee(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return ee(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ee(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function te(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(e);if(0===t)return n;var r=n.match(/(.*?)([0-9]+)(.*)/),o=r?r[1]:"",c=r?r[3]:"",a=r?r[2]:n,i=a.length>=t?a:(Z(Array(t)).map((function(){return"0"})).join("")+a).slice(-1*t);return"".concat(o).concat(i).concat(c)}var ne={daysInHours:!1,zeroPadTime:2};function re(e,t){var n=e.days,r=e.hours,o=e.minutes,c=e.seconds,a=Object.assign(Object.assign({},ne),t),i=a.daysInHours,s=a.zeroPadTime,u=a.zeroPadDays,l=void 0===u?s:u,d=Math.min(2,s),b=i?te(r+24*n,s):te(r,d);return{days:i?"":te(n,l),hours:b,minutes:te(o,d),seconds:te(c,d)}}var oe=function(e){G(n,e);var t=K(n);function n(){var e;return Q(this,n),(e=t.apply(this,arguments)).state={count:e.props.count||3},e.startCountdown=function(){e.interval=window.setInterval((function(){0===e.state.count-1?(e.stopCountdown(),e.props.onComplete&&e.props.onComplete()):e.setState((function(e){return{count:e.count-1}}))}),1e3)},e.stopCountdown=function(){clearInterval(e.interval)},e.addTime=function(t){e.stopCountdown(),e.setState((function(e){return{count:e.count+t}}),e.startCountdown)},e}return $(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?Object(c.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(c.Component);oe.propTypes={count:_.number,children:_.element,onComplete:_.func};var ce=function(e){G(n,e);var t=K(n);function n(e){var r;if(Q(this,n),(r=t.call(this,e)).mounted=!1,r.initialTimestamp=r.calcOffsetStartTimestamp(),r.offsetStartTimestamp=r.props.autoStart?0:r.initialTimestamp,r.offsetTime=0,r.legacyMode=!1,r.legacyCountdownRef=Object(c.createRef)(),r.tick=function(){var e=r.calcTimeDelta(),t=e.completed&&!r.props.overtime?void 0:r.props.onTick;r.setTimeDeltaState(e,void 0,t)},r.start=function(){if(!r.isStarted()){var e=r.offsetStartTimestamp;r.offsetStartTimestamp=0,r.offsetTime+=e?r.calcOffsetStartTimestamp()-e:0;var t=r.calcTimeDelta();r.setTimeDeltaState(t,"STARTED",r.props.onStart),r.props.controlled||t.completed&&!r.props.overtime||(r.clearTimer(),r.interval=window.setInterval(r.tick,r.props.intervalDelay))}},r.pause=function(){r.isPaused()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.setTimeDeltaState(r.state.timeDelta,"PAUSED",r.props.onPause))},r.stop=function(){r.isStopped()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.offsetTime=r.offsetStartTimestamp-r.initialTimestamp,r.setTimeDeltaState(r.calcTimeDelta(),"STOPPED",r.props.onStop))},r.isStarted=function(){return r.isStatus("STARTED")},r.isPaused=function(){return r.isStatus("PAUSED")},r.isStopped=function(){return r.isStatus("STOPPED")},r.isCompleted=function(){return r.isStatus("COMPLETED")},r.handleOnComplete=function(e){r.props.onComplete&&r.props.onComplete(e)},e.date){var o=r.calcTimeDelta();r.state={timeDelta:o,status:o.completed?"COMPLETED":"STOPPED"}}else r.legacyMode=!0;return r}return $(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(e){this.legacyMode||this.shallowCompare(this.props,e)||(this.props.date!==e.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0),this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var e=this.props,t=e.date,n=e.now,r=e.precision,o=e.controlled,c=e.overtime;return function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.now,o=void 0===r?Date.now:r,c=n.precision,a=void 0===c?0:c,i=n.controlled,s=n.offsetTime,u=void 0===s?0:s,l=n.overtime;t="string"===typeof e?new Date(e).getTime():e instanceof Date?e.getTime():e,i||(t+=u);var d=i?t:t-o(),b=Math.min(20,Math.max(0,a)),p=Math.round(1e3*parseFloat(((l?d:Math.max(0,d))/1e3).toFixed(b))),m=Math.abs(p)/1e3;return{total:p,days:Math.floor(m/86400),hours:Math.floor(m/3600%24),minutes:Math.floor(m/60%60),seconds:Math.floor(m%60),milliseconds:Number((m%1*1e3).toFixed()),completed:p<=0}}(t,{now:n,precision:r,controlled:o,offsetTime:this.offsetTime,overtime:c})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(e){this.legacyCountdownRef.current.addTime(e)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(e){return this.state.status===e}},{key:"shallowCompare",value:function(e,t){var n=Object.keys(e);return n.length===Object.keys(t).length&&!n.some((function(n){var r=e[n],o=t[n];return!t.hasOwnProperty(n)||!(r===o||r!==r&&o!==o)}))}},{key:"setTimeDeltaState",value:function(e,t,n){var r=this;if(this.mounted){var o;!this.state.timeDelta.completed&&e.completed&&(this.props.overtime||this.clearTimer(),o=this.handleOnComplete);return this.setState((function(n){var o=t||n.status;return e.completed&&!r.props.overtime?o="COMPLETED":t||"COMPLETED"!==o||(o="STOPPED"),{timeDelta:e,status:o}}),(function(){n&&n(r.state.timeDelta),o&&o(r.state.timeDelta)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var e=this.props,t=e.daysInHours,n=e.zeroPadTime,r=e.zeroPadDays,o=this.state.timeDelta;return Object.assign(Object.assign({},o),{api:this.getApi(),props:this.props,formatted:re(o,{daysInHours:t,zeroPadTime:n,zeroPadDays:r})})}},{key:"render",value:function(){if(this.legacyMode){var e=this.props,t=e.count,n=e.children,r=e.onComplete;return Object(c.createElement)(oe,{ref:this.legacyCountdownRef,count:t,onComplete:r},n)}var o=this.props,a=o.className,i=o.overtime,s=o.children,u=o.renderer,l=this.getRenderProps();if(u)return u(l);if(s&&this.state.timeDelta.completed&&!i)return Object(c.cloneElement)(s,{countdown:l});var d=l.formatted,b=d.days,p=d.hours,m=d.minutes,j=d.seconds;return Object(c.createElement)("span",{className:a},l.total<0?"-":"",b,b?":":"",p,":",m,":",j)}}]),n}(c.Component);ce.defaultProps=Object.assign(Object.assign({},ne),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),ce.propTypes={date:Object(_.oneOfType)([Object(_.instanceOf)(Date),_.string,_.number]),daysInHours:_.bool,zeroPadTime:_.number,zeroPadDays:_.number,controlled:_.bool,intervalDelay:_.number,precision:_.number,autoStart:_.bool,overtime:_.bool,className:_.string,children:_.element,renderer:_.func,now:_.func,onMount:_.func,onStart:_.func,onPause:_.func,onStop:_.func,onTick:_.func,onComplete:_.func};var ae=ce,ie=n(847),se=n(853),ue=n(830),le=n(838),de=n(839),be=function(e){var t=e.max,n=e.onConfirm,o=e.onDismiss,a=e.tokenName,i=void 0===a?"":a,s=e.depositFeeBP,u=void 0===s?0:s,l=Object(c.useState)(""),b=Object(x.a)(l,2),p=b[0],m=b[1],j=Object(c.useState)(!1),f=Object(x.a)(j,2),O=f[0],h=f[1],v=Object(y.a)(),T=Object(c.useMemo)((function(){return Object(ue.b)(t)}),[t]),k=Object(c.useCallback)((function(e){m(e.currentTarget.value)}),[m]),g=Object(c.useCallback)((function(){m(T)}),[T,m]);return Object(r.jsxs)(d.Modal,{title:"".concat(v(316,"Deposit")," ").concat(i," Tokens"),onDismiss:o,children:[Object(r.jsx)(de.a,{value:p,onSelectMax:g,onChange:k,max:T,symbol:i,depositFeeBP:u}),Object(r.jsxs)(le.a,{children:[Object(r.jsx)(d.Button,{variant:"secondary",onClick:o,children:v(462,"Cancel")}),Object(r.jsx)(d.Button,{disabled:O,onClick:Object(N.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,n(p);case 3:h(!1),o();case 5:case"end":return e.stop()}}),e)}))),children:O?v(488,"Pending Confirmation"):v(464,"Confirm")})]})]})},pe=function(e){var t=e.onConfirm,n=e.onDismiss,o=e.max,a=e.tokenName,i=void 0===a?"":a,s=Object(c.useState)(""),u=Object(x.a)(s,2),l=u[0],b=u[1],p=Object(c.useState)(!1),m=Object(x.a)(p,2),j=m[0],f=m[1],O=Object(y.a)(),h=Object(c.useMemo)((function(){return Object(ue.b)(o)}),[o]),v=Object(c.useCallback)((function(e){b(e.currentTarget.value)}),[b]),T=Object(c.useCallback)((function(){b(h)}),[h,b]);return Object(r.jsxs)(d.Modal,{title:"Withdraw ".concat(i),onDismiss:n,children:[Object(r.jsx)(de.a,{onSelectMax:T,onChange:v,value:l,max:h,symbol:i}),Object(r.jsxs)(le.a,{children:[Object(r.jsx)(d.Button,{variant:"secondary",onClick:n,children:O(462,"Cancel")}),Object(r.jsx)(d.Button,{disabled:j,onClick:Object(N.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,t(l);case 3:f(!1),n();case 5:case"end":return e.stop()}}),e)}))),children:j?O(488,"Pending Confirmation"):O(464,"Confirm")})]})]})};function me(){var e=Object(h.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]);return me=function(){return e},e}var je=v.e.div(me()),fe=function(e){var t=e.stakedBalance,n=e.tokenBalance,o=e.tokenName,c=e.pid,a=e.depositFeeBP,i=Object(y.a)(),s=Object(ie.b)(c).onStake,u=Object(se.a)(c).onUnstake,l=Object(ue.a)(t),b=l.toLocaleString(),p=Object(d.useModal)(Object(r.jsx)(be,{max:n,onConfirm:s,tokenName:o,depositFeeBP:a})),m=Object(x.a)(p,1)[0],j=Object(d.useModal)(Object(r.jsx)(pe,{max:t,onConfirm:u,tokenName:o})),f=Object(x.a)(j,1)[0];return Object(r.jsxs)(d.Flex,{justifyContent:"space-between",alignItems:"center",children:[Object(r.jsx)(d.Heading,{color:0===l?"textDisabled":"text",children:b}),0===l?Object(r.jsx)(d.Button,{onClick:m,children:i(999,"Stake")}):Object(r.jsxs)(je,{children:[Object(r.jsx)(d.IconButton,{variant:"tertiary",onClick:f,mr:"6px",children:Object(r.jsx)(d.MinusIcon,{color:"primary"})}),Object(r.jsx)(d.IconButton,{variant:"tertiary",onClick:m,children:Object(r.jsx)(d.AddIcon,{color:"primary"})})]})]})},Oe=n(836);function xe(){var e=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]);return xe=function(){return e},e}var he=v.e.div(xe()),ve=function(e){var t=e.earnings,n=e.pid,o=Object(y.a)(),a=Object(c.useState)(!1),i=Object(x.a)(a,2),s=i[0],u=i[1],l=Object(Oe.b)(n).onReward,b=Object(ie.b)(n).onStake,p=Object(ue.a)(t),m=p.toLocaleString();return Object(r.jsxs)(d.Flex,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(r.jsx)(d.Heading,{color:0===p?"textDisabled":"text",children:m}),Object(r.jsxs)(he,{children:[12===n?Object(r.jsx)(d.Button,{disabled:0===p||s,size:"sm",variant:"secondary",marginBottom:"15px",onClick:Object(N.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,b(p.toString());case 3:u(!1);case 4:case"end":return e.stop()}}),e)}))),children:o(999,"Compound")}):null,Object(r.jsx)(d.Button,{disabled:0===p||s,onClick:Object(N.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,l();case 3:u(!1);case 4:case"end":return e.stop()}}),e)}))),children:o(999,"Harvest")})]})]})};function ye(){var e=Object(h.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"]);return ye=function(){return e},e}function Te(){var e=Object(h.a)(["\n  padding-top: 16px;\n"]);return Te=function(){return e},e}var ke=v.e.div(Te()),ge=v.e.div(ye(),(function(e){return e.theme.colors.borderColor})),Se=function(e){var t=e.farm,n=e.ethereum,o=e.account,a=Object(y.a)(),i=Object(c.useState)(!1),s=Object(x.a)(i,2),u=s[0],l=s[1],b=Object(j.a)(t.pid),p=b.pid,m=b.lpAddresses,f=b.tokenAddresses,O=b.isTokenOnly,h=b.depositFeeBP,v=Object(j.b)(p),T=v.allowance,k=v.tokenBalance,g=v.stakedBalance,S=v.earnings,w=m[56],C=f[56],D=t.lpSymbol.toUpperCase(),P=o&&T&&T.isGreaterThan(0),A=Object(c.useMemo)((function(){return O?Object(U.a)(n,C):Object(U.a)(n,w)}),[n,w,C,O]),I=Object(V.a)(A).onApprove,M=Object(c.useCallback)(Object(N.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,I();case 4:l(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[I]),B=t.startTime;B||(B=0);var F=1e3*B-Date.now()<=0?P?Object(r.jsx)(fe,{stakedBalance:g,tokenBalance:k,tokenName:D,pid:p,depositFeeBP:h}):Object(r.jsx)(d.Button,{mt:"8px",fullWidth:!0,disabled:u,onClick:M,children:a(999,"Approve Contract")}):Object(r.jsx)(ae,{date:new Date(1e3*B),renderer:function(e){var n=e.hours,o=e.minutes,c=e.seconds,a=c<10?"0".concat(c):c,i=o<10?"0".concat(o):o,s=n<10?"0".concat(n):n;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ge,{}),Object(r.jsxs)(d.Text,{fontSize:"14px",pr:"3px",children:[t.lpSymbol," pool starts: ",s,":",i,":",a]})]})}});return Object(r.jsxs)(ke,{children:[Object(r.jsxs)(d.Flex,{children:[Object(r.jsx)(d.Text,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"voodoo"}),Object(r.jsx)(d.Text,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:a(999,"Earned")})]}),Object(r.jsx)(ve,{earnings:S,pid:p}),Object(r.jsxs)(d.Flex,{children:[Object(r.jsx)(d.Text,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:D}),Object(r.jsx)(d.Text,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:a(999,"Staked")})]}),o?F:Object(r.jsx)(H.a,{mt:"8px",fullWidth:!0})]})},we=function(e){var t,n=e.numberOfDays,r=e.farmApy/100,o=n/365,c=1e3/e.necroPrice,a=c*Math.pow(1+r/365,365*o);return t=a-c,Math.round(100*t)/100},Ce=function(e){return(e.amountEarned/e.amountInvested*100).toFixed(2)};function De(){var e=Object(h.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]);return De=function(){return e},e}function Pe(){var e=Object(h.a)(["\n  margin-bottom: '10px';\n"]);return Pe=function(){return e},e}function Ae(){var e=Object(h.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]);return Ae=function(){return e},e}var Ie=v.e.div(Ae()),Me=v.e.div(Pe()),Be=Object(v.e)(d.Text)(De()),Fe=function(e){var t=e.onDismiss,n=e.lpLabel,o=e.quoteTokenAdresses,c=e.quoteTokenSymbol,a=e.tokenAddresses,i=e.necroPrice,s=e.apy,l=Object(y.a)(),b=w({quoteTokenAdresses:o,quoteTokenSymbol:c,tokenAddresses:a}),p=s.times(new u.a(100)).toNumber(),m=1e3/i.toNumber(),j=we({numberOfDays:1,farmApy:p,necroPrice:i}),f=we({numberOfDays:7,farmApy:p,necroPrice:i}),O=we({numberOfDays:30,farmApy:p,necroPrice:i}),x=we({numberOfDays:365,farmApy:p,necroPrice:i});return Object(r.jsxs)(d.Modal,{title:"ROI",onDismiss:t,children:[Object(r.jsxs)(Ie,{children:[Object(r.jsx)(Me,{children:Object(r.jsx)(d.Text,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:l(999,"Timeframe")})}),Object(r.jsx)(Me,{children:Object(r.jsx)(d.Text,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:l(999,"ROI")})}),Object(r.jsx)(Me,{children:Object(r.jsx)(d.Text,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:l(999,"VOODOO per $1000")})}),Object(r.jsx)(Me,{children:Object(r.jsx)(d.Text,{children:"1d"})}),Object(r.jsx)(Me,{children:Object(r.jsxs)(d.Text,{children:[Ce({amountEarned:j,amountInvested:m}),"%"]})}),Object(r.jsx)(Me,{children:Object(r.jsx)(d.Text,{children:j})}),Object(r.jsx)(Me,{children:Object(r.jsx)(d.Text,{children:"7d"})}),Object(r.jsx)(Me,{children:Object(r.jsxs)(d.Text,{children:[Ce({amountEarned:f,amountInvested:m}),"%"]})}),Object(r.jsx)(Me,{children:Object(r.jsx)(d.Text,{children:f})}),Object(r.jsx)(Me,{children:Object(r.jsx)(d.Text,{children:"30d"})}),Object(r.jsx)(Me,{children:Object(r.jsxs)(d.Text,{children:[Ce({amountEarned:O,amountInvested:m}),"%"]})}),Object(r.jsx)(Me,{children:Object(r.jsx)(d.Text,{children:O})}),Object(r.jsx)(Me,{children:Object(r.jsx)(d.Text,{children:"365d(APY)"})}),Object(r.jsx)(Me,{children:Object(r.jsxs)(d.Text,{children:[Ce({amountEarned:x,amountInvested:m}),"%"]})}),Object(r.jsx)(Me,{children:Object(r.jsx)(d.Text,{children:x})})]}),Object(r.jsx)(Be,{fontSize:"12px",color:"textSubtle",children:l(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(r.jsx)(d.Flex,{justifyContent:"center",children:Object(r.jsxs)(d.LinkExternal,{href:"https://exchange.pancakeswap.finance/#/add/".concat(b),children:[l(999,"Get")," ",n]})})]})},Ee=function(e){var t=e.lpLabel,n=e.quoteTokenAdresses,o=e.quoteTokenSymbol,c=e.tokenAddresses,a=e.necroPrice,i=e.apy,s=Object(d.useModal)(Object(r.jsx)(Fe,{lpLabel:t,quoteTokenAdresses:n,quoteTokenSymbol:o,tokenAddresses:c,necroPrice:a,apy:i})),u=Object(x.a)(s,1)[0];return Object(r.jsx)(d.IconButton,{onClick:u,variant:"text",size:"sm",ml:"4px",children:Object(r.jsx)(d.CalculateIcon,{})})};function qe(){var e=Object(h.a)(["\n  height: ",";\n  overflow: hidden;\n"]);return qe=function(){return e},e}function ze(){var e=Object(h.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"]);return ze=function(){return e},e}function Le(){var e=Object(h.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"]);return Le=function(){return e},e}function Re(){var e=Object(h.a)(["\n  background: linear-gradient(\n    45deg,\n    rgba(255, 0, 0, 1) 0%,\n    rgba(255, 154, 0, 1) 10%,\n    rgba(208, 222, 33, 1) 20%,\n    rgba(79, 220, 74, 1) 30%,\n    rgba(63, 218, 216, 1) 40%,\n    rgba(47, 201, 226, 1) 50%,\n    rgba(28, 127, 238, 1) 60%,\n    rgba(95, 21, 242, 1) 70%,\n    rgba(186, 12, 248, 1) 80%,\n    rgba(251, 7, 217, 1) 90%,\n    rgba(255, 0, 0, 1) 100%\n  );\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"]);return Re=function(){return e},e}function Ne(){var e=Object(h.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]);return Ne=function(){return e},e}var Ue=Object(v.f)(Ne()),He=v.e.div(Re(),Ue),Ve=v.e.div(Le(),(function(e){return e.theme.card.background})),_e=v.e.div(ze(),(function(e){return e.theme.colors.borderColor})),Qe=v.e.div(qe(),(function(e){return e.expanded?"100%":"0px"})),We=function(e){var t=e.farm,n=e.removed,o=e.necroPrice,a=e.bnbPrice,i=e.supraPrice,s=e.ethereum,l=e.account,b=Object(y.a)(),p=Object(c.useState)(!1),m=Object(x.a)(p,2),j=m[0],f=m[1],h=t.isTokenOnly?t.tokenSymbol.toLowerCase():"".concat(t.tokenSymbol.toLowerCase(),"-").concat(t.quoteTokenSymbol.toLowerCase()),v=Object(c.useMemo)((function(){return t.isTokenOnly?t.quoteTokenSymbol===O.a.VOODOO?t.tokenAmount?o.times(t.tokenAmount):null:t.tokenAmount?i.times(t.tokenAmount):null:t.lpTotalInQuoteToken?t.quoteTokenSymbol===O.a.BNB?a.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===O.a.VOODOO?o.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===O.a.SUPRA?i.times(t.lpTotalInQuoteToken):t.lpTotalInQuoteToken:null}),[a,o,i,t]),T=v?"$".concat(Number(v).toLocaleString(void 0,{maximumFractionDigits:0})):"-",k=t.lpSymbol,g=t.apy&&t.apy.times(new u.a(100)).toNumber().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),w=t.quoteTokenAdresses,C=t.quoteTokenSymbol,D=t.tokenAddresses;return Object(r.jsxs)(Ve,{children:["VOODOO"===t.tokenSymbol&&Object(r.jsx)(He,{}),Object(r.jsx)(z,{lpLabel:k,multiplier:t.multiplier,depositFee:t.depositFeeBP,farmImage:h,tokenSymbol:t.tokenSymbol}),!n&&Object(r.jsxs)(d.Flex,{justifyContent:"space-between",alignItems:"center",children:[Object(r.jsx)(d.Text,{children:"APR:"}),Object(r.jsx)(d.Text,{bold:!0,style:{display:"flex",alignItems:"center"},children:t.apy?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ee,{lpLabel:k,quoteTokenAdresses:w,quoteTokenSymbol:C,tokenAddresses:D,necroPrice:o,apy:t.apy}),g,"%"]}):Object(r.jsx)(d.Skeleton,{height:24,width:80})})]}),Object(r.jsxs)(d.Flex,{justifyContent:"space-between",children:[Object(r.jsxs)(d.Text,{children:[b(318,"Earn"),":"]}),Object(r.jsx)(d.Text,{bold:!0,children:"VOODOO"})]}),Object(r.jsxs)(d.Flex,{justifyContent:"space-between",children:[Object(r.jsxs)(d.Text,{style:{fontSize:"24px"},children:[b(10001,"Deposit Fee"),":"]}),Object(r.jsxs)(d.Text,{bold:!0,style:{fontSize:"24px"},children:[t.depositFeeBP/100,"%"]})]}),Object(r.jsx)(Se,{farm:t,ethereum:s,account:l}),Object(r.jsx)(_e,{}),Object(r.jsx)(S,{onClick:function(){return f(!j)},expanded:j}),Object(r.jsx)(Qe,{expanded:j,children:Object(r.jsx)(I,{removed:n,tokenUrl:t.tokenUrl,bscScanAddress:t.isTokenOnly?"https://bscscan.com/token/".concat(t.tokenAddresses[56]):"https://bscscan.com/token/".concat(t.lpAddresses[56]),totalValueFormated:T,lpLabel:k,quoteTokenAdresses:w,quoteTokenSymbol:C,tokenAddresses:D})})]})},$e=n(77);function Ge(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]);return Ge=function(){return e},e}var Je=function(){var e=Object(a.g)(),t=e.url,n=e.isExact,o=Object(y.a)();return Object(r.jsx)(Xe,{children:Object(r.jsxs)(d.ButtonMenu,{activeIndex:n?0:1,size:"sm",variant:"subtle",children:[Object(r.jsx)(d.ButtonMenuItem,{as:$e.b,to:"".concat(t),children:o(999,"Active")}),Object(r.jsx)(d.ButtonMenuItem,{as:$e.b,to:"".concat(t,"/history"),children:o(999,"Inactive")})]})})},Xe=v.e.div(Ge()),Ye=n(140),Ke=function(e){var t=e.isSummon,n=Object(a.g)().path,s=Object(j.c)(),x=Object(j.i)(),h=Object(j.g)(),v=Object(j.f)(),y=Object(j.h)(),T=Object(l.m)(),k=T.account,g=T.ethereum,S=Object(i.b)(),w=Object(f.a)().fastRefresh;Object(c.useEffect)((function(){k&&S(Object(Ye.b)(k))}),[k,S,w]);var C=s.filter((function(e){return!!e.isSummon===!!t&&"0X"!==e.multiplier})),D=s.filter((function(e){return!!e.isSummon===!!t&&"0X"===e.multiplier})),P=Object(c.useCallback)((function(e,t){return e.map((function(e){var t,n=new u.a(e.tokenPerBLock||1).times(new u.a(e.poolWeight)).div(new u.a(10).pow(18)).times(b.a),r=x.times(n);return e.isTokenOnly&&e.tokenAmount?t=e.quoteTokenSymbol===O.a.VOODOO?new u.a(e.tokenAmount).times(x):new u.a(e.tokenAmount).times(y):(t=new u.a(e.lpTotalInQuoteToken||0),e.quoteTokenSymbol===O.a.BNB?t=t.times(v):e.quoteTokenSymbol===O.a.SUPRA?t=t.times(h):e.quoteTokenSymbol===O.a.VOODOO&&(t=t.times(x))),t.comparedTo(0)>0&&(r=r.div(t)),Object(o.a)(Object(o.a)({},e),{},{apy:r})})).map((function(e){return Object(r.jsx)(We,{farm:e,removed:t,bnbPrice:v,necroPrice:x,supraPrice:h,ethereum:g,account:k},e.pid)}))}),[v,k,x,h,g,y]);return Object(r.jsxs)(m.a,{children:[Object(r.jsxs)(p.a,{children:[Object(r.jsx)(d.Heading,{as:"h1",size:"lg",mb:"50px",style:{textAlign:"center"},children:t?"Summon dead tokens":"Stake to earn VOODOO"}),Object(r.jsx)(Je,{})]}),Object(r.jsx)("div",{children:Object(r.jsxs)(p.a,{children:[Object(r.jsx)(a.a,{exact:!0,path:"".concat(n),children:P(C,!1)}),Object(r.jsx)(a.a,{exact:!0,path:"".concat(n,"/history"),children:P(D,!0)})]})})]})}}}]);
//# sourceMappingURL=12.50773d2c.chunk.js.map