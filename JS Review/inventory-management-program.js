let inventory = [
  {
    name: "apple",
    quantity: 10,
  },
];

function findProductIndex(productName) {
  return inventory.findIndex(
    (product) => product.name === productName.toLowerCase(),
  );
}

function addProduct(product) {
  const productName = product.name.toLowerCase();
  const index = findProductIndex(productName);
  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${productName} quantity updated`);
    return;
  }
  inventory.push({
    name: productName,
    quantity: product.quantity,
  });
  console.log(`${productName} added to inventory`);
}

function removeProduct(name, quantity) {
  const productName = name.toLowerCase();
  const index = findProductIndex(productName);
  if (index !== -1) {
    if (quantity > inventory[index].quantity) {
      console.log(
        `Not enough ${productName} available, remaining pieces: ${inventory[index].quantity}`,
      );
      return;
    }
    if (quantity === inventory[index].quantity) {
      inventory.splice(index, 1);
      return;
    }
    if (quantity < inventory[index].quantity) {
      inventory[index].quantity -= quantity;
      console.log(
        `Remaining ${productName} pieces: ${inventory[index].quantity}`,
      );
      return;
    }
  }
  console.log(`${productName} not found`);
}

// Versão melhorada

let inventory = [];

function findProductIndex(productName) {
  const normalizedName = productName.toLowerCase();

  return inventory.findIndex((product) => product.name === normalizedName);
}

function addProduct(product) {
  const productName = product.name.toLowerCase();
  const index = findProductIndex(productName);

  if (index === -1) {
    inventory.push({
      name: productName,
      quantity: product.quantity,
    });

    console.log(`${productName} added to inventory`);
    return;
  }

  inventory[index].quantity += product.quantity;
  console.log(`${productName} quantity updated`);
}

function removeProduct(name, quantity) {
  const productName = name.toLowerCase();
  const index = findProductIndex(productName);

  if (index === -1) {
    console.log(`${productName} not found`);
    return;
  }

  const product = inventory[index];

  if (quantity > product.quantity) {
    console.log(
      `Not enough ${productName} available, remaining pieces: ${product.quantity}`,
    );
    return;
  }

  product.quantity -= quantity;

  if (product.quantity === 0) {
    inventory.splice(index, 1);
    return;
  }

  console.log(`Remaining ${productName} pieces: ${product.quantity}`);
}
