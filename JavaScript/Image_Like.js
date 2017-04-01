var Likes_count=0;
function Like(){
    
    Likes_count=Likes_count+1;
    document.getElementById("Likes").innerHTML=Likes_count;
}

var ind=0;
function Add_cmnt(){
    var time=new Date();
    var hour=time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();
    ind=ind+1;
    document.getElementById("cmnt_show").innerHTML+="<p id='para"+ ind+"'>" + document.getElementById("cmnt_type").value + "&nbsp"+"&nbsp"+ hour+':'+ min + ':' +sec +"&nbsp"+"&nbsp" + "<input type='button' onclick='deleteP("+ ind+")' value='Delete'"+ "</p>";
    document.getElementById("cmnt_type").value=" ";
}
var wrd_count=40;
function count_word(){
    var c=document.getElementById("cmnt_type").value.length;
    var len=wrd_count-c;
   
   
    document.getElementById("Wrd_count").innerHTML=len + " " + "Words remaining";
    
}

function deleteP(ex){
    document.getElementById("para"+ex).style.display="none";
   
}