console.info("[SVO] registerItems.js loaded");

StartupEvents.registry("item", (e) => {
  

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