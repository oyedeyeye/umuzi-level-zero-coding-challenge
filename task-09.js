// Output vowels in a word
    function vowelLetters(args){
        var vowels = "AEIOUaeiou";
        var word = args;
        for (var i = 0; i < word.length; i++){
            for (var j = 0; j < vowels.length; j++){
                if(word[i] === vowels[j]){
                    console.log(word[i]);
                }
            }
        }
    }

vowelLetters("AdeYeyE");