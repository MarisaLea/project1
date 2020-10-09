//tealium universal tag - utag.128 ut4.0.202006221800, Copyright 2020 Tealium.com Inc. All Rights Reserved.
window.criteo_q=window.criteo_q||[];try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){b.hFlag=0;b.onreadystatechange=function(){if((this.readyState==='complete'||this.readyState==='loaded')&&!b.hFlag){b.hFlag=1;o.cb();}};b.onload=function(){if(!b.hFlag){b.hFlag=1;o.cb();}};}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.hasOwn=function(o,a){return o!=null&&Object.prototype.hasOwnProperty.call(o,a);};u.isEmptyObject=function(o,a){for(a in o){if(u.hasOwn(o,a)){return false;}}return true;};u.isEmpty=function(o){var t=u.typeOf(o);if(t=="number"){return isNaN(o);}else if(t=="boolean"){return false;}else if(t=="string"){return o.length===0;}else return u.isEmptyObject(o);};u.arrayUnique=function(array){var a=array.concat();for(var i=0;i<a.length;++i){for(var j=i+1;j<a.length;++j){if(a[i]===a[j])a.splice(j--,1);}}return a;};u.ev={'view':1};u.scriptRequested=false;u.prep=function(value,alwaysConvert){if(u.typeOf(value)==="string"&&(alwaysConvert||value.indexOf(",")>0)){value=value.replace(/^\s*|\s*$/g,"").split(/\s*,\s*/);}
return value;};u.map_func=function(arr,obj,item){var i=arr.shift();obj[i]=obj[i]||{};if(arr.length>0){u.map_func(arr,obj[i],item);}else{obj[i]=item;}};u.remove_empty=function(a){var b,t;for(b in utag.loader.GV(a)){t=u.typeOf(a[b]);if(t==="object"){u.remove_empty(a[b]);if(u.isEmptyObject(a[b])){try{delete a[b];}catch(e){a[b]=undefined;}}}else if(!((a[b]===0||a[b]===false)?!0:(t==="array"&&a[b].length===0)?!1:!!a[b])){try{delete a[b];}catch(e){a[b]=undefined;}}}
return a;};function _addProducts(arr){for(var d=0;d<u.data.product_id.length;d++){arr.push({id:u.data.product_id[d],price:u.data.product_unit_price[d],quantity:u.data.product_quantity[d]});}}
function _eventLogic(t_criteo_q){var g={},i,_event;for(i=0;i<u.data.event_list.length;i++){_event=u.data.event_list[i];g=u.data[_event]=(u.data[_event]||{});g.event=_event;switch(_event){case"viewItem":g.product=g.product||u.data["product.id"]||u.data.product_id[0];break;case"viewList":g.product=g.product||u.data["product.id"]||u.data.product_id;g.keywords=g.keywords||u.data.keywords;break;case"viewBasket":if(u.typeOf(g.product)!=="array"){g.product=[];}
_addProducts(g.product);break;case"trackTransaction":g.id=g.id||u.data.transaction_id;g.new_customer=g.new_customer||u.data.new_customer;g.deduplication=g.deduplication||u.data.deduplication;if(u.typeOf(g.product)!=="array"){g.product=[];}
if(g.product.length==0){_addProducts(g.product);}
break;default:break;}
if(_event){t_criteo_q.push(u.remove_empty(g));}}
if(!u.isEmptyObject(u.data.travel)){g={event:"viewSearch"};for(i in utag.loader.GV(u.data.travel)){g[i]=u.data.travel[i];}
t_criteo_q.push(g);}}
u.map={"search_keyword":"keywords","criteo_account_id":"account","crit_segment":"user_segment","customer_id":"customer_id","criteo_event":"event","criteo_new_customer":"new_customer","hashed_email_as_array":"hashed_email","product_id_updated":"product.id","is_blog":"setData.is_blog"};u.extend=[function(a,b,c,d,e,f,g){if(1){d=b['page_type'];if(typeof d=='undefined')return;c=[{'product':'viewItem'},{'gateway':'viewList'},{'Cart':'viewBasket'},{'home':'viewHome'},{'search':'viewList'},{'category':'viewList'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d==f){b['criteo_event']=c[e][f];m=true};};if(m)break};}},function(a,b){try{if((typeof b['order_id']!='undefined'&&typeof b['order_id']!='undefined'&&b['order_id']!=''&&b['page_type']=='receipt')){b['criteo_event']='trackTransaction'}}catch(e){utag.DB(e);}},function(a,b){if(typeof b['criteo_email_hash']==='string'&&typeof b['hashed_email_as_array']==='undefined'){b['hashed_email_as_array']=[b['criteo_email_hash']];}else if(typeof b['criteo_email_hash']==='undefined'){b['hashed_email_as_array']="";}},function(a,b){try{if(1){b['crit_segment']='1'}}catch(e){utag.DB(e);}},function(a,b,c,d,e,f,g){if(1){d=b['cp.urbn_currency'];if(typeof d=='undefined')return;c=[{'USD':'6252'},{'AUD':'10946'},{'CAD':'10945'},{'CNY':'23212'},{'GBP':'6959'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d==f){b['criteo_account_id']=c[e][f];m=true};};if(m)break};if(!m)b['criteo_account_id']='6252';}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,h,evt=[];u.data={"base_url":"//static.criteo.net/js/ld/ld.4.1.0.js"||"//static.criteo.net/js/ld/ld.js","account":"","event":"None","keywords":"","setData":{},"site_type":(function(){return/iPad/.test(navigator.userAgent)?"t":/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent)?"m":"d";}()),"email":[],"login":[],"order_id":"","product_id":[],"product_quantity":[],"product_unit_price":[],"event_list":[]};var t_criteo_q=[];for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.map_func(e[f].split("."),u.data,b[d]);}}else{h=d.split(":");if(h.length===2&&b[h[0]]===h[1]){if(u.map[d]){evt=evt.concat(u.map[d].split(","));}}}}
u.data.order_id=u.data.order_id||b._corder||"";if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
u.data.transaction_id=u.data.transaction_id||u.data.order_id;u.data.product_id=u.data["product.id"]||u.data.product_id;u.data.product_unit_price=u.data["product.price"]||u.data.product_unit_price;u.data.product_quantity=u.data["product.quantity"]||u.data.product_quantity;if(!u.isEmpty(u.data.account)){t_criteo_q.push({"event":"setAccount","account":u.prep(u.data.account,false)});}else{utag.DB("error:128:Criteo Account ID Missing");return;}
if(!u.isEmpty(u.data.site_type)){t_criteo_q.push({"event":"setSiteType","type":u.data.site_type});}
u.data.email=u.data.email||u.data.hashed_email||"";if(!u.isEmpty(u.data.email)){t_criteo_q.push({"event":"setEmail","email":u.prep(u.data.email,true)});}
u.data.login=u.data.login||u.data.hashed_login||"";if(!u.isEmpty(u.data.login)){t_criteo_q.push({"event":"setLogin","login":u.prep(u.data.login,true)});}
for(d in utag.loader.GV(u.data.setData)){c={"event":"setData"};c[d]=u.data.setData[d];t_criteo_q.push(c);}
if(u.data.event&&u.data.event!=="None"&&u.typeOf(u.data.event)!=="array"){u.data.event_list=u.data.event.split(/\s*,\s*/);}
u.data.event_list=u.data.event_list.concat(evt);u.data.event_list=u.arrayUnique(u.data.event_list);_eventLogic(t_criteo_q);criteo_q.push(t_criteo_q);if(!u.scriptRequested){u.scriptRequested=true;u.loader({"type":"script","src":u.data.base_url,"loc":"script","id":'utag_128'});}
}};utag.o[loader].loader.LOAD(id);}('128','urbanoutfitters.a15-fpweb'));}catch(error){utag.DB(error);}
