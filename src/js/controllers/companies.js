angular
  .module('limejump')
  .controller('CompanyIndexCtrl', CompanyIndexCtrl)
  .controller('CompanyEditCtrl', CompanyEditCtrl);

CompanyIndexCtrl.$inject = ['Company'];
function CompanyIndexCtrl(Company) {
  const vm = this;
  vm.all = Company.query();
}

CompanyEditCtrl.$inject = ['Company', '$stateParams', '$state'];
function CompanyEditCtrl(Company, $stateParams, $state) {
  const vm = this;
  vm.company = Company.get($stateParams);

  function companyUpdate() {
    vm.company
      .$update()
      .then(() => $state.go('part1', $stateParams));
  }
  vm.update = companyUpdate;
}
