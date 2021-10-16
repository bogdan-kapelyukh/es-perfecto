(this["webpackJsonpspanish-webapp"]=this["webpackJsonpspanish-webapp"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('"[{\\"spanishInfinitive\\":\\"hablar\\",\\"englishPast\\":\\"spoke\\",\\"englishPresent\\":\\"speak\\",\\"past\\":[\\"habl\xe9\\",\\"hablaste\\",\\"habl\xf3\\",\\"hablamos\\",\\"hablasteis\\",\\"hablaron\\"],\\"present\\":[\\"hablo\\",\\"hablas\\",\\"habla\\",\\"hablamos\\",\\"habl\xe1is\\",\\"hablan\\"],\\"isRegular\\":true},{\\"spanishInfinitive\\":\\"comer\\",\\"englishPast\\":\\"ate\\",\\"englishPresent\\":\\"eat\\",\\"past\\":[\\"com\xed\\",\\"comiste\\",\\"comi\xf3\\",\\"comimos\\",\\"comisteis\\",\\"comieron\\"],\\"present\\":[\\"como\\",\\"comes\\",\\"come\\",\\"comemos\\",\\"com\xe9is\\",\\"comen\\"],\\"isRegular\\":true},{\\"spanishInfinitive\\":\\"nadar\\",\\"englishPast\\":\\"swam\\",\\"englishPresent\\":\\"swim\\",\\"past\\":[\\"nad\xe9\\",\\"nadaste\\",\\"nad\xf3\\",\\"nadamos\\",\\"nadasteis\\",\\"nadaron\\"],\\"present\\":[\\"nado\\",\\"nadas\\",\\"nada\\",\\"nadamos\\",\\"nad\xe1is\\",\\"nadan\\"],\\"isRegular\\":true},{\\"spanishInfinitive\\":\\"vivir\\",\\"englishPast\\":\\"lived\\",\\"englishPresent\\":\\"live\\",\\"past\\":[\\"viv\xed\\",\\"viviste\\",\\"vivi\xf3\\",\\"vivimos\\",\\"vivisteis\\",\\"vivieron\\"],\\"present\\":[\\"vivo\\",\\"vives\\",\\"vive\\",\\"vivimos\\",\\"viv\xeds\\",\\"viven\\"],\\"isRegular\\":true}]"')},31:function(e,t,s){},32:function(e,t,s){"use strict";s.r(t);var n=s(5),a=s(3),i=s.n(a),l=s(15),r=s.n(l),c=s(14);function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}function d(e){return e[Math.floor(Math.random()*e.length)]}function b(e){return!!/^[a-z\xe1\xe9\xed\xf3\xfa\xfc\xf1]*$/i.test(e)||(window.alert("Please only type letters that are in the spanish alphabet: a-z and \xe1\xe9\xed\xf3\xfa\xfc\xf1"),!1)}var h=s(6),u=s(2),p=s(4),j=s(9),x=s(0);var m=function(e){var t=e.divClassName,s=e.textFieldClassName,n=e.textFieldPlaceHolder,a=e.labelText,i=e.sharedId,l=e.textFieldValue,r=e.textFieldOnChange,c=e.requireTextField,o=e.disableTextField,d=e.maxLength,b=e.textFieldTabIndex;return Object(x.jsxs)("div",{className:t,children:[Object(x.jsx)("label",{htmlFor:i,children:a}),Object(x.jsx)("input",{id:i,className:s,type:"text",value:l,onChange:r,placeholder:n,required:c,disabled:o,maxLength:d,tabIndex:b})]})},f="flex flex-col space-y-2";function g(e){var t=e.verbToAdd,s=e.setVerbToAdd,n=[{code:"yo",display:"Yo"},{code:"t\xfa",display:"T\xfa"},{code:"\xe9l",display:"\xc9l/ella/usted"},{code:"nosotros",display:"Nosotros/nosotras"},{code:"vosotros",display:"Vosotros/vosotras"},{code:"ellos",display:"Ellos/ellas/ustedes"}];return Object(x.jsxs)("div",{className:"fixed inset-0 z-20 overflow-scroll bg-gray-50 px-10 py-8 ".concat(e.displayed?"transform-none transition-transform duration-500 visible":"transform translate-y-full transition-transform duration-500 invisible","\n      lg:w-max\n      lg:mx-auto\n      md:overflow-y-auto\n      "),ref:e.outerDivRef,children:[Object(x.jsxs)("div",{className:"flex items-start",children:[Object(x.jsx)("h1",{className:"font-black text-4xl uppercase",children:"Add/edit a verb"}),Object(x.jsx)("button",{onClick:function(){e.resetVaw()},className:"ml-auto text-4xl",tabIndex:e.displayed?0:-1,children:Object(x.jsx)(p.a,{icon:j.b,className:"hover:text-blue-700"})})]}),Object(x.jsxs)("form",{className:"mt-10",onSubmit:function(s){s.preventDefault(),-1===t.past.indexOf("")&&-1===t.present.indexOf("")?e.handleSubmit(t):window.alert("Make sure all fields are filled in.")},children:[Object(x.jsx)("p",{className:"font-bold text-xl",children:"The verb is ..."}),Object(x.jsx)("p",{className:"font-normal text-gray-500 text-base leading-tight mt-2",children:"Regular verbs will autocomplete entries based on what is in the 'Spanish infinitive' box"}),Object(x.jsxs)("ul",{className:"flex space-x-2 mt-4",children:[Object(x.jsxs)("li",{className:"button flex space-x-2 items-center px-2 py-1 border-2  ".concat(t.isRegular?"button-on border-blue-700":"button-off border-transparent"),onClick:function(){return s(Object(u.a)(Object(u.a)({},t),{},{isRegular:!0}))},children:[Object(x.jsx)("label",{htmlFor:"regular",children:"Regular"}),Object(x.jsx)("input",{type:"radio",name:"isRegular",id:"regular",value:"true",checked:!0===t.isRegular,onChange:function(){return s(Object(u.a)(Object(u.a)({},t),{},{isRegular:!0}))},tabIndex:e.displayed?0:-1})]}),Object(x.jsxs)("li",{className:"flex space-x-2 items-center button px-2 py-1 border-2 ".concat(t.isRegular?"button-off border-transparent":"button-on border-blue-700"),onClick:function(){return s(Object(u.a)(Object(u.a)({},t),{},{isRegular:!1}))},children:[Object(x.jsx)("label",{htmlFor:"irregular",children:"Irregular"}),Object(x.jsx)("input",{type:"radio",name:"isRegular",id:"irregular",value:"false",checked:!1===t.isRegular,onChange:function(){return s(Object(u.a)(Object(u.a)({},t),{},{isRegular:!1}))},tabIndex:e.displayed?0:-1})]})]}),Object(x.jsx)("hr",{className:"mt-4"}),Object(x.jsxs)("div",{className:"flex flex-col md:flex-row md:justify-center md:space-x-8 space-y-2 md:space-y-0 mt-4",children:[Object(x.jsx)(m,{divClassName:f,textFieldClassName:"normal-input",labelText:Object(x.jsxs)(x.Fragment,{children:["Spanish Infinitive ",Object(x.jsx)(p.a,{icon:j.a})]}),sharedId:"spanishInfinitive",textFieldValue:t.spanishInfinitive,textFieldOnChange:function(e){b(e.target.value)&&s((function(){var s=e.target.value.toLowerCase();if(t.isRegular){var n=function(e){var t=e.slice(-2),s=e.slice(0,-2),n={};return"ar"===t?(n.past=[s+"\xe9",s+"aste",s+"\xf3",s+"amos",s+"asteis",s+"aron"],n.present=[s+"o",s+"as",s+"a",s+"amos",s+"\xe1is",s+"an"]):"er"===t?(n.past=[s+"\xed",s+"iste",s+"i\xf3",s+"imos",s+"isteis",s+"ieron"],n.present=[s+"o",s+"es",s+"e",s+"emos",s+"\xe9is",s+"en"]):"ir"===t?(n.past=[s+"\xed",s+"iste",s+"i\xf3",s+"imos",s+"isteis",s+"ieron"],n.present=[s+"o",s+"es",s+"e",s+"imos",s+"\xeds",s+"en"]):(n.past=Array(6).fill(e),n.present=Array(6).fill(e)),n}(s);return Object(u.a)(Object(u.a)({},t),{},{spanishInfinitive:s,past:n.past,present:n.present})}return Object(u.a)(Object(u.a)({},t),{},{spanishInfinitive:s})}))},requireTextField:!0,maxLength:25,textFieldTabIndex:e.displayed?0:-1}),Object(x.jsx)(m,{divClassName:f,textFieldClassName:"normal-input",labelText:Object(x.jsxs)(x.Fragment,{children:["English Past ",Object(x.jsx)(p.a,{icon:j.a})]}),sharedId:"englishPast",textFieldValue:t.englishPast,textFieldOnChange:function(e){b(e.target.value)&&s(Object(u.a)(Object(u.a)({},t),{},Object(h.a)({},e.target.id,e.target.value.toLowerCase())))},requireTextField:!0,maxLength:25,textFieldTabIndex:e.displayed?0:-1}),Object(x.jsx)(m,{divClassName:f,textFieldClassName:"normal-input",labelText:Object(x.jsxs)(x.Fragment,{children:["English Present ",Object(x.jsx)(p.a,{icon:j.a})]}),sharedId:"englishPresent",textFieldValue:t.englishPresent,textFieldOnChange:function(e){if(/to /i.test(e.target.value))return window.alert("Please enter the present tense english as just one word e.g. 'speak'\nNOT 'to speak'"),void s(Object(u.a)(Object(u.a)({},t),{},{englishPresent:""}));b(e.target.value)&&s(Object(u.a)(Object(u.a)({},t),{},{englishPresent:e.target.value.toLowerCase()}))},requireTextField:!0,maxLength:25,textFieldTabIndex:e.displayed?0:-1})]}),Object(x.jsx)("hr",{className:"mt-8"}),Object(x.jsx)("div",{className:"sm:flex sm:justify-center sm:px-5 md:px-10 sm:space-x-8 md:space-x-6 lg:space-x-10",children:["past","present"].map((function(a,l){return Object(x.jsxs)(i.a.Fragment,{children:[Object(x.jsxs)("div",{className:"flex flex-col space-y-2 mt-4",children:[Object(x.jsxs)("h2",{className:"font-bold text-xl mb-2 md:text-right",children:[o(a)," Tense"]}),n.map((function(n,i){return Object(x.jsx)(m,{divClassName:"flex flex-col space-y-2 md:flex-row md:items-center md:space-x-2 md:justify-end",textFieldClassName:t.isRegular?"autocomplete-field":"normal-input",textFieldPlaceHolder:t.isRegular?"Box will autocomplete":"",labelText:n.display,sharedId:n.code+"0",textFieldValue:t[a][i],textFieldOnChange:function(e){return function(e,n,a){b(e.target.value)&&s(Object(u.a)(Object(u.a)({},t),{},Object(h.a)({},n,function(e,t,s){var n=e.slice();return n[t]=s,n}(t[n],a,e.target.value.toLowerCase()))))}(e,a,i)},requireTextField:!0,disableTextField:!!t.isRegular,maxLength:25,textFieldTabIndex:e.displayed?0:-1},n.code+"0")}))]}),-1!==l?Object(x.jsx)("hr",{className:"mt-8"}):null]},a)}))}),Object(x.jsx)("button",{className:"mt-4 button bg-yellow-300 px-4 py-2 hover:bg-yellow-700 sm:mx-auto sm:block sm:mt-12 lg:mt-16",type:"submit",tabIndex:e.displayed?0:-1,children:"Submit"})]})]})}var O={spanishInfinitive:"",englishPast:"",englishPresent:"",past:["","","","","",""],present:["","","","","",""],isRegular:!0};function v(e){var t=Object(a.useState)(O),s=Object(n.a)(t,2),l=s[0],r=s[1],d=Object(a.useRef)(null),b=e.vawIsDisplayed,h=e.setVawIsDisplayed,u=e.selectedVerbs,p=e.setSelectedVerbs,j=e.listOfVerbs,m=e.setListOfVerbs;function f(){h(!1),r(O),d.current.scrollTop=0,document.activeElement.blur()}function v(e){r(JSON.parse(e.currentTarget.getAttribute("data-verb-object"))),h(!0)}var y=Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{className:"font-black",children:"-"})," Delete Verb",u.length>1?"s":""]}),N="button bg-warmGray-300 text-warmGray-500 cursor-default",w=!0;return 0!==u.length&&j.length!==u.length&&(w=!1,N="button button-off active:bg-red-900",y=Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{className:"text-red-700 font-black",children:"-"})," Delete Verb",u.length>1?"s":""]})),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("section",{className:"px-8 py-4 md:w-1/2 xl:w-1/3",ref:e.selfRef,children:[Object(x.jsx)("h1",{className:"font-black text-4xl uppercase",children:"Manage Verbs"}),Object(x.jsxs)("div",{className:"flex space-x-4 mt-8",children:[Object(x.jsxs)("button",{onClick:function(){h(!0)},className:"button stateless-button px-2 py-1",children:[Object(x.jsx)("span",{className:"text-blue-700 font-black",children:"+"})," Add New Verb"]}),Object(x.jsx)("button",{onClick:function(){var e=j.slice();if(1===e.length)window.alert("Cannot delete last remaining verb.");else{var t,s,n=Object(c.a)(u);try{for(n.s();!(s=n.n()).done;){for(var a=s.value,i=0;i<e.length;i++)if(a.spanishInfinitive===e[i].spanishInfinitive){t=i;break}e.splice(t,1)}}catch(l){n.e(l)}finally{n.f()}0!==e.length?(m(e),p([])):window.alert("Cannot delete last remaining verb.")}},className:"".concat(N," px-2 py-1"),disabled:w,children:y})]}),Object(x.jsxs)("ul",{className:"list-disc list-inside mt-8",children:[Object(x.jsx)("li",{className:"subtitle-text",children:"Double click a verb row to edit it"}),Object(x.jsx)("li",{className:"subtitle-text mt-2",children:"Click/tap anywhere to deselect"})]}),Object(x.jsxs)("table",{className:"mt-8 simple-table",children:[Object(x.jsx)("thead",{className:"subtitle-text",children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Spanish Infinitive"}),Object(x.jsx)("th",{children:"English Infinitive"}),Object(x.jsx)("th",{className:"hidden lg:table-cell",children:"Ending Type"}),Object(x.jsx)("th",{className:"hidden lg:table-cell",children:"Is Regular?"})]})}),Object(x.jsx)("tbody",{children:j.map((function(e){var t,s="hover:bg-warmGray-400",n=Object(c.a)(u);try{for(n.s();!(t=n.n()).done;){var a=t.value;e.spanishInfinitive===a.spanishInfinitive&&(s="bg-blue-300 hover:bg-blue-400")}}catch(l){n.e(l)}finally{n.f()}return Object(x.jsx)(i.a.Fragment,{children:Object(x.jsxs)("tr",{onDoubleClick:v,onClick:function(t){return function(e,t){e.stopPropagation();var s=u.slice(),n=s.findIndex((function(e){return e.spanishInfinitive===t.spanishInfinitive}));-1!==n?s.splice(n,1):s.push(t),p(s)}(t,e)},"data-verb-object":JSON.stringify(e),className:"".concat(s," cursor-pointer"),children:[Object(x.jsx)("td",{children:o(e.spanishInfinitive)}),Object(x.jsxs)("td",{children:["To ",e.englishPresent]}),Object(x.jsx)("td",{className:"hidden lg:table-cell",children:e.isRegular?e.spanishInfinitive.slice(-2):"N/A"}),Object(x.jsx)("td",{className:"hidden lg:table-cell",children:e.isRegular?"Regular":"Irregular"})]})},e.spanishInfinitive)}))})]})]}),Object(x.jsx)("div",{className:"fixed inset-0 z-10 bg-black bg-opacity-50 ".concat(b?"block":"hidden"),onClick:function(){f()}}),Object(x.jsx)(g,{resetVaw:f,outerDivRef:d,displayed:b,setDisplayed:h,verbToAdd:l,setVerbToAdd:r,handleSubmit:function(e,t){for(var s=j.slice(),n=!1,a=0;a<s.length;a++)if(e.spanishInfinitive===s[a].spanishInfinitive){n=!0,s[a]=e;break}n||s.push(e),m(s),f()}})]})}var y=s(16),N=s(17),w=s(7),I=s(20),C=s(19);var k=function(e){return Object(x.jsx)("ul",{className:e.listClassNames,children:e.labelsArray.map((function(t,s){var n,a;return e.valuesArray[s]?(n=e.onStyle,a=e.onMarker):(n=e.offStyle,a=e.offMarker),Object(x.jsx)("li",{children:Object(x.jsxs)("button",{className:"".concat(e.buttonStyle," ").concat(n),onClick:function(){return e.handleButtonClick(s)},tabIndex:e.buttonTabIndex||"0",children:[t," ",a]})},t+String(s))}))})},F=s(10),T=function(e){Object(I.a)(s,e);var t=Object(C.a)(s);function s(e){var n;return Object(y.a)(this,s),(n=t.call(this,e)).handleTenseChange=function(e){var t=n.state.selectedTenses.map((function(t,s){return e===s?!t:t}));-1===t.indexOf(!0)?window.alert("Make sure you have at least one tense selected."):n.setState({selectedTenses:t})},n.handleInputChange=function(e){var t=e.target.value;n.setState({input:t})},n.handleNewQuestion=function(){var e=[];n.state.selectedTenses.forEach((function(t,s){t&&e.push(s)}));var t=function(e,t){var s,n,a=["voy","vas","va","vamos","v\xe1is","van"],i=d([{spanish:"yo",english:"i"},{spanish:"t\xfa",english:"you (informal)"},{spanish:"\xe9l",english:"he"},{spanish:"ella",english:"she"},{spanish:"usted",english:"you (formal)"},{spanish:"nosotros",english:"we (m)"},{spanish:"nosotras",english:"we (f)"},{spanish:"vosotros",english:"you (pl, m)"},{spanish:"vosotras",english:"you (pl, f)"},{spanish:"ellos",english:"they (m)"},{spanish:"ellas",english:"they (f)"},{spanish:"ustedes",english:"they (formal)"}]),l={yo:0,"t\xfa":1,"\xe9l":2,ella:2,usted:2,nosotros:3,nosotras:3,vosotros:4,vosotras:4,ellos:5,ellas:5,ustedes:5}[i.spanish];return 0===t?(s={normalArray:[i.spanish,e.past[l]],prodropArray:[e.past[l]]},n=[i.english,e.englishPast]):1===t?(s={normalArray:[i.spanish,e.present[l]],prodropArray:[e.present[l]]},n="\xe9l"===i.spanish||"ella"===i.spanish?[i.english,e.englishPresent+"s"]:[i.english,e.englishPresent]):2===t?(s={normalArray:[i.spanish,a[l],"a",e.spanishInfinitive],prodropArray:[a[l],"a",e.spanishInfinitive]},n=[i.english,"usted"!==i.spanish?["am","are","is","are","are","are"][l]:"are","going","to",e.englishPresent]):console.error("Invalid tense argument passed to makeSentenceObject function: ".concat(t)),{spanishSentencesObject:s,englishSentence:n}}(d(n.props.listOfVerbs),d(e));n.setState({question:t.englishSentence,answers:t.spanishSentencesObject})},n.handleSubmit=function(e){e.preventDefault();for(var t=n.state.answers,s=n.state.input.trim().toLowerCase(),a=[],l=[],r=0;r<s.length;r++)" "!==s.charAt(r)?r===s.length-1?(l.push(s.charAt(r)),a.push(l.join("")),l=[]):l.push(s.charAt(r)):(a.push(l.join("")),l=[]);a=a.filter((function(e){return e}));var c=!0,o=[];a.join(" ")===t.prodropArray.join(" ")||a.join(" ")===t.normalArray.join(" ")?o.push(Object(x.jsx)("span",{className:"correct-feedback",children:a.join(" ")},a.join(" "))):(c=!1,a.length!==t.normalArray.length?o.push(Object(x.jsx)("span",{className:"wrong-feedback",children:a.join(" ")},a.join(" "))):a.forEach((function(e,s){var n=" ";s===t.normalArray.length-1&&(n=""),e===t.normalArray[s]?o.push(Object(x.jsxs)(i.a.Fragment,{children:[Object(x.jsx)("span",{className:"correct-feedback",children:e}),n]},e+s.toString())):o.push(Object(x.jsxs)(i.a.Fragment,{children:[Object(x.jsx)("span",{className:"wrong-feedback",children:e}),n]},e+s.toString()))}))),n.setState({feedbackMessage:{question:n.state.question.join(" "),isCorrect:c,userInputSpansArray:o,actualAnswer:t.normalArray.join(" ")},input:""}),n.handleNewQuestion()},n.state={question:null,answers:null,input:"",feedbackMessage:null,selectedTenses:[!1,!0,!0]},n.clearInputAndNewQuestion=n.clearInputAndNewQuestion.bind(Object(w.a)(n)),n.handleTenseChange=n.handleTenseChange.bind(Object(w.a)(n)),n}return Object(N.a)(s,[{key:"componentDidMount",value:function(){this.handleNewQuestion()}},{key:"clearInputAndNewQuestion",value:function(){this.setState({input:""}),this.handleNewQuestion()}},{key:"render",value:function(){var e,t=this,s=this.state.question,n=this.state.input,a=this.state.feedbackMessage,i=this.state.selectedTenses;return e=a?Object(x.jsxs)(x.Fragment,{children:[a.isCorrect?Object(x.jsx)("p",{className:"font-bold text-blue-700",children:"CORRECT"}):Object(x.jsx)("p",{className:"font-bold text-red-700",children:"INCORRECT"}),Object(x.jsxs)("p",{children:["English phrase: ",o(a.question)]}),Object(x.jsxs)("p",{children:["Your answer: ",a.userInputSpansArray]}),Object(x.jsxs)("p",{children:["Correct answer: ",a.actualAnswer]})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("p",{children:"..."}),Object(x.jsx)("p",{children:"English phrase: "}),Object(x.jsx)("p",{children:"Your answer: "}),Object(x.jsx)("p",{children:"Correct answer: "})]}),Object(x.jsxs)("section",{ref:this.props.selfRef,className:"px-8 pt-4 pb-10 md:w-1/2 xl:w-1/3",children:[Object(x.jsxs)("header",{className:"pb-4",children:[Object(x.jsx)("h1",{className:"font-black text-4xl uppercase",children:"Practice"}),Object(x.jsx)("h2",{className:"mt-8",children:"Select Tenses:"}),Object(x.jsx)(k,{listClassNames:"flex space-x-2 mt-1",buttonStyle:"button mt-2 px-2 py-1 group",onStyle:"button-on",onMarker:Object(x.jsx)(p.a,{icon:F.c,style:{width:"1em"},className:"fa-icon-on-button"}),offStyle:"button-off",offMarker:Object(x.jsx)(p.a,{icon:F.d,style:{width:"1em"},className:"fa-icon-off-button"}),labelsArray:["Past","Present","Future"],valuesArray:i,handleButtonClick:this.handleTenseChange,buttonTabIndex:this.props.vawIsDisplayed?"-1":"0"}),Object(x.jsx)("button",{className:"button stateless-button mt-2 px-2 py-1",onClick:this.clearInputAndNewQuestion,tabIndex:this.props.vawIsDisplayed?"-1":"0",children:"Generate Different Question"}),Object(x.jsx)("hr",{className:"mt-4"}),Object(x.jsxs)("p",{className:"mt-4 subtitle-text tracking-wider text-xs",children:["Translate the following english phrase into spanish:"," "]}),Object(x.jsx)("p",{className:"text-2xl font-bold",children:s?o(s.join(" ")):null})]}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("form",{className:"flex space-x-2",onSubmit:this.handleSubmit,children:[Object(x.jsx)("input",{className:"normal-input flex-grow",placeholder:"Enter answer here...",type:"text",required:!0,value:n,onChange:function(e){return t.handleInputChange(e)},maxLength:"50",tabIndex:this.props.vawIsDisplayed?"-1":"0"}),Object(x.jsx)("button",{className:"button stateless-button px-4 py-1",type:"submit",tabIndex:this.props.vawIsDisplayed?"-1":"0",children:Object(x.jsx)(p.a,{icon:F.b})})]}),Object(x.jsx)("section",{className:"mt-2 lg:mt-8",children:e}),Object(x.jsxs)("a",{href:"#verb-manager",className:"text-center block mt-32 font-semibold md:hidden",onClick:function(){t.props.sectionBelow.current.scrollIntoView({behavior:"smooth"})},children:["Manage which verbs you're tested on",Object(x.jsx)("br",{}),Object(x.jsx)(p.a,{icon:F.a})]})]})]})}}]),s}(i.a.Component),S=s(18);s(31);function A(){var e=Object(a.useState)(JSON.parse(S)),t=Object(n.a)(e,2),s=t[0],i=t[1],l=Object(a.useRef)(null),r=Object(a.useRef)(null),c=Object(a.useState)([]),o=Object(n.a)(c,2),d=o[0],b=o[1],h=Object(a.useState)(!1),u=Object(n.a)(h,2),p=u[0],j=u[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("main",{onClick:function(){b([])},className:"md:flex md:justify-center md:pt-28 min-h-screen pb-44",children:[Object(x.jsx)(T,{listOfVerbs:s,sectionBelow:l,selfRef:r,vawIsDisplayed:p}),Object(x.jsx)(v,{vawIsDisplayed:p,setVawIsDisplayed:j,selectedVerbs:d,setSelectedVerbs:b,selfRef:l,listOfVerbs:s,setListOfVerbs:i,sectionAbove:r})]}),Object(x.jsx)("footer",{className:"text-center text-warmGray-700 text-xs py-2 bg-blue-300",children:"By Bogdan Kapelyukh"})]})}r.a.render(Object(x.jsx)(A,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.4f3d2f6b.chunk.js.map