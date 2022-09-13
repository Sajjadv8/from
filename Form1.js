// //inputs
// $("input").focus(function () {
//     $(this).css("opacity", 1);
// })
// $("input").blur(function () {
//     $(this).css("opacity", .2);
// })


//     //close event

//     (".close").click(function () {
//         $(this).parents(".bodytab").hide(600);
//     })

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

})

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
        name: "",
        email: "",
        gender: "",
        status: ""
    }

    // $.post("https://gorest.co.in/public/v2/users",data, function (data) {
    //     $(".tbody").html(data);
    // })

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




    return;
    let name_booklist = $("#fname").val(),
        name_emaillist = $("#ename").val(),
        name_gender = $("#cnumber").val(),
        name_status = $("#fbname"),
        new_tr = document.createElement("tr"),
        new_th_booklist = document.createElement("th"),
        new_th_emaillist = document.createElement("td"),
        new_th_gender = document.createElement("td"),
        new_th_status = document.createElement("td"),
        table_name_booklist = document.createTextNode(name_booklist),
        table_name_emaillist = document.createTextNode(name_emaillist),
        table_name_gender = document.createTextNode(name_gender),
        table_name_status = document.createTextNode(name_status);

    //add text
    name_booklist.appendChild(table_name_booklist);
    name_emaillist.appendChild(table_name_emaillist);
    name_gender.appendChild(table_name_gender);
    name_status.appendChild(table_name_status);

    // add tr to td
    let name_tab = new_tr.appendChild(new_th_booklist);
    let ename_tab = new_tr.appendChild(new_th_emaillist);
    let gendername_tab = new_tr.appendChild(new_th_gender);
    let statusname_tab = new_tr.appendChild(new_th_status);
    new_th_booklist.setAttribute("scope", "row")

    // add tr to table
    let new_table = document.getElementById("tab");
    new_table.appendChild(new_tr);
    new_tr > setAttribute("class", "tab");

    // close button 
    let button_td = document.createElement("td"),
        button = document.createElement("button"),
        but_span = document.createElement("span"),
        span_text = document.createTextNode("X");

    button_td.appendChild(but);
    button.appendChild(but_span);
    but_span.appendChild(span_text);
    new_tr.appendChild(button_td);

    button.setAttribute("type", "button");
    button.setAttribute("class", "close");
    button.setAttribute("aria-label", "close");
    button.setAttribute("aria-hidden", "true");

    // click to from reset
    this.form.reset();


    // close item
    $(".close").click(function () {
        $(this).parents(".tab").hide(600);

    });
})