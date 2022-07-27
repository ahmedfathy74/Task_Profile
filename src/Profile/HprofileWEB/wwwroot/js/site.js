// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let strcompanies = [];
let titlessuggestions = [];

$(document).ready(function () {
    $(".add-work-style").click(function () {
        $('#expName').val("");
        $('#companyName').val("");
        $('#cityName').val("");
        $('#jobDescription').val("");
        $(".invalid-feedback").hide();
    });
    $(".invalid-feedback").hide();
    $("#updateid").hide();
    getall();
    getautodataCompanies();
    getalltitles();
       // Example starter JavaScript for disabling form submissions if there are invalid fields
    //var form = document.querySelector('.needs-validation');
    //console.log(e);
    ////form.addEventListener('submit', function (event) {
    ////      console.log(event);
    ////    form.classList.add('was-validated')
    ////}, false);

    $("#addid").click(function (e) {
        var form = document.querySelector('.needs-validation');
        let titlename = $('#expName').val();
        let employername = $('#companyName').val();
        let cityname = $('#cityName').val();
        let jobdescription = $('#jobDescription').val();
        if (titlename.length == "" || employername.length == "" || cityname.length == "" || jobdescription.length == "") {
            e.preventDefault();
            $(".invalid-feedback").show();
        }
        form.classList.add('was-validated');
    });
});

function getautodataCompanies() {
    $.ajax({
        method: "GET",
        url: "https://localhost:44314/api/Companies",
        dataType: "json",
        success: function (data) {
            $.each(data, function (i, item) {
                strcompanies.push(item.companyName);
            });
            console.log(strcompanies);
        },
        error: function (ex) {
        }

    });
}

function getalltitles() {
    $.ajax({
        method: "GET",
        url: "https://localhost:44314/api/Titles",
        dataType: "json",
        success: function (data) {
            $.each(data, function (i, item) {
                titlessuggestions.push(item.jobName);
            });        
        },
        error: function (ex) {
        }

    });
}

function triggerAdd() {  
    var myModel =
    {
        "expName": $('#expName').val(),
        "companyName": $('#companyName').val(),
        "cityName": $('#cityName').val(),
        "jobDescription": $('#jobDescription').val(),
        "profID":1
    };
    console.log(myModel);
    var jsonToPost = JSON.stringify(myModel);
    console.log(jsonToPost);
    //console.log($("#form1").val());
    //var data = $("#form1").serialize();
    //console.log(data);
    alert(data);
    $.ajax({
        method:"Post",
        url: "https://localhost:44314/api/HprofileWExp",
        dataType: "json",
        contentType: "application/json; charset=utf-8;",
        data: jsonToPost,
        success: function (result) {
            getall();
            $("#exampleModal").modal('hide');
        },
        error: function (ex) {
        }

    });
};

function getall() {
    $.ajax({
        method: "GET",
        url: "https://localhost:44314/api/HprofileWExp",
        dataType: "json",
        success: function (data) {
            $("#tblProducts").html("");
            $.each(data, function (i, item) {
                var str = JSON.stringify(item);
                var card = "<div class='card mb-3'style='max-width:700px;'>"
                    + "<div class='row g-0'>"
                    + "<div class='col-md-1 p-3'>"
                    + "<img src='/img/icon-workexperience.png'/>"
                    + "</div>"
                    + "<div class='col-md-11'>"
                    + "<div class='card-body'>"
                    + "<div class='row d-flex'>"
                    + "<span class='p-2 flex-grow-1 card-title titel-exper-style'>" + item.expName + "</span>"
                    + " <div class='p-2'>"
                    + "<button id='updateitem' data-index='" + i + "' onclick='updateexp("+str+")'><i class='fa-solid fa-pen-to-square'></i></button>"
                    + " <button onclick='deleteitem("+item.expID+")'><i class='fa-solid fa-trash-can'></i></button>"
                    + " </div>"
                    + "</div > "
                    + "<p class='card-text company-exper-style'>" + item.companyName + "</p>"
                    + "<p class='card-text company-exper-style'>" + item.jobDescription + "</p >"
                    + " </div> "
                    + "</div >"
                    + "</div >"
                    + "</div > ";
                $('#tblProducts').append(card);
            });
            //$('#tblProducts').delegate("#updateitem", "click", function (ev) {
            //    updateexp(data[$(this).data('index')]);
            //});
        },
        error: function (ex) {
            /* var r = jQuery.parseJSON(response.responseText);*/
            alert("Message:data not loaded ");
        }
    });
};

function updateexp(eventObj)
{
    $("#addid").hide();
    $("#updateid").show();
    $("#exampleModal").modal('show');
    $('#expName').val(eventObj.expName);
    $('#companyName').val(eventObj.companyName);
    $('#cityName').val(eventObj.cityName);
    $('#jobDescription').val(eventObj.jobDescription);
    $('#expid').val(eventObj.expID);
};

function UPDATEDATA()
{
    var myModel =
    {
        "expid": $('#expid').val(),
        "expName": $('#expName').val(),
        "companyName": $('#companyName').val(),
        "cityName": $('#cityName').val(),
        "jobDescription": $('#jobDescription').val(),
        "profID": 1
    };
    console.log(myModel);
    var jsonToPost = JSON.stringify(myModel);
    console.log(jsonToPost);
    $.ajax({
        method: "Put",
        url: "https://localhost:44314/api/HprofileWExp",
        dataType: "json",
        contentType: "application/json; charset=utf-8;",
        data: jsonToPost,
        success: function (result) {
            getall();
            $("#exampleModal").modal('hide');
        },
        error: function (ex) {

            alert("Message:No,data not added ");
        }

    });
}

function deleteitem(deleteitem)
{
    
    if (confirm("Do you want Delete this item ?!")) {
        $.ajax({
            method: "Delete",
            url: "https://localhost:44314/api/HprofileWExp/"+deleteitem,   
            success: function (result) {
                getall();
            },
            error: function (ex) {
                alert("Message:No,data not added ");
            }

        });
    }
  
   
};

