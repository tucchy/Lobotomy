webpackJsonp([2,8],{"3uHN":function(t,a){},HoM9:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={components:{TabItem:e("W9fN").default},data:function(){return{}},computed:{},props:{target:String}},o={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tab-wrapper"},[a("p",[this._v("タブアイテム")]),this._v(" "),a("TabItem"),this._v(" "),a("TabItem")],1)},staticRenderFns:[]};var r=e("VU/8")(n,o,!1,function(t){e("3uHN")},"data-v-07e265e2",null);a.default=r.exports},rB3W:function(t,a){},wyuM:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("uj17"),o=e.n(n),r={components:{DetailTab:e("HoM9").default},data:function(){return{data:{}}},methods:{get_info:function(){var t=this,a="https://lobotomyinfostorehouse.herokuapp.com/api/info/sephirah/"+this.data;o.a.get(a).then(function(a){console.log(a),t.data=a.data,console.log(t.data)}).catch(function(t){console.log(t)})}},created:function(){this.data=this.$route.params.data,console.log(this.data),this.get_info()}},s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",[e("div",{},[e("header",[e("router-link",{attrs:{to:"/sephirah"}},[t._v("\r\n        セフィラ一覧へ\r\n      ")])],1),t._v(" "),e("img",{attrs:{src:"../../static/sephirah/"+t.data.name+".png"}}),t._v(" "),e("p",[t._v(t._s(t.data.name))]),t._v(" "),e("p",[t._v(t._s(t.data.Ename))]),t._v(" "),e("p",[t._v(t._s(t.data.serif))]),t._v(" "),e("p",[t._v(t._s(t.data.intro))]),t._v(" "),e("p",[t._v(t._s(t.data.personality))]),t._v(" "),e("p",[t._v(t._s(t.data.story))]),t._v(" "),e("DetailTab")],1)])},staticRenderFns:[]};var i=e("VU/8")(r,s,!1,function(t){e("rB3W")},"data-v-aff1b40c",null);a.default=i.exports}});
//# sourceMappingURL=2.56da80b42aa257d543ba.js.map