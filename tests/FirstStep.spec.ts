import { StringCalculator } from "../src/StringCalcualtor";

describe("String Calculator - First Step", () => {

  test("Empty string returns 0", () => {
    //Arrange
    const numbersString: string = "";
    //Act
    const actualSum: number = StringCalculator.add(numbersString);
    //Assert
    const expectedSum = 0;
    expect(actualSum).toEqual(expectedSum);
  })


})