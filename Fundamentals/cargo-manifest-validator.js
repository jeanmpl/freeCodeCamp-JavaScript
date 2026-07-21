function normalizeUnits(manifest){
  const newManifest = {
    ...manifest
  }

  if (manifest.unit === "lb"){
    newManifest.weight = newManifest.weight * 0.45;
    newManifest.unit = "kg";
  }
  return { ...newManifest };
}

function validateManifest(manifest){
  const errors = {};

  if (!("containerId" in manifest)) {
    errors.containerId = "Missing";
  } else if (
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  if (!("destination" in manifest)) {
    errors.destination = "Missing";
  } else if ( 
      typeof manifest.destination !== "string" ||
      manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  if (!("weight" in manifest)) {
    errors.weight = "Missing"
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid"
  }

  if (!("unit" in manifest)) {
    errors.unit = "Missing";
  } else if (
    manifest.unit !== "lb" &&
    manifest.unit !== "kg"
  ) {
    errors.unit = "Invalid"
  }

  if (!("hazmat" in manifest)) {
    errors.hazmat = "Missing"
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid"
  }  
  return { ...errors };
}

function processManifest(manifest) {
  const validation = validateManifest(manifest);

  if (Object.keys(validation).length === 0) {
    const normalizedManifest = normalizeUnits(manifest);

    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalizedManifest.weight} kg`);
  }

  else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validation);
  }
}

const manifest = { containerId: 55, destination: "Carmel", weight: 400, unit: "lb", hazmat: false }
console.log(processManifest(manifest));