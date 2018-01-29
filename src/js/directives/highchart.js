// var Highcharts = require('highstock');


angular
  .module('limejump')
  .directive('highchart', highchart);

function highchart(Highcharts) {
  // Directive for generic chart, pass in chart option
  return {
    restrict: 'E',
    template: '<div></div>',
    scope: {
      options: '='
    },
    link: function (scope, element) {
      Highcharts.chart(element[0], scope.options);
    }
  };
}
