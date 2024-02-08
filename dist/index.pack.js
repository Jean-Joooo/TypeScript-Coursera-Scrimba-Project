(()=>{"use strict";var e={888:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e,t,o){this.src=e,this.title=t,this.reviews=o}}},276:(e,t)=>{var o,i;Object.defineProperty(t,"__esModule",{value:!0}),t.LoyaltyUser=t.Permissions=void 0,function(e){e.ADMIN="ADMIN",e.READ_ONLY="READ_ONLY"}(o||(t.Permissions=o={})),function(e){e.GOLD_USER="GOLD_USER",e.SILVER_USER="SILVER_USER",e.BRONZE_USER="BRONZE_USER"}(i||(t.LoyaltyUser=i={}))},148:function(e,t,o){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(488),a=o(276),n=i(o(888)),s=document.querySelector(".properties"),l=document.querySelector(".reviews"),c=document.querySelector(".container"),d=document.querySelector("button"),u=document.querySelector(".footer"),m=[{name:"Sheila",stars:5,loyaltyUser:a.LoyaltyUser.GOLD_USER,date:"01-04-2021"},{name:"Andrzej",stars:3,loyaltyUser:a.LoyaltyUser.BRONZE_USER,date:"28-03-2021"},{name:"Omar",stars:4,loyaltyUser:a.LoyaltyUser.SILVER_USER,date:"27-03-2021"}],y={firstName:"Bobby",lastName:"Brown",permissions:a.Permissions.ADMIN,isReturning:!0,age:35,stayedAt:["florida-home","oman-flat","tokyo-bungalow"]},p=[{image:"images/colombia-property.jpg",title:"Colombian Shack",price:45,location:{firstLine:"shack 37",city:"Bogota",code:45632,country:"Colombia"},contact:[0x662d15b891a9,"marywinkle@gmail.com"],isAvailable:!0},{image:"images/poland-property.jpg",title:"Polish Cottage",price:30,location:{firstLine:"no 23",city:"Gdansk",code:343903,country:"Poland"},contact:[0x49cbdd420724e,"garydavis@hotmail.com"],isAvailable:!1},{image:"images/london-property.jpg",title:"London Flat",price:25,location:{firstLine:"flat 15",city:"London",code:"SW4 5XW",country:"United Kingdom"},contact:[34829374892553,"andyluger@aol.com"],isAvailable:!0},{image:"images/malaysian-hotel.jpeg",title:"Malia Hotel",price:35,location:{firstLine:"Room 4",city:"Malia",code:45334,country:"Malaysia"},contact:[60349822083,"lee34@gmail.com"],isAvailable:!1}];(0,r.showReviewTotal)(m.length,m[0].name,m[0].loyaltyUser),(0,r.populateUser)(y.isReturning,y.firstName);for(let e=0;e<p.length;e++){const t=document.createElement("div");t.classList.add("card"),t.innerHTML=p[e].title;const o=document.createElement("img");o.setAttribute("src",p[e].image),t.appendChild(o),(0,r.showDetails)(y.permissions,t,p[e].price),s.appendChild(t)}let g=0;d.addEventListener("click",(()=>function(e){if(!g){g++;const t=(0,r.getTopTwoReviews)(e);for(let e=0;e<t.length;e++){const o=document.createElement("div");o.classList.add("review-card"),o.innerHTML=t[e].stars+" stars from "+t[e].name,l.appendChild(o)}c.removeChild(d)}}(m)));let f=["London","11.03",17];u.innerHTML=f[0]+" "+f[1]+" "+f[2]+"°";let v=new n.default("images/italian-property.jpg","Italian House",[{name:"Olive",stars:5,loyaltyUser:a.LoyaltyUser.GOLD_USER,date:"12-04-2021"}]);const L=document.querySelector(".main-image"),h=document.createElement("img");h.setAttribute("src",v.src),L.appendChild(h)},488:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getTopTwoReviews=t.makeMultiple=t.showDetails=t.populateUser=t.showReviewTotal=void 0;const i=document.querySelector("#reviews"),r=document.querySelector("#returning-user"),a=document.querySelector("#user"),n=o(276);function s(e){return e>1||0==e?"s":""}t.showReviewTotal=function(e,t,o){const r=n.LoyaltyUser.GOLD_USER?"⭐":"";i.innerHTML=e.toString()+" review"+s(e)+" | last reviewed by "+t+" "+r},t.populateUser=function(e,t){e&&(r.innerHTML="back"),a.innerHTML=t},t.showDetails=function(e,t,o){if(e){const e=document.createElement("div");e.innerHTML=o.toString()+"/night",t.appendChild(e)}},t.makeMultiple=s,t.getTopTwoReviews=function(e){return e.sort(((e,t)=>t.stars-e.stars)).slice(0,2)}}},t={};!function o(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,o),a.exports}(148)})();