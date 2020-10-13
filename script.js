if(document.getElementById('countdown')){
    let destination= new Date("July 1, 2021 11:00:00").getTime();
                
    setInterval(function(){
        let now= new Date().getTime();

        let timeRemaining= destination - now;

        let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML= '<span class="start-text">STARTS IN :</span>'+'<b style="color:white;">'+days+'</b>'+'<span class="timer-text">days : </span>'+'<b style="color:white;">'+hours+'</b>'+'<span class="timer-text">hours : </span>'+'<b style="color:white;">'+minutes+'</b>'+'<span class="timer-text">minutes : </span>'+'<b style="color:white;">'+seconds+'</b>'+'<span class="timer-text">seconds</span>';
        if(timeRemaining<0){
            document.getElementById('countdown').innerHTML=' ';
        }
    },1000)
}
