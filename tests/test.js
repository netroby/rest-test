var chakram = require('chakram'),
    expect = chakram.expect;

describe("Chakram", function() {
    it("should offer simple http request capabilities", function() {
        var resp =  chakram.get("http://httpbin.org/get")
        resp.then(function (data) {
            console.log(data);
        })
        return expect(resp).to.have.status(200);
    });
});
