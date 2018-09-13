$(document).ready( () => {
    var winWidth = $(window).width();
    var winHeight = $(window).height();

    var bgHeight = $('.background').height();
    var bgWidth = $('.background').width();

    var daysOfTheWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    var monthsOfTheYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    function currentDate() {
        let date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        var day = date.getDay();
        var month = date.getMonth();
        var year = date.getFullYear();

        $('.time').html(hours + ':' + minutes + ':' + seconds);
        $('.date').html(monthsOfTheYear[month] + ' ' +daysOfTheWeek[day] + ' ' + year);
    }

    function timeOffset(x, y) {
        $('.outer').css({'top': y + 'px', 'left': x + 'px'});
    }

    function backgroundOffset(x, y) {
        $('.background').css({'top': y + (winHeight/2) - (bgHeight / 2) + 'px', 'left': x + (winWidth/2) - (bgWidth / 2) + 'px'});
    }


    function printWord() {
        $('.word1').html('Debug The World');
        $('.word2').html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;----by小光');
    }
    currentDate();
    setInterval(currentDate, 1000);
    printWord();
    
    /*
    $(window).mousemove( (e) => {
        var mX = e.pageX - (winWidth / 2);
        var mY = e.pageY - (winHeight / 2);
        
        timeOffset(mX * 0.06, mY * 0.07);
        backgroundOffset(mX * 0.03, mY * 0.04);
    });
    */
    


    

})