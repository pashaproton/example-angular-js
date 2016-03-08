(function (angular) {
  'use strict';

  angular
    .module('app.services.storeItems', ['angular-storage'])
    .service('StoreItemsService', ['store', StoreItemsService]);

  function StoreItemsService(store) {
    var storeKey = 'items';
    
    this.save = function (items) {
      store.set(storeKey, items);
    };

    this.get = function () {
      return store.get(storeKey) || [];
    };
  }
})(angular);