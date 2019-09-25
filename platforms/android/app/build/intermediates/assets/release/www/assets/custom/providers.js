

function loadingPage(element,fontColor){
    var fc = (fontColor!='' && typeof fontColor !== "undefined") ? fontColor : '#333';
    $(element).html('<div style="text-align:center;color: '+fc+';font-size: 20px;margin-top: 70px;">' +
        '<i class="fa fa-refresh fa-spin" style="margin-right: 5px;"></i> Loading . . .</div>');
}

function loading_button(element) {
    $(element).prop('disabled',true).html('<i class="fa fa-refresh fa-spin" style="margin-right: 5px;"></i> Loading...');
}

function loading_buttonSM(element) {
    $(element).prop('disabled',true).html('<i class="fa fa-refresh fa-spin"></i>');
}