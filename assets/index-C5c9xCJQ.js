import{d as e,c as t,a,b as l,w as s,u as n,B as r,o as i,e as d,n as c,t as o,f as u,g as m,F as b,h as p,i as g,j as f,r as x,k as y,l as h,A as k}from"./vendor-vue-Ck4w-aqf.js";import{u as v,a as w}from"./game-logic-DJHt99Uh.js";import"./vendors-BrM03dUJ.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const C={class:"game-container flex flex-col items-center justify-center gap-8"},_={class:"flex flex-col gap-4 w-48"},j=e({__name:"Menu",emits:["selectGame"],setup(e,{emit:c}){const o=c;return(e,c)=>(i(),t("div",C,[c[4]||(c[4]=a("h2",{class:"text-2xl font-bold text-gray-800"},"选择游戏",-1)),a("div",_,[l(n(r),{class:"apple-button bg-blue-500 text-white border-0 h-12 text-lg",onClick:c[0]||(c[0]=e=>o("selectGame","blackjack"))},{default:s((()=>c[2]||(c[2]=[d(" 21点 ")]))),_:1}),l(n(r),{class:"apple-button bg-green-500 text-white border-0 h-12 text-lg",onClick:c[1]||(c[1]=e=>o("selectGame","poker"))},{default:s((()=>c[3]||(c[3]=[d(" 德州扑克 ")]))),_:1})])]))}}),S={class:"text-3xl"},G=e({__name:"Card",props:{card:null,hidden:{type:Boolean}},setup:e=>(l,s)=>(i(),t("div",{class:c(["card transform transition-all duration-200 hover:scale-105",{"bg-gray-300":e.hidden,"bg-white":!e.hidden,"shadow-lg":!e.hidden,"shadow-md":e.hidden}])},[e.hidden?u("",!0):(i(),t("div",{key:0,class:c(["text-2xl font-bold","♥"===e.card.suit||"♦"===e.card.suit?"text-red-500":"text-gray-800"])},[d(o(e.card.rank)+" ",1),a("span",S,o(e.card.suit),1)],2))],2))}),B={class:"game-container flex flex-col justify-between"},M={class:"flex justify-end mb-6"},T={class:"flex-1"},N={class:"mb-12"},L={class:"flex items-center mb-4"},A={class:"flex gap-4 ml-8"},H={class:"mb-12"},O={class:"flex items-center mb-4"},P={class:"flex gap-4 ml-8"},F={key:0,class:"text-center p-4 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm"},W={class:"text-xl font-medium text-gray-800"},q={class:"flex gap-4 justify-center pt-6 border-t border-gray-200"},E=e({__name:"GameTable",emits:["backToMenu"],setup(e,{emit:r}){const{gameState:c,startNewGame:x,hit:y,stand:h}=v(),k=r;return m((()=>{x()})),(e,r)=>{const m=g("Button"),v=G;return i(),t("div",B,[a("div",M,[l(m,{class:"apple-button bg-gray-500 text-white border-0",onClick:r[0]||(r[0]=e=>k("backToMenu"))},{default:s((()=>r[1]||(r[1]=[d(" 返回菜单 ")]))),_:1})]),a("div",T,[a("div",N,[a("div",L,[r[2]||(r[2]=a("h2",{class:"text-xl text-gray-800 font-medium"},"庄家的牌",-1)),a("div",A,[(i(!0),t(b,null,p(n(c).dealerHand,((e,t)=>(i(),f(v,{key:t,card:e,hidden:1===t&&"playing"===n(c).gameStatus},null,8,["card","hidden"])))),128))])])]),a("div",H,[a("div",O,[r[3]||(r[3]=a("h2",{class:"text-xl text-gray-800 font-medium"},"玩家的牌",-1)),a("div",P,[(i(!0),t(b,null,p(n(c).playerHand,((e,t)=>(i(),f(v,{key:t,card:e},null,8,["card"])))),128))])])]),"playing"!==n(c).gameStatus?(i(),t("div",F,[a("span",W," 游戏结果: "+o({playerBust:"玩家爆牌",dealerBust:"庄家爆牌",playerWin:"玩家胜",dealerWin:"庄家胜",push:"平局"}[n(c).gameStatus]),1)])):u("",!0)]),a("div",q,[l(m,{class:"apple-button bg-blue-500 text-white border-0",onClick:n(y),disabled:"playing"!==n(c).gameStatus},{default:s((()=>r[4]||(r[4]=[d(" 要牌 ")]))),_:1},8,["onClick","disabled"]),l(m,{class:"apple-button bg-gray-500 text-white border-0",onClick:n(h),disabled:"playing"!==n(c).gameStatus},{default:s((()=>r[5]||(r[5]=[d(" 停牌 ")]))),_:1},8,["onClick","disabled"]),l(m,{class:"apple-button bg-green-600 text-white border-0",onClick:n(x),disabled:"playing"===n(c).gameStatus},{default:s((()=>r[6]||(r[6]=[d(" 新游戏 ")]))),_:1},8,["onClick","disabled"])])])}}}),I={class:"game-container flex flex-col"},K={class:"flex justify-between mb-6"},z={class:"text-lg font-medium"},D={class:"flex-1"},J={class:"mb-8"},Q={class:"flex gap-4 justify-center"},R={class:"mb-8"},U={class:"flex gap-4 justify-center"},V={class:"flex gap-4 justify-center pt-6 border-t border-gray-200"},X=e({__name:"GameTable",emits:["backToMenu"],setup(e,{emit:r}){const{gameState:c,startNewGame:u,dealCommunityCards:x,fold:y}=w(),h=r;return m((()=>{u()})),(e,r)=>{const m=g("Button"),k=G;return i(),t("div",I,[a("div",K,[a("span",z,"筹码: "+o(n(c).chips),1),l(m,{class:"apple-button bg-gray-500 text-white border-0",onClick:r[0]||(r[0]=e=>h("backToMenu"))},{default:s((()=>r[1]||(r[1]=[d(" 返回菜单 ")]))),_:1})]),a("div",D,[a("div",J,[r[2]||(r[2]=a("h2",{class:"text-xl text-gray-800 font-medium mb-4"},"公共牌",-1)),a("div",Q,[(i(!0),t(b,null,p(n(c).communityCards,((e,t)=>(i(),f(k,{key:t,card:e},null,8,["card"])))),128))])]),a("div",R,[r[3]||(r[3]=a("h2",{class:"text-xl text-gray-800 font-medium mb-4"},"你的手牌",-1)),a("div",U,[(i(!0),t(b,null,p(n(c).playerHand,((e,t)=>(i(),f(k,{key:t,card:e},null,8,["card"])))),128))])])]),a("div",V,[l(m,{class:"apple-button bg-blue-500 text-white border-0",onClick:n(x),disabled:"betting"===n(c).gameStatus||"river"===n(c).gameStatus},{default:s((()=>[d(o("preFlop"===n(c).gameStatus?"发公共牌":"发下一张"),1)])),_:1},8,["onClick","disabled"]),l(m,{class:"apple-button bg-red-500 text-white border-0",onClick:n(y)},{default:s((()=>r[4]||(r[4]=[d(" 弃牌 ")]))),_:1},8,["onClick"]),l(m,{class:"apple-button bg-green-600 text-white border-0",onClick:n(u)},{default:s((()=>r[5]||(r[5]=[d(" 新游戏 ")]))),_:1},8,["onClick"])])])}}}),Y={class:"min-h-screen bg-[#306339] p-4"},Z={class:"text-3xl font-bold mb-8 text-center text-white tracking-wide"},$=h(e({__name:"App",setup(e){const l=x("menu"),s=e=>{l.value=e},n=()=>{l.value="menu"};return(e,r)=>(i(),t("div",Y,[a("h1",Z,o("menu"===l.value?"扑克游戏":"blackjack"===l.value?"21点":"德州扑克"),1),(i(),f(y("menu"===l.value?j:"blackjack"===l.value?E:X),{onSelectGame:s,onBackToMenu:n},null,32))]))}}));$.use(k),$.mount("#app");