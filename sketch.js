let bgImg0, bgImg1, bgImg4, bgImg5, bgImg6, bgImg7, btnImg, shutdownImg, logoImg;
let profileImg, profileHoverImg; 
let courseImg, courseHoverImg;
let dashImg, dashHoverImg;
let arrowImg, arrowHoverImg;
let courdashImg;
let interactImg; 
let a3Img; 
let proImg, coImg; 
let hoverSound, clickSound, bgm, gamestartSound, bgmm;
let logoutImg;
let progressImg, progress1Img, progress2Img, progress3Img, playImg, woodImg, cloudImg, leafImg;
let progress0Img, chestImg, taskImg; 

// --- CÁC BIẾN HÌNH ẢNH MỚI CHO MINI-GAME BẤM SỐ ---
let recImg, recaltImg, progresssImg, victorySound;
let numImgs = []; 
let numberButtons = []; 
let nextExpectedNumber = 1; 
let miniGameActive = true; 
let victoryTriggered = false; 
let progressImgCurrent; 
let progressScale = 1.0; 
let progressScaleTarget = 1.0;
let progressScaleTimer = 0;

// --- CÁC BIẾN CHO HỆ THỐNG TRANG 8 MỚI ---
let bgImg8, doorImg, door1Img, dooropenSound;
let doorAlpha = 0;             
let doorVisible = false;       
let doorScale = 1.0;
let soundPlayedDoor = false;
let page8StartTime = 0;        
let ghostDropped = false;      
let key8Clicked = false;       
let key8Scale = 1.0;
let soundPlayedKey8 = false;
let door1Clicked = false;      
let door1Scale = 1.0;
let soundPlayedDoor1 = false;

// --- CÁC BIẾN MỚI CHO TRANG 8 & TRANG 9 THEO YÊU CẦU ---
let progressssImg, humanImg, eraserImg, door2Img, bgImg9;
let chest8 = { x: 1500, y: 630, w: 150, h: 150, scale: 1.0, clicked: false };
let taskPanel8 = { x: 207, yCurrent: 1100, yTarget: 28, w: 1536, h: 1024 };
let miniGame8Active = true;
let eraser = { x: 1412, y: 72, w: 325, h: 325, currentX: 1412, currentY: 72, isDragging: false, scale: 1.0, soundHoverPlayed: false, visible: true };
let human = { x: 368, y: 152, w: 1184, h: 720, alpha: 255, eraseTime: 0, visible: true }; 
let door2Visible = false;
let door2Scale = 1.0;
let soundPlayedDoor2 = false;
let page9StartTime = 0;
let ghostDropped9 = false;

// --- BIẾN HỆ THỐNG CHATBOT MỚI ---
let robotImg, chatImg, xImg, sendImg;
let chatboxImg, chatbox1Img, chatbox2Img; 
let stopSound;
let showChatPanel = false; 

let inputText = ""; 
let submittedText = ""; 
let aiResponseText = ""; 

let startTime = 0;

// Biến cho 3 đám mây
let cloud1 = { x: 199, y: 201, speed: 3, active: true, timer: 0 };
let cloud2 = { x: 996, y: 105, speed: 3, active: true, timer: 0 };
let cloud3 = { x: 1650, y: 140, speed: 3, active: true, timer: 0 };

let currentScale = 1.0, targetScale = 1.0;
let currentScaleShut = 1.0, targetScaleShut = 1.0;
let currentScaleLogo = 1.0, targetScaleLogo = 1.0;
let currentScaleCourdash = 1.0, targetScaleCourdash = 1.0;
let currentScaleInteract = 1.0, targetScaleInteract = 1.0;
let currentScaleA3 = 1.0, targetScaleA3 = 1.0;
let currentScaleLogout = 1.0, targetScaleLogout = 1.0;
let currentScalePlay = 1.0, targetScalePlay = 1.0;
let currentScaleRobot = 1.0, targetScaleRobot = 1.0;
let currentScaleSend = 1.0, targetScaleSend = 1.0;

let soundPlayedRobot = false;
let soundPlayedXBtn = false;
let soundPlayedSendBtn = false;
let soundPlayedExitBtn = false;
let soundPlayedBackBtn = false;
let soundPlayedCoursesBtn = false;

let soundPlayed = false, soundPlayedShut = false, soundPlayedLogo = false;
let soundPlayedProfile = false, soundPlayedCourse = false, soundPlayedDash = false;
let soundPlayedArrow = false, soundPlayedCourdash = false, soundPlayedInteract = false, soundPlayedA3 = false, soundPlayedLogout = false, soundPlayedPlay = false;

let btnX = 805, btnY = 771, btnW = 309, btnH = 309;
let shutX = 1798, shutY = 960, shutW = 90, shutH = 90;
let logoX = 0, logoY = 0, logoW = 161, logoH = 161;
let profX = 0, profY = 161, profW = 161, profH = 161;
let dashX = 0, dashY = 322, dashW = 161, dashH = 161;
let courseX = 0, courseY = 483, courseW = 161, courseH = 161;
let arrowX = 0, arrowY = 919, arrowW = 161, arrowH = 161;
let courdashX = 225, courdashY = 243, courdashW = 644, courdashH = 161;
let interactX = 177, interactY = 241, interactW = 244, interactH = 44;
let a3X = 254, a3Y = 318, a3W = 680, a3H = 81; 
let logoutX = 301, logoutY = 196, logoutW = 200, logoutH = 200;
let panelX = 161, panelY = 0, panelW = 500, panelH = 1080;
let progX = 310, progY = 495, progW = 1300, progH = 147.54;
let playX = 805, playY = 771, playW = 309, playH = 309;

let backBtnX = 177, backBtnY = 368, backBtnW = 309, backBtnH = 44;
let coursesBtnX = 177, coursesBtnY = 422, coursesBtnW = 185, coursesBtnH = 44;
let exitBtnX = 177, exitBtnY = 476, exitBtnW = 112, exitBtnH = 44;

let robotX = 1782, robotY = 821, robotW = 122, robotH = 122;
let chatX = 1560, chatY = 680, chatW = 328.01, chatH = 370; 
let xBtnX = 1832, xBtnY = 677, xBtnW = 60, xBtnH = 60;

let sendW = 26, sendH = 26;
let sendX = 1840, sendY = 1002; 

let cbW = 219, cbH = 26;
let cbX = 1569 + 10, cbY = 1002;     

let cb1W = 219, cb1H = 26;
let cb1X = 1612 + 10, cb1Y = 738;    

let cb2W = 219, cb2H = 26;
let cb2X = 1569 + 10, cb2Y = 780;    

let input;
let trangHienTai = 0;
let showProPanel = false; 
let showCoPanel = false;
let keyClicked = false;
let keyScale = 1.0; let soundPlayedKey = false; 
let proAlpha = 0, coAlpha = 0;
let proTargetAlpha = 0, coTargetAlpha = 0;

let ghostImg;
let moveSound, jumpSound, woodSound, chestSound;
let ghost = {
  x: 574,
  y: 630,
  w: 176,
  h: 176,
  speed: 7.5,
  vy: 0,
  gravity: 0.6,
  jumpForce: -15,
  groundY: 630,
  isJumping: false
};
let isGhostTouchingKey = false;

let blocks = [
  { type: 'wood', x: 900, y: 480, w: 150, h: 150, alpha: 255, holdTime: 0, exists: true },
  { type: 'wood', x: 900, y: 630, w: 150, h: 150, alpha: 255, holdTime: 0, exists: true },
  { type: 'leaf', x: 900, y: 330, w: 150, h: 150, alpha: 255, holdTime: 0, exists: true },
  { type: 'leaf', x: 750, y: 330, w: 150, h: 150, alpha: 255, holdTime: 0, exists: true },
  { type: 'leaf', x: 1050, y: 330, w: 150, h: 150, alpha: 255, holdTime: 0, exists: true },
  { type: 'leaf', x: 900, y: 180, w: 150, h: 150, alpha: 255, holdTime: 0, exists: true }
];

let chest = {
  x: 1425,
  y: 630,
  w: 150,
  h: 150,
  scale: 1.0,
  clicked: false
};
let taskPanel = {
  x: 207,
  yCurrent: 1100, 
  yTarget: 28,     
  w: 1536,
  h: 1024
};

// --- BIẾN MỚI CHO HỆ THỐNG CHUỘT VÀ ÂM THANH THEO YÊU CẦU ---
let mouseImg, mouse1Img;
let soundImg, sound1Img;
let isMuted = false;
let soundX = 1798, soundY = 20, soundW = 103, soundH = 103;
let soundScale = 1.0, soundScaleTarget = 1.0;
let soundPlayedSoundBtn = false;
let anyButtonHovered = false; 

// --- BIẾN MỚI CHO TRANG 9 VÀ TRANG 10 ---
let brickImg, brick2Img, brick3Img, brick4Img, bgImg10, bgImg11;
let progresssssImg, replayImg;
let page10StartTime = 0;
let ghostDropped10 = false;
let door3Scale = 1.0;
let soundPlayedDoor3 = false;

// --- BIẾN CHO TRANG 10: CHEST VÀ DOOR ---
let chest10 = { x: 900, y: 457, w: 150, h: 150, scale: 1.0, clicked: false };
let door10 = { x: 1124, y: 325, w: 300, h: 275, scale: 1.0, visible: false, alpha: 0 };
let chest10Clicked = false;
let progressScaleTimer10 = 0;
let door10Timer = 0;
let soundPlayedDoor10 = false;

// --- BIẾN CHO TRANG 11: REPLAY BUTTON ---
let page11StartTime = 0;
let replayButtonVisible = false;
let replayScale = 1.0;
let soundPlayedReplay = false;

let bricksPage9 = [
  { imgName: 'brickImg', x: 300, y: 630, w: 150, h: 150 },
  { imgName: 'brick2Img', x: 600, y: 480, w: 300, h: 150 },
  { imgName: 'brick4Img', x: 1050, y: 330, w: 450, h: 150 },
  { imgName: 'brick3Img', x: 1503, y: 330, w: 450, h: 150 }
];

let cloud1_p9 = { x: 199, y: 201, speed: 3, active: true, timer: 0 };
let cloud2_p9 = { x: 996, y: 105, speed: 3, active: true, timer: 0 };
let cloud3_p9 = { x: 1650, y: 140, speed: 3, active: true, timer: 0 };

// ==========================================
// THÊM: HỆ THỐNG BIẾN CHO TÍNH NĂNG REPLAY CUTSCENE
// ==========================================
let gameHistory = [];
let isReplaying = false;
let replayCursor = 0;

function preload() {
  bgImg0 = loadImage('0.png'); bgImg1 = loadImage('1.png'); 
  bgImg4 = loadImage('4.png'); bgImg5 = loadImage('5.png');
  bgImg6 = loadImage('6.png'); bgImg7 = loadImage('7.png');
  bgImg8 = loadImage('8.png'); bgImg9 = loadImage('9.png');
  bgImg10 = loadImage('10.png'); bgImg11 = loadImage('11.png');
  btnImg = loadImage('login.png'); shutdownImg = loadImage('shutdown.png');
  logoImg = loadImage('logo.png'); logoutImg = loadImage('logout.png');
  profileImg = loadImage('profile.png'); profileHoverImg = loadImage('profilehover.png');
  dashImg = loadImage('dashboard.png'); dashHoverImg = loadImage('dashboardhover.png');
  courseImg = loadImage('course.png'); courseHoverImg = loadImage('coursehover.png');
  arrowImg = loadImage('arrow.png'); arrowHoverImg = loadImage('arrowhover.png');
  courdashImg = loadImage('courdash.png'); interactImg = loadImage('interact1.png');
  a3Img = loadImage('a3.png'); proImg = loadImage('pro.png'); coImg = loadImage('co.png');
  progressImg = loadImage('progress.png'); progress1Img = loadImage('progress1.png');
  progress2Img = loadImage('progress2.png'); progress3Img = loadImage('progress3.png');
  playImg = loadImage('play.png'); woodImg = loadImage('wood.png'); cloudImg = loadImage('cloud.png'); keyImg = loadImage('key.png');
  ghostImg = loadImage('ghost.png'); leafImg = loadImage('leaf.png');
  doorImg = loadImage('door.png'); door1Img = loadImage('door1.png');
  
  progress0Img = loadImage('progress0.png');
  progresssImg = loadImage('progresss.png');
  progressssImg = loadImage('progressss.png');
  progresssssImg = loadImage('progresssss.png');
  replayImg = loadImage('replay.png');
  progressImgCurrent = progress0Img; 

  chestImg = loadImage('chest.png');
  taskImg = loadImage('task.png');
  humanImg = loadImage('human.png');
  eraserImg = loadImage('eraser.png');
  door2Img = loadImage('door2.png');
  
  robotImg = loadImage('robot.png');
  chatImg = loadImage('chat.png'); 
  xImg = loadImage('x.png');
  sendImg = loadImage('send.png');
  
  chatboxImg = loadImage('chatbox.png');
  chatbox1Img = loadImage('chatbox1.png');
  chatbox2Img = loadImage('chatbox2.png');

  exitBtnImg = loadImage('Exit.png');
  backBtnImg = loadImage('back.png');
  coursesBtnImg = loadImage('Courses.png');

  recImg = loadImage('rec.png');
  recaltImg = loadImage('recalt.png');
  numImgs[1] = loadImage('one.png'); numImgs[2] = loadImage('two.png');
  numImgs[3] = loadImage('three.png'); numImgs[4] = loadImage('four.png');
  numImgs[5] = loadImage('five.png'); numImgs[6] = loadImage('six.png');
  numImgs[7] = loadImage('seven.png'); numImgs[8] = loadImage('eight.png');
  numImgs[9] = loadImage('nine.png');

  mouseImg = loadImage('mouse.png');
  mouse1Img = loadImage('mouse1.png');
  soundImg = loadImage('sound.png');
  sound1Img = loadImage('sound1.png');
  brickImg = loadImage('brick.png');
  brick2Img = loadImage('brick2.png');
  brick3Img = loadImage('brick3.png');
  brick4Img = loadImage('brick4.png');
  
  soundFormats('mp3');
  hoverSound = loadSound('hover.mp3'); clickSound = loadSound('click.mp3');
  bgm = loadSound('bgm.mp3'); gamestartSound = loadSound('gamestart.mp3');
  bgmm = loadSound('bgmm.mp3'); keySound = loadSound('key.mp3');
  moveSound = loadSound('move.mp3'); jumpSound = loadSound('jump.mp3');
  woodSound = loadSound('wood.mp3'); chestSound = loadSound('chest.mp3');
  stopSound = loadSound('stop.mp3');
  victorySound = loadSound('victory.mp3');
  dooropenSound = loadSound('dooropen.mp3');
}

function setup() {
  createCanvas(1920, 1080);
  noCursor(); 
  
  input = createInput();
  input.style('box-sizing', 'border-box'); input.style('position', 'absolute');
  input.style('width', '626px'); input.style('height', '72px');
  input.style('left', '460px'); input.style('top', '550px');
  input.style('background', '#FFFFFF'); input.style('border', '10px solid #707078');
  input.style('font-size', '24px'); input.style('padding', '10px');
  input.style('z-index', '10');
  
  moveSound.setVolume(3.0);
  woodSound.setVolume(2.0); 
  woodSound.rate(2.0);      

  let positions = [];
  while (positions.length < 9) {
    let rx = random(350, 1400);
    let ry = random(200, 750);
    let valid = true;
    for (let pos of positions) {
      if (dist(rx, ry, pos.x, pos.y) < 140) { 
        valid = false;
        break;
      }
    }
    if (valid) positions.push({ x: rx, y: ry });
  }

  for (let i = 0; i < 9; i++) {
    numberButtons.push({
      id: i + 1,
      x: positions[i].x,
      y: positions[i].y,
      w: 100,
      h: 100,
      isCorrect: false,
      soundHoverPlayed: false
    });
  }
}

function updateCloud(c) {
  if (c.active) {
    c.x += c.speed;
    if (c.x > width) {
      c.active = false;
      c.timer = millis();
    }
  } else {
    if (millis() - c.timer > 1000) {
      c.x = -150;
      c.active = true;
    }
  }
}

function checkCollision(g, b) {
  return (g.x < b.x + b.w && g.x + g.w > b.x &&
          g.y < b.y + b.h && g.y + g.h > b.y);
}

function updateGhost() {
  let isMoving = false;
  let oldX = ghost.x;

  if (keyIsDown(LEFT_ARROW)) {
    ghost.x -= ghost.speed;
    isMoving = true;
    if (trangHienTai === 7 && !keyClicked) {
      for (let b of blocks) {
        if (b.exists && checkCollision(ghost, b)) {
          ghost.x = oldX; 
          break;
        }
      }
    }
    if (trangHienTai === 9) {
      for (let b of bricksPage9) {
        if (checkCollision(ghost, b)) {
          ghost.x = oldX;
          break;
        }
      }
    }
  }
  
  if (keyIsDown(RIGHT_ARROW)) {
    if (trangHienTai === 8 && !door1Clicked && ghost.x + ghost.speed + ghost.w > 900) {
      ghost.x = 900 - ghost.w;
    } else {
      ghost.x += ghost.speed;
      isMoving = true;
    }
    
    if (trangHienTai === 7 && !keyClicked) {
      for (let b of blocks) {
        if (b.exists && checkCollision(ghost, b)) {
          ghost.x = oldX; 
          break;
        }
      }
    }
    if (trangHienTai === 9) {
      for (let b of bricksPage9) {
        if (checkCollision(ghost, b)) {
          ghost.x = oldX;
          break;
        }
      }
    }
  }

  if (isMoving && !ghost.isJumping) {
    if (!moveSound.isPlaying() && !isMuted) {
      moveSound.loop();
    }
  } else {
    if (moveSound.isPlaying()) {
      moveSound.stop();
    }
  }

  if ((keyIsDown(UP_ARROW) || keyIsDown(32)) && !ghost.isJumping) {
    ghost.vy = ghost.jumpForce;
    ghost.isJumping = true;
    if (!isMuted) jumpSound.play();
  }

  ghost.vy += ghost.gravity;
  let oldY = ghost.y;
  ghost.y += ghost.vy;

  if (trangHienTai === 7 && !keyClicked) {
    for (let b of blocks) {
      if (b.exists && checkCollision(ghost, b)) {
        if (ghost.vy > 0 && oldY + ghost.h <= b.y) {
          ghost.y = b.y - ghost.h;
          ghost.vy = 0;
          ghost.isJumping = false;
        } else if (ghost.vy < 0 && oldY >= b.y + b.h) {
          ghost.y = b.y + b.h;
          ghost.vy = 0;
        } else {
          ghost.y = oldY;
        }
      }
    }
  }

  if (trangHienTai === 9) {
    let standingOnBrick = false;
    for (let b of bricksPage9) {
      if (checkCollision(ghost, b)) {
        if (ghost.vy > 0 && oldY + ghost.h <= b.y) {
          ghost.y = b.y - ghost.h;
          ghost.vy = 0;
          ghost.isJumping = false;
          standingOnBrick = true;
        } else if (ghost.vy < 0 && oldY >= b.y + b.h) {
          ghost.y = b.y + b.h;
          ghost.vy = 0;
        } else {
          ghost.y = oldY;
        }
      }
    }
  }

  if (ghost.y >= ghost.groundY) {
    ghost.y = ghost.groundY;
    ghost.vy = 0;
    ghost.isJumping = false;
  }

  ghost.x = constrain(ghost.x, 0, width - ghost.w);

  if (trangHienTai === 7) {
    if (!keyClicked) {
        let keyX = 349, keyY = 630, keyW = 150, keyH = 150;
        isGhostTouchingKey = (ghost.x < keyX + keyW && ghost.x + ghost.w > keyX &&
                              ghost.y < keyY + keyH && ghost.y + ghost.h > keyY);
    } else {
        isGhostTouchingKey = false;
    }
  } else if (trangHienTai === 8) {
    if (!key8Clicked) {
        let keyX = 349, keyY = 630, keyW = 150, keyH = 150;
        isGhostTouchingKey = (ghost.x < keyX + keyW && ghost.x + ghost.w > keyX &&
                              ghost.y < keyY + keyH && ghost.y + ghost.h > keyY);
    } else {
        isGhostTouchingKey = false;
    }
  }
}

function toggleMuteAll(muteState) {
  if (muteState) {
    bgm.setVolume(0); bgmm.setVolume(0); hoverSound.setVolume(0); clickSound.setVolume(0);
    gamestartSound.setVolume(0); keySound.setVolume(0); moveSound.setVolume(0); jumpSound.setVolume(0);
    woodSound.setVolume(0); chestSound.setVolume(0); stopSound.setVolume(0); victorySound.setVolume(0);
    dooropenSound.setVolume(0);
  } else {
    bgm.setVolume(1.0); bgmm.setVolume(1.0); hoverSound.setVolume(1.0); clickSound.setVolume(1.0);
    gamestartSound.setVolume(1.0); keySound.setVolume(1.0); moveSound.setVolume(1.0); jumpSound.setVolume(1.0);
    woodSound.setVolume(2.0); chestSound.setVolume(1.0); stopSound.setVolume(1.0); victorySound.setVolume(2.0);
    dooropenSound.setVolume(1.0);
    
    if (trangHienTai === 7 || trangHienTai === 8 || trangHienTai === 9 || trangHienTai === 10) {
      if (!bgmm.isPlaying()) bgmm.loop();
    } else {
      if (!bgm.isPlaying()) bgm.loop();
    }
  }
}

function draw() {
  // --- KIỂM TRA CHẾ ĐỘ REPLAY CUTSCENE ---
  if (isReplaying) {
    if (replayCursor < gameHistory.length) {
      drawReplayFrame(gameHistory[replayCursor]);
      replayCursor++;
    } else {
      isReplaying = false;
      gameHistory = [];
      trangHienTai = 0;
      resetGameStates();
    }
    // Vẫn hiển thị chuột tùy chỉnh khi đang chạy cutscene
    image(mouseImg, mouseX, mouseY, 40, 40);
    return; // Dừng toàn bộ logic game khác để tập trung chạy cutscene
  }

  background(0);
  anyButtonHovered = false; 
  
  if (trangHienTai === 0) {
    image(bgImg0, 0, 0, 1920, 1080); input.show();
    
    let isHoveringLogin = (mouseX > btnX && mouseX < btnX + btnW && mouseY > btnY && mouseY < btnY + btnH);
    if (isHoveringLogin) {
      targetScale = 1.1; 
      anyButtonHovered = true;
      if (!soundPlayed) { hoverSound.play(); soundPlayed = true; }
    } else { 
      targetScale = 1.0; 
      soundPlayed = false; 
    }
    currentScale = lerp(currentScale, targetScale, 0.2);
    
    push(); 
    translate(btnX + btnW / 2, btnY + btnH / 2); 
    scale(currentScale); 
    imageMode(CENTER); 
    
    if (isHoveringLogin) {
      drawingContext.shadowBlur = 15;
      drawingContext.shadowColor = 'white';
    }
    image(btnImg, 0, 0, btnW, btnH); 
    pop();
    drawingContext.shadowBlur = 0; 
    
  } else if (trangHienTai === 6) { image(bgImg6, 0, 0, 1920, 1080); input.hide();
  } else if (trangHienTai === 7) { 
    image(bgImg7, 0, 0, 1920, 1080); input.hide();
    if (bgm.isPlaying()) bgm.stop();
    
    updateCloud(cloud1); updateCloud(cloud2); updateCloud(cloud3);
    if(cloud1.active) image(cloudImg, cloud1.x, cloud1.y, 150, 150);
    if(cloud2.active) image(cloudImg, cloud2.x, cloud2.y, 150, 150);
    if(cloud3.active) image(cloudImg, cloud3.x, cloud3.y, 150, 150);
    
    if (progressScaleTimer > 0 && millis() - progressScaleTimer < 1000) {
      progressScale = lerp(progressScale, 1.2, 0.15);
    } else {
      progressScale = lerp(progressScale, 1.0, 0.15);
      if (progressScaleTimer > 0 && millis() - progressScaleTimer >= 2000) {
        doorVisible = true;
      }
    }

    push();
    translate(38 + 921.5 / 2, 34 + 92 / 2);
    scale(progressScale);
    imageMode(CENTER);
    image(progressImgCurrent, 0, 0, 921.5, 92);
    pop();
    imageMode(CORNER);

    updateGhost();

    let holdingAnyBlock = false;

    for (let b of blocks) {
      if (!b.exists) continue;

      let isHovered = (mouseX > b.x && mouseX < b.x + b.w && mouseY > b.y && mouseY < b.y + b.h);
      let ghostCenterX = ghost.x + ghost.w / 2;
      let ghostCenterY = ghost.y + ghost.h / 2;
      let blockCenterX = b.x + b.w / 2;
      let blockCenterY = b.y + b.h / 2;
      let distance = dist(ghostCenterX, ghostCenterY, blockCenterX, blockCenterY);
      let isGhostNear = (distance < 250);

      let triggerGlow = false;
      if (keyClicked && isGhostNear && isHovered) {
        triggerGlow = true;
        anyButtonHovered = true;
      }

      if (triggerGlow && mouseIsPressed && mouseButton === LEFT) {
        holdingAnyBlock = true;
        b.holdTime += 1 / frameRate();
        b.alpha = map(b.holdTime, 0, 3.0, 255, 0);
        
        if (b.holdTime >= 3.0) {
          b.alpha = 0;
          b.exists = false; 
        }
      } else {
        if (b.exists && b.holdTime > 0) {
          b.holdTime = 0;
          b.alpha = 255;
        }
      }

      if (b.exists && b.alpha > 0) {
        push();
        tint(255, b.alpha); 
        if (triggerGlow) {
          drawingContext.shadowBlur = 15;
          drawingContext.shadowColor = 'white';
        }
        let img = (b.type === 'wood') ? woodImg : leafImg;
        image(img, b.x, b.y, b.w, b.h);
        pop();
        drawingContext.shadowBlur = 0;
      }
    }

    if (holdingAnyBlock) {
      if (!woodSound.isPlaying() && !isMuted) {
        woodSound.loop();
      }
    } else {
      if (woodSound.isPlaying()) {
        woodSound.stop();
      }
    }

    let isChestHovered = (mouseX > chest.x && mouseX < chest.x + chest.w && mouseY > chest.y && mouseY < chest.y + chest.h);
    let gCenterX = ghost.x + ghost.w / 2;
    let gCenterY = ghost.y + ghost.h / 2;
    let cCenterX = chest.x + chest.w / 2;
    let cCenterY = chest.y + chest.h / 2;
    let distToChest = dist(gCenterX, gCenterY, cCenterX, cCenterY);
    let isGhostNearChest = (distToChest < 250);

    let triggerChestEffect = (isChestHovered || isGhostNearChest);
    if (isChestHovered) anyButtonHovered = true;
    let targetChestScale = triggerChestEffect ? 1.05 : 1.0;
    chest.scale = lerp(chest.scale, targetChestScale, 0.2);

    push();
    translate(chest.x + chest.w / 2, chest.y + chest.h / 2);
    scale(chest.scale);
    imageMode(CENTER);
    if (triggerChestEffect) {
      drawingContext.shadowBlur = 15;
      drawingContext.shadowColor = 'white';
    }
    image(chestImg, 0, 0, chest.w, chest.h);
    pop();
    drawingContext.shadowBlur = 0;
    imageMode(CORNER); 

    if (!keyClicked) {
        let isHoveringKey = (mouseX > 349 && mouseX < 349 + 150 && mouseY > 630 && mouseY < 630 + 150);
        if (isGhostTouchingKey || isHoveringKey) {
            keyScale = lerp(keyScale, 1.05, 0.2);
            if (isHoveringKey) anyButtonHovered = true;
            if (!soundPlayedKey) { hoverSound.play(); soundPlayedKey = true; }
            drawingContext.shadowBlur = 15; drawingContext.shadowColor = 'white';
        } else {
            keyScale = lerp(keyScale, 1.0, 0.2);
            soundPlayedKey = false;
        }
        push(); translate(349 + 75, 630 + 75); scale(keyScale); imageMode(CENTER); image(keyImg, 0, 0, 150, 150); pop();
        drawingContext.shadowBlur = 0;
        imageMode(CORNER);
    }

    image(ghostImg, ghost.x, ghost.y, ghost.w, ghost.h);

    if (chest.clicked) {
      taskPanel.yCurrent = lerp(taskPanel.yCurrent, taskPanel.yTarget, 0.1);
      image(taskImg, taskPanel.x, taskPanel.yCurrent, taskPanel.w, taskPanel.h);

      if (miniGameActive && abs(taskPanel.yCurrent - taskPanel.yTarget) < 50) {
        for (let btn of numberButtons) {
          let renderX = taskPanel.x + btn.x;
          let renderY = taskPanel.yCurrent + btn.y;

          let isHoveringNumBtn = (mouseX > renderX && mouseX < renderX + btn.w && mouseY > renderY && mouseY < renderY + btn.h);
          
          push();
          if (isHoveringNumBtn) {
            anyButtonHovered = true;
            if (!btn.soundHoverPlayed) {
              hoverSound.play();
              btn.soundHoverPlayed = true;
            }
            drawingContext.shadowBlur = 15;
            drawingContext.shadowColor = 'white';
          } else {
            btn.soundHoverPlayed = false;
          }

          let currentBgImg = btn.isCorrect ? recaltImg : recImg;
          image(currentBgImg, renderX, renderY, btn.w, btn.h);
          pop();

          if (numImgs[btn.id]) {
            image(numImgs[btn.id], renderX + btn.w/4, renderY + btn.h/4, btn.w/2, btn.h/2);
          }
        }
      }
    }

    if (doorVisible) {
      doorAlpha = min(doorAlpha + (255 / frameRate()), 255); 
      
      let isHoveringDoor = (mouseX > 1575 && mouseX < 1575 + 300 && mouseY > 505 && mouseY < 505 + 275);
      if (isHoveringDoor) {
        doorScale = lerp(doorScale, 1.05, 0.2);
        anyButtonHovered = true;
        if (!soundPlayedDoor) { hoverSound.play(); soundPlayedDoor = true; }
      } else {
        doorScale = lerp(doorScale, 1.0, 0.2);
        soundPlayedDoor = false;
      }

      push();
      tint(255, doorAlpha);
      translate(1575 + 300 / 2, 505 + 275 / 2);
      scale(doorScale);
      imageMode(CENTER);
      if (isHoveringDoor) {
        drawingContext.shadowBlur = 15;
        drawingContext.shadowColor = 'white';
      }
      image(doorImg, 0, 0, 300, 275);
      pop();
      drawingContext.shadowBlur = 0;
      imageMode(CORNER);
    }

  } else if (trangHienTai === 8) {
    image(bgImg8, 0, 0, 1920, 1080);
    input.hide();

    if (progressScaleTimer > 0 && millis() - progressScaleTimer < 1000) {
      progressScale = lerp(progressScale, 1.2, 0.15);
    } else {
      progressScale = lerp(progressScale, 1.0, 0.15);
    }
    push();
    translate(38 + 921.5 / 2, 34 + 92 / 2);
    scale(progressScale);
    imageMode(CENTER);
    image(progressImgCurrent, 0, 0, 921.5, 92);
    pop();
    imageMode(CORNER);

    if (millis() - page8StartTime >= 1000) {
      if (!ghostDropped) {
        ghost.x = 75;
        ghost.y = 0; 
        ghost.vy = 0;
        ghostDropped = true;
      }
      updateGhost();
      image(ghostImg, ghost.x, ghost.y, ghost.w, ghost.h);
    }

    if (!key8Clicked) {
      let isHoveringKey8 = (mouseX > 349 && mouseX < 349 + 150 && mouseY > 630 && mouseY < 630 + 150);
      if (isGhostTouchingKey || isHoveringKey8) {
        key8Scale = lerp(key8Scale, 1.05, 0.2);
        if (isHoveringKey8) anyButtonHovered = true;
        if (!soundPlayedKey8) { hoverSound.play(); soundPlayedKey8 = true; }
        drawingContext.shadowBlur = 15; drawingContext.shadowColor = 'white';
      } else {
        key8Scale = lerp(key8Scale, 1.0, 0.2);
        soundPlayedKey8 = false;
      }
      push(); translate(349 + 75, 630 + 75); scale(key8Scale); imageMode(CENTER); image(keyImg, 0, 0, 150, 150); pop();
      drawingContext.shadowBlur = 0;
      imageMode(CORNER);
    }

    if (!door1Clicked) {
      let isHoveringDoor1 = (mouseX > 900 && mouseX < 900 + 30 && mouseY > 505 && mouseY < 505 + 275);
      if (isHoveringDoor1) {
        door1Scale = lerp(door1Scale, 1.05, 0.2);
        anyButtonHovered = true;
        if (!soundPlayedDoor1) { hoverSound.play(); soundPlayedDoor1 = true; }
      } else {
        door1Scale = lerp(door1Scale, 1.0, 0.2);
        soundPlayedDoor1 = false;
      }

      push();
      translate(900 + 30 / 2, 505 + 275 / 2);
      scale(door1Scale);
      imageMode(CENTER);
      if (isHoveringDoor1) {
        drawingContext.shadowBlur = 15;
        drawingContext.shadowColor = 'white';
      }
      image(door1Img, 0, 0, 30, 275);
      pop();
      drawingContext.shadowBlur = 0;
      imageMode(CORNER);
    } else {
      image(doorImg, 825, 505, 300, 275);
    }

    let isChest8Hovered = (mouseX > chest8.x && mouseX < chest8.x + chest8.w && mouseY > chest8.y && mouseY < chest8.y + chest8.h);
    if (isChest8Hovered) anyButtonHovered = true;
    let targetChest8Scale = isChest8Hovered ? 1.05 : 1.0;
    chest8.scale = lerp(chest8.scale, targetChest8Scale, 0.2);

    push();
    translate(chest8.x + chest8.w / 2, chest8.y + chest8.h / 2);
    scale(chest8.scale);
    imageMode(CENTER);
    if (isChest8Hovered) {
      drawingContext.shadowBlur = 15;
      drawingContext.shadowColor = 'white';
    }
    image(chestImg, 0, 0, chest8.w, chest8.h);
    pop();
    drawingContext.shadowBlur = 0;
    imageMode(CORNER);

    if (chest8.clicked) {
      taskPanel8.yCurrent = lerp(taskPanel8.yCurrent, taskPanel8.yTarget, 0.1);
      image(taskImg, taskPanel8.x, taskPanel8.yCurrent, taskPanel8.w, taskPanel8.h);

      if (abs(taskPanel8.yCurrent - taskPanel8.yTarget) < 50) {
        if (human.visible) {
          push();
          tint(255, human.alpha);
          image(humanImg, human.x, human.y, human.w, human.h);
          pop();
        }

        if (eraser.visible) {
          let isHoveringEraser = (mouseX > eraser.currentX && mouseX < eraser.currentX + eraser.w && mouseY > eraser.currentY && mouseY < eraser.currentY + eraser.h);
          if (isHoveringEraser) anyButtonHovered = true;
          
          if (eraser.isDragging) {
            eraser.currentX = mouseX - eraser.w / 2;
            eraser.currentY = mouseY - eraser.h / 2;
            
            if (mouseX > human.x && mouseX < human.x + human.w && mouseY > human.y && mouseY < human.y + human.h) {
              human.eraseTime += 1 / frameRate();
              human.alpha = map(human.eraseTime, 0, 3.0, 255, 0);
              if (human.eraseTime >= 3.0) {
                human.visible = false;
                eraser.visible = false;
                
                setTimeout(() => {
                  taskPanel8.yTarget = 1200; 
                }, 1000);

                setTimeout(() => {
                  progressImgCurrent = progressssImg; 
                  progressScaleTimer = millis(); 
                  door2Visible = true; 
                }, 2000);
              }
            }
          }

          let targetEraserScale = isHoveringEraser ? 1.05 : 1.0;
          eraser.scale = lerp(eraser.scale, targetEraserScale, 0.2);

          push();
          translate(eraser.currentX + eraser.w / 2, eraser.currentY + eraser.h / 2);
          scale(eraser.scale);
          imageMode(CENTER);
          if (isHoveringEraser) {
            if (!eraser.soundHoverPlayed) {
              hoverSound.play();
              eraser.soundHoverPlayed = true;
            }
            drawingContext.shadowBlur = 15;
            drawingContext.shadowColor = 'black'; 
          } else {
            eraser.soundHoverPlayed = false;
          }
          image(eraserImg, 0, 0, eraser.w, eraser.h);
          pop();
          drawingContext.shadowBlur = 0;
          imageMode(CORNER);
        }
      }
    }

    if (door2Visible) {
      let isHoveringDoor2 = (mouseX > 1620 && mouseX < 1620 + 300 && mouseY > 505 && mouseY < 505 + 275);
      if (isHoveringDoor2) {
        door2Scale = lerp(door2Scale, 1.05, 0.2);
        anyButtonHovered = true;
        if (!soundPlayedDoor2) { hoverSound.play(); soundPlayedDoor2 = true; }
      } else {
        door2Scale = lerp(door2Scale, 1.0, 0.2);
        soundPlayedDoor2 = false;
      }

      push();
      translate(1620 + 300 / 2, 505 + 275 / 2);
      scale(door2Scale);
      imageMode(CENTER);
      if (isHoveringDoor2) {
        drawingContext.shadowBlur = 15;
        drawingContext.shadowColor = 'white';
      }
      image(door2Img, 0, 0, 300, 275);
      pop();
      drawingContext.shadowBlur = 0;
      imageMode(CORNER);
    }

  } else if (trangHienTai === 9) {
    image(bgImg9, 0, 0, 1920, 1080);
    input.hide();
    image(progressImgCurrent, 38, 34, 921.5, 92);

    updateCloud(cloud1_p9); updateCloud(cloud2_p9); updateCloud(cloud3_p9);
    if(cloud1_p9.active) image(cloudImg, cloud1_p9.x, cloud1_p9.y, 150, 150);
    if(cloud2_p9.active) image(cloudImg, cloud2_p9.x, cloud2_p9.y, 150, 150);
    if(cloud3_p9.active) image(cloudImg, cloud3_p9.x, cloud3_p9.y, 150, 150);

    image(brickImg, 300, 630, 150, 150);
    image(brick2Img, 600, 480, 300, 150);
    image(brick4Img, 1050, 330, 450, 150);
    image(brick3Img, 1503, 330, 450, 150);

    let isHoveringDoor3 = (mouseX > 1578 && mouseX < 1578 + 300 && mouseY > 55 && mouseY < 55 + 275);
    if (isHoveringDoor3) {
      door3Scale = lerp(door3Scale, 1.05, 0.2);
      anyButtonHovered = true;
      if (!soundPlayedDoor3) { hoverSound.play(); soundPlayedDoor3 = true; }
    } else {
      door3Scale = lerp(door3Scale, 1.0, 0.2);
      soundPlayedDoor3 = false;
    }

    push();
    translate(1578 + 300 / 2, 55 + 275 / 2);
    scale(door3Scale);
    imageMode(CENTER);
    if (isHoveringDoor3) {
      drawingContext.shadowBlur = 15;
      drawingContext.shadowColor = 'white';
    }
    image(doorImg, 0, 0, 300, 275);
    pop();
    drawingContext.shadowBlur = 0;
    imageMode(CORNER);

    if (millis() - page9StartTime >= 1000) {
      if (!ghostDropped9) {
        ghost.x = 75;
        ghost.y = 0; 
        ghost.vy = 0;
        ghost.groundY = 630;
        ghostDropped9 = true;
      }
      updateGhost();
      image(ghostImg, ghost.x, ghost.y, ghost.w, ghost.h);
    }
  } else if (trangHienTai === 10) {
    image(bgImg10, 0, 0, 1920, 1080);
    input.hide();
    image(progressImgCurrent, 38, 34, 921.5, 92);
    
    if (!chest10Clicked) {
      let isChest10Hovered = (mouseX > chest10.x && mouseX < chest10.x + chest10.w && mouseY > chest10.y && mouseY < chest10.y + chest10.h);
      if (isChest10Hovered) anyButtonHovered = true;
      let targetChest10Scale = isChest10Hovered ? 1.05 : 1.0;
      chest10.scale = lerp(chest10.scale, targetChest10Scale, 0.2);

      push();
      translate(chest10.x + chest10.w / 2, chest10.y + chest10.h / 2);
      scale(chest10.scale);
      imageMode(CENTER);
      if (isChest10Hovered) {
        drawingContext.shadowBlur = 15;
        drawingContext.shadowColor = 'white';
      }
      image(chestImg, 0, 0, chest10.w, chest10.h);
      pop();
      drawingContext.shadowBlur = 0;
      imageMode(CORNER);
    } else {
      if (millis() - progressScaleTimer10 < 1000) {
        let progress = (millis() - progressScaleTimer10) / 1000;
        progressScale = 1.0 + 0.1 * (1 - abs(2 * progress - 1));
      } else {
        progressScale = 1.0;
        if (!door10.visible && millis() - progressScaleTimer10 >= 1000) {
          door10.visible = true;
          door10Timer = millis();
        }
      }

      push();
      translate(38 + 921.5 / 2, 34 + 92 / 2);
      scale(progressScale);
      imageMode(CENTER);
      image(progresssssImg, 0, 0, 921.5, 92);
      pop();
      imageMode(CORNER);
    }

    if (door10.visible) {
      door10.alpha = min(door10.alpha + (255 / frameRate()), 255); 
      
      let isHoveringDoor10 = (mouseX > door10.x && mouseX < door10.x + door10.w && mouseY > door10.y && mouseY < door10.y + door10.h);
      if (isHoveringDoor10) {
        door10.scale = lerp(door10.scale, 1.05, 0.2);
        anyButtonHovered = true;
        if (!soundPlayedDoor10) { hoverSound.play(); soundPlayedDoor10 = true; }
      } else {
        door10.scale = lerp(door10.scale, 1.0, 0.2);
        soundPlayedDoor10 = false;
      }

      push();
      tint(255, door10.alpha);
      translate(door10.x + door10.w / 2, door10.y + door10.h / 2);
      scale(door10.scale);
      imageMode(CENTER);
      if (isHoveringDoor10) {
        drawingContext.shadowBlur = 15;
        drawingContext.shadowColor = 'white';
      }
      image(doorImg, 0, 0, door10.w, door10.h);
      pop();
      drawingContext.shadowBlur = 0;
      imageMode(CORNER);
    }
    
    if (millis() - page10StartTime >= 1000) {
      if (!ghostDropped10) {
        ghost.x = 75;
        ghost.y = 0; 
        ghost.vy = 0;
        ghost.groundY = 454;
        ghostDropped10 = true;
      }
      updateGhost();
      image(ghostImg, ghost.x, ghost.y, ghost.w, ghost.h);
    }
  } else if (trangHienTai === 11) {
    image(bgImg11, 0, 0, 1920, 1080);
    input.hide();
    
    if (millis() - page11StartTime >= 1000 && !replayButtonVisible) {
      replayButtonVisible = true;
    }
    
    if (replayButtonVisible) {
      let isHoveringReplay = (mouseX > 805 && mouseX < 805 + 309 && mouseY > 805 && mouseY < 805 + 309);
      if (isHoveringReplay) {
        replayScale = lerp(replayScale, 1.05, 0.2);
        anyButtonHovered = true;
        if (!soundPlayedReplay) { hoverSound.play(); soundPlayedReplay = true; }
        drawingContext.shadowBlur = 15;
        drawingContext.shadowColor = 'white';
      } else {
        replayScale = lerp(replayScale, 1.0, 0.2);
        soundPlayedReplay = false;
        drawingContext.shadowBlur = 0;
      }
      
      push();
      translate(805 + 309 / 2, 805 + 309 / 2);
      scale(replayScale);
      imageMode(CENTER);
      image(replayImg, 0, 0, 309, 309);
      pop();
      imageMode(CORNER);
    }
  } else if (trangHienTai === 1 || trangHienTai === 4 || trangHienTai === 5) {
    if (trangHienTai === 1) image(bgImg1, 0, 0, 1920, 1080);
    else if (trangHienTai === 4) image(bgImg4, 0, 0, 1920, 1080);
    else image(bgImg5, 0, 0, 1920, 1080);
    input.hide(); 
    let blockInteraction = (showProPanel || showCoPanel);
    if (trangHienTai !== 5) {
        if (!blockInteraction && mouseX > logoX && mouseX < logoX + logoW && mouseY > logoY && mouseY < logoY + logoH) {
          targetScaleLogo = 1.1; anyButtonHovered = true; if (!soundPlayedLogo) { hoverSound.play(); soundPlayedLogo = true; }
        } else { targetScaleLogo = 1.0; soundPlayedLogo = false; }
        currentScaleLogo = lerp(currentScaleLogo, targetScaleLogo, 0.2);
        push(); translate(logoX + logoW / 2, logoY + logoH / 2); scale(currentScaleLogo); imageMode(CENTER); image(logoImg, 0, 0, logoW, logoH); pop();
        if (!blockInteraction && mouseX > profX && mouseX < profX + profW && mouseY > profY && mouseY < profY + profH) {
          anyButtonHovered = true; if (!soundPlayedProfile) { hoverSound.play(); soundPlayedProfile = true; } image(profileHoverImg, profX, profY, profW, profH);
        } else { soundPlayedProfile = false; image(profileImg, profX, profY, profW, profH); }
        if (!blockInteraction && mouseX > dashX && mouseX < dashX + dashW && mouseY > dashY && mouseY < dashY + dashH) {
          anyButtonHovered = true; if (!soundPlayedDash) { hoverSound.play(); soundPlayedDash = true; } image(dashHoverImg, dashX, dashY, dashW, dashH);
        } else { soundPlayedDash = false; image(dashImg, dashX, dashY, dashW, dashH); }
        if (!blockInteraction && mouseX > courseX && mouseX < courseX + courseW && mouseY > courseY && mouseY < courseY + courseH) {
          anyButtonHovered = true; if (!soundPlayedCourse) { hoverSound.play(); soundPlayedCourse = true; } image(courseHoverImg, courseX, courseY, courseW, courseH);
        } else { soundPlayedCourse = false; image(courseImg, courseX, courseY, courseW, courseH); }
        if (!blockInteraction && mouseX > arrowX && mouseX < arrowX + arrowW && mouseY > arrowY && mouseY < arrowY + arrowH) {
          anyButtonHovered = true; if (!soundPlayedArrow) { hoverSound.play(); soundPlayedArrow = true; } image(arrowHoverImg, arrowX, arrowY, arrowW, arrowH);
        } else { soundPlayedArrow = false; image(arrowImg, arrowX, arrowY, arrowW, arrowH); }
    }
    if (trangHienTai === 4 && !blockInteraction) {
      if (mouseX > a3X && mouseX < a3X + a3W && mouseY > a3Y && mouseY < a3Y + a3H) {
        targetScaleA3 = 1.05; anyButtonHovered = true; if (!soundPlayedA3) { hoverSound.play(); soundPlayedA3 = true; }
      } else { targetScaleA3 = 1.0; soundPlayedA3 = false; }
      currentScaleA3 = lerp(currentScaleA3, targetScaleA3, 0.2);
      push(); translate(a3X + a3W / 2, a3Y + a3H / 2); scale(currentScaleA3); imageMode(CENTER); image(a3Img, 0, 0, a3W, a3H); pop();
    }
    if (trangHienTai === 5) {
      let timeElapsed = (millis() - startTime) / 1000;
      if (timeElapsed < 3) image(progressImg, progX, progY, progW, progH);
      else if (timeElapsed < 5) image(progress1Img, progX, progY, progW, progH);
      else if (timeElapsed < 7) image(progress2Img, progX, progY, progW, progH); 
      else {
        image(progress3Img, progX, progY, progW, progH);
        let isHoveringPlay = (mouseX > playX && mouseX < playX + playW && mouseY > playY && mouseY < playY + playH);
        if (isHoveringPlay) {
          targetScalePlay = 1.1; anyButtonHovered = true; if (!soundPlayedPlay) { hoverSound.play(); soundPlayedPlay = true; }
          drawingContext.shadowBlur = 20; drawingContext.shadowColor = '#B0F2E6';
        } else { targetScalePlay = 1.0; soundPlayedPlay = false; }
        currentScalePlay = lerp(currentScalePlay, targetScalePlay, 0.2);
        push(); translate(playX + playW / 2, playY + playH / 2); scale(currentScalePlay); imageMode(CENTER); image(playImg, 0, 0, playW, playH); pop();
        drawingContext.shadowBlur = 0;
      }
    }
    if (trangHienTai === 1) {
      if (!blockInteraction && mouseX > courdashX && mouseX < courdashX + courdashW && mouseY > courdashY && mouseY < courdashY + courdashH) {
        targetScaleCourdash = 1.1; anyButtonHovered = true; if (!soundPlayedCourdash) { hoverSound.play(); soundPlayedCourdash = true; }
      } else { targetScaleCourdash = 1.0; soundPlayedCourdash = false; }
      currentScaleCourdash = lerp(currentScaleCourdash, targetScaleCourdash, 0.2);
      push(); translate(courdashX + courdashW / 2, courdashY + courdashH / 2); scale(currentScaleCourdash); imageMode(CENTER); image(courdashImg, 0, 0, courdashW, courdashH); pop();
    }
    
    proTargetAlpha = showProPanel ? 255 : 0; proAlpha = lerp(proAlpha, proTargetAlpha, 0.15); 
    if (proAlpha > 1) {
      push(); tint(255, proAlpha); image(proImg, panelX, panelY, panelW, panelH);
      if (proAlpha > 200) {
        if (mouseX > logoutX && mouseX < logoutX + logoutW && mouseY > logoutY && mouseY < logoutY + logoutH) {
          targetScaleLogout = 1.1; anyButtonHovered = true; if (!soundPlayedLogout) { hoverSound.play(); soundPlayedLogout = true; }
        } else { targetScaleLogout = 1.0; soundPlayedLogout = false; }
        currentScaleLogout = lerp(currentScaleLogout, targetScaleLogout, 0.2);
        push(); translate(logoutX + logoutW / 2, logoutY + logoutH / 2); scale(currentScaleLogout); imageMode(CENTER); image(logoutImg, 0, 0, logoutW, logoutH); pop();
        
        if (mouseX > backBtnX && mouseX < backBtnX + backBtnW && mouseY > backBtnY && mouseY < backBtnY + backBtnH) {
          anyButtonHovered = true; if (!soundPlayedBackBtn) { hoverSound.play(); soundPlayedBackBtn = true; }
          push(); drawingContext.shadowBlur = 10; drawingContext.shadowColor = 'white';
          image(backBtnImg, backBtnX, backBtnY, backBtnW, backBtnH); pop();
        } else { soundPlayedBackBtn = false; image(backBtnImg, backBtnX, backBtnY, backBtnW, backBtnH); }

        if (mouseX > coursesBtnX && mouseX < coursesBtnX + coursesBtnW && mouseY > coursesBtnY && mouseY < coursesBtnY + coursesBtnH) {
          anyButtonHovered = true; if (!soundPlayedCoursesBtn) { hoverSound.play(); soundPlayedCoursesBtn = true; }
          push(); drawingContext.shadowBlur = 10; drawingContext.shadowColor = 'white';
          image(coursesBtnImg, coursesBtnX, coursesBtnY, coursesBtnW, coursesBtnH); pop();
        } else { soundPlayedCoursesBtn = false; image(coursesBtnImg, coursesBtnX, coursesBtnY, coursesBtnW, coursesBtnH); }

        if (mouseX > exitBtnX && mouseX < exitBtnX + exitBtnW && mouseY > exitBtnY && mouseY < exitBtnY + exitBtnH) {
          anyButtonHovered = true; if (!soundPlayedExitBtn) { hoverSound.play(); soundPlayedExitBtn = true; }
          push(); drawingContext.shadowBlur = 10; drawingContext.shadowColor = 'white';
          image(exitBtnImg, exitBtnX, exitBtnY, exitBtnW, exitBtnH); pop();
        } else { soundPlayedExitBtn = false; image(exitBtnImg, exitBtnX, exitBtnY, exitBtnW, exitBtnH); }
      }
      pop();
    }
    
    coTargetAlpha = showCoPanel ? 255 : 0; coAlpha = lerp(coAlpha, coTargetAlpha, 0.15);
    if (coAlpha > 1) {
      push(); tint(255, coAlpha); image(coImg, panelX, panelY, panelW, panelH);
      if (mouseX > interactX && mouseX < interactX + interactW && mouseY > interactY && mouseY < interactY + interactH) {
        targetScaleInteract = 1.1; anyButtonHovered = true; if (!soundPlayedInteract) { hoverSound.play(); soundPlayedInteract = true; }
      } else { targetScaleInteract = 1.0; soundPlayedInteract = false; }
      currentScaleInteract = lerp(currentScaleInteract, targetScaleInteract, 0.2);
      push(); translate(interactX + interactW / 2, interactY + interactH / 2); scale(currentScaleInteract); imageMode(CENTER); image(interactImg, 0, 0, interactW, interactH); pop();
      pop();
    }
  }
  
  if (mouseX > shutX && mouseX < shutX + shutW && mouseY > shutY && mouseY < shutY + shutH) {
    if ((trangHienTai !== 7 && trangHienTai !== 8 && trangHienTai !== 9 && trangHienTai !== 10) || keyClicked || key8Clicked) {
      targetScaleShut = 1.1; anyButtonHovered = true; if (!soundPlayedShut) { hoverSound.play(); soundPlayedShut = true; }
    }
  } else { targetScaleShut = 1.0; soundPlayedShut = false; }
  currentScaleShut = lerp(currentScaleShut, targetScaleShut, 0.2);
  push(); translate(shutX + shutW / 2, shutY + shutH / 2); scale(currentScaleShut); imageMode(CENTER); image(shutdownImg, 0, 0, shutW, shutH); pop();

  let isHoveringRobot = (mouseX > robotX && mouseX < robotX + robotW && mouseY > robotY && mouseY < robotY + robotH);
  if (isHoveringRobot) {
    targetScaleRobot = 1.05; anyButtonHovered = true;
    if (!soundPlayedRobot) { hoverSound.play(); soundPlayedRobot = true; }
  } else { targetScaleRobot = 1.0; soundPlayedRobot = false; }
  currentScaleRobot = lerp(currentScaleRobot, targetScaleRobot, 0.2);
  
  push(); translate(robotX + robotW / 2, robotY + robotH / 2); scale(currentScaleRobot); imageMode(CENTER); image(robotImg, 0, 0, robotW, robotH); pop();
  imageMode(CORNER); 

  if (showChatPanel) {
    image(chatImg, chatX, chatY, chatW, chatH);
    image(chatboxImg, cbX, cbY, cbW, cbH);

    push();
    textSize(13); textAlign(LEFT, CENTER); fill(0);
    let margin = cbW * 0.1; 
    let maxTextWidth = cbW - (margin * 2);
    let txtToDisplay = inputText;
    while (textWidth(txtToDisplay) > maxTextWidth) { txtToDisplay = txtToDisplay.substring(1); }
    text(txtToDisplay, cbX + margin, cbY + cbH / 2);
    pop();

    if (submittedText !== "") {
      image(chatbox1Img, cb1X, cb1Y, cb1W, cb1H);
      push();
      textSize(12); textAlign(LEFT, CENTER); fill(0);
      let m1 = cb1W * 0.1; let mw1 = cb1W - (m1 + cb1W * 0.05);
      let disp1 = submittedText;
      if (textWidth(disp1) > mw1) {
        while (textWidth(disp1 + "...") > mw1 && disp1.length > 0) { disp1 = disp1.substring(0, disp1.length - 1); }
        disp1 += "...";
      }
      text(disp1, cb1X + m1, cb1Y + cb1H / 2);
      pop();
    }

    if (aiResponseText !== "") {
      image(chatbox2Img, cb2X, cb2Y, cb2W, cb2H);
      push();
      textSize(11); 
      textAlign(LEFT, CENTER); fill(0);
      
      let paddingLeft = cb2W * 0.03;  
      let paddingRight = cb2W * 0.03; 
      let renderTextW = cb2W - (paddingLeft + paddingRight);
      
      while (textWidth(aiResponseText) > renderTextW && textStyle() > 8) {
        textSize(textSize() - 0.5);
      }
      text(aiResponseText, cb2X + paddingLeft, cb2Y + cb2H / 2);
      pop();
    }

    let isHoveringXBtn = (mouseX > xBtnX && mouseX < xBtnX + xBtnW && mouseY > xBtnY && mouseY < xBtnY + xBtnH);
    if (isHoveringXBtn) {
      anyButtonHovered = true;
      if (!soundPlayedXBtn) { hoverSound.play(); soundPlayedXBtn = true; }
      push(); drawingContext.shadowBlur = 15; drawingContext.shadowColor = 'white'; image(xImg, xBtnX, xBtnY, xBtnW, xBtnH); pop();
    } else { soundPlayedXBtn = false; image(xImg, xBtnX, xBtnY, xBtnW, xBtnH); }

    let isHoveringSend = (mouseX > sendX && mouseX < sendX + sendW && mouseY > sendY && mouseY < sendY + sendH);
    if (isHoveringSend) {
      targetScaleSend = 1.05; anyButtonHovered = true;
      if (!soundPlayedSendBtn) { hoverSound.play(); soundPlayedSendBtn = true; }
    } else { targetScaleSend = 1.0; soundPlayedSendBtn = false; }
    currentScaleSend = lerp(currentScaleSend, targetScaleSend, 0.2);

    push(); translate(sendX + sendW / 2, sendY + sendH / 2); scale(currentScaleSend); imageMode(CENTER); image(sendImg, 0, 0, sendW, sendH); pop();
    imageMode(CORNER);
  }

  let isHoveringSound = (mouseX > soundX && mouseX < soundX + soundW && mouseY > soundY && mouseY < soundY + soundH);
  if (isHoveringSound) {
    soundScaleTarget = 1.05;
    anyButtonHovered = true;
    if (!soundPlayedSoundBtn) {
      hoverSound.play();
      soundPlayedSoundBtn = true;
    }
  } else {
    soundScaleTarget = 1.0;
    soundPlayedSoundBtn = false;
  }
  soundScale = lerp(soundScale, soundScaleTarget, 0.2);

  push();
  translate(soundX + soundW / 2, soundY + soundH / 2);
  scale(soundScale);
  imageMode(CENTER);
  if (isHoveringSound) {
    drawingContext.shadowBlur = 15;
    drawingContext.shadowColor = 'white';
  }
  let currentSoundImg = isMuted ? sound1Img : soundImg;
  image(currentSoundImg, 0, 0, soundW, soundH);
  pop();
  drawingContext.shadowBlur = 0;
  imageMode(CORNER);

  if (anyButtonHovered) {
    image(mouse1Img, mouseX, mouseY, 40, 40); 
  } else {
    image(mouseImg, mouseX, mouseY, 40, 40);  
  }

  // ==========================================
  // THÊM: CHỤP ẢNH TRẠNG THÁI (SNAPSHOT) ĐỂ LƯU VÀO REPLAY CUTSCENE
  // ==========================================
  if (!isReplaying && (trangHienTai >= 7 && trangHienTai <= 10)) {
    gameHistory.push({
      trang: trangHienTai,
      gx: ghost.x, gy: ghost.y,
      progImg: progressImgCurrent, progScale: progressScale,
      c1: {x: cloud1.x, y: cloud1.y, active: cloud1.active},
      c2: {x: cloud2.x, y: cloud2.y, active: cloud2.active},
      c3: {x: cloud3.x, y: cloud3.y, active: cloud3.active},
      c1_9: {x: cloud1_p9.x, y: cloud1_p9.y, active: cloud1_p9.active},
      c2_9: {x: cloud2_p9.x, y: cloud2_p9.y, active: cloud2_p9.active},
      c3_9: {x: cloud3_p9.x, y: cloud3_p9.y, active: cloud3_p9.active},
      blocks: blocks.map(b => ({x: b.x, y: b.y, a: b.alpha, ex: b.exists, type: b.type})),
      chest: {x: chest.x, y: chest.y, s: chest.scale, c: chest.clicked},
      keyClicked: keyClicked, keyScale: keyScale,
      tp: {y: taskPanel.yCurrent},
      numBtns: numberButtons.map(n => ({x: n.x, y: n.y, ic: n.isCorrect, id: n.id})),
      mgActive: miniGameActive,
      door: {v: doorVisible, a: doorAlpha, s: doorScale},
      k8: {c: key8Clicked, s: key8Scale},
      d1: {c: door1Clicked, s: door1Scale},
      ch8: {s: chest8.scale, c: chest8.clicked},
      tp8: {y: taskPanel8.yCurrent},
      hum: {a: human.alpha, v: human.visible},
      era: {x: eraser.currentX, y: eraser.currentY, s: eraser.scale, v: eraser.visible},
      d2: {v: door2Visible, s: door2Scale},
      d3: {s: door3Scale},
      ch10: {s: chest10.scale, c: chest10Clicked},
      d10: {v: door10.visible, a: door10.alpha, s: door10.scale}
    });
  }
}

function keyTyped() {
  if (showChatPanel) {
    if (key !== 'Enter' && key !== 'Backspace') { inputText += key; }
  }
}

function keyPressed() {
  if (showChatPanel) {
    if (keyCode === BACKSPACE) { inputText = inputText.slice(0, -1); } 
    else if (keyCode === ENTER) { processChatSubmission(); }
  }
}

function processChatSubmission() {
  if (inputText.trim() !== "") {
    submittedText = inputText; 
    let checkText = inputText.toLowerCase().trim();
    inputText = ""; 

    if (checkText.includes("how to play this game") || checkText.includes("how to play")) {
      aiResponseText = "Click on course, explore and enjoy."; 
    } else if (checkText.includes("xin chào") || checkText.includes("hello") || checkText.includes("hi")) {
      aiResponseText = "Hello there! How can I assist you today?"; 
    } else if (checkText.includes("your name") || checkText.includes("who are you") || checkText.includes("tên gì")) {
      aiResponseText = "I am your smart virtual learning assistant agent."; 
    } else if (checkText.includes("weather") || checkText.includes("thời tiết")) {
      aiResponseText = "The weather looks absolutely wonderful for learning today."; 
    } else if (checkText.includes("help") || checkText.includes("làm được gì")) {
      aiResponseText = "I can answer questions and guide your study."; 
    } else if (checkText.includes("thanks") || checkText.includes("thank you")) {
      aiResponseText = "You are very welcome! Keep up the good work."; 
    } else if (checkText.includes("bye") || checkText.includes("goodbye")) {
      aiResponseText = "Goodbye! Have a truly wonderful and productive day."; 
    } else {
      aiResponseText = "Thank you for the data! Processing your request."; 
    }
  }
}

function mousePressed() {
  userStartAudio();
  
  let isHoveringSound = (mouseX > soundX && mouseX < soundX + soundW && mouseY > soundY && mouseY < soundY + soundH);
  if (isHoveringSound) {
    isMuted = !isMuted;
    toggleMuteAll(isMuted);
    return;
  }

  if (!bgm.isPlaying() && trangHienTai !== 7 && trangHienTai !== 8 && trangHienTai !== 9 && trangHienTai !== 10 && !isMuted) bgm.loop();
  
  let isHoveringRobot = (mouseX > robotX && mouseX < robotX + robotW && mouseY > robotY && mouseY < robotY + robotH);
  if (isHoveringRobot) { stopSound.play(); showChatPanel = true; return; }

  if (showChatPanel) {
    let isHoveringXBtn = (mouseX > xBtnX && mouseX < xBtnX + xBtnW && mouseY > xBtnY && mouseY < xBtnY + xBtnH);
    if (isHoveringXBtn) { stopSound.play(); showChatPanel = false; return; }

    let isHoveringSend = (mouseX > sendX && mouseX < sendX + sendW && mouseY > sendY && mouseY < sendY + sendH);
    if (isHoveringSend) { stopSound.play(); processChatSubmission(); return; }
  }

  if (trangHienTai === 8) {
    if (!key8Clicked && isGhostTouchingKey) {
      let isHoveringKey8 = (mouseX > 349 && mouseX < 349 + 150 && mouseY > 630 && mouseY < 630 + 150);
      if (isHoveringKey8) {
        keySound.play();
        key8Clicked = true;
        if (moveSound.isPlaying()) moveSound.stop();
        return;
      }
    }

    if (key8Clicked && !door1Clicked) {
      let isHoveringDoor1 = (mouseX > 900 && mouseX < 900 + 30 && mouseY > 505 && mouseY < 505 + 275);
      if (isHoveringDoor1) {
        dooropenSound.play();
        door1Clicked = true;
        return;
      }
    }

    let isChest8Hovered = (mouseX > chest8.x && mouseX < chest8.x + chest8.w && mouseY > chest8.y && mouseY < chest8.y + chest8.h);
    if (isChest8Hovered && !chest8.clicked) {
      chestSound.play();
      chest8.clicked = true;
      return;
    }

    if (chest8.clicked && eraser.visible) {
      let isHoveringEraser = (mouseX > eraser.currentX && mouseX < eraser.currentX + eraser.w && mouseY > eraser.currentY && mouseY < eraser.currentY + eraser.h);
      if (isHoveringEraser) {
        eraser.isDragging = true;
        return;
      }
    }

    if (door2Visible) {
      let isHoveringDoor2 = (mouseX > 1620 && mouseX < 1620 + 300 && mouseY > 505 && mouseY < 505 + 275);
      if (isHoveringDoor2) {
        gamestartSound.play();
        trangHienTai = 9;
        page9StartTime = millis();
        if (moveSound.isPlaying()) moveSound.stop();
        return;
      }
    }
  }

  if (trangHienTai === 9) {
    let isHoveringDoor3 = (mouseX > 1578 && mouseX < 1578 + 300 && mouseY > 55 && mouseY < 55 + 275);
    if (isHoveringDoor3) {
      gamestartSound.play();
      trangHienTai = 10;
      page10StartTime = millis(); 
      if (moveSound.isPlaying()) moveSound.stop();
      return;
    }
  }

  if (trangHienTai === 10) {
    if (!chest10Clicked) {
      let isChest10Hovered = (mouseX > chest10.x && mouseX < chest10.x + chest10.w && mouseY > chest10.y && mouseY < chest10.y + chest10.h);
      if (isChest10Hovered) {
        chestSound.play();
        chest10Clicked = true;
        progressScaleTimer10 = millis(); 
        return;
      }
    }
    
    if (door10.visible) {
      let isHoveringDoor10 = (mouseX > door10.x && mouseX < door10.x + door10.w && mouseY > door10.y && mouseY < door10.y + door10.h);
      if (isHoveringDoor10) {
        gamestartSound.play();
        trangHienTai = 11;
        page11StartTime = millis(); 
        if (moveSound.isPlaying()) moveSound.stop();
        return;
      }
    }
  }

  // ==========================================
  // THÊM: SỰ KIỆN CLICK CHUỘT TRÊN NÚT REPLAY TRANG 11
  // ==========================================
  if (trangHienTai === 11 && replayButtonVisible) {
    let isHoveringReplay = (mouseX > 805 && mouseX < 805 + 309 && mouseY > 805 && mouseY < 805 + 309);
    if (isHoveringReplay) {
      clickSound.play();
      isReplaying = true; // Kích hoạt mode chiếu cutscene
      replayCursor = 0;   // Đưa trỏ vị trí frame về 0
      return;
    }
  }

  if (trangHienTai === 7 && doorVisible) {
    let isHoveringDoor = (mouseX > 1575 && mouseX < 1575 + 300 && mouseY > 505 && mouseY < 505 + 275);
    if (isHoveringDoor) {
      gamestartSound.play();
      trangHienTai = 8;
      page8StartTime = millis(); 
      if (moveSound.isPlaying()) moveSound.stop();
      return;
    }
  }

  if (trangHienTai === 7 && chest.clicked && miniGameActive) {
    if (abs(taskPanel.yCurrent - taskPanel.yTarget) < 50) {
      for (let btn of numberButtons) {
        let renderX = taskPanel.x + btn.x;
        let renderY = taskPanel.yCurrent + btn.y;

        if (mouseX > renderX && mouseX < renderX + btn.w && mouseY > renderY && mouseY < renderY + btn.h) {
          if (btn.id === nextExpectedNumber && !btn.isCorrect) {
            clickSound.play();
            btn.isCorrect = true;
            nextExpectedNumber++; 

            if (nextExpectedNumber > 9 && !victoryTriggered) {
              victoryTriggered = true;
              victorySound.setVolume(2.0); 
              victorySound.play();

              setTimeout(() => {
                miniGameActive = false; 
              }, 500);

              setTimeout(() => {
                taskPanel.yTarget = 1200; 
              }, 2000);

              setTimeout(() => {
                progressImgCurrent = progresssImg; 
                progressScaleTimer = millis(); 
              }, 3000);
            }
          }
          return; 
        }
      }
    }
  }

  if (trangHienTai === 7 && !keyClicked && isGhostTouchingKey) {
    let isHoveringKey = (mouseX > 349 && mouseX < 349 + 150 && mouseY > 630 && mouseY < 630 + 150);
    if (isHoveringKey) { keySound.play(); keyClicked = true; if (moveSound.isPlaying()) moveSound.stop(); return; }
  }

  if (trangHienTai === 7 && keyClicked && !chest.clicked) {
    let isChestHovered = (mouseX > chest.x && mouseX < chest.x + chest.w && mouseY > chest.y && mouseY < chest.y + chest.h);
    if (isChestHovered) { chestSound.play(); chest.clicked = true; return; }
  }

  if (trangHienTai === 7 && !keyClicked) return;
  if (trangHienTai === 8) return; 
  if (trangHienTai === 9) return;
  if (trangHienTai === 10) return;
  if (trangHienTai === 11) return;

  if (trangHienTai === 5 && mouseX > playX && mouseX < playX + playW && mouseY > playY && mouseY < playY + playH) {
    gamestartSound.play(); trangHienTai = 6;
    setTimeout(() => { trangHienTai = 7; if(bgm.isPlaying()) bgm.stop(); if(!isMuted) bgmm.loop(); }, 3000);
  }
  
  if (showProPanel && proAlpha > 200) {
    if (mouseX > logoutX && mouseX < logoutX + logoutW && mouseY > logoutY && mouseY < logoutY + logoutH) {
      clickSound.play(); trangHienTai = 0; showProPanel = false; return;
    }
    if (mouseX > backBtnX && mouseX < backBtnX + backBtnW && mouseY > backBtnY && mouseY < backBtnY + backBtnH) {
      clickSound.play(); trangHienTai = 0; showProPanel = false; return;
    }
    if (mouseX > coursesBtnX && mouseX < coursesBtnX + coursesBtnW && mouseY > coursesBtnY && mouseY < coursesBtnY + coursesBtnH) {
      clickSound.play(); trangHienTai = 4; showProPanel = false; return;
    }
    if (mouseX > exitBtnX && mouseX < exitBtnX + exitBtnW && mouseY > exitBtnY && mouseY < exitBtnY + exitBtnH) {
      clickSound.play(); window.close(); return;
    }
  }

  if (trangHienTai === 0 && mouseX > btnX && mouseX < btnX + btnW && mouseY > btnY && mouseY < btnY + btnH) { clickSound.play(); trangHienTai = 1; }
  if (trangHienTai === 4 && mouseX > a3X && mouseX < a3X + a3W && mouseY > a3Y && mouseY < a3Y + a3H) { clickSound.play(); trangHienTai = 5; startTime = millis(); }
  if ((trangHienTai === 1 || trangHienTai === 4) && !showProPanel && !showCoPanel && mouseX > logoX && mouseX < logoX + logoW && mouseY > logoY && mouseY < logoY + logoH) { clickSound.play(); trangHienTai = 0; }
  if (trangHienTai !== 5) {
    if (mouseX > profX && mouseX < profX + profW && mouseY > profY && mouseY < profY + profH) { clickSound.play(); showProPanel = !showProPanel; if (showProPanel) showCoPanel = false; }
    if (mouseX > courseX && mouseX < courseX + courseW && mouseY > courseY && mouseY < courseY + courseH) { clickSound.play(); showCoPanel = !showCoPanel; if (showProPanel) showProPanel = false; }
    if (mouseX > dashX && mouseX < dashX + dashW && mouseY > dashY && mouseY < dashY + dashH) { clickSound.play(); trangHienTai = 1; showProPanel = false; showCoPanel = false; }
    if (mouseX > arrowX && mouseX < arrowX + arrowW && mouseY > arrowY && mouseY < arrowY + arrowH) { clickSound.play(); trangHienTai = 0; showProPanel = false; showCoPanel = false; }
  }
  if (showCoPanel && coAlpha > 200 && mouseX > interactX && mouseX < interactX + interactW && mouseY > interactY && mouseY < interactY + interactH) { clickSound.play(); trangHienTai = 4; showCoPanel = false; }
  if (trangHienTai === 1 && mouseX > courdashX && mouseX < courdashX + courdashW && mouseY > courdashY && mouseY < courdashY + courdashH) { clickSound.play(); trangHienTai = 4; showCoPanel = false; }
  if (mouseX > shutX && mouseX < shutX + shutW && mouseY > shutY && mouseY < shutY + shutH) { window.close(); }
}

function mouseReleased() {
  if (trangHienTai === 8) {
    eraser.isDragging = false;
  }
}

// ==========================================
// THÊM: HÀM VẼ LẠI TOÀN BỘ KHUNG HÌNH (DRAW REPLAY CUTSCENE)
// ==========================================
function drawReplayFrame(snap) {
  background(0);
  
  if (snap.trang === 7) image(bgImg7, 0, 0, 1920, 1080);
  else if (snap.trang === 8) image(bgImg8, 0, 0, 1920, 1080);
  else if (snap.trang === 9) image(bgImg9, 0, 0, 1920, 1080);
  else if (snap.trang === 10) image(bgImg10, 0, 0, 1920, 1080);

  if (snap.trang === 7) {
    if(snap.c1.active) image(cloudImg, snap.c1.x, snap.c1.y, 150, 150);
    if(snap.c2.active) image(cloudImg, snap.c2.x, snap.c2.y, 150, 150);
    if(snap.c3.active) image(cloudImg, snap.c3.x, snap.c3.y, 150, 150);
  } else if (snap.trang === 9) {
    if(snap.c1_9.active) image(cloudImg, snap.c1_9.x, snap.c1_9.y, 150, 150);
    if(snap.c2_9.active) image(cloudImg, snap.c2_9.x, snap.c2_9.y, 150, 150);
    if(snap.c3_9.active) image(cloudImg, snap.c3_9.x, snap.c3_9.y, 150, 150);
  }

  push();
  translate(38 + 921.5 / 2, 34 + 92 / 2);
  scale(snap.progScale);
  imageMode(CENTER);
  image(snap.progImg, 0, 0, 921.5, 92);
  pop();

  if (snap.trang === 7) {
    for (let b of snap.blocks) {
      if (b.ex && b.a > 0) {
        push(); tint(255, b.a); 
        image(b.type === 'wood' ? woodImg : leafImg, b.x, b.y, 150, 150); 
        pop();
      }
    }
    push(); translate(snap.chest.x + 75, snap.chest.y + 75); scale(snap.chest.s); imageMode(CENTER);
    image(chestImg, 0, 0, 150, 150); pop();
    
    if (!snap.keyClicked) {
      push(); translate(349 + 75, 630 + 75); scale(snap.keyScale); imageMode(CENTER);
      image(keyImg, 0, 0, 150, 150); pop();
    }
    
    if (snap.chest.c) {
      image(taskImg, 207, snap.tp.y, 1536, 1024);
      if (snap.mgActive && abs(snap.tp.y - 28) < 50) {
        for (let btn of snap.numBtns) {
           let renderX = 207 + btn.x; let renderY = snap.tp.y + btn.y;
           image(btn.ic ? recaltImg : recImg, renderX, renderY, 100, 100);
           if (numImgs[btn.id]) image(numImgs[btn.id], renderX + 25, renderY + 25, 50, 50);
        }
      }
    }
    if (snap.door.v) {
      push(); tint(255, snap.door.a); translate(1575 + 150, 505 + 137.5); scale(snap.door.s); imageMode(CENTER);
      image(doorImg, 0, 0, 300, 275); pop();
    }
  }

  else if (snap.trang === 8) {
    if (!snap.k8.c) {
      push(); translate(349 + 75, 630 + 75); scale(snap.k8.s); imageMode(CENTER); image(keyImg, 0, 0, 150, 150); pop();
    }
    if (!snap.d1.c) {
      push(); translate(900 + 15, 505 + 137.5); scale(snap.d1.s); imageMode(CENTER); image(door1Img, 0, 0, 30, 275); pop();
    } else {
      image(doorImg, 825, 505, 300, 275);
    }
    push(); translate(chest8.x + 75, chest8.y + 75); scale(snap.ch8.s); imageMode(CENTER); image(chestImg, 0, 0, 150, 150); pop();
    
    if (snap.ch8.c) {
      image(taskImg, 207, snap.tp8.y, 1536, 1024);
      if (abs(snap.tp8.y - 28) < 50) {
         if (snap.hum.v) {
            push(); tint(255, snap.hum.a); image(humanImg, human.x, human.y, human.w, human.h); pop();
         }
         if (snap.era.v) {
            push(); translate(snap.era.x + eraser.w/2, snap.era.y + eraser.h/2); scale(snap.era.s); imageMode(CENTER); image(eraserImg, 0, 0, eraser.w, eraser.h); pop();
         }
      }
    }
    if (snap.d2.v) {
      push(); translate(1620 + 150, 505 + 137.5); scale(snap.d2.s); imageMode(CENTER); image(door2Img, 0, 0, 300, 275); pop();
    }
  }

  else if (snap.trang === 9) {
    image(brickImg, 300, 630, 150, 150);
    image(brick2Img, 600, 480, 300, 150);
    image(brick4Img, 1050, 330, 450, 150);
    image(brick3Img, 1503, 330, 450, 150);
    push(); translate(1578 + 150, 55 + 137.5); scale(snap.d3.s); imageMode(CENTER); image(doorImg, 0, 0, 300, 275); pop();
  }

  else if (snap.trang === 10) {
    if (!snap.ch10.c) {
      push(); translate(chest10.x + 75, chest10.y + 75); scale(snap.ch10.s); imageMode(CENTER); image(chestImg, 0, 0, 150, 150); pop();
    }
    if (snap.d10.v) {
      push(); tint(255, snap.d10.a); translate(door10.x + 150, door10.y + 137.5); scale(snap.d10.s); imageMode(CENTER); image(doorImg, 0, 0, 300, 275); pop();
    }
  }

  // Vẽ ghost.png giảm mờ opacity xuống khoảng 60% (153 trên thang 255)
  push();
  tint(255, 153);
  image(ghostImg, snap.gx, snap.gy, ghost.w, ghost.h);
  pop();
}

// ==========================================
// THÊM: HÀM RESET TOÀN BỘ GAME SAU KHI KẾT THÚC CUTSCENE
// ==========================================
function resetGameStates() {
  progressImgCurrent = progress0Img;
  progressScale = 1.0; progressScaleTimer = 0;
  ghost = { x: 574, y: 630, w: 176, h: 176, speed: 7.5, vy: 0, gravity: 0.6, jumpForce: -15, groundY: 630, isJumping: false };
  
  // Trang 7
  miniGameActive = true; victoryTriggered = false; nextExpectedNumber = 1;
  keyClicked = false; keyScale = 1.0;
  chest.clicked = false; chest.scale = 1.0;
  taskPanel.yCurrent = 1100; taskPanel.yTarget = 28;
  doorVisible = false; doorAlpha = 0; doorScale = 1.0;
  blocks.forEach(b => { b.exists = true; b.alpha = 255; b.holdTime = 0; });
  numberButtons.forEach(b => { b.isCorrect = false; });
  
  // Trang 8
  page8StartTime = 0; ghostDropped = false;
  key8Clicked = false; key8Scale = 1.0;
  door1Clicked = false; door1Scale = 1.0;
  chest8.clicked = false; chest8.scale = 1.0;
  taskPanel8.yCurrent = 1100; taskPanel8.yTarget = 28;
  human.alpha = 255; human.eraseTime = 0; human.visible = true;
  eraser.visible = true; eraser.isDragging = false;
  door2Visible = false; door2Scale = 1.0;
  
  // Trang 9
  page9StartTime = 0; ghostDropped9 = false; door3Scale = 1.0;
  
  // Trang 10
  page10StartTime = 0; ghostDropped10 = false;
  chest10Clicked = false; chest10.scale = 1.0;
  door10.visible = false; door10.alpha = 0; door10.scale = 1.0; door10Timer = 0;
  
  // Trang 11
  page11StartTime = 0; replayButtonVisible = false; replayScale = 1.0; soundPlayedReplay = false;
}