(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(1),r=c(2),n=c.n(r),d=c(6),a=c.n(d),l=(c(13),c(3)),i=c(5),o=c(7);var x,m=function(e){var t=e.seconds,c=e.minutes,r=e.addTime,n=e.subsctractTime,d=e.startPressed,a=e.startTimer,l=e.stopTimer,x=e.resetTimer;return Object(s.jsxs)("div",{className:"flex flex-col h-screen w-full md:m-auto md-h-600 md-w-600",children:[Object(s.jsx)("p",{className:"text-center text-megrim text-unselectable m-auto hidden md:block md:text-5xl md:mb-4",children:"POMODORO APP"}),Object(s.jsx)("div",{className:"flex bg-secondary text-primary md:hidden h-15-per land-h-30-per border-solid border-b-2",children:Object(s.jsx)("p",{className:"text-center text-megrim text-4xl text-unselectable m-auto",children:"POMODORO"})}),Object(s.jsxs)("div",{className:"flex bg-secondary text-primary h-15-per land-h-30-per md-h-20-per",children:[Object(s.jsx)("button",{className:"bg-secondary-hover text-center text-audiowide text-3xl md:text-5xl m-auto w-1/3 h-full",onClick:n,disabled:d,children:"-"}),Object(s.jsx)("div",{className:"border-solid border-l-2 border-r-2 m-auto w-1/3 h-full flex",children:Object(s.jsxs)("div",{className:"text-center text-audiowide text-sm text-unselectable md:text-3xl pt-1 m-auto",children:[c<10?"0"+c:c," :"," ",t<10?"0"+t:t]})}),Object(s.jsx)("button",{className:"bg-secondary-hover text-audiowide text-3xl md:text-5xl text-center m-auto w-1/3 h-full",onClick:r,disabled:d,children:"+"})]}),Object(s.jsx)("button",{className:"flex bg-adjcent bg-adjcent-hover text-secondary h-55-per md-h-60-per",onClick:a,children:Object(s.jsx)("p",{className:"m-auto text-5xl md:text-6xl text-audiowide",children:"START"})}),Object(s.jsxs)("div",{className:"flex bg-secondary text-primary h-15-per land-h-30-per md-h-20-per",children:[Object(s.jsx)("button",{className:"bg-secondary-hover text-center text-audiowide text-xl md:text-2xl w-1/2 md:w-1/2 h-full border-solid border-r-2",onClick:l,children:"STOP"}),Object(s.jsx)("button",{className:"bg-secondary-hover text-center text-audiowide text-xl md:text-2xl w-1/2 md:w-1/2 h-full md:border-solid",onClick:x,children:"RESTART"})]}),Object(s.jsxs)("div",{className:"justify-between mt-2 items-center hidden md:flex",children:[Object(s.jsxs)("div",{className:"flex items-center",children:[Object(s.jsx)("a",{href:"https://github.com/AlexBeje/pomodoro",children:Object(s.jsx)(i.a,{className:"mr-5 text-adjcent-hover"})}),Object(s.jsx)("a",{href:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FiBZQyAA5v9EZBGiQk7zhRI%2Fpomodoro%3Fnode-id%3D0%253A1",children:Object(s.jsx)(o.a,{className:"text-adjcent-hover"})})]}),Object(s.jsx)("a",{href:"https://www.alexbejenaru.dev",children:Object(s.jsxs)("div",{className:"flex items-center text-adjcent-hover",children:[Object(s.jsx)(i.b,{}),"Alexandru Bejenaru"]})})]})]})},b=0,j=0;var h=function(){var e=Object(r.useState)(0),t=Object(l.a)(e,2),c=t[0],n=t[1],d=Object(r.useState)(0),a=Object(l.a)(d,2),i=a[0],o=a[1],h=Object(r.useState)(!1),u=Object(l.a)(h,2),O=u[0],f=u[1],p=function(){x=window.setInterval((function(){n(b-=1),0===b&&0!==j&&(b=60,setTimeout((function(){0!==j&&(j-=1),o(j)}),1e3))}),1e3)};return 0===b&&0===j&&clearInterval(x),Object(s.jsx)("div",{className:"flex h-screen",children:Object(s.jsx)(m,{seconds:c,minutes:i,addTime:function(){o(j+=5)},subsctractTime:function(){0!==j&&j>=5&&o(j-=5)},startTimer:function(){(0!==j&&!O||0!==b&&!O)&&(f(!O),0!==j&&0===b?(b=60,p(),setTimeout((function(){o(j-=1)}),1e3)):p())},startPressed:O,stopTimer:function(){f(!1),clearInterval(x)},resetTimer:function(){f(!1),clearInterval(x),j=0,n(b=0),o(j)}})})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,s=t.getFID,r=t.getFCP,n=t.getLCP,d=t.getTTFB;c(e),s(e),r(e),n(e),d(e)}))};a.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root")),u()}},[[14,1,2]]]);
//# sourceMappingURL=main.ee210f50.chunk.js.map