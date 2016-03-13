describe('Testing StoreItems service', function () {
  var mockData = [{
    description: 'Test description',
    isDone: false
  }];
  
  var store, StoreItemsService;
  var storeKey = 'items';

  beforeEach(module('angular-storage'));
  beforeEach(module('app.services.storeItems'));
  beforeEach(inject(function (_store_, _StoreItemsService_) {
    store = _store_;
    StoreItemsService = _StoreItemsService_;
  }));

  it('should save data into the storage', function () {
    StoreItemsService.save(mockData);
    expect(store.get(storeKey)).toEqual(mockData);
  });

  it('should get stored data from the storage', function () {
    var data = StoreItemsService.get();
    expect(data).toEqual(mockData);
  });
});