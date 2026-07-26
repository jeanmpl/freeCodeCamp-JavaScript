const pantry = [
  {
    sku: "A10",
    name: "Tomatoes",
    qty: 4,
    expires: "2027-01-01",
    zone: "fridge",
  },
  {
    sku: "D43",
    name: "Pineapples",
    qty: 2,
    expires: "2020-01-01",
    zone: "general",
  },
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge",
];

function parseShipment(rawData) {
  const shipment = [];
  const seenSkus = new Set();

  for (const item of rawData) {
    const [sku, name, qtyStr, expires, zone = "general"] = item.split("|");
    const qty = Number(qtyStr);

    if (!seenSkus.has(sku)) {
      seenSkus.add(sku);
      shipment.push({ sku, name, qty, expires, zone });
    }
  }

  return shipment;
}

function planRestock(pantry, shipment) {
  const actions = [];
  const pantrySkus = new Set(pantry.map((item) => item.sku));

  for (const item of shipment) {
    if (item.qty <= 0) {
      actions.push({ type: "discard", item });
    } else if (pantrySkus.has(item.sku)) {
      actions.push({ type: "restock", item });
    } else {
      actions.push({ type: "donate", item });
    }
  }
  return actions;
}

function groupByZone(actions) {
  const grouped = {};

  for (const action of actions) {
    const zone = action.item.zone;
    if (!grouped[zone]) {
      grouped[zone] = [];
    }
    grouped[zone].push(action);
  }

  return grouped;
}

function clonePantry(pantry) {
  return pantry.map((item) => ({ ...item }));
}

const shipment = parseShipment(rawData);
const actions = planRestock(pantry, shipment);
const groupedActions = groupByZone(actions);

console.log(groupedActions);
