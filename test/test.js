let assert = require("assert")
let helloWorld = require("../src")

describe('Hello world', function() {
    it('should return Hello World', function () {
        assert.equal(helloWorld(), "Hello World")
    })
})
