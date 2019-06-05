(function() {
    $.bind('command', function(event) {
        var sender = event.getSender();
        var command = event.getCommand();

        if (command.equalsIgnoreCase('batfact')) {
            var facts = [
                'Insect eating bats are worth an estimated $23 billion to the US economy as natural pest control.',
                'The bumblebee bat is the world’s smallest mammal, weighing in at 2 grams and are around 1.1 to 1.3 inches in length!',
                'While you’ve seen bats wiggle their ears, you may have also noticed their noses wiggle as well. Doing this directs their echolocation!',
                'There is a species of bat (you’re welcome https://goo.gl/7UvLUF ) called the Honduran White Bat, who like to snuggle together in groups inside of leaf tents when they sleep! valeHug ',
                'There are over 1,300 species of bats! Only 3 of which are vampire bats, who yes, actually do have a blood-based diet.',
                'Vampire bats have an enzyme called “draculin” that is an anticoagulant. This makes feeding easier! Additionally, it’s being used by researchers to possibly treat strokes and heart attacks in humans.',
                'Vampire bats have heat seeking noses that they use to find the warmest spots on their prey, where the blood would be closest to the surface.',
                'There’s a “bat god” called Camazotz in Mayan mythology. It demanded ritual blood sacrifices.',
                'A species of bat called the Heart-Nosed Bat sings to claim its territory.',
                'Fruit bats have a higher alcohol tolerance than humans - probably to help with eating fermented fruit!',
                'Although flying foxes are typically called “fruit bats”, they also love flowers!',
                'The Small Flying Fox Bat is found to use its wings as an umbrella when it’s raining AND as a fan when it’s too hot!',
                'April 17th is Bat Appreciation Day!',
                'When researchers “translated” bat talk, they found that bats argue. A lot. Usually about food or sleeping arrangements.',
                'Livingstone’s Fruit Bats are the only bat with round ears.',
                'Vampire bats share food with each other by regurgitating so their friends and family don’t starve. Gross AND wholesome!',
                'Young bats aren’t able to fly until they are about 90% grown.',
                'Bats can swim. Yes, there are videos.',
                'Bats actually are not blind! Jebaited',
                'Flying foxes are extremely clean bats, and spend a lot of time grooming themselves.',
                'Fruit bats don’t eat the entire fruit, they squeeze out the juices and good stuff and spit out what is called a “spat”. If they ate the whole thing, they’d be too fat to fly LUL .',
                'Bats do not have an appendix.',
                'Bats are especially susceptible to extinction due to their long gestation periods and how they typically only have one pup at a time.',
                'Bat nipples are located in their armpits.',
                'Bats are the only mammal capable of powered, continuous flight, and fly with more accuracy than most birds.',
                '20-25% of all mammal species are bats.',
                'Relative to body size, the Spotted Bat has the largest ears out of all species of bat.',
                'The vampire bat is the only species of bat that can run.',
                'Bats are actually really loud, but to humans it seems quiet because of the octave that echolocation is used at. It can go as high as 120 dB!',
                'All leaf-nosed bats emit echolocation through their noses.',
                'Some baby bats babble a lot like adolescent human children.',
                'Bats are responsible for the pollination of agave, which is the plant used to make tequila. THANKS BATS!',
                'You might not be able to own a pet bat, but you can build or buy a bat house (just like birdhouses!) that bats can roost in.',
                'Most people believe bats are related to rodents. Most people are wrong.',
                'Vampire bats tend to adopt orphaned baby bats within their colony.',
                'Moths can detect echolocation and emit clicking sounds back to the bats to “jam” the echolocation, making it difficult for the bat to prey on them.',
                'Some female bats can control pregnancy by slowing the development of the embryo.',
                'A species called Chapin’s Free-Tailed Bat has a mohawk. It’s used for courtship, but also to look really cool.',
                'Tube-lipped Nectar Bats have tongues that are 1.5 times longer than their bodies. It has longest tongue relative to its body size of any mammal!',
                'Not every bat uses echolocation - like large fruit bats! They don’t need to use it, they rely on sight and smell to forage for food.',
                'Most bats can’t take off from the ground, many need to drop 2 or 3 feet before taking flight. Vampire bats can take flight from the ground by doing a strong “push-up” and then off they go!',
                'Echolocation is so fine tuned, that bats can detect extremely small and thin objects like a single human hair.',
                'Bat species that eat frogs can tell the difference between safe frogs and poisonous frogs by listening to the male frogs call. Also some bats eat frogs.',
                'A group of bats is called a colony! Not as cool as a murder of crows...but that’s fine.',
                'Guano was used during the Civil War as gunpowder.',
                'Australian bats are not poisonous, but they don’t eat Tim Tams either valeTaxic ',
                'There is a park next to the Sydney Opera House that is home to many giant Flying Foxes that fly freely and live together with really weird looking birds. Australia is weird.',
                'Evidence found of the earliest bat-like mammal dates back ~50 million years ago.',
                'Vampire bats often return to and remember the same exact prey that they fed on during a previous night.',
                'Small Club-Footed bats roost INSIDE of bamboo stalks in Southeast Asia.',
                'In West Africa, Small Wooly bats live in large spider webs. Spooky.',
                'White Winged Vampire Bats are known to snuggle up to hens and pretend to be one of the chicks, then they feed off the mother hen’s blood.',
                'White nose syndrome is a deadly disease that affects nearly every single species of bat. Researchers are trying hard to find a treatment for this disease, since every single species of bat is important to the environment, and us as humans! From pollination to spreading seeds, using enzymes to treat strokes, and pest control, this world can’t live without bats :( !',
                'Bats live happily on every single continent except Antarctica.',
                'Approximately 70% of all species of bat are insect eaters.',
                'In China and Japan, bats have been associated with good fortune throughout history. It’s opposite for Europe and North America where bats are associated with witchcraft and evil.',
                'Pipistrelle bats may weigh less than 2 pennies, but can actually eat up to 3,000 bugs in one day.',
                'Dracula originated in Eastern Europe, but vampire bats don’t even live there. They actually are found in Central & South America.',
                'Bats are easily divided into 2 ‘suborders’ in classification: Megachiroptera (large) and Microchiroptera (small).',
                'The largest bat species title belongs to the Giant Golden Crowned Flying Fox. Their wingspan can get up to 5.6 feet (1.7m) long.',
                'Relative to its size, bats live longer than any other mammal. Captive bats can live up to 30 or 40 years.',
                'One single Brown Bat can eat approximately 1,200 mosquitoes (or mosquito sized bugs) per hour.',
                'Less than 10 people in North America have ever contracted rabies from a bat. They will only bite in self defense and don’t care much for humans, they just wanna hang out and do their own thing mostly.',
                'The largest bat colony known in the world is located at Bracken Cave in Texas, USA. It’s holds about 15 million Mexican Free-tailed Bats.',
                'Bats have one of the highest rates of homosexual sexual behavior among mammals valeGasm ',
                'Tropical fruit bats are responsible for up to 95% of tree establishment in restored rainforest.',
                'Mexican Free-Tailed Bats can fly at up to 60 miles per hour.',
                'Little Brown Bats can be taken several hours by car away from their home range and find their way back. Most tropical species cannot be moved even a few miles!',
                'Bats can breathe through their wings - about 10-15% of gas exchange occurs across the wing membrane.',
                'The “fingers” in a bats wings are really the third, fourth, and fifth digit (middle, ring, and pinky fingers). The second finger has become reduced and braces the third.',
                'Sucker-footed bats have natural suction cups on their wings and can stick to surfaces, like completely vertical walls!',
                'Several species of bat can only be distinguished from one another by a few millimeters difference in tooth width or the length of their ear hair, but are COMPLETELY genetically distinct.',
                'Pallid bats are immune to scorpion venom, which allows them to be stung by their pray while hunting them and come out unharmed.',
                'Greater Bulldog Bats have calls that are as loud as gunshots, the loudest of any bat species, but humans are unable to hear its frequency.',
                'When using echolocation, the closer the bat is to its prey, the quicker the clicks they emit.  A “feeding buzz” is when the bat is closest to its prey.  Since it is up to 200 clickers per second, it sounds closer to a buzzing noise.',
                'After Pearl Harbor, the military attempted to use bats as tiny bombs. It didn\'t end up working, lots of money was wasted, and many bats died.',
                'Vampire bats can leap 7 meters high, which is equivalent to a human man jumping over a 7 story building.',
                'Honduran White Bats seem like they wouldn\'t be camouflaged very well since their fur is so bright, but the leaf tents they roost in reflect green hues onto their white fur. This makes them blend in with their homes extremely well!',
                'Bats have tendons in their toes which “lock” into place and is able to hold their body weight while hanging upside down. This is how they stay in place for so long! This also takes absolutely no energy for them to do.',
                'It\'s a myth that bats fly left out of a cave. They just fly wherever they want, actually. Usually to me, I\'m carrying.',
                'Bats are incredibly agile fliers and are able to turn directions sharply or move at extremely high speeds. The reason they are so agile is because they can move their wings asymmetrically, while birds can only move their wings symmetrically. Bats also have incredible flexibility and elasticity in their bones - more than any other mammal. This is what sets bat flight apart from bird flight.',
                'Bats belong to the order “Chiroptera” which translates to “hand wing.”',
                'Early human flight ideas/inventions (which DaVinci famously studied) were inspired by the complexity of bat flight.',
                'Bats have different “supersonic signatures” that sets them apart from each other.  This means they have different “voices” just like humans. Mothers can tell their babies apart from thousands of other bat babies because of their unique voices!',
                'Male Dyak’s Fruit Bats are one of the only known natural occurrences of *male* lactation and are able to help feed their young along with the female bats.',
                'Bats do in fact, have belly buttons, just like humans.',
                'Baby bats can weigh up to 1/3rd of its mother\'s body weight. Imagine a human baby being that heavy. That’s a very giant baby.',
                'Male Hammer Headed Fruit Bats honk, and they do it to attract mates. No kink shaming.',
                'Malayan Flying Foxes will fly around 40 miles in search of food!',
                'Not all bats hibernate, and some bats migrate during cold climates.',
                'Fruit bats can detect ripe fruit just by the odor. ms_boogie encourages you to sniff your fruit at the supermarket. Hone in your bat abilities, you can do it! BECOME A BAT.',
                'Some bats in found in the Panama canal will lower their heart rate from 1,000 BPM to 200 BPM to avoid starvation as food is scarce instead of just spamming "I need healing."',
                'Hardwicke’s Wooly Bat roost inside carnivorous pitcher plants.',
                'Some bats cool off by flying low over water and skimming the surface. They then can drink the water from their soaked belly fur!',
                'Research on how bats successfully navigate through hundreds of other bats flying together in a colony is inspiring the engineering of safer self-driving cars. Bats are the future.',
                'Egyptian fruit bat has 1,000 different vocalizations and their “dialect” is unique only to the colony they are raised in. Only bats that spend a lot of time on the internet will talk a little differently than their colony, particularly smol bats.',
                'Since blood is not very nutritious, Vampire Bats get assistance processing blood from microbes in their guts.',
                'It’s believed that some species of bats are nocturnal simple for the fact that there is no food competition with birds during the night time.',
                'Sad fact - wind turbines will explode little bats lungs due to the low air pressure valeCry',
                'Young Vampire Bats are more likely to explore novel objects than adults.',
                'Bat can learn behaviors from other species of bats.',
                'White-throated Round-eared bats roost inside termite colonies.',
                'Some bats eat fish, like the fish-eating Myotis. They emit echolocation over water sources to sense a disturbance near the surface, and then they swoop in.',
                'Nectar-eating bats use their tongues different ways to eat nectar from plants. Some use it as a spoon, others have long tongues used like a straw.',
                'Pallas’s Long-tongued bat has the fastest metabolism of any animal, as 78% of energy comes from recently consumed sugars.',
                'Bats typically try to stay out of bad weather, unless the pups are absolutely starving.',
                'Bats are able to carry pollen farther than any other animal.',
                'Mexican Free-Tailed Bats are the only bat species known to sing during mating season to attract mates.',
                'Baby flying foxes require daily sun exposure to get the vitamin D they need for rapid wing bone growth - which can be up to 1mm per day - just like Mercy mains need daily sun exposure to get the vitamin D they need to left-click (aka @Vale go outside).',
                'Bats respond to distress calls, but not normally to help. It’s typically just to assess if they are at any risk themselves.',
                'Like human fingerprints, a bat’s wing prints are unique and can be used for identification.',
                'Some bats have special greetings when they return to the roost (like a special handshake!).  The more important a bat is in the hierarchy, the more elaborate the greeting.',
                'Male Sack Wing Bats concoct a “perfume” in their wing sacks to attract mates. It’s not made out of sunshine and flowers; you don’t want to know what they make it with…',
                'Panama Canal alone has ~72 separate bat species that live there.',
                'As we know, herbivore means “plant based diet”, carnivore means “meat based diet”. Sanguivore is a “fresh blood based diet” and Frugivore is a “fruit based diet”!',
                'Vampire bats are highly sensitive to the cold since they have no fat reservoirs from their blood based diet.',
                'Some bats mark their territory in the same way your household cat will - by rubbing their faces on the territory they claim as their own!',
                'Tears in wings are not rare for bats. Luckily, wing membranes are very likely to regenerate themselves and heal up just fine!',
                'Common tent-making bats will chew leaf tents in a way that will cause it to fold into shape. Think perforated paper from a notebook!',
                'The oldest lived bat ever found was a 41 year old Brandt’s bat from Russia.',
                'Since bats live abnormally long lifespans for their size, researchers are studying if their genes are particularly resistant to damage. Super bats?',
                '530 species of flowering plants rely on bats as their major or EXCLUSIVE pollinator.',
                'Bats do not have hollow bones like birds.',
                'Some bats, like the Greater Sac-winged Bat roost in the open and rely on camouflage to be protected, unlike the cave-dwelling bats that we already know.',
                'Many plants have adapted strategies to attract pollinators and seed dispersers, like bees or squirrels and such.  Some plants have adapted specifically to bats!',
                'Bats have pollinated bananas for over 50 million years.',
                '18 million years ago, bats “stole” a gene called VP35 from an ancestor of the Ebola virus. But bats don’t spread Ebola -- the bat form of the gene works differently! Researchers think the VP35 gene may help regulate bats’ immune system.',
                'In Austin, Texas, they released Brazilian free-tailed bats into the city to combat bug colonies that were threatening the crops. It worked! The bats colonized and have been an invaluable pest control to the crops in Austin.',
                'Female Eastern Red bats are one of the few species capable of having a larger litter of pups. Because of this, they have four nipples instead of the normal two.',
                'A vampire bat’s fangs are so sharp, you wouldn’t even feel them biting you! But no worries, Vampire bats rarely feed on humans, prefer livestock, AND are only native to Central & South America.',
                'The Ussurian tube-nosed bat hibernates inside of dens made of snow. (Tiny little bat igloos!) Despite being made of snow, it successfully keeps the bat warm throughout the winter.',
                'Only six bat species worldwide are known to have naturally white fur.',
                'You may think wrinkly-faced bats look ugly (Ms Boogie finds every bat cute) but the wrinkles have purpose! They can actually help control and direct their echolocation.',
                'Honduran White Bats have left the SPF 100 at home. They have developed a special patch of pigmented tissue on top of their heads that protects them from the sun instead! It’s colored by melanin - something we also have as humans.',
                'While it’s true fruit bats don’t use echolocation, there is one exception! The Egyptian fruit bat is the only fruit eating bat known to use echolocation like its bug eating cousins. It’s used for navigation, and not hunting!',
                'Northern Ghost Bats are known to sing while they eat.',
                'In Mexico, there is a spot called “Volcán de los Murciélagos”, or “Bat Volcano” that was sacred to the Maya, and was believed to be an entrance to the underworld. It’s dubbed the “Bat Volcano” because it “erupts” with bats as dusk falls.',
                'Townsend’s Big Eared Bat is nicknamed a “whisper bat”, because they use echolocation at a lower frequency. This is because they primarily hunt moths, and moths are able to pick up on higher frequencies.',
                'October is Bat Appreciation Month! There is also a week in October that is celebrated as Bat Week!',
                'The Painted Bat looks very festive for Halloween with its bright orange and black fur. Trick or treat!',
                'The Azores Noctule is the only bat species in the world that hunts insects principally by day. It also has a really cool name.',
                'We know that bats are just as important as bees and butterflies for pollinating plants, but the Pallas’s Long-Tongued Bat’s hair is specifically designed to hold on to pollen particles so the bat can transfer the pollen from plant to plant!',
                'Researchers have found the secret to pro-level, complex bat flight - tiny, microscopic hairs on most bats wings, that feel their way through the air. When these hairs were removed, bats were found to make wider turns, or weren’t able to slow as quickly.',
                'Bats without fur?! The Naked Bulldog Bat, or the Greater Naked Bat, or even just the Hairless Bat lives up to its many names. It’s mostly hairless, save for a few patches around its neck, head, toes, and tail areas.',
                'Compared to other Flying Foxes, the Samoan Flying Fox is very little! It weighs just one pound and the adult wing span reaches up to 3 feet. This species is also known to be monogamous, as the males tend to stick to one mate at a time.',
                'The Bacardi Bat is one of the world’s most well known logos. The creators of Bacardi Rum noticed the many fruit bats hanging in the rafters of their Cuban distillery, and thought of them to be a sign of good fortune. They weren’t wrong - these fruit bats helped pollinate their sugar cane fields!',
                'While bats aren’t inherently blind, they can suffer from blindness as a disability! However, since their other senses are so fine tuned, they aren’t at a disadvantage if they have any vision problems.',
                'A bat’s brain is very similar to a human’s. Their hippocampus is much like ours, which is important for spatial and social memory. Bats help us understand how our own brains work in a social setting. These tools are what helped humans form such complex and large societies.',
                'Bats tend to have hearts that are three times larger and pump more blood than any other mammal their size!',
                'Bats can trap air in their wings to use as insulation. valeComfy',
                'Nectar eating bats can hover just like hummingbirds, but not for as long! It takes an incredible amount of energy, so they have the fastest metabolism of any mammal.',
                'Bats were first classified in the Primates order in 1758 before receiving their own order 20 years later.',
                'Blood doesn’t rush to the head of an upside-down bat because of special, one-way valves in its arteries! It prevents the blood from flowing backwards.',
                'Bats have a built-in compass that is incredibly sensitive to the Earth’s magnetic field. It helps them distinguish north and south!',
                'Megabats have the largest brains relative to their body size out of any other bats.',
                'Insect eating bats have guano that sparkles. That’s like the same as unicorns, right?',
                'Bats can hear from anywhere between 20 to 120,000 Hz. For comparison, humans can only hear from 20 to 20,000 Hz.',
                'Bat pollination has its own term! It’s called ‘chiropterophily’.',
                'Hoary Bats are so soft and fuzzy, they’re known to use their tails as blankets to keep warm!',
                'Rescued baby bats are swaddled in tiny blanket burritos to mimic being wrapped in their mother’s wings! It keeps them feeling happy, safe, and warm. It also makes them look super cute. Batrittos valeComfy',
                'The rain makes it WAY harder for a bat to use echolocation. The water can retract soundwaves, so the raindrops interfere with the bats ability to echolocate.',
                'Some species of bats are able to see ultraviolet light, something humans can’t see.',
                'Desert bats, like the California Leaf-nosed bat, can live without water for at least six weeks!',
                'Lesser Long-nosed bats follow what is called the “nectar trail”, which is a blooming of cacti and agave plants between New Mexico and Southern Arizona. It drinks the nectar of these plans, and along the way, pollinates each one!',
            ];

            $.inidb.incr('commandCount', event.getCommand(), 1);
            var count = $.inidb.get('commandCount', event.getCommand());
            $.say(facts[count % facts.length]);
            return;
        }
    });

    $.bind('initReady', function() {
        $.registerChatCommand('./commands/batfact.js', 'batfact', 7);
    });
})();
