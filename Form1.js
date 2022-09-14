// add book to list
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

$(document).on("click", ".closeclick", function () {
    $(this).parent().parent().remove();
});

$("#send-Data").on("click", function () {

    var tr = $("<tr></tr>")
        .append("<td>" + $("#name").val() + "</td>")
        .append("<td>" + $("#email").val() + "</td>")
        .append("<td>" + $("#gender").val() + "</td>")
        .append("<td>" + $("#status").val() + "</td>")
        .append("<td><button type='button'  aria-label='close' class='closeclick close'><span aria-hidden='true'>X</span></button></td>");

    $("tbody").append(tr);

    var data = {
        name: "ali",
        email: "redsahad@gmail.com",
        gender: "male",
        status: "active"
    }



    $.ajax({
        type: "POST",
        headers: {
            'Authorization': 'Bearer 86e29a96bbbddfddf032fab39ba6ef8f0895beefbe5bae18586ac6ae4d203b55'
        },
        url: "https://gorest.co.in/public/v2/users",
        data: data,
        success: function (response) {
            alert(response.id);
        }
    });


});

