var should = chai.should()
describe('function fizzbuzz', function () {
  it('should return fizz', function () {
    var result = fizzBuzz(6)
    result.should.be.equal('Fizz')
  })
  it('should return buzz', function () {
    var result = fizzBuzz(10)
    result.should.be.equal('Buzz')
  })
  it('should return fizzbuzz', function () {
    var result = fizzBuzz(15)
    result.should.be.equal('FizzBuzz')
  })
  it('should return the number', function () {
    var result = fizzBuzz(8)
    result.should.be.equal(8)
  })
})