webpackJsonp([5],{wHgX:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("uj17"),i=n.n(a),o={data:function(){return{data:""}},methods:{get_info:function(){var t="https://localhost:5000/api/info/"+this.data;i.a.get(t).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}},created:function(){this.data=this.$route.params.data,this.get_info()}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v(this._s(this.data))])])},staticRenderFns:[]},c=n("VU/8")(o,s,!1,null,null,null);e.default=c.exports}});
//# sourceMappingURL=5.6ca56858510a5d1e82db.js.map