    // common characters
    function commonCharacters(first, second){
        var commonLetter = "";
        var firstWord = first.split('');
        var secondWord = second.split('');

        firstWord.forEach(e => {
            if(secondWord.includes(e)){
                commonLetter = e;
                console.log(commonLetter);
            }
        })
    } 


    commonCharacters("umuzi","Hezekiah");