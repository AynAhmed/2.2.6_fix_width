$(document).ready(function(){
    randomRects();

function randomRects()
{
    for(var i = 0; i< 10; i++)
    {
        var div = document.createElement("div");
        var width = parseInt(Math.random() * 350);
        div.setAttribute("style", "width:" + width +"px");
        div.setAttribute("class", "rect");
        $("#container").append(div);
    }
}
    $("button").on("click", function(){
        $("div").each(function(){
            ///use this keyword for looping through the
            //divs to make a change to a certain div you are currently on.
            //.css selects everything
            if ($(this).width() < 200){
              $(this).css("width", "200")
            }
        })
    })
})