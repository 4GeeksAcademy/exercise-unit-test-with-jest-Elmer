
const {sum} = require ('./app.js'); 


test('adds 14 + 9 to equal 23', () => {
    let total = sum (14,9);

    expect(total).toBe(23) 
})



test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})


test("One Dollar should be 146.26 yens", function() {
    
    const { fromDollarToYen } = require('./app.js');

    
    const dollars = fromDollarToYen(3.5);

    
    const expected = 3.5 * 146.2616822429907; 
    
    
     expect(fromDollarToYen(3.5)).toBe(511.91588785046724); 
})

test("One Yen should be 0.0055591054313099035 punds", function() {
    
    const { fromYenToPound } = require('./app.js');

    
    const dollars = fromYenToPound (3.5);

    
    const expected = 3.5 * 0.0055591054313099035; 
    
    
     expect(fromYenToPound(3.5)).toBe(0.019456869009584665); 
})