
///////////////////////////////////////////////////////////~~~Str ::: SideNav
class SideNav extends HTMLElement {#nvd;#ass;#sls=false;
constructor(){super();
let s=this.attachShadow({mode: "closed"});
let tbr=document.createElement("div");
let nvd=document.createElement("span");
let tsn=document.createElement("div");
let ass=document.createElement("div");
let sld=document.createElement("span");
let mn=document.createElement("div");
//let img=document.createElement("img");
////////////////////
nvd.innerText="Title";
tsn.innerText="Task Name";
sld.innerText="≡"
//img.src="imgs/tln.png"
////////////////////
nvd.style.cssText="display:inline-block;background-color:#000;color:#fff;padding:5px;text-align:center;width:70%";
tbr.style.cssText="width:100%;background:#000";
sld.style.cssText="width:calc(30% - 10px);display:inline-block;text-align:center;font-size:1.3em;color:#fff;cursor:pointer";
tsn.style.cssText="text-align:center;font-weight:600;padding:10px;";
ass.style.cssText="padding:0px 20px;";
mn.style.cssText="width:20%;background:#fff;border-radius:3px;box-shadow:5px 5px 5px #7555;";
///////////////////
tbr.appendChild(nvd);
tbr.appendChild(sld);
///////////////////
mn.appendChild(tbr);
mn.appendChild(tsn);
mn.appendChild(ass);
s.appendChild(mn);
////////////////////
this.#nvd=nvd;
this.#ass=ass;
///////////////////
sld.onclick=()=>{if(this.#sls)this.slideOn();else this.slideOf();}
}
slideOn(){this.#sls=false;this.style.cssText="position:absolute;left:-14%;width:100%;transition:0.7s"; }
slideOf(){this.#sls=true;this.style.cssText="position:absolute;left:5px;width:100%;transition:0.7s"; }

connectedCallback(){this.slideOn();
this.#nvd.innerText=this.getAttribute("title")||"Title";

}

addAsset=(a)=>{let b=document.createElement("div");b.style.cssText="border-top:2px solid #ccc;text-align:center;padding:2px 0; ";b.innerHTML="&#8226; "+a;
this.#ass.appendChild(b); }

};


///////////////////////////////////////////////////////////~~~End ::: SideNav
///////////////////////////////////////////////////////////~~~Str ::: Assets
class Assets extends HTMLElement{#twn;#bsu;#cnt;#mcn;#sls=false;#cnt_height;
constructor(){super();
let s=this.attachShadow({mode:"closed"});

let twn=document.createElement("div");
let cnt=document.createElement("div");
let bsu=document.createElement("div");
let mcn=document.createElement("div");
let mw=document.createElement("div");
//////////////////////////////////
twn.innerText="Hi";
cnt.innerText="How are you\ngdsad";
mcn.innerText="Main Content";
//bsu.innerText=">";
//////////////////////////////////
twn.style.cssText="background:#000;color:#fff;padding:5px;text-align:center;border-radius:7px 7px 0 0;";
bsu.style.cssText="float:right;margin:10px;border: solid black;border-width: 0 3px 3px 0;display: inline-block;padding: 3px;transform: rotate(45deg);-webkit-transform: rotate(45deg);cursor:pointer;transition:all 0.7s ease-in-out";
cnt.style.cssText="overflow:hidden;padding:1px 20px";
mcn.style.cssText="max-height:617px;padding:4px 20px 30px 20px;";
mw.style.cssText="border-radius:7px;width:40%;margin-left:6.7%;margin-top:30px;display:inline-block;box-shadow:0 0 15px #555;";
//////////////////////////////////
bsu.onclick=()=>{if(this.#sls)this.slideUp();else this.slideDw(); }
/////////////////////////////////
mw.appendChild(twn);
mw.appendChild(mcn);
mw.appendChild(cnt);
mw.appendChild(bsu);
s.appendChild(mw);
//////////////////////////////////
this.#bsu=bsu;this.#cnt=cnt;this.#twn=twn;this.#mcn=mcn;
}

connectedCallback(){this.#cnt_height=this.#cnt.offsetHeight+10;this.slideUp();
this.#twn.innerText=this.getAttribute("title");
this.#cnt.innerText=this.getAttribute("description");
this.#mcn.innerHTML=this.getAttribute("content");
}

slideUp(){this.#sls=false;this.#cnt_height=this.#cnt.offsetHeight;this.#cnt.style.height="0px";
this.#cnt.style.transition="all 0.7s ease-in-out";
this.#bsu.style.transform="rotate(45deg)";this.#bsu.style.webkitTransform="rotate(45deg)"; }
slideDw(){this.#sls=true;this.#cnt.style.height="auto";let h=this.#cnt.offsetHeight;this.#cnt.style.height="0px";
this.#cnt.offsetHeight;this.#cnt.style.transition="all 0.7s ease-in-out";this.#cnt.style.height=h+"px";
this.#bsu.style.transform="rotate(-135deg)";this.#bsu.style.webkitTransform="rotate(-135deg)"; }


//////////////////////////


//////////////////////////

}
///////////////////////////////////////////////////////////~~~End ::: Assets
///////////////////////////////////////////////////////////~~~Str ::: Assets_Input

class Inp_Asset extends HTMLElement{
constructor(){super();
let s=this.attachShadow({mode:"closed"});
let inp=document.createElement("textarea");
inp.style.cssText="box-radius:4px;box-shadow:0 0 15px #555;width:100%;height:282px; resize: none;border-radius:10px; ";
inp.placeholder="Reflect as per given gideline";
s.appendChild(inp);
}

  
}

//"<div><textarea cols='40' rows='5' style='box-radius:4px;box-shadow:0 0 15px #555;'></textarea></div>";

///////////////////////////////////////////////////////////~~~End ::: Assets_Input
customElements.define("side-nav",SideNav);
customElements.define("assets-m",Assets);
customElements.define("inp-asset",Inp_Asset);