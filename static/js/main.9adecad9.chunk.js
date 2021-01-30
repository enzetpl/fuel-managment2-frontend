(this["webpackJsonpfuel-managment-2-frontend"]=this["webpackJsonpfuel-managment-2-frontend"]||[]).push([[0],{51:function(e,t,a){},52:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),r=a.n(s),c=a(43),i=a.n(c),l=(a(51),a(3)),o=a(4),u=a(6),d=a(5),j=(a(52),a(20)),b=a(7),h=a(18),m=a(12),f=a(9),p=a(11),O=a.n(p),x="http://fuelmng-env.eba-taegx2jp.eu-central-1.elasticbeanstalk.com/api",v=new(function(){function e(){Object(l.a)(this,e)}return Object(o.a)(e,[{key:"retreiveAllCars",value:function(){return O.a.get("".concat(x,"/cars"),{headers:{Authorization:localStorage.getItem("user")}})}},{key:"addCar",value:function(e){return O.a.post("".concat(x,"/cars"),e,{headers:{Authorization:localStorage.getItem("user")}})}},{key:"updateCar",value:function(e,t){return O.a.patch("".concat(x,"/cars/").concat(e),t,{headers:{Authorization:localStorage.getItem("user")}})}},{key:"getCar",value:function(e){return O.a.get("".concat(x,"/cars/").concat(e),{headers:{Authorization:localStorage.getItem("user")}})}},{key:"deleteCar",value:function(e){return O.a.delete("".concat(x,"/cars/").concat(e),{headers:{Authorization:localStorage.getItem("user")}})}}]),e}()),g=a(2),y=a(23),N=a.n(y),k=a(28),w="https://cors-everywhere-me.herokuapp.com/http://fuelmng-env.eba-taegx2jp.eu-central-1.elasticbeanstalk.com",S=new(function(){function e(){Object(l.a)(this,e)}return Object(o.a)(e,[{key:"isUserLoggedIn",value:function(){return null!=localStorage.getItem("user")}},{key:"register",value:function(){var e=Object(k.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",O.a.post("".concat(w,"/api/users/register"),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"executeBasicAuth",value:function(e,t){return localStorage.setItem("user",this.createBasicAuthToken(e,t)),O.a.get("".concat(w,"/api/auth"),{headers:{authorization:this.createBasicAuthToken(e,t)}})}},{key:"createBasicAuthToken",value:function(e,t){return"Basic "+window.btoa(e+":"+t)}},{key:"logoutUser",value:function(){localStorage.removeItem("user")}}]),e}()),C=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",badLoginMessage:!1},n.onSubmit=n.onSubmit.bind(Object(f.a)(n)),n}return Object(o.a)(a,[{key:"onSubmit",value:function(e){var t=this;S.executeBasicAuth(e.username,e.password).then((function(){t.props.history.push("/cars")})).catch((function(){t.setState({badLoginMessage:!0})}))}},{key:"render",value:function(){var e=this.state.username,t=this.state.password;return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(R,{}),Object(n.jsx)("br",{}),this.state.badLoginMessage&&Object(n.jsx)("div",{className:"alert alert-danger",children:"Bad credentials"}),Object(n.jsx)(g.d,{initialValues:{username:e,password:t},onSubmit:this.onSubmit,validateOnChange:!1,validateOnBlur:!1,validate:this.validate,enableReinitialize:!0,children:function(e){return Object(n.jsxs)(g.c,{children:[Object(n.jsxs)("fieldset",{className:"form-group",children:[Object(n.jsx)("label",{children:"username"}),Object(n.jsx)(g.a,{name:"username",component:"div",className:"alert alert-warning"}),Object(n.jsx)(g.b,{className:"form-control",type:"text",name:"username"})]}),Object(n.jsxs)("fieldset",{className:"form-group",children:[Object(n.jsx)("label",{children:"password"}),Object(n.jsx)(g.a,{name:"password",component:"div",className:"alert alert-warning"}),Object(n.jsx)(g.b,{className:"form-control",type:"password",name:"password"})]}),Object(n.jsx)("button",{className:"btn btn-success",type:"submit",children:"login"})]})}})]})}}]),a}(s.Component),I=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={role:"USER",successMessage:null},n.onSubmit=n.onSubmit.bind(Object(f.a)(n)),n}return Object(o.a)(a,[{key:"onSubmit",value:function(){var e=Object(k.a)(N.a.mark((function e(t,a){var n,s=this;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.setErrors,e.next=3,S.register(t).then((function(e){s.setState({successMessage:e.data.message})})).catch((function(e){var t=e.response.data.errors.reduce((function(e,t){return Object(m.a)(Object(m.a)({},e),{},Object(h.a)({},t.fieldName,t.message))}),{});n(t)}));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.role;return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(R,{}),this.state.successMessage&&Object(n.jsxs)("div",{className:"alert alert-success",children:["Registration successful! Now you can ",Object(n.jsx)("a",{href:"/login",children:"login"})]}),Object(n.jsx)(g.d,{initialValues:{username:"",email:"",password:"",role:e},onSubmit:this.onSubmit,validateOnChange:!1,validateOnBlur:!1,validate:this.validate,enableReinitialize:!0,children:function(e){return Object(n.jsxs)(g.c,{children:[Object(n.jsxs)("fieldset",{className:"form-group",children:[Object(n.jsx)("label",{children:"username"}),Object(n.jsx)(g.a,{name:"username",component:"div",className:"alert alert-warning"}),Object(n.jsx)(g.b,{className:"form-control",type:"text",name:"username"})]}),Object(n.jsxs)("fieldset",{className:"form-group",children:[Object(n.jsx)("label",{children:"email"}),Object(n.jsx)(g.a,{name:"email",component:"div",className:"alert alert-warning"}),Object(n.jsx)(g.b,{className:"form-control",type:"text",name:"email"})]}),Object(n.jsxs)("fieldset",{className:"form-group",children:[Object(n.jsx)("label",{children:"password"}),Object(n.jsx)(g.a,{name:"password",component:"div",className:"alert alert-warning"}),Object(n.jsx)(g.b,{className:"form-control",type:"password",name:"password"})]}),Object(n.jsx)("button",{className:"btn btn-success",type:"submit",children:"register"})]})}})]})}}]),a}(s.Component),D=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return S.logoutUser(),Object(n.jsxs)("div",{children:[Object(n.jsx)(R,{}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"alert alert-warning",children:"Logout successful"})]})}}]),a}(s.Component),R=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e,t="";return S.isUserLoggedIn()?e=Object(n.jsx)(j.b,{className:"nav-item nav-link",to:"/logout",children:"logout"}):(e=Object(n.jsx)(j.b,{className:"nav-item nav-link",to:"/login",children:"login"}),t=Object(n.jsx)(j.b,{className:"nav-item nav-link",to:"/register",children:"register"})),Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(n.jsx)("span",{className:"navbar-brand",children:"Navbar"}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(n.jsxs)("div",{className:"navbar-nav",children:[Object(n.jsx)("a",{className:"nav-item nav-link",href:"/",children:"Home"}),Object(n.jsx)("a",{className:"nav-item nav-link",href:"/cars",children:"cars"}),e,t]})})]})}}]),a}(s.Component),A=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).defaultItem={brand:"",model:"",productionYear:void 0,plate:void 0,fuelType:"DIESEL"},n.state={item:n.defaultItem,id:n.props.match.params.carId},n.onSubmit=n.onSubmit.bind(Object(f.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;"new"!==this.state.id&&v.getCar(this.state.id).then((function(t){e.setState({item:t.data})}))}},{key:"onSubmit",value:function(e,t){var a=this,n=t.setErrors,s=e;"new"===this.state.id?v.addCar(s).then((function(){return a.props.history.push("/cars")})).catch((function(e){var t=e.response.data.errors.reduce((function(e,t){return Object(m.a)(Object(m.a)({},e),{},Object(h.a)({},t.fieldName,t.message))}),{});n(t)})):v.updateCar(this.state.id,s).then((function(){return a.props.history.push("/cars")})).catch((function(e){var t=e.response.data.errors.reduce((function(e,t){return Object(m.a)(Object(m.a)({},e),{},Object(h.a)({},t.fieldName,t.message))}),{});n(t)}))}},{key:"render",value:function(){var e=this.state.item.brand,t=this.state.item.model,a=this.state.item.fuelType,s=this.state.item.productionYear,r=this.state.item.plate;return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(R,{}),Object(n.jsx)(g.d,{initialValues:{brand:e,model:t,fuelType:a,productionYear:s,plate:r},onSubmit:this.onSubmit,validateOnChange:!1,validateOnBlur:!1,enableReinitialize:!0,children:function(e){return Object(n.jsxs)(g.c,{children:[Object(n.jsxs)("fieldset",{className:"form-group",children:[Object(n.jsx)("label",{children:"brand"}),Object(n.jsx)(g.a,{name:"brand",component:"div",className:"alert alert-warning"}),Object(n.jsx)(g.b,{className:"form-control",type:"text",name:"brand"})]}),Object(n.jsxs)("fieldset",{className:"form-group",children:[Object(n.jsx)("label",{children:"model"}),Object(n.jsx)(g.a,{name:"model",component:"div",className:"alert alert-warning"}),Object(n.jsx)(g.b,{className:"form-control",type:"text",name:"model"})]}),Object(n.jsxs)("fieldset",{className:"form-group",children:[Object(n.jsx)("label",{children:"fuel type"}),Object(n.jsxs)(g.b,{component:"select",className:"form-control",as:"select",name:"fuelType",variant:"outlined",children:[Object(n.jsx)("option",{value:"DIESEL",children:"diesel"}),Object(n.jsx)("option",{value:"PETROL",children:"petrol"}),Object(n.jsx)("option",{value:"GAS",children:"gas"})]})]}),Object(n.jsxs)("fieldset",{className:"form-group",children:[Object(n.jsx)("label",{children:"production year"}),Object(n.jsx)(g.a,{name:"productionYear",component:"div",className:"alert alert-warning"}),Object(n.jsx)(g.b,{className:"form-control",type:"number",name:"productionYear"})]}),Object(n.jsxs)("fieldset",{className:"form-group",children:[Object(n.jsx)("label",{children:"plate(optional)"}),Object(n.jsx)(g.a,{name:"plate",component:"div",className:"alert alert-warning"}),Object(n.jsx)(g.b,{className:"form-control",type:"text",name:"plate"})]}),Object(n.jsx)("button",{className:"btn btn-success",type:"submit",children:"Save"})]})}})]})}}]),a}(s.Component),L="http://fuelmng-env.eba-taegx2jp.eu-central-1.elasticbeanstalk.com",T=new(function(){function e(){Object(l.a)(this,e)}return Object(o.a)(e,[{key:"getRefuel",value:function(e,t){return O.a.get("".concat(L,"/cars/").concat(e,"/refuels/").concat(t),{headers:{Authorization:localStorage.getItem("user")}})}},{key:"addCar",value:function(e,t){return O.a.post("".concat(L,"/cars/").concat(e,"/refuels"),t,{headers:{Authorization:localStorage.getItem("user")}})}},{key:"retreiveAllRefuels",value:function(e){return O.a.get("".concat(L,"/cars/").concat(e,"/refuels"),{headers:{Authorization:localStorage.getItem("user")}})}},{key:"deleteRefuel",value:function(e,t){return O.a.delete("".concat(L,"/cars/").concat(e,"/refuels/").concat(t),{headers:{Authorization:localStorage.getItem("user")}})}},{key:"addRefuel",value:function(e,t){return O.a.post("".concat(L,"/cars/").concat(e,"/refuels"),t,{headers:{Authorization:localStorage.getItem("user")}})}},{key:"updateRefuel",value:function(e,t,a){return O.a.patch("".concat(L,"/cars/").concat(e,"/refuels/").concat(t),a,{headers:{Authorization:localStorage.getItem("user")}})}}]),e}()),z=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).emptyItem={volume:0,priceForLiter:0,refuelDate:new Date},n.state={item:n.emptyItem,id:n.props.match.params.refuelId},n.onSubmit=n.onSubmit.bind(Object(f.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;"new"!==this.state.id&&T.getRefuel(this.props.match.params.carId,this.state.id).then((function(t){t.data.refuelDate=new Date(t.data.refuelDate),e.setState({item:t.data})}))}},{key:"onSubmit",value:function(e,t){var a=this,n=t.setErrors,s={volume:e.volume,priceForLiter:e.priceForLiter,refuelDate:new Date(e.refuelDate+" "+e.refuelTime)};"new"===this.state.id?T.addRefuel(this.props.match.params.carId,s).then((function(){return a.props.history.push("/cars/".concat(a.props.match.params.carId,"/refuels"))})).catch((function(e){var t=e.response.data.errors.reduce((function(e,t){return Object(m.a)(Object(m.a)({},e),{},Object(h.a)({},t.fieldName,t.message))}),{});n(t)})):T.updateRefuel(this.props.match.params.carId,this.state.id,s).then((function(){return a.props.history.push("/cars/".concat(a.props.match.params.carId,"/refuels"))})).catch((function(e){var t=e.response.data.errors.reduce((function(e,t){return Object(m.a)(Object(m.a)({},e),{},Object(h.a)({},t.fieldName,t.message))}),{});n(t)}))}},{key:"render",value:function(){var e=this.state.item.volume,t=this.state.item.priceForLiter,a=this.state.item.refuelDate.toLocaleDateString("en-CA"),s=this.state.item.refuelDate.toLocaleTimeString();return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(R,{}),Object(n.jsx)(g.d,{initialValues:{volume:e,priceForLiter:t,refuelDate:a,refuelTime:s},onSubmit:this.onSubmit,validateOnChange:!1,validateOnBlur:!1,validate:this.validate,enableReinitialize:!0,children:function(e){return Object(n.jsxs)(g.c,{children:[Object(n.jsxs)("fieldset",{className:"form-group",children:[Object(n.jsx)("label",{children:"volume"}),Object(n.jsx)(g.a,{name:"volume",component:"div",className:"alert alert-warning"}),Object(n.jsx)(g.b,{className:"form-control",type:"number",name:"volume"})]}),Object(n.jsxs)("fieldset",{className:"form-group",children:[Object(n.jsx)("label",{children:"price for liter"}),Object(n.jsx)(g.a,{name:"priceForLiter",component:"div",className:"alert alert-warning"}),Object(n.jsx)(g.b,{className:"form-control",type:"number",name:"priceForLiter"})]}),Object(n.jsxs)("fieldset",{className:"form-group",children:[Object(n.jsx)("label",{children:"refuel date"}),Object(n.jsx)(g.a,{name:"refuelDate",component:"div",className:"alert alert-warning"}),Object(n.jsx)(g.b,{className:"form-control",type:"date",name:"refuelDate"})]}),Object(n.jsxs)("fieldset",{className:"form-group",children:[Object(n.jsx)("label",{children:"refuel time"}),Object(n.jsx)(g.a,{name:"refuelTime",component:"div",className:"alert alert-warning"}),Object(n.jsx)(g.b,{className:"form-control",type:"time",name:"refuelTime"})]}),Object(n.jsx)("button",{className:"btn btn-success",type:"submit",children:"Save"})]})}})]})}}]),a}(s.Component),F=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return S.isUserLoggedIn()?Object(n.jsx)(b.b,Object(m.a)({},this.props)):Object(n.jsx)(b.a,{to:"/login"})}}]),a}(s.Component),M=a.p+"static/media/blood-drop.aca97268.png",B=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={cars:[],message:null},n.refreshCars=n.refreshCars.bind(Object(f.a)(n)),n.updateCar=n.updateCar.bind(Object(f.a)(n)),n.deleteCar=n.deleteCar.bind(Object(f.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.refreshCars()}},{key:"refreshCars",value:function(){var e=this;v.retreiveAllCars().then((function(t){e.setState({cars:t.data})}))}},{key:"addCar",value:function(){this.props.history.push("/cars/new")}},{key:"updateCar",value:function(e){this.props.history.push("/cars/".concat(e))}},{key:"deleteCar",value:function(e){var t=this;v.deleteCar(e).then((function(){t.setState({message:"Delete of car ".concat(e," succesfull")}),t.refreshCars()}))}},{key:"addRefuel",value:function(e){this.props.history.push("/cars/".concat(e,"/refuels/new"))}},{key:"showRefuels",value:function(e){this.props.history.push("/cars/".concat(e,"/refuels"))}},{key:"showStats",value:function(e){this.props.history.push("/cars/".concat(e,"/stats"))}},{key:"render",value:function(){var e=this,t=S.isUserLoggedIn(),a="";return t?t&&0===this.state.cars.length&&(a=Object(n.jsx)("div",{className:"alert alert-warning",children:"Please add first car"})):a=Object(n.jsx)("div",{className:"alert alert-warning",children:"Please login to see list of your cars"}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(R,{}),Object(n.jsx)("h3",{children:"All cars"}),this.state.message&&Object(n.jsx)("div",{className:"alert alert-success",children:this.state.message}),Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"ID"}),Object(n.jsx)("th",{children:"brand"}),Object(n.jsx)("th",{children:"model"}),Object(n.jsx)("th",{children:"Fuel type"}),Object(n.jsx)("th",{children:"production year"}),Object(n.jsx)("th",{children:"plate"})]})}),Object(n.jsx)("tbody",{children:this.state.cars.map((function(t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t.id}),Object(n.jsx)("td",{children:t.brand}),Object(n.jsx)("td",{children:t.model}),Object(n.jsx)("td",{children:t.fuelType}),Object(n.jsx)("td",{children:t.productionYear}),Object(n.jsx)("td",{children:t.plate}),Object(n.jsxs)("td",{children:[Object(n.jsxs)("button",{className:"btn btn-success btn-lg",onClick:function(){return e.addRefuel(t.id)},children:[Object(n.jsx)("img",{src:M,height:"40rem"}),"Add refuel"]}),Object(n.jsx)("button",{className:"btn btn-success btn-lg",onClick:function(){return e.showStats(t.id)},children:"show summary"})]}),Object(n.jsxs)("td",{className:"btn-group-vertical",children:[Object(n.jsx)("button",{className:"btn btn-success btn-sm",onClick:function(){return e.showRefuels(t.id)},children:"show refuels"}),Object(n.jsx)("button",{className:"btn btn-info btn-sm",onClick:function(){return e.updateCar(t.id)},children:"Update car"}),Object(n.jsx)("button",{className:"btn btn-warning btn-sm",onClick:function(){return e.deleteCar(t.id)},children:"Delete car"})]})]},t.id)}))})]}),a,Object(n.jsx)("button",{className:"btn btn-success",onClick:function(){return e.addCar()},children:"Add new car"})]})}}]),a}(s.Component),U=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={loggedIn:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({loggedIn:S.isUserLoggedIn()})}},{key:"render",value:function(){var e;return e=this.state.loggedIn?Object(n.jsxs)("p",{children:["Here you can see list of your ",Object(n.jsx)("a",{href:"/cars",children:"cars"})]}):Object(n.jsxs)("p",{children:["Here you canA ",Object(n.jsx)("a",{href:"/register",children:"register"})," or ",Object(n.jsx)("a",{href:"/login",children:"login"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(R,{}),Object(n.jsxs)("div",{className:"container justify-contnent-center",children:[Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("h2",{children:"Vehicle management apkjkjp"}),Object(n.jsx)("p",{children:"App for tracking refuels, cklkljkar's mileage, fuel consumption and more. You can manage many cars and have summarry of costs in one place  "}),e]})]})}}]),a}(s.Component),E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={refuels:[],message:null},n.refreshRefuels=n.refreshRefuels.bind(Object(f.a)(n)),n.updateRefuels=n.updateRefuels.bind(Object(f.a)(n)),n.deleteRefuel=n.deleteRefuel.bind(Object(f.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.refreshRefuels()}},{key:"refreshRefuels",value:function(){var e=this;T.retreiveAllRefuels(this.props.match.params.carId).then((function(t){e.setState({refuels:t.data})}))}},{key:"addRefuel",value:function(){this.props.history.push("/cars/".concat(this.props.match.params.carId,"/refuels/new"))}},{key:"updateRefuels",value:function(e){this.props.history.push("/cars/".concat(this.props.match.params.carId,"/refuels/").concat(e))}},{key:"deleteRefuel",value:function(e){var t=this;T.deleteRefuel(this.props.match.params.carId,e).then((function(){t.setState({message:"Delete of refuel ".concat(e," succesful")}),t.refreshRefuels()}))}},{key:"showRefuels",value:function(e){this.props.history.push("/cars/".concat(e,"/refuels"))}},{key:"render",value:function(){var e=this,t=S.isUserLoggedIn(),a="";return t?t&&0===this.state.refuels.length&&(a=Object(n.jsx)("div",{className:"alert alert-warning",children:"Please add first refuel"})):a=Object(n.jsx)("div",{className:"alert alert-warning",children:"Please login to see list of your cars"}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(R,{}),Object(n.jsx)("h3",{children:"All refuels"}),this.state.message&&Object(n.jsx)("div",{className:"alert alert-success",children:this.state.message}),Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"ID"}),Object(n.jsx)("th",{children:"volume"}),Object(n.jsx)("th",{children:"price for liter"}),Object(n.jsx)("th",{children:"refuel date"})]})}),Object(n.jsx)("tbody",{children:this.state.refuels.map((function(t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t.id}),Object(n.jsx)("td",{children:t.volume}),Object(n.jsx)("td",{children:t.priceForLiter}),Object(n.jsx)("td",{children:t.refuelDate}),Object(n.jsxs)("td",{children:[Object(n.jsx)("button",{className:"btn btn-info",onClick:function(){return e.updateRefuels(t.id)},children:"Update"}),Object(n.jsx)("button",{className:"btn btn-warning",onClick:function(){return e.deleteRefuel(t.id)},children:"Delete"})]})]},t.id)}))})]}),a,Object(n.jsx)("button",{className:"btn btn-success",onClick:function(){return e.addRefuel()},children:"Add new refuel"})]})}}]),a}(s.Component),P=new(function(){function e(){Object(l.a)(this,e)}return Object(o.a)(e,[{key:"retreiveAllRefuelsForCar",value:function(e,t,a){var n="".concat("http://fuelmng-env.eba-taegx2jp.eu-central-1.elasticbeanstalk.com","/cars/").concat(e,"/stats?startDate=").concat(t,"&endDate=").concat(a);return O.a.get(n,{headers:{Authorization:localStorage.getItem("user")}})}}]),e}()),V=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={carId:n.props.match.params.carId,startDate:new Date(2020,1,1).toISOString().substr(0,10),endDate:(new Date).toISOString().substr(0,10),item:null},n.onSubmit=n.onSubmit.bind(Object(f.a)(n)),n}return Object(o.a)(a,[{key:"onSubmit",value:function(e){var t=this;P.retreiveAllRefuelsForCar(this.state.carId,e.startDate,e.endDate).then((function(e){t.setState({item:e.data}),console.log(t.state.item)}))}},{key:"render",value:function(){var e,t=this.state.startDate,a=this.state.endDate,s=this.state.item;return null!=this.state.item&&(e=0===this.state.item.totalRefuels?Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"alert alert-warning",children:"No refuels in selected time"})}):Object(n.jsx)("table",{className:"table",children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Total price:"}),Object(n.jsx)("td",{children:s.totalPrice})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Total volume:"}),Object(n.jsx)("td",{children:s.totalVolume})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Total refuels:"}),Object(n.jsx)("td",{children:s.totalRefuels})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"average price per liter:"}),Object(n.jsx)("td",{children:s.avgPricePerLiter})]})]})})),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(R,{}),Object(n.jsx)("br",{}),Object(n.jsx)(g.d,{initialValues:{startDate:t,endDate:a},onSubmit:this.onSubmit,validateOnChange:!1,validateOnBlur:!1,validate:this.validate,enableReinitialize:!0,children:function(e){return Object(n.jsxs)(g.c,{children:[Object(n.jsxs)("fieldset",{className:"input-group mb-3",children:[Object(n.jsx)("span",{className:"input-group-text",children:"start date"}),Object(n.jsx)(g.a,{name:"startDate",component:"span",className:"alert alert-warning"}),Object(n.jsx)(g.b,{className:"form-control",type:"date",name:"startDate"}),Object(n.jsx)("span",{className:"input-group-text",children:"end date"}),Object(n.jsx)(g.a,{name:"endDate",component:"span",className:"alert alert-warning"}),Object(n.jsx)(g.b,{className:"form-control",type:"date",name:"endDate"})]}),Object(n.jsx)("button",{className:"btn btn-success",type:"submit",children:"Get"})]})}}),e]})}}]),a}(s.Component),Y=(s.Component,function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)(j.a,{basemname:"".concat(""),children:Object(n.jsxs)(b.d,{children:[Object(n.jsx)(b.b,{exact:!0,path:"",component:U}),Object(n.jsx)(F,{path:"/cars/:carId/refuels/:refuelId",component:z}),Object(n.jsx)(F,{path:"/cars/:carId/refuels/",component:E}),Object(n.jsx)(F,{path:"/cars/:carId/stats",component:V}),Object(n.jsx)(F,{path:"/cars/:carId",component:A}),Object(n.jsx)(F,{path:"/cars",component:B}),Object(n.jsx)(b.b,{path:"/register",component:I}),Object(n.jsx)(b.b,{path:"/login",component:C}),Object(n.jsx)(F,{path:"/logout",component:D})]})})})}}]),a}(s.Component)),H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,77)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(Y,{})}),document.getElementById("root")),H()}},[[76,1,2]]]);
//# sourceMappingURL=main.9adecad9.chunk.js.map