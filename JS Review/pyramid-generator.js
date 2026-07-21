function pyramid(char, rows, inverted) {
  const lines = [];

  for (let i = 0; i < rows; i++) {
    const row = inverted ? rows - 1 - i : i;

    const spaces = " ".repeat(rows - 1 - row);
    const chars = char.repeat(2 * row + 1);

    lines.push(spaces + chars);
  }

  return "\n" + lines.join("\n") + "\n";
}

console.log(pyramid("o", 4, false));
