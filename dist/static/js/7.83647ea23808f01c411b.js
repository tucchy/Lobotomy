webpackJsonp([7],{NINz:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("uj17"),n=a.n(i),s={data:function(){return{sephirah_list:[]}},methods:{get_sephirah:function(){var e=this;n.a.get("https://lobotomyinfostorehouse.herokuapp.com/api/get/sephirah").then(function(t){e.sephirah_list=t.data}).catch(function(e){console.log(e)})}},created:function(){this.get_sephirah()}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"panel"},e._l(e.sephirah_list,function(t){return a("li",{key:t.id},[a("router-link",{attrs:{to:{name:"Detail_Sephirah",params:{data:t.Ename}}}},[a("div",{staticClass:"panel"},[a("div",{staticClass:"img-frame"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"../../static/sephirah/"+t.name+".png",expression:"'../../static/sephirah/'+ s.name +'.png'"}]})]),e._v(" "),a("p",[e._v(e._s(t.name))])])])],1)}))},staticRenderFns:[]};var h=a("VU/8")(s,r,!1,function(e){a("khDF")},"data-v-4768fd78",null);t.default=h.exports},khDF:function(e,t){}});
//# sourceMappingURL=7.83647ea23808f01c411b.js.map