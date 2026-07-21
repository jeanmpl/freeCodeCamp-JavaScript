function convertHTML(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "&") {
      result.push("&amp;");
      continue;
    }
    if (str[i] === "<") {
      result.push("&lt;");
      continue;
    }
    if (str[i] === ">") {
      result.push("&gt;");
      continue;
    }
    if (str[i] === '"') {
      result.push("&quot;");
      continue;
    }
    if (str[i] === "\'") {
      result.push("&apos;");
      continue;
    }
    result.push(str[i]);
  }
  return result.join("");
}

console.log(convertHTML("Dolce & Gabbana"));

// versão com switch case

function convertHTML(str) {
  let result = [];

  for (let char of str) {
    switch (char) {
      case "&":
        result.push("&amp;");
        break;
      case "<":
        result.push("&lt;");
        break;
      case ">":
        result.push("&gt;");
        break;
      case '"':
        result.push("&quot;");
        break;
      case "'":
        result.push("&apos;");
        break;
      default:
        result.push(char);
    }
  }

  return result.join("");
}
// versão melhorada
function convertHTML(str) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  return str.replace(/[&<>"']/g, (char) => entities[char]);
}
