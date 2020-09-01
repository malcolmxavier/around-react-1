(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/logo.8f7611ae.svg"},,,function(e,t,a){e.exports=a.p+"static/media/edit-button.93eceffd.svg"},function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),c=a.n(r),i=(a(13),a(1)),l=a(4),s=a.n(l);function m(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{className:"header__logo",src:s.a,alt:"Around The USA logo"}))}var u=a(5),d=a(6),p="".concat("users/me","/avatar"),f="".concat("cards","/likes"),h=new(function(){function e(t,a){Object(u.a)(this,e),this._baseUrl=t,this._options=a}return Object(d.a)(e,[{key:"_getDataPromise",value:function(e){return fetch("".concat(this._baseUrl,"/").concat(e),this._options).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.statusText))}))}},{key:"getUserInfo",value:function(){return this._options.method="GET",this._getDataPromise("users/me")}},{key:"getCards",value:function(){return this._options.method="GET",this._getDataPromise("cards")}},{key:"updateUserInfo",value:function(e){return this._options.method="PATCH",this._options.body=JSON.stringify(e),this._getDataPromise("users/me")}},{key:"updateUserAvatar",value:function(e){return this._options.method="PATCH",this._options.body=JSON.stringify({avatar:e}),this._getDataPromise(p)}},{key:"addCard",value:function(e,t){return this._options.method="POST",this._options.body=JSON.stringify({name:e,link:t}),this._getDataPromise("cards")}},{key:"removeCard",value:function(e){return this._options.method="DELETE",this._getDataPromise("".concat("cards","/").concat(e))}},{key:"addCardLike",value:function(e){return this._options.method="PUT",this._getDataPromise("".concat(f,"/").concat(e))}},{key:"removeCardLike",value:function(e){return this._options.method="DELETE",this._getDataPromise("".concat(f,"/").concat(e))}}]),e}())("https://around.nomoreparties.co/v1/group-3",{headers:{authorization:"aae17431-b773-4b38-a586-5c35cb6461b9","Content-Type":"application/json"}});function _(e){var t=e.card,a=e.onCardClick;return o.a.createElement("li",{className:"place"},o.a.createElement("img",{className:"place__picture",alt:"place",src:t.link,onClick:function(){return a(t)}}),o.a.createElement("button",{className:"trash-button"}),o.a.createElement("div",{className:"place__name-group"},o.a.createElement("h3",{className:"place__name"},t.name),o.a.createElement("div",{className:"like"},o.a.createElement("button",{className:"like__button"}),o.a.createElement("p",{className:"like__count"},t.likes.length))))}var E=a(7),b=a.n(E);function g(e){var t=o.a.useState(),a=Object(i.a)(t,2),n=a[0],r=a[1],c=o.a.useState(),l=Object(i.a)(c,2),s=l[0],m=l[1],u=o.a.useState(),d=Object(i.a)(u,2),p=d[0],f=d[1],E=o.a.useState([]),g=Object(i.a)(E,2),v=g[0],N=g[1];return o.a.useEffect((function(){h.getUserInfo().then((function(e){r(e.name),m(e.about),f(e.avatar)})).catch((function(e){return console.log(e)}))}),[]),o.a.useEffect((function(){h.getCards().then((function(e){return N(e)})).catch((function(e){return console.log(e)}))}),[]),o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__avatar-container"},o.a.createElement("img",{src:p,alt:"profile",className:"profile__avatar"}),o.a.createElement("img",{src:b.a,alt:"edit profile",className:"edit-button edit-button_place_avatar",onClick:e.onEditAvatar})),o.a.createElement("div",{className:"profile__info"},o.a.createElement("div",{className:"profile__person"},o.a.createElement("h1",{className:"profile__name"},n),o.a.createElement("button",{className:"edit-button",type:"button","aria-label":"edit profile",form:"edit-profile",id:"edit-profile-button",onClick:e.onEditProfile})),o.a.createElement("p",{className:"profile__title"},s)),o.a.createElement("button",{className:"add-button",type:"button",name:"open-button",onClick:e.onAddPlace})),o.a.createElement("section",{className:"elements"},o.a.createElement("ul",{className:"places"},v.map((function(t,a){return o.a.createElement(_,{card:t,key:a,onCardClick:e.onCardClick})})))))}function v(){return o.a.createElement("footer",null,o.a.createElement("p",{className:"footer"},"\xa9 2020 Around The U.S."))}function N(e){var t=e.onClose;return o.a.createElement("button",{type:"button",className:"form__close-button",onClick:t})}function k(e){return o.a.createElement("section",{className:e.isOpen?"".concat(e.name):"".concat(e.name," hide")},o.a.createElement("div",{className:"overlay"}),o.a.createElement("form",{className:"form",id:"edit-profile",noValidate:!0},o.a.createElement("h2",{className:"form__title"},e.title),e.children,o.a.createElement("button",{type:"submit",className:"form__save-button form__save-button_disabled",disabled:!0},e.submitButtonLabel),o.a.createElement(N,{onClose:e.onClose})))}function y(e){return o.a.createElement("section",{className:e.isOpen?"place-popup":"place-popup hide"},o.a.createElement("div",{className:"overlay overlay_opacity_darker"}),o.a.createElement("div",{className:"form form_display_pic"},o.a.createElement("img",{className:"form__pic",src:e.image,alt:e.title}),o.a.createElement("p",{className:"form__pic-name"},e.title),o.a.createElement(N,{onClose:e.onClose})))}function C(e){var t=e.type,a=e.name,n=e.placeHolder,r=e.minLength,c=e.maxLength,i=e.isRequired;return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{type:t,placeholder:n,name:a,className:"form__input form__input_type_".concat(a),id:a,minLength:r,maxLength:c,required:i}),o.a.createElement("span",{className:"form__input-error",id:"".concat(a,"-error")}))}var O=function(){var e=o.a.useState(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],r=o.a.useState(!1),c=Object(i.a)(r,2),l=c[0],s=c[1],u=o.a.useState(!1),d=Object(i.a)(u,2),p=d[0],f=d[1],h=o.a.useState(!1),_=Object(i.a)(h,2),E=_[0],b=_[1],N=o.a.useState({}),O=Object(i.a)(N,2),L=O[0],P=O[1],S=function(){a&&n(!1),l&&s(!1),p&&f(!1),E&&(P({}),b(!1))};return o.a.createElement("div",{className:"page"},o.a.createElement(m,null),o.a.createElement(g,{onEditProfile:function(){n(!0)},onAddPlace:function(){s(!0)},onEditAvatar:function(){f(!0)},onCardClick:function(e){P(e),b(!0)}}),o.a.createElement(k,{title:"Edit profile",name:"edit-profile-form",isOpen:a,onClose:S,submitButtonLabel:"Save"},o.a.createElement(C,{type:"text",name:"name",placeHolder:"Name",minLength:"2",maxLength:"40",isRequired:!0}),o.a.createElement(C,{type:"text",name:"about",placeHolder:"Title",minLength:"2",maxLength:"200",isRequired:!0})),o.a.createElement(k,{title:"New place",name:"new-place-form",isOpen:l,onClose:S,submitButtonLabel:"Create"},o.a.createElement(C,{type:"text",name:"name",placeHolder:"Title",minLength:"0",maxLength:"30",isRequired:!0}),o.a.createElement(C,{type:"url",name:"link",placeHolder:"Image Link",isRequired:!0})),o.a.createElement(k,{title:"Change profile picture",name:"edit-profile-picture",isOpen:p,onClose:S,submitButtonLabel:"Save"},o.a.createElement(C,{type:"url",name:"image-link",placeHolder:"Image Link",isRequired:!0})),o.a.createElement(y,{image:L.link,title:L.name,isOpen:E,onClose:S}),o.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.21827d04.chunk.js.map