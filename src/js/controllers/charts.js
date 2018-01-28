angular
  .module('limejump')
  .controller('ChartIndexCtrl', ChartIndexCtrl);

ChartIndexCtrl.$inject = ['Chart'];
function ChartIndexCtrl(Chart) {
  const vm = this;
  vm.all = Chart.query();

  Chart.getAlphaCharts().$promise.then(data => {
    vm.charts = data;
  });
}
