webpackJsonp([2],{"5zde":function(e,t,l){l("zQR9"),l("qyJz"),e.exports=l("FeBl").Array.from},Gu7T:function(e,t,l){"use strict";t.__esModule=!0;var o,a=l("c/Tr"),n=(o=a)&&o.__esModule?o:{default:o};t.default=function(e){if(Array.isArray(e)){for(var t=0,l=Array(e.length);t<e.length;t++)l[t]=e[t];return l}return(0,n.default)(e)}},"OQ3+":function(e,t){},"c/Tr":function(e,t,l){e.exports={default:l("5zde"),__esModule:!0}},fBQ2:function(e,t,l){"use strict";var o=l("evD5"),a=l("X8DO");e.exports=function(e,t,l){t in e?o.f(e,t,a(0,l)):e[t]=l}},qyJz:function(e,t,l){"use strict";var o=l("+ZMJ"),a=l("kM2E"),n=l("sB3e"),i=l("msXi"),s=l("Mhyx"),r=l("QRG4"),c=l("fBQ2"),u=l("3fs2");a(a.S+a.F*!l("dY0y")(function(e){Array.from(e)}),"Array",{from:function(e){var t,l,a,d,f=n(e),h="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,b=void 0!==v,m=0,g=u(f);if(b&&(v=o(v,p>2?arguments[2]:void 0,2)),void 0==g||h==Array&&s(g))for(l=new h(t=r(f.length));t>m;m++)c(l,m,b?v(f[m],m):f[m]);else for(d=g.call(f),l=new h;!(a=d.next()).done;m++)c(l,m,b?i(d,v,[a.value,m],!0):a.value);return l.length=m,l}})},yqKr:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=l("kMct"),a=l("EMXe"),n=l("Q338"),i=l("DoGJ"),s=l("Gu7T"),r=l.n(s),c={name:"ElForm",componentName:"ElForm",provide:function(){return{elForm:this}},props:{model:Object,rules:Object,labelPosition:String,labelWidth:String,labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},size:String,disabled:Boolean,validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:{type:Boolean,default:!1}},watch:{rules:function(){this.fields.forEach(function(e){e.removeValidateEvents(),e.addValidateEvents()}),this.validateOnRuleChange&&this.validate(function(){})}},computed:{autoLabelWidth:function(){if(!this.potentialLabelWidthArr.length)return 0;var e=Math.max.apply(Math,r()(this.potentialLabelWidthArr));return e?e+"px":""}},data:function(){return{fields:[],potentialLabelWidthArr:[]}},created:function(){var e=this;this.$on("el.form.addField",function(t){t&&e.fields.push(t)}),this.$on("el.form.removeField",function(t){t.prop&&e.fields.splice(e.fields.indexOf(t),1)})},methods:{resetFields:function(){this.model?this.fields.forEach(function(e){e.resetField()}):console.warn("[Element Warn][Form]model is required for resetFields to work.")},clearValidate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];(e.length?"string"==typeof e?this.fields.filter(function(t){return e===t.prop}):this.fields.filter(function(t){return e.indexOf(t.prop)>-1}):this.fields).forEach(function(e){e.clearValidate()})},validate:function(e){var t=this;if(this.model){var l=void 0;"function"!=typeof e&&window.Promise&&(l=new window.Promise(function(t,l){e=function(e){e?t(e):l(e)}}));var o=!0,a=0;0===this.fields.length&&e&&e(!0);var n={};return this.fields.forEach(function(l){l.validate("",function(l,i){l&&(o=!1),n=function(e){for(let t=1,l=arguments.length;t<l;t++){let l=arguments[t]||{};for(let t in l)if(l.hasOwnProperty(t)){let o=l[t];void 0!==o&&(e[t]=o)}}return e}({},n,i),"function"==typeof e&&++a===t.fields.length&&e(o,n)})}),l||void 0}console.warn("[Element Warn][Form]model is required for validate to work!")},validateField:function(e,t){e=[].concat(e);var l=this.fields.filter(function(t){return-1!==e.indexOf(t.prop)});l.length?l.forEach(function(e){e.validate("",t)}):console.warn("[Element Warn]please pass correct props!")},getLabelWidthIndex:function(e){var t=this.potentialLabelWidthArr.indexOf(e);if(-1===t)throw new Error("[ElementForm]unpected width ",e);return t},registerLabelWidth:function(e,t){if(e&&t){var l=this.getLabelWidthIndex(t);this.potentialLabelWidthArr.splice(l,1,e)}else e&&this.potentialLabelWidthArr.push(e)},deregisterLabelWidth:function(e){var t=this.getLabelWidthIndex(e);this.potentialLabelWidthArr.splice(t,1)}}},u={render:function(){var e=this.$createElement;return(this._self._c||e)("form",{staticClass:"el-form",class:[this.labelPosition?"el-form--label-"+this.labelPosition:"",{"el-form--inline":this.inline}]},[this._t("default")],2)},staticRenderFns:[]},d={components:{ElForm:l("VU/8")(c,u,!1,null,null,null).exports,ElRow:i.a,ElButton:a.a,ElCol:o.a,tabHeader:n.a},name:"createPlan",data:function(){return{activeName:"first",tabPosition:"left",accountValue:"",roleValue:"",accountOptions:[],roleOptions:[{value:"1",label:"test1"},{value:"2",label:"test2"},{value:"3",label:"test3"},{value:"4",label:"test4"},{value:"5",label:"test5"}],roleCheckOptions:[{id:"1",label:"患者管理",checkd:!0},{id:"2",label:"待办事项",checkd:!0},{id:"3",label:"统计分析",checkd:!0},{id:"4",label:"权限管理",checkd:!0}],checkList:[],showCard:!1,chooseUserId:null,chooseRoleId:null}},created:function(){this.getRoleList(),this.getAccountList()},mounted:function(){},methods:{handleClick:function(e,t){console.log(e,t)},getAccountList:function(){var e=this;e.$http.get("/api/doctor/getDoctorList").then(function(t){e.accountOptions=t.data.list,console.log(t)}).catch(function(e){console.log(e)})},getRoleList:function(){var e=this;e.$http.get("/api/user/getRolesByUserId?userId="+e.$store.state.user.user.id).then(function(t){e.roleOptions=t.data}).catch(function(e){console.log(e)})},chooseUser:function(e){this.chooseUserId=e},chooseRole:function(e){this.showCard=!0,this.roleCheckOptions=e[0],this.chooseRoleId=e[1]},submitAuth:function(){var e=this;null!=e.chooseUserId?null!=e.chooseRoleId?e.$http.post("/api/user/userAssignmentRoles",{userId:e.chooseUserId,roleIds:""+e.chooseRoleId}).then(function(t){t.data?e.$message.success("操作成功！"):e.$message.error("操作失败！")}).catch(function(e){console.log(e)}):e.$message.error("您未选择角色"):e.$message.error("您未选择账户")}}},f={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"aM_container"},[l("h2",[e._v("账号权限管理")]),e._v(" "),l("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[l("el-tab-pane",{attrs:{label:"员工角色分配",name:"first"}},[l("el-tabs",{attrs:{"tab-position":e.tabPosition}},[l("el-tab-pane",{staticClass:"aM_content",attrs:{label:"管理员"}},[l("el-row",[l("el-col",{attrs:{span:24}},[l("h2",{staticStyle:{"font-size":"26px"}},[e._v("管理员")])])],1),e._v(" "),l("el-row",[l("el-card",{staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",{staticClass:"aM_CardTitle"},[e._v("分配角色")]),e._v(" "),l("el-button",{staticClass:"f-right",attrs:{type:"success",round:""},on:{click:e.submitAuth}},[e._v("提交")])],1),e._v(" "),l("div",[l("el-form",[l("el-row",[l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"选择账户 : "}},[l("el-select",{attrs:{filterable:"",placeholder:"请选择账户"},on:{change:e.chooseUser},model:{value:e.accountValue,callback:function(t){e.accountValue=t},expression:"accountValue"}},e._l(e.accountOptions,function(e){return l("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"选择用户 : "}},[l("el-select",{attrs:{filterable:"",placeholder:"请选择用户"},on:{change:e.chooseRole},model:{value:e.roleValue,callback:function(t){e.roleValue=t},expression:"roleValue"}},e._l(e.roleOptions,function(e){return l("el-option",{key:e.roleId,attrs:{ruleKey:e.roleKey,label:e.roleName,value:[e.menus,e.roleId]}})}),1)],1)],1)],1)],1)],1)]),e._v(" "),e.showCard?l("el-card",{staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",{staticClass:"aM_CardTitle"},[e._v("权限设置")])]),e._v(" "),l("div",[l("div",{staticStyle:{margin:"15px 0"}}),e._v(" "),l("el-checkbox-group",{model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},e._l(e.roleCheckOptions,function(t){return l("el-checkbox",{key:t.id,attrs:{border:"",label:t.label,value:t.id,checked:!0,disabled:""}},[e._v(e._s(t.label))])}),1)],1)]):e._e()],1)],1),e._v(" "),l("el-tab-pane",{attrs:{label:"医院管理者"}},[l("h2",[e._v("暂无数据")])])],1)],1)],1)],1)},staticRenderFns:[]};var h=l("VU/8")(d,f,!1,function(e){l("OQ3+")},"data-v-2cc17412",null);t.default=h.exports}});