webpackJsonp([4],{pYAa:function(t,a){},wHgX:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("uj17"),i=e.n(n),o={data:function(){return{data:{}}},methods:{get_info:function(){var t=this,a="https://lobotomyinfostorehouse.herokuapp.com/api/info/"+this.data;i.a.get(a).then(function(a){console.log(a),t.data=a.data}).catch(function(t){console.log(t)})}},created:function(){this.data=this.$route.params.data,this.get_info()}},s={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{},[a("img",{attrs:{src:"../../static/sephirah/"+this.data.name+".png"}}),this._v(" "),a("p",[this._v(this._s(this.data.name))])])},staticRenderFns:[]};var c=e("VU/8")(o,s,!1,function(t){e("pYAa")},"data-v-78cd6af4",null);a.default=c.exports}});
//# sourceMappingURL=4.c2855056b996fb87d6e0.js.map