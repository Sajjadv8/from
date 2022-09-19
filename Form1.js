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

$(function () {
    $(".clearclick close").on("click", function (e) {
        e.preventDefault();
        alert("go");

        let id = $(this).find(".form-control").val();


        $.ajax({
            type: "DELETE",
            URL: "https : // gorest.co.in/public/v2/users",
            data: { id: id },
            success: function () {
                alert("good");
            },
            Error: function () {
                alert("no good");

            }

        })
    })

});