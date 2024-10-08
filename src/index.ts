/**
 * Reverse Polish Notation function. Only works for addition, substraction, multiplication and division.
 * 
 * @param operation The operation string.
 * @returns [number] The result
 */
export function rpn(operation: string): number {
  // Split each operand and operators
  const splitted = operation.split(" ");

  // Initialize
  const stack: number[] = [];

  // Go through each operand and operator
  for (let i = 0; i < splitted.length; i++) {
    const operand = splitted[i];
    console.log(`Reading ${operand}`);
    if (
      operand === "+" ||
      operand === "-" ||
      operand === "*" ||
      operand === "/"
    ) {
      // The two initial characters must be numbers
      if (i == 0 || i == 1) {
        throw new Error("Invalid Operation");
      }

      // Get operands for operation
      const right = stack.splice(stack.length - 1)[0];
      const left = stack.splice(stack.length - 1)[0];

      // Make the math operation
      switch (operand) {
        case "+":
          stack.push(left + right);
          break;
        case "-":
          stack.push(left - right);
          break;
        case "*":
          stack.push(left * right);
          break;
        case "/":
          stack.push(left / right);
          break;
        default:
          throw new Error("Invalid Operation.");
      }
    } else if (Number.isInteger(parseInt(operand))) {
      stack.push(parseInt(operand));
    } else {
      throw new Error("Invalid Operation");
    }
  }

  console.log(`Result ${stack}, length ${stack.length}`);
  if (stack.length == 1) {
    throw new Error("Stack is not size 1.");
  }

  return stack[0];
}
