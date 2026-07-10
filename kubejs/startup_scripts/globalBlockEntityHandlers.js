function rnd5() {
  return Math.random() < 0.05;
}

global.setBlockEntityData = (block, nbt) => {
  block.setEntityData(nbt);
  block.getEntity().setChanged();
};
