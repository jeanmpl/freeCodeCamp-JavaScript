// test a specific property of each object in an array to see if it always has a truthy value or not.

function truthCheck(collection, pre) {
  for (let i = 0; i < collection.length; i++) {
    if (!collection[i].hasOwnProperty(pre) || !collection[i][pre]) {
      return false;
    }
  }
  return true;
}

truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true },
  ],
  "isBot",
);
