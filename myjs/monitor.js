/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var getData = function () {
    var data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
            [200, 380, 350, 320, 410, 450, 570, 400, 555, 620, 750, 900],
        ]
    };
    var options = {
        height: "300px",
        showPoint: true,
        axisX: {
            showGrid: true
        },
        lineSmooth: false,
    };
    new Chartist.Line('#demo-line-chart', data, options);

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
