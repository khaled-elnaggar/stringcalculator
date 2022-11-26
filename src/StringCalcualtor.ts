export class StringCalculator {

  public static add(numbersString: string) {
    const stringNumbers: string[] = numbersString.split(",");
    const numbers: number[] = stringNumbers.map(n => Number(n));
    
    let sum = numbers.reduce((a, b) => a + b, 0);
    return sum;
  }

}