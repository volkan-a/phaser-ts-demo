import Phaser from "phaser";

export default {
  type: Phaser.AUTO,
  parent: "game",
  backgroundColor: "#000000",
  scale: {
    width: 1000,
    height: 800,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    // mode: Phaser.Scale.NO_ZOOM,
    // autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};
