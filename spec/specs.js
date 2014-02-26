beforeEach(function() {
  Contact.all = [];
});
describe('Contact', function() {
  describe('initialize', function() {
    it('sets the first and last name.', function() {
      var testContact = Object.create(Contact);
      testContact.initialize ("Dolly", "Pardon");
      testContact.firstName.should.equal('Dolly');
      testContact.lastName.should.equal('Pardon');
      
    });
    it('sets up the empty array for the address property', function () {
      var testContact = Object.create(Contact);
      testContact.initialize("Dolly", "Pardon");
      testContact.addresses.should.eql([]);
    });
  }); 
  describe('create', function() { 
    it('creates a new instance of a Contact' , function() {
      var testContact = Contact.create();
        Contact.isPrototypeOf(testContact).should.equal(true);
    });
    it('initializes the contact', function() {
      var testContact = Contact.create('Dolly', 'Pardon');
      testContact.addresses.should.eql([]);
    });
    it("adds the contact to .all property", function() {
      var testContact = Contact.create();
      Contact.all.should.eql([testContact]);
    });
  });
  describe("createAddress", function() {
    it("creates an address object", function() {
      var testContact = Contact.create();
      var testAddress = testContact.createAddress();
      Address.isPrototypeOf(testAddress).should.equal(true);
    });
    it("adds the address to the addresses property of the contact", function() {
      var testContact = Contact.create();
      var testAddress = testContact.createAddress();
      testContact.addresses.should.eql([testAddress]);
    });
  });
  describe('createPhone', function() {
    it('creates a phone object', function() {
      var testContact = Contact.create();
      var testPhone = testContact.createPhone();
      Phone.isPrototypeOf(testPhone).should.equal(true);
    });
    it("adds the phone number to the phone numbers property of the contact", function(){
      var testContact = Contact.create();
      var testPhone = testContact.createPhone();
      testContact.phoneNumbers.should.eql([testPhone]);
    });  

  });
  describe('fullName', function() {
    it('displays the first and last name with a space between them.', function() {
      var testContact = Object.create(Contact);
      testContact.firstName = "Dolly";
      testContact.lastName = 'Pardon';
      testContact.fullName().should.equal('Dolly Pardon');
    });
  });  
  describe('Address', function() {
    // it("should return true if all characters inputted in city are letters", function() {
    //   var testAddress = Object.create(Address);
    //   testAddress.city = "Portland";
    //   testAddress.validAddress().should.equal(true);
    // });
    describe("initialize", function() {
     it("it sets the street, city and state", function() {
      var testAddress = Object.create(Address);
      testAddress.initialize("Main", "Portland", "OR");
      testAddress.street.should.equal("Main");
      testAddress.city.should.equal("Portland");
      testAddress.state.should.equal("OR");
      });
    }); 
    describe ('create', function() {
      it("creates a new instance of address", function() {
        var testAddress = Address.create();
        Address.isPrototypeOf(testAddress).should.equal(true);
      });
      it('initializes the addres', function() {
        var testAddress = Address.create("123 S First St.", "Heretown", "TX");
        testAddress.street.should.equal("123 S First St.");
      });
    });

  });

  describe("Phone", function() {
    it('Should show one or more phone numbers', function() {
      var testPhone = Object.create(Phone);
      testPhone.phoneType = "Cell";
      testPhone.areaCode = 503;
      testPhone.centralExchange = 658;
      testPhone.individualNumber = 4850;
      testPhone.fixedNumber().should.equal('Cell: (503)658-4850');
    });
    describe('initialize', function() {
      it('will initialize phone numbers.', function() {
        var testPhone = Object.create(Phone);
        testPhone.initialize("Cell", "503", "685", "4850");
        testPhone.phoneType.should.equal("Cell");
        testPhone.areaCode.should.equal('503');
        testPhone.centralExchange.should.equal('685');
        testPhone.individualNumber.should.equal('4850');
      });
    });
    describe('create', function() {
      it('create a new instance of a phone number', function() {
        var testPhone = Phone.create();
        Phone.isPrototypeOf(testPhone).should.equal(true);
      });
      it('initializes the phone.', function() {
        var testPhone = Phone.create("Cell", "503", "555", "4567");
        testPhone.areaCode.should.equal("503");
      });
    });
  });

   //  it("should return true when 3 numbers are entered into the area code", function() {
   //    var testPhone = Object.create(Phone);
   //    testPhone.areaCode = "500";
   //    testPhone.validNumber().should.equal(true);
   //  });
   //  it("should return true when everything inputed in the central exchange a number", function() {
   //    var testPhone = Object.create(Phone);
   //    testPhone.centralExchange = "444";
   //    testPhone.validNumber().should.equal(true);
   //  });
   //  it('should return true when 4 letters are entered into the individual phone number.', function() {
   //    var testPhone = Object.create(Phone);
   //    testPhone.individualNumber = '4444';
   //    testPhone.validNumber().should.equal(true);
   //  });
   
});
