(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b612290"],{"8f42":function(t,e,a){"use strict";var s=a("f750"),r=a.n(s);r.a},c3bc:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"justify-center"},[a("v-col",{staticClass:"display-1 text-center primary--text",attrs:{cols:"12"}},[a("p",{staticClass:"primary--text display-1 text-center"},[t._v(" Successfully Authorized ")]),a("div",{staticClass:"text-center"},[a("v-icon",{attrs:{large:"",color:"primary"}},[t._v(" fas fa-check ")])],1)]),a("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[a("v-progress-linear",{attrs:{color:"primary",indeterminate:"",rounded:"",height:"6"}})],1)],1)],1)},r=[],i=(a("ac1f"),a("1276"),a("5530")),c=a("2f62"),n={methods:Object(i["a"])({},Object(c["b"])("TheAuth",{apiCall:"apiCall"}),{getQuery:function(){if(this.$route.hash){for(var t=this.$route.hash.substr(1).split("&"),e={},a=0;a<t.length;a++){var s=t[a].split("=");e[s[0]]=s[1]}localStorage.setItem("access_token",e.access_token);var r=Date.now()+1e3*e.expires_in;localStorage.setItem("expired_date",r),this.apiCall()}else this.$router.push("/login")}}),mounted:function(){this.getQuery()}},o=n,l=(a("8f42"),a("2877")),u=a("6544"),p=a.n(u),f=a("62ad"),h=a("a523"),d=a("132d"),v=a("8e36"),m=a("0fd9"),g=Object(l["a"])(o,s,r,!1,null,null,null);e["default"]=g.exports;p()(g,{VCol:f["a"],VContainer:h["a"],VIcon:d["a"],VProgressLinear:v["a"],VRow:m["a"]})},f750:function(t,e,a){}}]);
//# sourceMappingURL=chunk-8b612290.35208f49.js.map