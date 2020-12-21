(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60797987"],{"09f4":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),Math.easeInOutQuad=function(e,t,a,s){return e/=s/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var s=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function n(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function r(e,t,a){var r=o(),i=e-r,l=20,c=0;t="undefined"===typeof t?500:t;var u=function e(){c+=l;var o=Math.easeInOutQuad(c,r,i,t);n(o),c<t?s(e):a&&"function"===typeof a&&a()};u()}},"1cf5":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"数据源名称"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.datasourceName,callback:function(t){e.$set(e.listQuery,"datasourceName",t)},expression:"listQuery.datasourceName"}}),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.fetchData}},[e._v("\n      搜索\n    ")]),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("\n      添加\n    ")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"数据源分组",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.datasourceGroup)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"数据源名称",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.datasourceName))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"数据源类型",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.type))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"连接参数",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{placement:"bottom",width:"300"},on:{show:function(a){return e.getDatasourceParams(t.row.connectionParams)}}},[a("h5",{domProps:{innerHTML:e._s(e.datasourceParams)}}),e._v(" "),a("el-button",{attrs:{slot:"reference",size:"small"},slot:"reference"},[e._v("查看")])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"备注",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.comments))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"230","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleUpdate(s)}}},[e._v("\n          编辑\n        ")]),e._v(" "),"deleted"!=s.status?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(s)}}},[e._v("\n          删除\n        ")]):e._e()]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.current,limit:e.listQuery.size},on:{"update:page":function(t){return e.$set(e.listQuery,"current",t)},"update:limit":function(t){return e.$set(e.listQuery,"size",t)},pagination:e.fetchData}}),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,width:"800px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"数据源",prop:"type"}},[a("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"数据源"},on:{change:function(t){return e.selectDataSource(e.temp.type)}},model:{value:e.temp.type,callback:function(t){e.$set(e.temp,"type",t)},expression:"temp.type"}},e._l(e.dataSources,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"数据源名称",prop:"datasourceName"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{placeholder:"数据源名称"},model:{value:e.temp.datasourceName,callback:function(t){e.$set(e.temp,"datasourceName",t)},expression:"temp.datasourceName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"数据源分组",prop:"datasourceGroup"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{placeholder:"数据源分组"},model:{value:e.temp.datasourceGroup,callback:function(t){e.$set(e.temp,"datasourceGroup",t)},expression:"temp.datasourceGroup"}})],1),e._v(" "),e.jdbc?a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{placeholder:"用户名"},model:{value:e.temp.connectionParams.user,callback:function(t){e.$set(e.temp.connectionParams,"user",t)},expression:"temp.connectionParams.user"}})],1):e._e(),e._v(" "),e.visible?a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.jdbc,expression:"jdbc"}],attrs:{label:"密码"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{type:"password",placeholder:"密码"},model:{value:e.temp.connectionParams.password,callback:function(t){e.$set(e.temp.connectionParams,"password",t)},expression:"temp.connectionParams.password"}},[a("i",{staticClass:"el-icon-view",staticStyle:{cursor:"pointer"},attrs:{slot:"suffix",title:"显示密码"},on:{click:function(t){return e.changePass("show")}},slot:"suffix"})])],1):a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.jdbc,expression:"jdbc"}],attrs:{label:"密码"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{type:"text",placeholder:"密码"},model:{value:e.temp.connectionParams.password,callback:function(t){e.$set(e.temp.connectionParams,"password",t)},expression:"temp.connectionParams.password"}},[a("i",{staticClass:"el-icon-check",staticStyle:{cursor:"pointer"},attrs:{slot:"suffix",title:"隐藏密码"},on:{click:function(t){return e.changePass("hide")}},slot:"suffix"})])],1),e._v(" "),e.jdbc?a("el-form-item",{attrs:{label:"jdbc url",prop:"jdbcUrl"}},[a("el-input",{staticStyle:{width:"60%"},attrs:{autosize:{minRows:3,maxRows:6},type:"textarea",placeholder:"jdbc url"},model:{value:e.temp.connectionParams.jdbcUrl,callback:function(t){e.$set(e.temp.connectionParams,"jdbcUrl",t)},expression:"temp.connectionParams.jdbcUrl"}})],1):e._e(),e._v(" "),e.mongodb?a("el-form-item",{attrs:{label:"地址",prop:"jdbcUrl"}},[a("el-input",{staticStyle:{width:"60%"},attrs:{autosize:{minRows:3,maxRows:6},type:"textarea",placeholder:"127.0.0.1:27017"},model:{value:e.temp.connectionParams.jdbcUrl,callback:function(t){e.$set(e.temp.connectionParams,"jdbcUrl",t)},expression:"temp.connectionParams.jdbcUrl"}})],1):e._e(),e._v(" "),e.hbase?a("el-form-item",{attrs:{label:"ZK地址",prop:"zkAddress"}},[a("el-input",{staticStyle:{width:"60%"},attrs:{placeholder:"127.0.0.1:2181"},model:{value:e.temp.connectionParams.zkAddress,callback:function(t){e.$set(e.temp.connectionParams,"zkAddress",t)},expression:"temp.connectionParams.zkAddress"}})],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"数据库名称",prop:"database"}},[a("el-input",{staticStyle:{width:"60%"},attrs:{placeholder:"数据库名称"},model:{value:e.temp.connectionParams.database,callback:function(t){e.$set(e.temp.connectionParams,"database",t)},expression:"temp.connectionParams.database"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"注释"}},[a("el-input",{staticStyle:{width:"60%"},attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Please input"},model:{value:e.temp.comments,callback:function(t){e.$set(e.temp,"comments",t)},expression:"temp.comments"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("\n        取消\n      ")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v("\n        确认\n      ")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.testDataSource()}}},[e._v("\n        测试连接\n      ")])],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogPluginVisible,title:"Reading statistics"},on:{"update:visible":function(t){e.dialogPluginVisible=t}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pluginData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"key",label:"Channel"}}),e._v(" "),a("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogPvVisible=!1}}},[e._v("Confirm")])],1)],1)],1)},n=[],o=a("7e39"),r=a("6724"),i=a("333d"),l={name:"JdbcDatasource",components:{Pagination:i["a"]},directives:{waves:r["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]}},data:function(){return{list:null,listLoading:!0,total:0,listQuery:{current:1,size:10},pluginTypeOptions:["reader","writer"],dialogPluginVisible:!1,pluginData:[],dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},rules:{datasourceName:[{required:!0,message:"this is required",trigger:"blur"}],type:[{required:!0,message:"this is required",trigger:"change"}],"connectionParams.user":[{required:!0,message:"this is required",trigger:"blur"}],"connectionParams.password":[{required:!0,message:"this is required",trigger:"blur"}],"connectionParams.jdbcUrl":[{required:!0,message:"this is required",trigger:"blur"}],"connectionParams.zkAddress":[{required:!0,message:"this is required",trigger:"blur"}],"connectionParams.database":[{required:!0,message:"this is required",trigger:"blur"}]},temp:{id:void 0,datasourceName:"",datasourceGroup:"Default",connectionParams:{user:"",password:"",jdbcUrl:"",zkAddress:"",database:""},user:"",password:"",jdbcUrl:"",zkAddress:"",database:"",type:"",comments:""},visible:!0,dataSources:[{value:"MYSQL",label:"MYSQL"},{value:"ORACLE",label:"ORACLE"},{value:"POSTGRESQL",label:"POSTGRESQL"},{value:"GREENPLUM",label:"GREENPLUM"},{value:"SQLSERVER",label:"SQLSERVER"},{value:"HIVE",label:"HIVE"},{value:"CLICKHOUSE",label:"CLICKHOUSE"},{value:"DB2",label:"DB2"},{value:"HBASE",label:"HBASE"},{value:"MONGODB",label:"MONGODB"}],jdbc:!0,hbase:!1,mongodb:!1,datasourceParams:""}},created:function(){this.fetchData()},methods:{selectDataSource:function(e){"MYSQL"===e?this.temp.jdbcUrl="jdbc:mysql://{host}:{port}":"ORACLE"===e?this.temp.jdbcUrl="jdbc:oracle:thin:@//{host}:{port}":"POSTGRESQL"===e||"GREENPLUM"===e?this.temp.jdbcUrl="jdbc:postgresql://{host}:{port}":"SQLSERVER"===e?this.temp.jdbcUrl="jdbc:sqlserver://{host}:{port}":"CLICKHOUSE"===e?this.temp.jdbcUrl="jdbc:clickhouse://{host}:{port}":"HIVE"===e?(this.temp.jdbcUrl="jdbc:hive2://{host}:{port}",this.hbase=this.mongodb=!1,this.jdbc=!0):"DB2"===e&&(this.temp.jdbcUrl="jdbc:db2://{host}[:{port}]"),this.getShowStrategy(e)},fetchData:function(){var e=this;this.listLoading=!0,o["e"](this.listQuery).then((function(t){var a=t.records,s=t.total;e.total=s,e.list=a,e.listLoading=!1}))},resetTemp:function(){this.temp={id:void 0,datasourceName:"",datasourceGroup:"Default",connectionParams:{user:"",password:"",jdbcUrl:"",zkAddress:"",database:""},type:"",comments:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},createData:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&o["a"](e.temp).then((function(){e.fetchData(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})}))}))},testDataSource:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&(e.temp.user=e.temp.connectionParams.user,e.temp.password=e.temp.connectionParams.password,e.temp.jdbcUrl=e.temp.connectionParams.jdbcUrl,e.temp.zkAddress=e.temp.connectionParams.zkAddress,e.temp.database=e.temp.connectionParams.database,o["f"](e.temp).then((function(t){!1===t.data?e.$notify({title:"Fail",message:t.data.msg,type:"fail",duration:2e3}):e.$notify({title:"Success",message:"Tested Successfully",type:"success",duration:2e3})})))}))},handleUpdate:function(e){var t=this;this.getShowStrategy(e.type),this.temp=Object.assign({},e),this.temp.connectionParams=JSON.parse(e.connectionParams),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},updateData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(t){var a=Object.assign({},e.temp);a.user=e.temp.connectionParams.user,a.password=e.temp.connectionParams.password,a.jdbcUrl=e.temp.connectionParams.jdbcUrl,a.zkAddress=e.temp.connectionParams.zkAddress,a.database=e.temp.connectionParams.database,console.log(a),o["g"](a).then((function(){e.fetchData(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})}))}}))},getShowStrategy:function(e){"hbase"===e?(this.jdbc=this.mongodb=!1,this.hbase=!0):"mongodb"===e?(this.jdbc=this.hbase=!1,this.mongodb=!0,this.temp.jdbcUrl="mongodb://[username:password@]host1[:port1][,...hostN[:portN]]][/[database][?options]]"):(this.hbase=this.mongodb=!1,this.jdbc=!0)},handleDelete:function(e){var t=this,a=[];a.push(e.id),o["b"]({idList:e.id}).then((function(e){t.fetchData(),t.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3})}))},handleFetchPv:function(e){var t=this;o["c"](e).then((function(e){t.pluginData=e,t.dialogPvVisible=!0}))},changePass:function(e){this.visible=!("show"===e)},getDatasourceParams:function(e){this.datasourceParams=e}}},c=l,u=a("2877"),d=Object(u["a"])(c,s,n,!1,null,null,null);t["default"]=d.exports},6724:function(e,t,a){"use strict";a("8d41");var s="@@wavesContext";function n(e,t){function a(a){var s=Object.assign({},t.value),n=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},s),o=n.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var r=o.getBoundingClientRect(),i=o.querySelector(".waves-ripple");switch(i?i.className="waves-ripple":(i=document.createElement("span"),i.className="waves-ripple",i.style.height=i.style.width=Math.max(r.width,r.height)+"px",o.appendChild(i)),n.type){case"center":i.style.top=r.height/2-i.offsetHeight/2+"px",i.style.left=r.width/2-i.offsetWidth/2+"px";break;default:i.style.top=(a.pageY-r.top-i.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",i.style.left=(a.pageX-r.left-i.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return i.style.backgroundColor=n.color,i.className="waves-ripple z-active",!1}}return e[s]?e[s].removeHandle=a:e[s]={removeHandle:a},a}var o={bind:function(e,t){e.addEventListener("click",n(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[s].removeHandle,!1),e.addEventListener("click",n(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[s].removeHandle,!1),e[s]=null,delete e[s]}},r=function(e){e.directive("waves",o)};window.Vue&&(window.waves=o,Vue.use(r)),o.install=r;t["a"]=o},"7e39":function(e,t,a){"use strict";a.d(t,"e",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"g",(function(){return r})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return l})),a.d(t,"f",(function(){return c})),a.d(t,"d",(function(){return u}));var s=a("b775");function n(e){return Object(s["a"])({url:"/api/jobJdbcDatasource",method:"get",params:e})}function o(e){return Object(s["a"])({url:"/api/jobJdbcDatasource/"+e,method:"get"})}function r(e){return Object(s["a"])({url:"/api/jobJdbcDatasource/update",method:"put",params:e})}function i(e){return Object(s["a"])({url:"/api/jobJdbcDatasource/create",method:"post",params:e})}function l(e){return Object(s["a"])({url:"/api/jobJdbcDatasource",method:"delete",params:e})}function c(e){return Object(s["a"])({url:"/api/jobJdbcDatasource/test",method:"post",params:e})}function u(e){return Object(s["a"])({url:"/api/jobJdbcDatasource/all",method:"get",params:e})}},"8d41":function(e,t,a){}}]);