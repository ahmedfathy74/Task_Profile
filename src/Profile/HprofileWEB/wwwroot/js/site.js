// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
    

$(document).ready(function () {
    $.ajax({
        method:"GET",
        url: "https://localhost:44314/api/HprofileWExp",
        dataType: "json",   
        success: function (data) {
            var items = '';
            $.each(data, function (i, item) {
                var card = "<div class='card mb-3'style='max-width:700px;'>"  
                    +"<div class='row g-0'>"
                    + "<div class='col-md-1 p-3'>"
                    + "<img src='/img/icon-workexperience.png'/>"
                    + "</div>"
                    + "<div class='col-md-11'>"
                    + "<div class='card-body'>"
                    + "<div class='row d-flex'>"
                    + "<span class='p-2 flex-grow-1 card-title titel-exper-style'>" + item.expName + "</span>"
                    + " <div class='p-2'>"
                    + "<button class='edit-work-style'> <i class='fa-solid fa-pen-to-square'></i></button>"
                    + " <button class='edit-work-style'><i class='fa-solid fa-trash-can'></i></button>"
                    + " </div>"
                    +"</div > "
                    + "<p class='card-text company-exper-style'>" + item.companyName + "</p>"
                    + "<p class='card-text company-exper-style'>" + item.jobDescription + "</p >"
                    + " </div> "
                    + "</div >"
                    + "</div >"
                    + "</div > ";
                $('#tblProducts').append(card);
            });
        },
        error: function (ex) {
           /* var r = jQuery.parseJSON(response.responseText);*/
            alert("Message:LALFDNKDNFASKDNF ");
        }
    });

    $('.add-workdata').on('click', function () {
        $.ajax({
            method: "Post",
            url: "https://localhost:44314/api/HprofileWExp",
            dataType: "json",
            data: $('#form1').serialize(),
            contentType: "application/json; charset=utf-8;",
            success: function (data) {
                alert("Message:yes");
                console.log(data);
            },
            error: function (ex) {       
                alert("Message:LALFDNKDNFASKDNF ");
            }
        });
    });
   /*
    function triggerAdd() {

        $.ajax({
            method: "Post",
            url: "https://localhost:44314/api/HprofileWExp/AddWork",
            dataType: "json",
            data: "sdsds",
            contentType: "application/json; charset=utf-8;",
            success: function (data) {
                alert("Message:yes");

            },
            error: function (ex) {
              
               alert("Message:LALFDNKDNFASKDNF ");
           }

        });
    };
    
    */
});


