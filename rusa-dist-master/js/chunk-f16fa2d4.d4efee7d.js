(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f16fa2d4"],{"0137":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"courses"},[s("Navbar"),s("section",{staticClass:"section"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns is-multiline"},t._l(t.centre,(function(e,a){return s("div",{key:a,staticClass:"column is-full mt-6"},[e.course[0]?s("div",{staticClass:"title is-2 has-text-centered"},[t._v(" "+t._s(e.name)+" ")]):t._e(),s("div",{staticClass:"columns is-multiline mt-4"},t._l(e.course,(function(a,n){return s("div",{key:n,staticClass:"column is-4"},[s("article",{staticClass:"message"},[s("div",{staticClass:"message-header"},[s("p",[t._v(" "+t._s(a.name)+" ")])]),s("div",{staticClass:"message-body"},[t._v(" "+t._s(a.about)+" "),s("br")]),s("router-link",{staticClass:"button is-dark is-outlined m-3",attrs:{to:{name:"subprogram",params:{id:e.id,subid:a.id,program:a.program}}}},[t._v(" Know more ")])],1)])})),0)])})),0)])]),s("Footer")],1)},n=[],r=(s("ac6a"),s("96cf"),s("3b8d")),i=s("d178"),c=s("fd2d"),o={name:"courses",data:function(){return{id:null,subid:null,fetchCourses:!1,centre:[],course:[]}},components:{Navbar:i["a"],Footer:c["a"]},created:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,s,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.$store.state.api);case 2:return e=t.sent,t.next=5,e.json();case 5:s=t.sent,s.forEach((function(t){a.centre.push({id:t.id,name:t.program}),a.centre[t.id-1].course=[],void 0!=t.subprogram&&t.subprogram.forEach((function(e){a.centre[t.id-1].course.push({id:e.id,name:e.program,about:e.about})}))}));case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{},computed:{}},u=o,l=(s("e84e"),s("2877")),d=Object(l["a"])(u,a,n,!1,null,null,null);e["default"]=d.exports},adf9:function(t,e,s){},e84e:function(t,e,s){"use strict";s("adf9")}}]);
//# sourceMappingURL=chunk-f16fa2d4.d4efee7d.js.map