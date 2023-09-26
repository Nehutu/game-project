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
var gameOver = false;

var game = new Phaser.Game(config);

function preload() {
  this.load.image("wall", "assets/backwall.png");
  this.load.image("floor", "assets/floor.png");
  this.load.image("star", "assets/star.png");
  this.load.image("ghost", "assets/ghost.png");
  this.load.image("ground", "assets/platform.png");
  this.load.image("gate", "assets/gate.png");
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

  player.setBounce(0.2);
  player.setCollideWorldBounds(true);

  enemies = this.physics.add.group();

  enemy = enemies.create(100, 100, "ghost");
  enemy.setCollideWorldBounds(true);
  enemy.body.setAllowGravity(false);

  enemy1 = enemies.create(480, 480, "ghost");
  enemy1.setCollideWorldBounds(true);
  enemy1.body.setAllowGravity(false);

  enemy2 = enemies.create(580, 80, "ghost");
  enemy2.setCollideWorldBounds(true);
  enemy2.body.setAllowGravity(false);

  enemy3 = enemies.create(900, 300, "ghost");
  enemy3.setCollideWorldBounds(true);
  enemy3.body.setAllowGravity(false);

  enemy4 = enemies.create(1160, 440, "ghost");
  enemy4.setCollideWorldBounds(true);
  enemy4.body.setAllowGravity(false);

  gate = this.physics.add.sprite(1260, 76, "gate");
  gate.setCollideWorldBounds(true);
  gate.body.setAllowGravity(false);

  cursors = this.input.keyboard.createCursorKeys();

  this.physics.add.collider(player, platforms);
  this.physics.add.collider(enemies, platforms);
  this.physics.add.collider(gate, platforms);
  this.physics.add.collider(player, enemies, playerDead, null, this);
  this.physics.add.overlap(player, gate, playerLives, null, this);
}

function update() {
  if (gameOver) {
    return;
  }

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
    250 >
    Phaser.Math.Distance.Between(
      player.body.x,
      player.body.y,
      enemy.body.x,
      enemy.body.y
    )
  ) {
    enemyHunt();
  }
  function enemyHunt() {
    if (player.x >= enemy.x) {
      enemy.setVelocityX(50);
    } else if (player.x < enemy.x) {
      enemy.setVelocityX(-50);
    }

    if (player.y >= enemy.y) {
      enemy.setVelocityY(50);
    } else if (player.y < enemy.y) {
      enemy.setVelocityY(-50);
    }
  }

  if (
    250 >
    Phaser.Math.Distance.Between(
      player.body.x,
      player.body.y,
      enemy1.body.x,
      enemy1.body.y
    )
  ) {
    if (player.x >= enemy1.x) {
      enemy1.setVelocityX(50);
    } else if (player.x < enemy1.x) {
      enemy1.setVelocityX(-50);
    }

    if (player.y >= enemy1.y) {
      enemy1.setVelocityY(50);
    } else if (player.y < enemy1.y) {
      enemy1.setVelocityY(-50);
    }
  }

  if (
    250 >
    Phaser.Math.Distance.Between(
      player.body.x,
      player.body.y,
      enemy2.body.x,
      enemy2.body.y
    )
  ) {
    if (player.x >= enemy2.x) {
      enemy2.setVelocityX(50);
    } else if (player.x < enemy2.x) {
      enemy2.setVelocityX(-50);
    }

    if (player.y >= enemy2.y) {
      enemy2.setVelocityY(50);
    } else if (player.y < enemy2.y) {
      enemy2.setVelocityY(-50);
    }
  }

  if (
    250 >
    Phaser.Math.Distance.Between(
      player.body.x,
      player.body.y,
      enemy3.body.x,
      enemy3.body.y
    )
  ) {
    if (player.x >= enemy3.x) {
      enemy3.setVelocityX(50);
    } else if (player.x < enemy3.x) {
      enemy3.setVelocityX(-50);
    }

    if (player.y >= enemy3.y) {
      enemy3.setVelocityY(50);
    } else if (player.y < enemy3.y) {
      enemy3.setVelocityY(-50);
    }
  }

  if (
    250 >
    Phaser.Math.Distance.Between(
      player.body.x,
      player.body.y,
      enemy4.body.x,
      enemy4.body.y
    )
  ) {
    if (player.x >= enemy4.x) {
      enemy4.setVelocityX(50);
    } else if (player.x < enemy4.x) {
      enemy4.setVelocityX(-50);
    }

    if (player.y >= enemy4.y) {
      enemy4.setVelocityY(50);
    } else if (player.y < enemy4.y) {
      enemy4.setVelocityY(-50);
    }
  }

  // if (
  //   5 >
  //   Phaser.Math.Distance.Between(
  //     player.body.x,
  //     player.body.y,
  //     gate.x,
  //     gate.y
  //   )
  // ) {
  //   playerLives();
  // }
}

function playerDead() {
  this.physics.pause();

  player.setTint(0xff0000);

  gameOver = true;
}

function playerLives() {
  this.physics.pause();

  player.setTint(0xffff);

  gameOver = true;
}
