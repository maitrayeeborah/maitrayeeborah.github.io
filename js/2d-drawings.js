(function($) {
    "use strict";

    // HEADER
    $(".navbar").headroom();

    // list all the images
    for (let i = 1; i <= 31; i++) {
        var $div = $("<div>", { class: "card drawing-card", id: i + ".jpg" });
        var $img = $("<img>", {
            class: "card-img-top image",
            src: "../images/2d/" + i + ".jpg",
        });

        // image middle with text "Click to enlarge" during hover
        var $middle = $("<div>", { class: "middle" });
        var $middle_txt = $("<div>", { class: "text" });
        $middle_txt.text("Click to enlarge");
        $middle.append($middle_txt);

        $div.append($img);
        $div.append($middle);
        $(".card-columns").append($div);
    }

    var id;

    // Get the modal
    var modal = document.getElementById("myModal");

    // pop-up and show the image on each image click after 480px
    if ($(window).width() > 480) {
        $(".card-columns .drawing-card")
            .hover(function() {
                $(this).css("cursor", "pointer");
            })
            .click(function() {
                // Navigate to the respective pages from card-click
                id = $(this).attr("id");
                id = "../images/2d/" + id;
                //alert(id);

                modal.style.display = "block";

                // display image
                $(".modal-content").attr("src", id);
            });
    }

    // When the user clicks on <span> (x), close the modal
    $(".close").click(function() {
        modal.style.display = "none";
    });
})(jQuery);