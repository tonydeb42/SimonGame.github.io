const colours=["green","red","yellow","blue"];
let seq=[];
let userchoice=[];
let choice,i,element,level,numclick;
level=0;numclick=-1;
$(body).keydown(function(){
    if(level<=0)
    {
        lvltxt();
    }
});
function lvltxt(){
    level++;
    $(starting).text(`Level ${level}`);
    choice=Math.floor(Math.random()*4);
    element=colours[choice];
    seq.push(element);
    audioplay(element);
    blink(element);
}
function audioplay(element)
{
    var audio = new Audio("res/sounds/"+element+".mp3");
    audio.play();
}
function blink(element)
{
    $("#"+element).addClass("blink");
    setTimeout(function(){
        $("#"+element).removeClass("blink");
    },500);
}
$('.button').click(function(){
    numclick++;
    userchoice.push($(this).attr('id'));
    audioplay($(this).attr('id'));
    blink($(this).attr('id'));
    checkanswer($(this).attr('id'));
});
function checkanswer(color)
{
    if(color==seq[numclick])
    {
        if(seq.length==userchoice.length)
         {
            setTimeout(function(){
                userchoice=[];
                 numclick=-1;
                lvltxt();
            },1000);
        }
    }
    else
    {
        $(starting).text(`Game Over. Press any key to restart.`);
        var audio = new Audio("res/sounds/wrong.mp3");
        audio.play();
        userchoice=[];
        seq=[];
        level=0;
        numclick=-1;
    }
}
