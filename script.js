var status = 'unlock';

$(document).ready(function () {

    
    //date for home page

//    var d = new Date();
//    var n = d.toLocaleDateString();
//    document.getElementById("date").innerHTML = n;
    


    //------------- Gate System Code ----------------------

    $('.gateBtn').on('click', function () {
        var currentButton = $(this);
        var which = currentButton.attr("data-which");
        if (currentButton.html() == "Lock") {
            currentButton.html("Unlock")
            currentButton.toggleClass('gateBtnLock');
            currentButton.toggleClass('gateBtn');
        } else {
            currentButton.html("Lock");
            currentButton.toggleClass('gateBtn');
            currentButton.toggleClass('gateBtnLock');
        }

        $("#" + which).toggleClass("fa-lock");
        //        $("#" + card).toggleClass("cardLock");
        //        $(currentButton).toggleClass("gateBtnLock");

        $("#" + which).toggleClass("fa-lock-open");

    });



    $('.master-gate-button').on('click', function () {
        var masterBtn = $(this);
        if (masterBtn.html() == "Lock All") {
            $('.gateBtn').html("Unlock");
            $('.gateBtn').toggleClass('gateBtnLock');
            $('.gateBtn').toggleClass('gateBtn');
            masterBtn.html("Unlock All");
            masterBtn.toggleClass('master-gate-button-lock');
            masterBtn.toggleClass('master-gate-button');
            $('.fa-lock-open').toggleClass("fa-lock");
            $('.fa-lock-open').toggleClass("fa-lock-open");

        } else {
            $('.gateBtn').html("Lock");
            $('.gateBtnLock').toggleClass('gateBtn');
            $('.gateBtnLock').toggleClass('gateBtnLock');
            masterBtn.html("Lock All");
            masterBtn.toggleClass('master-gate-button');
            masterBtn.toggleClass('master-gate-button-lock');
            $('.fa-lock').toggleClass("fa-lock-open");
            $('.fa-lock').toggleClass("fa-lock");
        }

    });

    //-------------- Sprinkler button code ----------------

    $('.sprinklerBtn').on('click', function () {
        var currentBtn = $(this);
        var that = currentBtn.attr("data-that");
        if (currentBtn.html() == "On") {
            currentBtn.html("Off");
            currentBtn.toggleClass('sprinklerBtnOn');
            currentBtn.toggleClass('sprinklerBtn');
            $("#" + that).css({
                'background-color': '#00838f',
                'color': 'white'
            });
        } else {
            currentBtn.html("On");
            currentBtn.toggleClass('sprinklerBtn');
            currentBtn.toggleClass('sprinklerBtnOn');
            $("#" + that).css({
                'background-color': '#bbb',
                'color': 'black'
            });
        }
    });

    $('.master-sprinkler-button').on('click', function () {
        var masterBtn = $(this);
        if (masterBtn.html() == "All On") {
            masterBtn.html("All Off");
            masterBtn.toggleClass('master-sprinkler-button-on');
            masterBtn.toggleClass('master-sprinkler-button');
            $('.sprinklerBtn').html('Off');
            $('.sprinklerBtn').toggleClass('sprinklerBtnOn');
            $('.sprinklerBtn').toggleClass('sprinklerBtn');
            $('.sprinkler-icon').css({
                'background-color': '#00838f',
                'color': 'white'
            })
        } else {
            $('.sprinklerBtnOn').html('On');
            $('.sprinklerBtnOn').toggleClass('sprinklerBtn');
            $('.sprinklerBtn').toggleClass('sprinklerBtnOn');
            $('.sprinkler-icon').css({
                'background-color': '#bbb',
                'color': 'black'
            })
            masterBtn.html("All On");
            masterBtn.toggleClass('master-sprinkler-button');
            masterBtn.toggleClass('master-sprinkler-button-on');

        }
    });

    //-------------- Feeder button code ----------------
    
//    var count = 0;
//    var intId = setInterval(counter, 1000);
//    
//    function counter(){
//        console.log(++count);
////        if (count == 100) {
////            console.log("getting hungry");
////        }
//    }
//    
//    
//
//    $('.feederBtn').on('click', function () {
//        var currentBtn = $(this);
//        var animal = currentBtn.attr("data-animal");
//        //        var Number = currentBtn.attr("data-number");
//        if (currentBtn.html() == "Feed") {
//            console.log("feed click");
//            currentBtn.html("Done");
//            currentBtn.css({
//                'background-color': '#558b2f',
//                'color': 'white'
//            });
//        } else {
//            console.log("alert");
//            $("#" + animal).show("alert");
//        }
//    });





    //  -------------------  Modal Code ------------------------

    //Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("modalBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
        console.log("click");
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    //  -------------------  Schedule Code ------------------------
    $('.scheduleBtn').on('click', function (event) {
        event.preventDefault();
        var currentBtn = $(this);
        if (currentBtn.html == 'Schedule') {
            console.log("schedule click");
        }
        currentBtn.toggleClass('scheduleBtnClick');
        currentBtn.val('Time Set');

    });



    //  -------------------  Slider Code ------------------------
    var slider = document.getElementById("slider");
    var selector = document.getElementById("selector");
    var SelectValue = document.getElementById("SelectValue");
    var ProgressBar = document.getElementById("ProgressBar");

    SelectValue.innerHTML = slider.value;

    slider.oninput = function () {
        SelectValue.innerHTML = this.value + ' hours';
        selector.style.left = this.value + "%";
        ProgressBar.style.width = this.value + "%";
    }
});
