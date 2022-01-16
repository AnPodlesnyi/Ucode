let str1 = '\nBetty Botter had some butter,\"but\" she said, "this butter\'s bitter.\nIf I bake this bitter butter, it would make my batter bitter.\nBut a bit of better butter – that would make my batter better.\"';
let str2 = 'She sells seashells by the seashore';
let str3 = 'might you might a mightned might into an un-mightned might like a mightner mightmight a mightned might into an un-mightned might?'
alert('Just a string:' 
+ str1 
+ '\nLength: ' 
+ str1.length 
+ '\nCharacter number 2 is: ' 
+ str1.slice(3,4)
+ '\nConcatenation in a phrase:'
+ str1.concat('So she bought a bit of butter, better than her bitter butter, and she baked it in her batter, and the batter was not bitter.\nSo \'twas better Betty Botter bought a bit of better butter.')
+ '\nTo uppercase: '
+ str2.toUpperCase()
+ '\nReplace all occurrences:\n'
+ str3.replace(/might/g,'can'));
