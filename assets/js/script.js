(function (document, angular) {
  'use strict';

  angular.element(document).ready(function onDocumentReady() {
    angular.bootstrap(document, ['app.layout.init']);
  });
})(document, angular);
