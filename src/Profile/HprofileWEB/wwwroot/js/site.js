// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.


// Write your JavaScript code.

let strcompanies = [];
let titlessuggestions = [];
let StartMonth = "";
let Startyear = "";
let EndMonth = "";
let EndYear = "";
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

$(document).ready(function () {
    $(".add-work-style").click(function () {
        $('#expName').val("");
        $('#companyName').val("");
        $('#cityName').val("");
        $('#jobDescription').val("");
        $('#startmonth').prop('selectedIndex', 0);
        $('#startyear').prop('selectedIndex', 0);
        $('#endmonth').prop('selectedIndex', 0);
        $('#endyear').prop('selectedIndex', 0);
        $(".invalid-feedback").hide();
        $("#addid").show();
        $("#updateid").hide();
    });

    $("select#startmonth").change(function () {
        StartMonth = $(this).children("option:selected").val(); 
    });
    $("select#startyear").change(function () {
        Startyear = $(this).children("option:selected").val();
    });
    $("select#endmonth").change(function () {
        EndMonth = $(this).children("option:selected").val();
    });
    $("select#endyear").change(function () {
        EndYear = $(this).children("option:selected").val();
    });
    $(".invalid-feedback").hide();
    
    getall();
    getautodataCompanies();
    getalltitles();  

    $("#addid").click(function (e) {
        var form = document.querySelector('.needs-validation');
        let titlename = $('#expName').val();
        let employername = $('#companyName').val();
        let cityname = $('#cityName').val();
        let jobdescription = $('#jobDescription').val();
        if (titlename.length == "" || employername.length == "" || cityname.length == "" || jobdescription.length == "") {
            e.preventDefault();
            if (titlename.length == "") { $(".expnam .invalid-feedback").show(); } else { $(".expnam .invalid-feedback").hide(); }
            if (employername.length == "") { $(".empnam .invalid-feedback").show(); } else { $(".empnam .invalid-feedback").hide(); }
            if (cityname.length == "") { $(".citynam .invalid-feedback").show(); } else { $(".citynam .invalid-feedback").hide(); }
            if (jobdescription.length == "") { $(".desnam .invalid-feedback").show(); } else { $(".desnam .invalid-feedback").hide(); }
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
    
    let StartDate = StartMonth + "/" + "20" + "/" + Startyear;
    let EndDate = EndMonth + "/" + "20" + "/" + EndYear;
    console.log(StartDate);
    console.log(StartDate);
    var sDDate = new Date(StartDate);
    var EDDDate = new Date(EndDate);
    console.log(sDDate);
    console.log(EDDDate);

    //var dd = String(sDDate).padStart(2, '0');
    //var mm = String(sDDate).padStart(2, '0'); //January is 0!
    //var yyyy = sDDate.getFullYear();

    var today = StartMonth + '/' + '1' + '/' + Startyear;
    var test = sDDate.toISOString();
    var test2 = sDDate.toDateString();
    var test3 = sDDate.toString();
    console.log(JSON.parse(JSON.stringify(sDDate)));

    var myModel =
    {
        "expName": $('#expName').val(),
        "companyName": $('#companyName').val(),
        "cityName": $('#cityName').val(),
        "jobDescription": $('#jobDescription').val(),
        "startDate": sDDate,
        "endDate": EDDDate,
        "profID":1
    };
    console.log(myModel);
    
    var jsonToPost = JSON.stringify(myModel);
    console.log(jsonToPost);
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
                var sdate = new Date(item.startDate);
                var edate = new Date(item.endDate);
                console.log(sdate);
                ////var tst = 0;
                ////var tst2 = 0;
                ////if (sdate.getMonth() != 0) {
                ////    tst = sdate.getMonth() + 1;
                ////}
                ////if (edate.getMonth() != 0) {
                ////    tst2 = edate.getMonth() + 1;
                ////}
                var SEdate = "f[" + month[sdate.getMonth() + 1] + " " + sdate.getFullYear() + " - " + month[edate.getMonth() + 1] + " " + edate.getFullYear() + "]";
                console.log(SEdate);
                console.log(sdate.getMonth());
                console.log(sdate.getFullYear());
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
                    + "<p class='card-text company-exper-style'>" + SEdate + "</p>"
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
    var stardate = new Date(eventObj.startDate);
    var endddate = new Date(eventObj.endDate);
    $('#startmonth').prop('value', stardate.getMonth() + 2);
    $('#startyear').prop('value', stardate.getFullYear());
    $('#endmonth').prop('value', endddate.getMonth() + 2);
    $('#endyear').prop('value', endddate.getFullYear());
    $('#expid').val(eventObj.expID);
};

function UPDATEDATA()
{
    if (StartMonth.length == "") {
        StartMonth = $("#startmonth").children("option:selected").val();
    }
    if (Startyear.length == "") {
        Startyear = $("#startyear").children("option:selected").val();
    }
    if (EndMonth.length == "") {
        EndMonth = $("#endmonth").children("option:selected").val();
    }
    if (EndYear.length == "") {
        EndYear = $("#endmonth").children("option:selected").val();
    }
    let StartDate = StartMonth + "/" + "1" + "/" + Startyear;
    let EndDate = EndMonth + "/" + "1" + "/" + EndYear;
    console.log(StartMonth);
    console.log(StartDate);
    var SDate = new Date(StartDate);
    var EDate = new Date(EndDate);
    
    var myModel =
    {
        "expid": $('#expid').val(),
        "expName": $('#expName').val(),
        "companyName": $('#companyName').val(),
        "cityName": $('#cityName').val(),
        "jobDescription": $('#jobDescription').val(),
        "startDate": SDate,
        "endDate": EDate,
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

