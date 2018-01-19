$(function () {
    $("#project_container").css("margin-bottom", $("#copyright_bar").outerHeight());

    var current_max_project_space_height = $(window).innerHeight() - $("#menu").outerHeight() - $("#copyright_bar").outerHeight();
    var current_project_space_height = $("#project").height();

    if (current_max_project_space_height < current_project_space_height) {
        $("#project_container").css("height", current_project_space_height);
    }
    else {
        $("#project_container").css("height", current_max_project_space_height);
    }

    $("html").css("height", $("#project_container").height());
    $("body").css("height", $("#project_container").height());

    $(window).resize(function () {
        $("#project_container").css("margin-bottom", $("#copyright_bar").outerHeight());

        current_max_project_space_height = $(window).innerHeight() - $("#menu").outerHeight() - $("#copyright_bar").outerHeight();
        current_project_space_height = $("#project").height();

        if (current_max_project_space_height < current_project_space_height) {
            $("#project_container").css("height", current_project_space_height);
        }
        else {
            $("#project_container").css("height", current_max_project_space_height);
        }

        $("html").css("height", $("#project_container").height());
        $("body").css("height", $("#project_container").height());
    });
});