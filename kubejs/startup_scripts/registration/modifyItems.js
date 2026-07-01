ItemEvents.modification((e) => {
    const goldVanillaTools = [
        "minecraft:golden_hoe",
        "minecraft:golden_axe",
        "minecraft:golden_pickaxe",
        "minecraft:golden_shovel"
    ];

    goldVanillaTools.forEach((tool) => {
        e.modify(tool, (item) => {
            item.digSpeed = 7;
            item.tier = (tier) => {
                tier.level = 3;
            };
        });
    });

    e.modify("minecraft:golden_sword", (item) => {
        item.setAttackDamage(5.5);
    });

    e.modify("minecraft:golden_axe", (item) => {
        item.setAttackDamage(8);
    });

    const goldTools = [
        "minecraft:golden_sword",
        "minecraft:golden_hoe",
        "minecraft:golden_axe",
        "minecraft:golden_pickaxe",
        "minecraft:golden_shovel"
    ];
    goldTools.forEach((tool) => {
        e.modify(tool, (item) => {
          item.maxDamage *= tool.namespace === "justhammers" ? 2 : 16;
        });
    });

    e.modify("minecraft:golden_helmet", (item) => {
        item.maxDamage *= 3;
        item.setArmorProtection(2.5);
    });

    e.modify("minecraft:golden_chestplate", (item) => {
      item.maxDamage *= 3;
      item.setArmorProtection(7);
    });

    e.modify("minecraft:golden_leggings", (item) => {
      item.maxDamage *= 3;
      item.setArmorProtection(5.5);
    });

    e.modify("minecraft:golden_boots", (item) => {
      item.maxDamage *= 3;
      item.setArmorProtection(2.5);
    });

    const netheriteTools = [
        "minecraft:netherite_axe",
        "minecraft:netherite_hoe",
        "minecraft:netherite_pickaxe",
        "minecraft:netherite_shovel"
    ];
    netheriteTools.forEach((armor) => {
        e.modify(armor, (item) => {
            item.setDigSpeed(item.digSpeed + 1);
            item.setAttackDamage(item.attackDamage + 2);
        });
    });

    e.modify("minecraft:netherite_sword", (item) => {
        item.setAttackDamage(10);
    });

    e.modify("minecraft:netherite_helmet", (item) => {
        item.maxDamage *= 1.5;
        item.setArmorProtection(4);
    });
    e.modify("minecraft:netherite_chestplate", (item) => {
        item.maxDamage *= 1.5;
        item.setArmorProtection(9);
    });
    e.modify("minecraft:netherite_leggings", (item) => {
        item.maxDamage *= 1.5;
        item.setArmorProtection(7);
    });
    e.modify("minecraft:netherite_boots", (item) => {
        item.maxDamage *= 1.5;
        item.setArmorProtection(3);
    });
})