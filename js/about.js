$(function () {
    $("#about_container").css("margin-bottom", $("#copyright_bar").outerHeight());

    var current_max_about_space_height = $(window).innerHeight() - $("#menu").outerHeight() - $("#copyright_bar").outerHeight();
    var current_about_space_height = $("#about").height();

    if (current_max_about_space_height < current_about_space_height) {
        $("#about_container").css("height", current_about_space_height);
    }
    else {
        $("#about_container").css("height", current_max_about_space_height);
    }

    $("html").css("height", $("#about_container").height());
    $("body").css("height", $("#about_container").height());

    $(window).resize(function () {
        $("#about_container").css("margin-bottom", $("#copyright_bar").outerHeight());

        current_max_about_space_height = $(window).innerHeight() - $("#menu").outerHeight() - $("#copyright_bar").outerHeight();
        current_about_space_height = $("#about").height();

        if (current_max_about_space_height < current_about_space_height) {
            $("#about_container").css("height", current_about_space_height);
        }
        else {
            $("#about_container").css("height", current_max_about_space_height);
        }

        $("html").css("height", $("#about_container").height());
        $("body").css("height", $("#about_container").height());
    });
});