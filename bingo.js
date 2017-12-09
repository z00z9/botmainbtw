(function() {
    $.bind('command', function(event) {  
        var command = event.getCommand();
        var args = event.getArgs();                                                      
                                
        if (command.equalsIgnoreCase('bingo')) {
                    $.say("Bingo personalized for Vale stream! Get your personal card here to play along during stream: http://bingobaker.com/play/1427598");
            return;
        }
    });

    $.bind('initReady', function() {
        $.registerChatCommand('./commands/bingo.js', 'bingo', 7);
    });
})();
