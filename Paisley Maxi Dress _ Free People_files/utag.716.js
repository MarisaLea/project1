//tealium universal tag - utag.716 ut4.0.201912301348, Copyright 2019 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={"base_url":"https://www.googletagmanager.com/gtag/js?id=AW-967127545",};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());if(b['cp.urbn_privacy_optout_us_ca']!==undefined&&b['cp.urbn_privacy_optout_us_ca']!==''&&b['cp.urbn_privacy_optout_us_ca'].toString().toLowerCase()=='true'){gtag('config',"AW-967127545",{allow_ad_personalization_signals:false});}else if(b['cp.urbn_privacy_optout_us_ca']!==undefined&&b['cp.urbn_privacy_optout_us_ca']!==''&&b['cp.urbn_privacy_optout_us_ca'].toString().toLowerCase()=='false'){gtag('config',"AW-967127545",{allow_ad_personalization_signals:true});}else if(b['cp.urbn_privacy_optout_us_ca']!==undefined||b['cp.urbn_privacy_optout_us_ca']!==''){gtag('config',"AW-967127545");}
gtag('config','DC-8402811');if(b.order_id){gtag('event','conversion',{'send_to':'AW-967127545/vWPpCJ-g8wkQ-eOUzQM','value':Number(b.order_subtotal)+Number(b.order_tax_amount),'currency':b.order_currency,'transaction_id':''});if(b._ccurrency.toLowerCase()==="eur"){gtag('event','purchase',{'allow_custom_scripts':true,'value':b.order_subtotal,'transaction_id':b.order_id,'send_to':'DC-8402811/purch0/'+b._ccurrency.toLowerCase()+'pu0+transactions','country':b.urbn_country,'language':b.urbn_language});}
if(b.order_currency.toLowerCase()==="gbp"){gtag('event','purchase',{'allow_custom_scripts':true,'value':b.order_subtotal,'transaction_id':b.order_id,'send_to':'DC-8402811/purch0/'+b.order_currency.toLowerCase()+'pu0+transactions','country':b.urbn_country,'language':b.urbn_language});}}
if(!u.initialized){u.loader({"type":"script","src":u.data.base_url,"cb":u.loader_cb,"loc":"script","id":'utag_716'});}else{u.loader_cb();}
}};utag.o[loader].loader.LOAD(id);})("716","urbanoutfitters.a15-fpweb");}catch(error){utag.DB(error);}
