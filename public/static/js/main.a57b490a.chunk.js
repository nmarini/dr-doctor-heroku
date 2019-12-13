(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{35:function(e,t,n){e.exports=n(53)},40:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),c=n.n(o),s=n(3),l=n(4),u=n(6),i=n(5),m=n(7),p=(n(40),n(10)),d=n(14),h=n(1),f=function(e){return{type:"SET_CURRENT_USER",user:e}},E=function(){return{type:"CLEAR_CURRENT_USER"}},b=function(){return function(e){return fetch("/api/v1/get_current_user",{credentials:"include",method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){t.error?console.log("No one is logged in"):e(f(t))}))}},v=n(12),N=Object(h.b)((function(e){return{currentUser:e.currentUser}}))((function(e){var t=e.currentUser,n=e.doctorCount;return r.a.createElement("div",null,0!==n?r.a.createElement("p",null,t.name,", you have ",n," Doctor",n>1?"s in your list.":" in your list."):null)})),g=function(e){var t=e.doctor;e.note;return r.a.createElement("div",null,r.a.createElement("h1",{className:"component-title"},"Dr. ",t.profile.last_name),r.a.createElement("h5",{className:"component-title"},"Title: ",t.profile.title),r.a.createElement("img",{src:t.profile.image_url,alt:"profile_picture"}),r.a.createElement("div",{className:"DoctorCardProfile"},r.a.createElement("p",{className:"italic-p"},t.profile.bio)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement("h3",null,"Specialties:"),t.specialties.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("li",null,e.name,": ",e.description),r.a.createElement("br",null))}))),r.a.createElement("div",{className:"column"},r.a.createElement("h3",null,"Practices:"),t.practices.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("li",null,e.name,r.a.createElement("div",{className:"accepting-patients"},e.accepts_new_patients?"Accepting New Patients":"NOT Accepting New Patients"),"City/State: ",e.visit_address.city.toUpperCase(),"/",e.visit_address.state.toUpperCase()),r.a.createElement("br",null))})))))},O=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).createDoctor=function(e){e.preventDefault();var t={last_name:n.props.doctor.profile.last_name,uid:n.props.doctor.uid,user_note:n.state.currentNote,user_id:n.props.currentUser.id};return n.setState({userNote:n.state.currentNote,currentNote:"",justSaved:!0}),fetch("http://localhost:3000/api/v1/doctors",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return n.setState({id:e.id})}))},n.updateDoctor=function(e){e.preventDefault();var t={last_name:n.props.doctor.profile.last_name,uid:n.props.doctor.uid,user_note:n.state.currentNote};return n.setState({userNote:n.state.currentNote,currentNote:""}),fetch("http://localhost:3000/api/v1/doctors/".concat(n.state.id),{credentials:"include",method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})},n.handleChange=function(e){n.setState({currentNote:e.target.value})},n.updateForm=function(){return r.a.createElement("form",{onSubmit:n.updateDoctor},r.a.createElement("label",null,"Update Note:",r.a.createElement("input",{type:"text",className:"round-textbox",name:"user_note",placeholder:"Add Note (optional)",value:n.state.currentNote,onChange:n.handleChange})),r.a.createElement("input",{className:"edit-button",type:"submit",value:"Update Profile"}))},n.createForm=function(){return r.a.createElement("form",{onSubmit:n.createDoctor},r.a.createElement("label",null,"Create Note:",r.a.createElement("input",{type:"text",className:"round-textbox",name:"user_note",placeholder:"Add Note (optional)",value:n.state.currentNote,onChange:n.handleChange})),r.a.createElement("input",{className:"save-button",type:"submit",value:"Save Profile"}))},n.ownsDoctor=function(e){return!!n.props.currentUser.doctors.find((function(t){return e.uid===t.uid}))},n.state={userNote:n.props.doctor.user_note?n.props.doctor.user_note:null,currentNote:"",justSaved:!1,id:n.props.doctor.id||null},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getCurrentUser()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,{key:this.props.doctor.uid,doctor:this.props.doctor}),this.state.userNote&&this.ownsDoctor(this.props.doctor)?r.a.createElement("div",null,r.a.createElement("h5",{className:"underlined"},"Note:")," ",r.a.createElement("p",{className:"text-color"},this.state.userNote)):null,this.state.justSaved?r.a.createElement("p",{className:"success"},"Saved to profile!"):null,this.state.justSaved&&this.state.userNote?r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("h5",{className:"underlined"},"Note:"),r.a.createElement("p",{className:"text-color"},this.state.userNote))):null,this.ownsDoctor(this.props.doctor)||this.state.justSaved?this.updateForm():this.createForm())}}]),t}(a.Component),y=Object(h.b)((function(e){return{currentUser:e.currentUser}}),{getCurrentUser:b})(O),D=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).listDoctors=function(e){return e.map((function(e){return r.a.createElement("div",{className:"underlined",key:e.uid},r.a.createElement("h6",null,"Dr. ",e.profile.last_name),r.a.createElement("p",null,r.a.createElement("button",{className:"button",value:e.uid,onClick:n.handleClick},"give me the news!")))}))},n.listUserDoctors=function(e){return e.map((function(e){return r.a.createElement("div",{className:"underlined",key:e.uid},r.a.createElement("h6",null,"Dr. ",e.profile.last_name),r.a.createElement("p",null,r.a.createElement("button",{className:"button",value:e.uid,onClick:n.handleClick},"give me the news!"),r.a.createElement("button",{className:"warning-button",value:e.id,onClick:n.handleDelete},"remove")))}))},n.handleDelete=function(e){var t=parseInt(e.target.value),a=n.state.userDocs.filter((function(e){return e.id!==t}));n.setState({userDocs:a}),fetch("http://localhost:3000/api/v1/doctors/".concat(t),{credentials:"include",method:"DELETE"}).then(n.props.getCurrentUser)},n.handleClick=function(e){var t=e.target.value,a=n.props.doctors.find((function(e){return t===e.uid}));n.setState({selectedDoctor:a})},n.state={selectedDoctor:!1,userDocs:n.props.userDoctors},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getCurrentUser()}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"doctorContainerList"},this.props.userDoctors?this.listUserDoctors(this.state.userDocs):this.listDoctors(this.props.allDoctors))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"doctorContainerCard"},this.state.selectedDoctor?r.a.createElement(y,{key:this.state.selectedDoctor.uid,note:this.state.selectedDoctor.user_note,doctor:this.state.selectedDoctor}):r.a.createElement("p",{className:"underlined"},"Selected Doctor will Display here"))))}}]),t}(a.Component),C=Object(h.b)((function(e){return{currentUser:e.currentUser,doctors:e.doctors}}),{getCurrentUser:b})(D),j=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).handleOnSubmit=function(e){e.preventDefault();var t={user:{name:n.state.name,email:n.state.email,password:n.state.password}};fetch("http://localhost:3000/api/v1/users/".concat(n.props.currentUser.id),{credentials:"include",method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){200!==e.status?alert("Please complete entire form!"):n.props.getCurrentUser()})),n.setState({exposeForm:!n.state.exposeForm})},n.handleDelete=function(){n.props.clearCurrentUser(),fetch("http://localhost:3000/api/v1/users/".concat(n.props.currentUser.id),{credentials:"include",method:"DELETE"})},n.handleOnChange=function(e){n.setState(Object(v.a)({},e.target.name,e.target.value))},n.showForm=function(){n.setState({exposeForm:!n.state.exposeForm})},n.updateForm=function(){return r.a.createElement("form",{onSubmit:n.handleOnSubmit},r.a.createElement("input",{type:"text",className:"round-textbox",name:"name",placeholder:"Name",value:n.state.name,onChange:n.handleOnChange}),r.a.createElement("input",{type:"text",className:"round-textbox",name:"email",placeholder:"Email",value:n.state.email,onChange:n.handleOnChange}),r.a.createElement("input",{type:"password",className:"round-textbox",name:"password",placeholder:"Password",value:n.state.password,onChange:n.handleOnChange}),r.a.createElement("input",{type:"submit",className:"edit-button",value:"Update Account"}))},n.userDoctors=function(){return n.props.currentUser.doctors.map((function(e){var t=n.props.doctors.find((function(t){return t.uid===e.uid}));return t.id=e.id,t.user_note=e.user_note,t}))},n.doctorCount=function(){var e=0;return n.props.currentUser.doctors.forEach((function(t){return e+=1})),e},n.state={name:n.props.currentUser.name,email:n.props.currentUser.email,password:"",exposeForm:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getCurrentUser()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h5",{className:"component-title"},"Profile Page"),r.a.createElement(N,{doctorCount:this.doctorCount()}),r.a.createElement("div",null,r.a.createElement("button",{className:"edit-button",onClick:this.showForm},this.state.exposeForm?"Hide Edit Form":"Show Edit Form")),this.state.exposeForm?this.updateForm():null,r.a.createElement("div",null,r.a.createElement(p.b,{to:"/"},r.a.createElement("button",{className:"warning-button",onClick:this.handleDelete},"Delete Your Account")))),this.props.doctors?r.a.createElement("div",null,r.a.createElement("h6",{className:"component-title"},"Your saved Doctors:"),r.a.createElement(C,{userDoctors:this.userDoctors()})):"still loading...")}}]),t}(a.Component),U=Object(h.b)((function(e){return{currentUser:e.currentUser,doctors:e.doctors}}),{getCurrentUser:b,clearCurrentUser:E})(j),S=n(34),w=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).specialtyDoctors=function(){return n.alphabetizeDocs().filter((function(e){if(e.specialties.map((function(e){return e.name})).includes(n.state.searchType))return e}))},n.namedDoctors=function(){return n.alphabetizeDocs().filter((function(e){return e.profile.last_name.toLowerCase().startsWith(n.state.lastName.toLowerCase())}))},n.ownsDoctor=function(e){return!!n.props.currentUser.doctors.find((function(t){return e.uid===t.uid}))},n.allDoctors=function(){return n.props.doctors.map((function(e){if(n.ownsDoctor(e)){var t=n.props.currentUser.doctors.find((function(t){return t.uid===e.uid}));return e.user_note=t.user_note,e.id=t.id,e}return e}))},n.alphabetizeDocs=function(){return n.allDoctors().sort((function(e,t){return e.profile.last_name<t.profile.last_name?-1:e.profile.last_name>t.profile.last_name?1:0}))},n.sortBySpecialty=function(){var e=[];return n.props.doctors.map((function(t){t.specialties.map((function(t){e.push(t.name)}))})),Object(S.a)(new Set(e)).sort().map((function(e,t){return r.a.createElement("option",{key:t,name:"searchType",value:e,onClick:n.handleSortClick},e)}))},n.handleSortSubmit=function(e){e.preventDefault();var t="DEFAULT"===n.state.searchType?n.alphabetizeDocs():n.specialtyDoctors();n.setState({chosenDocs:t,lastName:""})},n.handleNameSubmit=function(e){e.preventDefault(),n.setState({chosenDocs:n.namedDoctors(),lastName:"",searchType:""})},n.handleOnChange=function(e){n.setState(Object(v.a)({},e.target.name,e.target.value))},n.specialtyForm=function(){return r.a.createElement("form",{onSubmit:n.handleSortSubmit},r.a.createElement("label",null,"Sort by Specialty:",r.a.createElement("select",{name:"searchType",className:"button",value:n.state.searchType,onChange:n.handleOnChange},r.a.createElement("option",{key:"00",value:"DEFAULT"},"All Doctors"),n.sortBySpecialty())),r.a.createElement("input",{type:"submit",className:"button",value:"sort!"}))},n.lastNameForm=function(){return r.a.createElement("form",{onSubmit:n.handleNameSubmit},r.a.createElement("label",null,"Search by Last Name:",r.a.createElement("input",{type:"text",className:"round-textbox",onChange:n.handleOnChange,name:"lastName",value:n.state.lastName})),r.a.createElement("input",{type:"submit",className:"button",value:"search"}))},n.state={lastName:"",searchType:"DEFAULT",chosenDocs:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h5",{className:"component-title"},"Doctor List"),null!==this.props.doctors?r.a.createElement("div",null,this.lastNameForm(),this.specialtyForm()):null,r.a.createElement("div",null),null!==this.props.doctors&&null!==this.props.currentUser?this.state.chosenDocs?r.a.createElement(C,{key:this.state.chosenDocs,allDoctors:this.state.chosenDocs}):r.a.createElement(C,{key:this.state.chosenDocs,allDoctors:this.alphabetizeDocs()}):"still loading...")}}]),t}(a.Component),_=Object(h.b)((function(e){return{currentUser:e.currentUser,doctors:e.doctors}}))(w),x=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.currentUser?r.a.createElement("div",{className:"text-color"},r.a.createElement("h5",{className:"component-title"},"Home"),r.a.createElement("p",null,"Please use the navigation bar to checkout Doctors, your Profile, or to Log Out"),r.a.createElement("p",{className:"italic-p"},r.a.createElement("b",null,"Dr. Doctor")," contains a list of Doctors, from ",r.a.createElement("b",null,"Boston Massachusetts"),", with varying backgrounds.",r.a.createElement("br",null),"Users are able to view Doctor information, and save Doctors to their User Profile with an optional note included to view at a later time.",r.a.createElement("br",null),"Users are able to search for Doctors by last name, specialty, or picking a Doctor from the complete list of Doctors.")):r.a.createElement("p",null,"Please Sign Up or Log In"))}}]),t}(a.Component),T=Object(h.b)((function(e){return{currentUser:e.currentUser}}))(x);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var F=Object(h.b)((function(e){return{loginForm:e.loginForm}}),{clearLoginForm:function(){return{type:"CLEAR_LOGIN_FORM"}},updateLoginForm:function(e){return{type:"UPDATE_LOGIN_FORM",formData:e}},login:function(e){return function(t){return fetch("/api/v1/login",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.error?alert(e.error):t(f(e))}))}}})((function(e){var t=e.clearLoginForm,n=e.updateLoginForm,a=e.login,o=e.loginForm,c=function(e){var t=e.target,a=t.name,r=t.value,c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o,Object(v.a)({},a,r));n(c)};return r.a.createElement("div",null,"Log In",r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(o),t()}},r.a.createElement("input",{type:"text",className:"round-textbox",placeholder:"Email",onChange:c,name:"email",value:o.email}),r.a.createElement("input",{type:"password",className:"round-textbox",placeholder:"Password",onChange:c,name:"password",value:o.password}),r.a.createElement("input",{type:"submit",className:"button",value:"Log In"})))})),P=Object(h.b)(null,{logout:function(){return function(e){return e({type:"CLEAR_CURRENT_USER"}),fetch("/api/v1/logout",{credentials:"include",method:"DELETE"})}}})((function(e){var t=e.logout;return r.a.createElement(p.b,{to:"/"},r.a.createElement("button",{className:"nav-button",onClick:t},"Log Out"))})),L=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).handleOnChange=function(e){n.setState(Object(v.a)({},e.target.name,e.target.value))},n.handleOnSubmit=function(e){e.preventDefault(),n.props.signup(n.state)},n.state={email:"",name:"",password:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Sign Up",r.a.createElement("form",{onSubmit:this.handleOnSubmit},r.a.createElement("input",{type:"text",className:"round-textbox",name:"name",placeholder:"Name",value:this.state.name,onChange:this.handleOnChange}),r.a.createElement("input",{type:"text",className:"round-textbox",name:"email",placeholder:"Email",value:this.state.email,onChange:this.handleOnChange}),r.a.createElement("input",{type:"password",className:"round-textbox",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleOnChange}),r.a.createElement("input",{type:"submit",className:"button",value:"Sign Up"})))}}]),t}(a.Component),R=Object(h.b)(null,{signup:function(e){return function(t){var n={user:e};return fetch("/api/v1/signup",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){e.error?alert(e.error):t(f(e))}))}}})(L),A=Object(h.b)((function(e){return{currentUser:e.currentUser}}))((function(e){var t=e.currentUser;return r.a.createElement("div",{className:"NavBar"},r.a.createElement("div",null,t?r.a.createElement("strong",null,"Welcome, ",t.name,"! "):null,r.a.createElement("div",null,t?null:r.a.createElement("div",null,r.a.createElement(F,null),"-or-",r.a.createElement(R,null)))),t?r.a.createElement("div",{className:"NavRow"},r.a.createElement("div",{className:"NavColumn"},r.a.createElement(p.b,{to:"/"},r.a.createElement("button",{className:"nav-button"},"Home Page"))),r.a.createElement("div",{className:"NavColumn"},r.a.createElement(p.b,{to:"/userProfile"},r.a.createElement("button",{className:"nav-button"},"User's Profile"))),r.a.createElement("div",{className:"NavColumn"},r.a.createElement(p.b,{to:"/doctorList"},r.a.createElement("button",{className:"nav-button"},"Doctor List"))),r.a.createElement("div",{className:"NavColumn"},r.a.createElement(P,null))):"")})),I=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getCurrentUser(),this.props.getDoctors()}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"main-title"},r.a.createElement("h1",null,"Dr. Doctor"),r.a.createElement("p",{className:"italic-p"},"Helping you find the doctor you need")),r.a.createElement(A,null),this.props.currentUser?r.a.createElement("div",null,r.a.createElement(d.a,{exact:!0,path:"/",component:T}),r.a.createElement(d.a,{exact:!0,path:"/userProfile",render:function(){return r.a.createElement(U,{key:e.props.currentUser.doctors.length})}}),r.a.createElement(d.a,{exact:!0,path:"/doctorList",component:_})):r.a.createElement("div",null,r.a.createElement(d.a,{exact:!0,path:"/",component:T}))))}}]),t}(a.Component),M=Object(h.b)((function(e){return{currentUser:e.currentUser}}),{getCurrentUser:b,getDoctors:function(){var e="https://api.betterdoctor.com/2016-03-01/doctors?location=ma-boston&skip=2&limit=100&user_key="+"".concat("6ccd7f66f3224d514fde3ee19a1b5ae0");return function(t){return fetch(e,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e.error?alert(e.errors):t(function(e){return{type:"ADD_DOCTORS",doctors:e}}(e.data))}))}}})(I),J=n(15),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DOCTORS":return t.doctors;default:return e}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return t.user;case"CLEAR_CURRENT_USER":return null;default:return e}},z={email:"",password:""},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_LOGIN_FORM":return t.formData;case"CLEAR_LOGIN_FORM":return z;default:return e}},W=n(33),X=Object(J.c)({doctors:G,currentUser:H,loginForm:B}),Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||J.d,V=Object(J.e)(X,Y(Object(J.a)(W.a)));n(49);n(50).config(),c.a.render(r.a.createElement(h.a,{store:V},r.a.createElement(M,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.a57b490a.chunk.js.map