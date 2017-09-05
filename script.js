$(document).ready(function(){
    $('#tweet-controls').hide();
    //double text box size, show tweet controls
    $('.tweet-compose').on('click', function (){
        $(this).css('height', '5em');
        $('#tweet-controls').show();
    });
    //decrease character count on key-up
    var count = 140;
    $('.tweet-compose').on('keyup', function(){

        var tweetValue = $('.tweet-compose').val().length;
        $('#char-count').text(count - tweetValue);
        $('#tweet-submit').show();
        
        if ((count-tweetValue<=10) && (count-tweetValue>=0)) {
           $('#char-count').css('color', 'red');
        } 
        if (count-tweetValue>10) {
            $('#char-count').css('color', 'black');
        }
        if (tweetValue>140){
            $('#tweet-submit').hide();
        }
    
    });

    
    //add tweet with input
    $('#tweet-submit').on('click', function(){
        var tweetText = $(".tweet-compose").val();
        //reset tweet box
        $("textarea.tweet-compose").val("");
        var date = new Date();
        //clone the first tweet
        var newTweet = $(".tweet:first-of-type").clone();
        newTweet.find("p.tweet-text").text(tweetText);
        newTweet.find("img.avatar").attr("src", "img/alagoon.jpg");
        newTweet.find("img.avatar").attr("data-toggle", "tooltip");
        newTweet.find("img.avatar").attr("title", "sir titties");
        newTweet.find(".username").text("@sir");
        newTweet.find(".fullname").text("grisly nimble");
    
        newTweet.find(".num-retweets, .num-favorites").text("0");
        newTweet.find(".stats").hide();
        newTweet.fadeIn();
        $("#stream").prepend(newTweet);
       
 });

    $('#stream').on('mouseenter', '.tweet', function(){
        $(this).find('.tweet-actions').show();
    });
    $('#stream').on('mouseleave', '.tweet', function(){
        $(this).find('.tweet-actions').hide();
    });

    $('#stream').on('click', '.tweet', function(){
        $(this).find('.stats').fadeIn();
    })


});