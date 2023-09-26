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
var enemies;
var enemy;

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

  enemies = this.physics.add.group();

  enemy = enemies.create(70, 70, "star");
  enemy.setBounce(0.2);
  enemy.setCollideWorldBounds(true);
  enemy.body.setAllowGravity(false);

  enemy1 = enemies.create(480, 480, "star");
  enemy1.setBounce(0.2);
  enemy1.setCollideWorldBounds(true);
  enemy1.body.setAllowGravity(false);

  enemy2 = enemies.create(1190, 390, "star");
  enemy2.setBounce(0.2);
  enemy2.setCollideWorldBounds(true);
  enemy2.body.setAllowGravity(false);

  cursors = this.input.keyboard.createCursorKeys();

  this.physics.add.collider(player, platforms);
  this.physics.add.collider(enemies, platforms);
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

  if (
    150 >
    Phaser.Math.Distance.Between(
      player.body.x,
      player.body.y,
      enemy.body.x,
      enemy.body.y
    )
  ) {
    if (player.x >= enemy.x) {
      enemy.setVelocityX(20);
    } else if (player.x < enemy.x) {
      enemy.setVelocityX(-20);
    }

    if (player.y >= enemy.y) {
      enemy.setVelocityY(20);
    } else if (player.y < enemy.y) {
      enemy.setVelocityY(-20);
    }
  }

  if (
    150 >
    Phaser.Math.Distance.Between(
      player.body.x,
      player.body.y,
      enemy1.body.x,
      enemy1.body.y
    )
  ) {
    if (player.x >= enemy1.x) {
      enemy1.setVelocityX(20);
    } else if (player.x < enemy1.x) {
      enemy1.setVelocityX(-20);
    }

    if (player.y >= enemy1.y) {
      enemy1.setVelocityY(20);
    } else if (player.y < enemy1.y) {
      enemy1.setVelocityY(-20);
    }
  }

  if (
    150 >
    Phaser.Math.Distance.Between(
      player.body.x,
      player.body.y,
      enemy2.body.x,
      enemy2.body.y
    )
  ) {
    if (player.x >= enemy2.x) {
      enemy2.setVelocityX(20);
    } else if (player.x < enemy2.x) {
      enemy2.setVelocityX(-20);
    }

    if (player.y >= enemy2.y) {
      enemy2.setVelocityY(20);
    } else if (player.y < enemy2.y) {
      enemy2.setVelocityY(-20);
    }
  }
}
