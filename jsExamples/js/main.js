(() => {
  function myFunction() {
    return this;
  }

  var myObject = {
    myProperty: 1,
    init: function init() {
      return this;
    }
  };

  function MyConstructor() {
    this.prop1 = 'prop1';
    this.prop2 = 'prop2';
  }
  var constructor = new MyConstructor();
  console.log('MyConstructor', MyConstructor());
  console.log(prop1)

})();
