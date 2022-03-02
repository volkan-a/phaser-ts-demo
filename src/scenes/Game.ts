import Phaser from "phaser";

export default class Demo extends Phaser.Scene {
  scoreText?: Phaser.GameObjects.Text;
  score = 0;
  constructor() {
    super("GameScene");
  }

  preload() {
    this.load.image("bg", "assets/Grayskull.jpg");
  }

  create() {
    this.add.image(500, 400, "bg");
    this.scoreText = this.add.text(32, 32, "0", {
      fontSize: "32px",
      backgroundColor: "red",
      color: "black",
      padding: { x: 10, y: 10 },
      fontFamily: "Segoe UI",
    });

    var fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    fKey.on("down", () => {
      this.score += parseInt((Math.random() * 100).toString());
      this.scoreText?.setText(this.score.toString());
    });
  }

  update(time: number, delta: number): void {}
}
