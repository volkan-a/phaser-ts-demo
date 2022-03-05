import Phaser from "phaser";

export default class Demo extends Phaser.Scene {
  scoreText?: Phaser.GameObjects.Text;
  totalScore = 0;
  circleScore = 0;
  timedEvent?: Phaser.Time.TimerEvent;
  graphics?: Phaser.GameObjects.Graphics;
  constructor() {
    super("GameScene");
  }

  preload() {}

  updateScore() {
    for (let i = 0; i < 250; ++i) {
      this.totalScore += 1;
      var x = Phaser.Math.Between(150, 350);
      var y = Phaser.Math.Between(150, 350);
      if (Math.sqrt(Math.pow(x - 250, 2) + Math.pow(y - 250, 2)) <= 100) {
        this.graphics?.fillStyle(0x0000ff, 1);
        this.circleScore += 1;
      } else {
        this.graphics?.fillStyle(0xffffff, 1);
      }
      var point = new Phaser.Geom.Point(x, y);
      this.graphics?.fillPointShape(point);
    }
    this.scoreText?.setText(
      ((4 * this.circleScore) / this.totalScore).toString()
    );
  }

  create() {
    var square = new Phaser.Geom.Rectangle(150, 150, 200, 200);
    var circle = new Phaser.Geom.Circle(250, 250, 100);
    this.graphics = this.add.graphics({ fillStyle: { color: 0xff0000 } });
    this.graphics.fillRectShape(square);
    this.graphics.fillStyle(0x00ff00, 1);
    this.graphics.fillCircleShape(circle);
    this.scoreText = this.add.text(32, 32, "0", {
      font: "24px Courier",
      color: "#00ff00",
    });
  }

  update(time: number, delta: number): void {
    this.updateScore();
  }
}
