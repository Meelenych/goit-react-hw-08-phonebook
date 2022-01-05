(this["webpackJsonpgoit-react-hw-07-phonebookk"]=this["webpackJsonpgoit-react-hw-07-phonebookk"]||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(12),o=n.n(a),s=n(11),i=n(17),u=n.n(i),d=n(21),b=n(22),j=n(5),l=Object(b.a)({reducerPath:"contactsApi",baseQuery:Object(j.d)({baseUrl:"https://61d338ddb4c10c001712b88f.mockapi.io/"}),tagTypes:["Contacts"],endpoints:function(e){return{fetchContacts:e.query({query:function(){return"/contacts"},providesTags:["Contacts"]}),createContact:e.mutation({query:function(e){return{url:"/contacts",method:"POST",body:{name:e.name,number:e.number}}},invalidatesTags:["Contacts"]}),deleteContact:e.mutation({query:function(e){return{url:"/contacts/".concat(e),method:"DELETE"}},invalidatesTags:["Contacts"]})}}}),h=l.useFetchContactsQuery,m=l.useCreateContactMutation,O=l.useDeleteContactMutation,p=n(15),f=n.n(p),x=(n(20),n(2));function g(){var e=m(),t=Object(s.a)(e,2),n=t[0],c=t[1].isLoading,r=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n({name:t.currentTarget.elements.name.value,number:t.currentTarget.elements.number.value}),t.currentTarget.reset();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{children:"Phonebook"}),Object(x.jsxs)("form",{onSubmit:r,children:[Object(x.jsxs)("label",{children:["Name",Object(x.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(x.jsxs)("label",{children:["Number",Object(x.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(x.jsx)("button",{type:"submit",children:c?Object(x.jsx)(f.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}):"Add contact"})]})]})}function v(e){var t=e.onChange,n=e.value;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("label",{children:["Find contacts by name",Object(x.jsx)("input",{type:"text",value:n,onChange:t})]})})}function C(e){var t=e.data,n=e.onDelete,c=e.deleting;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{children:"Contacts"}),Object(x.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.name,a=e.number;return Object(x.jsxs)("li",{children:[Object(x.jsxs)("p",{children:[" ","".concat(r,": ").concat(a)]}),Object(x.jsx)("button",{id:t,onClick:function(){return n(t)},type:"button",className:"btn",children:c?Object(x.jsx)(f.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}):"Delete"})]},t)}))})]})}n(54);function y(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],a=h(),o=a.data,i=a.isFetching,u=O(),d=Object(s.a)(u,2),b=d[0],j=d[1].isLoading;console.log(h());return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(g,{}),Object(x.jsx)(v,{onChange:function(e){return r(e.target.value)}}),i?Object(x.jsx)("h1",{children:"Loading..."}):Object(x.jsx)(C,{data:function(e){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))}(o),onDelete:b,deleting:j})]})}var w=n(6),F=n(24),k=n(14),T=n(1),A=Object(T.a)({reducer:Object(k.a)({},l.reducerPath,l.reducer),middleware:function(e){return[].concat(Object(F.a)(e()),[l.middleware])},devtools:!1});Object(j.e)(A.dispatch),o.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(w.a,{store:A,children:Object(x.jsx)(y,{})})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.b0dfb194.chunk.js.map