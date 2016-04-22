describe('Testing todo form directive', function () {
  var scope;
  var element;
  var mockData = [
    { description: 'Descrption 01', isDone: false },
    { description: 'Descrption 02', isDone: false },
    { description: 'Descrption 03', isDone: true },
    { description: 'Descrption 04', isDone: true }
  ];

  beforeEach(module('app.directives.todoForm'));
  beforeEach(module('app/directives/todo-form/todo-form.html'));

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    scope.items = mockData;
    element = angular.element('<todo-form items="items"></todo-form>');

    $compile(element)(scope);

    $rootScope.$digest();
  }));

  it('should show render form with one input', function () {
    expect(element.find('form').length).toBe(1);
    expect(element.find('input').length).toBe(1);
  });

  it('should submit form and add a new todo item', function () {
    var text = 'A new Todo';
    var form = angular.element(element.find('form'));
    var input = angular.element(element.find('input')).val(text).triggerHandler('input');

    form.triggerHandler('submit');

    scope.$apply();

    expect(scope.items.length).toBe(5);
    expect(scope.items[0].description).toEqual(text);
  });
});