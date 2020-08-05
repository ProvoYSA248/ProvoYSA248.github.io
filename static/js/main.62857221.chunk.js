(this["webpackJsonpward-directory"]=this["webpackJsonpward-directory"]||[]).push([[0],{243:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(77),c=t.n(l),o=(t(87),t(9)),m=t(37),u=t.n(m),s=t(78),i=t.n(s),d=t(79),E=t.n(d),v=t(25),p=t.n(v),g=t(26),f=t.n(g);u.a.defaults.baseURL="https://provoysa248-cors.herokuapp.com";var h="docs.google.com/spreadsheets/d/e/2PACX-1vS_qHpeOyUG7VRBPKZsUdcIBvjze0fRonheEYaIib2-ljaCce-YM3og9XQk7o3-w5DMHkTNL0TjX0fh/pub?gid=1483231470&single=true&output=csv",b=function(e,a){return u.a.get(e).then((function(e){i()().fromString(e.data).then(a)})).catch((function(e){return console.log(e)}))},N=function(){return r.a.createElement("p",{className:"pageBreak"})},C=function(e){return r.a.createElement("h1",{className:"title"},e.children)},y=function(e){var a=e.name,t=e.value;return r.a.createElement("div",{className:"entry"},r.a.createElement("div",{className:"entryKeyOrValue"},a),r.a.createElement("div",{className:"entryKeyOrValue"},t))},P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"frontTitle"},"Provo YSA 248th",r.a.createElement("br",null),"Ward Directory",r.a.createElement("br",null),"".concat(function(){var e=(new Date).getMonth();return e<4?"Winter":e<8?"Summer":"Fall"}()," ").concat((new Date).getFullYear())),r.a.createElement("img",{className:"frontImage",src:"Photos/Provo City Center Temple.JPG",alt:"Provo City Center Temple"}),r.a.createElement(N,null))},j=function(e){var a=e.fheGroups,t=e.fheGroupApartments;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null,"FHE Groups"),r.a.createElement("div",{className:"fheGroupsGrid"},a.map((function(e){return r.a.createElement("div",null,r.a.createElement("h2",{className:"subtitle"},"Group ".concat(e.Number)),r.a.createElement("div",{className:"subtitleNote"},"".concat(e["Female Group Leader"]," & ").concat(e["Male Group Leader"])),r.a.createElement("div",{className:"centeredEntry"},t[e.Number].map((function(e){return e.Number})).join(" & ")))}))),r.a.createElement(N,null))},S=function(e){var a=e.number,t=e.members;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Apartment ".concat(a)),r.a.createElement("div",{className:"grid"},t.map((function(e){return r.a.createElement("div",{className:"gridItem"},r.a.createElement("div",{className:"gridItemColumn"},r.a.createElement("img",{className:"memberImage",src:e["Photo URL"],alt:e["Photo URL"]}),r.a.createElement("div",null,e.Name),r.a.createElement("div",null,e["Phone Number"])))}))),r.a.createElement(N,null))},R=function(e){var a=e.leader;return r.a.createElement("div",{className:"gridItemColumn"},r.a.createElement("img",{className:"memberImage",src:a["Couple's Photo URL"],alt:a["Couple's Photo URL"]}),r.a.createElement("div",{style:{fontWeight:"bold"}},a.Calling),r.a.createElement("div",null,a["Couple's Name"]),r.a.createElement("div",null,a["Address 1"]),r.a.createElement("div",null,a["Address 2"]),r.a.createElement("div",null,a["Phone Number"]),r.a.createElement("div",null,a.Email),r.a.createElement("div",null,a["Spouse Phone Number"]))},G=function(e){var a=p()(e.leaders,"Calling");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"leaderColumn"},r.a.createElement("div",{className:"leaderRow"},r.a.createElement(R,{leader:a.Bishop[0]})),r.a.createElement("div",{className:"leaderRow"},r.a.createElement(R,{leader:a["1st Counselor"][0]}),r.a.createElement(R,{leader:a["2nd Counselor"][0]}))),r.a.createElement(N,null),r.a.createElement("div",{className:"leaderColumn"},r.a.createElement("div",{className:"leaderRow"},r.a.createElement(R,{leader:a["Ward Clerk"][0]})),r.a.createElement("div",{className:"leaderRow"},r.a.createElement(R,{leader:a["High Counselor"][0]}))))},w=function(e){var a=e.callings,t=e.members.find((function(e){var t;return e.Name===(null===(t=a.find((function(e){return"Executive Secretary"===e["Calling(s)"]})))||void 0===t?void 0:t.Member)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null,"Some Callings to Know"),a.filter((function(e){return"Executive Secretary"!==e["Calling(s)"]})).map((function(e){return r.a.createElement(y,{name:e["Calling(s)"],value:[e.Member,e["2nd Member"]].filter((function(e){return e})).join(" & ")})})),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("h1",{style:{fontSize:"35px",fontStyle:"italic"}},"For an appointment with the Bishop",r.a.createElement("br",null),"Please contact:"),r.a.createElement(y,{name:"Executive Secretary",value:"".concat(t.Name," ~ ").concat(t["Phone Number"])})),r.a.createElement(N,null))};var I=function(){var e=r.a.useState(),a=Object(o.a)(e,2),t=a[0],n=a[1],l=r.a.useState(),c=Object(o.a)(l,2),m=c[0],u=c[1],s=r.a.useState(),i=Object(o.a)(s,2),d=i[0],v=i[1],g=r.a.useState(),N=Object(o.a)(g,2),C=N[0],y=N[1],R=r.a.useState(),I=Object(o.a)(R,2),k=I[0],M=I[1];if(r.a.useEffect((function(){b("docs.google.com/spreadsheets/d/e/2PACX-1vS_qHpeOyUG7VRBPKZsUdcIBvjze0fRonheEYaIib2-ljaCce-YM3og9XQk7o3-w5DMHkTNL0TjX0fh/pub?gid=1847684935&single=true&output=csv",n),b("docs.google.com/spreadsheets/d/e/2PACX-1vS_qHpeOyUG7VRBPKZsUdcIBvjze0fRonheEYaIib2-ljaCce-YM3og9XQk7o3-w5DMHkTNL0TjX0fh/pub?gid=1341874055&single=true&output=csv",u),b(h,v),b("docs.google.com/spreadsheets/d/e/2PACX-1vS_qHpeOyUG7VRBPKZsUdcIBvjze0fRonheEYaIib2-ljaCce-YM3og9XQk7o3-w5DMHkTNL0TjX0fh/pub?gid=827977769&single=true&output=csv",y),b("docs.google.com/spreadsheets/d/e/2PACX-1vS_qHpeOyUG7VRBPKZsUdcIBvjze0fRonheEYaIib2-ljaCce-YM3og9XQk7o3-w5DMHkTNL0TjX0fh/pub?gid=708295423&single=true&output=csv",M)}),[]),void 0===t||void 0===m||void 0===C||void 0===k)return r.a.createElement(E.a,{loading:!0,bgColor:"#f1f1f1",spinnerColor:"#9ee5f8",textColor:"#676767",text:"Loading..."});var U=f()(t,"Occupants' Gender","Number"),X=p()(k,"Apartment"),B=f()(d,"Number"),H=p()(f()(t,"Number"),"FHE Group");return r.a.createElement("main",null,r.a.createElement(P,null),r.a.createElement(j,{fheGroups:B,fheGroupApartments:H}),U.map((function(e){var a;return r.a.createElement(S,{key:e.Number,number:e.Number,members:null!==(a=X[e.Number])&&void 0!==a?a:[]})})),r.a.createElement(G,{leaders:C}),r.a.createElement(w,{callings:m,members:k}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root"))},82:function(e,a,t){e.exports=t(243)},87:function(e,a,t){}},[[82,1,2]]]);
//# sourceMappingURL=main.62857221.chunk.js.map