(function (angular) {
  'use strict';

  angular
    .module('app.layout.init', ['ui.router', 'app.directives.todoList'])
    .config(['$stateProvider', AppConfig]);

  function AppConfig($stateProvider) {
    $stateProvider.state({
      name: 'layout',
      url: '',
      templateUrl: 'app/components/layout/layout.view.html'
    });
  }
})(angular);