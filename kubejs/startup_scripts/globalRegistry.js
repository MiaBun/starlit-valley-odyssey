const NUMISMATICS = Java.loadClass("dev.ithundxr.createnumismatics.Numismatics");
const NUMISMATICS_CURIO_UTILS = Java.loadClass("io.github.chakyl.numismaticsutils.utils.CurioUtils");

global.GLOBAL_BANK = NUMISMATICS.BANK;
global.getPersonalOrCurioAccount = NUMISMATICS_CURIO_UTILS.getPersonalOrCurioAccount;
global.depositIntoPersonalOrCurio = NUMISMATICS_CURIO_UTILS.depositIntoPersonalOrCurio;
global.deductFromPersonalOrCurio = NUMISMATICS_CURIO_UTILS.deductFromPersonalOrCurio;

global.coinMap = [
    { coin: "numismatics:prismatic_coin", value: 16777216 },
    { coin: "numismatics:ancient_coin", value: 262144 },
    { coin: "numismatics:neptunium_coin", value: 32768 },
    { coin: "numismatics:sun", value: 4096 },
    { coin: "numismatics:crown", value: 512 },
    { coin: "numismatics:cog", value: 64 },
    { coin: "numismatics:sprocket", value: 16 },
    { coin: "numismatics:bevel", value: 8 },
    { coin: "numismatics:spur", value: 1 }
];

global.formatPrice = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

global.formatName = (name) => {
    if (name.length === 0) return "";
    return name.charAt(0).toUpperCase() + name.slice(1);
};

const roundPrice = (price) => {
    for (let i = 0; i < global.coinMap.length; i++) {
        let { value } = global.coinMap[i];

        if (price % value === 0) {
            for (let k = 0; k < global.coinMap.length; k++) {
                if (price / global.coinMap[i - k].value <= 64) {
                    return global.coinMap[i - k].value * Math.round(price / global.coinMap[i = k].value);
                }
            }
        }
    }
    return price;
};

//pristine crystalarium items
global.pristine = [];


//ores
global.ore = [
    { item: "minecraft:raw_copper", value: 4 },
    { item: "minecraft:raw_copper_block", value: 36 },
    { item: "minecraft:raw_iron", value: 8 },
    { item: "minecraft:raw_iron_block", value: 72 },
    { item: "minecraft:coal", value: 8 },
    { item: "minecraft:coal_block", value: 72 },
    { item: "minecraft:raw_gold", value: 16 },
    { item: "minecraft:raw_gold_block", value: 144 },
    { item: "minecraft:redstone", value: 8 },
    { item: "minecraft:redstone_block", value: 72 },
    { item: "minecraft:lapis_lazuli", value: 6 },
    { item: "minecraft:lapis_block", value: 64 },
    { item: "minecraft:emerald", value: 32 },
    { item: "minecraft:emerald_block", value: 288 },
    { item: "minecraft:amethyst_shard", value: 8 },
    { item: "minecraft:amethyst_block", value: 32 },
    { item: "minecraft:quartz", value: 8 },
    { item: "minecraft:quartz_block", value: 32 },
    { item: "minecraft:diamond", value: 256 },
    { item: "minecraft:diamond_block", value: 2304 },
    { item: "minecraft:netherite_scrap", value: 1024 },
];

[
  { item: "minecraft:emerald", value: 32 },
  { item: "minecraft:diamond", value: 256 },
  { item: "minecraft:lapis_lazuli", value: 6 },
  { item: "minecraft:quartz", value: 8 },
  { item: "minecraft:amethyst_shard", value: 8 },
  { item: "minecraft:prismarine_crystals", value: 20 },
].forEach((mineral) => {
  global.pristine.push({
    item: `starlit:pristine_${mineral.item.path}`,
    value: mineral.value * 4,
  });
});

//geodes 
global.geodeList = [
    // TODO: add geodes
];
global.geodeList.forEach((mineral) => {
    global.pristine.push({
        item: `starlit:pristine_${mineral.item.path}`,
        value: mineral.value * 6,
    });
});

//frozen geode
global.frozenGeodeList = [
    // TODO: add frozen geodes
];
global.frozenGeodeList.forEach((mineral) => {
    global.pristine.push({
        item: `starlit:pristine_${mineral.item.path}`,
        value: mineral.value * 6,
    });
});

//magma geode
global.magmaGeodeList = [
    // TODO: add magma geodes
];
global.magmaGeodeList.forEach((mineral) => {
    global.pristine.push({
        item: `starlit:pristine_${mineral.item.path}`,
        value: mineral.value * 6,
    });
});

//gems
global.gems = [
    //TODO: add gems
];
global.gems.forEach((mineral) => {
    global.pristine.push({
        item: `starlit:pristine_${mineral.item.path}`,
        value: mineral.value * 6,
    });
});

//mining misc
global.miscGeologist = [
    { item: "minecraft:golden_apple", value: 128 }, //TODO: wiki
];

//artifacts
global.artifacts = [
    //TODO: add artifacts
];

//relics
global.relics = [
    //TODO: add relics
];

//crops
/*
  Farmland crop calc: (6 * stages + (2 * (4 - fertile seasons))) / count - (if reseedable, - 8)
  Master Cult: * 1.5
*/
global.crops = [
    { item: "minecraft:sweet_berries", value: 4 }, //TODO: wiki
    { item: "minecraft:melon_slice", value: 9 }, //TODO: wiki
    { item: "minecraft:melon", value: 81 }, //TODO: wiki
    { item: "minecraft:cocoa_beans", value: 4 }, //TODO: wiki
    { item: "minecraft:carrot", value: 23 }, //TODO: wiki
    { item: "minecraft:golden_carrot", value: 150 }, //TODO: wiki
    { item: "minecraft:potato", value: 24 }, //TODO: wiki
    { item: "minecraft:poisonous_potato", value: 4 }, //TODO: wiki
    { item: "minecraft:beetroot", value: 24 }, //TODO: wiki
    { item: "minecraft:apple", value: 8 }, //TODO: wiki
    { item: "minecraft:red_mushroom", value: 8 }, //TODO: wiki
    { item: "minecraft:brown_mushroom", value: 8 }, //TODO: wiki
    { item: "minecraft:crimson_fungus", value: 16 }, //TODO: wiki
    { item: "minecraft:warped_fungus", value: 16 }, //TODO: wiki
    { item: "minecraft:bamboo_block", value: 9 }, //TODO: wiki
    { item: "minecraft:cactus", value: 12 }, //TODO: wiki
    { item: "minecraft:wheat", value: 46 }, //TODO: wiki
    { item: "minecraft:hay_block", value: 414 }, //TODO: wiki
    { item: "minecraft:sugar_cane", value: 12 }, //TODO: wiki
    { item: "minecraft:pumpkin", value: 80 }, //TODO: wiki
    { item: "minecraft:chorus_fruit", value: 16 }, //TODO: wiki
    { item: "minecraft:torchflower", value: 128 }, //TODO: wiki
    { item: "minecraft:pitcher_plant", value: 64 }, //TODO: wiki
];

//animal products
global.animalProducts = [
    //eggs
    { item: "minecraft:egg", value: 4 }, //TODO: wiki
    { item: "minecraft:brown_egg", value: 4 }, //TODO: wiki
    { item: "minecraft:blue_egg", value: 4 }, //TODO: wiki
    { item: "minecraft:turtle_egg", value: 64 }, //TODO: wiki
    { item: "minecraft:sniffer_egg", value: 192 }, //TODO: wiki
    //milk
    //basic raw
    { item: "minecraft:beef", value: 16 }, //TODO: wiki
    { item: "minecraft:porkchop", value: 32 }, //TODO: wiki
    { item: "minecraft:mutton", value: 16 }, //TODO: wiki
    { item: "minecraft:chicken", value: 8 }, //TODO: wiki
    //advanced raw
    { item: "minecraft:rabbit", value: 64 }, //TODO: wiki
    //advanced cooked
    //bee
    { item: "minecraft:honey_bottle", value: 8 }, //TODO: wiki
    { item: "minecraft:honey_block", value: 24 }, //TODO: wiki
    { item: "minecraft:honeycomb", value: 4 }, //TODO: wiki
    { item: "minecraft:honeycomb_block", value: 16 }, //TODO: wiki
    //misc
    { item: "minecraft:leather", value: 8 }, //TODO: wiki
    { item: "minecraft:rabbit_hide", value: 12 }, //TODO: wiki
    { item: "minecraft:rabbit_foot", value: 1024 }, //TODO: wiki
    { item: "minecraft:feather", value: 16 }, //TODO: wiki
];

//fruits
global.fruits = [
    //TODO: add fruits
];

/**
 * Preserves
 * Formula: Ingredient * 20
 */
global.preserves = [
    //TODO: add preserves
];

//dehydrated
global.dehydrated = [
    //TODO: add dehydrated
];
global.fruits.forEach((fruit) => {
    let itemId = fruit.item.path;
    if(itemId.includes("item")) itemId = itemId.substring(0, itemId - 4);
    global.preserves.push({
        item: fruit.altPreserveOutput ? fruit.altPreserveOutput : `starlit:${itemId}_preserves`,
        value: fruit.value * 15 + 64,
    });
    global.dehydrated.push({
        item: `starlit:dried_${itemId}`,
        value: fruit.value * 14 + 64,
    });
});

//mushrooms
global.mushrooms = [
    //TODO: add mushrooms
];
global.mushrooms.forEach((shroom) => {
    let itemId = shroom.item.path;
    global.dehydrated.push({
        item: `starlit:dried_${itemId}`,
        value: shroom.value * 12 + 32,
    });
});

/**
 * Aging Cask
 * Formula: input * 4
 *
 * Ancient Cask
 * Formula: aging cask input * 16
 *
 * Mayo: (egg with floor of 8)  * 2
 */
global.artisanGoods = [
    //TODO: add artisan goods
];

// Formula: milk x 2
//cheese
const cheeses = [
    //TODO: add cheeses
];
cheeses.forEach((recipe) => {
    global.artisanGoods.push({
        item: recipe.item,
        value: recipe.value,
    });
});

// Ice value = 8
// Snow value = 2
//cocktails
global.cocktails = [
    //TODO: add cocktails
];

// Steamed milk = 32
//herbal brews
global.herbalBrews = [
    //TODO: add herbalbrews
];

//logs
global.logs = [
    //TODO: add logs
];

/**
 * Wine
 * Formula: (72 + sum ingredient val) * 4
 */
global.wines = [
    //TODO: add wines
];

global.wines.forEach((wine) => {
    global.artisanGoods.push({
        item: `starlit:aged_${wine.item.path}`,
        value: wine.value * 4,
    });
    global.artisanGoods.push({
        item: `starlit:double_aged_${wine.item.path}`,
        value: wine.value * 16,
    });
});

// brewery
const brewingStationRecipes = [
    //TODO: add brewing station recipes
];
global.brews = [];
brewingStationRecipes.forEach((recipe) => {
    global.brews.push({
        item: recipe.item,
        value: recipe.value * 3,
    });
});

global.brews.forEach((brew) => {
  global.artisanGoods.push({
    item: `starlit:aged_${brew.item.path}`,
    value: brew.value * 4,
  });
  global.artisanGoods.push({
    item: `starlit:double_aged_${brew.item.path}`,
    value: brew.value * 16,
  });
});
const miscAged = [
    //TODO: add misc aged items
];

miscAged.forEach((brew) => {
  global.artisanGoods.push({
    item: `starlit:aged_${brew.item.path}`,
    value: brew.value * 4,
  });
  global.artisanGoods.push({
    item: `starlit:double_aged_${brew.item.path}`,
    value: brew.value * 16,
  });
});

/*
 * Cooking
 * Egg = 4
 * Butter = 32
 * Grain = 28
 * Cheese slice = 48
 * Dough/pasta = 16
 * P. Noodle = 16
 * Vegetable tag = 20
 * Bread = 16
 * Sweet dough = 8
 * Cake dough = 16
 * Yeast = 4
 * Milk = 64
 * Fish = 64
 * Sugar = 3
 * Salt = 2
 * Berry = 8
 * Pie crust = 230
 * Wine = 88 (Adds * 2 to overall price)
 * Beer = 128 (Adds * 2 to overall price)
 * Complexity: 4+ unique ingr. OR nested cooking ingr. = * 1.5 Mult
 */
global.cooking = [];
// Raw ingredient calculation. Multiplier added before pushing to global.cooking

const craftingTableRecipes = [
    //TODO: add crafting table recipes
];
craftingTableRecipes.forEach((recipe) => {
  global.cooking.push({
    item: recipe.item,
    value: Math.floor(recipe.value * 1.4),
  });
});

// Raw ingredient calculation. Multiplier added before pushing to global.cooking
let fermentingRecipes = [
    //TODO: add fermenting recipes
];
global.picklableVegetables = [
    //TODO: add picklable vegetables
];

global.picklableVegetables.forEach((recipe) =>
  fermentingRecipes.push({
    item: `starlit:pickled_${recipe.item.path}`,
    value: recipe.value,
  })
);

fermentingRecipes.forEach((recipe) => {
  global.cooking.push({
    item: recipe.item,
    value: recipe.value * 3,
  });
});

// Raw ingredient calculation. Multiplier added before pushing to global.cooking
const furnaceRecipes = [
    //TODO: add furnace recipes
];
furnaceRecipes.forEach((recipe) => {
  global.cooking.push({
    item: recipe.item,
    value: Math.round(recipe.value * 1.5),
  });
});

// Raw ingredient calculation. Multiplier added before pushing to global.cooking
const dryingRecipes = [
    //TODO: add drying recipes
];
dryingRecipes.forEach((recipe) => {
  global.cooking.push({
    item: recipe.item,
    value: Math.round(recipe.value * 1.5),
  });
});

// Raw ingredient calculation. Multiplier added before pushing to global.cooking
// Note: Raw value not divided by output count due to effort. Cookies multiplied by 1.5
const cakingStationRecipes = [
    //TODO: add caking station recipes
];
cakingStationRecipes.forEach((recipe) => {
  global.cooking.push({
    item: recipe.item,
    value: recipe.value * 4,
  });
});

const cookingPotRecipes = [
    //TODO: add cooking pot recipes
];
cookingPotRecipes.forEach((recipe) => {
  global.cooking.push({
    item: recipe.item,
    value: Math.round(recipe.value * 2),
  });
});

// Raw ingredient calculation. Multiplier added before pushing to global.cooking
const stoveRecipes = [
    //TODO: add stove recipes
];
stoveRecipes.forEach((recipe) => {
  global.cooking.push({
    item: recipe.item,
    value: recipe.value * 3,
  });
});

// Raw ingredient calculation. Multiplier added before pushing to global.cooking
const roasterRecipes = [
    //TODO: add roaster recipes
];
roasterRecipes.forEach((recipe) => {
  global.cooking.push({
    item: recipe.item,
    value: recipe.value * 3,
  });
});

// Raw ingredient calculation. Multiplier added before pushing to global.cooking
const mixingBowlRecipes = [
    //TODO: add mixing bowl recipes
];
mixingBowlRecipes.forEach((recipe) => {
  global.cooking.push({
    item: recipe.item,
    value: recipe.value * 3,
  });
});

//fish
global.fish = [
    //TODO: add fish
];
global.smokedFish = [];
global.agedRoe = [];
global.fish.forEach((fish) => {
  const splitFish = fish.item.split(":");
  let fishId = splitFish[1];
  if (!["barrel", "roe", "meat"].some((denied) => fishId.includes(denied))) {
    if (fishId.includes("raw_")) {
      if (fishId === "raw_snowflake") fishId = "frosty_fin";
      else fishId = fishId.substring(4, fishId.length);
    }
    global.smokedFish.push({
      item: `starlit:smoked_${fishId}`,
      value: roundPrice(fish.value * 4),
    });
    global.agedRoe.push({
      item: `starlit:aged_${fishId}_roe`,
      value: roundPrice((Math.floor(fish.value / 3) + 16) * 15),
    });
  }
});

global.fish.forEach((fish) => {
  const splitFish = fish.item.split(":");
  let fishId = splitFish[1];
  if (!["barrel", "meat"].some((denied) => fish.item.includes(denied))) {
    if (fishId.includes("raw_")) {
      if (fishId === "raw_snowflake") fishId = "frosty_fin";
      else fishId = fishId.substring(4, fishId.length);
    }
    global.fish.push({
      item: `starlit:${fishId}_roe`,
      value: roundPrice(Math.floor(fish.value / 3) + 16),
    });
  }
});

//misc adventurer
global.miscAdventurer = [
    //TODO: add misc adventurer
];

//plorts
global.plorts = [
    //TODO: add plorts
];

global.slimeHearts = [];
global.plorts.forEach((plort) => {
  global.slimeHearts.push({
    type: plort.type,
    value: Math.floor(plort.value * 16),
  });
});

//essence
global.essence = [
    //TODO: add essence
];

//combs
global.combs = [
    //TODO: add combs
];

global.combblocks = [
    //TODO: add combblocks
];

//magician's goods
global.magiciangoods = [
    //TODO: add magician's goods
];

//engineers goods
global.engineersgoods = [
    //TODO: add engineers goods
];

//flowers
global.flowers = [
    //flowers
];

global.farmerProductMult = 1.0
global.artisanProductMult = 1.0
global.miningProductMult = 1.0
global.adventurerProductMult = 1.0

global.trades = new Map();

global.getConfiguredValue = (value, mult) => {
    let multedValue = value;
    switch (mult) {
        case "gem":
            multedValue = value * global.miningProductMult;
            break;
        case "wood":
            multedValue = value * global.artisanProductMult;
            break;
        case "meat":
            multedValue = value * global.adventurerProductMult;
            break;
        default:
        case "crop":
            multedValue = value * global.farmerProductMult;
            break;
    }
    return Math.round(multedValue)
}

global.ore.forEach((oreItem) => {
    const { item, value } = oreItem;
    global.trades.set(item, {
        value: global.getConfiguredValue(value, "gem"),
        multiplier: "shippingbin:gem_sell_multiplier",
    });
});
global.pristine.forEach((pristineItem) => {
  const { item, value } = pristineItem;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, "gem"),
    multiplier: "shippingbin:gem_sell_multiplier",
  });
});
global.crops.forEach((crop) => {
  const { item, value } = crop;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, "crop"),
    multiplier: "shippingbin:crop_sell_multiplier",
  });
});
global.animalProducts.forEach((meat) => {
  const { item, value } = meat;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, "crop"),
    multiplier: "shippingbin:crop_sell_multiplier",
  });
});
global.cooking.forEach((dish) => {
  const { item, value } = dish;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, "crop"),
    multiplier: "shippingbin:crop_sell_multiplier",
  });
});
global.wines.forEach((wine) => {
  const { item, value } = wine;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, "wood"),
    multiplier: "shippingbin:wood_sell_multiplier",
  });
});
global.brews.forEach((brew) => {
  const { item, value } = brew;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, "wood"),
    multiplier: "shippingbin:wood_sell_multiplier",
  });
});
global.geodeList.forEach((treasure) => {
  const { item, value } = treasure;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, item === "starlit:froggy_helm" ? "meat" :"gem"),
    multiplier:
      item === "starlit:froggy_helm"
        ? "shippingbin:meat_sell_multiplier"
        : "shippingbin:gem_sell_multiplier",
  });
});
global.frozenGeodeList.forEach((treasure) => {
  const { item, value } = treasure;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, item === "starlit:ribbit_drum" ? "meat" :"gem"),
    multiplier:
      item === "starlit:ribbit_drum"
        ? "shippingbin:meat_sell_multiplier"
        : "shippingbin:gem_sell_multiplier",
  });
});
global.magmaGeodeList.forEach((treasure) => {
  const { item, value } = treasure;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, item === "starlit:ribbit_gadget" ? "meat" :"gem"),
    multiplier:
      item === "starlit:ribbit_gadget"
        ? "shippingbin:meat_sell_multiplier"
        : "shippingbin:gem_sell_multiplier",
  });
});
global.gems.forEach((treasure) => {
  const { item, value } = treasure;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, "gem"),
    multiplier: "shippingbin:gem_sell_multiplier",
  });
});
global.miscGeologist.forEach((treasure) => {
  const { item, value } = treasure;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, "gem"),
    multiplier: "shippingbin:gem_sell_multiplier",
  });
});
global.artifacts.forEach((treasure) => {
  const { item, value } = treasure;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, "meat"),
    multiplier: "shippingbin:meat_sell_multiplier",
  });
});
global.relics.forEach((treasure) => {
  const { item, value } = treasure;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, "meat"),
    multiplier: "shippingbin:meat_sell_multiplier",
  });
});
global.preserves.forEach((jar) => {
  const { item, value } = jar;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, "wood"),
    multiplier: "shippingbin:wood_sell_multiplier",
  });
});
global.dehydrated.forEach((dehydratee) => {
  const { item, value } = dehydratee;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, "wood"),
    multiplier: "shippingbin:wood_sell_multiplier",
  });
});
global.artisanGoods.forEach((good) => {
  const { item, value } = good;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, "wood"),
    multiplier: "shippingbin:wood_sell_multiplier",
  });
});
global.fish.forEach((fish) => {
  const { item, value } = fish;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, "crop"),
    multiplier: "shippingbin:crop_sell_multiplier",
  });
});
global.smokedFish.forEach((fish) => {
  const { item, value } = fish;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, "wood"),
    multiplier: "shippingbin:wood_sell_multiplier",
  });
});
global.agedRoe.forEach((fish) => {
  const { item, value } = fish;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, "wood"),
    multiplier: "shippingbin:wood_sell_multiplier",
  });
});
global.cocktails.forEach((cocktail) => {
  const { item, value } = cocktail;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, "crop"),
    multiplier: "shippingbin:crop_sell_multiplier",
  });
});
global.herbalBrews.forEach((brew) => {
  const { item, value } = brew;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, "crop"),
    multiplier: "shippingbin:crop_sell_multiplier",
  });
});
global.logs.forEach((log) => {
  const { item, value } = log;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, "crop"),
    multiplier: "shippingbin:crop_sell_multiplier",
  });
});
global.miscAdventurer.forEach((miscItem) => {
  const { item, value } = miscItem;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, "meat"),
    multiplier: "shippingbin:meat_sell_multiplier",
  });
});
global.plorts.forEach((plort) => {
  const { type, value } = plort;
  global.trades.set(`splendid_slimes:plort/${type}`, {
    value: global.getConfiguredValue(value, "crop"),
    multiplier: "shippingbin:crop_sell_multiplier",
  });
});
global.slimeHearts.forEach((heart) => {
  const { type, value } = heart;
  global.trades.set(`splendid_slimes:slime_heart/${type}`, {
    value: global.getConfiguredValue(value, "crop"),
    multiplier: "shippingbin:crop_sell_multiplier",
  });
});
global.essence.forEach((essence) => {
  const { item, value } = essence;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, "crop"),
    multiplier: "shippingbin:crop_sell_multiplier",
  });
});
global.combs.forEach((comb) => {
  const { item, value } = comb;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, "crop"),
    multiplier: "shippingbin:crop_sell_multiplier",
  });
});
global.combblocks.forEach((combblock) => {
  const { item, value } = combblock;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, "crop"),
    multiplier: "shippingbin:crop_sell_multiplier",
  });
});
global.magiciangoods.forEach((magiciangood) => {
  const { item, value } = magiciangood;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, "crop"),
    multiplier: "shippingbin:wood_sell_multiplier",
  });
});
global.engineersgoods.forEach((engineersgood) => {
  const { item, value } = engineersgood;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, "crop"),
    multiplier: "shippingbin:wood_sell_multiplier",
  });
});
global.flowers.forEach((flowers) => {
  const { item, value } = flowers;
  global.trades.set(item, {
    value: global.getConfiguredValue(value, "crop"),
    multiplier: "shippingbin:crop_sell_multiplier",
  });
});