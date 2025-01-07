//ajax Urls
var CityBindUrl = '/LeadCapture/GetCityListByStateId'; // Don't hard code your url's!

//Global Variables
var AjaxParam = {};

var CityIdc = $('#CityIdc'); // cache it
$("#StateIdc").change(function() {
    try {
        var id = $(this).val(); // Use $(this) so you don't traverse the DOM again
        if (id) {
            AjaxParam = $.extend({}, AjaxCommonParamDefault);

            AjaxParam['requestType'] = Constants.Get;
            AjaxParam['url'] = CityBindUrl;
            AjaxParam['data'] = {
                StateId: id
            };

            MakeHttpCallMethod(AjaxParam).then(function(response) {
                if (response) {
                    if (response.isSuccess) {
                        CityIdc.empty(); // remove any existing options
                        if (response.data) {
                            $.each(response.data, function(index, item) {
                                CityIdc.append($('<option></option>').text("").val(""));
                                CityIdc.append($('<option></option>').text(item.cityName).val(item.cityId));
                            });
                        }
                        CommonUpdateSelect2Dropdown('#CityIdc');
                    } else {
                        ShowNotification(Notification.error, response.message);
                    }
                } else {
                    ShowNotification(Notification.error, window.RequestFailed);
                }
            });
        } else {
            CityIdc.empty(); // remove any existing options
            CommonUpdateSelect2Dropdown('#CityIdc');
        }
    } catch (e) {
        $(".preloader").fadeOut();
        ShowNotification(Notification.error, window.RequestFailed);
    }
});

$(document).ready(function() {
    var IsVerified = $("#IsShowThankYoucreen").val()
    if (IsVerified == "True") {
        $("#btnRedirectToSignIn").click();
    }
});