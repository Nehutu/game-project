var config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 1000 },
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var player;

var game = new Phaser.Game(config);

function preload() {
  this.load.image("wall", "assets/backwall.png");
  this.load.image("floor", "assets/floor.png");
  this.load.image("star", "assets/star.png");
  this.load.image("ground", "assets/platform.png");
}

function create() {
  this.add.image(640, 360, "wall");

  platforms = this.physics.add.staticGroup();

  platforms.create(640, 708, "floor");

  platforms.create(1140, 135, "ground");
  platforms.create(1220, 530, "ground");
  platforms.create(-30, 245, "ground");
  platforms.create(70, 470, "ground");

  platforms.create(590, 360, "ground").setScale(0.75).refreshBody();
  platforms.create(580, 135, "ground").setScale(0.75).refreshBody();

  platforms.create(460, 580, "ground").setScale(0.5).refreshBody();
  platforms.create(780, 530, "ground").setScale(0.5).refreshBody();
  platforms.create(755, 245, "ground").setScale(0.5).refreshBody();
  platforms.create(1085, 305, "ground").setScale(0.5).refreshBody();

  platforms.create(330, 190, "ground").setScale(0.3).refreshBody();
  platforms.create(250, 360, "ground").setScale(0.3).refreshBody();
  platforms.create(910, 420, "ground").setScale(0.3).refreshBody();

  player = this.physics.add.sprite(70, 590, "star");

  player.setBounce(0);
  player.setCollideWorldBounds(true);

  cursors = this.input.keyboard.createCursorKeys();

  this.physics.add.collider(player, platforms);
}

function update() {
  if (cursors.left.isDown) {
    player.setVelocityX(-200);
  } else if (cursors.right.isDown) {
    player.setVelocityX(200);
  } else {
    player.setVelocityX(0);
  }

  if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-660);
  }
}
