(function() {
    $.bind('command', function(event) {
        var sender = event.getSender();
        var command = event.getCommand();

        if (command.equalsIgnoreCase('batfacts')) {
            var facts = [
                'Insect eating bats are worth an estimated $23 billion to the US economy as natural pest control.',
                'The bumblebee bat is the world\'s smallest mammal.',
                'While you\'ve seen bats wiggle their ears, you may have also noticed their noses wiggle as well. Doing this directs their echolocation!',
                'There is a species of bat (you\'re welcome https://goo.gl/7UvLUF) called the Honduran White Bat, who like to snuggle together in groups inside of leaf tents when they sleep!',
                'There are over 1,300 species of bats! Only 3 of which are vampire bats, who yes, actually do have a blood-based diet.',
                'Vampire bats have an enzyme called “draculin” that is an anticoagulant. This makes feeding easier! Additionally, it\'s being used by researchers to possibly treat strokes and heart attacks in humans.',
                'Vampire bats have heat seeking noses that they use to find the warmest spots on their prey, where the blood would be closest to the surface.',
                'There\'s a “bat god” called Camazotz in Mayan mythology. It demanded ritual blood sacrifices.',
                'A species of bat called the Heart-Nosed Bat sings to claim its territory.',
                'Fruit bats have a higher alcohol tolerance than humans - probably to help with eating fermented fruit!',
                'Although flying foxes are typically called “fruit bats”, their favorite food is actually flowers!',
                'The Small Flying Fox Bat is found to use its wings as an umbrella when it\'s raining AND as a fan when it\'s too hot!',
                'April 17th is Bat Appreciation Day!',
                'When researchers “translated” bat talk, they found that bats argue. A lot. Usually about food or sleeping arrangements.',
                'Livingstone\'s Fruit Bats are the only bat with round ears.',
                'Vampire bats share food with each other by regurgitating so their friends and family don\'t starve. Gross AND wholesome!',
                'Young bats aren\'t able to fly until they are about 90% grown.',
                'Bats can swim. Yes, there are videos.',
                'Bats actually are not blind! Jebaited',
                'Flying foxes are extremely clean bats, and spend a lot of time grooming themselves.',
                'Fruit bats don\'t eat the entire fruit, they squeeze out the juices and good stuff and spit out what is called a “spat”. If they ate the whole thing, they\'d be too fat to fly LUL .',
                'Bats do not have an appendix.',
                'Bats are especially susceptible to extinction due to their long gestation periods and how they typically only have one pup at a time.',
                'Bat nipples are located in their armpits.',
                'Bats are the only mammal capable of powered, continuous flight, and fly with more accuracy than most birds.',
                '25% of all mammal species are bats.',
                'Relative to body size, the Spotted Bat has the largest ears out of all species of bat.',
                'The vampire bat is the only species of bat that can run.',
                'Bats are actually really loud, but to humans it seems quiet because we are unable to hear the octave that echolocation is used at.',
                'All leaf-nosed bats emit echolocation through their noses.',
                'Some baby bats babble a lot like adolescent human children.',
                'Bats are responsible for the pollination of agave, which is the plant used to make tequila. THANKS BATS!'
            ];

            var fact = function() { facts[Math.floor(Math.random() * facts.length)] };
            
            $.say(fact());
            return;
        }
    });

    $.bind('initReady', function() {
        $.registerChatCommand('./commands/batfacts.js', 'batfacts', 7);
    });
})();
