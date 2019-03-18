!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("prop-types"),require("react"),require("classnames"),require("react-transition-group/Transition"),require("react-dom")):"function"==typeof define&&define.amd?define(["prop-types","react","classnames","react-transition-group/Transition","react-dom"],e):"object"==typeof exports?exports.ReactToastify=e(require("prop-types"),require("react"),require("classnames"),require("react-transition-group/Transition"),require("react-dom")):t.ReactToastify=e(t["prop-types"],t.react,t.classnames,t["react-transition-group/Transition"],t["react-dom"])}(window,function(t,e,n,o,r){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e){t.exports=n},function(t,e){t.exports=o},function(t,e,n){"use strict";e.__esModule=!0,e.default=void 0;var o=a(n(0)),r=a(n(1)),s=n(6),i=n(7);function a(t){return t&&t.__esModule?t:{default:t}}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var c=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},p=function(t){var e,n;function o(e,n){var o,r=(o=t.call(this,e,n)||this).handleExited.bind(u(u(o)));return o.state={handleExited:r,firstRender:!0},o}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var s=o.prototype;return s.getChildContext=function(){return{transitionGroup:{isMounting:!this.appeared}}},s.componentDidMount=function(){this.appeared=!0,this.mounted=!0},s.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(t,e){var n=e.children,o=e.handleExited;return{children:e.firstRender?(0,i.getInitialChildMapping)(t,o):(0,i.getNextChildMapping)(t,n,o),firstRender:!1}},s.handleExited=function(t,e){var n=(0,i.getChildMapping)(this.props.children);t.key in n||(t.props.onExited&&t.props.onExited(e),this.mounted&&this.setState(function(e){var n=l({},e.children);return delete n[t.key],{children:n}}))},s.render=function(){var t=this.props,e=t.component,n=t.childFactory,o=function(t,e){if(null==t)return{};var n,o,r={},s=Object.keys(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,["component","childFactory"]),s=c(this.state.children).map(n);return delete o.appear,delete o.enter,delete o.exit,null===e?s:r.default.createElement(e,o,s)},o}(r.default.Component);p.childContextTypes={transitionGroup:o.default.object.isRequired},p.propTypes={},p.defaultProps={component:"div",childFactory:function(t){return t}};var d=(0,s.polyfill)(p);e.default=d,t.exports=e.default},function(t,e){t.exports=r},function(t,e,n){"use strict";function o(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=t&&this.setState(t)}function r(t){this.setState(function(e){var n=this.constructor.getDerivedStateFromProps(t,e);return null!=n?n:null}.bind(this))}function s(t,e){try{var n=this.props,o=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}function i(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof t.getDerivedStateFromProps&&"function"!=typeof e.getSnapshotBeforeUpdate)return t;var n=null,i=null,a=null;if("function"==typeof e.componentWillMount?n="componentWillMount":"function"==typeof e.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof e.componentWillReceiveProps?i="componentWillReceiveProps":"function"==typeof e.UNSAFE_componentWillReceiveProps&&(i="UNSAFE_componentWillReceiveProps"),"function"==typeof e.componentWillUpdate?a="componentWillUpdate":"function"==typeof e.UNSAFE_componentWillUpdate&&(a="UNSAFE_componentWillUpdate"),null!==n||null!==i||null!==a){var l=t.displayName||t.name,u="function"==typeof t.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+u+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==i?"\n  "+i:"")+(null!==a?"\n  "+a:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof t.getDerivedStateFromProps&&(e.componentWillMount=o,e.componentWillReceiveProps=r),"function"==typeof e.getSnapshotBeforeUpdate){if("function"!=typeof e.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=s;var c=e.componentDidUpdate;e.componentDidUpdate=function(t,e,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;c.call(this,t,e,o)}}return t}n.r(e),n.d(e,"polyfill",function(){return i}),o.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,s.__suppressDeprecationWarning=!0},function(t,e,n){"use strict";e.__esModule=!0,e.getChildMapping=r,e.mergeChildMappings=s,e.getInitialChildMapping=function(t,e){return r(t.children,function(n){return(0,o.cloneElement)(n,{onExited:e.bind(null,n),in:!0,appear:i(n,"appear",t),enter:i(n,"enter",t),exit:i(n,"exit",t)})})},e.getNextChildMapping=function(t,e,n){var a=r(t.children),l=s(e,a);return Object.keys(l).forEach(function(r){var s=l[r];if((0,o.isValidElement)(s)){var u=r in e,c=r in a,p=e[r],d=(0,o.isValidElement)(p)&&!p.props.in;!c||u&&!d?c||!u||d?c&&u&&(0,o.isValidElement)(p)&&(l[r]=(0,o.cloneElement)(s,{onExited:n.bind(null,s),in:p.props.in,exit:i(s,"exit",t),enter:i(s,"enter",t)})):l[r]=(0,o.cloneElement)(s,{in:!1}):l[r]=(0,o.cloneElement)(s,{onExited:n.bind(null,s),in:!0,exit:i(s,"exit",t),enter:i(s,"enter",t)})}}),l};var o=n(1);function r(t,e){var n=Object.create(null);return t&&o.Children.map(t,function(t){return t}).forEach(function(t){n[t.key]=function(t){return e&&(0,o.isValidElement)(t)?e(t):t}(t)}),n}function s(t,e){function n(n){return n in e?e[n]:t[n]}t=t||{},e=e||{};var o,r=Object.create(null),s=[];for(var i in t)i in e?s.length&&(r[i]=s,s=[]):s.push(i);var a={};for(var l in e){if(r[l])for(o=0;o<r[l].length;o++){var u=r[l][o];a[r[l][o]]=n(u)}a[l]=n(l)}for(o=0;o<s.length;o++)a[s[o]]=n(s[o]);return a}function i(t,e,n){return null!=n[e]?n[e]:t.props[e]}},function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o),s=n(0),i=n.n(s),a=n(2),l=n.n(a),u=n(4),c=n.n(u),p={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},d={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},f={SHOW:0,CLEAR:1,DID_MOUNT:2,WILL_UNMOUNT:3,ON_CHANGE:4};function h(t){return"number"==typeof t&&!isNaN(t)&&t>0}function g(t){return Object.keys(t).map(function(e){return t[e]})}var y,m=((y=function(t,e,n){var o=t[e];return!1===o||h(o)?null:new Error(n+" expect "+e+" \n      to be a valid Number > 0 or equal to false. "+o+" given.")}).isRequired=function(t,e,n){if(void 0===t[e])return new Error("The prop "+e+" is marked as required in \n      "+n+", but its value is undefined.");y(t,e,n)},y);function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function b(t){var e,n=t.delay,o=t.isRunning,s=t.closeToast,i=t.type,a=t.hide,u=t.className,c=t.style,p=t.controlledProgress,d=t.progress,f=t.isProgressDone,h=t.rtl,g=v({},c,{animationDuration:n+"ms",animationPlayState:o?"running":"paused",opacity:a?0:1,transform:p?"scaleX("+d+")":null}),y=l()("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar--"+i,{"Toastify__progress-bar--rtl":h},u),m=((e={})[p&&f?"onTransitionEnd":"onAnimationEnd"]=p&&!f?null:s,e);return r.a.createElement("div",v({className:y,style:g},m))}b.propTypes={delay:m.isRequired,isRunning:i.a.bool.isRequired,closeToast:i.a.func.isRequired,rtl:i.a.bool.isRequired,type:i.a.string,hide:i.a.bool,className:i.a.oneOfType([i.a.string,i.a.object]),progress:i.a.number,controlledProgress:i.a.bool,isProgressDone:i.a.bool},b.defaultProps={type:d.DEFAULT,hide:!1};var T=b;function O(){return(O=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function E(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}var _=function(){},C=function(t){var e,n;function o(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this).state={isRunning:!0,preventExitTransition:!1},e.flag={canCloseOnClick:!0,canDrag:!1},e.drag={start:0,x:0,y:0,deltaX:0,removalDistance:0},e.boundingRect=null,e.ref=null,e.pauseToast=function(){e.props.autoClose&&e.setState({isRunning:!1})},e.playToast=function(){e.props.autoClose&&e.setState({isRunning:!0})},e.onDragStart=function(t){e.flag.canCloseOnClick=!0,e.flag.canDrag=!0,e.boundingRect=e.ref.getBoundingClientRect(),e.ref.style.transition="",e.drag.start=e.drag.x=E(t.nativeEvent),e.drag.removalDistance=e.ref.offsetWidth*(e.props.draggablePercent/100)},e.onDragMove=function(t){e.flag.canDrag&&(e.state.isRunning&&e.pauseToast(),e.drag.x=E(t),e.drag.deltaX=e.drag.x-e.drag.start,e.drag.y=function(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}(t),e.drag.start!==e.drag.x&&(e.flag.canCloseOnClick=!1),e.ref.style.transform="translateX("+e.drag.deltaX+"px)",e.ref.style.opacity=1-Math.abs(e.drag.deltaX/e.drag.removalDistance))},e.onDragEnd=function(t){if(e.flag.canDrag){if(e.flag.canDrag=!1,Math.abs(e.drag.deltaX)>e.drag.removalDistance)return void e.setState({preventExitTransition:!0},e.props.closeToast);e.ref.style.transition="transform 0.2s, opacity 0.2s",e.ref.style.transform="translateX(0)",e.ref.style.opacity=1}},e.onDragTransitionEnd=function(){var t=e.boundingRect,n=t.top,o=t.bottom,r=t.left,s=t.right;e.props.pauseOnHover&&e.drag.x>=r&&e.drag.x<=s&&e.drag.y>=n&&e.drag.y<=o?e.pauseToast():e.playToast()},e.onExitTransitionEnd=function(){var t=e.ref.scrollHeight,n=e.ref.style;requestAnimationFrame(function(){n.minHeight="initial",n.height=t+"px",n.transition="all 0.4s ",requestAnimationFrame(function(){n.height=0,n.padding=0,n.margin=0}),setTimeout(function(){return e.props.onExited()},400)})},e}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var s=o.prototype;return s.componentDidMount=function(){this.props.onOpen(this.props.children.props),this.props.draggable&&this.bindDragEvents(),this.props.pauseOnFocusLoss&&this.bindFocusEvents()},s.componentDidUpdate=function(t){t.draggable!==this.props.draggable&&(this.props.draggable?this.bindDragEvents():this.unbindDragEvents()),t.pauseOnFocusLoss!==this.props.pauseOnFocusLoss&&(this.props.pauseOnFocusLoss?this.bindFocusEvents():this.unbindFocusEvents())},s.componentWillUnmount=function(){this.props.onClose(this.props.children.props),this.props.draggable&&this.unbindDragEvents(),this.props.pauseOnFocusLoss&&this.unbindFocusEvents()},s.bindFocusEvents=function(){window.addEventListener("focus",this.playToast),window.addEventListener("blur",this.pauseToast)},s.unbindFocusEvents=function(){window.removeEventListener("focus",this.playToast),window.removeEventListener("blur",this.pauseToast)},s.bindDragEvents=function(){document.addEventListener("mousemove",this.onDragMove),document.addEventListener("mouseup",this.onDragEnd),document.addEventListener("touchmove",this.onDragMove),document.addEventListener("touchend",this.onDragEnd)},s.unbindDragEvents=function(){document.removeEventListener("mousemove",this.onDragMove),document.removeEventListener("mouseup",this.onDragEnd),document.removeEventListener("touchmove",this.onDragMove),document.removeEventListener("touchend",this.onDragEnd)},s.render=function(){var t=this,e=this.props,n=e.closeButton,o=e.children,s=e.autoClose,i=e.pauseOnHover,a=e.closeOnClick,u=e.type,c=e.hideProgressBar,p=e.closeToast,d=e.transition,f=e.position,h=e.className,g=e.bodyClassName,y=e.progressClassName,m=e.progressStyle,v=e.updateId,b=e.role,E=e.progress,_=e.isProgressDone,C=e.rtl,N={className:l()("Toastify__toast","Toastify__toast--"+u,{"Toastify__toast--rtl":C},h)};s&&i&&(N.onMouseEnter=this.pauseToast,N.onMouseLeave=this.playToast),a&&(N.onClick=function(){return t.flag.canCloseOnClick&&p()});var D=parseFloat(E)===E;return r.a.createElement(d,{in:this.props.in,appear:!0,onExited:this.onExitTransitionEnd,position:f,preventExitTransition:this.state.preventExitTransition},r.a.createElement("div",O({},N,{ref:function(e){return t.ref=e},onMouseDown:this.onDragStart,onTouchStart:this.onDragStart,onMouseUp:this.onDragTransitionEnd,onTouchEnd:this.onDragTransitionEnd}),r.a.createElement("div",O({},this.props.in&&{role:b},{className:l()("Toastify__toast-body",g)}),o),n&&n,(s||D)&&r.a.createElement(T,O({},v&&!D?{key:"pb-"+v}:{},{rtl:C,delay:s,isRunning:this.state.isRunning,closeToast:p,hide:c,type:u,style:m,className:y,controlledProgress:D,isProgressDone:_,progress:E}))))},o}(o.Component);C.propTypes={closeButton:i.a.oneOfType([i.a.node,i.a.bool]).isRequired,autoClose:m.isRequired,children:i.a.node.isRequired,closeToast:i.a.func.isRequired,position:i.a.oneOf(g(p)).isRequired,pauseOnHover:i.a.bool.isRequired,pauseOnFocusLoss:i.a.bool.isRequired,closeOnClick:i.a.bool.isRequired,transition:i.a.func.isRequired,rtl:i.a.bool.isRequired,hideProgressBar:i.a.bool.isRequired,draggable:i.a.bool.isRequired,draggablePercent:i.a.number.isRequired,in:i.a.bool,onExited:i.a.func,onOpen:i.a.func,onClose:i.a.func,type:i.a.oneOf(g(d)),className:i.a.oneOfType([i.a.string,i.a.object]),bodyClassName:i.a.oneOfType([i.a.string,i.a.object]),progressClassName:i.a.oneOfType([i.a.string,i.a.object]),progressStyle:i.a.object,progress:i.a.number,isProgressDone:i.a.bool,updateId:i.a.oneOfType([i.a.string,i.a.number]),ariaLabel:i.a.string},C.defaultProps={type:d.DEFAULT,in:!0,onOpen:_,onClose:_,className:null,bodyClassName:null,progressClassName:null,updateId:null,role:"alert"};var N=C;function D(t){var e=t.closeToast,n=t.type,o=t.ariaLabel;return r.a.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:e,"aria-label":o},"✖")}D.propTypes={closeToast:i.a.func,arialLabel:i.a.string},D.defaultProps={ariaLabel:"close"};var x=D,P=n(3),S=n.n(P);function R(){return(R=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var j=function(){},w=function(t){var e=t.enter,n=t.exit,o=t.duration,s=void 0===o?750:o,i=t.appendPosition,a=void 0!==i&&i;return function(t){var o,i,l=t.children,u=t.position,c=t.preventExitTransition,p=function(t,e){if(null==t)return{};var n,o,r={},s=Object.keys(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,["children","position","preventExitTransition"]),d=a?e+"--"+u:e,f=a?n+"--"+u:n;Array.isArray(s)&&2===s.length?(o=s[0],i=s[1]):o=i=s;return r.a.createElement(S.a,R({},p,{timeout:c?0:{enter:o,exit:i},onEnter:function(t){t.classList.add(d),t.style.animationFillMode="forwards",t.style.animationDuration=.001*o+"s"},onEntered:function(t){t.classList.remove(d),t.style.cssText=""},onExit:c?j:function(t){t.classList.add(f),t.style.animationFillMode="forwards",t.style.animationDuration=.001*i+"s"}}),l)}},F=w({enter:"Toastify__bounce-enter",exit:"Toastify__bounce-exit",appendPosition:!0}),L=w({enter:"Toastify__slide-enter",exit:"Toastify__slide-exit",duration:[450,750],appendPosition:!0}),M=w({enter:"Toastify__zoom-enter",exit:"Toastify__zoom-exit"}),I=w({enter:"Toastify__flip-enter",exit:"Toastify__flip-exit"}),A={list:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t){return this.list.delete(t),this},emit:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return!!this.list.has(t)&&(this.list.get(t).forEach(function(t){return t.call.apply(t,[null].concat(n))}),!0)}};function U(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function k(){return(k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var q=function(t){var e,n;function s(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this).state={toast:[]},e.toastKey=1,e.collection={},e.isToastActive=function(t){return-1!==e.state.toast.indexOf(t)},e}n=t,(e=s).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i=s.prototype;return i.componentDidMount=function(){var t=this;A.on(f.SHOW,function(e,n){return t.show(e,n)}).on(f.CLEAR,function(e){return null==e?t.clear():t.removeToast(e)}).emit(f.DID_MOUNT,this)},i.componentWillUnmount=function(){A.off(f.SHOW).off(f.CLEAR).emit(f.WILL_UNMOUNT)},i.removeToast=function(t){this.setState({toast:this.state.toast.filter(function(e){return e!==t})},this.dispatchChange)},i.dispatchChange=function(){A.emit(f.ON_CHANGE,this.state.toast.length)},i.makeCloseButton=function(t,e,n){var s=this,i=this.props.closeButton;return Object(o.isValidElement)(t)||!1===t?i=t:!0===t&&(i=r.a.createElement(x,null)),!1!==i&&Object(o.cloneElement)(i,{closeToast:function(){return s.removeToast(e)},type:n})},i.getAutoCloseDelay=function(t){return!1===t||h(t)?t:this.props.autoClose},i.canBeRendered=function(t){return Object(o.isValidElement)(t)||"string"==typeof t||"number"==typeof t||"function"==typeof t},i.parseClassName=function(t){return"string"==typeof t?t:null!==t&&"object"==typeof t&&"toString"in t?t.toString():null},i.show=function(t,e){var n,r=this;if(!this.canBeRendered(t))throw new Error("The element you provided cannot be rendered. You provided an element of type "+typeof t);var s=e.toastId,i=function(){return r.removeToast(s)},a={id:s,key:e.key||this.toastKey++,type:e.type,closeToast:i,updateId:e.updateId,rtl:this.props.rtl,position:e.position||this.props.position,transition:e.transition||this.props.transition,className:this.parseClassName(e.className||this.props.toastClassName),bodyClassName:this.parseClassName(e.bodyClassName||this.props.bodyClassName),closeButton:this.makeCloseButton(e.closeButton,s,e.type),pauseOnHover:"boolean"==typeof e.pauseOnHover?e.pauseOnHover:this.props.pauseOnHover,pauseOnFocusLoss:"boolean"==typeof e.pauseOnFocusLoss?e.pauseOnFocusLoss:this.props.pauseOnFocusLoss,draggable:"boolean"==typeof e.draggable?e.draggable:this.props.draggable,draggablePercent:"number"!=typeof e.draggablePercent||isNaN(e.draggablePercent)?this.props.draggablePercent:e.draggablePercent,closeOnClick:"boolean"==typeof e.closeOnClick?e.closeOnClick:this.props.closeOnClick,progressClassName:this.parseClassName(e.progressClassName||this.props.progressClassName),progressStyle:this.props.progressStyle,autoClose:this.getAutoCloseDelay(e.autoClose),hideProgressBar:"boolean"==typeof e.hideProgressBar?e.hideProgressBar:this.props.hideProgressBar,progress:parseFloat(e.progress),isProgressDone:e.isProgressDone};"function"==typeof e.onOpen&&(a.onOpen=e.onOpen),"function"==typeof e.onClose&&(a.onClose=e.onClose),Object(o.isValidElement)(t)&&"string"!=typeof t.type&&"number"!=typeof t.type?t=Object(o.cloneElement)(t,{closeToast:i}):"function"==typeof t&&(t=t({closeToast:i})),this.collection=k({},this.collection,((n={})[s]={position:a.position,options:a,content:t},n)),this.setState({toast:(a.updateId?U(this.state.toast):[].concat(U(this.state.toast),[s])).filter(function(t){return t!==e.staleToastId})},this.dispatchChange)},i.makeToast=function(t,e){return r.a.createElement(N,k({},e,{isDocumentHidden:this.state.isDocumentHidden,key:"toast-"+e.key}),t)},i.clear=function(){this.setState({toast:[]})},i.renderToast=function(){var t=this,e={},n=this.props,o=n.className,s=n.style;return(n.newestOnTop?Object.keys(this.collection).reverse():Object.keys(this.collection)).forEach(function(n){var o=t.collection[n],r=o.position,s=o.options,i=o.content;e[r]||(e[r]=[]),-1!==t.state.toast.indexOf(s.id)?e[r].push(t.makeToast(i,s)):(e[r].push(null),delete t.collection[n])}),Object.keys(e).map(function(n){var i=1===e[n].length&&null===e[n][0],a={className:l()("Toastify__toast-container","Toastify__toast-container--"+n,{"Toastify__toast-container--rtl":t.props.rtl},t.parseClassName(o)),style:i?k({},s,{pointerEvents:"none"}):k({},s)};return r.a.createElement(c.a,k({},a,{key:"container-"+n}),e[n])})},i.render=function(){return r.a.createElement("div",{className:"Toastify"},this.renderToast())},s}(o.Component);q.propTypes={position:i.a.oneOf(g(p)),autoClose:m,closeButton:i.a.oneOfType([i.a.node,i.a.bool]),hideProgressBar:i.a.bool,pauseOnHover:i.a.bool,closeOnClick:i.a.bool,newestOnTop:i.a.bool,className:i.a.oneOfType([i.a.string,i.a.object]),style:i.a.object,toastClassName:i.a.oneOfType([i.a.string,i.a.object]),bodyClassName:i.a.oneOfType([i.a.string,i.a.object]),progressClassName:i.a.oneOfType([i.a.string,i.a.object]),progressStyle:i.a.object,transition:i.a.func,rtl:i.a.bool,draggable:i.a.bool,draggablePercent:i.a.number,pauseOnFocusLoss:i.a.bool},q.defaultProps={position:p.TOP_RIGHT,transition:F,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:r.a.createElement(x,null),pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,className:null,style:null,toastClassName:null,bodyClassName:null,progressClassName:null,progressStyle:null};var W=q,B=n(5);function H(){return(H=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var G=null,X=null,V={},Y=[],z=function(){return!1},K=!("undefined"==typeof window||!window.document||!window.document.createElement);function Z(t,e){return H({},t,{type:e,toastId:Q(t)})}function J(){return(Math.random().toString(36)+Date.now().toString(36)).substr(2,10)}function Q(t){return t&&("string"==typeof t.toastId||"number"==typeof t.toastId&&!isNaN(t.toastId))?t.toastId:J()}function $(t,e){return G?A.emit(f.SHOW,t,e):(Y.push({action:f.SHOW,content:t,options:e}),K&&(X=document.createElement("div"),document.body.appendChild(X),Object(B.render)(r.a.createElement(W,V),X))),e.toastId}var tt=H(function(t,e){return $(t,Z(e,e&&e.type||d.DEFAULT))},{success:function(t,e){return $(t,Z(e,d.SUCCESS))},info:function(t,e){return $(t,Z(e,d.INFO))},warn:function(t,e){return $(t,Z(e,d.WARNING))},warning:function(t,e){return $(t,Z(e,d.WARNING))},error:function(t,e){return $(t,Z(e,d.ERROR))},dismiss:function(t){return void 0===t&&(t=null),G&&A.emit(f.CLEAR,t)},isActive:z,update:function(t,e){setTimeout(function(){if(G&&void 0!==G.collection[t]){var n=G.collection[t],o=n.options,r=n.content,s=H({},o,e,{toastId:e.toastId||t});e.toastId&&e.toastId!==t?s.staleToastId=t:s.updateId=J();var i=void 0!==s.render?s.render:r;delete s.render,$(i,s)}},0)},done:function(t,e){void 0===e&&(e=1),tt.update(t,{progress:e,isProgressDone:!0})},onChange:function(t){"function"==typeof t&&A.on(f.ON_CHANGE,t)},configure:function(t){V=t},POSITION:p,TYPE:d});A.on(f.DID_MOUNT,function(t){G=t,tt.isActive=function(t){return G.isToastActive(t)},Y.forEach(function(t){A.emit(t.action,t.content,t.options)}),Y=[]}).on(f.WILL_UNMOUNT,function(){G=null,tt.isActive=z,K&&X&&document.body.removeChild(X)});var et=tt;n.d(e,"ToastContainer",function(){return W}),n.d(e,"toast",function(){return et}),n.d(e,"cssTransition",function(){return w}),n.d(e,"Bounce",function(){return F}),n.d(e,"Slide",function(){return L}),n.d(e,"Zoom",function(){return M}),n.d(e,"Flip",function(){return I}),n.d(e,"ToastPosition",function(){return p}),n.d(e,"ToastType",function(){return d})}])});
//# sourceMappingURL=ReactToastify.js.map