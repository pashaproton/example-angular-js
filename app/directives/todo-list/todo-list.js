(function (angular) {
  'use strict';
  
  angular
    .module('app.directives.todoList', ['app.services.storeItems', 'app.directives.todoForm'])
    .directive('todoList', TodoListDirective);
  
  function TodoListDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/directives/todo-list/todo-list.html',
      scope: {},
      controller: TodoListDirectiveController,
      controllerAs: 'c'
    };
  }

  function TodoListDirectiveController(StoreItemsService) {
    this.items = StoreItemsService.get();

    this.remove = function remove(index) {
      this.items.splice(index, 1);

      StoreItemsService.save(this.items);
    };

    this.done = function (index) {
      this.items[index].isDone = true;

      StoreItemsService.save(this.items);
    };

    this.revert = function (index) {
      this.items[index].isDone = false;

      StoreItemsService.save(this.items);
    };
  }
})(angular);