(function($) {
    "use strict";

    // COLOR MODE
    $(".color-mode").click(function() {
        $(".color-mode-icon").toggleClass("active");
        $("body").toggleClass("dark-mode");
    });

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
    });

    // SMOOTHSCROLL
    $(function() {
        $(".nav-link, .custom-btn-link").on("click", function(event) {
            var $anchor = $(this);
            $("html, body")
                .stop()
                .animate({
                        scrollTop: $($anchor.attr("href")).offset().top - 49,
                    },
                    1000
                );
            event.preventDefault();
        });
    });

    // TOOLTIP
    $(".social-links a").tooltip();

    // SKILLS GENERATOR
    let skills = [
        "Matte Painting",
        "Maya Dynamics",
        "Modelling",
        "Texturing",
        "Lighting",
        "Compositing",
        "Motion Graphics",
        "Animation (2D & 3D)",
        "Rigging",
        "Matchmoving",
        "Web Design",
        "Graphic Design",
        "Illustration",
        "Photography",
        "Rotoscoping",
        "Concept Artist",
        "Maya",
        "Mudbox",
        "Mari",
        "Zbrush",
        "Nuke",
        "Houdini",
        "Silhoutte fx",
        "Uv Layout",
        "Vray",
        "After Effects",
        "Photoshop",
        "Dreamweaver",
        "Realflow",
        "Premiere Pro",
        "Ableton Live",
        "Audio Mulch",
        "Flash",
        "Macromedia Director",
        "Microsoft Office",
    ];
    let bg_color = [
        "#f95d0b",
        "#e983cf",
        "#74b75e",
        "#ef9ba6",
        "#35c9a2",
        "#ffdf6a",
        "#d8c653",
        "#afb3b4",
        "#ee916a",
        "#f8043e",
        "#db3e12",
        "#1be7a1",
        "#ea2c57",
        "#ed89c0",
    ];
    let skillContainer = document.getElementById("skill-container");
    let item_div;
    let skill_div;
    let skill_text;

    skills = skills.sort(() => Math.random() - 0.5);

    for (let tg of skills) {
        item_div = document.createElement("div");
        skill_div = document.createElement("div");
        skill_text = document.createElement("p");

        item_div.className = "item";
        skill_div.className = "skill";
        skill_text.className = "skillText";

        // setting skill
        skill_text.innerText = tg;

        // setting bg-color
        item_div.style.backgroundColor =
            bg_color[Math.floor(Math.random() * bg_color.length)];
        item_div.style.opacity = 0.8;

        skill_div.appendChild(skill_text);
        item_div.appendChild(skill_div);
        skillContainer.appendChild(item_div);
    }

    let mailMe = document.getElementById("mail-me");
    mailMe.addEventListener("click", function() {
        window.location.href = "mailto:ajaygovin@gmail.com";
    });

    // Make each card clickable on hover
    $("#portfolio-cards .card")
        .hover(function() {
            $(this).css("cursor", "pointer");
        })
        .click(function() {
            // Navigate to the respective pages from card-click
            var id = $(this).attr("id");
            if (id == "so-chromatic") {
                window.location = "https://www.instagram.com/so_chromatic/";
            } else {
                window.location = "pages/" + id + ".html";
            }
        });

    // Responsive navigation click
    $(".responsive-nav").click(function() {
        alert("hi");
    });

    // Sending the visitor text
    $(".send-btn").click(function() {
        var visitorEmail = $("#exampleInputEmail1").val();
        var visitorMessage = $(".visitor-text").val();
        var email = "maitrayeeborah@gmail.com";
        var subject = "Visitor Query";
        var emailBody = visitorMessage;
        window.location.href =
            "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
    });
})(jQuery);