<!DOCTYPE html><html>
<header><meta charset="utf-8"><style>.logoBox{background:#F0F0F0;border:outset 3px #fff}</style>
<script src="index.js"></script><script src="https://code.jquery.com/jquery-3.5.0.js"></script>
<style>#taskName{padding:5px;text-align:center}.container{margin:20px 7%;box-shadow:0 0 15px #555;border-radius:10px;}
.t_title{background:#00f;color:#fff;padding:5px;border-radius:10px 10px 0 0;}.assets{display: flex; }</style></header>

<body>
    <div class="logoBox"><img src="https://deepthought.education/assets/images/logo/logo.svg"/></div>
<div class="container"><span id="sidenav"></span>
<div class="t_title">You Are Taking Challanges Of New Project</div>
<div id="taskName"></div>
<div id="assets"></div>
</div>
    
<?php $r=file_get_contents("https://dev.deepthought.education/assets/uploads/files/others/project.json"); ?>

    </body>

    
<script>
/*GET=(a,b)=>{let xhr=new XMLHttpRequest();xhr.open("GET","https://dev.deepthought.education/assets/uploads/files/others/project.json",true);xhr.send();xhr.onreadystatechange=function(a){alert(xhr.status); };  }
GET({url:"https://dev.deepthought.education/assets/uploads/files/others/project.json",sync:false,data:null},function(a){alert(a);});*/
var jsData=<?php echo file_get_contents("https://dev.deepthought.education/assets/uploads/files/others/project.json"); ?>;
taskName.innerText=jsData.tasks[0].task_title;


let a=document.createElement("side-nav");a.setAttribute("title","journy board");
for(let i=0;i<jsData.tasks[0].assets.length;i++){a.addAsset(jsData.tasks[0].assets[i].asset_title);
let c=document.createElement("assets-m");
c.setAttribute("title",jsData.tasks[0].assets[i].asset_title);
c.setAttribute("description",jsData.tasks[0].assets[i].asset_description);
/*let dat=jsData.tasks[0].assets[i].display_asset_docs!=""?
'<object style="width:100%" type="text/html" data="'+jsData.tasks[0].assets[i].display_asset_docs+'" ></object>':(jsData.tasks[0].assets[i].display_asset_video!=""?'<iframe width="420" height="345" src="'+jsData.tasks[0].assets[i].display_asset_video+'"></iframe>':(jsData.tasks[0].assets[i].display_asset_image!=""?'<img alt="image" src="'+jsData.tasks[0].assets[i].display_asset_image+'" width="100%" height="300px">':'<embed src="'++'"  width="100%" height="100%" autostart="false"/>') ) ;*/
let lnk=jsData.tasks[0].assets[i].display_asset_docs!=""?jsData.tasks[0].assets[i].display_asset_docs:(jsData.tasks[0].assets[i].display_asset_video!=""?jsData.tasks[0].assets[i].display_asset_video:(jsData.tasks[0].assets[i].display_asset_image!=""?jsData.tasks[0].assets[i].display_asset_image:jsData.tasks[0].assets[i].display_asset_url) ) ;
let dat='<embed src="'+lnk+'"  width="100%" height="100%" autostart="false"/>';

if(jsData.tasks[0].assets[i].asset_type=="display_asset"){if(jsData.tasks[0].assets[i].asset_content=="other")c.setAttribute("content",dat);
else if(jsData.tasks[0].assets[i].asset_content=="reflection")c.setAttribute("content",jsData.tasks[0].assets[i].display_asset_reflection); }
else{if(jsData.tasks[0].assets[i].asset_content=="reflection")c.setAttribute("content","<inp-asset></inp-asset>"); }

assets.appendChild(c);
}
    sidenav.appendChild(a);
    
/*a=document.createElement("assets-m");
assets.appendChild(a);
a=document.createElement("assets-m");
assets.appendChild(a);
a=document.createElement("assets-m");
assets.appendChild(a);*/
</script>
</html>