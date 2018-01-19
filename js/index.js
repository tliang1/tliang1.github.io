$(function () {
    $("#profile_container").css("margin-bottom", $("#copyright_bar").outerHeight());

    var current_max_profile_space_height = $(window).innerHeight() - $("#menu").outerHeight() - $("#copyright_bar").outerHeight();
    var current_profile_space_height = $("#profile").height();

    if (current_max_profile_space_height < current_profile_space_height) {
        $("#profile_container").css("height", current_profile_space_height);
    }
    else {
        $("#profile_container").css("height", current_max_profile_space_height);
    }

    $("html").css("height", $("#profile_container").height());
    $("body").css("height", $("#profile_container").height());

    $(window).resize(function () {
        $("#profile_container").css("margin-bottom", $("#copyright_bar").outerHeight());

        current_max_profile_space_height = $(window).innerHeight() - $("#menu").outerHeight() - $("#copyright_bar").outerHeight();
        current_profile_space_height = $("#profile").height();

        if (current_max_profile_space_height < current_profile_space_height) {
            $("#profile_container").css("height", current_profile_space_height);
        }
        else {
            $("#profile_container").css("height", current_max_profile_space_height);
        }

        $("html").css("height", $("#profile_container").height());
        $("body").css("height", $("#profile_container").height());
    });
});