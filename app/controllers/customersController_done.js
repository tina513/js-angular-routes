(function customersControllerIIFE(data, ang) {

  // Controller
  var CustomersController = function() {
    this.sortBy = "name";
    this.reverse = false;

    this.customers = data;
  };

  CustomersController.prototype.doSort = function(propName) {
    this.sortBy = propName;
    this.reverse = !this.reverse;
  };


  // The Controller is part of the module.
  ang.module('customersApp').controller('customersController', CustomersController);

})(customerData, angular);
