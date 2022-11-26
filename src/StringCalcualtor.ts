import { InvalidInputError } from "./InvalidInputError";
import { StringCalculatorGuard } from "./StringCalculatorGuard";

export class StringCalculator {

  public static add(numbersString: string) {
    const stringNumbers: string[] = numbersString.split(",");
    StringCalculatorGuard.checkForMoreThan2Numbers(stringNumbers);
    const numbers: number[] = stringNumbers.map(n => Number(n));
    
    let sum = numbers.reduce((a, b) => a + b, 0);
    sum = StringCalculator.roundToOneDecimalPlace(sum);
    return sum;
  }

  private static roundToOneDecimalPlace(sum: number) {
    sum = Math.round(sum * 10) / 10;
    return sum;
  }
}