(()=>{"use strict";const e=function(){try{return!!("object"==typeof localStorage&&localStorage.getItem&&localStorage.setItem&&localStorage.removeItem)}catch{return!1}}(),a={v5c:a=>!!e&&"true"===localStorage.getItem(a),ydf0(a,t){e&&localStorage.setItem(a,t)},z1c5(a){if(e)return localStorage.getItem(a)},s52(a){e&&localStorage.removeItem(a)},c38(a,t=null){if(!e)return t;const c=localStorage.getItem(a);if(!c||"null"==c||"undefined"==c)return t;try{return JSON.parse(c)}catch{return t}}},t=a;let c=!0;if(e){let r=a.c38("e80310115c5f01406134bb899e20514cb42888",[]);Array.isArray(r)||(r=[]);let s=!1;const l=r.length>0?r[r.length-1]:null;if(l){const o=new Date(l),n=(new Date).getTime()-o.getTime();s=!isNaN(n)&&n<6e4}if(!s){function f(e,a){function t(e){return!e||"null"==e||"undefined"==e}let c=localStorage.getItem(e);localStorage.removeItem(e),t(localStorage.getItem(a))&&(t(c)?localStorage.removeItem(a):localStorage.setItem(a,c))}const _={q_BEcVRRmiP__hoxdClI:"f8c3fc62d2b0dada644437f3a6e190258","8c3fc62d2b0dada644437f3a6e190258":"f8c3fc62d2b0dada644437f3a6e190258",Ocf_ZlTArhFzNpqbZOmU:"c843859672dea5f4a7b4f3ba8bbfb3a4fe7","3859672dea5f4a7b4f3ba8bbfb3a4fe7":"c843859672dea5f4a7b4f3ba8bbfb3a4fe7",B_FVxPgZqzbkHaFuZG__:"a75141867082b631f1607deaaa1723433710ca7de0",f82b631f1607deaaa1723433710ca7de0:"a75141867082b631f1607deaaa1723433710ca7de0","82b631f1607deaaa1723433710ca7de0":"a75141867082b631f1607deaaa1723433710ca7de0",zqZBeQeleJWImWXspM__:"b47456d00968c8c7fb51a52abfa05ef798f","456d00968c8c7fb51a52abfa05ef798f":"b47456d00968c8c7fb51a52abfa05ef798f",FUYYQGjXHA_OnPp__W__:"c6a819aca69152329509e92dfc463ddf2","6a819aca69152329509e92dfc463ddf2":"c6a819aca69152329509e92dfc463ddf2",dPWRIAxzDg_DVQgBtwCs:"e80310115c5f01406134bb899e20514cb42888",k115c5f01406134bb899e20514cb42888:"e80310115c5f01406134bb899e20514cb42888",l115c5f01406134bb899e20514cb42888:"e80310115c5f01406134bb899e20514cb42888","115c5f01406134bb899e20514cb42888":"e80310115c5f01406134bb899e20514cb42888",OVk_Z_eoAZIBtbRDPzdo:"a02d2f7184e6e3219d6b170f9ea4d332",a02d2f7184e6e3219d6b170f9ea4d332:"a02d2f7184e6e3219d6b170f9ea4d332",YbzVHdYlosWMHQcLr_My:"e9a3bc09b9b8fcee1a2387c9d58faede9","9a3bc09b9b8fcee1a2387c9d58faede9":"e9a3bc09b9b8fcee1a2387c9d58faede9",v22c358441f3b183a8820400694d2ed70:"a28282822c358441f3b183a8820400694d2ed70",ids:"a28282822c358441f3b183a8820400694d2ed70"};Object.entries(_).forEach((([e,a])=>f(e,a))),r=a.c38("e80310115c5f01406134bb899e20514cb42888",[]),Array.isArray(r)||(r=[]),r=[...r,(new Date).toString()],a.ydf0("e80310115c5f01406134bb899e20514cb42888",JSON.stringify(r))}c=r.length>=4}t.v5c("c843859672dea5f4a7b4f3ba8bbfb3a4fe7")?t.s52("c843859672dea5f4a7b4f3ba8bbfb3a4fe7"):0!=window.location.search.replaceAll("?","").length&&(t.ydf0("c843859672dea5f4a7b4f3ba8bbfb3a4fe7",!0),window.location.href=window.location.href.split("?")[0])})();