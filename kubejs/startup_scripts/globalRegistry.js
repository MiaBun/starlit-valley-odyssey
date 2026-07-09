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
    {
      item: "minecraft:sweet_berries",
      altPreserveOutput: "vintagedelight:sweet_berry_mason_jar",
      value: 4,
    },
    {
      item: "minecraft:apple",
      altPreserveOutput: "vintagedelight:apple_sauce_mason_jar",
      value: 8,
    },
    {
      item: "minecraft:melon_slice",
      altPreserveOutput: "society:melon_preserves",
      value: 9,
    },
    { item: "minecraft:chorus_fruit", value: 16 },
    {
      item: "minecraft:glow_berries",
      altPreserveOutput: "vintagedelight:glow_berry_mason_jar",
      value: 24,
    },
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
    { item: "minecraft:brown_mushroom", value: 8 },
    { item: "minecraft:red_mushroom", value: 8 },
    { item: "minecraft:crimson_fungus", value: 16 },
    { item: "minecraft:warped_fungus", value: 16 },
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
    { item: "minecraft:oak_log", value: 2 }, //TODO: wiki
    { item: "minecraft:stripped_oak_log", value: 2 }, //TODO: wiki
    { item: "minecraft:spruce_log", value: 2 }, //TODO: wiki
    { item: "minecraft:stripped_spruce_log", value: 2 }, //TODO: wiki
    { item: "minecraft:birch_log", value: 2 }, //TODO: wiki
    { item: "minecraft:stripped_birch_log", value: 2 }, //TODO: wiki
    { item: "minecraft:jungle_log", value: 2 }, //TODO: wiki
    { item: "minecraft:stripped_jungle_log", value: 2 }, //TODO: wiki
    { item: "minecraft:dark_oak_log", value: 2 }, //TODO: wiki
    { item: "minecraft:stripped_dark_oak_log", value: 2 }, //TODO: wiki
    { item: "minecraft:acacia_log", value: 3 }, //TODO: wiki
    { item: "minecraft:stripped_acacia_log", value: 3 }, //TODO: wiki
    { item: "minecraft:mangrove_log", value: 4 }, //TODO: wiki
    { item: "minecraft:stripped_mangrove_log", value: 4 }, //TODO: wiki
    { item: "minecraft:cherry_log", value: 4 }, //TODO: wiki
    { item: "minecraft:stripped_cherry_log", value: 4 }, //TODO: wiki
    { item: "minecraft:warped_stem", value: 16 }, //TODO: wiki
    { item: "minecraft:stripped_warped_stem", value: 16 }, //TODO: wiki
    { item: "minecraft:crimson_stem", value: 16 }, //TODO: wiki
    { item: "minecraft:stripped_crimson_stem", value: 16 }, //TODO: wiki
    { item: "minecraft:pale_oak_log", value: 8 }, //TODO: wiki
    { item: "minecraft:stripped_pale_oak_log", value: 8 }, //TODO: wiki
    { item: "regions_unexplored:alpha_log", value: 256}, //TODO: wiki
    { item: "regions_unexplored:ashen_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:baobab_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:stripped_baobab_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:blackwood_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:stripped_blackwood_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:blue_bioshroom_stem", value: 4}, //TODO: wiki
    { item: "regions_unexplored:stripped_blue_bioshroom_stem", value: 4}, //TODO: wiki
    { item: "regions_unexplored:brimwood_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:stripped_brimwood_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:brimwood_log_magma", value: 4}, //TODO: wiki
    { item: "regions_unexplored:cobalt_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:stripped_cobalt_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:cypress_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:stripped_cypress_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:dead_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:stripped_dead_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:eucalyptus_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:stripped_eucalyptus_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:green_bioshroom_stem", value: 4}, //TODO: wiki
    { item: "regions_unexplored:stripped_green_bioshroom_stem", value: 4}, //TODO: wiki
    { item: "regions_unexplored:joshua_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:stripped_joshua_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:kapok_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:stripped_kapok_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:larch_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:stripped_larch_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:magnolia_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:stripped_magnolia_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:maple_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:stripped_maple_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:mauve_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:stripped_mauve_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:palm_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:stripped_palm_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:pine_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:stripped_pine_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:pink_bioshroom_stem", value: 4}, //TODO: wiki
    { item: "regions_unexplored:stripped_pink_bioshroom_stem", value: 4}, //TODO: wiki
    { item: "regions_unexplored:redwood_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:stripped_redwood_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:socotra_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:stripped_socotra_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:silver_birch_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:willow_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:stripped_willow_log", value: 4}, //TODO: wiki
    { item: "regions_unexplored:yellow_bioshroom_stem", value: 4}, //TODO: wiki
    { item: "regions_unexplored:stripped_yellow_bioshroom_stem", value: 4}, //TODO: wiki

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
    { item: "minecraft:cookie", value: 12 }, //TODO: wiki
    { item: "minecraft:bread", value: 16 }, //TODO: wiki
    { item: "minecraft:pumpkin_pie", value: 87 }, //TODO: wiki
    { item: "minecraft:mushroom_stew", value: 16 }, //TODO: wiki
    { item: "minecraft:cake", value: 318 }, //TODO: wiki
    { item: "minecraft:rabbit_stew", value: 239 }, //TODO: wiki
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
    { item: "minecraft:potato", value: 24 },
    { item: "minecraft:carrot", value: 23 },
    { item: "minecraft:golden_carrot", value: 150 },
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
    { item: "minecraft:cooked_beef", value: 16 }, //TODO: wiki
    { item: "minecraft:baked_potato", value: 24 }, //TODO: wiki
    { item: "minecraft:cooked_porkchop", value: 32 }, //TODO: wiki
    { item: "minecraft:cooked_rabbit", value: 64 }, //TODO: wiki
    { item: "minecraft:cooked_mutton", value: 16 }, //TODO: wiki
    { item: "minecraft:cooked_chicken", value: 8 }, //TODO: wiki
    { item: "minecraft:cooked_salmon", value: 24 }, //TODO: wiki
    { item: "minecraft:cooked_cod", value: 16 }, //TODO: wiki
    { item: "minecraft:popped_chorus_fruit", value: 16 }, //TODO: wiki
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
    { item: "minecraft:beetroot_soup", value: 72 }, //TODO: wiki
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
    { item: "minecraft:pufferfish", value: 16 }, //TODO: wiki
    { item: "minecraft:salmon", value: 24 }, //TODO: wiki
    { item: "minecraft:cod", value: 16 }, //TODO: wiki
    { item: "minecraft:tropical_fish", value: 72 }, //TODO: wiki
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
    { item: "minecraft:experience_bottle", value: 8 }, //TODO: wiki
    { item: "minecraft:nautilus_shell", value: 64 }, //TODO: wiki
    { item: "minecraft:echo_shard", value: 192 }, //TODO: wiki
    { item: "minecraft:heart_of_the_sea", value: 256 }, //TODO: wiki
    { item: "minecraft:nether_star", value: 2048 }, //TODO: wiki
    { item: "minecraft:dragon_egg", value: 3072 }, //TODO: wiki
    { item: "minecraft:angler_pottery_sherd", value: 192 }, //TODO: wiki
    { item: "minecraft:snort_pottery_sherd", value: 192 }, //TODO: wiki
    { item: "minecraft:shelter_pottery_sherd", value: 192 }, //TODO: wiki
    { item: "minecraft:archer_pottery_sherd", value: 80 }, //TODO: wiki
    { item: "minecraft:skull_pottery_sherd", value: 80 }, //TODO: wiki
    { item: "minecraft:miner_pottery_sherd", value: 80 }, //TODO: wiki
    { item: "minecraft:prize_pottery_sherd", value: 80 }, //TODO: wiki
    { item: "minecraft:brewer_pottery_sherd", value: 128 }, //TODO: wiki
    { item: "minecraft:arms_up_pottery_sherd", value: 128 }, //TODO: wiki
    { item: "minecraft:explorer_pottery_sherd", value: 192 }, //TODO: wiki
    { item: "minecraft:blade_pottery_sherd", value: 192 }, //TODO: wiki
    { item: "minecraft:mourner_pottery_sherd", value: 192 }, //TODO: wiki
    { item: "minecraft:plenty_pottery_sherd", value: 192 }, //TODO: wiki
    { item: "minecraft:sheaf_pottery_sherd", value: 80 }, //TODO: wiki
    { item: "minecraft:burn_pottery_sherd", value: 80 }, //TODO: wiki
    { item: "minecraft:danger_pottery_sherd", value: 80 }, //TODO: wiki
    { item: "minecraft:friend_pottery_sherd", value: 80 }, //TODO: wiki
    { item: "minecraft:heart_pottery_sherd", value: 80 }, //TODO: wiki
    { item: "minecraft:heartbreak_pottery_sherd", value: 80 }, //TODO: wiki
    { item: "minecraft:howl_pottery_sherd", value: 80 }, //TODO: wiki
    { item: "minecraft:totem_of_undying", value: 448 }, //TODO: wiki
    { item: "minecraft:dragon_head", value: 4608 }, //TODO: wiki
    { item: "minecraft:enchanted_golden_apple", value: 4096 }, //TODO: wiki
    { item: "minecraft:goat_horn", value: 512 }, //TODO: wiki
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
    { item: "minecraft:dandelion", value: 3 }, //TODO: wiki
    { item: "minecraft:poppy", value: 3 }, //TODO: wiki
    { item: "minecraft:blue_orchid", value: 3 }, //TODO: wiki
    { item: "minecraft:allium", value: 3 }, //TODO: wiki
    { item: "minecraft:azure_bluet", value: 3 }, //TODO: wiki
    { item: "minecraft:red_tulip", value: 3 }, //TODO: wiki
    { item: "minecraft:orange_tulip", value: 3 }, //TODO: wiki
    { item: "minecraft:white_tulip", value: 3 }, //TODO: wiki
    { item: "minecraft:pink_tulip", value: 3 }, //TODO: wiki
    { item: "minecraft:oxeye_daisy", value: 3 }, //TODO: wiki
    { item: "minecraft:cornflower", value: 3 }, //TODO: wiki
    { item: "minecraft:lily_of_the_valley", value: 3 }, //TODO: wiki
    { item: "minecraft:wither_rose", value: 128 }, //TODO: wiki
    { item: "minecraft:open_eyeblossom", value: 3 }, //TODO: wiki
    { item: "minecraft:closed_eyeblossom", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:alpha_dandelion", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:alpha_rose", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:aster", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:bleeding_heart", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:blue_lupine", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:daisy", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:dorcel", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:felicia_daisy", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:fireweed", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:glistering_bloom", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:hibiscus", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:mallow", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:hyssop", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:pink_lupine", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:poppy_bush", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:salmon_poppy_bush", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:purple_lupine", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:red_lupine", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:tsubaki", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:waratah", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:white_trillium", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:wilting_trillium", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:yellow_lupine", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:red_snowbelle", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:orange_snowbelle", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:yellow_snowbelle", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:lime_snowbelle", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:green_snowbelle", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:cyan_snowbelle", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:light_blue_snowbelle", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:blue_snowbelle", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:purple_snowbelle", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:magenta_snowbelle", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:pink_snowbelle", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:brown_snowbelle", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:white_snowbelle", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:light_gray_snowbelle", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:gray_snowbelle", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:black_snowbelle", value: 3 }, //TODO: wiki
    { item: "minecraft:sunflower", value: 3 }, //TODO: wiki
    { item: "minecraft:lilac", value: 3 }, //TODO: wiki
    { item: "minecraft:peony", value: 3 }, //TODO: wiki
    { item: "minecraft:rose_bush", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:tassel", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:day_lily", value: 3 }, //TODO: wiki
    { item: "minecraft:mangrove_propagule", value: 3 }, //TODO: wiki
    { item: "minecraft:pink_petals", value: 3 }, //TODO: wiki
    { item: "minecraft:wildflowers", value: 3 }, //TODO: wiki
    { item: "minecraft:cactus_flower", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:hyacinth_flowers", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:orange_coneflower", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:purple_coneflower", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:blue_magnolia_flowers", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:pink_magnolia_flowers", value: 3 }, //TODO: wiki
    { item: "regions_unexplored:white_magnolia_flowers", value: 3 }, //TODO: wiki
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