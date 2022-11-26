import { ErrorMessages } from "./ErrorMessages";
import { InvalidInputError } from "./InvalidInputError";

export class StringCalculatorGuard{
  public static checkForMoreThan2Numbers(stringNumbers: string[]) {
    if (stringNumbers.length > 2)
      throw new InvalidInputError(ErrorMessages.moreThan2NumbersErrorMessage);
  }
  public static checkForNonNumberCharacter(num: number) {
    if (isNaN(num))
      throw new InvalidInputError(ErrorMessages.nonNumberErrorMessage);
  }
}