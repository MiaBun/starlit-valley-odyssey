function rnd5() {
  return Math.random() < 0.05;
}

global.setBlockEntityData = (block, nbt) => {
  block.setEntityData(nbt);
  block.getEntity().setChanged();
};

// Text display utils
global.clearOldTextDisplay = (block, level, id) => {
  const { x, y, z } = block;
  level.getEntitiesWithin(AABB.ofBlock(block).inflate(3))
    .filter((entityType) => entityType.type === "minecraft:text_display")
    .forEach((entity) => {
      entity.getTags().forEach((tag) => {
        if (tag === `${id}-${x}-${y}-${z}`) {
          entity.kill();
        }
      });
    });
};

global.rotationFromFacing = (facing) => {
  switch (facing) {
    case "north":
      return 180;
    case "east":
      return 270;
    case "south":
      return 360;
    default:
    case "west":
      return 90;
  }
};


global.spawnTextDisplay = (block, y, id, text) => {
  let entity;
  const { x, z } = block;
  entity = block.createEntity("minecraft:text_display");
  let newNbt = entity.getNbt();
  newNbt.text = `${text.toJson()}`;
  newNbt.background = 0;
  newNbt.Rotation = [
    NBT.f(global.rotationFromFacing(block.properties.get("facing"))),
    NBT.f(0),
  ];
  entity.setNbt(newNbt);
  entity.setX(x + 0.5);
  entity.setY(y);
  entity.setZ(z + 0.5);
  entity.addTag(`${id}-${x}-${block.y}-${z}`);
  entity.spawn();
};