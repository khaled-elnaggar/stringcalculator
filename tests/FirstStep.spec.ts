import { InvalidInputError } from "../src/InvalidInputError";
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

  test("string with 2 numbers, returns their sum", () => {
    //Arrange
    const numbersString: string = "1,2";
    //Act
    const actualSum: number = StringCalculator.add(numbersString);
    //Assert
    const expectedSum = 3;
    expect(actualSum).toEqual(expectedSum);
  })

  test("string with more than 2 numbers, returns error", () => {
    //Arrange
    const numbersString: string = "1,2,3";
    //Act
    //Assert
    expect(() => {
      StringCalculator.add(numbersString)
    }).toThrow(new InvalidInputError("Invalid input, can not add more than 2 numbers"))
  })

})