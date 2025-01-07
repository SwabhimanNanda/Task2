//https://stackoverflow.com/questions/28689332/how-can-i-make-many-jquery-ajax-calls-look-pretty
String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

//var doAjax_params_default = {
//    'url': null,
//    'requestType': "GET",
//    'contentType': 'application/x-www-form-urlencoded; charset=UTF-8',
//    'dataType': 'json',
//    'data': {},
//    'beforeSendCallbackFunction': null,
//    'successCallbackFunction': null,
//    'completeCallbackFunction': null,
//    'errorCallBackFunction': null,
//};


//function MakeHttpCallMethodOLD(doAjax_params) {

//    var url = doAjax_params['url'];
//    var requestType = doAjax_params['requestType'];
//    var contentType = doAjax_params['contentType'];
//    var dataType = doAjax_params['dataType'];
//    var data = doAjax_params['data'];
//    var beforeSendCallbackFunction = doAjax_params['beforeSendCallbackFunction'];
//    var successCallbackFunction = doAjax_params['successCallbackFunction'];
//    var completeCallbackFunction = doAjax_params['completeCallbackFunction'];
//    var errorCallBackFunction = doAjax_params['errorCallBackFunction'];

//    //make sure that url ends with '/'
//    /*if(!url.endsWith("/")){
//     url = url + "/";
//    }*/

//    $.ajax({
//        url: url,
//        crossDomain: true,
//        type: requestType,
//        contentType: contentType,
//        dataType: dataType,
//        data: data,
//        beforeSend: function (jqXHR, settings) {
//            debugger
//            if (typeof beforeSendCallbackFunction === "function") {
//                beforeSendCallbackFunction();
//            }
//        },
//        success: function (data, textStatus, jqXHR) {
//            debugger
//            if (typeof successCallbackFunction === "function") {
//                successCallbackFunction(data);
//            }
//        },
//        error: function (jqXHR, textStatus, errorThrown) {
//            debugger
//            if (typeof errorCallBackFunction === "function") {
//                errorCallBackFunction(errorThrown);
//            }
//        },
//        complete: function (jqXHR, textStatus) {
//            debugger
//            if (typeof completeCallbackFunction === "function") {
//                completeCallbackFunction();
//            }
//        }
//    });
//}

let Constants = {
    //ApplicationJson: "application/json",
    Post: "POST",
    Get: "GET",
    //Put: "PUT",
    //Delete: "DELETE"
};

let AjaxCommonParamDefault = {
    'url': null,
    'requestType': "GET",
    'contentType': 'application/x-www-form-urlencoded; charset=UTF-8',
    'dataType': 'json',
    'data': {},
    'async': true
};


let MakeHttpCallMethod = function(AjaxCommonParam) {

    var url = AjaxCommonParam['url'];
    var requestType = AjaxCommonParam['requestType'];
    var contentType = AjaxCommonParam['contentType'];
    var dataType = AjaxCommonParam['dataType'];
    var data = AjaxCommonParam['data'];
    var async = AjaxCommonParam['async'];

    return $.ajax({
        async: async,
        url: url,
        //crossDomain: true,
        type: requestType,
        //contentType: contentType,
        //dataType: dataType,
        data: data,
        beforeSend: function(jqXHR, settings) {
            $(".preloader").fadeIn();
            //if (typeof beforeSendCallbackFunction === "function") {
            //    beforeSendCallbackFunction();
            //}
        },
        success: function(response, textStatus, jqXHR) {
            if (response && response.data && response.data.status === 401 && response.data.link) {
                window.location = response.data.link;
            } else {
                return response;
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            ShowNotification(Notification.error, errorThrown);
            //ShowNotification(Notification.error, errorResponse.statusText);
            $(".preloader").fadeOut();
            //if (typeof errorCallBackFunction === "function") {
            //    errorCallBackFunction(errorThrown);
            //}
        },
        complete: function(jqXHR, textStatus) {
            $(".preloader").fadeOut();
            //if (typeof completeCallbackFunction === "function") {
            //    completeCallbackFunction();
            //}
        }
    });

}