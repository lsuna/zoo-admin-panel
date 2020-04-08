$(document).ready(function () {

    $('.alertSuccess').hide();
    $('.alertWarning').hide();
    $('.alertDanger').hide();
    
    var penguinHungry = 6;
    var pandaHungry = 10;
    var slothHungry = 8;
    

    var penguinCount = 0;
    var pandaCount = 0;
    var slothCount = 0;
    
    var intId = setInterval(counter, 1000);


    function counter() {

        penguinCount++;
        pandaCount++;
        slothCount++;

        if (penguinCount > penguinHungry) {
            $("#penguinHungry").show(500);
        }
        
        if (pandaCount > pandaHungry) {
            $("#pandaHungry").show(500);
        }
        
        if (slothCount > slothHungry) {
            $("#slothHungry").show(500);
        }


        console.log(penguinCount);

       
    }



    $('#penguinBtn').on('click', function () {

        //figure out which it is
        if (penguinCount > penguinHungry / 2) {
            $("#penguinHungry").hide(500, function () {
                $("#penguinFed").show(500, function () {
                    setTimeout(function () {
                        $("#penguinFed").hide(500);
                    }, 1500);
                });
            });
            penguinCount = 0;
        } else {
            $("#penguinNotHungry").show(500, function () {
                setTimeout(function () {
                    $("#penguinNotHungry").hide(500);
                }, 1500);
            });
        }


    });
    
    $('#pandaBtn').on('click', function () {

        //figure out which it is
        if (pandaCount > pandaHungry/2) {
            $("#pandaHungry").hide(500, function () {
                $("#pandaFed").show(500, function () {
                    setTimeout(function () {
                        $("#pandaFed").hide(500);
                    }, 1500);
                });
            });
            pandaCount = 0;
        } else {
            $("#pandaNotHungry").show(500, function () {
                setTimeout(function () {
                    $("#pandaNotHungry").hide(500);
                }, 1500);
            });
        }

    });
    
    $('#slothBtn').on('click', function () {

        //figure out which it is
        if (slothCount > slothHungry/2) {
            $("#slothHungry").hide(500, function () {
                $("#slothFed").show(500, function () {
                    setTimeout(function () {
                        $("#slothFed").hide(500);
                    }, 1500);
                });
            });
            slothCount = 0;
        } else {
            $("#slothNotHungry").show(500, function () {
                setTimeout(function () {
                    $("#slothNotHungry").hide(500);
                }, 1500);
            });
        }

    });



});
