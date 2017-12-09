(function() {
    $.bind('command', function(event) {  
        var command = event.getCommand();
        var args = event.getArgs();                                                      
                                
        if (command.equalsIgnoreCase('bingo')) {
            if (args && args.length) {
                var board = args[0].toLowerCase();
                if (board == "overwatch") {
                    $.say("Overwatch Bingo! Get your personal card here to play along during stream: http://bingobaker.com/play/1427574");
                } else if (board == "vale") {
                    $.say("Bingo personalized for Vale stream! Get your personal card here to play along during stream: http://bingobaker.com/play/1427598");
                } else {
                    $.say("Custom Bingo boards for Overwatch and Vale stream! To get the link type !bingo overwatch or !bingo vale");
                }
            } else {
                $.say("Custom Bingo boards for Overwatch and Vale stream! To get the link type !bingo overwatch or !bingo vale");
            }
            return;
        }
    });

    $.bind('initReady', function() {
        $.registerChatCommand('./commands/bingo.js', 'bingo', 7);
    });
})();
