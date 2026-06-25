console.info("[SVO] removeRecipes.js loaded");

ServerEvents.recipes((e) => {
    global.removedItems.forEach((item) => {
        e.remove({ output: item });
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