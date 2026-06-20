const ingredients = [
  { id: "tomate", name: "Tomate", cost: 4, icon: "\u{1F345}" },
  { id: "albahaca", name: "Albahaca", cost: 3, icon: "\u{1F33F}" },
  { id: "pasta", name: "Pasta", cost: 6, icon: "\u{1F35D}" },
  { id: "queso", name: "Queso", cost: 5, icon: "\u{1F9C0}" },
  { id: "champinon", name: "Champi\u00f1\u00f3n", cost: 5, icon: "\u{1F344}" },
  { id: "aceitunas", name: "Aceitunas", cost: 4, icon: "\u{1FAD2}" },
  { id: "pimiento", name: "Pimiento", cost: 4, icon: "\u{1FAD1}" },
  { id: "huevo", name: "Huevo", cost: 4, icon: "\u{1F95A}" },
  { id: "arroz", name: "Arroz", cost: 5, icon: "\u{1F35A}" },
  { id: "pescado", name: "Pescado", cost: 9, icon: "\u{1F41F}" },
  { id: "tortilla", name: "Tortilla", cost: 4, icon: "\u{1FAD3}" },
  { id: "lechuga", name: "Lechuga", cost: 3, icon: "\u{1F96C}" },
];

const characters = [
  {
    id: "kevin",
    name: "Kevin Talks",
    age: "23 a\u00f1os",
    initial: "K",
    role: "Chef experto",
    path: "Solo pedidos complejos",
    allowedTiers: ["hard"],
    startingCoins: 60,
  },
  {
    id: "agustin",
    name: "Agust\u00edn",
    age: "13 a\u00f1os",
    initial: "A",
    role: "Reto intermedio",
    path: "Parte en platos moderados",
    allowedTiers: ["moderate", "hard"],
    startingCoins: 40,
  },
  {
    id: "isabela",
    name: "Isabella",
    age: "8 a\u00f1os",
    initial: "I",
    avatar: "./assets/characters/isabella-avatar.png",
    role: "Aprendiz estrella",
    path: "Parte desde lo b\u00e1sico",
    allowedTiers: ["easy", "moderate", "hard"],
    startingCoins: 25,
  },
];

const recipes = [
  {
    name: "Pasta al tomate",
    difficulty: "B\u00e1sico",
    tier: "easy",
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
    difficulty: "B\u00e1sico",
    tier: "easy",
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
    difficulty: "Medio",
    tier: "moderate",
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
    difficulty: "Medio",
    tier: "moderate",
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
    difficulty: "Medio",
    tier: "moderate",
    dish: "soup",
    customer: "girl",
    request: "Una sopa suave con arroz, pimiento y champi\u00f1\u00f3n.",
    ingredients: ["arroz", "pimiento", "champinon"],
    cook: true,
    price: 70,
    stars: 2,
  },
  {
    name: "Pizza vegetal",
    difficulty: "Dif\u00edcil",
    tier: "hard",
    dish: "pizza",
    customer: "grandpa",
    request: "Una pizza completa: tortilla, tomate, queso y verduras.",
    ingredients: ["tortilla", "tomate", "queso", "champinon", "aceitunas", "pimiento"],
    cook: true,
    price: 96,
    stars: 3,
  },
  {
    name: "Pasta especial",
    difficulty: "Dif\u00edcil",
    tier: "hard",
    dish: "pasta",
    customer: "girl",
    request: "Quiero pasta con salsa, queso, champi\u00f1\u00f3n y albahaca.",
    ingredients: ["pasta", "tomate", "queso", "champinon", "albahaca"],
    cook: true,
    price: 88,
    stars: 3,
  },
  {
    name: "Risotto marino",
    difficulty: "Dif\u00edcil",
    tier: "hard",
    dish: "soup",
    customer: "boy",
    request: "Un arroz cremoso con pescado, champi\u00f1\u00f3n y pimiento.",
    ingredients: ["arroz", "pescado", "champinon", "pimiento", "albahaca"],
    cook: true,
    price: 104,
    stars: 3,
  },
];

const byId = Object.fromEntries(ingredients.map((item) => [item.id, item]));
const byCharacter = Object.fromEntries(characters.map((item) => [item.id, item]));
const els = {
  phone: document.querySelector("#phone"),
  gameplaySections: document.querySelectorAll("[data-gameplay]"),
  characterSelect: document.querySelector("#characterSelect"),
  characterChoices: document.querySelector("#characterChoices"),
  playerName: document.querySelector("#playerName"),
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
  chefSprite: document.querySelector("#chefSprite"),
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
  characterId: null,
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

function freshState(overrides = {}) {
  return { ...blankState, selected: [], ...overrides };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem("chefEstrellaState") || "null");
    return saved ? freshState(saved) : freshState();
  } catch {
    return freshState();
  }
}

function saveState() {
  const { selected, prepared, cooked, cooking, mistakes, ...safe } = state;
  localStorage.setItem("chefEstrellaState", JSON.stringify(safe));
}

function selectedCharacter() {
  return byCharacter[state.characterId] || null;
}

function characterRecipes() {
  const character = selectedCharacter();
  if (!character) return [];
  return recipes.filter((recipe) => character.allowedTiers.includes(recipe.tier));
}

function currentRecipe() {
  const availableRecipes = characterRecipes();
  return availableRecipes[state.level % availableRecipes.length];
}

function recipeCost(recipe) {
  return recipe.ingredients.reduce((sum, id) => sum + byId[id].cost, 0);
}

function selectedCost() {
  return state.selected.reduce((sum, id) => sum + byId[id].cost, 0);
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

function selectCharacter(id) {
  const character = byCharacter[id];
  if (!character) return;
  state = freshState({
    characterId: id,
    coins: character.startingCoins,
  });
  saveState();
  setFeedback(`${character.name} toma el delantal. Llega el primer cliente.`, "good");
  render();
}

function addIngredient(id) {
  const recipe = currentRecipe();
  if (!recipe) return;
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
  setFeedback(`${byId[removed].name} sali\u00f3 de la bandeja.`);
  render();
}

function failPaidCost(recipe) {
  const loss = selectedCost();
  state.coins = Math.max(0, state.coins - loss);
  state.streak = 0;
  state.level += 1;
  saveState();
  state.selected = [];
  state.prepared = false;
  state.cooked = false;
  state.cooking = false;
  state.mistakes = 0;
  els.cookMeter.classList.remove("ready");
  setFeedback(
    `Pedido perdido. El cliente no pag\u00f3 y la cocina asumi\u00f3 ${money(loss)} en ingredientes.`,
    "bad",
  );
  render();
}

function prepareDish() {
  const recipe = currentRecipe();
  if (!recipe) {
    setFeedback("Primero elige qui\u00e9n va a cocinar.", "warn");
    return;
  }
  if (!state.selected.length) {
    setFeedback("Primero toca los ingredientes del pedido.", "warn");
    return;
  }
  if (!sameIngredients(state.selected, recipe.ingredients)) {
    state.mistakes += 1;
    state.prepared = false;

    if (recipe.tier !== "easy") {
      failPaidCost(recipe);
      return;
    }

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
  if (!recipe) return;
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
    setFeedback("Perfecto. El plato est\u00e1 caliente y listo para entregar.", "good");
    render();
  }, 900);
}

function deliverDish() {
  const recipe = currentRecipe();
  if (!recipe) return;
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
  state = freshState();
  setFeedback("Elige un personaje para comenzar una partida nueva.");
  render();
}

function renderCharacterChoices() {
  els.characterChoices.innerHTML = "";
  characters.forEach((character) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `character-card ${character.id}`;
    button.setAttribute("aria-label", `Elegir ${character.name}`);
    const avatar = character.avatar
      ? `<img class="character-avatar image-avatar" src="${character.avatar}" alt="" />`
      : `<span class="character-avatar" aria-hidden="true">${character.initial}</span>`;
    button.innerHTML = `
      ${avatar}
      <span class="character-copy">
        <strong>${character.name}</strong>
        <span>${character.age} · ${character.role}</span>
        <small>${character.path}</small>
      </span>
    `;
    button.addEventListener("click", () => selectCharacter(character.id));
    els.characterChoices.appendChild(button);
  });
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
    empty.textContent = "Tu plato est\u00e1 vac\u00edo";
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

function setGameplayVisible(isVisible) {
  els.characterSelect.classList.toggle("hidden", isVisible);
  els.gameplaySections.forEach((section) => section.classList.toggle("hidden", !isVisible));
  els.phone.classList.toggle("selecting", !isVisible);
}

function render() {
  const character = selectedCharacter();
  els.coinCount.textContent = state.coins;
  els.starCount.textContent = state.stars;
  els.playerName.textContent = character ? character.name : "Sin personaje";

  if (!character) {
    setGameplayVisible(false);
    renderCharacterChoices();
    return;
  }

  const recipe = currentRecipe();
  const availableRecipes = characterRecipes();
  const cost = recipeCost(recipe);
  const progress = ((state.level % availableRecipes.length) / availableRecipes.length) * 100;

  setGameplayVisible(true);
  els.levelLabel.textContent = `Nivel ${state.level + 1}`;
  els.difficultyLabel.textContent = `${recipe.difficulty} · ${character.name}`;
  els.levelProgress.style.width = `${Math.max(8, progress)}%`;
  els.recipeName.textContent = recipe.name;
  els.dishSprite.src = `./assets/crops/dish-${recipe.dish}.png`;
  els.customerBubble.textContent = recipe.request;
  els.customerSprite.src = `./assets/crops/customer-${recipe.customer}.png`;
  els.chefSprite.src = character.avatar || "./assets/crops/chef.png";
  els.chefSprite.classList.toggle("custom-chef", Boolean(character.avatar));
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
renderCharacterChoices();
render();
