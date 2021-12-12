//Assignment 1
// 1. Calculate the areas of each triangle. Check that the formula works correctly.
// 2. Compare each result and output it to the console.
// 3. Make sure to output which has the largest area.

//Case 1
// Triangle 1: 10 * 13cm
// Triangle 2: 16.5 * 20.3 cm

//Case 2
// Triangle 3: 16.5 * 20.3 cm
// Triangle 4: 20.3 * 16.5 cm

//Case 3
// Triangle 5: 7.8 * 5.6 cm
// Triangle 6: 9.3 * 12.4 cm

//Question: Why does JavaScript need the parenthesis in this case?
//Ansver: Because division and multiplication has the same operator precedence and will be calculated from left to right,
// so without parenthesis it will calculate the division on the height only.

//Case 1
const triangleOne = (10*13)/2;
console.log (triangleOne);

const triangleTwo = (16.5 *20.3)/2;
console.log (triangleTwo);

if (triangleOne > triangleTwo) {
    console.log (`The largest triangle is triangleOne with ${triangleOne} square cm`)
} else if (triangleOne == triangleTwo) {
        console.log (`The two triangles have the same area`)}
    else if (triangleOne < triangleTwo) {
        console.log (`The largest triangle is triangleTwo with ${triangleTwo} square cm`)
}

//Case 2
const triangleThree = (16.5*20.3)/2;
console.log (triangleThree);

const triangleFour = (20.3*16.5)/2;
console.log (triangleFour);

if (triangleThree > triangleFour) {
    console.log (`The largest triangle is triangleThree with ${triangleThree} square cm`)
} else if (triangleThree == triangleFour) {
        console.log (`The two triangles have the same area`)}
    else if (triangleThree < triangleFour) {
        console.log (`The largest triangle is triangleFour with ${triangleFour} square cm`)
}

//Case 3
const triangleFive = (7.8*5.6)/2;
console.log (triangleFive);

const triangleSix = (9.3*12.4)/2;
console.log (triangleSix);

if (triangleFive > triangleSix) {
    console.log (`The largest triangle is triangleFive with ${triangleFive} square cm`)
} else if (triangleFive == triangleSix) {
        console.log (`The two triangles have the same area`)}
    else if (triangleFive < triangleSix) {
        console.log (`The largest triangle is triangleSix with ${triangleSix} square cm`)
}
