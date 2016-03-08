(function (angular) {
  'use strict';

  angular
    .module('app.factories.todoItem', [])
    .factory('TodoItem', TodoItemFactory);

  function TodoItemFactory() {
    return function TodoItemFactory(description, isDone) {
      this.description = description || '';
      this.isDone = isDone || false;
    }
  }
})(angular);