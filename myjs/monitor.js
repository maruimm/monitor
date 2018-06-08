/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var CreateDatePicker = function () {
    $('.form_date').datetimepicker({
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        language: "zh-CN",
        forceParse: 0
    });
};

var getData = function () {
    $.getJSON("../data/ceshi.json", "", function (data) {
        console.log(data);
        createMonitor(data);
    });
}

var createMonitor = function (data) {
    var options = {
        height: "300px",
        showPoint: true,
        axisX: {
            showGrid: true
        },
        lineSmooth: false,
    };
    new Chartist.Line('#demo-line-chart', data, options);


};
