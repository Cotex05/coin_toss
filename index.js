$(document).ready(function(){
    $("#tossBtn").click(function(){
        $(".coinImg").attr("src", "coin0.png");
        $(".coin").toggleClass("rotate");
    });
});

$(document).ready(function(){
    $("#showBtn").click(function(){
        $(".coin").removeClass("rotate");
        $(".coinImg").attr("src", "../coin" + randomNum + ".PNG");
        $("h1").text(key);
        $("#reset").append('<button type="reset" onclick="refreshPage()" class="btn btn-lg btn-primary">Play Again</button>');
        $('#tossBtn').replaceWith();
    });
});

$('#tailbtn').click(function() {     
    $("#radiotail").attr('checked', true);
});

$('#headbtn').click(function() {     
    $("#radiohead").attr('checked', true);
});
