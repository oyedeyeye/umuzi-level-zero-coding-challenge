    function numberToTime(number){
        var hours = Math.floor(number / 60);
        var minutes = number % 60;
        if (hours == 1 && minutes == 1){
            console.log(hours + " hour, " + minutes + " minute");
        }
        else if(hours > 1 && minutes == 1){
            console.log(hours + " hours, " + minutes + " minute");
        }
        else if (hours == 1 && minutes > 1){
            console.log(hours + " hour, " + minutes + " minutes");
        } else {
            console.log(hours + " hours, " + minutes + " minutes");
        }
    }

    numberToTime(61);
    numberToTime(71);
    numberToTime(121);
    numberToTime(432);