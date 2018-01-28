angular
  .module('limejump')
  .controller('CompanyIndexCtrl', CompanyIndexCtrl)
  // .controller('CompanyShowCtrl', CompanyShowCtrl)
  .controller('CompanyEditCtrl', CompanyEditCtrl);

CompanyIndexCtrl.$inject = ['Company'];
function CompanyIndexCtrl(Company) {
  const vm = this;
  vm.all = Company.query();
}

// CompanyShowCtrl.$inject = ['Company', '$stateParams', '$state'];
// function CompanyShowCtrl(Company, $stateParams) {
//   const vm = this;
//   vm.company = Company.get($stateParams);
// }


CompanyEditCtrl.$inject = ['Company', '$stateParams', '$state'];
function CompanyEditCtrl(Company, $stateParams, $state) {
  const vm = this;
  vm.company = Company.get($stateParams.id);

  function companyUpdate() {
    vm.company
      .$update()
      .then(() => $state.go('part1', $stateParams));
  }
  vm.update = companyUpdate;
}
