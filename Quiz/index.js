var Quesdata = [
    {
        ques: 'Which is not a JS framwork',
        a: 'react',
        b: '.NET',
        c: 'laravel',
        d: 'django',
        correct: 'b',
    },
    {
        ques: 'Which is not a programming language',
        a: 'HTML',
        b: 'Java',
        c: 'python',
        d: 'JS',
        correct: 'a',
    },
    {
        ques: 'Which is not a framework',
        a: 'react',
        b: 'javascript',
        c: 'angular',
        d: 'django',
        correct: 'b'
    },
    {
        ques: 'CSS stands for',
        a: 'Cascading style sheets',
        b: 'cascading style state',
        c: 'none',
        d: 'cascading sheet of styles',
        correct: 'a',
    },


]
var ans=document.getElementsByTagName('input');
var res=document.querySelectorAll('.answer');
var i=-1;
var score=0;
if(i == -1){
    //document.getElementById('sub').style.visibility="hidden";
    document.getElementById('sub').innerHTML="Start";
}
loadquiz();
function loadquiz(){
   deselect();
   document.getElementById('sub').innerHTML="Submit";
    i=i+1;
    if(i == 4){
        document.getElementById('out').innerHTML=`Your Score:${score}/4`;

    }
    else{
    document.getElementById('question').innerHTML=Quesdata[i].ques;
    document.getElementById('option1').innerHTML=Quesdata[i].a;
    document.getElementById('option2').innerHTML=Quesdata[i].b;
    document.getElementById('option3').innerHTML=Quesdata[i].c;
    document.getElementById('option4').innerHTML=Quesdata[i].d;
    }
    
}
function deselect(){
   // for (i = 0; i < document.getElementsByTagName('input').length; i++) {
     //   document.getElementsByTagName('input')[i].checked=false;               
//}
for(var i=0;i<ans.length;i++){
ans[i].checked=false;
}
}
function play() {            
   /* var radio_check_val = "";
    for (i = 0; i < document.getElementsByTagName('input').length; i++) {
        if (document.getElementsByTagName('input')[i].checked) {
            alert("this radio button was clicked: " + document.getElementsByTagName('input')[i].value);
            radio_check_val = document.getElementsByTagName('input')[i].value;        
        }        
    }/*
   /* if (radio_check_val === "")
    {
        alert("please select radio button");
    }*/
    var selval;
    res.forEach(res => {
        if(res.checked){
selval=res.id;
console.log(res.id);
        }
    });
    if(selval == Quesdata[i].correct){
        score=score+1;
    }
        
    
    
loadquiz();
    // console.log(score); 
      
}