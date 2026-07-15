console.info("[SVO] registerItems.js loaded");

StartupEvents.registry("item", (e) => {
    const tiers = [
        "Stone, Leather, Chainmail, and Cotton",
        "Iron",
        "Gold",
        "Diamond"
    ];
    tiers.forEach((tier, index) => {
        if (index > 0) {
            let templateId = `starlit:${tier.toLowerCase()}_upgrade_smithing_template`;
            e.create(templateId)
              .texture(`starlit:item/smithing/${tier.toLowerCase()}`)
              .displayName("Smithing Template")
              .tooltip(
              Text.translatable(
                `item.starlit.${tier.toLowerCase()}_upgrade_smithing_template.upgrade`
              ).gray()
            )
            .tooltip(Text.of(" "))
            .tooltip(
              Text.translatable(
                "item.minecraft.smithing_template.applies_to"
              ).gray()
            )
            .tooltip(
              Text.of(" ").append(
                Text.translatable(
                  `item.starlit.${tier.toLowerCase()}_upgrade_smithing_template.applies_to`
                ).blue()
              )
            )
            .tooltip(
              Text.translatable(
                "item.minecraft.smithing_template.ingredients"
              ).gray()
            )
            .tooltip(
              Text.of(" ").append(
                Text.translatable(
                  `item.starlit.${tier.toLowerCase()}_upgrade_smithing_template.ingredients`
                ).blue()
              )
            );
        }
    });

    e.create("numismatics:neptunium_coin")
      .texture("starlit:item/neptunium_coin")
      .tag("numismatics:coins");
    e.create("numismatics:ancient_coin")
      .texture("starlit:item/ancient_coin")
      .tag("numismatics:coins");
    e.create("numismatics:prismatic_coin")
      .texture("starlit:item/prismatic_coin")
      .tag("numismatics:coins");
});