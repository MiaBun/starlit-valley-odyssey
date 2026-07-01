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

global.pristine = [];

global.ore = [
    { item: "minecraft:raw_copper", value: 4}
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
        multiplier: "starlit:gem_sell_multiplier",
    });
});