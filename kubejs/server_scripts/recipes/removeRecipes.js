console.info("[SVO] removeRecipes.js loaded");

ServerEvents.recipes((e) => {

    e.remove({mod: "gtceu"});

    const removeById = [
        "minecraft:stone_sword",
        "minecraft:iron_sword",
        "minecraft:golden_sword",
        "minecraft:diamond_sword",
        "minecraft:iron_hoe",
        "minecraft:iron_axe",
        "minecraft:iron_pickaxe",
        "minecraft:iron_shovel",
        "minecraft:golden_hoe",
        "minecraft:golden_axe",
        "minecraft:golden_shovel",
        "minecraft:golden_pickaxe",
        "minecraft:stone_hoe",
        "minecraft:stone_axe",
        "minecraft:stone_pickaxe",
        "minecraft:stone_shovel",
        "minecraft:diamond_hoe",
        "minecraft:diamond_axe",
        "minecraft:diamond_pickaxe",
        "minecraft:diamond_shovel",
        "minecraft:netherite_hoe_smithing",
        "minecraft:netherite_axe_smithing",
        "minecraft:netherite_pickaxe_smithing",
        "minecraft:netherite_shovel_smithing",
        "minecraft:netherite_sword_smithing",
        "minecraft:diamond_boots",
        "minecraft:iron_boots",
        "minecraft:golden_boots",
        "minecraft:chainmail_boots",
        "minecraft:netherite_boots_smithing",
        "minecraft:netherite_helmet_smithing",
        "minecraft:chainmail_helmet",
        "minecraft:chainmail_chestplate",
        "minecraft:iron_chestplate",
        "minecraft:golden_chestplate",
        "minecraft:diamond_chestplate",
        "minecraft:netherite_chestplate_smithing",
        "minecraft:diamond_leggings",
        "minecraft:netherite_leggings_smithing",
        "minecraft:diamond_helmet",
        "minecraft:iron_helmet",
        "minecraft:golden_leggings",
        "minecraft:chainmail_leggings",
        "minecraft:iron_leggings",
        "minecraft:golden_helmet",
        "minecraft:netherite_brush_smithing",
    ];

    global.removedItems.forEach((item) => {
        e.remove({ output: item });
    });

    removeById.forEach((item) => {
        e.remove({ id: item});
    });

    e.remove({ type: "create:automatic_brewing"});
    e.remove({ type: "create:automatic_packing"});
    e.remove({ type: "create:automatic_shaped"});
    e.remove({ type: "create:automatic_shapeless"});
    e.remove({ type: "create:block_cutting"});
    e.remove({ type: "create:crushing"});
    e.remove({ type: "create:deploying"});
    e.remove({ type: "create:draining"});
    e.remove({ type: "create:fan_blasting"});
    e.remove({ type: "create:fan_haunting"});
    e.remove({ type: "create:fan_smoking"});
    e.remove({ type: "create:fan_washing"});
    e.remove({ type: "create:item_application"});
    e.remove({ type: "create:mechanical_crafting"});
    e.remove({ type: "create:milling"});
    e.remove({ type: "create:mixing"});
    e.remove({ type: "create:mystery_conversion"});
    e.remove({ type: "create:packing"});
    e.remove({ type: "create:pressing"});
    e.remove({ type: "create:sandpaper_polishing"});
    e.remove({ type: "create:sawing"});
    e.remove({ type: "create:sequenced_assembly"});
    e.remove({ type: "create:spout_filling"});
});