webpackJsonp([5],{1040:function(e,t,a){"use strict";var l=a(7),n=a(0);t.__esModule=!0,t.default=void 0;var r=n(a(3)),o=n(a(6)),i=n(a(1002)),c=(n(a(2)),l(a(1))),d=a(125),u=a(124),m=n(a(428)),s=a(207),f=a(4),h=new i.default({icon:"#"}),p=function(e){function t(){for(var t,a=arguments.length,l=new Array(a),n=0;n<a;n++)l[n]=arguments[n];return(t=e.call.apply(e,[this].concat(l))||this).resetPage=function(){var e=t.props.location;t.pathname!==e.pathname&&(clearTimeout(t.scrollStartTimeout),(0,f.isBrowser)()&&window.scrollTo(0,0),h.add("h2, h3, h4, h5, h6"),h.remove([1,2,3,4,5,6].map(function(e){return".rendered-example h"+e}).join(", ")),h.remove(".no-anchor"),t.scrollStartTimeout=setTimeout(s.scrollToAnchor,500),t.pathname=e.pathname)},t}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.resetPage()},a.componentDidUpdate=function(){this.resetPage()},a.componentWillUnmount=function(){clearTimeout(this.scrollStartTimeout)},a.render=function(){var e=this.props,t=e.additionalTitle,a=e.children,l=e.sidebar,n=e.title,o=l?{computer:11,largeScreen:12,widescreen:12}:{width:16},i=l?m.default.sidebarMain:m.default.main;return c.default.createElement(c.default.Fragment,null,c.default.createElement(d.Head,null,c.default.createElement("title",null,t?t+" - ":"",n)),c.default.createElement("div",{style:i},a,c.default.createElement(u.Grid,null,c.default.createElement(u.Grid.Column,(0,r.default)({},o,{textAlign:"center"}),"Blazing deployments by"," ",c.default.createElement("a",{href:"https://vercel.com/?utm_source=semantic-ui-react"},c.default.createElement("img",{height:"12",width:"14",src:"/vercel-logo.svg"})," Vercel"),"."))))},t}(c.Component);p.handledProps=["additionalTitle","children","location","sidebar","title"],p.propTypes={};var w=(0,d.withRouter)(p);t.default=w},429:function(e,t,a){"use strict";var l=a(0);t.__esModule=!0,t.default=void 0;var n=l(a(1)),r=a(124),o=l(a(1040)),i=function(){return n.default.createElement(o.default,null,n.default.createElement(r.Grid,{padded:!0,textAlign:"center",stretched:!0},n.default.createElement(r.Grid.Row,{columns:"equal"},n.default.createElement(r.Grid.Column,null,n.default.createElement(r.Header,{as:"h1",icon:!0,textAlign:"center"},n.default.createElement(r.Icon,{name:"game"}),"404",n.default.createElement(r.Header.Subheader,null,"How about some good old Atari?")))),n.default.createElement(r.Grid.Row,{columns:"equal"},n.default.createElement(r.Grid.Column,null,n.default.createElement(r.Segment,{basic:!0},n.default.createElement("embed",{src:"http://www.pizn.com/swf/classic-asteroids.swf",width:"425",height:"318",align:"center",quality:"high",pluginspage:"http://www.macromedia.com/go/getflashplayer",type:"application/x-shockwave-flash",style:{zoom:"1.13"}}))),n.default.createElement(r.Grid.Column,null,n.default.createElement(r.Segment,{basic:!0},n.default.createElement("embed",{src:"http://www.pizn.com/swf/1-space-invaders.swf",width:"425",height:"359",align:"center",quality:"high",pluginspage:"http://www.macromedia.com/go/getflashplayer",type:"application/x-shockwave-flash"}))))))};i.handledProps=[];var c=i;t.default=c}});