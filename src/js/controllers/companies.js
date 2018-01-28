angular
  .module('limejump')
  .controller('CompanyIndexCtrl', CompanyIndexCtrl);

CompanyIndexCtrl.$inject = ['Company'];
function CompanyIndexCtrl(Company) {
  const vm = this;
  vm.all = Company.query();

  function companyUpdate() {
    vm.company
      .$update();
  }

  vm.update = companyUpdate;
}
