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
  { id: "harina", name: "Harina", cost: 4, icon: "\u{1F33E}" },
  { id: "azucar", name: "Az\u00facar", cost: 3, icon: "\u{1F36C}" },
  { id: "mantequilla", name: "Mantequilla", cost: 5, icon: "\u{1F9C8}" },
  { id: "leche", name: "Leche", cost: 4, icon: "\u{1F95B}" },
];

const characters = [
  {
    id: "kevin",
    name: "Kevin Talks",
    age: "23 a\u00f1os",
    initial: "K",
    avatar: "./assets/characters/kevin-avatar.png",
    role: "Chef experto",
    specialty: "omelet",
    specialtyLabel: "Omelet",
    specialtyBonus: 12,
    path: "Especialidad: omelet avanzado",
    allowedTiers: ["hard"],
    startingCoins: 60,
  },
  {
    id: "agustin",
    name: "Agust\u00edn",
    age: "13 a\u00f1os",
    initial: "A",
    avatar: "./assets/characters/agustin-avatar.png",
    role: "Reto intermedio",
    specialty: "rollitos",
    specialtyLabel: "Rollitos",
    specialtyBonus: 10,
    path: "Especialidad: rollitos",
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
    specialty: "queque",
    specialtyLabel: "Queques",
    specialtyBonus: 10,
    path: "Especialidad: queques",
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
    specialty: "pasta",
    customer: "boy",
    request: "Me encanta la pasta con tomate y albahaca.",
    ingredients: ["pasta", "tomate", "albahaca"],
    prepSteps: [
      "Pon la pasta como base del plato.",
      "Agrega tomate para hacer la salsa.",
      "Termina con albahaca para dar aroma.",
    ],
    cookStep: "Calienta la pasta para que la salsa se mezcle bien.",
    cook: true,
    price: 42,
    stars: 1,
  },
  {
    name: "Queque de Isabella",
    difficulty: "B\u00e1sico",
    tier: "easy",
    dish: "cake",
    specialty: "queque",
    customer: "girl",
    request: "Quiero un queque suave, dulce y calentito.",
    ingredients: ["harina", "huevo", "azucar", "mantequilla", "leche"],
    prepSteps: [
      "Mezcla harina y huevo para formar la masa.",
      "Agrega az\u00facar para endulzar.",
      "Suma mantequilla y leche para que quede suave.",
      "Revuelve hasta que la mezcla se vea pareja.",
    ],
    cookStep: "Hornea el queque hasta que suba y quede dorado.",
    cook: true,
    price: 58,
    stars: 2,
  },
  {
    name: "Ensalada arcoiris",
    difficulty: "B\u00e1sico",
    tier: "easy",
    dish: "salad",
    specialty: "ensalada",
    customer: "girl",
    request: "Quiero una ensalada fresca con mucho color.",
    ingredients: ["lechuga", "tomate", "queso", "aceitunas"],
    prepSteps: [
      "Lava y acomoda la lechuga.",
      "Agrega tomate para dar color.",
      "Suma queso y aceitunas para terminar.",
    ],
    cook: false,
    price: 46,
    stars: 1,
  },
  {
    name: "Omelet feliz",
    difficulty: "Medio",
    tier: "moderate",
    dish: "omelet",
    specialty: "omelet",
    customer: "grandpa",
    request: "Un omelet calentito con queso y pimiento.",
    ingredients: ["huevo", "queso", "pimiento"],
    prepSteps: [
      "Rompe el huevo y b\u00e1telo suave.",
      "Agrega queso para que quede cremoso.",
      "Pon pimiento para dar sabor y color.",
    ],
    cookStep: "Cocina el omelet hasta que quede dorado.",
    cook: true,
    price: 52,
    stars: 2,
  },
  {
    name: "Rollitos de pescado",
    difficulty: "Medio",
    tier: "moderate",
    dish: "sushi",
    specialty: "rollitos",
    customer: "boy",
    request: "Quiero rollitos con arroz, pescado y lechuga.",
    ingredients: ["arroz", "pescado", "lechuga"],
    prepSteps: [
      "Extiende el arroz como base.",
      "Agrega pescado en el centro.",
      "Envuelve con lechuga y forma los rollitos.",
    ],
    cook: false,
    price: 66,
    stars: 2,
  },
  {
    name: "Sopa dorada",
    difficulty: "Medio",
    tier: "moderate",
    dish: "soup",
    specialty: "sopa",
    customer: "girl",
    request: "Una sopa suave con arroz, pimiento y champi\u00f1\u00f3n.",
    ingredients: ["arroz", "pimiento", "champinon"],
    prepSteps: [
      "Pon arroz para dar cuerpo a la sopa.",
      "Agrega pimiento picado.",
      "Suma champi\u00f1\u00f3n para un sabor suave.",
    ],
    cookStep: "Hierve la sopa hasta que todo quede blandito.",
    cook: true,
    price: 70,
    stars: 2,
  },
  {
    name: "Pizza vegetal",
    difficulty: "Dif\u00edcil",
    tier: "hard",
    dish: "pizza",
    specialty: "pizza",
    customer: "grandpa",
    request: "Una pizza completa: tortilla, tomate, queso y verduras.",
    ingredients: ["tortilla", "tomate", "queso", "champinon", "aceitunas", "pimiento"],
    prepSteps: [
      "Usa la tortilla como base de pizza.",
      "Cubre con tomate como salsa.",
      "Agrega queso y reparte las verduras.",
      "Ordena los toppings para que se cocinen parejo.",
    ],
    cookStep: "Hornea la pizza hasta que el queso se derrita.",
    cook: true,
    price: 96,
    stars: 3,
  },
  {
    name: "Omelet maestro",
    difficulty: "Dif\u00edcil",
    tier: "hard",
    dish: "omelet",
    specialty: "omelet",
    customer: "grandpa",
    request: "Quiero un omelet dif\u00edcil con queso, verduras y aroma fresco.",
    ingredients: ["huevo", "queso", "pimiento", "champinon", "albahaca"],
    prepSteps: [
      "Bate el huevo con calma.",
      "Agrega queso para una textura cremosa.",
      "Suma pimiento y champi\u00f1\u00f3n bien repartidos.",
      "Termina con albahaca para levantar el aroma.",
    ],
    cookStep: "Cocina lento para que el omelet quede dorado y no se rompa.",
    cook: true,
    price: 94,
    stars: 3,
  },
  {
    name: "Pasta especial",
    difficulty: "Dif\u00edcil",
    tier: "hard",
    dish: "pasta",
    specialty: "pasta",
    customer: "girl",
    request: "Quiero pasta con salsa, queso, champi\u00f1\u00f3n y albahaca.",
    ingredients: ["pasta", "tomate", "queso", "champinon", "albahaca"],
    prepSteps: [
      "Pon pasta como base.",
      "Agrega tomate para la salsa.",
      "Suma queso y champi\u00f1\u00f3n.",
      "Termina con albahaca fresca.",
    ],
    cookStep: "Calienta todo para unir la salsa con la pasta.",
    cook: true,
    price: 88,
    stars: 3,
  },
  {
    name: "Risotto marino",
    difficulty: "Dif\u00edcil",
    tier: "hard",
    dish: "soup",
    specialty: "risotto",
    customer: "boy",
    request: "Un arroz cremoso con pescado, champi\u00f1\u00f3n y pimiento.",
    ingredients: ["arroz", "pescado", "champinon", "pimiento", "albahaca"],
    prepSteps: [
      "Pon arroz como base cremosa.",
      "Agrega pescado en trozos.",
      "Suma champi\u00f1\u00f3n y pimiento.",
      "Termina con albahaca para perfumar.",
    ],
    cookStep: "Cocina lento para que el arroz quede cremoso.",
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
  specialtyBadge: document.querySelector("#specialtyBadge"),
  customerBubble: document.querySelector("#customerBubble"),
  customerSprite: document.querySelector("#customerSprite"),
  chefSprite: document.querySelector("#chefSprite"),
  petEvent: document.querySelector("#petEvent"),
  petDismiss: document.querySelector("#petDismiss"),
  prepStatus: document.querySelector("#prepStatus"),
  lessonPanel: document.querySelector("#lessonPanel"),
  lessonStage: document.querySelector("#lessonStage"),
  lessonKicker: document.querySelector("#lessonKicker"),
  lessonTitle: document.querySelector("#lessonTitle"),
  lessonText: document.querySelector("#lessonText"),
  lessonSteps: document.querySelector("#lessonSteps"),
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
  preparing: false,
  cooking: false,
  lessonMode: "idle",
  lessonStep: -1,
  mistakes: 0,
  petEvent: false,
};

let state = loadState();
let lessonTimer = null;

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
  const { selected, prepared, cooked, preparing, cooking, lessonMode, lessonStep, mistakes, petEvent, ...safe } = state;
  localStorage.setItem("chefEstrellaState", JSON.stringify(safe));
}

function selectedCharacter() {
  return byCharacter[state.characterId] || null;
}

function characterRecipes() {
  const character = selectedCharacter();
  if (!character) return [];
  return recipes
    .filter((recipe) => character.allowedTiers.includes(recipe.tier))
    .sort((a, b) => Number(b.specialty === character.specialty) - Number(a.specialty === character.specialty));
}

function currentRecipe() {
  const availableRecipes = characterRecipes();
  return availableRecipes[state.level % availableRecipes.length];
}

function recipeCost(recipe) {
  return recipe.ingredients.reduce((sum, id) => sum + byId[id].cost, 0);
}

function specialtyBonus(recipe, character = selectedCharacter()) {
  return character && recipe.specialty === character.specialty ? character.specialtyBonus : 0;
}

function recipePrice(recipe, character = selectedCharacter()) {
  return recipe.price + specialtyBonus(recipe, character);
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

function clearLessonTimer() {
  if (lessonTimer) {
    window.clearTimeout(lessonTimer);
    lessonTimer = null;
  }
}

function setLesson(mode, step = -1) {
  state.lessonMode = mode;
  state.lessonStep = step;
}

function resetPrep(message) {
  clearLessonTimer();
  state.selected = [];
  state.prepared = false;
  state.cooked = false;
  state.preparing = false;
  state.cooking = false;
  state.mistakes = 0;
  setLesson("idle");
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
  if (state.selected.length >= maxItems || state.preparing || state.cooking || state.petEvent) return;
  state.selected.push(id);
  state.prepared = false;
  state.cooked = false;
  setLesson("choosing", state.selected.length - 1);
  els.cookMeter.classList.remove("ready");
  setFeedback(`${byId[id].name} agregado al plato.`);
  render();
}

function removeIngredient(index) {
  if (state.preparing || state.cooking || state.petEvent) return;
  const removed = state.selected.splice(index, 1)[0];
  state.prepared = false;
  state.cooked = false;
  setLesson(state.selected.length ? "choosing" : "idle", state.selected.length - 1);
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
  state.preparing = false;
  state.cooking = false;
  state.mistakes = 0;
  state.petEvent = true;
  setLesson("idle");
  els.cookMeter.classList.remove("ready");
  setFeedback(
    `Pedido devuelto. El cliente no pag\u00f3, perdiste ${money(loss)} y Sasuke se comi\u00f3 todo.`,
    "bad",
  );
  render();
}

function dismissPetEvent() {
  state.petEvent = false;
  setFeedback("Sasuke dej\u00f3 el plato limpio. Sigue el siguiente cliente.");
  render();
}

function runPrepLesson(recipe) {
  clearLessonTimer();
  state.preparing = true;
  state.prepared = false;
  state.cooked = false;
  setLesson("prep", 0);
  setFeedback("Preparando paso a paso...");
  render();

  const steps = recipe.prepSteps || [];
  const advance = () => {
    if (!state.preparing) return;
    if (state.lessonStep < steps.length - 1) {
      state.lessonStep += 1;
      render();
      lessonTimer = window.setTimeout(advance, 950);
      return;
    }

    state.preparing = false;
    state.prepared = true;
    state.cooked = !recipe.cook;
    setLesson(recipe.cook ? "readyToCook" : "readyToServe");
    setFeedback(recipe.cook ? "Receta armada. Ahora toca cocinarla." : "Receta lista. Puedes entregarla.", "good");
    lessonTimer = null;
    render();
  };

  lessonTimer = window.setTimeout(advance, 950);
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
  if (state.preparing || state.cooking || state.petEvent) return;
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
  runPrepLesson(recipe);
}

function cookDish() {
  const recipe = currentRecipe();
  if (!recipe) return;
  if (state.petEvent) return;
  if (!recipe.cook) {
    setFeedback("Este plato se sirve fresco, sin cocinar.", "warn");
    return;
  }
  if (!state.prepared) {
    setFeedback("Primero prepara la receta correcta.", "warn");
    return;
  }
  if (state.preparing || state.cooking || state.cooked) return;
  clearLessonTimer();
  state.cooking = true;
  setLesson("cook", 0);
  els.cookMeter.classList.add("ready");
  setFeedback("Cocinando con cuidado... mira el calor y las burbujas.");
  render();
  lessonTimer = window.setTimeout(() => {
    state.cooking = false;
    state.cooked = true;
    setLesson("readyToServe");
    setFeedback("Perfecto. El plato est\u00e1 caliente y listo para entregar.", "good");
    lessonTimer = null;
    render();
  }, 1500);
}

function deliverDish() {
  const recipe = currentRecipe();
  if (!recipe) return;
  if (state.petEvent) return;
  if (!state.prepared) {
    setFeedback("El cliente espera un plato preparado con los ingredientes correctos.", "warn");
    return;
  }
  if (recipe.cook && !state.cooked) {
    setFeedback("Falta cocinar antes de entregar.", "warn");
    return;
  }

  const cost = recipeCost(recipe);
  const character = selectedCharacter();
  const bonus = specialtyBonus(recipe, character);
  const price = recipePrice(recipe, character);
  const profit = price - cost;
  const tip = Math.max(0, 8 - state.mistakes * 3);
  const reward = profit + tip;
  state.coins += reward;
  state.stars += recipe.stars + (bonus ? 1 : 0);
  state.streak += 1;
  state.level += 1;
  saveState();
  setFeedback(
    bonus
      ? `Especialidad de ${character.name}. Ganaste ${money(profit)} y una estrella extra.`
      : `Cliente feliz. Ganaste ${money(profit)} de ganancia y ${money(tip)} de propina.`,
    "good",
  );
  state.selected = [];
  state.prepared = false;
  state.cooked = false;
  state.preparing = false;
  state.cooking = false;
  state.mistakes = 0;
  setLesson("idle");
  els.cookMeter.classList.remove("ready");
  render();
}

function resetGame() {
  clearLessonTimer();
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

function renderLesson(recipe) {
  const steps = recipe.prepSteps || [];
  const activeStep = Math.max(0, state.lessonStep);
  const stepText = steps[activeStep] || "Elige ingredientes y mira c\u00f3mo se arma el plato.";
  const activeIngredient = recipe.ingredients[Math.min(activeStep, recipe.ingredients.length - 1)];
  const selectedIcons = state.selected.map((id) => `<span>${byId[id].icon}</span>`).join("");
  const neededIcons = recipe.ingredients.map((id) => `<span>${byId[id].icon}</span>`).join("");

  els.lessonPanel.dataset.mode = state.lessonMode;
  els.lessonSteps.innerHTML = "";
  steps.forEach((step, index) => {
    const item = document.createElement("span");
    item.className = "lesson-dot";
    item.textContent = index + 1;
    item.title = step;
    item.dataset.active = String(state.lessonMode === "prep" && index === state.lessonStep);
    item.dataset.done = String(
      state.lessonMode === "prep" ? index < state.lessonStep : ["readyToCook", "cook", "readyToServe"].includes(state.lessonMode),
    );
    els.lessonSteps.appendChild(item);
  });

  if (state.lessonMode === "prep") {
    els.lessonKicker.textContent = `Paso ${activeStep + 1} de ${steps.length}`;
    els.lessonTitle.textContent = stepText;
    els.lessonText.textContent = activeIngredient ? `Ingrediente clave: ${byId[activeIngredient].name}.` : "Ordena el plato con cuidado.";
    els.lessonStage.innerHTML = `
      <div class="prep-scene">
        <span class="lesson-spark one">*</span>
        <span class="lesson-ingredient featured">${activeIngredient ? byId[activeIngredient].icon : "\u{1F37D}\uFE0F"}</span>
        <span class="lesson-arrow">+</span>
        <img src="./assets/crops/dish-${recipe.dish}.png" alt="" />
        <span class="lesson-spark two">*</span>
      </div>
    `;
    return;
  }

  if (state.lessonMode === "cook") {
    els.lessonKicker.textContent = "Cocinar";
    els.lessonTitle.textContent = recipe.cookStep || "Cocina con cuidado.";
    els.lessonText.textContent = "El calor transforma los ingredientes y une los sabores.";
    els.lessonStage.innerHTML = `
      <div class="cook-scene">
        <span class="steam s1"></span>
        <span class="steam s2"></span>
        <span class="steam s3"></span>
        <span class="pan">🍳</span>
        <span class="fire">🔥</span>
      </div>
    `;
    return;
  }

  if (state.lessonMode === "readyToCook") {
    els.lessonKicker.textContent = "Receta armada";
    els.lessonTitle.textContent = "Ya mezclaste lo necesario.";
    els.lessonText.textContent = recipe.cookStep || "Ahora toca cocinar para terminar.";
    els.lessonStage.innerHTML = `<div class="ready-scene">${neededIcons}<strong>✓</strong></div>`;
    return;
  }

  if (state.lessonMode === "readyToServe") {
    els.lessonKicker.textContent = "Listo";
    els.lessonTitle.textContent = "El plato qued\u00f3 listo para entregar.";
    els.lessonText.textContent = "Ahora el cliente puede probarlo.";
    els.lessonStage.innerHTML = `<div class="ready-scene"><img src="./assets/crops/dish-${recipe.dish}.png" alt="" /><strong>✓</strong></div>`;
    return;
  }

  if (state.lessonMode === "choosing" && state.selected.length) {
    els.lessonKicker.textContent = "En la bandeja";
    els.lessonTitle.textContent = "Vas juntando ingredientes.";
    els.lessonText.textContent = "Cuando estén todos, presiona Preparar para ver los pasos.";
    els.lessonStage.innerHTML = `<div class="choice-scene">${selectedIcons}</div>`;
    return;
  }

  els.lessonKicker.textContent = "Aprende la receta";
  els.lessonTitle.textContent = "Mira los ingredientes del pedido.";
  els.lessonText.textContent = "Toca los ingredientes y luego presiona Preparar para ver los pasos.";
  els.lessonStage.innerHTML = `<div class="choice-scene muted">${neededIcons}</div>`;
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
  const bonus = specialtyBonus(recipe, character);
  const price = recipePrice(recipe, character);
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
  els.petEvent.classList.toggle("hidden", !state.petEvent);
  els.priceValue.textContent = money(price);
  els.costValue.textContent = money(cost);
  els.profitValue.textContent = money(price - cost);
  els.specialtyBadge.classList.toggle("hidden", !bonus);
  els.specialtyBadge.textContent = bonus ? `Especialidad de ${character.name}: +${money(bonus)} y +1 estrella` : "";
  els.prepStatus.textContent = state.cooking
    ? "Cocinando"
    : state.preparing
      ? "Preparando paso a paso"
      : state.cooked
      ? "Listo para entregar"
      : state.prepared
        ? recipe.cook
          ? "Listo para cocinar"
          : "Listo para entregar"
        : "Elige ingredientes";

  renderNeeded(recipe);
  renderLesson(recipe);
  renderPlate();

  els.prepareButton.disabled = state.preparing || state.cooking || state.petEvent;
  els.cookButton.disabled = state.preparing || state.cooking || state.petEvent || !recipe.cook || !state.prepared || state.cooked;
  els.deliverButton.disabled = state.preparing || state.cooking || state.petEvent || !state.prepared || (recipe.cook && !state.cooked);
  els.clearTray.disabled = state.preparing || state.cooking || state.petEvent;
}

els.prepareButton.addEventListener("click", prepareDish);
els.cookButton.addEventListener("click", cookDish);
els.deliverButton.addEventListener("click", deliverDish);
els.clearTray.addEventListener("click", () => resetPrep("Bandeja limpia. Intenta de nuevo."));
els.resetGame.addEventListener("click", resetGame);
els.petDismiss.addEventListener("click", dismissPetEvent);

renderIngredients();
renderCharacterChoices();
render();
