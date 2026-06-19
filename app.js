const ingredients = [
  { id: "tomate", name: "Tomate", cost: 4, icon: "🍅" },
  { id: "albahaca", name: "Albahaca", cost: 3, icon: "🌿" },
  { id: "pasta", name: "Pasta", cost: 6, icon: "🍝" },
  { id: "queso", name: "Queso", cost: 5, icon: "🧀" },
  { id: "champinon", name: "Champiñón", cost: 5, icon: "🍄" },
  { id: "aceitunas", name: "Aceitunas", cost: 4, icon: "🫒" },
  { id: "pimiento", name: "Pimiento", cost: 4, icon: "🫑" },
  { id: "huevo", name: "Huevo", cost: 4, icon: "🥚" },
  { id: "arroz", name: "Arroz", cost: 5, icon: "🍚" },
  { id: "pescado", name: "Pescado", cost: 9, icon: "🐟" },
  { id: "tortilla", name: "Tortilla", cost: 4, icon: "🫓" },
  { id: "lechuga", name: "Lechuga", cost: 3, icon: "🥬" },
];

const recipes = [
  {
    name: "Pasta al tomate",
    difficulty: "Aprendiz",
    dish: "pasta",
    customer: "boy",
    request: "Me encanta la pasta con tomate y albahaca.",
    ingredients: ["pasta", "tomate", "albahaca"],
    cook: true,
    price: 42,
    stars: 1,
  },
  {
    name: "Ensalada arcoiris",
    difficulty: "Aprendiz",
    dish: "salad",
    customer: "girl",
    request: "Quiero una ensalada fresca con mucho color.",
    ingredients: ["lechuga", "tomate", "queso", "aceitunas"],
    cook: false,
    price: 46,
    stars: 1,
  },
  {
    name: "Omelet feliz",
    difficulty: "Ayudante",
    dish: "omelet",
    customer: "grandpa",
    request: "Un omelet calentito con queso y pimiento.",
    ingredients: ["huevo", "queso", "pimiento"],
    cook: true,
    price: 52,
    stars: 2,
  },
  {
    name: "Rollitos de pescado",
    difficulty: "Ayudante",
    dish: "sushi",
    customer: "boy",
    request: "Quiero rollitos con arroz, pescado y lechuga.",
    ingredients: ["arroz", "pescado", "lechuga"],
    cook: false,
    price: 66,
    stars: 2,
  },
  {
    name: "Sopa dorada",
    difficulty: "Cocinera",
    dish: "soup",
    customer: "girl",
    request: "Una sopa suave con arroz, pimiento y champiñón.",
    ingredients: ["arroz", "pimiento", "champinon"],
    cook: true,
    price: 70,
    stars: 2,
  },
  {
    name: "Pizza vegetal",
    difficulty: "Chef",
    dish: "pizza",
    customer: "grandpa",
    request: "Una pizza completa: tortilla, tomate, queso y verduras.",
    ingredients: ["tortilla", "tomate", "queso", "champinon", "aceitunas", "pimiento"],
    cook: true,
    price: 96,
    stars: 3,
  },
];

const byId = Object.fromEntries(ingredients.map((item) => [item.id, item]));
const els = {
  coinCount: document.querySelector("#coinCount"),
  starCount: document.querySelector("#starCount"),
  levelLabel: document.querySelector("#levelLabel"),
  difficultyLabel: document.querySelector("#difficultyLabel"),
  levelProgress: document.querySelector("#levelProgress"),
  recipeName: document.querySelector("#recipeName"),
  dishSprite: document.querySelector("#dishSprite"),
  neededList: document.querySelector("#neededList"),
  priceValue: document.querySelector("#priceValue"),
  costValue: document.querySelector("#costValue"),
  profitValue: document.querySelector("#profitValue"),
  customerBubble: document.querySelector("#customerBubble"),
  customerSprite: document.querySelector("#customerSprite"),
  prepStatus: document.querySelector("#prepStatus"),
  plate: document.querySelector("#plate"),
  cookMeter: document.querySelector("#cookMeter"),
  ingredientsGrid: document.querySelector("#ingredientsGrid"),
  prepareButton: document.querySelector("#prepareButton"),
  cookButton: document.querySelector("#cookButton"),
  deliverButton: document.querySelector("#deliverButton"),
  clearTray: document.querySelector("#clearTray"),
  resetGame: document.querySelector("#resetGame"),
  feedback: document.querySelector("#feedback"),
};

const blankState = {
  level: 0,
  coins: 25,
  stars: 0,
  streak: 0,
  selected: [],
  prepared: false,
  cooked: false,
  cooking: false,
  mistakes: 0,
};

let state = loadState();

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem("chefEstrellaState") || "null");
    return saved ? { ...blankState, ...saved, selected: [] } : { ...blankState };
  } catch {
    return { ...blankState };
  }
}

function saveState() {
  const { selected, prepared, cooked, cooking, mistakes, ...safe } = state;
  localStorage.setItem("chefEstrellaState", JSON.stringify(safe));
}

function currentRecipe() {
  return recipes[state.level % recipes.length];
}

function recipeCost(recipe) {
  return recipe.ingredients.reduce((sum, id) => sum + byId[id].cost, 0);
}

function money(amount) {
  return `$${amount}`;
}

function sameIngredients(a, b) {
  if (a.length !== b.length) return false;
  const left = [...a].sort().join("|");
  const right = [...b].sort().join("|");
  return left === right;
}

function setFeedback(message, mood = "normal") {
  els.feedback.textContent = message;
  els.feedback.dataset.mood = mood;
}

function resetPrep(message) {
  state.selected = [];
  state.prepared = false;
  state.cooked = false;
  state.cooking = false;
  state.mistakes = 0;
  setFeedback(message);
  render();
}

function addIngredient(id) {
  const recipe = currentRecipe();
  const maxItems = Math.max(6, recipe.ingredients.length + 1);
  if (state.selected.length >= maxItems || state.cooking) return;
  state.selected.push(id);
  state.prepared = false;
  state.cooked = false;
  els.cookMeter.classList.remove("ready");
  setFeedback(`${byId[id].name} agregado al plato.`);
  render();
}

function removeIngredient(index) {
  if (state.cooking) return;
  const removed = state.selected.splice(index, 1)[0];
  state.prepared = false;
  state.cooked = false;
  els.cookMeter.classList.remove("ready");
  setFeedback(`${byId[removed].name} salió de la bandeja.`);
  render();
}

function prepareDish() {
  const recipe = currentRecipe();
  if (!state.selected.length) {
    setFeedback("Primero toca los ingredientes del pedido.", "warn");
    return;
  }
  if (!sameIngredients(state.selected, recipe.ingredients)) {
    state.mistakes += 1;
    state.prepared = false;
    const missing = recipe.ingredients.filter((id) => !state.selected.includes(id)).map((id) => byId[id].name);
    const extras = state.selected.filter((id) => !recipe.ingredients.includes(id)).map((id) => byId[id].name);
    const hint = missing.length
      ? `Falta: ${missing.join(", ")}.`
      : extras.length
        ? `Sobra: ${extras.join(", ")}.`
        : "Revisa las cantidades.";
    setFeedback(`Casi. ${hint}`, "warn");
    render();
    return;
  }
  state.prepared = true;
  state.cooked = !recipe.cook;
  setFeedback(recipe.cook ? "Receta correcta. Ahora toca cocinarla." : "Receta lista. Puedes entregarla.", "good");
  render();
}

function cookDish() {
  const recipe = currentRecipe();
  if (!recipe.cook) {
    setFeedback("Este plato se sirve fresco, sin cocinar.", "warn");
    return;
  }
  if (!state.prepared) {
    setFeedback("Primero prepara la receta correcta.", "warn");
    return;
  }
  if (state.cooking || state.cooked) return;
  state.cooking = true;
  els.cookMeter.classList.add("ready");
  setFeedback("Cocinando con cuidado...");
  render();
  window.setTimeout(() => {
    state.cooking = false;
    state.cooked = true;
    setFeedback("Perfecto. El plato está caliente y listo para entregar.", "good");
    render();
  }, 900);
}

function deliverDish() {
  const recipe = currentRecipe();
  if (!state.prepared) {
    setFeedback("El cliente espera un plato preparado con los ingredientes correctos.", "warn");
    return;
  }
  if (recipe.cook && !state.cooked) {
    setFeedback("Falta cocinar antes de entregar.", "warn");
    return;
  }

  const cost = recipeCost(recipe);
  const profit = recipe.price - cost;
  const tip = Math.max(0, 8 - state.mistakes * 3);
  const reward = profit + tip;
  state.coins += reward;
  state.stars += recipe.stars;
  state.streak += 1;
  state.level += 1;
  saveState();
  setFeedback(`Cliente feliz. Ganaste ${money(profit)} de ganancia y ${money(tip)} de propina.`, "good");
  state.selected = [];
  state.prepared = false;
  state.cooked = false;
  state.cooking = false;
  state.mistakes = 0;
  els.cookMeter.classList.remove("ready");
  render();
}

function resetGame() {
  localStorage.removeItem("chefEstrellaState");
  state = { ...blankState };
  resetPrep("Partida nueva. Llega el primer cliente.");
}

function renderNeeded(recipe) {
  els.neededList.innerHTML = "";
  recipe.ingredients.forEach((id) => {
    const chip = document.createElement("span");
    chip.className = "needed-chip";
    chip.innerHTML = `<span class="food-icon" aria-hidden="true">${byId[id].icon}</span>${byId[id].name}`;
    els.neededList.appendChild(chip);
  });
}

function renderIngredients() {
  els.ingredientsGrid.innerHTML = "";
  ingredients.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "ingredient";
    button.setAttribute("aria-label", `Agregar ${item.name}, costo ${item.cost}`);
    button.innerHTML = `
      <span class="food-icon" aria-hidden="true">${item.icon}</span>
      <span>${item.name}</span>
      <small>${money(item.cost)}</small>
    `;
    button.addEventListener("click", () => addIngredient(item.id));
    els.ingredientsGrid.appendChild(button);
  });
}

function renderPlate() {
  els.plate.innerHTML = "";
  if (!state.selected.length) {
    const empty = document.createElement("span");
    empty.className = "empty-plate";
    empty.textContent = "Tu plato está vacío";
    els.plate.appendChild(empty);
    return;
  }
  state.selected.forEach((id, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "tray-item";
    item.setAttribute("aria-label", `Quitar ${byId[id].name}`);
    item.innerHTML = `<span class="food-icon" aria-hidden="true">${byId[id].icon}</span><span>${byId[id].name}</span>`;
    item.addEventListener("click", () => removeIngredient(index));
    els.plate.appendChild(item);
  });
}

function render() {
  const recipe = currentRecipe();
  const cost = recipeCost(recipe);
  const progress = ((state.level % recipes.length) / recipes.length) * 100;

  els.coinCount.textContent = state.coins;
  els.starCount.textContent = state.stars;
  els.levelLabel.textContent = `Nivel ${state.level + 1}`;
  els.difficultyLabel.textContent = recipe.difficulty;
  els.levelProgress.style.width = `${Math.max(8, progress)}%`;
  els.recipeName.textContent = recipe.name;
  els.dishSprite.src = `./assets/crops/dish-${recipe.dish}.png`;
  els.customerBubble.textContent = recipe.request;
  els.customerSprite.src = `./assets/crops/customer-${recipe.customer}.png`;
  els.priceValue.textContent = money(recipe.price);
  els.costValue.textContent = money(cost);
  els.profitValue.textContent = money(recipe.price - cost);
  els.prepStatus.textContent = state.cooking
    ? "Cocinando"
    : state.cooked
      ? "Listo para entregar"
      : state.prepared
        ? recipe.cook
          ? "Listo para cocinar"
          : "Listo para entregar"
        : "Elige ingredientes";

  renderNeeded(recipe);
  renderPlate();

  els.prepareButton.disabled = state.cooking;
  els.cookButton.disabled = state.cooking || !recipe.cook || !state.prepared || state.cooked;
  els.deliverButton.disabled = state.cooking || !state.prepared || (recipe.cook && !state.cooked);
}

els.prepareButton.addEventListener("click", prepareDish);
els.cookButton.addEventListener("click", cookDish);
els.deliverButton.addEventListener("click", deliverDish);
els.clearTray.addEventListener("click", () => resetPrep("Bandeja limpia. Intenta de nuevo."));
els.resetGame.addEventListener("click", resetGame);

renderIngredients();
render();
