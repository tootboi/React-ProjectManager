(this.webpackJsonpprojectmanager=this.webpackJsonpprojectmanager||[]).push([[0],{27:function(e,t,a){e.exports=a(55)},32:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(7),i=a.n(c),d=(a(32),a(2)),u=a(5),o=a(1),s=a(8),l=a(57),f=function(e,t){switch(t.type){case"ADD_PROJECT":return[].concat(Object(s.a)(e),[{title:t.title,tasks:{},features:{},featureOrder:[],featuresDone:0,doneFeatures:[],id:Object(l.a)()}]);case"DELETE_PROJECT":return e.filter((function(e){return e.id!==t.id}));case"EDIT_PROJECT":return e.map((function(e){return e.id===t.editProject.id?{title:t.editProject.title,tasks:e.tasks,features:e.features,featureOrder:e.featureOrder,featuresDone:e.featuresDone,doneFeatures:e.doneFeatures,id:e.id}:e}));case"ADD_FEATURE":var a=Object(l.a)();return e.map((function(e){return e.id===t.addFeature.projectId?{title:e.title,tasks:e.tasks,features:Object(o.a)(Object(o.a)({},e.features),{},Object(u.a)({},a,{id:a,title:t.addFeature.featureTitle,taskIds:[],tasksDone:0,doneTasks:[]})),featureOrder:[].concat(Object(s.a)(e.featureOrder),[a]),featuresDone:e.featuresDone,doneFeatures:e.doneFeatures,id:e.id}:e}));case"DELETE_FEATURE":return e.map((function(e){return e.id===t.deleteFeature.projectId?(delete e.features[t.deleteFeature.featureId],{title:e.title,tasks:e.tasks,features:e.features,featureOrder:e.featureOrder.filter((function(e){return e!==t.deleteFeature.featureId})),featuresDone:e.featuresDone,doneFeatures:e.doneFeatures,id:e.id}):e}));case"EDIT_FEATURE":return e.map((function(e){return e.id===t.editFeature.projectId?(e.features[t.editFeature.featureId].title=t.editFeature.featureTitle,e):e}));case"REORDER_FEATURE":return e.map((function(e){return e.id===t.reorder.projectId?Object(o.a)(Object(o.a)({},e),{},{featureOrder:t.reorder.newFeatureOrder}):e}));case"INCREMENT_DONE":return e.map((function(e){return e.id===t.ids.projectId?{title:e.title,tasks:e.tasks,features:e.features,featureOrder:e.featureOrder,featuresDone:e.featuresDone+1,doneFeatures:[].concat(Object(s.a)(e.doneFeatures),[t.ids.featureId]),id:e.id}:e}));case"DECREMENT_DONE":return e.map((function(e){return e.id===t.ids.projectId?{title:e.title,tasks:e.tasks,features:e.features,featureOrder:e.featureOrder,featuresDone:e.featuresDone-1,doneFeatures:e.doneFeatures.filter((function(e){return e!==t.ids.featureId})),id:e.id}:e}));case"ADD_TASK":var r=Object(l.a)();return e.map((function(e){return e.id===t.addTask.projectId?(e.features[t.addTask.featureId].taskIds.push(r),e.tasks[r]={id:r,content:t.addTask.task},e):e}));case"DELETE_TASK":return e.map((function(e){if(e.id===t.ids.projectId){delete e.tasks[t.ids.taskId];var a=e.features[t.ids.featureId].taskIds.indexOf(t.ids.taskId);return a>-1&&e.features[t.ids.featureId].taskIds.splice(a,1),e}return e}));case"EDIT_TASK":return e.map((function(e){return e.id===t.editTask.projectId?(e.tasks[t.editTask.taskId].content=t.editTask.taskContent,e):e}));case"REORDER_TASK":return e.map((function(e){if(e.id===t.reorder.projectId){var a=Object(o.a)(Object(o.a)({},e.features[t.reorder.featureId]),{},{taskIds:t.reorder.newTaskIds});return Object(o.a)(Object(o.a)({},e),{},{features:Object(o.a)(Object(o.a)({},e.features),{},Object(u.a)({},a.id,a))})}return e}));default:return e}},m=Object(r.createContext)(),p=function(e){var t=[{title:"test project",tasks:{"unique1-1":{id:"unique1-1",content:"Test1"},"unique1-2":{id:"unique1-2",content:"Test2"},"unique1-3":{id:"unique1-3",content:"Test3"},"unique1-4":{id:"unique1-4",content:"Test4"}},features:{unique1:{id:"unique1",title:"test feature",taskIds:["unique1-1","unique1-2"],tasksDone:0,doneTasks:[]},unique2:{id:"unique2",title:"test feature2",taskIds:["unique1-3","unique1-4"],tasksDone:0,doneTasks:[]}},featureOrder:["unique1","unique2"],featuresDone:0,doneFeatures:[],id:"unique0"}],a=Object(r.useReducer)(f,[],(function(){var e=localStorage.getItem("projects");return e?JSON.parse(e):t})),c=Object(d.a)(a,2),i=c[0],u=c[1];return Object(r.useEffect)((function(){localStorage.setItem("projects",JSON.stringify(i))}),[i]),n.a.createElement(m.Provider,{value:{projects:i,dispatch:u}},e.children)},E=a(3),j=a(25),v=a.n(j),b=function(e){var t=e.task,a=e.index,c=e.feature,i=e.project,u=Object(r.useContext)(m).dispatch,o=Object(r.useState)(t.content),s=Object(d.a)(o,2),l=s[0],f=s[1],p=function(e,a){f(a),u({type:"EDIT_TASK",editTask:{projectId:i.id,taskId:t.id,taskContent:a}})},j=function(e){u({type:"DELETE_TASK",ids:{projectId:i.id,featureId:c.id,taskId:t.id}})};return n.a.createElement(E.b,{draggableId:t.id,index:a},(function(e){return n.a.createElement("div",Object.assign({className:"tasks",ref:e.innerRef},e.draggableProps,e.dragHandleProps),n.a.createElement("span",{className:"dot"}),n.a.createElement(v.a,{html:l,className:"taskText",onChange:p,contentEditable:"plaintext-only"}),n.a.createElement("span",{className:"deleteBtn",onClick:j},"\xd7"))}))},O=function(e){var t=e.feature,a=e.project,c=Object(r.useContext)(m).dispatch,i=Object(r.useState)(""),u=Object(d.a)(i,2),o=u[0],s=u[1];return n.a.createElement("div",{className:"taskForm"},n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c({type:"ADD_TASK",addTask:{featureId:t.id,projectId:a.id,task:o}}),s("")}},n.a.createElement("input",{type:"text",placeholder:"Add a task",onChange:function(e){return s(e.target.value)},value:o,required:!0})))},y=function(e){var t=e.feature,a=e.project,c=Object(r.useContext)(m).dispatch,i=Object(r.useState)(t.title),u=Object(d.a)(i,2),o=u[0],s=u[1],l=Object(r.useState)(a.doneFeatures.includes(t.id)),f=Object(d.a)(l,2),p=f[0],E=f[1],j=function(e){document.getElementById("featureOverlay"+t.id).style.display="none"};return n.a.createElement("div",{className:"overlay",style:{opacity:"1"},onKeyDown:function(e){27===e.keyCode&&j()}},n.a.createElement("div",{className:"closeBtn",onClick:j},"\u2297"),n.a.createElement("form",{className:"finishBtn",action:"",onSubmit:function(e){e.preventDefault(),E(!p),document.getElementById(t.id).classList.toggle("done"),document.getElementById(t.id).children[0].children[3].children[0].classList.toggle("done"),c(p?{type:"DECREMENT_DONE",ids:{projectId:a.id,featureId:t.id}}:{type:"INCREMENT_DONE",ids:{projectId:a.id,featureId:t.id}}),j()}},n.a.createElement("input",{type:"submit",value:p?"actually, not finished":"finished",style:p?{backgroundColor:"transparent",color:"#5bbdc0",width:"100%"}:{width:"100%"}})),n.a.createElement("textarea",{name:"featureArea",id:"",cols:"30",rows:"10",value:o,onChange:function(e){return s(e.target.value)},required:!0,style:{marginTop:"3%",fontSize:"1em"}}),n.a.createElement("div",{className:"BtnContainer"},n.a.createElement("form",{action:"",onSubmit:function(e){e.preventDefault(),c({type:"DELETE_FEATURE",deleteFeature:{projectId:a.id,featureId:t.id}}),p&&c({type:"DECREMENT_DONE",ids:{projectId:a.id,featureId:t.id}})}},n.a.createElement("input",{type:"submit",value:"delete feature",style:{backgroundColor:"#f8f8f8",color:"#74bcaf"}})),n.a.createElement("form",{action:"",onSubmit:function(e){e.preventDefault(),c({type:"EDIT_FEATURE",editFeature:{featureTitle:o,featureId:t.id,projectId:a.id}}),j()}},n.a.createElement("input",{type:"submit",value:"edit feature"}))))},k=function(e){var t=e.feature,a=e.project,r=e.index,c=function(){return a.doneFeatures.includes(t.id)?" done":""},i=function(e){document.getElementById("featureOverlay"+t.id).style.display="block";var a=document.getElementById("featureOverlay"+t.id).children[0].children[2];a.value="",a.value=t.title,a.focus()};return n.a.createElement(E.b,{draggableId:t.id,index:r},(function(e){return n.a.createElement("div",Object.assign({className:"featureContainer"+c(),id:t.id},e.draggableProps,{ref:e.innerRef}),n.a.createElement("div",{className:"featureWrap"},n.a.createElement("div",{className:"overlayContainer"},n.a.createElement("div",{id:"featureOverlay"+t.id},n.a.createElement(y,{feature:a.features[t.id],project:a}))),n.a.createElement("div",Object.assign({className:"featureTitle",onClick:i},e.dragHandleProps,{type:"task"}),t.title),n.a.createElement("hr",null),n.a.createElement("div",{className:"taskContainer",id:"task"+t.id},n.a.createElement("div",{className:"taskWrap"+c()},n.a.createElement(E.c,{droppableId:t.id},(function(e){return n.a.createElement("div",Object.assign({ref:e.innerRef},e.droppableProps),t.taskIds.map((function(e,r){return n.a.createElement(b,{key:e,feature:t,project:a,task:a.tasks[e],index:r})})),e.placeholder)}))),n.a.createElement(O,{feature:t,project:a}))))}))},I=function(e){var t=e.project,a=Object(r.useContext)(m).dispatch,c=Object(r.useState)(""),i=Object(d.a)(c,2),u=i[0],o=i[1],s=function(e){document.getElementById("featureForm"+t.id).style.display="none"};return n.a.createElement("div",{className:"overlay",onKeyDown:function(e){27===e.keyCode&&s()}},n.a.createElement("div",{className:"closeBtn",onClick:s},"\u2297"),n.a.createElement("div",{className:"projectTitle"},t.title),n.a.createElement("form",{action:"",onSubmit:function(e){e.preventDefault(),a({type:"ADD_FEATURE",addFeature:{featureTitle:u,projectId:t.id}}),o("")}},n.a.createElement("input",{type:"text",value:u,onChange:function(e){return o(e.target.value)},required:!0}),n.a.createElement("div",{className:"BtnContainer",style:{margin:0}},n.a.createElement("input",{type:"submit",value:"add a feature"}))))},g=function(e){var t=e.project,a=Object(r.useContext)(m).dispatch,c=Object(r.useState)(t.title),i=Object(d.a)(c,2),u=i[0],o=i[1],s=function(e){document.getElementById("projectOverlay"+t.id).style.display="none"};return n.a.createElement("div",{className:"overlay",onKeyDown:function(e){27===e.keyCode&&s()}},n.a.createElement("div",{className:"closeBtn",onClick:s},"\u2297"),n.a.createElement("input",{type:"text",className:"projectTitle",value:u,onChange:function(e){return o(e.target.value)},required:!0,style:{marginTop:"3.6%",fontSize:"2em",textAlign:"center",color:"#37bfd9",WebkitTextFillColor:"transparent",WebkitTextStroke:".04em #37bfd9"}}),n.a.createElement("div",{className:"BtnContainer"},n.a.createElement("form",{action:"",onSubmit:function(e){e.preventDefault(),a({type:"DELETE_PROJECT",id:t.id})}},n.a.createElement("input",{type:"submit",value:"delete project",style:{backgroundColor:"transparent",color:"#5bbdc0"}})),n.a.createElement("form",{action:"",onSubmit:function(e){e.preventDefault(),a({type:"EDIT_PROJECT",editProject:{title:u,id:t.id}}),s()},style:{position:"relative"}},n.a.createElement("input",{type:"submit",value:"edit"}))))},T=function(e){var t=e.project,a=Object(r.useContext)(m).dispatch,c=Object(r.useState)(t),i=Object(d.a)(c,2),l=(i[0],i[1]);return n.a.createElement("div",{className:"projectDetail",id:"projectDetail"+t.id},n.a.createElement("div",{className:"overlayContainer"},n.a.createElement("div",{id:"featureForm"+t.id},n.a.createElement(I,{project:t})),n.a.createElement("div",{id:"projectOverlay"+t.id},n.a.createElement(g,{project:t}))),n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"projectContainer"},n.a.createElement("div",{className:"featureCounter",onClick:function(e){t.featureOrder.length>0&&(document.getElementById("projectDetail"+t.id).classList.toggle("expanded"),document.getElementById("feature"+t.id).classList.toggle("expandList"),Object(s.a)(document.getElementById("feature"+t.id).children).forEach((function(e){e.children[0].classList.toggle("largerFeature"),e.children[0].children[3].classList.toggle("unhide")})))}},t.featuresDone,"/",t.featureOrder.length," done"),n.a.createElement("div",{className:"projectTitle",onClick:function(e){document.getElementById("projectOverlay"+t.id).style.display="block",document.getElementById("projectOverlay"+t.id).children[0].children[1].focus()}},t.title),n.a.createElement("div",{className:"addFeature",onClick:function(e){document.getElementById("featureForm"+t.id).style.display="block",document.getElementById("featureForm"+t.id).children[0].children[2].children[0].focus()}},"\u2295 ",n.a.createElement("br",null)," add a feature"))),n.a.createElement(E.a,{onDragEnd:function(e){var r=e.destination,n=e.source,c=e.draggableId,i=e.type;if(r&&(r.droppableId!==n.droppableId||r.index!==n.index)){if("feature"===i){var d=Array.from(t.featureOrder);d.splice(n.index,1),d.splice(r.index,0,c);var s=Object(o.a)(Object(o.a)({},t),{},{featureOrder:d});return l(s),void a({type:"REORDER_FEATURE",reorder:{projectId:t.id,newFeatureOrder:d}})}var f=t.features[n.droppableId],m=Array.from(f.taskIds);m.splice(n.index,1),m.splice(r.index,0,c);var p=Object(o.a)(Object(o.a)({},f),{},{taskIds:m}),E=Object(o.a)(Object(o.a)({},t),{},{features:Object(o.a)(Object(o.a)({},t.features),{},Object(u.a)({},p.id,p))});l(E),a({type:"REORDER_TASK",reorder:{projectId:t.id,featureId:f.id,newTaskIds:m}})}}},n.a.createElement(E.c,{droppableId:"all-features",direction:"horizontal",type:"feature"},(function(e){return n.a.createElement("div",Object.assign({className:"featureList",id:"feature"+t.id},e.droppableProps,{ref:e.innerRef}),t.featureOrder.map((function(e,a){return n.a.createElement(k,{feature:t.features[e],project:t,index:a,key:e})})),e.placeholder)}))))},D=function(){var e=Object(r.useContext)(m).dispatch,t=Object(r.useState)(""),a=Object(d.a)(t,2),c=a[0],i=a[1],u=function(e){document.getElementById("projectForm").style.display="none"};return n.a.createElement("div",{className:"overlay",onKeyDown:function(e){27===e.keyCode&&u()}},n.a.createElement("div",{className:"closeBtn",onClick:u},"\u2297"),n.a.createElement("form",{action:"",onSubmit:function(t){t.preventDefault(),e({type:"ADD_PROJECT",title:c}),i(""),u()}},n.a.createElement("input",{className:"projectFormTitle",type:"text",value:c,onChange:function(e){return i(e.target.value)},required:!0}),n.a.createElement("div",{className:"BtnContainer",style:{margin:0}},n.a.createElement("input",{type:"submit",value:"add a project"}))))},h=function(){var e=Object(r.useContext)(m).projects,t=function(e){document.getElementById("projectForm").style.display="block",document.getElementById("projectForm").children[0].children[1].children[0].focus()};return e.length?n.a.createElement("div",{className:"projectList"},n.a.createElement("div",{className:"overlayContainer"},n.a.createElement("div",{id:"projectForm"},n.a.createElement(D,null))),e.map((function(e){return n.a.createElement(T,{project:e,key:e.id})})),n.a.createElement("div",{className:"addProject",onClick:t},"\u2295 add a new project")):n.a.createElement("div",null,n.a.createElement("div",{className:"overlayContainer"},n.a.createElement("div",{id:"projectForm"},n.a.createElement(D,null))),n.a.createElement("div",{className:"addProject",onClick:t},"\u2295 add a new project"))};var C=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(p,null,n.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.1fbc0ea1.chunk.js.map