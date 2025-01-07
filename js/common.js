/* Responsive menu toggle */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "menu-toggle") {
        x.className += " responsive";
    } else {
        x.className = "menu-toggle";
    }
}
/* Responsive menu toggle end */

$(function() {

    $(document).click(function(e) {
        var target = e.target;
        if (!$(target).is('.notification_list') && !$(target).parents().is('.notification_list'))
            $('.notification_menu').slideUp();


        var target = e.target;
        if (!$(target).is('.user_area') && !$(target).parents().is('.user_area'))
            $('.user_menu').slideUp();


        var target = e.target;
        if (!$(target).is('.module_bar') && !$(target).parents().is('.module_bar'))
            $('.module_bar_menu').slideUp();
    });

    $(".multi_menu").click(function() {
        $(".treeview-menu").slideToggle("slow");
    });

    /* $(".multi_menu_r").click(function(){  
        $(".second_toggle").slideToggle("slow");  
    });
    $(".multi_menu").click(function(){  
        $(".first_toggle").slideToggle("slow");  
    }); */

    $(".notification_list").unbind('click').click(function() {
        var otherMenuItems = $(".notification_list").not($(this));
        otherMenuItems.children(".notification_menu").slideUp();
        otherMenuItems.children("a").removeClass("sub-open");

        $(this).children("a").toggleClass("sub-open");
        $(this).children(".notification_menu").slideToggle();
    });
    $(".user_area").unbind('click').click(function() {
        var otherMenuItems = $(".user_area").not($(this));
        otherMenuItems.children(".user_menu").slideUp();
        otherMenuItems.children("a").removeClass("sub-open");

        $(this).children("a").toggleClass("sub-open");
        $(this).children(".user_menu").slideToggle();
    });
    $(".module_bar").unbind('click').click(function() {
        var otherMenuItems = $(".module_bar").not($(this));
        otherMenuItems.children(".module_bar_menu").slideUp();
        otherMenuItems.children("a").removeClass("sub-open");

        $(this).children("a").toggleClass("sub-open");
        $(this).children(".module_bar_menu").slideToggle();
    });

});


/* tooltip */
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})


var TodayDateddMMyyy = $('#TodayDateddMMyyy').val();
let TodayDateJs = TodayDateddMMyyy ? new Date(TodayDateddMMyyy.split("/")[2], TodayDateddMMyyy.split("/")[1] - 1, TodayDateddMMyyy.split("/")[0]) : null;



/* Select search calling */
function CommonSelect2() {
    $(".search_select").select2({
        allowClear: true,
        width: '100%',
        allowHtml: true
    }).on('change', function() {
        // $(this).valid();
    });
}

function CommonDatePickerWithInputMask() {
    /*  Date piker field */

    $(".datepicker").datepicker({
        showOtherMonths: true,
        selectOtherMonths: false,
        format: 'dd/mm/yyyy',
        autoclose: true,
        todayHighlight: true,
        todayBtn: true
    }).change(function() {
        // $(this).valid();  // triggers the validation test        
    });

}

function CommonYearPicker() {

    /* For only Year With id */
    $(".YearPicker").datepicker({
        format: "yyyy",
        viewMode: "years",
        minViewMode: "years"
    }).change(function() {
        // $(this).valid();  // triggers the validation test        
    });
}

function CommonUpdateSelect2Dropdown(ControlId) {
    1
    $(ControlId).trigger('change');
}

function CommonDisableFutureDatePickerWithInputMask() {
    /*  Date piker field */
    $('.CommonDisableFutureDatePicker').inputmask('dd/mm/yyyy');
    $(".CommonDisableFutureDatePicker").datepicker({
        showOtherMonths: true,
        selectOtherMonths: false,
        format: 'dd/mm/yyyy',
        autoclose: true,
        todayHighlight: true,
        //todayBtn: true,
        endDate: new Date()
    }).change(function() {
        $(this).valid(); // triggers the validation test
    }).next().on('click', function() {
        $(this).prev().focus();
    });
}

CommonSelect2();
CommonDatePickerWithInputMask();
CommonYearPicker();
CommonDisableFutureDatePickerWithInputMask();

/* File clear common function */
function ClearFile(ControlId) {
    $(ControlId).val(null);
}


/* 
/*    $('.login_sliders').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed:700,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    cssEase: 'linear'
  });
  


  

/* login form password show hidden */
$(document).ready(function() {
    $('#eye').click(function() {
        $('#password').attr('type', $('#password').is(':password') ? 'text' : 'password');
        if ($('#password').attr('type') === 'password') {
            $('#eye').removeClass('fa-eye').addClass('fa-eye-slash');
        } else {
            $('#eye').removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });


});



/* control field  select js */

$(document).ready(function() {


    function iformat(icon, badge, ) {
        var originalOption = icon.element;
        var originalOptionBadge = $(originalOption).data('badge');

        return $('<span><i class="fa ' + $(originalOption).data('icon') + '"></i> ' + icon.text + '<span class="badge">' + originalOptionBadge + '</span></span>');
    }



    /*    start date end date */
    var sd = new Date(),
        ed = new Date();
    $('#startDate').datetimepicker({
        pickTime: false,
        format: "DD/MM/YYYY",
        defaultDate: sd,
        maxDate: ed
    });

    $('#endDate').datetimepicker({
        pickTime: false,
        format: "DD/MM/YYYY",
        defaultDate: ed,
        minDate: sd
    });


    /* Date range Piker Custom */
    $('#daterange-btn').daterangepicker({
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            startDate: moment().subtract(29, 'days'),
            endDate: moment()
        },
        function(start, end) {
            $('#daterange-btn span').html(start.format('DD/MMM/YYYY') + ' - ' + end.format('DD/MMM/YYYY'))
        }
    )


});

/* Multiple select Jquery */
$(function() {
    $('select').multipleSelect({
        filter: true,
        filterAcceptOnEnter: true
    })
})

$(function() {
    $('#datetimepicker2').datetimepicker({
        locale: 'ru'
    });
});


/* student login slider */
$(".student-slider-lists").slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: false,
    fade: true,
    dots: true,
    appendArrows: $('.carousel-arrows-wrapper'),
    appendDots: $('.carousel-dots-wrapper')
});



$('.slick-pause').on('click', function() {
    var $pauseBtn = $(this);
    if ($pauseBtn.hasClass('paused')) {
        $(".student-slider-lists").slick('slickPlay');
        $pauseBtn.removeClass('paused');
    } else {
        $(".student-slider-lists").slick('slickPause');
        $pauseBtn.addClass('paused');
    }
});



/* currancy rupess converter function */
function currancy(that) {
    if (that.value == "Percentage") {
        document.getElementById("percentage").style.display = "block";
        document.getElementById("rupees").style.display = "none";
    } else if (that.value == "Ammount") {
        document.getElementById("rupees").style.display = "block";
        document.getElementById("percentage").style.display = "none";
    } else if (that.value == "") {
        document.getElementById("rupees").style.display = "none";
        document.getElementById("percentage").style.display = "none";
    }
}


// Start For Notification
let Notification = {
    info: "info",
    warning: "warning",
    error: "error",
    success: "success"
};

let ShowNotification = function(type, message) {
    if (type === 'info') {
        toastNotifyInformation(message);
    } else if (type === 'success') {
        toastNotifySuccess(message);
    } else if (type === 'warning') {
        toastNotifyWarning(message);
    } else if (type === 'error') {
        toastNotifyError(message);
    }
};
// End For Notification

function Validate(formName, tabName) {
    var isValid = true;
    $('#ValidationSummary').empty();
    var ValidationSummaryString = "<ul>";
    if (!tabName) {
        tabName = formName;
    }
    $('#' + tabName).find('input,select,textarea').each(function(index, value) {
        if (!$(value).valid()) {
            var validationMsg = "";

            //https://jqueryvalidation.org/
            //https://stackoverflow.com/questions/3811044/how-can-i-show-errors-in-jquery-validation //10-11-2021
            $.each($("#" + formName).validate().errorList, function(key, val) {

                if (val) {
                    validationMsg = val.message;
                }
            });

            ValidationSummaryString += "<li>" + validationMsg + "</li>";
            isValid = false;
        }
    });
    ValidationSummaryString += "</ul>";
    ValidationSummaryString += "<span class='close_tag' onclick='CommonValidationSummaryClose();'><i class='fas fa-times'></i></span>";
    $("#ValidationSummary").html(ValidationSummaryString);

    if (!isValid) {
        $('#ValidationSummary').show();
        $('#ValidationSummary').focus();
        var input = $('.input-validation-error:first');
        if (input) {
            input.focus();
        }
        return false;
    } else {
        $('#ValidationSummary').hide();
        return true;
    }
}