(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},159:function(e,t,a){},285:function(e,t,a){},286:function(e,t,a){},287:function(e,t,a){},288:function(e,t,a){},289:function(e,t,a){},290:function(e,t,a){},291:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(23),r=a.n(s),i=(a(155),a.p,a(94),a(13)),o=a(14),l=a(16),d=a(15),j=(a(156),a(157),a(136)),b=a.n(j),u=a(33),h=a(2);function m(e){var t=c.a.useState(!1),a=Object(u.a)(t,2),n=a[0],s=a[1],r=c.a.useRef();return c.a.useEffect((function(){new IntersectionObserver((function(e){e.forEach((function(e){return s(e.isIntersecting)}))})).observe(r.current)}),[]),Object(h.jsx)("div",{className:"fade-in-section ".concat(n?"is-visible":""),style:{transitionDelay:"".concat(e.delay)},ref:r,children:e.children})}var O=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{id:"intro",children:[Object(h.jsx)(b.a,{avgTypingDelay:130,children:Object(h.jsxs)("span",{className:"intro-title",children:[">> hi, i'm ",Object(h.jsx)("span",{className:"intro-name",children:"john"}),"."]})}),Object(h.jsxs)(m,{children:[Object(h.jsx)("div",{className:"intro-subtitle",children:"welcome to my website"}),Object(h.jsxs)("div",{className:"intro-desc",children:["i do things with computers",Object(h.jsx)("p",{children:"scroll down to learn more about what i do"})]})]})]})}}]),a}(n.Component),p=a(319),x=a(315),v=a(144),f=a.n(v),g=a(143),y=a.n(g);a(159);function w(e){var t=c.a.useState(!1),a=Object(u.a)(t,2),n=a[0],s=a[1],r=c.a.useRef();return c.a.useEffect((function(){new IntersectionObserver((function(e){e.forEach((function(e){return s(e.isIntersecting)}))})).observe(r.current)}),[]),Object(h.jsx)("div",{className:"to-show ".concat(n?"true":"false"," ").concat(e.tag),style:{transitionDelay:"".concat(e.delay)},ref:r,children:e.children})}var k=window.innerWidth<600,N=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.expanded,t=[Object(h.jsx)("a",{href:"#intro",children:"/home"}),Object(h.jsx)("a",{href:"#about",children:"/about"}),Object(h.jsx)("a",{href:"#work",children:"/work"}),Object(h.jsx)("a",{href:"#projects",children:"/projects"})];return Object(h.jsxs)("div",{className:"sidebar-nav",children:[!k&&Object(h.jsx)(p.a,{expanded:e,defaultOpenKeys:["3","4"],activeKey:this.state.activeKey,onSelect:this.handleSelect,appearance:"subtle",children:Object(h.jsx)(p.a.Body,{children:Object(h.jsx)("div",{className:"sidebar-links",children:t.map((function(e,t){return Object(h.jsx)("div",{children:e})}))})})}),Object(h.jsxs)("div",{className:"sidebar-logos",href:"/",children:[Object(h.jsx)("a",{href:"mailto:gemmell.j@northeastern.edu",children:Object(h.jsx)(x.a,{})}),Object(h.jsx)("a",{href:"https://github.com/jgemmell124",target:"_blank",children:Object(h.jsx)(y.a,{})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/johnwgemmell",target:"_blank",children:Object(h.jsx)(f.a,{})})]})]})}}]),a}(n.Component),C=a(57),S=(a(285),a(286),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"skill-bar",style:{"border-color":"white"},children:[Object(h.jsx)("p",{className:"bar-label",children:"Python"}),Object(h.jsx)("div",{class:"container",children:Object(h.jsx)(w,{tag:"py",className:"py"})}),Object(h.jsx)("p",{className:"bar-label",children:"HTML / CSS"}),Object(h.jsx)("div",{class:"container",style:{"border-color":"white"},children:Object(h.jsx)(w,{tag:"html",className:"html"})}),Object(h.jsx)("p",{className:"bar-label",children:"JavaScript"}),Object(h.jsx)("div",{class:"container",children:Object(h.jsx)(w,{tag:"js",className:"html"})}),Object(h.jsx)("p",{className:"bar-label",children:"SQL"}),Object(h.jsx)("div",{class:"container",children:Object(h.jsx)(w,{tag:"sql"})}),Object(h.jsx)("p",{className:"bar-label",children:"C++"}),Object(h.jsx)("div",{class:"container",children:Object(h.jsx)(w,{tag:"cpp"})}),Object(h.jsx)("p",{className:"bar-label",children:"Django"}),Object(h.jsx)("div",{class:"container",children:Object(h.jsx)(w,{tag:"django"})}),Object(h.jsx)("p",{className:"bar-label",children:"React.js"}),Object(h.jsx)("div",{class:"container",children:Object(h.jsx)(w,{tag:"react"})})]})}}]),a}(n.Component)),D=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(C.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){var e=[Object(h.jsxs)("p",{children:["I'm a Computer Engineer/ Computer Science student at ",Object(h.jsx)("strong",{children:"northeastern university "}),"in Boston. I am going into my third year."]}),Object(h.jsxs)("p",{children:["I'm into everything to do with computers, electronics, and software. This includes",Object(h.jsx)("b",{children:" machine learning"}),", ",Object(h.jsx)("b",{children:"AI"}),", ",Object(h.jsx)("b",{children:"web dev"}),",  and"," ",Object(h.jsx)("b",{children:"cyber security"}),". I enjoy sports, exercising, and the outdoor. I like to go fishing year-round and am always looking for my next adventure."]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{style:{"font-size":"23px"},children:"I am always open for new opurtunites. "}),"If you want contact me, send me an email:"," ",Object(h.jsxs)("a",{href:"mailto:gemmell.j@northeastern.edu",children:["gemmell.j@northeastern.edu "," "]})]})],t=["RaspberryPi","Arduino","Soldering","Linux","Windows","MacOS"];t.map((function(e){return Object(h.jsx)("li",{children:e})}));return Object(h.jsx)("div",{id:"about",children:Object(h.jsxs)(m,{children:[Object(h.jsx)("div",{className:"section-header ",children:Object(h.jsx)("span",{className:"section-title",children:"/ about me"})}),Object(h.jsx)("div",{className:"about-content",children:Object(h.jsxs)("div",{className:"about-description",children:[e,Object(h.jsx)("h4",{className:"section-title",style:{"font-size":"23px"},children:"Skills"}),"Here are some technologies I have been working with:",Object(h.jsx)(m,{children:Object(h.jsx)(S,{})}),Object(h.jsx)("ul",{className:"tech-stack",children:t.map((function(e,t){return Object(h.jsx)(m,{delay:"".concat(t+1,"00ms"),children:Object(h.jsx)("li",{children:e})})}))})]})})]})})}}]),a}(c.a.Component),T=a(27),A=a(145),I=a(317),B=a(321),J=a(318),P=a(316),L=a(320),z=(a(287),["children","value","index"]);function M(e){var t=e.children,a=e.value,n=e.index,c=Object(A.a)(e,z);return Object(h.jsx)("div",Object(T.a)(Object(T.a)({role:"tabpanel",hidden:a!==n,id:"vertical-tabpanel-".concat(n),"aria-labelledby":"vertical-tab-".concat(n)},c),{},{children:a===n&&Object(h.jsx)(L.a,{p:3,children:Object(h.jsx)(P.a,{children:t})})}))}function R(e){return{id:"vertical-tab-".concat(e),"aria-controls":"vertical-tabpanel-".concat(e)}}var F=Object(I.a)((function(e){return{root:{flexGrow:1,backgroundColor:"transparent",display:"flex",height:300},tabs:{borderRight:"1px solid ".concat(e.palette.divider)}}}));function K(){var e=F(),t=c.a.useState(0),a=Object(u.a)(t,2),n=a[0],s=a[1];return Object(h.jsxs)("div",{className:e.root,children:[Object(h.jsxs)(B.a,{orientation:"vertical",variant:"centered",value:n,onChange:function(e,t){s(t)},"aria-label":"Vertical tabs example",className:e.tabs,children:[Object(h.jsx)(J.a,Object(T.a)({label:"Amazon"},R(0))),Object(h.jsx)(J.a,Object(T.a)({label:"Dylan & Pete's"},R(1))),Object(h.jsx)(J.a,Object(T.a)({label:"Youth Camp"},R(2))),Object(h.jsx)(J.a,Object(T.a)({label:"VFW Tree Lot"},R(3))),Object(h.jsx)(J.a,Object(T.a)({label:"Market Basket"},R(4)))]}),Object.keys(E).map((function(e,t){return Object(h.jsxs)(M,{value:n,index:t,children:[Object(h.jsxs)("span",{className:"job-title",children:[E[e].JobTitle," @ "]}),Object(h.jsx)("span",{className:"job-company",children:e}),Object(h.jsx)("div",{className:"duration",children:E[e].Duration}),Object(h.jsx)("ul",{className:"job-desc",children:E[e].desc.map((function(e){return Object(h.jsx)(m,{children:Object(h.jsx)("li",{children:e})})}))})]})}))]})}var E={Amazon:{JobTitle:"Independent Business Owner",Duration:"2020",desc:["Researched, designed, and sold products on Amazon","Communicated with manufacturers and suppliers around the world","Created multiple ecommerce websites and marketed with PPC advertising. Managed customer service"]},"Dylan and Pete's Ice Cream":{JobTitle:"Truck Driver",Duration:"Summer 2019",desc:["Operated an Ice Cream truck at corporate and private catering events in Greater Boston area."]},"Andover Youth Camp":{JobTitle:"Youth Coach",Duration:"Summer 2017-2019",desc:["Assisted in coaching youth players in both football and baseball. Led drills, provided verbal and written scorecard feedback to campers"]},"VFW Christmas Tree Lot":{JobTitle:"Tree Lot Assistant",Duration:"Fall 2015-2019",desc:["Seasonal job setting up and maintaining Christmas tree lot"," Unloaded trucks, organized displays, and assisted customers"]},"Market Basket":{JobTitle:"Bagger and Lot Attendant",Duration:"2015-2015",desc:["Bagged groceries and provided assistance to customers","Supported cashiers and front-end store employees, collected shopping carts from parking lot"]}},G=(a(288),{Amazon:{"Job Title":"Independent Business Owner",Duration:"2020",desc:["Researched, designed, and sold products on Amazon","Communicated with manufacturers and suppliers around the world","Created multiple ecommerce websites and marketed with PPC advertising. Managed customer service"]},Pete:{"Job Title":"Independent Business Owner",Duration:"Summer 2019",desc:["Operated an Ice Cream truck at corporate and private catering events in Greater Boston area."]},Camp:{"Job Title":"Youth Coach",Duration:"Summer 2017-2019",desc:["Assisted in coaching youth players in both football and baseball. Led drills, provided verbal and written scorecard feedback to campers"]},Tree:{"Job Title":"Tree Lot Assistant",Duration:"Fall 2015-2019",desc:["Seasonal job setting up and maintaining Christmas tree lot"," Unloaded trucks, organized displays, and assisted customers"]},MB:{"Job Title":"Bagger and Lot Attendant",Duration:"2015-2015",desc:["Bagged groceries and provided assistance to customers","Supported cashiers and front-end store employees, collected shopping carts from parking lot"]}}),H=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{id:"work",children:Object(h.jsxs)(m,{children:[Object(h.jsx)("div",{className:"section-header ",children:Object(h.jsx)("span",{className:"section-title",children:"/ work experience"})}),Object(h.jsx)("div",{className:"about-content",children:Object(h.jsx)(K,{jobs:{jobs:G}})})]})})}}]),a}(n.Component),W=(a(289),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{id:"footer",children:Object(h.jsx)("span",{children:"Built by John Gemmell, Design based on Gazi Jarin"})})}}]),a}(n.Component)),Y=(a(290),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{id:"projects",children:[Object(h.jsx)("div",{className:"section-header ",children:Object(h.jsx)("span",{className:"section-title",children:"/ projects"})}),Object(h.jsx)("div",{class:"grid",children:Object.keys(V).map((function(e,t){return Object(h.jsx)(m,{delay:"".concat(t+1,"00ms"),children:Object(h.jsx)("div",{className:"item",children:Object(h.jsxs)("div",{class:"text",children:[Object(h.jsx)("h3",{children:e}),V[e].desc.map((function(e){return Object(h.jsx)("div",{className:"lang",children:e})})),Object(h.jsx)("span",{className:"lang-txt",children:V[e].langs})]})})})}))})]})}}]),a}(n.Component)),V={"Maze Generator and Solver ":{langs:["Java"],desc:["Created a program to generate a random maze using Krustkal\u2019s algorithm and solve it using breadth-firstand depth-first search."]},"Digital Accelerometer Reader":{langs:["C++"],desc:["Programmed an fpga board to read x,y, and z values of a Digital Accelerometer Module from memory.","Designed a circuit for the board to translate the values to degrees of board angle and display it on a 7-segment displays of the fpga board."]},"Automatic Sudoku Solver":{langs:["Python, Selenium BS4"],desc:["Created program to scrape the information of an online sudoku game, solve the board using the Backtracking algorithm, then automatically complete missing spaces on the website."]},"Thermocouple Data Acquisition System":{langs:["C++, MATLAB"],desc:["Created program to perform numerical analysis of a temperature sensing thermocouple.","Optimized thermocouple design by iterating & plotting different test cases within MATLAB."]},"IoT HDMI Switcher":{langs:["Python, RaspberryPi, Flask"],desc:["Created Raspberry Pi web server to control output of 3 HDMI inputs from devices on same network."]}};var q=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("header",{className:"App-header"}),Object(h.jsxs)("div",{id:"content",children:[Object(h.jsx)(O,{}),Object(h.jsx)(D,{}),Object(h.jsx)(H,{}),Object(h.jsx)(Y,{}),Object(h.jsx)(W,{})]}),Object(h.jsx)(N,{})]})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,324)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(q,{})}),document.getElementById("root")),U()},94:function(e,t,a){}},[[291,1,2]]]);
//# sourceMappingURL=main.5a1d5bd1.chunk.js.map