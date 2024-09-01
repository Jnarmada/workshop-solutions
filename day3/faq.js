function toggleAnswer(answerId)
{
    var answer=document.getElementById(answerId);
    var arrow=document.getElementById('arrow'+answerId.slice(-1));

    if(answer.style.display=="none"||
        answer.style.display==""){
            answer.style.display="block";
            arrow.innerHTML="&#9650;";            
     }
        else{
        answer.style.display="none";
        arrow.innerHTML="&#9660;";
        
    }
 }