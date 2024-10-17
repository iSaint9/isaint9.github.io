var link = [];
link[0] = "css/tailwind-goat.css";
link[1] = "css/tailwind-maid.css";
link[2] = "css/tailwind-burger.css";


$(function() {
    var style = link[Math.floor(Math.random() * link.length )];
    if (document.createStyleSheet){
        document.createStyleSheet(style);
    }else{
        $('<link />',{
            rel :'stylesheet',
            type:'text/css',
            href: style
        }).appendTo('head');
    }
});