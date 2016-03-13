describe('Testing TodoItem factory', function () {
  var TodoItemFactory;

  beforeEach(module('app.factories.todoItem'));
  beforeEach(inject(function (_TodoItem_) {
    TodoItemFactory = _TodoItem_;
  }));

  it('should create brand new TodoItem object', function () {
    var newTodoItem = new TodoItemFactory();

    expect(newTodoItem.description).toBe('');
    expect(newTodoItem.isDone).toBe(false);
  });
});