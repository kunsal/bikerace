(this.webpackJsonpbikerace=this.webpackJsonpbikerace||[]).push([[0],{119:function(e){e.exports=JSON.parse('[{"id":1,"firstName":"Dustin","lastName":"Green","city":"Hickory Hills","state":"IL","location":{"lat":40,"lng":-105.35}},{"id":2,"firstName":"Jason","lastName":"Finn","city":"Huntington Beach","state":"CA","location":{"lat":39.95,"lng":-105.24}},{"id":3,"firstName":"Howard","lastName":"Thompson","city":"Hale","state":"MO","location":{"lat":40.06,"lng":-105.26}},{"id":4,"firstName":"Maggie","lastName":"Lantz","city":"Dublin","state":"OH","location":{"lat":40.03,"lng":-105.23}},{"id":5,"firstName":"Lawrence","lastName":"Duran","city":"Fort Myers","state":"FL","location":{"lat":40.04,"lng":-105.23}},{"id":6,"firstName":"Irene","lastName":"Molina","city":"Tucson","state":"AZ","location":{"lat":39.96,"lng":-105.22}},{"id":7,"firstName":"Nancy","lastName":"Garner","city":"Baltimore","state":"MD","location":{"lat":39.98,"lng":-105.21}},{"id":8,"firstName":"Tara","lastName":"Taylor","city":"Minneapolis","state":"MN","location":{"lat":40,"lng":-105.25}},{"id":9,"firstName":"Alejandro","lastName":"Smith","city":"Scarborough","state":"ME","location":{"lat":40.02,"lng":-105.26}},{"id":10,"firstName":"Tricia","lastName":"Renshaw","city":"Mystic","state":"CT","location":{"lat":40.02,"lng":-105.3}},{"id":11,"firstName":"Travis","lastName":"Cook","city":"Twin Lakes","state":"WI","location":{"lat":40.01,"lng":-105.2}},{"id":12,"firstName":"Joan","lastName":"Brooks","city":"Norfolk","state":"VA","location":{"lat":39.98,"lng":-105.24}},{"id":13,"firstName":"Joseph","lastName":"Rodgers","city":"Wayne","state":"NJ","location":{"lat":39.99,"lng":-105.25}},{"id":14,"firstName":"Matthew","lastName":"Gregson","city":"Brashear","state":"MO","location":{"lat":40.01,"lng":-105.29}},{"id":15,"firstName":"Katie","lastName":"Dunlap","city":"Marion","state":"VA","location":{"lat":39.97,"lng":-105.27}},{"id":16,"firstName":"Leo","lastName":"Howard","city":"Dallas","state":"TX","location":{"lat":39.97,"lng":-105.33}},{"id":17,"firstName":"Maria","lastName":"Baisden","city":"Raleigh","state":"NC","location":{"lat":40,"lng":-105.29}},{"id":18,"firstName":"Sandy","lastName":"Townsend","city":"Newport","state":"PA","location":{"lat":40.05,"lng":-105.3}},{"id":19,"firstName":"Melinda","lastName":"Stephenson","city":"Kahului","state":"HI","location":{"lat":39.99,"lng":-105.31}},{"id":20,"firstName":"Jason","lastName":"Nichols","city":"Alexandria","state":"VA","location":{"lat":40.01,"lng":-105.32}}]')},189:function(e){e.exports=JSON.parse('[{"time":"8:00","segment":"Warm-up","description":"Participants do not run a marathon to win. More important for most runners is their personal finish time and their placement within their gender and age."},{"time":"8:30","segment":"Start","description":"Strategies for completing a marathon include running the whole distance and a run-walk strategy. Average time is 4 hours 32 minutes."},{"time":"12:00","segment":"Finish","description":"A goal many runners aim for is to break certain time barriers. For example, first-timers often try to run the marathon under 4 hours."},{"time":"1:00","segment":"Prize Presentation","description":"The winners will be presented with Prizes as per Gold, Silver and Bronze."}]')},205:function(e,t,a){e.exports=a(435)},210:function(e,t,a){},212:function(e,t,a){},214:function(e,t,a){},435:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(39),c=a.n(l),s=(a(210),a(11)),o=a(12),i=a(21),u=a(20),m=(a(211),a(212),a(445)),p=a(438),h=a(444),d=a(47),g=a(6),f=a.n(g),v=a(10),E=(a(214),a(437)),b=a(439),y=a(440),k=a(441),N=a(190),w=a(442),x=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={days:"00",hours:"00",minutes:"00",seconds:"00",timeUp:!1},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){var t=+new Date(e.props.date)-+new Date;if(t<1)e.setState({timeUp:!0});else{var a=Math.floor(t/864e5),n=Math.floor(t/36e5%24),r=Math.floor(t/6e4%60),l=Math.floor(t/1e3%60);e.setState({hours:n>9?n:"0".concat(n),minutes:r>9?r:"0".concat(r),seconds:l>9?l:"0".concat(l),days:a})}}),1e3)}},{key:"render",value:function(){var e=this.state,t=e.days,a=e.hours,n=e.minutes,l=e.seconds,c=t>1?"days":"day";return e.timeUp?r.a.createElement("p",null,"Event in progress"):r.a.createElement("p",null,"".concat(t," ").concat(c," ").concat(a," hours ").concat(n," minutes ").concat(l," seconds"))}}]),a}(n.Component),j=a(189),O=a(119),S=a(120),M=a.n(S),C=new(function(){function e(){Object(s.a)(this,e)}return Object(o.a)(e,[{key:"getSchedule",value:function(){return j}},{key:"getBikers",value:function(){return O}},{key:"getBiker",value:function(e){return O.find((function(t){return t.id==e}))}},{key:"postSlogan",value:function(){var e=Object(v.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.post("".concat("https://kunsal-boulder-api.herokuapp.com","/submissions"),t);case 3:if(201!=(a=e.sent).status){e.next=6;break}return e.abrupt("return",a);case 6:e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getPhotos",value:function(){var e=Object(v.a)(f.a.mark((function e(t,a){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat("8a127f3f507ce1c4f302bc17a64dd455","&extras=&per_page=").concat(a,"&page=").concat(t,"&format=json&nojsoncallback=1&tags=bike,bicycle&tag_mode=and"),e.prev=1,e.next=4,M.a.get(n);case 4:return r=e.sent,console.log(r),e.abrupt("return",r.data.photos);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",e.t0.response);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,a){return e.apply(this,arguments)}}()}]),e}()),P=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={schedules:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.getSchedule();case 2:(t=e.sent).length>0&&this.setState({schedules:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.schedules;return r.a.createElement("div",null,r.a.createElement(E.a,null,r.a.createElement(p.a,null,r.a.createElement("p",null,"12 November / Boulder, Colorado"),r.a.createElement("h1",null,"Its Time To Race Again"),r.a.createElement("p",null,"In a race against time, the speed determines the winner!"),r.a.createElement(b.a,null,r.a.createElement(y.a,{variant:"primary",size:"lg"},"Register Now"),r.a.createElement("span",{className:"spacer"}),r.a.createElement(y.a,{variant:"secondary",size:"lg"},"Follow Us"))),r.a.createElement(p.a,{fluid:!0,className:"countdown"},r.a.createElement(k.a,null,r.a.createElement(N.a,null,r.a.createElement(x,{date:"01/02/2021"}))))),r.a.createElement(p.a,null,r.a.createElement(k.a,{className:"content-top"},r.a.createElement(N.a,null,r.a.createElement("h3",{className:"content-title"},"About Boulder Tour"))),r.a.createElement(k.a,{className:"content-body"},r.a.createElement(N.a,{md:8,sm:6},r.a.createElement("p",{className:"content-text"},"This is the epic MTB race in the Utah. The course is designed by trail-building legend (he'll hate us for saying that!) Peter Laing, and has regularly been voted the best in the country. Come and test yourself on a fantastic mix of natural singletrack, twin-track forest roads, ancient drove roads, hand-made singletrack, and trail centre. You'll visit the valleys of the Rivers Tweed, Yarrow and Ettrick, and of course, the high points in between. So, expect lung and thigh busting climbs that are rewarded with epic grin-inducing descents.")),r.a.createElement(N.a,{md:4,sm:6},r.a.createElement("h3",null),r.a.createElement(w.a,{src:"http://design4dj.com/tf/mtbrace/images/about_01.jpg?crc=228886927",rounded:!0,className:"img-fluid"}))),r.a.createElement(k.a,{className:"content-top"},r.a.createElement(N.a,null,r.a.createElement("h3",{className:"content-title"},"Event Schedule"))),r.a.createElement(k.a,{className:"content-body"},r.a.createElement(N.a,{md:4,sm:6},r.a.createElement("h3",null),r.a.createElement(w.a,{src:"https://images.pexels.com/photos/3642537/pexels-photo-3642537.jpeg?cs=srgb&dl=pexels-m%C3%ADdia-3642537.jpg&fm=jpg",rounded:!0,className:"img-fluid"})),r.a.createElement(N.a,{md:8,sm:6},e.map((function(e){return r.a.createElement("div",{className:"event-schedule"},r.a.createElement("h3",null,r.a.createElement("span",{className:"time"},e.time," am")," ",e.segment),r.a.createElement("p",null,e.description))}))))))}}]),a}(n.Component),T=function(e){var t=e.title;return r.a.createElement(E.a,{className:"shorter"},r.a.createElement(p.a,{className:"text-center"},r.a.createElement("h1",null,t)))},B=a(68),A=a(121),I=Object(A.a)(Object(A.b)({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyCs8rvda2R2CEy9tVbhzimcNl9R8ec54mQ&v=3.exp&libraries=geometry,drawing,places",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"400px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}),B.withScriptjs,B.withGoogleMap)((function(e){var t=e.coordinates,a=e.defaultLat,n=e.defaultLng,l=e.zoom;return r.a.createElement(B.GoogleMap,{defaultZoom:l||11,defaultCenter:{lat:a,lng:n}},t.map((function(e,t){var a=e.lat,n=e.lng;return r.a.createElement(B.Marker,{position:{lat:a,lng:n},icon:{url:"https://img.icons8.com/material-sharp/2x/bike-path.png"},key:t})})))})),L=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={coordinates:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.getBikers();case 2:t=e.sent,a=[],t.map((function(e){a.push({lat:e.location.lat,lng:e.location.lng})})),this.setState({coordinates:a});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,{title:"Bikers Location"}),r.a.createElement(I,{coordinates:this.state.coordinates,defaultLat:40.014984,defaultLng:-105.270546,zoom:12}))}}]),a}(n.Component),D=a(447),_=a(448),z=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1,photos:[],page:1,per_page:40,total_pages:0,total:0},e.getPhotos=function(){var t=Object(v.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.getPhotos(a,e.state.per_page);case 3:n=t.sent,e.setState({loading:!1,photos:n.photo,total:n.total,total_pages:n.pages}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.setState({loading:!1});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),e.incrementPage=Object(v.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((a=e.state.page+1)<e.state.total_pages/e.state.per_page)){t.next=7;break}return e.setState({page:a}),t.next=5,e.getPhotos(a);case 5:t.next=8;break;case 7:alert("This is the last page");case 8:case"end":return t.stop()}}),t)}))),e.decrementPage=Object(v.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((a=e.state.page-1)>0)){t.next=7;break}return e.setState({page:a}),t.next=5,e.getPhotos(a);case 5:t.next=8;break;case 7:alert("This is the first page");case 8:case"end":return t.stop()}}),t)}))),e.goToPage=function(){var t=Object(v.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({page:a}),t.next=3,e.getPhotos(a);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getPhotos(this.state.page);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.photos,n=t.page,l=t.total_pages,c=t.total,s=t.per_page;return r.a.createElement("div",null,r.a.createElement(T,{title:"Photo Gallery"}),r.a.createElement(p.a,null,r.a.createElement(k.a,{className:"content-top"},a.length>0?a.map((function(e){return r.a.createElement(N.a,null,r.a.createElement(D.a,{style:{width:"10rem",marginBottom:"10px"}},r.a.createElement(D.a.Img,{variant:"top",src:"https://live.staticflickr.com/".concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg")}),r.a.createElement(D.a.Body,null,r.a.createElement(D.a.Title,null,e.title))))})):"No photos available"),r.a.createElement("hr",null),a.length>0&&r.a.createElement(k.a,null,r.a.createElement(N.a,null,r.a.createElement("p",null,n*s," photos of ",c)),r.a.createElement(N.a,null,r.a.createElement(_.a,{style:{textAlign:"center"}},r.a.createElement(_.a.First,{onClick:function(){return e.goToPage(1)}},"First Page"),r.a.createElement(_.a.Prev,{onClick:this.decrementPage},"Previous"),r.a.createElement(_.a.Next,{onClick:this.incrementPage},"Next"),r.a.createElement(_.a.Last,{onClick:function(){return e.goToPage(l)}},"Last Page"))),r.a.createElement(N.a,{style:{textAlign:"right"}},r.a.createElement("p",null,"Showing page: ",n," of ",l)))))}}]),a}(n.Component),F=a(446),H=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={bikers:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.getBikers();case 2:t=e.sent,this.setState({bikers:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.bikers;return r.a.createElement("div",null,r.a.createElement(T,{title:"Bikers"}),r.a.createElement(p.a,null,r.a.createElement(k.a,{className:"content-top"},e.length>0?e.map((function(e){return r.a.createElement(N.a,{sm:"12",md:"4",key:e.id},r.a.createElement(D.a,{className:"biker-card"},r.a.createElement(D.a.Body,null,r.a.createElement(D.a.Title,null,e.firstName," ",e.lastName),r.a.createElement(D.a.Text,null,e.city,", ",e.state),r.a.createElement(d.b,{to:"/biker/".concat(e.id),className:"btn btn-primary btn-sm"},"View Profile"))))})):r.a.createElement(F.a,{type:"info"},"No biker found"))))}}]),a}(n.Component),J=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={biker:{},lng:0,lat:0,zoom:14,coordinates:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,a,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params,e.next=3,C.getBiker(t.id);case 3:a=e.sent,n=a.location.lat,r=a.location.lng,this.setState({biker:a,lat:n,lng:r,coordinates:[{lat:n,lng:r}]});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.biker,a=e.lat,n=e.lng,l=e.zoom,c=e.coordinates;return console.log(this.state.coordinates),r.a.createElement("div",null,r.a.createElement(T,{title:"Biker Details"}),r.a.createElement(p.a,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{className:"content-top content-body"},r.a.createElement(N.a,{md:4,sm:6},r.a.createElement("h3",{className:"content-title"},t.firsName," ",t.lastName),r.a.createElement("p",{className:"content-text"},t.city,", ",t.state)),r.a.createElement(N.a,{md:8,sm:6},r.a.createElement("h3",null),r.a.createElement(I,{coordinates:c,defaultLat:a,defaultLng:n,zoom:l})))):r.a.createElement(k.a,null,r.a.createElement(N.a,null,r.a.createElement(F.a,{variant:"primary",className:"text-center"},"No biker found")))))}}]),a}(n.Component),R=a(197),G=a(443),U=a(198),V=a(200),W=a(199),K=[{title:"Home",component:P,link:"/",exact:!0,useInNavbar:!0,transparentNav:!0},{title:"Bikers",component:H,link:"/bikers",useInNavbar:!0},{title:"Bikers Location",component:L,link:"/bikers-location",exact:!0,useInNavbar:!0},{title:"Photos",component:z,link:"/photos",useInNavbar:!0},{title:"Biker",component:J,link:"/biker/:id",exact:!0},{title:"Contribute",component:function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={firstName:"",lastName:"",email:"",slogan:"",error:!1,errorMsg:[],success:!1},e.handleInputChange=function(t){e.setState(Object(R.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){var t=Object(v.a)(f.a.mark((function t(a){var n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={first_name:e.state.firstName,last_name:e.state.lastName,email_address:e.state.email,slogan:e.state.slogan},t.prev=1,t.next=4,C.postSlogan(n);case 4:201==(r=t.sent).status?e.setState({firstName:"",lastName:"",email:"",slogan:"",success:!0,error:!1}):e.setState({error:!0,success:!1,errorMsg:r.data.errors}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.setState({error:!0,success:!1,errorMsg:["An error occured. Please try again"]});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,{title:"Give us a Slogan"}),r.a.createElement(p.a,null,r.a.createElement(k.a,{className:"content-top content-body"},r.a.createElement(N.a,{md:6,sm:6},this.state.success&&r.a.createElement(F.a,{variant:"success"},"Slogan saved successfully"),this.state.error?r.a.createElement(F.a,{variant:"danger"},r.a.createElement("ul",null,this.state.errorMsg.map((function(e,t){return r.a.createElement("li",{key:t},e)})))):"",r.a.createElement(G.a,null,r.a.createElement(k.a,null,r.a.createElement(N.a,null,r.a.createElement(U.a,null,r.a.createElement(V.a,null,"First Name"),r.a.createElement(W.a,{as:"input",name:"firstName",value:this.state.firstName,onChange:this.handleInputChange})))),r.a.createElement(k.a,null,r.a.createElement(N.a,null,r.a.createElement(U.a,null,r.a.createElement(V.a,null,"Last Name"),r.a.createElement(W.a,{as:"input",name:"lastName",value:this.state.lastName,onChange:this.handleInputChange})))),r.a.createElement(k.a,null,r.a.createElement(N.a,null,r.a.createElement(U.a,null,r.a.createElement(V.a,null,"Email"),r.a.createElement(W.a,{as:"input",name:"email",value:this.state.email,onChange:this.handleInputChange})))),r.a.createElement(k.a,null,r.a.createElement(N.a,null,r.a.createElement(U.a,null,r.a.createElement(V.a,null,"Slogan (Not more than 55 characters)"),r.a.createElement(W.a,{as:"textarea",rows:"5",name:"slogan",value:this.state.slogan,onChange:this.handleInputChange})))),r.a.createElement(k.a,null,r.a.createElement(N.a,null,r.a.createElement(y.a,{variant:"primary",onClick:this.handleSubmit},"Submit"))))),r.a.createElement(N.a,{md:6,sm:6},r.a.createElement("h3",{className:"content-title"},"Suggest a Slogan"),r.a.createElement(w.a,{src:"https://images.pexels.com/photos/71104/utah-mountain-biking-bike-biking-71104.jpeg",rounded:!0,className:"img-fluid"})))))}}]),a}(n.Component),link:"/contribute",exact:!0,useInNavbar:!0}],Y=a(201),Z=(a.n(Y)()(),function(){var e=K.filter((function(e){return!0===e.useInNavbar}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{to:"/",className:"navbar-brand"},r.a.createElement("span",{className:"text-danger"},"Boulder"),"BikeTour"),r.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(h.a,{className:"ml-auto"},e.map((function(e){return r.a.createElement(d.b,{className:"nav-link",to:e.link,key:e.link},e.title)})))))}),Q=function(e){var t=e.containerized;return r.a.createElement(m.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",className:"nav-transparent nav-tall"},t?r.a.createElement(p.a,null,Z()):Z())},X=a(8),$=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(Q,{containerized:!0}),r.a.createElement(X.c,null,K.map((function(e){return r.a.createElement(X.a,{path:e.link,component:e.component,key:e.link,exact:e.exact})})),";"))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[205,1,2]]]);
//# sourceMappingURL=main.bf0ee636.chunk.js.map