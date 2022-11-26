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

  test("string with 1 number, returns itself", () => {
    //Arrange
    const numbersString: string = "1";
    //Act
    const actualSum: number = StringCalculator.add(numbersString);
    //Assert
    const expectedSum = 1;
    expect(actualSum).toEqual(expectedSum);
  })
  
})