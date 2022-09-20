// add book to list
$(document).on("click", ".closeclick", function () {
    $(this).parent().parent().remove();
});
$("#send-Data").on("click", function (e) {
    e.preventDefault();
    var tr = $("<tr></tr>")
        .append("<td>" + $("#name").val() + "</td>")
        .append("<td>" + $("#email").val() + "</td>")
        .append("<td>" + $("#gender").val() + "</td>")
        .append("<td>" + $("#status").val() + "</td>")
        .append("<td><button type='button'  aria-label='close' class='closeclick close'><span aria-hidden='true'>X</span></button></td>");

    $("tbody").append(tr);


    var data = {
        name: $("#name").val(),
        email: $("#email").val(),
        gender: $("#gender").val(),
        status: $("#status").val()
    };
    $.ajax({
        type: "POST",
        headers: {
            'Authorization': 'Bearer 86e29a96bbbddfddf032fab39ba6ef8f0895beefbe5bae18586ac6ae4d203b55'
        },
        url: "https://gorest.co.in/public/v2/users",
        data: data,
        success: function (response) {
            // alert(response.id);
        }
    });

});

$(function () {
    $("#request-data").on("click", function () {
        $.get("https://gorest.co.in/public/v2/users", function (data) {
            $.each(data, function (i, person) {

                if (person.status == "active") {
                    $(".tbody").append("<tr class='active'><td>" + person.name + "</td>" + "<td>" + person.email + "</td>" + "<td>" + person.gender + "</td>" + "<td>" + person.status + "</td>" + "<td>" + "<button type='button' aria-label='close' class='closeclick close'><span aria-hidden='true'>X</span></button> " + "</td></tr>");
                } else {
                    $(".tbody").append("<tr class='inactive'><td>" + person.name + "</td>" + "<td>" + person.email + "</td>" + "<td>" + person.gender + "</td>" + "<td>" + person.status + "</td>" + "<td>" + "<button type='button' aria-label='close' class='closeclick close'><span aria-hidden='true'>X</span></button> " + "</td></tr>");
                }

            })

        })

    })

});

$("#table").on("click", ".remove-category", function (e) {
    e.preventDefault();

    let Data = $(this).data("id");
    $.ajax({
        url: "https://groest.co.in/public/v2/users" + '/remove_category/' + Data,
        headers: {
            'Authorization': "Bearer  658874826d15de24118bdb29b55117893ac85bf87d8c1b11148f7ea10fb43119"
        },

        type: "GET",
        dataType: "JSON"
    }).done(function (response) {
        if (response.status) {
            $(this).parents("tr").remove();
        }
    });
});