(this["webpackJsonpcalculation-station"]=this["webpackJsonpcalculation-station"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(2),a=n.n(r),s=n(9),u=n.n(s),i=(n(15),n(1)),o=n.n(i),l=n(3),d=n(4),h=n(5),j=n(7),f=n(6),b=(n(17),function(e){var t=e.currentState;return Object(c.jsx)("div",{className:"calculation-board",children:t.fetchedCalculations.map((function(e,t){return Object(c.jsx)("div",{className:"calc-box",children:Object(c.jsx)("p",{className:"calculation",children:e})},t)}))})}),p=(n(18),n(19),function(e){var t=e.clearResult,n=e.updateShadow,r=e.currentSequence,a=e.storeResult,s=e.calculate,u=e.allClear,i=e.storeKey,d=e.updateCalculations,h=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s(),e.next=3,a(t,r);case 3:n=e.sent,d(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(e){return e.preventDefault(),e.target.innerText},f=function(){var e=Object(l.a)(o.a.mark((function e(n){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=j(n),t(),e.next=4,i(c);case 4:p(/\d/g);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=j(e);i(t,!0)},p=function(e){var t=r.toString();if(t.includes("(")&&!t.includes(")"))return r;if(e.test(r)){var c=s();n(c)}};return Object(c.jsxs)("div",{className:"keyboard",children:[Object(c.jsxs)("section",{className:"key-row row-1",children:[Object(c.jsx)("button",{onClick:function(){return u()},className:"key",children:" AC "}),Object(c.jsx)("button",{onClick:function(e){return b(e)},className:"key",children:" ( "}),Object(c.jsx)("button",{onClick:function(e){return b(e)},className:"key",children:" ) "}),Object(c.jsx)("button",{onClick:function(e){return b(e)},className:"key",children:" \xf7 "})]}),Object(c.jsxs)("section",{className:"key-row row-2",children:[Object(c.jsx)("button",{onClick:function(e){return f(e)},className:"key",children:" 7 "}),Object(c.jsx)("button",{onClick:function(e){return f(e)},className:"key",children:" 8 "}),Object(c.jsx)("button",{onClick:function(e){return f(e)},className:"key",children:" 9 "}),Object(c.jsx)("button",{onClick:function(e){return b(e)},className:"key",children:" x "})]}),Object(c.jsxs)("section",{className:"key-row row-3",children:[Object(c.jsx)("button",{onClick:function(e){return f(e)},className:"key ",children:" 4 "}),Object(c.jsx)("button",{onClick:function(e){return f(e)},className:"key",children:" 5 "}),Object(c.jsx)("button",{onClick:function(e){return f(e)},className:"key",children:" 6 "}),Object(c.jsx)("button",{onClick:function(e){return b(e)},className:"key",children:" - "})]}),Object(c.jsxs)("section",{className:"key-row row-4",children:[Object(c.jsx)("button",{onClick:function(e){return f(e)},className:"key ",children:" 1 "}),Object(c.jsx)("button",{onClick:function(e){return f(e)},className:"key",children:" 2 "}),Object(c.jsx)("button",{onClick:function(e){return f(e)},className:"key",children:" 3 "}),Object(c.jsx)("button",{onClick:function(e){return b(e)},className:"key",children:" + "})]}),Object(c.jsxs)("section",{className:"key-row row-5",children:[Object(c.jsx)("button",{onClick:function(e){return f(e)},className:"key zero-key",children:" 0 "}),Object(c.jsx)("button",{onClick:function(e){return b(e)},className:"key",children:" . "}),Object(c.jsx)("button",{onClick:function(){h()},className:"key",children:" = "})]})]})}),x=(n(20),function(e){var t=e.shadowResult,n=e.result,r=e.currentSequence;return Object(c.jsxs)("div",{className:"result-screen",children:[Object(c.jsx)("p",{className:"input-display ".concat(n?"hidden":""),children:r}),Object(c.jsx)("p",{className:"shadow-result ".concat(n?"hidden":""),children:t}),Object(c.jsx)("p",{className:"result ".concat(n?"":"hidden"),children:n})]})}),k=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://calculation-station.herokuapp.com/calculations");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={sequence:t},e.prev=1,e.next=4,fetch("https://calculation-station.herokuapp.com/addCalculation",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)});case 4:return n=e.sent,e.next=7,n.json(t);case 7:return c=e.sent,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),m=n(21).Parser,y=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).allClear=function(){c.setState({currentSequence:"",result:"",shadowResult:""})},c.beautifyResult=function(e){return e=(e=e.toFixed(3))%1===0?Math.trunc(e):e},c.beautifySequence=function(e){return e.split("").join(" ")},c.calculate=function(){var e=c.state.currentSequence;e=c.replaceChar(e,"x","*"),e=c.replaceChar(e,"\xf7","/");var t=m.evaluate(e);return"Infinity"===t&&(t=0),t=c.beautifyResult(t)},c.clearResult=function(){c.setState({result:""})},c.replaceChar=function(e,t,n){if(e.indexOf(t)){var c=e.indexOf(t),r=e.split("");return r[c]=n,r.join("")}},c.sendCalculation=function(){var e=Object(l.a)(o.a.mark((function e(t,n){var r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.beautifySequence(n),r="".concat(n," = ").concat(t),e.next=4,O(r);case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),c.storeKey=function(e,t){var n=c.state.currentSequence,r=c.checkSequence(n,e,t);c.setState({currentSequence:r})},c.checkSequence=function(e,t,n){return n||c.state.result!==c.state.currentSequence?e+t:t},c.storeResult=function(e,t){return c.setState({currentSequence:e,result:e}),c.sendCalculation(e,t)},c.updateShadow=function(e){c.setState({shadowResult:e})},c.state={currentSequence:"",result:"",shadowResult:""},c}return Object(h.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"calculator",children:[Object(c.jsx)(x,{shadowResult:this.state.shadowResult,result:this.state.result,currentSequence:this.state.currentSequence}),Object(c.jsx)(p,{updateCalculations:this.props.updateCalculations,clearResult:this.clearResult,updateShadow:this.updateShadow,currentSequence:this.state.currentSequence,storeResult:this.storeResult,calculate:this.calculate,allClear:this.allClear,storeKey:this.storeKey})]})}}]),n}(r.Component),C=(n(22),function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).componentDidMount=Object(l.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k();case 2:n=t.sent,e.setState({fetchedCalculations:n});case 4:case"end":return t.stop()}}),t)}))),e.updateCalculations=function(t){e.setState({fetchedCalculations:t.calculations})},e.state={fetchedCalculations:[]},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("section",{className:"components",children:[Object(c.jsx)(b,{currentState:this.state}),Object(c.jsx)(y,{updateCalculations:this.updateCalculations})]})})}}]),n}(r.Component)),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};u.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root")),v()}],[[23,1,2]]]);
//# sourceMappingURL=main.150cd3e3.chunk.js.map