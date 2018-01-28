angular
  .module('limejump')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('part1', {
      url: '/part1',
      templateUrl: 'js/views/part1.html',
      controller: 'CompanyIndexCtrl as part1'
    })
    .state('part1Show', {
      url: '/part1/:id',
      templateUrl: 'js/views/part1Show.html',
      controller: 'CompanyShowCtrl as part1Show'
    })
    .state('part1Edit', {
      url: '/part1/:id/edit',
      templateUrl: 'js/views/part1Edit.html',
      controller: 'CompanyEditCtrl as part1Edit'
    })
    .state('part2', {
      url: '/part2',
      templateUrl: 'js/views/part2.html',
      controller: 'ChartIndexCtrl as part2'
    });

  $urlRouterProvider.otherwise('/part1');
}
