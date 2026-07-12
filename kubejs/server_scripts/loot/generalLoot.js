LootJS.modifiers((e) => {
    e.addBlockLootModifier("shippingbin:basic_shipping_bin").removeLoot(
        "shippingbin:basic_shipping_bin"
    );

    e.addBlockLootModifier("shippingbin:smart_shipping_bin").removeLoot(
        "shippingbin:smart_shipping_bin"
    );
});