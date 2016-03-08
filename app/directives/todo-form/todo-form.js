(function (angular) {
  'use strict';

  angular
    .module('app.directives.todoForm', ['app.services.storeItems', 'app.factories.todoItem' ])
    .directive('todoForm', TodoFormDirective);

  function TodoFormDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/directives/todo-form/todo-form.html',
      scope: {
        items: '='
      },
      controller: TodoFormDirectiveController,
      controllerAs: 'c'
    };
  }

  function TodoFormDirectiveController($scope, StoreItemsService, TodoItem) {
    this.items = $scope.items;
    this.description = '';

    this.submit = function submit() {
      this.items.unshift(new TodoItem(this.description));
      this.description = '';

      StoreItemsService.save(this.items);
    };
  }
})(angular);