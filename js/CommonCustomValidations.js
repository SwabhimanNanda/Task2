//https://stackoverflow.com/questions/995183/how-to-allow-only-numeric-0-9-in-html-inputbox-using-jquery
//https://jsfiddle.net/emkey08/tvx5e7q3
// Restricts input for each element in the set of matched elements to the given inputFilter.
(function($) {
    $.fn.inputFilter = function(inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    };
}(jQuery));

// Install input filters.
//$("#intTextBox").inputFilter(function (value) {
//    return /^-?\d*$/.test(value);
//});
//$("#uintTextBox").inputFilter(function (value) {
//    return /^\d*$/.test(value);
//});
//$("#intLimitTextBox").inputFilter(function (value) {
//    return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 500);
//});
//$("#floatTextBox").inputFilter(function (value) {
//    return /^-?\d*[.,]?\d*$/.test(value);
//});
//$("#currencyTextBox").inputFilter(function (value) {
//    return /^-?\d*[.,]?\d{0,2}$/.test(value);
//});
//$("#latinTextBox").inputFilter(function (value) {
//    return /^[a-z]*$/i.test(value);
//});
//$("#hexTextBox").inputFilter(function (value) {
//    return /^[0-9a-f]*$/i.test(value);
//});

//Only Numbers Allowed
$(".OnlyNumbersAllowed").inputFilter(function(value) {
    return /^\d*$/.test(value);
});

//Only Numbers and Limit 10 Digits Allowed
$(".OnlyNumbersAndLimit10DigitsAllowed").inputFilter(function(value) {
    return /^\d{0,10}$/.test(value);
});

//Only Numbers and Limit 6 Digits Allowed
$(".OnlyNumbersAndLimit6DigitsAllowed").inputFilter(function(value) {
    return /^\d{0,6}$/.test(value);
});

//Only Numbers and Limit 12 Digits Allowed
$(".OnlyNumbersAndLimit12DigitsAllowed").inputFilter(function(value) {
    return /^\d{0,12}$/.test(value);
});

//Only Numbers and Limit 4 Digits Allowed
$(".OnlyNumbersAndLimit4DigitsAllowed").inputFilter(function(value) {
    return /^\d{0,4}$/.test(value);
});