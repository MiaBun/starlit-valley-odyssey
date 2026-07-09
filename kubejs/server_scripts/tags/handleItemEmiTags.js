const trapdoors = [
    "trials:copper_trapdoor",
    "trials:copper_trapdoor_exposed",
    "trials:copper_trapdoor_weathered",
    "trials:copper_trapdoor_oxidized",
    "trials:waxed_copper_trapdoor",
    "trials:waxed_copper_trapdoor_exposed",
    "trials:waxed_copper_trapdoor_weathered",
    "trials:waxed_copper_trapdoor_oxidized"
]

const doors = [
    "trials:copper_door",
    "trials:copper_door_exposed",
    "trials:copper_door_weathered",
    "trials:copper_door_oxidized",
    "trials:waxed_copper_door",
    "trials:waxed_copper_door_exposed",
    "trials:waxed_copper_door_weathered",
    "trials:waxed_copper_door_oxidized"
]

const grate = [
    "trials:copper_grate",
    "trials:copper_grate_exposed",
    "trials:copper_grate_weathered",
    "trials:copper_grate_oxidized",
    "trials:waxed_copper_grate",
    "trials:waxed_copper_grate_exposed",
    "trials:waxed_copper_grate_weathered",
    "trials:waxed_copper_grate_oxidized"
]

const chiseled = [
    "trials:chiseled_copper",
    "trials:chiseled_copper_exposed",
    "trials:chiseled_copper_weathered",
    "trials:chiseled_copper_oxidized",
    "trials:waxed_chiseled_copper",
    "trials:waxed_chiseled_copper_exposed",
    "trials:waxed_chiseled_copper_weathered",
    "trials:waxed_chiseled_copper_oxidized"
]

const bulb = [
    "trials:copper_bulb",
    "trials:copper_bulb_exposed",
    "trials:copper_bulb_weathered",
    "trials:copper_bulb_oxidized",
    "trials:waxed_copper_bulb",
    "trials:waxed_copper_bulb_exposed",
    "trials:waxed_copper_bulb_weathered",
    "trials:waxed_copper_bulb_oxidized"
]

ServerEvents.tags("item", (e) => {
    trapdoors.forEach((trapdoor) => {
        e.add("minecraft:trapdoors", trapdoor);
    });

    doors.forEach((door) => {
        e.add("minecraft:doors", door);
    });

    grate.forEach((grate) => {
        e.add("svo:grates", grate);
    });

    chiseled.forEach((chiseled) => {
        e.add("svo:chiseled", chiseled);
    });

    bulb.forEach((bulb) => {
        e.add("svo:bulb", bulb);
    });

    global.ore.forEach((ore) => {
        e.add("svo:sellable_ore", ore.item.path);
    });

    global.miscGeologist.forEach((miscGeologist) => {
        e.add("svo:sellable_misc_geologist", miscGeologist.item.path);
    });

    global.crops.forEach((crops) => {
        e.add("svo:sellable_crops", crops.item.path);
    });

    global.animalProducts.forEach((animalProducts) => {
        e.add("svo:sellable_animal_products", animalProducts.item.path);
    });

    global.logs.forEach((log) => {
        e.add("svo:sellable_logs", log.item.path);
    });

    global.cooking.forEach((cooking) => {
        e.add("svo:sellable_cooking", cooking.item.path);
    });
    
    global.fish.forEach((fish) => {
        e.add("svo:sellable_fish", fish.item.path);
    });

    global.miscAdventurer.forEach((miscAdventurer) => {
        e.add("svo:sellable_misc_adventurer", miscAdventurer.item.path);
    });



})