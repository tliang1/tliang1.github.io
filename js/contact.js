$(function () {
    $("#contact_container").css("margin-bottom", $("#copyright_bar").outerHeight());

    var current_max_contact_space_height = $(window).innerHeight() - $("#menu").outerHeight() - $("#copyright_bar").outerHeight();
    var current_contact_space_height = $("#contact").height();

    if (current_max_contact_space_height < current_contact_space_height) {
        $("#contact_container").css("height", current_contact_space_height);
    }
    else {
        $("#contact_container").css("height", current_max_contact_space_height);
    }

    $("html").css("height", $("#contact_container").height());
    $("body").css("height", $("#contact_container").height());

    $(window).resize(function () {
        $("#contact_container").css("margin-bottom", $("#copyright_bar").outerHeight());

        current_max_contact_space_height = $(window).innerHeight() - $("#menu").outerHeight() - $("#copyright_bar").outerHeight();
        current_contact_space_height = $("#contact").height();

        if (current_max_contact_space_height < current_contact_space_height) {
            $("#contact_container").css("height", current_contact_space_height);
        }
        else {
            $("#contact_container").css("height", current_max_contact_space_height);
        }

        $("html").css("height", $("#contact_container").height());
        $("body").css("height", $("#contact_container").height());
    });
});