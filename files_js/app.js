"use strict";


$('.burger-menu span').on('click', function() {
    $('header .nav-menu').addClass('active-menu');
});

$('header .nav-menu .mobile-cross a, header .nav-menu a').on('click', function() {
    $('header .nav-menu').removeClass('active-menu');
});



const sizes = [1, 1, 2, 3, 4];

function randomPosition(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const body = document.querySelector(".body");
var theDiv = document.getElementById("lightNwsStar");

for (let i = 0; i < 300; i++) {
    const top = randomPosition(1, 100);
    const left = randomPosition(1, 100);
    const random = Math.floor(Math.random() * sizes.length);
    const randomSize = sizes[random];
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.top = top + '%';
    div.style.left = left + '%';
    div.style.height = randomSize + 'px';
    div.style.width = randomSize + 'px';
    div.style.backgroundColor = "#FFFFFF";
    div.style.borderRadius = '50%';
    if (i <= 50) {
        div.classList.add('star1');
    }
    if (i <= 100 && i > 50) {
        div.classList.add('star2');
    }
    if (i <= 150 && i > 100) {
        div.classList.add('star3');
    }
    if (i <= 200 && i > 150) {
        div.classList.add('star4');
    }
    if (i <= 250 && i > 200) {
        div.classList.add('star5');
    }
    if (i <= 300 && i > 250) {
        div.classList.add('star6');
    }
    theDiv.appendChild(div);
}

window.addEventListener("load", function() {
    var preloader = document.getElementById("preloader");
    preloader.classList.add("hidden");
    setTimeout(() => {
        preloader.style.display = "none";
    }, 7500);
});

// $(document).ready(function() {
//     $("#investmentForm").submit(function(event) {
//         event.preventDefault(); // Prevent default form submission

//         var form = $(this);
//         var formData = form.serialize();
//         var submitBtn = $("#submitBtn");
//         var loader = $(".loader");
//         var responseMessage = $("#responseMessage");

//         // Show loader animation
//         loader.show();
//         submitBtn.prop("disabled", true);

//         $.ajax({
//             type: "POST",
//             url: form.attr("action"),
//             data: formData,
//             dataType: "json",
//             success: function(response) {
//                 loader.hide();
//                 submitBtn.prop("disabled", false);

//                 if (response.status === "success") {
//                     responseMessage.html('<p style="color:green;">' + response.message + '</p>').fadeIn();
//                     form.trigger("reset"); // Reset form fields after success
//                 } else {
//                     responseMessage.html('<p style="color:red;">' + response.message + '</p>').fadeIn();
//                 }
//             },
//             error: function() {
//                 loader.hide();
//                 submitBtn.prop("disabled", false);
//                 responseMessage.html('<p style="color:red;">Something went wrong. Please try again.</p>').fadeIn();
//             }
//         });
//     });
// });


// document.getElementById("investmentForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission

//     // Show popup
//     document.getElementById("sharePopup").style.display = "flex";

//     // Generate Twitter share link
//     let shareText = encodeURIComponent("I’m ready for the Mars journey with $EROL!\n\nI’ve completed my pre-sale application for @ErolMuskAvax, good luck!\n\n#Avalanche $AVAX $ErolMusk @TheArenaApp\n\n🔗 erolmusk.com/pre-sale");
//     let shareURL = `https://twitter.com/intent/tweet?text=${shareText}`;

//     // Open Twitter in a new window and detect when it closes
//     let twitterWindow = window.open(shareURL, "twitterShare", "width=600,height=400");

//     // Check when the user closes the Twitter window
//     let checkPopup = setInterval(function() {
//         if (twitterWindow.closed) {
//             clearInterval(checkPopup);
//             // Auto-submit the form after sharing
//             document.getElementById("investmentForm").submit();
//         }
//     }, 1000);
// });



$(document).ready(function() {
    var hasShared = false; // Track if the user has shared

    $("#investmentForm").submit(function(event) {
        event.preventDefault(); // Prevent default submission

        if (!hasShared) {
            // Open share popup instead of submitting
            $("#sharePopup").fadeIn();
        } else {
            submitForm(); // If already shared, submit the form
        }
    });

    // Share on Twitter & Auto-Submit Form
    $("#twitterShare").click(function(event) {
        event.preventDefault();

        var tweetText = encodeURIComponent(
            "I’m ready for the Mars journey with $EROL!\n\nI’ve completed my pre-sale application for @ErolMuskAvax, good luck!\n\n#Avalanche $AVAX $ErolMusk @TheArenaApp"
        );
        var tweetUrl = "https://twitter.com/intent/tweet?text=" + tweetText;

        // Open Twitter Share in a New Tab
        window.open(tweetUrl, "_blank");

        // Mark as shared
        hasShared = true;

        // Automatically submit form after a short delay (allowing the user to share)
        setTimeout(function() {
            submitForm();
        }, 4000); // 5-second delay to give time for sharing
    });

    // Function to submit form via AJAX
    function submitForm() {
        var form = $("#investmentForm");
        var formData = form.serialize();
        var submitBtn = $("#submitBtn");
        var loader = $(".loader");
        var responseMessage = $("#responseMessage");

        loader.show();
        submitBtn.prop("disabled", true);

        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: formData,
            dataType: "json",
            success: function(response) {
                loader.hide();
                submitBtn.prop("disabled", false);

                if (response.status === "success") {
                    responseMessage.html('<p style="color:green;">' + response.message + '</p>').fadeIn();
                    form.trigger("reset");

                    $("#sharePopup").fadeOut();
                } else {
                    responseMessage.html('<p style="color:red;">' + response.message + '</p>').fadeIn();
                }
            },
            error: function() {
                loader.hide();
                submitBtn.prop("disabled", false);
                responseMessage.html('<p style="color:red;">Something went wrong. Please try again.</p>').fadeIn();
            }
        });
    }
});


