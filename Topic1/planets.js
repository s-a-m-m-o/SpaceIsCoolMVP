let speach = ["../Images/planets_2.png","../Images/planets_3.png","../Images/planets_4.png"];
let i=0;

function changespeach(){
    if (i>=speach.length){
        document.getElementById("discovery").scrollIntoView({ behavior: 'smooth'});
    }
    else{
        var img = document.createElement('img');
        img.src = speach[i];
        document.getElementById("speach").src = img.src;
        i++;
    }
}

let s = ["../Images/planets_learning_2.png","../Images/planets_learning_3.png","../Images/planets_learning_4.png","../Images/planets_learning_5.png","../Images/planets_learning_6.png","../Images/planets_learning_7.png","../Images/planets_learning_8.png","../Images/planets_learning_9.png"];
let v=0;

function learning(){
    if (v>=s.length){
        document.getElementById("video").scrollIntoView({ behavior: 'smooth'});
    }
    else{
        var img = document.createElement('img');
        img.src = s[v];
        document.getElementById("s").src = img.src;
        v++;
    }
}