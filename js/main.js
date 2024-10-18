var link = [];
link[0] = "css/tailwind-goat.css";
link[1] = "css/tailwind-maid.css";
link[2] = "css/tailwind-burger.css";
var bg = [];
bg[0] = "dark:bg-ganyu-bg"
bg[1] = "dark:bg-ram-bg"
bg[2] = "dark:bg-ramlethal-bg"


$(function() {
    var rand = Math.floor(Math.random() * link.length )
    var style = link[rand];
    var background = bg[rand];

    if (document.createStyleSheet){
        document.createStyleSheet(style);
    }else{
        $('<link />',{
            rel :'stylesheet',
            type:'text/css',
            href: style
        }).appendTo('head');
        $('#mainContainer').addClass(background);
    }
});