console.info("[SVO] addToolRecipes.js loaded");

ServerEvents.recipes((e) => {
    const toolTypes = ["pickaxe", "shovel", "hoe", "sword", "axe"];
    const armorTypes = ["helmet", "chestplate", "leggings", "boots"];

    const upgradeTool = (type, modId, armor) => {
        if (!armor) {
            if (type !== "watering_can") {
                e.smithing(
                    `${modId}:stone_${type}`,
                    "numismatics:cog",
                    `${modId}:wooden_${type}`,
                    "#minecraft:stone_tool_materials"
                );  
                e.smithing(
                    `${modId}:iron_${type}`,
                    "starlit:iron_upgrade_smithing_template",
                    `${modId}:stone_${type}`,
                    "minecraft:iron_ingot"
                );
            }
        } else {
            e.smithing(
                `${modId}:chainmail_${type}`,
                "numismatics:cog",
                `${modId}:leather_${type}`,
                "minecraft:chain"
            );
            e.smithing(
                `${modId}:iron_${type}`,
                "starlit:iron_upgrade_smithing_template",
                `${modId}:chainmail_${type}`,
                "minecraft:iron_ingot"
            );
        }
        e.smithing(
          `${modId}:gold${modId === "minecraft" ? "en" : ""}_${type}`,
          `starlit:gold_upgrade_smithing_template`,
          `${modId}:iron_${type}`,
          "minecraft:gold_ingot"
        );

        e.smithing(
          `${modId}:diamond_${type}`,
          `starlit:diamond_upgrade_smithing_template`,
          `${modId}:gold${modId === "minecraft" ? "en" : ""}_${type}`,
          "minecraft:diamond"
        );
        if (modId !== "aquaculture") {
          e.smithing(
            `${modId}:netherite_${type}`,
            "minecraft:netherite_upgrade_smithing_template",
            `${modId}:diamond_${type}`,
            "minecraft:netherite_ingot"
          );
        }
    }

    toolTypes.forEach((type) => {
        upgradeTool(type, "minecraft");
    });

    armorTypes.forEach((type, index) => {
        upgradeTool(type, "minecraft", true);
    });
});