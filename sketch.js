let spriteSheet;
let spriteSheet2;
let walkSheet;
let jumpSheet;
let pushSheet;
let smileSheet2;
let fallDownSheet2;
let toolSheet;
let bgGate;
let bgLiberalArts;
let bgTrack;
let bgStart;
let bgAbout; // [新增] 關於頁面背景圖片
let bgInvitation; // [新增] 邀請函背景圖片
let bgSettingsImg; // [新增] 設定頁面背景圖片
let bgSolved; // [新增] 獲勝頁面背景圖片
let bgGameOver; // [新增] 失敗頁面背景圖片
let stopSheet;
let fastSheet;
let scarySheet;
let spriteSheet4;
let spriteSheet4Ask;
let spriteSheet5;
let bgMusic;
let teleportSound;
let successSound;
let failSound;
let victoryMusic;
let clickSound;
let healthPackSound;
let titleMusic;
let footstepSound; // [新增] 腳步聲音效
let dashSound; // [新增] 切換關卡時的衝刺閃光音效
let winSound; // [新增] 獲勝音效
let gameOverSound; // [新增] Game Over 音效
let keyboardSound; // [新增] 打字機音效
let lastTypedLength = -1; // [新增] 紀錄上次打字的長度，用來控制音效播放
let heartAnims = [];
let checkMarkAnims = [];
let crossMarkAnims = [];

// 常數定義
const GROUND_Y_RATIO = 0.72;

// 攝影機與世界
let cameraX = 0;
let worldWidth;

// 落葉效果
let leaves = [];
const leafCount = 40;

let animation = [];
let animation2 = [];
let walkAnimation = [];
let jumpAnimation = [];
let pushAnimation = [];
let smileAnimation2 = [];
let fallDownAnimation2 = [];
let toolAnimation = [];
let stopAnimation = [];
let fastAnimation = [];
let scaryAnimation = [];
let animation4 = [];
let animation4Ask = [];
let animation5 = [];

let gameState = 'loading'; // 'loading', 'title' or 'playing'
let loadingProgress = 0; // 載入進度
let isPaused = false; // 暫停狀態
let currentLevel = 1; // 1: gate, 2: liberal_arts, 3: track
let charScale = 2.5;

let spriteWidth = 1955;
let spriteHeight = 212;
let numFrames = 7;
let frameWidth;

let spriteWidth2 = 699;
let spriteHeight2 = 190;
let numFrames2 = 8;
let frameWidth2;

let smileSpriteWidth2 = 585;
let smileSpriteHeight2 = 183;
let smileNumFrames2 = 5;
let smileFrameWidth2;

let fallDownSpriteWidth2 = 2712;
let fallDownSpriteHeight2 = 156;
let fallDownNumFrames2 = 11;
let fallDownFrameWidth2;

let walkSpriteWidth = 1246;
let walkSpriteHeight = 198;
let walkNumFrames = 12;
let walkFrameWidth;

let jumpSpriteWidth = 1913;
let jumpSpriteHeight = 188;
let jumpNumFrames = 12;
let jumpFrameWidth;

let pushSpriteWidth = 1039;
let pushSpriteHeight = 146;
let pushNumFrames = 6;
let pushFrameWidth;

let toolSpriteWidth = 640;
let toolSpriteHeight = 64;
let toolNumFrames = 10;
let toolFrameWidth;

let stopSpriteWidth = 499;
let stopSpriteHeight = 77;
let stopNumFrames = 15;
let stopFrameWidth;
let fastSpriteWidth = 499;
let fastSpriteHeight = 77;
let fastNumFrames = 6;
let fastFrameWidth;
let scarySpriteWidth = 499;
let scarySpriteHeight = 77;
let scaryNumFrames = 12;
let scaryFrameWidth;

let spriteWidth4 = 375;
let spriteHeight4 = 89;
let numFrames4 = 5;
let frameWidth4;
let scale4 = 2.0; // 角色4的縮放比例，可在此調整大小

let spriteWidth4Ask = 450;
let spriteHeight4Ask = 84;
let numFrames4Ask = 7;
let frameWidth4Ask;
let currentFrame4Ask = 0;
let askAnimationSpeed4 = 0.15;

let spriteSheet6;
let numFrames6 = 7;
let frameWidth6;
let animation6 = [];
let scale6 = 2.5; // 角色6的縮放比例
let spriteSheet6Protection;
let numFrames6Protection = 2; // 共有兩張圖
let frameWidth6Protection;
let animation6Protection = [];

let spriteSheet9;
let numFrames9 = 15;
let frameWidth9;
let animation9 = [];
let currentFrame9 = 0;
let animationSpeed9 = 0.15;
let scale9 = 3.0; // 角色9的縮放比例 (數值越大角色越大，例如 3.0 或 3.5)
let spriteSheet9Dialogue;
let numFrames9Dialogue = 6;
let frameWidth9Dialogue;
let animation9Dialogue = [];
let char9EffectTimer = 0;
let hasTriggeredChar9Effect = false;

let spriteSheet10;
let numFrames10 = 13;
let frameWidth10;
let animation10 = [];
let scale10 = 3.0; // 角色10的縮放比例 (數值越大角色越大)
let spriteSheet10Hurt;
let numFrames10Hurt = 4;
let frameWidth10Hurt;
let animation10Hurt = [];
let spriteSheet10Hurt2;
let numFrames10Hurt2 = 4; // [修改] 暫時改為 4 (配合 Hurt.png)，若您有 5 張圖的檔案請改回 5
let frameWidth10Hurt2;
let animation10Hurt2 = [];
let char2HitCount = 0; // 記錄角色2(NPC)被攻擊的次數

let spriteSheet11;
let numFrames11 = 10;
let frameWidth11;
let animation11 = [];
let currentFrame11 = 0;
let animationSpeed11 = 0.15;
let scale11 = 3.0; // 角色11的縮放比例

let spriteWidth5 = 1525;
let spriteHeight5 = 151;
let numFrames5 = 15;
let frameWidth5;
let currentFrame5 = 0;
let animationSpeed5 = 0.15;

let spriteSheet7;
let spriteWidth7;
let spriteHeight7;
let numFrames7 = 11;
let frameWidth7;
let animation7 = [];
let currentFrame7 = 0;
let animationSpeed7 = 0.15;
let scale7 = 2.5; // 角色7的縮放比例

let spriteSheet7Idle;
let spriteWidth7Idle;
let spriteHeight7Idle;
let numFrames7Idle = 9;
let frameWidth7Idle;
let animation7Idle = [];
let currentFrame7Idle = 0;
let animationSpeed7Idle = 0.15;

let currentFrame2 = 0;
let currentFrame = 0;
let stopCurrentFrame = 0;
let fastCurrentFrame = 0;
let scaryCurrentFrame = 0;
let walkCurrentFrame = 0;
let jumpCurrentFrame = 0;
let pushCurrentFrame = 0;
let smileCurrentFrame2 = 0;
let fallDownCurrentFrame2 = 0;
let animationSpeed = 0.2; // 加快待機動畫速度，讓角色看起來更有精神
let walkAnimationSpeed = 0.25; // 稍微加快走路速度
let jumpAnimationSpeed = 0.3;
let pushAnimationSpeed = 0.15;
let smileAnimationSpeed2 = 0.1;
let fallDownAnimationSpeed2 = 0.2;
let animationSpeed2 = 0.1;
let toolAnimationSpeed = 0.3;
let stopAnimationSpeed = 0.15;
let fastAnimationSpeed = 0.2;
let scaryAnimationSpeed = 0.2;
let stopHitThreshold = 135;
let stopHitDuration = 90;
let stopHitTimer = 0;

// 傳送點相關變數
let teleportX, teleportY;
let teleportRadius = 50;
let teleportAngle = 0;

// 角色位置與移動速度
let characterX;
let characterY;
let character2X;
let character2Y;
let moveSpeed = 5;
let stopOffsetX = 180;
let stopOffsetY = 0;
let stopScale = 2.2;
let stopPosX;
let stopPosY;

// 角色狀態
let isJumping = false;
let jumpHeight = 150; // 角色跳躍的高度
let facingDirection = 1; // 角色面向的方向: 1=右, -1=左
let isPushing = false;
let isSmiling2 = false; // 角色2是否在微笑
let isFallingDown2 = false; // 角色2是否在倒下
let isScared = false; // 角色3是否在害怕
let proximityThreshold = 130; // 觸發互動的距離
let projectileHitThreshold = 100; // 飛行道具擊中判定距離
let recoveryThreshold = 100; // 角色1靠近觸發恢復的距離
let hasFired = false; // 確保每次攻擊只發射一次
let isTeleporting = false; // 是否正在傳送中
let isTouchLeft = false; // [新增] 觸控左移狀態
let isTouchRight = false; // [新增] 觸控右移狀態
let touchBtnSize = 80; // [新增] 觸控按鈕大小

let teleportAnimScale = 1; // 傳送動畫縮放比例
let teleportAnimAngle = 0; // 傳送動畫旋轉角度
let teleportParticles = []; // 傳送粒子陣列
let titleBubbles = []; // 標題畫面氣泡陣列

// 打字機效果變數
let typeWriterQ = ""; // 目前顯示的題目文字
let typeWriterQTarget = ""; // 目標題目文字
let typeWriterQIndex = 0; // 題目打字進度
let typeWriterHint = ""; // 目前顯示的提示文字
let typeWriterHintTarget = ""; // 目標提示文字
let typeWriterHintIndex = 0; // 提示打字進度

// 飛行道具陣列，可以管理多個道具
let projectiles = [];

// --- 題庫與問答系統變數 ---
let questions = [
  // Level 1: SDG 4 優質教育 x 教育科技基礎
  { level: 1, q: "【SDG 4 優質教育】同一套數位教材，對所有學生的學習效果都會一樣。", op1: "O", op2: "X", a: '2', explanation: "SDG 4 強調包容與公平。學習者背景不同，教材需結合「適性學習(Adaptive Learning)」才能發揮最大效果。", hint: "每個人的起點與需求不同。" },
  { level: 1, q: "【教學設計】設計時，先訂定學習目標，再選擇科技工具是較合理的流程。", op1: "O", op2: "X", a: '1', explanation: "符合教科系 ADDIE 模型的分析階段：應以「教學目標」為核心，科技只是輔助達標的工具。", hint: "目標永遠是核心。" },
  { level: 1, q: "【SDG 4 優質教育】如果學生使用教育遊戲覺得有趣，代表一定學得好。", op1: "O", op2: "X", a: '2', explanation: "動機不等於成效。優質教育需要確保實質的「認知參與」與「學習遷移」，而不僅是娛樂。", hint: "好玩不等於有效學習。" },
  { level: 1, q: "【教育評鑑】教育科技的評估標準之一是是否真的改變了學習行為。", op1: "O", op2: "X", a: '1', explanation: "教育科技不只看系統使用率，更重視是否促進實際成效與行為改變 (如 Kirkpatrick 評估模型)。", hint: "最終目的是行為與能力的改變。" },
  { level: 1, q: "【多媒體學習】科技動畫與音效使用越多，學生學習成效一定越高。", op1: "O", op2: "X", a: '2', explanation: "根據 Mayer 的多媒體學習認知理論，過多無關的影音會造成「認知負荷(Cognitive Load)」，反而干擾學習。", hint: "過多特效會造成認知負擔。" },
  { level: 1, q: "【教科專業】教科系的作品除了會寫程式，還需要能說明背後的教育理念。", op1: "O", op2: "X", a: '1', explanation: "淡江教科系強調「Instructional Design」，重視設計思考與學習理論依據，而非只看成品外觀。", hint: "理論是設計的骨幹。" },
  { level: 1, q: "【SDG 4 優質教育】學習者在系統中犯錯，對教學設計者是沒有價值的。", op1: "O", op2: "X", a: '2', explanation: "錯誤能提供學習歷程的關鍵數據 (Learning Analytics)，有助於系統給予精準回饋並促進成長。", hint: "錯誤數據是優化系統的關鍵。" },
  { level: 1, q: "【系統開發】好的教育科技設計需要經過「形成性評鑑」不斷測試與修正。", op1: "O", op2: "X", a: '1', explanation: "透過反覆的 Prototype 測試與學習者回饋，才能讓設計真正符合 SDGs 推廣的教育需求。", hint: "需要不斷迭代與修正。" },
  { level: 1, q: "【永續發展】教育科技只要系統能順利運行，就不需要再評估長期成效。", op1: "O", op2: "X", a: '2', explanation: "永續的教育科技(SDGs)需要長期追蹤「總結性評鑑」，確保能持續提供優質教育。", hint: "長期的成效評估很重要。" },
  { level: 1, q: "【互動設計】教育科技的成功與否，與學習者在系統中的互動參與程度有關。", op1: "O", op2: "X", a: '1', explanation: "高互動效能 (Interactivity) 能提升動機與投入度，是數位學習成功的關鍵因素之一。", hint: "高參與度能提升學習品質。" },
  // Level 2: SDG 10 減少不平等 x 教育科技應用
  { level: 2, q: "【教學策略】教育科技的重點不只是教學工具，也包含整體的教學流程設計。", op1: "O", op2: "X", a: '1', explanation: "科技必須融入教學策略 (如翻轉教室、混成學習)，才能讓科技發揮最大的教學效益。", hint: "工具需要搭配好的流程。" },
  { level: 2, q: "【SDG 10 減少不平等】只要學生會操作系統，就代表這套教育科技是成功的。", op1: "O", op2: "X", a: '2', explanation: "會操作只是「可用性(Usability)」，成功還要看是否能消弭學習落差，達成實質理解。", hint: "操作順暢不代表有學到東西。" },
  { level: 2, q: "【SDG 10 減少不平等】推動教育科技時，應考慮偏鄉學生的設備與網路落差。", op1: "O", op2: "X", a: '1', explanation: "落實 SDG 10 減少不平等，必須關注「數位落差(Digital Divide)」，確保弱勢族群也有平等學習機會。", hint: "科技不應加劇貧富差距。" },
  { level: 2, q: "【學習理論】教育科技的介面設計可以完全憑直覺，不考慮學習心理學。", op1: "O", op2: "X", a: '2', explanation: "設計需基於建構主義或認知心理學，了解學生如何處理資訊，否則設計容易導致學習迷航。", hint: "設計需基於人類認知規律。" },
  { level: 2, q: "【SDG 4 優質教育】教科系常透過專題導向學習(PBL)來培養團隊合作能力。", op1: "O", op2: "X", a: '1', explanation: "符合優質教育中培養「21世紀關鍵能力(溝通、協作、解決問題)」的目標，合作專題是常見的訓練。", hint: "團隊合作是核心素養。" },
  { level: 2, q: "【媒體選擇】因為科技進步，數位教材一定比傳統紙本教材來得更有效。", op1: "O", op2: "X", a: '2', explanation: "根據 Clark 的媒體爭論，媒體只是傳遞資訊的工具，真正影響成效的是「教學方法」而非媒體本身。", hint: "教學方法比媒體工具更重要。" },
  { level: 2, q: "【情境認知】教育科技的應用需要考慮使用者實際所處的學習環境與情境。", op1: "O", op2: "X", a: '1', explanation: "情境認知理論指出，知識與其所處的物理、社會情境息息相關，設計必須考量使用者情境。", hint: "環境會直接影響學習行為。" },
  { level: 2, q: "【SDG 4 優質教育】教育科技只有在新冠疫情這種需要遠距教學時才有價值。", op1: "O", op2: "X", a: '2', explanation: "科技也能在實體課堂中促進互動 (如 Zuvio)、提供課後適性輔導，落實終身學習的優質教育目標。", hint: "科技應用不僅限於遠距。" },
  { level: 2, q: "【教學評量】在數位教學設計中，給予學習者即時的「回饋(Feedback)」非常重要。", op1: "O", op2: "X", a: '1', explanation: "即時回饋能幫助學習者快速修正心智模型，是數位學習系統中最具價值的機制之一。", hint: "回饋是進步的動力。" },
  { level: 2, q: "【SDG 10 減少不平等】設計教育APP時，不需要考慮視覺障礙者的使用需求。", op1: "O", op2: "X", a: '2', explanation: "SDG 10 強調平權，教育科技應遵循「無障礙網頁/APP設計規範(WCAG)」，保障所有人的學習權。", hint: "設計應具備包容性(Inclusive)。" },
  // Level 3: SDG 綜合應用 x 教科系核心
  { level: 3, q: "【SDG 3 良好健康】設計教育遊戲時，應加入機制避免學習者長時間沉迷螢幕。", op1: "O", op2: "X", a: '1', hint: "SDG 3 關注身心健康，科技使用需適度。" },
  { level: 3, q: "【VR/AR應用】沉浸式科技(VR)主要是用來取代老師，讓學生自己玩。", op1: "O", op2: "X", a: '2', hint: "科技無法完全取代老師的引導與陪伴。" },
  { level: 3, q: "【SDG 12 責任消費】在學校推廣平板教學時，也應考慮電子廢棄物的回收問題。", op1: "O", op2: "X", a: '1', hint: "SDG 12 強調負責任的消費與生產。" },
  { level: 3, q: "【創客教育】Maker(創客)教育的核心只是教學生如何寫程式和組裝機器人。", op1: "O", op2: "X", a: '2', hint: "創客更重視動手做與解決真實問題的能力。" },
  { level: 3, q: "【SDG 4 優質教育】開放教育資源(OER)有助於打破知識的付費高牆，促進教育平權。", op1: "O", op2: "X", a: '1', hint: "OER(如維基百科、開放式課程)能促進知識共享。" },
  { level: 3, q: "【AI 融入教學】老師應該禁止學生使用 ChatGPT，以免他們喪失思考能力。", op1: "O", op2: "X", a: '2', hint: "應教導學生如何具備批判性思維並善用 AI 工具。" },
  { level: 3, q: "【SDG 11 永續城鄉】利用教育科技推廣社區歷史文化，能促進城鄉的永續發展。", op1: "O", op2: "X", a: '1', hint: "教育科技能幫助保存與傳播在地文化。" },
  { level: 3, q: "【遊戲式學習】在系統中加入「排行榜」和「徽章」，就能保證學生充滿內部動機。", op1: "O", op2: "X", a: '2', hint: "排行榜通常只提供外部動機，長期仍需內部動機支撐。" },
  { level: 3, q: "【SDG 4 優質教育】科技輔助自主學習，是實踐「終身學習」目標的重要途徑。", op1: "O", op2: "X", a: '1', hint: "培養自主學習能力是優質教育的核心。" },
  { level: 3, q: "【淡江教科】淡江教科系的願景只關注科技軟體的開發，不需要了解社會議題(如SDGs)。", op1: "O", op2: "X", a: '2', hint: "科技是為了解決真實社會與教育的問題而存在。" }
];
let currentQuestion = null; // 目前的題目物件
let quizSolved = false; // 是否已解決當前關卡的題目
let isNearQuestioner = false; // 是否靠近提問者 (用於按鍵判斷)
let isShowingExplanation = false; // [新增] 是否正在顯示解釋
let lastAnswerCorrect = false; // [新增] 上一次回答是否正確
let questionQueue = []; // 待回答問題佇列

// 生命值系統變數
let health = 3;
let maxHealth = 3;
let isInvincible = false; // 是否處於無敵狀態
let invincibleTimer = 0;
const invincibleDuration = 120; // 無敵時間 (幀數)，約 2 秒

// 分數系統變數
let score = 0;
let gameStartTime = 0;
let gameFinalTime = 0;

// 學習分析 (Learning Analytics) 變數 [新增]
let totalAttempts = 0; // 總答題次數
let correctAttempts = 0; // 答對次數

// --- 視覺與轉場特效 (動態編輯與構圖) ---
let levelTransitionAlpha = 255; // 關卡切換淡入效果
let windForce = 0; // 環境風力

// 煙火系統變數
let fireworks = [];
let confetti = []; // 彩帶陣列
let dustParticles = []; // 塵土粒子陣列
let items = []; // 道具陣列

// 視覺回饋變數
let shakeTimer = 0;
let damageFlashOpacity = 0;
let successFlashOpacity = 0;
let isStartingFlash = false; // [新增] 開始遊戲前的閃光狀態
let startingFlashAlpha = 0; // [新增] 閃光透明度
let isNextLevelFlash = false; // [新增] 切換關卡前的閃光狀態
let nextLevelFlashAlpha = 0; // [新增] 閃光透明度

// 對話框動畫變數
let hintBoxScale = 0;
let questionBoxScale = 0;
let levelTextScale = 1; // 關卡文字縮放比例
let totalLevelQuestions = 0; // 該關卡總題數
let currentProgressRatio = 0; // 進度條動畫用

// [新增] 玩家姓名相關變數
let inputName;
let playerName = "挑戰者"; // 預設名稱

// [新增] 開場對話相關變數
let btnConfirmName;
let introDialogPhase = 0; // [新增] 控制對話階段 (0: 詢問名字, 1: 準備出發)
let introDialogProg = 0;
let introDialogText = "你好！尋找解答的挑戰者。\n我是引導你的魔法精靈。\n在踏入淡江教科之前，請先告訴我你的名字：";

// 按鈕介面變數
let btnOption1, btnOption2, btnNextQuestion, btnRetry, btnAbout, btnStart, btnSettings, btnBack, btnGamePause, btnReturnToTitle, btnRestart, btnEnterTitle, btnBackToStart;
let sliderVolume; // 音量滑桿
let lblPauseVolume; // 暫停時顯示音量的標籤

// [新增] 按鈕主題顏色變數 (預設為第一關金色系)
let btnBaseColor = '#FFD700';
let btnBorderColor = '#DAA520';
let btnShadowColor = '#B8860B';
let btnHoverColor = '#FFFACD';

// --- 輔助函式：切割圖片精靈 ---
function sliceSpriteSheet(sheet, frameW, frameH, count, useRounding = false) {
  let anim = [];
  for (let i = 0; i < count; i++) {
    let x = useRounding ? round(i * frameW) : i * frameW;
    let w = useRounding ? (round((i + 1) * frameW) - x) : frameW;
    // 確保不超出圖片範圍
    if (x + w > sheet.width) w = sheet.width - x;
    anim.push(sheet.get(x, 0, w, frameH));
  }
  return anim;
}

function preload() {
  // 在 preload 函式中載入圖片，確保在 setup() 開始前圖片已完全載入
  // p5.js 會從 index.html 檔案的位置去尋找相對路徑
  spriteSheet = loadImage('8/Idle.png');
  spriteSheet2 = loadImage('2/stop/stop_2.png');
  walkSheet = loadImage('8/Walk.png');
  jumpSheet = loadImage('8/Walk.png');
  pushSheet = loadImage('8/Attack.png');
  smileSheet2 = loadImage('2/smile/smile_2.png');
  fallDownSheet2 = loadImage('2/fall_down/fall_down_2.png');
  toolSheet = loadImage('8/Book.png');
  bgGate = loadImage('assets/bg_gate.png');
  bgLiberalArts = loadImage('assets/bg_liberal_arts.png');
  bgTrack = loadImage('assets/bg_track.png');
  bgStart = loadImage('assets/bg_start1.png');
  bgAbout = loadImage('b.png'); // [新增] 載入關於頁面背景圖片
  bgSettingsImg = loadImage('c.png'); // [新增] 載入設定頁面背景圖片
  bgInvitation = loadImage('a.png'); // [新增] 載入邀請函背景
  bgSolved = loadImage('d.png'); // [新增] 載入獲勝畫面背景
  bgGameOver = loadImage('fall.png'); // [新增] 載入失敗頁面背景
  stopSheet = loadImage('3/stop_all.png');
  fastSheet = loadImage('3/fast_all.png');
  scarySheet = loadImage('3/scary_all.png');
  spriteSheet4 = loadImage('4/stop.png');
  spriteSheet4Ask = loadImage('4/ask.png');
  spriteSheet6 = loadImage('6/Idle.png');
  spriteSheet6Protection = loadImage('6/Protection.png');
  spriteSheet9 = loadImage('9/Idle_3.png');
  spriteSheet9Dialogue = loadImage('9/Dialogue.png');
  spriteSheet10 = loadImage('10/Idle_2.png');
  spriteSheet10Hurt = loadImage('10/Hurt.png');
  spriteSheet10Hurt2 = loadImage('10/Hurt.png'); // [修改] 暫時讀取 Hurt.png 避免找不到檔案卡住
  spriteSheet5 = loadImage('5/all.png');
  spriteSheet11 = loadImage('11/Idle_3.png');
  spriteSheet7 = loadImage('7/Dialogue.png');
  spriteSheet7Idle = loadImage('7/Idle.png');
  bgMusic = loadSound('Minuet in G Major.mp3');
  teleportSound = loadSound('new-level-142995.mp3');
  successSound = loadSound('successed-295058.mp3');
  failSound = loadSound('invalid-selection-39351.mp3');
  victoryMusic = loadSound('String Quintet in E major, Op. 11, No. 5.mp3');
  clickSound = loadSound('mouse-click-290204.mp3');
  healthPackSound = loadSound('coin-257878.mp3');
  titleMusic = loadSound('Froggy Fraud Adventure by Lost Games of the 1990s.mp3');
  footstepSound = loadSound('footsteps-sound-effect-337385.mp3');
  dashSound = loadSound('su.mp3'); // [新增] 載入衝刺閃爍音效
  winSound = loadSound('win.mp3'); // [新增] 載入獲勝音效
  gameOverSound = loadSound('fail.mp3'); // [新增] 載入失敗音效
  keyboardSound = loadSound('keyboard.mp3'); // [新增] 載入打字音效
}

function setup() {
  // 建立一個佔滿整個瀏覽器視窗的畫布
  createCanvas(windowWidth, windowHeight);
  
  // 設定世界寬度，讓場景可以滾動
  worldWidth = Math.max(width, 2000); // [修改] 增加世界寬度，讓傳送陣可以放遠一點

  // [新增] 注入 CSS 動畫樣式 (用於下一題按鈕的閃爍效果)
  let css = `
    @keyframes pulse-green {
      0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(50, 205, 50, 0.7); }
      70% { transform: scale(1.15); box-shadow: 0 0 0 15px rgba(50, 205, 50, 0); }
      100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(50, 205, 50, 0); }
    }
    .flashing-arrow {
      animation: pulse-green 1.5s infinite;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @keyframes heartbeat-glow {
      0% { transform: scale(1); box-shadow: 0 4px 10px rgba(0, 123, 255, 0.5); }
      50% { transform: scale(1.05); box-shadow: 0 0 20px rgba(0, 123, 255, 0.8), 0 0 30px rgba(0, 123, 255, 0.6); }
      100% { transform: scale(1); box-shadow: 0 4px 10px rgba(0, 123, 255, 0.5); }
    }
    .heartbeat-btn {
      animation: heartbeat-glow 1.5s infinite ease-in-out;
    }
  `;
  createElement('style', css);

  // 初始化落葉
  for (let i = 0; i < leafCount; i++) {
    leaves.push(createLeaf(true));
  }

  // 計算單一畫格的寬度
  spriteWidth = spriteSheet.width;
  spriteHeight = spriteSheet.height;
  frameWidth = spriteWidth / numFrames;
  // Idle.png 共有 7 張，寬度無法整除時用四捨五入避免截圖偏移
  animation = sliceSpriteSheet(spriteSheet, frameWidth, spriteHeight, numFrames, true);

  // 計算新角色動畫單一畫格的寬度並存入陣列
  frameWidth2 = spriteWidth2 / numFrames2;
  animation2 = sliceSpriteSheet(spriteSheet2, frameWidth2, spriteHeight2, numFrames2);
  
  // 計算微笑動畫單一畫格的寬度並存入陣列
  smileFrameWidth2 = smileSpriteWidth2 / smileNumFrames2;
  smileAnimation2 = sliceSpriteSheet(smileSheet2, smileFrameWidth2, smileSpriteHeight2, smileNumFrames2);

  // 計算倒下動畫單一畫格的寬度並存入陣列
  fallDownFrameWidth2 = fallDownSpriteWidth2 / fallDownNumFrames2;
  fallDownAnimation2 = sliceSpriteSheet(fallDownSheet2, fallDownFrameWidth2, fallDownSpriteHeight2, fallDownNumFrames2);

  // 計算走路動畫單一畫格的寬度並存入陣列
  walkSpriteWidth = walkSheet.width;
  walkSpriteHeight = walkSheet.height;
  walkFrameWidth = walkSpriteWidth / walkNumFrames;
  walkAnimation = sliceSpriteSheet(walkSheet, walkFrameWidth, walkSpriteHeight, walkNumFrames);

  // 計算跳躍動畫單一畫格的寬度並存入陣列
  jumpSpriteWidth = jumpSheet.width;
  jumpSpriteHeight = jumpSheet.height;
  jumpFrameWidth = jumpSpriteWidth / jumpNumFrames;
  jumpAnimation = sliceSpriteSheet(jumpSheet, jumpFrameWidth, jumpSpriteHeight, jumpNumFrames);

  // 計算攻擊動畫單一畫格的寬度並存入陣列
  pushSpriteWidth = pushSheet.width;
  pushSpriteHeight = pushSheet.height;
  pushFrameWidth = pushSpriteWidth / pushNumFrames;
  pushAnimation = sliceSpriteSheet(pushSheet, pushFrameWidth, pushSpriteHeight, pushNumFrames);

  // 計算飛行道具動畫單一畫格的寬度並存入陣列
  toolFrameWidth = toolSpriteWidth / toolNumFrames;
  toolAnimation = sliceSpriteSheet(toolSheet, toolFrameWidth, toolSpriteHeight, toolNumFrames);

  // 設定圖片繪製模式為中心點對齊，方便將圖片置中
  imageMode(CENTER);

  // 初始化角色位置在畫布中央
  characterX = 150; // 初始位置改到世界左側
  
  // 計算垂直修正，讓角色8 (放大後) 與角色2站在同一平面
  // 腳底位置 = 中心Y + (圖片高度 * 縮放) / 2
  characterY = height * GROUND_Y_RATIO - ((spriteHeight * charScale / 2) - (spriteHeight2 / 2));

  // 初始化新角色的位置在原本角色的左邊
  character2X = 450; // [修改] 350 -> 450，稍微拉開距離
  character2Y = height * GROUND_Y_RATIO;

  // 設定傳送點位置在畫面右側
  teleportX = 1600; // [修改] 將傳送點放遠一點 (900 -> 1600)
  teleportY = height * GROUND_Y_RATIO + 60;

  // 停留角色的固定位置（不跟隨角色1移動）
  stopPosX = 800; // [修改] 600 -> 800，稍微拉開距離
  stopPosY = height * GROUND_Y_RATIO + stopOffsetY;

  // 使用 stop_all.png 製作中心角色的待機動畫
  stopSpriteWidth = stopSheet.width;
  stopSpriteHeight = stopSheet.height;
  stopFrameWidth = stopSpriteWidth / stopNumFrames;
  stopAnimation = sliceSpriteSheet(stopSheet, stopFrameWidth, stopSpriteHeight, stopNumFrames, true);

  // 使用 fast_all.png 製作靠近時的快速動作動畫
  fastSpriteWidth = fastSheet.width;
  fastSpriteHeight = fastSheet.height;
  fastFrameWidth = fastSpriteWidth / fastNumFrames;
  fastAnimation = sliceSpriteSheet(fastSheet, fastFrameWidth, fastSpriteHeight, fastNumFrames, true);

  // 使用 scary_all.png 製作觸碰時的害怕動作動畫
  scarySpriteWidth = scarySheet.width;
  scarySpriteHeight = scarySheet.height;
  scaryFrameWidth = scarySpriteWidth / scaryNumFrames;
  scaryAnimation = sliceSpriteSheet(scarySheet, scaryFrameWidth, scarySpriteHeight, scaryNumFrames, true);

  // 計算角色4動畫單一畫格的寬度並存入陣列
  frameWidth4 = spriteWidth4 / numFrames4;
  animation4 = sliceSpriteSheet(spriteSheet4, frameWidth4, spriteHeight4, numFrames4);

  // 計算角色4 Ask動畫單一畫格的寬度並存入陣列
  frameWidth4Ask = spriteWidth4Ask / numFrames4Ask;
  animation4Ask = sliceSpriteSheet(spriteSheet4Ask, frameWidth4Ask, spriteHeight4Ask, numFrames4Ask);

  // 計算角色6動畫單一畫格的寬度並存入陣列
  frameWidth6 = spriteSheet6.width / numFrames6;
  animation6 = sliceSpriteSheet(spriteSheet6, frameWidth6, spriteSheet6.height, numFrames6);

  // 計算角色6 Protection動畫單一畫格的寬度並存入陣列
  frameWidth6Protection = spriteSheet6Protection.width / numFrames6Protection;
  animation6Protection = sliceSpriteSheet(spriteSheet6Protection, frameWidth6Protection, spriteSheet6Protection.height, numFrames6Protection);

  // 計算角色9動畫單一畫格的寬度並存入陣列
  frameWidth9 = spriteSheet9.width / numFrames9;
  animation9 = sliceSpriteSheet(spriteSheet9, frameWidth9, spriteSheet9.height, numFrames9);

  // 計算角色9 Dialogue動畫單一畫格的寬度並存入陣列
  frameWidth9Dialogue = spriteSheet9Dialogue.width / numFrames9Dialogue;
  animation9Dialogue = sliceSpriteSheet(spriteSheet9Dialogue, frameWidth9Dialogue, spriteSheet9Dialogue.height, numFrames9Dialogue);

  // 計算角色10動畫單一畫格的寬度並存入陣列
  frameWidth10 = spriteSheet10.width / numFrames10;
  animation10 = sliceSpriteSheet(spriteSheet10, frameWidth10, spriteSheet10.height, numFrames10);

  // 計算角色10 Hurt動畫單一畫格的寬度並存入陣列
  frameWidth10Hurt = spriteSheet10Hurt.width / numFrames10Hurt;
  animation10Hurt = sliceSpriteSheet(spriteSheet10Hurt, frameWidth10Hurt, spriteSheet10Hurt.height, numFrames10Hurt);

  // 計算角色10 Hurt2動畫單一畫格的寬度並存入陣列
  frameWidth10Hurt2 = spriteSheet10Hurt2.width / numFrames10Hurt2;
  animation10Hurt2 = sliceSpriteSheet(spriteSheet10Hurt2, frameWidth10Hurt2, spriteSheet10Hurt2.height, numFrames10Hurt2);

  // 計算角色11動畫單一畫格的寬度並存入陣列
  frameWidth11 = spriteSheet11.width / numFrames11;
  animation11 = sliceSpriteSheet(spriteSheet11, frameWidth11, spriteSheet11.height, numFrames11);

  // 計算角色5動畫單一畫格的寬度並存入陣列
  frameWidth5 = spriteWidth5 / numFrames5;
  animation5 = sliceSpriteSheet(spriteSheet5, frameWidth5, spriteHeight5, numFrames5, true);

  // 計算角色7動畫單一畫格的寬度並存入陣列
  spriteWidth7 = spriteSheet7.width;
  spriteHeight7 = spriteSheet7.height;
  frameWidth7 = spriteWidth7 / numFrames7;
  animation7 = sliceSpriteSheet(spriteSheet7, frameWidth7, spriteHeight7, numFrames7);

  // 計算角色7 Idle動畫單一畫格的寬度並存入陣列
  spriteWidth7Idle = spriteSheet7Idle.width;
  spriteHeight7Idle = spriteSheet7Idle.height;
  frameWidth7Idle = spriteWidth7Idle / numFrames7Idle;
  animation7Idle = sliceSpriteSheet(spriteSheet7Idle, frameWidth7Idle, spriteHeight7Idle, numFrames7Idle);

  // --- 建立答題按鈕 ---
  btnOption1 = createButton('Option 1');
  btnOption1.position(-1000, -1000); // 初始隱藏
  btnOption1.size(150, 50); // 加大按鈕
  btnOption1.style('font-size', '18px');
  btnOption1.style('font-family', 'Verdana, sans-serif'); // 改用 Verdana 字體，更像遊戲介面
  btnOption1.style('font-weight', 'bold');
  btnOption1.style('background-color', btnBaseColor); // [修改] 使用變數
  btnOption1.style('border', '2px solid ' + btnBorderColor); // [修改] 使用變數
  btnOption1.style('border-radius', '10px');
  btnOption1.style('box-shadow', '0px 4px 0px ' + btnShadowColor); // [修改] 使用變數
  btnOption1.style('cursor', 'pointer');
  btnOption1.style('transition', 'transform 0.1s, background-color 0.1s'); // [修改] 避免 all 導致位置移動時產生滑動延遲
  btnOption1.mouseOver(() => btnOption1.style('background-color', btnHoverColor)); // [修改] 使用變數
  btnOption1.mouseOut(() => btnOption1.style('background-color', btnBaseColor)); // [修改] 使用變數
  btnOption1.mousePressed(() => {
    if (clickSound) clickSound.play();
    checkAnswer('1');
  });

  btnOption2 = createButton('Option 2');
  btnOption2.position(-1000, -1000); // 初始隱藏
  btnOption2.size(150, 50); // 加大按鈕
  btnOption2.style('font-size', '18px');
  btnOption2.style('font-family', 'Verdana, sans-serif'); // 改用 Verdana 字體
  btnOption2.style('font-weight', 'bold');
  btnOption2.style('background-color', btnBaseColor); // [修改] 使用變數
  btnOption2.style('border', '2px solid ' + btnBorderColor); // [修改] 使用變數
  btnOption2.style('border-radius', '10px');
  btnOption2.style('box-shadow', '0px 4px 0px ' + btnShadowColor); // [修改] 使用變數
  btnOption2.style('cursor', 'pointer');
  btnOption2.style('transition', 'transform 0.1s, background-color 0.1s');
  btnOption2.mouseOver(() => btnOption2.style('background-color', btnHoverColor)); // [修改] 使用變數
  btnOption2.mouseOut(() => btnOption2.style('background-color', btnBaseColor)); // [修改] 使用變數
  btnOption2.mousePressed(() => {
    if (clickSound) clickSound.play();
    checkAnswer('2');
  });

  // 建立下一題按鈕 (答對後顯示)
  btnNextQuestion = createButton('➜'); // 改為大箭頭圖示
  btnNextQuestion.class('flashing-arrow'); // 套用閃爍動畫
  btnNextQuestion.position(-1000, -1000);
  btnNextQuestion.size(45, 45); // [修改] 縮小按鈕尺寸以配合較小的對話框
  btnNextQuestion.style('font-size', '22px');
  btnNextQuestion.style('font-family', 'Arial, sans-serif');
  btnNextQuestion.style('font-weight', 'bold');
  btnNextQuestion.style('background-color', '#32CD32'); // 萊姆綠
  btnNextQuestion.style('color', 'white');
  btnNextQuestion.style('border', '3px solid white');
  btnNextQuestion.style('border-radius', '50%'); // 圓形
  btnNextQuestion.style('cursor', 'pointer');
  btnNextQuestion.style('transition', 'transform 0.2s, background-color 0.2s'); // 加入過渡效果
  btnNextQuestion.mouseOut(() => {
    btnNextQuestion.style('background-color', '#32CD32');
    btnNextQuestion.style('animation', 'pulse-green 1.5s infinite'); // 恢復閃爍動畫
    btnNextQuestion.style('transform', 'scale(1)');
  });
  btnNextQuestion.mouseOver(() => {
    btnNextQuestion.style('background-color', '#228B22');
    btnNextQuestion.style('animation', 'none'); // 暫停閃爍動畫以免衝突
    btnNextQuestion.style('transform', 'scale(1.2)'); // 放大按鈕
  });
  btnNextQuestion.mousePressed(() => {
    if (clickSound) clickSound.play();
    nextQuestion();
  }); // 點擊後進入下一題

  // 建立重試按鈕 (答錯後顯示)
  btnRetry = createButton('↺ 重試');
  btnRetry.position(-1000, -1000);
  btnRetry.size(90, 40); // [修改] 縮小重試按鈕
  btnRetry.style('font-size', '16px');
  btnRetry.style('font-family', 'Verdana, sans-serif');
  btnRetry.style('font-weight', 'bold');
  btnRetry.style('background-color', '#FF6347'); // 番茄紅
  btnRetry.style('color', 'white');
  btnRetry.style('border', '2px solid white');
  btnRetry.style('border-radius', '20px');
  btnRetry.style('cursor', 'pointer');
  btnRetry.style('box-shadow', '0px 4px 10px rgba(0,0,0,0.3)');
  btnRetry.mouseOver(() => btnRetry.style('background-color', '#CD5C5C'));
  btnRetry.mouseOut(() => btnRetry.style('background-color', '#FF6347'));
  btnRetry.mousePressed(() => {
    if (clickSound) clickSound.play();
    isShowingExplanation = false; // 關閉解釋，重新顯示題目
  });

  // 建立關於遊戲按鈕
  btnAbout = createButton('關於遊戲');
  btnAbout.position(-1000, -1000); // 初始隱藏
  btnAbout.size(120, 40);
  btnAbout.style('font-size', '16px');
  btnAbout.style('font-family', 'Verdana, sans-serif'); // 改用 Verdana 字體
  btnAbout.style('font-weight', 'bold');
  btnAbout.style('background-color', '#4682B4'); // 鋼藍色
  btnAbout.style('color', 'white');
  btnAbout.style('border', '2px solid white');
  btnAbout.style('border-radius', '20px');
  btnAbout.style('cursor', 'pointer');
  btnAbout.style('transition', 'transform 0.1s, background-color 0.1s'); // [修改] 只過渡需要的屬性，避免位置滑動
  btnAbout.mouseOver(() => {
    btnAbout.style('background-color', '#5F9EA0');
    btnAbout.style('transform', 'scale(1.05)'); // [新增] 滑鼠懸停時微微放大 1.05 倍
  });
  btnAbout.mouseOut(() => {
    btnAbout.style('background-color', '#4682B4'); // [新增] 滑鼠移開時恢復原色
    btnAbout.style('transform', 'scale(1)'); // [新增] 滑鼠移開時恢復原本大小
  });
  btnAbout.mousePressed(() => {
    if (clickSound) clickSound.play();
    gameState = 'about';
    levelTransitionAlpha = 255; // 觸發酷炫轉場
  });

  // 建立設定按鈕
  btnSettings = createButton('設定');
  btnSettings.position(-1000, -1000); // 初始隱藏
  btnSettings.size(120, 40);
  btnSettings.style('font-size', '16px');
  btnSettings.style('font-family', 'Verdana, sans-serif');
  btnSettings.style('font-weight', 'bold');
  btnSettings.style('background-color', '#4682B4'); // 與關於按鈕同色系
  btnSettings.style('color', 'white');
  btnSettings.style('border', '2px solid white');
  btnSettings.style('border-radius', '20px');
  btnSettings.style('cursor', 'pointer');
  btnSettings.style('transition', 'transform 0.1s, background-color 0.1s'); // [修改] 避免 all 導致延遲
  btnSettings.mouseOver(() => {
    btnSettings.style('background-color', '#5F9EA0');
    btnSettings.style('transform', 'scale(1.05)'); // [新增] 滑鼠懸停時微微放大
  });
  btnSettings.mouseOut(() => {
    btnSettings.style('background-color', '#4682B4'); // [新增] 滑鼠移開時恢復原色
    btnSettings.style('transform', 'scale(1)'); // [新增] 滑鼠移開時恢復原本大小
  });
  btnSettings.mousePressed(() => {
    if (clickSound) clickSound.play();
    gameState = 'settings';
    levelTransitionAlpha = 255; // 觸發酷炫轉場
  });

  // [新增] 建立姓名輸入框
  inputName = createInput('');
  inputName.attribute('placeholder', '請輸入挑戰者姓名...');
  inputName.position(-1000, -1000); // 初始隱藏
  inputName.size(250, 40);
  inputName.style('font-size', '18px');
  inputName.style('text-align', 'center');
  inputName.style('border', '2px solid white');
  inputName.style('border-radius', '8px'); // [修改] 配合對話框的復古風格
  inputName.style('background-color', 'rgba(20, 20, 20, 0.9)'); // [修改] 黑底
  inputName.style('color', '#FFD700'); // [修改] 金色文字
  inputName.style('box-shadow', '0px 4px 10px rgba(0,0,0,0.3)');
  inputName.style('outline', 'none'); // 點擊時不顯示預設外框

  // [新增] 建立確認名字按鈕
  btnConfirmName = createButton('確定');
  btnConfirmName.position(-1000, -1000);
  btnConfirmName.size(80, 40);
  btnConfirmName.style('font-size', '18px');
  btnConfirmName.style('font-family', 'Verdana, sans-serif');
  btnConfirmName.style('font-weight', 'bold');
  btnConfirmName.style('background-color', '#32CD32');
  btnConfirmName.style('color', 'white');
  btnConfirmName.style('border', '2px solid white');
  btnConfirmName.style('border-radius', '8px');
  btnConfirmName.style('cursor', 'pointer');
  btnConfirmName.style('transition', 'transform 0.1s');
  btnConfirmName.mouseOver(() => btnConfirmName.style('transform', 'scale(1.05)'));
  btnConfirmName.mouseOut(() => btnConfirmName.style('transform', 'scale(1)'));
  btnConfirmName.mousePressed(() => {
    if (clickSound) clickSound.play();
    if (introDialogPhase === 0) {
      // [新增] 儲存名字並切換到第二階段對話
      if (inputName) {
        playerName = inputName.value().trim();
        if (playerName === "") playerName = "挑戰者";
      }
      introDialogText = `太棒了，${playerName}，我們出發吧！`;
      introDialogProg = 0; // 重置打字機動畫
      lastTypedLength = -1;
      introDialogPhase = 1; // 進入第二階段
      btnConfirmName.html('出發'); // 改變按鈕文字
      if (inputName) inputName.position(-1000, -1000); // 隱藏輸入框
    } else {
      // [新增] 第二階段點擊才開始閃光跳關
      isStartingFlash = true;
      if (dashSound) dashSound.play(0, 1, 0.8, 0, 2);
      hideButtons();
    }
  });

  // 建立開始遊戲按鈕
  btnStart = createButton('開始遊戲');
  btnStart.position(-1000, -1000); // 初始隱藏
  btnStart.size(200, 60);
  btnStart.style('font-size', '24px');
  btnStart.style('font-family', 'Verdana, sans-serif');
  btnStart.style('font-weight', 'bold');
  btnStart.style('background-color', '#007BFF'); // 亮藍色
  btnStart.style('color', 'white');
  btnStart.style('border', '3px solid white');
  btnStart.style('border-radius', '30px');
  btnStart.style('cursor', 'pointer');
  btnStart.class('heartbeat-btn'); // [新增] 套用心跳發光動畫
  btnStart.style('transition', 'transform 0.2s, background-color 0.2s'); // [修改] 避免位置滑動
  btnStart.mouseOver(() => {
    btnStart.style('animation', 'none'); // [新增] 暫停心跳動畫
    btnStart.style('transform', 'scale(1.1)'); // [新增] 懸停時稍微放大更多
    btnStart.style('background-color', '#0056b3'); // [新增] 懸停時變深藍色
  });
  btnStart.mouseOut(() => {
    btnStart.style('background-color', '#007BFF'); // [新增] 恢復原色
    btnStart.style('animation', 'heartbeat-glow 1.5s infinite ease-in-out'); // [新增] 恢復心跳動畫
    btnStart.style('transform', 'scale(1)'); // [新增] 恢復基礎大小，交由動畫接手
  });
  btnStart.mousePressed(() => {
    if (clickSound) clickSound.play();
    isStartingFlash = true; // [修改] 點擊直接觸發閃光跳轉遊戲
    if (dashSound) dashSound.play(0, 1, 0.8, 0, 2);
    hideButtons();
  });

  // 建立音量滑桿 (設定畫面用)
  sliderVolume = createSlider(0, 1, 0.5, 0.01);
  sliderVolume.position(-1000, -1000);
  sliderVolume.style('width', '200px');
  sliderVolume.style('cursor', 'pointer');
  // 當滑桿移動時，更新音量與文字
  sliderVolume.input(() => {
    outputVolume(sliderVolume.value());
    if (lblPauseVolume) lblPauseVolume.html("音量: " + floor(sliderVolume.value() * 100) + "%");
    if (isPaused) redraw(); // 確保暫停時畫面能更新 (如果需要)
  });

  // 建立返回按鈕 (設定畫面用)
  btnBack = createButton('返回');
  btnBack.position(-1000, -1000);
  btnBack.size(120, 40);
  btnBack.style('font-size', '16px');
  btnBack.style('font-family', 'Verdana, sans-serif');
  btnBack.style('font-weight', 'bold');
  btnBack.style('background-color', '#555'); // 深灰色
  btnBack.style('color', 'white');
  btnBack.style('border', '2px solid white');
  btnBack.style('border-radius', '20px');
  btnBack.style('cursor', 'pointer');
  btnBack.style('transition', 'transform 0.1s, background-color 0.1s'); // [修改] 避免位置滑動
  btnBack.mouseOver(() => {
    btnBack.style('background-color', '#777'); // [新增] 懸停變淺灰
    btnBack.style('transform', 'scale(1.05)'); // [新增] 滑鼠懸停時微微放大
  });
  btnBack.mouseOut(() => {
    btnBack.style('background-color', '#555'); // [新增] 恢復原色深灰
    btnBack.style('transform', 'scale(1)'); // [新增] 恢復原本大小
  });
  btnBack.mousePressed(() => {
    if (clickSound) clickSound.play();
    gameState = 'title';
    levelTransitionAlpha = 100; // [修改] 縮短返回的轉場時間，讓開始按鈕更快出現
  });

  // 建立遊戲中的暫停按鈕
  btnGamePause = createButton('⏸');
  btnGamePause.position(-1000, -1000);
  btnGamePause.size(40, 40);
  btnGamePause.style('font-size', '20px');
  btnGamePause.style('background-color', 'rgba(0,0,0,0.5)');
  btnGamePause.style('color', 'white');
  btnGamePause.style('border', '2px solid white');
  btnGamePause.style('border-radius', '50%');
  btnGamePause.style('cursor', 'pointer');
  btnGamePause.style('z-index', '1000'); // 確保在最上層
  btnGamePause.style('transition', 'transform 0.1s, background-color 0.1s');
  btnGamePause.mouseOver(() => {
    btnGamePause.style('background-color', 'rgba(0,0,0,0.8)'); // [新增] 懸停時加深背景透明度
    btnGamePause.style('transform', 'scale(1.15)'); // [新增] 懸停時稍微放大 1.15 倍
  });
  btnGamePause.mouseOut(() => {
    btnGamePause.style('background-color', 'rgba(0,0,0,0.5)'); // [新增] 恢復原本的半透明黑
    btnGamePause.style('transform', 'scale(1)'); // [新增] 恢復原本大小
  });
  btnGamePause.mousePressed(() => {
    if (clickSound) clickSound.play();
    togglePause();
  });

  // 建立暫停時的音量文字標籤
  lblPauseVolume = createDiv('');
  lblPauseVolume.style('color', 'white');
  lblPauseVolume.style('font-size', '20px');
  lblPauseVolume.style('font-family', 'Verdana');
  lblPauseVolume.position(-1000, -1000);

  // 建立回到標題按鈕
  btnReturnToTitle = createButton('🏠 回到標題');
  btnReturnToTitle.position(-1000, -1000);
  btnReturnToTitle.size(160, 50); // 加大按鈕
  btnReturnToTitle.style('font-size', '18px');
  btnReturnToTitle.style('font-family', 'Verdana, sans-serif');
  btnReturnToTitle.style('font-weight', 'bold');
  btnReturnToTitle.style('background-color', '#FF8C00'); // [修改] 暖橘色，代表回到主選單
  btnReturnToTitle.style('color', 'white');
  btnReturnToTitle.style('border', '2px solid white');
  btnReturnToTitle.style('border-radius', '20px');
  btnReturnToTitle.style('cursor', 'pointer');
  btnReturnToTitle.style('box-shadow', '0px 4px 10px rgba(0,0,0,0.3)'); // 增加陰影
  btnReturnToTitle.style('transition', 'transform 0.1s, background-color 0.1s');
  btnReturnToTitle.mouseOver(() => {
    btnReturnToTitle.style('background-color', '#E9967A'); // 懸停變淺橘
    btnReturnToTitle.style('transform', 'scale(1.05)'); // [新增] 懸停時稍微放大
  });
  btnReturnToTitle.mouseOut(() => {
    btnReturnToTitle.style('background-color', '#FF8C00'); // 恢復原色
    btnReturnToTitle.style('transform', 'scale(1)'); // [新增] 恢復原本大小
  });
  btnReturnToTitle.mousePressed(() => {
    if (clickSound) clickSound.play();
    resetGame(); // 重置遊戲並回到標題
  });

  // 建立重新開始按鈕
  btnRestart = createButton('↺ 重新開始');
  btnRestart.position(-1000, -1000);
  btnRestart.size(160, 50);
  btnRestart.style('font-size', '18px');
  btnRestart.style('font-family', 'Verdana, sans-serif');
  btnRestart.style('font-weight', 'bold');
  btnRestart.style('background-color', '#32CD32'); // LimeGreen
  btnRestart.style('color', 'white');
  btnRestart.style('border', '2px solid white');
  btnRestart.style('border-radius', '20px');
  btnRestart.style('cursor', 'pointer');
  btnRestart.style('box-shadow', '0px 4px 10px rgba(0,0,0,0.3)');
  btnRestart.style('transition', 'transform 0.1s, background-color 0.1s');
  btnRestart.mouseOver(() => {
    btnRestart.style('background-color', '#228B22'); // 懸停變深綠
    btnRestart.style('transform', 'scale(1.05)'); // [新增] 懸停時稍微放大
  });
  btnRestart.mouseOut(() => {
    btnRestart.style('background-color', '#32CD32'); // 恢復原色
    btnRestart.style('transform', 'scale(1)'); // [新增] 恢復原本大小
  });
  btnRestart.mousePressed(() => {
    if (clickSound) clickSound.play();
    resetGame(); // 先重置
    startGame(); // 再直接開始
  });

  // [新增] 建立邀請函結尾的進入按鈕
  btnEnterTitle = createButton('接受邀請');
  btnEnterTitle.position(-1000, -1000);
  btnEnterTitle.size(160, 50);
  btnEnterTitle.style('font-size', '20px');
  btnEnterTitle.style('font-family', 'Georgia, serif');
  btnEnterTitle.style('font-weight', 'bold');
  btnEnterTitle.style('background-color', '#D4AF37'); // 金箔色
  btnEnterTitle.style('color', 'white');
  btnEnterTitle.style('border', '2px solid white');
  btnEnterTitle.style('border-radius', '5px');
  btnEnterTitle.style('cursor', 'pointer');
  btnEnterTitle.style('box-shadow', '0px 4px 15px rgba(0,0,0,0.3)');
  btnEnterTitle.mousePressed(() => {
    if (clickSound) clickSound.play();
    gameState = 'title';
    levelTransitionAlpha = 255; // [新增] 觸發純淨淡出，避免畫面生硬切換
    btnEnterTitle.position(-1000, -1000);
  });

  // [新增] 建立回到最一開始開場劇情的按鈕
  btnBackToStart = createButton('🔙 重看開場劇情');
  btnBackToStart.position(-1000, -1000);
  btnBackToStart.size(160, 50);
  btnBackToStart.style('font-size', '18px');
  btnBackToStart.style('font-family', 'Verdana, sans-serif');
  btnBackToStart.style('font-weight', 'bold');
  btnBackToStart.style('background-color', '#20B2AA'); // [修改] 青綠色，代表重看劇情
  btnBackToStart.style('color', 'white');
  btnBackToStart.style('border', '2px solid white');
  btnBackToStart.style('border-radius', '20px');
  btnBackToStart.style('cursor', 'pointer');
  btnBackToStart.style('box-shadow', '0px 4px 10px rgba(0,0,0,0.3)');
  btnBackToStart.style('transition', 'transform 0.1s, background-color 0.1s');
  btnBackToStart.mouseOver(() => {
    btnBackToStart.style('background-color', '#008B8B'); // 懸停變深青
    btnBackToStart.style('transform', 'scale(1.05)'); // [新增] 懸停時稍微放大
  });
  btnBackToStart.mouseOut(() => {
    btnBackToStart.style('background-color', '#20B2AA'); // 恢復原色
    btnBackToStart.style('transform', 'scale(1)'); // [新增] 恢復原本大小
  });
  btnBackToStart.mousePressed(() => {
    if (clickSound) clickSound.play();
    resetGame();
    gameState = 'loading'; // 強制回到最開始的載入/劇情畫面
    loadingProgress = 0;   // 重置劇情進度
  });

  // 初始選題 (移到按鈕建立之後)
  initLevelQuestions();
}

function draw() {
  // --- 載入畫面邏輯 (Loading Screen) ---
  if (gameState === 'loading') {
    drawLoading();
    return;
  }

  push();
  // --- 畫面震動效果 ---
  if (shakeTimer > 0) {
    translate(random(-5, 5), random(-5, 5)); // 隨機位移畫布
    shakeTimer--;
  }
        
          // [新增] 柔和的 3D 空間推進轉場效果 (增加立體感)
          if (levelTransitionAlpha > 0 && gameState !== 'loading') {
            let zoom = map(levelTransitionAlpha, 255, 0, 1.05, 1);
            translate(width / 2, height / 2);
            scale(zoom);
            translate(-width / 2, -height / 2);
          }

  // --- 狀態切換與繪製 ---
  if (gameState === 'title') {
    drawTitle();
  } else if (gameState === 'about') {
    drawAbout();
  } else if (gameState === 'settings') {
    drawSettings();
  } else if (gameState === 'gameOver') {
    drawGameOver();
  } else if (gameState === 'victory') {
    drawVictory();
  } else if (gameState === 'playing') {
    drawPlaying();
  }
  pop();

  // --- 優雅淡色系純淨淡入轉場 (全域覆蓋) ---
  if (levelTransitionAlpha > 0) {
    push();
    noStroke();
    // 柔和舒適的珍珠白/米色，以最單純的透明度漸變達到高級感
    fill(252, 248, 242, levelTransitionAlpha);
    rectMode(CORNER);
    rect(0, 0, width, height);
    
    // [新增] 如果是在遊戲進行中，顯示關卡標題滑動特效
    if (gameState === 'playing') {
      drawSlidingLevelTitle();
    }

    levelTransitionAlpha -= 2.5; // [修改] 進一步放慢轉場，以容納中間的停頓時間
    pop();
  }

  // --- [新增] 開始遊戲前的短暫閃光特效 ---
  if (isStartingFlash) {
    push();
    // 強化開始遊戲的閃光：加入向外擴散的速度線
    translate(width/2, height/2);
    let p = startingFlashAlpha / 255;
    for(let i=0; i<30; i++) {
      let a = (i/30) * TWO_PI + noise(frameCount*0.1)*0.5;
      let r1 = random(0, width/2);
      let r2 = r1 + (300 * p);
      stroke(255, startingFlashAlpha * 0.5);
      strokeWeight(random(1, 4));
      line(cos(a)*r1, sin(a)*r1, cos(a)*r2, sin(a)*r2);
    }
    resetMatrix();
    noStroke();
    fill(255, startingFlashAlpha);
    rect(0, 0, width, height);
    pop();

    startingFlashAlpha += 40; // 閃光出現的速度
    if (startingFlashAlpha >= 255) {
      isStartingFlash = false;
      startingFlashAlpha = 0;
      startGame(); // 畫面閃到最亮時，才真正執行遊戲切換
    }
  }

  // --- [新增] 切換關卡前的短暫閃光特效 ---
  if (isNextLevelFlash) {
    push();
    // 關卡間轉場：時空隧道 (Warp Speed) 特效
    translate(width/2, height/2);
    let p = nextLevelFlashAlpha / 255;
    for(let i=0; i<50; i++) {
      let a = random(TWO_PI);
      let r1 = random(10, width);
      let r2 = r1 + (400 * p);
      stroke(255, nextLevelFlashAlpha * 0.7);
      strokeWeight(random(2, 5));
      line(cos(a)*r1, sin(a)*r1, cos(a)*r2, sin(a)*r2);
    }
    resetMatrix();

    noStroke();
    fill(255, nextLevelFlashAlpha);
    rect(0, 0, width, height);
    pop();

    nextLevelFlashAlpha += 25; // 稍微放慢一點點速度讓特效被看見
    if (nextLevelFlashAlpha >= 255) {
      isNextLevelFlash = false;
      nextLevelFlashAlpha = 0;
      
      // 畫面全白時切換關卡與重置位置
      currentLevel++;
      initLevelQuestions(); // 進入下一關時，抽取新題目
      levelTextScale = 3; // 切換關卡時觸發文字放大特效
      levelTransitionAlpha = 255; // 準備觸發原有的淡出特效
      
      // 重設角色位置到畫面中央
      characterX = width / 2;
      characterY = height * GROUND_Y_RATIO - ((spriteHeight * charScale / 2) - (spriteHeight2 / 2));
      teleportAnimScale = 1; // 恢復角色大小
    }
  }
}

// --- 獨立的繪圖函式 ---

function drawLoading() {
  push();
  // 恢復為乾淨柔和的深藍色漸層背景，保留高級感
  let bgGradient = drawingContext.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width);
  bgGradient.addColorStop(0, '#1e293b'); // 柔和深藍灰
  bgGradient.addColorStop(1, '#020617'); // 近乎黑色
  drawingContext.fillStyle = bgGradient;
  rect(0, 0, width, height);
  
  // [新增] 將 a.png 作為全螢幕背景，並降低透明度
  if (bgInvitation) {
    push();
    drawingContext.filter = 'blur(10px)'; // [新增] 加入模糊特效
    tint(255, 80); // 調整透明度 (0~255)，80 讓背景若隱若現，不會搶走邀請函焦點
    imageMode(CENTER);
    // [修改] 從中心點畫出，並稍微放大 1.15 倍，把邊緣的浮水印直接推出畫面外！
    image(bgInvitation, width / 2, height / 2, width * 1.15, height * 1.15); 
    drawingContext.filter = 'none'; // [新增] 重置濾鏡以免影響後面的繪圖
    pop();
  }

  // 點綴微弱的金色光點
  noStroke();
  for (let i = 0; i < 40; i++) {
    let px = noise(i * 100) * width;
    // 讓光點有緩慢向上飄動的感覺
    let py = (noise(i * 200) * height - frameCount * 0.5 + height * 1000) % height;
    let pSize = noise(i * 300) * 3 + 1;
    // 隨機閃爍透明度
    let pAlpha = map(sin(frameCount * 0.05 + i), -1, 1, 20, 150);
    fill(255, 235, 180, pAlpha); // 改為淺金色
    ellipse(px, py, pSize);
  }

  // --- 繪製極簡高級感邀請函 ---
  rectMode(CENTER);
  let cardW = min(900, width * 0.9); // [修改] 縮小卡片寬度，恢復精緻感
  let cardH = min(500, height * 0.8);  // [修改] 縮小卡片高度
  let cX = width / 2;
  let cY = height / 2 - 40;

  push(); // [新增] 開啟卡片 3D 浮動特效
  // [新增] 讓卡片產生緩慢呼吸漂浮感
  let floatY = sin(frameCount * 0.02) * 6;
  let scale3D = 1 + sin(frameCount * 0.015) * 0.015;
  translate(cX, cY + floatY);
  scale(scale3D);
  translate(-cX, -cY);

  // 卡片陰影
  drawingContext.shadowOffsetX = 0;
  // [修改] 陰影深度與模糊度隨漂浮動態變化，增強立體感
  drawingContext.shadowOffsetY = 15 + sin(frameCount * 0.02) * 5; 
  drawingContext.shadowBlur = 50 + sin(frameCount * 0.02) * 10; 
  drawingContext.shadowColor = 'rgba(0, 0, 0, 0.6)';

  // 乾淨的象牙白底色
  fill(252, 250, 245);
  noStroke();
  rect(cX, cY, cardW, cardH, 6); // 微圓角
  
  // 重置陰影
  drawingContext.shadowBlur = 0;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;

  // 內斂的極細金箔邊框
  noFill();
  stroke(212, 175, 55, 180); // 經典霧金色
  strokeWeight(1);
  rect(cX, cY, cardW - 30, cardH - 30, 3);

  // --- 故事劇情文字 ---
  let storyLines = [
    "【 來自淡江教科的邀請函 】",
    "致 尋找解答的挑戰者：",
    "永續發展的未來，需要您對「SDG 4」與「SDG 10」的智慧",
    "請踏入淡江校園，用知識的書本擊退迷惘，尋找散落的解答",
    "您，準備好接受這份邀請了嗎？"
  ];
  
  // 使用 loadingProgress 來控制故事進度 (0 ~ 100)
  // 總共 5 句話，每 20% 進度顯示一句
  loadingProgress += 0.15; // [修改] 進一步調慢進度，讓玩家有更充裕的時間閱讀
  
  let currentLine = floor(loadingProgress / 20);
  if (currentLine >= storyLines.length) currentLine = storyLines.length - 1;
  
  // 打字機特效：根據該句話內的進度 (0~20) 來決定顯示幾個字
  let lineProgress = (loadingProgress >= 100) ? 1.0 : (loadingProgress % 20) / 20; 
  let currentText = storyLines[currentLine];
  let showLength = ceil(lineProgress * currentText.length * 2.5); 
  if (showLength > currentText.length) showLength = currentText.length;
  
  // --- [修改] 播放打字音效邏輯 (優化精準度與同步感) ---
  if (loadingProgress < 100 && getAudioContext().state === 'running') {
    // 使用「行數 * 1000 + 該行字數」創造唯一的進度 ID，避免換行時的誤判
    let currentAbsLength = currentLine * 1000 + showLength;
    
    // 判斷是否「正在打字」(新字出現中，且未超過該行長度)
    let isTyping = (currentAbsLength > lastTypedLength && showLength <= currentText.length && showLength > 0);
    
    if (isTyping) {
      if (keyboardSound) {
        // 自動判斷音檔類型來決定播放方式：
        if (keyboardSound.duration() > 0.5) {
          // 1. 若是「連續打字聲」的長音檔，確保它持續播放即可
          if (!keyboardSound.isPlaying()) keyboardSound.play(0, 1, 0.3);
        } else {
          // 2. 若是「單鍵」的短音檔，則每個字精準觸發，並加入音高微調(rate)更寫實
          keyboardSound.play(0, random(0.95, 1.05), 0.3);
        }
      }
      lastTypedLength = currentAbsLength;
    } else if (showLength >= currentText.length) {
      // 若該句已打完、正在等待下一句時，暫停連續打字聲
      if (keyboardSound && keyboardSound.duration() > 0.5 && keyboardSound.isPlaying()) {
        keyboardSound.pause(); 
      }
    }
  } else if (loadingProgress >= 100) {
    // 打字結束，如果音效還在拖尾則強制停止
    if (keyboardSound && keyboardSound.isPlaying()) keyboardSound.stop();
  }

  // 文字排版與優雅字體
  textAlign(CENTER, TOP); // [修改] 為了逐行接續，改為向上對齊
  textFont('Georgia'); // [修改] 簡化字體名稱，避免部分瀏覽器解析錯誤導致無法放大字級
  
  // [修改] 調整為適中且優雅的字體大小
  let isDesktop = width > 800;
  let titleSize = isDesktop ? 48 : 32; // 縮小標題
  let bodySize = isDesktop ? 28 : 20;  // 縮小內文
  let lineSpacing = bodySize * 2.0;    // 增加行距增加呼吸感
  
  // 計算所有文字的總高度，使其垂直置中
  let totalHeight = storyLines.length * lineSpacing + (titleSize * 0.5) + 20; // 增加 20 容納 SDG 色條
  let startY = cY - totalHeight / 2 + 10;

  // [新增] 迴圈繪製從第 0 句到當前句的所有文字 (不消失，接續下去)
  for (let i = 0; i <= currentLine; i++) {
    let textToDraw = storyLines[i];
    let isTitle = (i === 0);
    
    // 控制目前的透明度，前面的句子完全不透明，當前句子帶有淡入感
    let lineAlpha = 1.0;

    // 若是當前這句，則套用打字機截斷特效與淡入
    if (i === currentLine) {
      textToDraw = textToDraw.substring(0, showLength);
      lineAlpha = constrain(map(lineProgress, 0, 0.05, 0, 1), 0, 1);
    }

    drawingContext.globalAlpha = lineAlpha;

    // 針對邀請函標題與內文設定不同樣式與放大字體
    if (isTitle) {
      fill(160, 110, 20); // 更有質感的深金棕色
      textSize(titleSize); // [修改] 套用動態放大字級
      textStyle(BOLD);
      text(textToDraw, cX, startY);
      
      // [新增] 在邀請函標題下方加入 SDG 17 色條點綴
      push();
      let sdgColors = ['#E5243B', '#DDA63A', '#4C9F38', '#C5192D', '#FF3A21', '#26BDE2', '#FCC30B', '#A21942', '#FD6925', '#DD1367', '#FD9D24', '#BF8B2E', '#3F7E44', '#0A97D9', '#56C02B', '#00689D', '#19486A'];
      let stripeW = min(340, cardW * 0.6) / 17;
      let sX = cX - (stripeW * 17) / 2;
      let sY = startY + titleSize + 15;
      noStroke();
      rectMode(CORNER);
      for(let j = 0; j < 17; j++) {
        fill(sdgColors[j]);
        rect(sX + j * stripeW, sY, stripeW + 0.5, 3); // [修改] 調整為更細緻俐落的無圓角細線色帶
      }
      pop();
      
      startY += titleSize * 0.5 + 25; // 標題下方額外加一點空隙，容納彩條
    } else {
      fill(70, 70, 70); // 深碳灰色內文
      textSize(bodySize); // [修改] 套用動態放大字級
      textStyle(NORMAL);
      text(textToDraw, cX, startY);
    }
    
    drawingContext.globalAlpha = 1.0; // 重置透明度
    startY += lineSpacing; // 準備畫下一行
  }
  
  pop(); // [新增] 關閉卡片 3D 浮動特效
  
  // 點擊略過提示 (右上角)
  let alpha = map(sin(frameCount * 0.15), -1, 1, 100, 255);
  fill(255, 255, 255, alpha);
  textAlign(RIGHT, TOP);
  textSize(18);
  textFont('sans-serif'); // 略過按鈕用回乾淨的現代字體
  textStyle(BOLD);
  text("點擊略過 ⏭", width - 30, 30);
  
  // 極簡細線進度條
  let barW = 400;
  let barY = height / 2 + cardH / 2 + 50;
  noFill();
  stroke(255, 50);
  strokeWeight(2);
  strokeCap(ROUND);
  line(width / 2 - barW / 2, barY, width / 2 + barW / 2, barY);
  
  let w = map(min(loadingProgress, 100), 0, 100, 0, barW);
  stroke(212, 175, 55); // 金色進度
  line(width / 2 - barW / 2, barY, width / 2 - barW / 2 + w, barY);
  
  // [修改] 縮短等待時間，讓按鈕在文字播完後更快出現 (從 120 降至 102)
  if (loadingProgress >= 102) { 
    btnEnterTitle.position(width / 2 - 80, barY + 30);
    btnEnterTitle.show();
  }
  pop();
}

function drawTitle() {
  hideButtons(); // 確保不相關按鈕隱藏
  
  // [新增] 持續檢查並播放標題音樂，確保一開始就有音樂
  // 這能解決瀏覽器阻擋自動播放的問題：一旦使用者與頁面互動，音樂就會補上
  if (titleMusic && !titleMusic.isPlaying()) {
    titleMusic.setVolume(0.5);
    titleMusic.loop();
  }
  
  // 1. 繪製封面背景圖片
  push();
  imageMode(CORNER);
  image(bgStart, 0, 0, width, height);
  pop();

  // 2. 加入漂浮的光點 (螢火蟲效果) 增加氛圍
  push();
  noStroke();
  for(let i = 0; i < 20; i++) {
    let x = noise(frameCount * 0.002 + i * 100) * width;
    let y = noise(frameCount * 0.002 + i * 200) * height;
    let size = noise(frameCount * 0.01 + i) * 4 + 2;
    let alpha = noise(frameCount * 0.02 + i) * 150 + 50;
    fill(255, 255, 200, alpha);
    ellipse(x, y, size);
  }
  pop();

  // --- 3. 氣泡特效 (從底部往上飄) ---
  if (frameCount % 15 === 0) { // 每 15 幀產生一個氣泡
    titleBubbles.push(new TitleBubble());
  }

  for (let i = titleBubbles.length - 1; i >= 0; i--) {
    titleBubbles[i].update();
    titleBubbles[i].show();
    if (titleBubbles[i].isDead()) {
      titleBubbles.splice(i, 1);
    }
  }

  push();
  textAlign(CENTER, CENTER);
  textFont('Georgia'); // 使用更好看的字體
  
  // 計算縮放比例 (呼吸效果)
  let scaleFactor = 1 + sin(frameCount * 0.05) * 0.05;

  push();
  translate(width / 2, height / 2 - 60); // 將原點移至標題中心 (稍微往上)
  scale(scaleFactor); // 應用縮放

  // 4. 標題設計
  let rainbowHue = frameCount * 2 % 360; // 隨時間變化的色相

  // 設定漸層填充 (水晶質感，更有層次)
  let gradient = drawingContext.createLinearGradient(0, -40, 0, 40);
  gradient.addColorStop(0, '#FFFFFF'); // 頂部高光
  gradient.addColorStop(0.3, `hsl(${rainbowHue}, 100%, 50%)`); // 中間亮藍
  gradient.addColorStop(1, '#0056b3'); // 底部深藍
  drawingContext.fillStyle = gradient;

  // 設定邊框 (更細緻的光滑邊框)
  drawingContext.strokeStyle = '#FFFFFF'; // 白色粗邊框
  drawingContext.lineWidth = 8; // 配合字體縮小調整邊框
  drawingContext.lineJoin = 'round'; // 圓角連接

  // 繪製文字 (使用原生 Canvas API 以確保漸層和邊框效果完美)
  drawingContext.font = `900 ${min(65, width * 0.09)}px 'Arial Black', sans-serif`; // [修改] RWD 字體大小，字數變多稍微縮小
  drawingContext.textAlign = "center";
  drawingContext.textBaseline = "middle"; // 基線對齊
  
  // 先畫邊框
  drawingContext.strokeText("淡江教科 x SDGs 永續挑戰", 0, 0);
  // 再畫填充
  drawingContext.fillText("淡江教科 x SDGs 永續挑戰", 0, 0);
  
  // 繪製閃爍光點
  for (let i = 0; i < 4; i++) {
    let angle = random(TWO_PI);
    let distance = random(60, 90);
    let sx = cos(angle) * distance;
    let sy = sin(angle) * distance;
    
    // 白色的光點，透明度隨機
    fill(255, random(50, 150));
    noStroke();
    ellipse(sx, sy, 6, 6);
  }


  pop(); // 恢復原本的座標系

  // 裝飾線條
  stroke(255, 200);
  strokeWeight(2);
  let lineY = height / 2 + 10;
  line(width / 2 - 150, lineY, width / 2 + 150, lineY);

  // [新增] 閃爍提示文字 (提示使用者點擊以啟動音效)
  // 只有在音訊尚未啟動 (suspended) 時才顯示，一旦點擊啟動後自動消失
  if (getAudioContext().state !== 'running') {
    if (frameCount % 60 < 40) {
      fill(255, 255, 100);
      noStroke();
      textSize(18);
      textStyle(BOLD);
      text("請點擊畫面開啟音效", width / 2, height / 2 + 15);
    }
  } else {
    // [新增] 如果音效已啟動，顯示歡迎副標題填補視覺空缺
    fill(200, 220, 255);
    noStroke();
    textSize(18);
    textStyle(BOLD);
    text("— 準備好接受挑戰了嗎？ —", width / 2, height / 2 + 15);
  }

  // 底部版權文字 (加強可讀性)
  noStroke();
  fill(0, 150); // 半透明黑色背景條
  rectMode(CENTER);
  rect(width / 2, height - 30, 400, 30, 15);
  
  fill(255);
  textSize(14);
  textStyle(BOLD);
  text("Tamkang University | Educational Technology", width / 2, height - 30);
  
  // 調整按鈕的垂直位置，讓它們排列更整齊
  if (btnStart) btnStart.position(width / 2 - 100, height / 2 + 75);
  btnSettings.position(width / 2 - 60, height / 2 + 145);
  btnAbout.position(width / 2 - 60, height / 2 + 195);
  
  pop();
}

// --- 繪製 SDG 主題動態背景 ---
function drawSDGBackground() {
  // 深藍色優雅漸層背景
  let bgGradient = drawingContext.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width);
  bgGradient.addColorStop(0, '#1e293b');
  bgGradient.addColorStop(1, '#020617');
  drawingContext.fillStyle = bgGradient;
  rectMode(CORNER);
  rect(0, 0, width, height);

  // SDG 17 項指標官方代表色
  let sdgColors = ['#E5243B', '#DDA63A', '#4C9F38', '#C5192D', '#FF3A21', '#26BDE2', '#FCC30B', '#A21942', '#FD6925', '#DD1367', '#FD9D24', '#BF8B2E', '#3F7E44', '#0A97D9', '#56C02B', '#00689D', '#19486A'];
  
  // 背景漂浮 SDG 幾何色塊
  noStroke();
  rectMode(CENTER);
  for (let i = 0; i < 17; i++) {
    let px = noise(i * 100) * width;
    let py = (noise(i * 200) * height - frameCount * 0.4 + height * 1000) % height;
    let pSize = noise(i * 300) * 45 + 15; // 隨機色塊大小
    let pAlpha = map(sin(frameCount * 0.02 + i), -1, 1, 10, 60); // 半透明呼吸效果
    
    let c = color(sdgColors[i]);
    c.setAlpha(pAlpha);
    fill(c);
    
    push();
    translate(px, py);
    rotate(frameCount * 0.005 * (i % 2 === 0 ? 1 : -1));
    rect(0, 0, pSize, pSize, 8); // 圓角方形代表 SDG 目標圖示
    pop();
  }
}

function drawAbout() {
  hideButtons(); // 隱藏所有不相關按鈕
  push();

  // [修改] 將原本的動態背景換成 b.png 並降低透明度
  background(15, 23, 42); // 加入一個深色基底，讓半透明圖片效果更好
  push();
  tint(255, 100); // 設置透明度 (範圍 0~255，100 大約是 40% 的不透明度)
  imageMode(CORNER);
  image(bgAbout, 0, 0, width, height);
  pop();

  rectMode(CENTER);
  let cardW = min(750, width * 0.9); // [修改] 稍微加寬卡片
  let cardH = min(580, height * 0.85); // [修改] 加高卡片，提供更多空間給文字和進度條

  let cX = width / 2;
  let cY = height / 2 - 20;

  push(); // [新增] 開啟卡片 3D 浮動特效
  let floatY = sin(frameCount * 0.02) * 6;
  let scale3D = 1 + sin(frameCount * 0.015) * 0.015;
  translate(cX, cY + floatY);
  scale(scale3D);
  translate(-cX, -cY);

  // 卡片陰影
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 15 + sin(frameCount * 0.02) * 5;
  drawingContext.shadowBlur = 40 + sin(frameCount * 0.02) * 10;
  drawingContext.shadowColor = 'rgba(0, 0, 0, 0.6)';

  // 半透明黑底質感卡片
  fill(20, 25, 35, 220);
  stroke(212, 175, 55, 150); // 金色邊框
  strokeWeight(2);
  rect(cX, cY, cardW, cardH, 15);

  // 重置陰影
  drawingContext.shadowBlur = 0;

  textAlign(CENTER, TOP);
  fill(255, 220, 100);
  textFont('Georgia');
  let titleSize = min(42, cardH * 0.12);
  textSize(titleSize);
  textStyle(BOLD);
  text("關於遊戲", width / 2, height / 2 - cardH / 2 + 25);

  // [新增] 標題下方的 SDG 17 色彩條紋點綴
  let sdgColors = ['#E5243B', '#DDA63A', '#4C9F38', '#C5192D', '#FF3A21', '#26BDE2', '#FCC30B', '#A21942', '#FD6925', '#DD1367', '#FD9D24', '#BF8B2E', '#3F7E44', '#0A97D9', '#56C02B', '#00689D', '#19486A'];
  let stripeW = min(340, cardW * 0.6) / 17;
  let startX = width / 2 - (stripeW * 17) / 2;
  let startY = height / 2 - cardH / 2 + 25 + titleSize + 10;
  noStroke();
  rectMode(CORNER);
  for(let i = 0; i < 17; i++) {
    fill(sdgColors[i]);
    rect(startX + i * stripeW, startY, stripeW + 0.5, 4, 2);
  }

  textAlign(CENTER, TOP); // [修改] 改為向上對齊，避免文字往上長而重疊
  fill(240, 240, 245);
  textStyle(NORMAL);
  textFont('sans-serif');
  // [修改] 稍微調小字級，避免文字排版過長
  let bodySize = min(max(12, cardW * 0.022), cardH * 0.038); 
  textSize(bodySize);
  textLeading(bodySize * 1.5);

  let info = "【 遊戲宗旨 】\n" +
             "結合淡江教科專業，透過闖關了解 SDG 4 優質教育與 SDG 10 減少不平等。\n\n" +
             "【 電腦鍵盤操作 (建議體驗) 】\n" +
             "● 左右移動：鍵盤方向鍵 ⬅ ➡  |  跳躍：上方向鍵 ⬆\n" +
             "● 知識攻擊：下方向鍵 ⬇ (發射書本以擊退迷惘或與 NPC 互動)\n" +
             "● 遊戲暫停：按下鍵盤 P 鍵 或 Esc 鍵\n\n" +
             "【 如何通關 】\n" +
             "1. 尋找 NPC：靠近提問者會自動觸發對話，請使用滑鼠點擊選項作答。\n" +
             "2. 觀察進度：畫面上方的「進度條」全滿後，代表已收集足夠的 SDG 知識。\n" +
             "3. 抵達終點：前往最右側，進入閃爍的「EXIT」傳送陣即可前往下一關。\n\n" +
             "💡 提示：滑鼠右鍵點擊可跳過過場。 🖱 建議搭配鍵盤移動與滑鼠作答。";
  // [修改] 稍微減少與上方標題的間距，預留下方空間給進度條範例
  text(info, width / 2, height / 2 - cardH / 2 + 25 + titleSize + 15);

  // --- [新增] 進度條與圖示視覺範例 (Visual Key) ---
  let demoY = height / 2 + cardH / 2 - 60; // [修改] 稍微下移，避免與上方說明文字重疊
  let demoW = 140;
  let demoH = 16;
  
  push();
  // 1. 繪製進度條範例
  rectMode(CENTER);
  stroke(255, 200);
  strokeWeight(2);
  fill(0, 100); // 黑色半透明底
  rect(width / 2, demoY, demoW, demoH, 8);
  
  // [修改] 動態比例範例 (模擬從 30% 到 90% 循環波動)
  let demoRatio = map(sin(frameCount * 0.05), -1, 1, 0.3, 0.9);
  // [新增] 呼吸燈閃爍發光感
  drawingContext.shadowBlur = map(sin(frameCount * 0.1), -1, 1, 5, 20);
  drawingContext.shadowColor = 'rgba(50, 255, 100, 0.8)';

  noStroke();
  fill(50, 255, 100); // 經典綠色進度
  rectMode(CORNER);
  rect(width / 2 - demoW / 2 + 3, demoY - demoH / 2 + 3, (demoW - 6) * demoRatio, demoH - 6, 6);
  drawingContext.shadowBlur = 0; // 重置發光以免影響後續繪圖
  
  // 2. 加上圖示說明文字
  textAlign(CENTER, TOP);
  fill(200, 220, 255);
  textStyle(BOLD);
  textSize(max(12, bodySize * 0.8));
  text("▲ 這是遊戲畫面中央上方的「進度條」範例", width / 2, demoY + 15);
  text("( 當此條全滿時，EXIT 傳送陣才會啟動 )", width / 2, demoY + 35);
  pop();

  pop(); // [新增] 關閉卡片 3D 浮動特效

  // 顯示返回、開始遊戲，以及切換到設定的按鈕
  let btnY = height / 2 + cardH / 2 + 20;
  if (btnBack) btnBack.position(width / 2 - 240, btnY);
  if (btnStart) btnStart.position(width / 2 - 100, btnY - 10); // 微調高度讓所有按鈕中心對齊
  if (btnSettings) btnSettings.position(width / 2 + 120, btnY);
  pop();
}

function drawSettings() {
  hideButtons(); // 隱藏不相關按鈕
  
  push();
  // [修改] 將原本的動態背景換成 c.png 並降低透明度
  background(15, 23, 42); // 加入一個深色基底
  push();
  tint(255, 100); // 設置透明度 (範圍 0~255，100 大約是 40% 的不透明度)
  imageMode(CORNER);
  image(bgSettingsImg, 0, 0, width, height);
  pop();

  rectMode(CENTER);
  let cardW = min(500, width * 0.8);
  let cardH = min(400, height * 0.6);

  // 卡片陰影
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 15;
  drawingContext.shadowBlur = 40;
  drawingContext.shadowColor = 'rgba(0, 0, 0, 0.6)';

  // 半透明黑底質感卡片
  fill(20, 25, 35, 220);
  stroke(212, 175, 55, 150); // 金色邊框
  strokeWeight(2);
  rect(width / 2, height / 2 - 20, cardW, cardH, 15);

  // 重置陰影
  drawingContext.shadowBlur = 0;

  textAlign(CENTER, TOP);
  fill(255, 220, 100);
  textFont('Georgia');
  textSize(42);
  textStyle(BOLD);
  text("遊戲設定", width / 2, height / 2 - cardH / 2 + 30);

  // [新增] 標題下方的 SDG 17 色彩條紋點綴
  let sdgColors = ['#E5243B', '#DDA63A', '#4C9F38', '#C5192D', '#FF3A21', '#26BDE2', '#FCC30B', '#A21942', '#FD6925', '#DD1367', '#FD9D24', '#BF8B2E', '#3F7E44', '#0A97D9', '#56C02B', '#00689D', '#19486A'];
  let stripeW = min(340, cardW * 0.6) / 17;
  let startX = width / 2 - (stripeW * 17) / 2;
  let startY = height / 2 - cardH / 2 + 30 + 42 + 10;
  noStroke();
  rectMode(CORNER);
  for(let i = 0; i < 17; i++) {
    fill(sdgColors[i]);
    rect(startX + i * stripeW, startY, stripeW + 0.5, 4, 2);
  }

  textAlign(CENTER, CENTER);
  fill(240, 240, 245);
  textStyle(NORMAL);
  textFont('sans-serif');
  textSize(24);
  text("音量調整", width / 2, height / 2 - 40);

  // 應用音量設定 (控制全域音量)
  outputVolume(sliderVolume.value());

  textSize(18);
  fill(200, 220, 255);
  text(floor(sliderVolume.value() * 100) + "%", width / 2 + 120, height / 2 + 8); // 顯示百分比
  pop();
  
  // 顯示設定畫面專用元件
  sliderVolume.position(width / 2 - 100, height / 2);
  
  // 顯示返回、開始遊戲，以及切換到關於遊戲的按鈕
  let btnY = height / 2 + cardH / 2 + 20;
  if (btnBack) btnBack.position(width / 2 - 240, btnY);
  if (btnStart) btnStart.position(width / 2 - 100, btnY - 10); // 微調高度讓所有按鈕中心對齊
  if (btnAbout) btnAbout.position(width / 2 + 120, btnY);
}

function drawGameOver() {
  hideButtons(); // 確保按鈕隱藏
  push();
  
  // [修改] 使用 fall.png 作為背景
  background(20, 0, 0); // 深紅黑基底
  if (bgGameOver) {
    push();
    tint(255, 120); // 略低透明度增加壓抑感
    imageMode(CORNER);
    image(bgGameOver, 0, 0, width, height);
    pop();
  }

  textAlign(CENTER, CENTER);
  fill(255, 80, 80); // 柔和一點的紅色文字
  textSize(min(100, width * 0.15)); // [修改] RWD 字體大小
  textStyle(BOLD);
  text("GAME OVER", width / 2, height / 2 - 100);

  // 診斷建議框 (毛玻璃效果)
  push(); // [新增] 開啟浮動與發光特效
  let floatY = sin(frameCount * 0.05) * 5; // [新增] 緩慢呼吸浮動
  translate(0, floatY);
  
  // [新增] 呼吸發光效果
  drawingContext.shadowBlur = 15 + sin(frameCount * 0.05) * 10;
  drawingContext.shadowColor = 'rgba(255, 100, 100, 0.6)';

  fill(20, 20, 20, 200);
  stroke(255, 100, 100, 150);
  strokeWeight(2);
  rectMode(CENTER);
  rect(width / 2, height / 2 + 20, min(500, width * 0.8), 100, 15);

  drawingContext.shadowBlur = 0; // [新增] 重置發光以免影響文字

  fill(255, 200, 200);
  textSize(20);
  textStyle(NORMAL);
  // [修改] 加入專屬稱呼，增加互動感
  text(`【適性診斷建議】\n親愛的 ${playerName}，請回顧 SDG 4 與 SDG 10 核心指標\n失敗是成功的養分，再挑戰一次吧！`, width / 2, height / 2 + 20);
  pop(); // [新增] 關閉特效
  
  // 顯示按鈕 (上下排列)
  if (btnRestart) btnRestart.position(width / 2 - 80, height / 2 + 100);
  if (btnReturnToTitle) btnReturnToTitle.position(width / 2 - 170, height / 2 + 160); // [修改] 向左移
  if (btnBackToStart) btnBackToStart.position(width / 2 + 10, height / 2 + 160);   // [修改] 向右移，且 Y 座標與左邊相同
  
  pop();
}

function drawVictory() {
  hideButtons(); // 確保按鈕隱藏
  push();
  
  // [修改] 將背景換成 d.png 並降低透明度
  background(15, 23, 42); // 墊一層深藍色基底，增加質感
  if (bgSolved) {
    push();
    tint(255, 100); // 設定透明度 (範圍 0~255，100 約為 40% 不透明度)
    imageMode(CORNER);
    image(bgSolved, 0, 0, width, height);
    pop();
  }

  // --- 煙火動畫邏輯 ---
  if (random(1) < 0.05) { // 每幀有 5% 機率產生新煙火
    fireworks.push(new Firework());
  }
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }

  // --- 彩帶動畫邏輯 ---
  if (frameCount % 4 === 0) { // 每 4 幀產生一個新彩帶
    confetti.push(new Confetti());
  }
  for (let i = confetti.length - 1; i >= 0; i--) {
    confetti[i].update();
    confetti[i].show();
    if (confetti[i].offScreen()) {
      confetti.splice(i, 1);
    }
  }

  // 裝飾性背景光環
  noFill();
  stroke(255, 215, 0, 40);
  strokeWeight(2);
  ellipse(width / 2, height / 2 - 140, 300);
  ellipse(width / 2, height / 2 - 140, 320);

  textAlign(CENTER, CENTER);
  // [修改] 強化金色閃爍與呼吸發光特效
  let glowIntensity = map(sin(frameCount * 0.12), -1, 1, 20, 60); // 呼吸般的發光強度
  let textAlpha = map(sin(frameCount * 0.2), -1, 1, 200, 255); // 文字本身的閃爍
  fill(255, 215, 0, textAlpha); 
  textSize(min(70, width * 0.1));
  textStyle(BOLD);
  text("🎯 學習目標達成", width / 2, height / 2 - 140);

  // [新增] 疊加一層淡淡的白色高光層，增加「鑽石般」的閃爍質感
  if (frameCount % 40 < 10) {
    fill(255, 255, 220, 150);
    text("🎯 學習目標達成", width / 2, height / 2 - 140);
  }

  // [新增] 學習分析儀表板背景
  fill(30, 30, 30, 200);
  stroke(255, 215, 0, 150);
  strokeWeight(2);
  rectMode(CENTER);
  let dashboardW = min(500, width * 0.85);
  rect(width / 2, height / 2 + 25, dashboardW, 210, 20); // [修改] 加高儀表板容納姓名

  // [新增] 學習分析數據 (Learning Analytics)
  fill(255, 240, 150);
  noStroke();
  textSize(24);
  textStyle(BOLD);
  text("📊 學習分析報告 (Learning Analytics)", width / 2, height / 2 - 50);

  // 繪製分隔線
  stroke(255, 215, 0, 100);
  strokeWeight(1);
  line(width / 2 - dashboardW/2 + 40, height / 2 - 25, width / 2 + dashboardW/2 - 40, height / 2 - 25);

  noStroke();
  fill(255);
  textSize(18);
  textStyle(NORMAL);
  textAlign(LEFT, CENTER);
  let accuracy = totalAttempts > 0 ? floor((correctAttempts / totalAttempts) * 100) : 0;
  let minutes = floor(gameFinalTime / 60);
  let seconds = gameFinalTime % 60;
  
  let startX = width / 2 - 140;
  text(`👤 挑戰者: ${playerName}`, startX, height / 2 + 5); // [新增] 顯示玩家姓名
  text(`⏳ 認知投入時間: ${nf(minutes, 2)}:${nf(seconds, 2)}`, startX, height / 2 + 40);
  text(`🎯 答題正確率: ${accuracy}%`, startX, height / 2 + 75);
  text(`🏆 累積總積分: ${score} pts`, startX, height / 2 + 110);
  
  // 顯示按鈕 (上下排列)
  if (btnRestart) btnRestart.position(width / 2 - 80, height / 2 + 150); // [修改] 往下移位
  if (btnReturnToTitle) btnReturnToTitle.position(width / 2 - 170, height / 2 + 210); // [修改] 往下移位
  if (btnBackToStart) btnBackToStart.position(width / 2 + 10, height / 2 + 210);   // [修改] 往下移位
  
  pop();
}

function drawPlaying() {
  // --- 攝影機更新 ---
  // 攝影機試圖將玩家保持在畫面中央
  let targetCameraX = characterX - width / 2;
  // 限制攝影機的移動範圍，使其不會超出世界邊界
  cameraX = constrain(targetCameraX, 0, worldWidth - width);

  // --- 繪製背景 (有視差滾動效果) ---
  push();
  // [修改] 讓背景捲動比攝影機慢 (cameraX * 0.7)，產生視差效果
  translate(-cameraX * 0.7, 0);
  imageMode(CORNER);
  let bg;
  if (currentLevel === 1) bg = bgGate;
  else if (currentLevel === 2) bg = bgLiberalArts;
  else bg = bgTrack;
  // 為了填滿整個世界，將背景圖平鋪繪製
  for (let i = 0; i * width < worldWidth; i++) {
    image(bg, i * width, 0, width, height);
  }
  pop();

  // 繪製落葉 (不受攝影機影響，感覺像在螢幕上飄)
  drawLeaves();

  // --- 繪製所有在遊戲世界中的物件 ---
  push();
  translate(-cameraX, 0); // 將所有世界物件根據攝影機位置進行偏移

  // 繪製傳送點
  drawTeleporter();

  // --- 處理道具 (生成與繪製) ---
  handleItems();

  // --- 繪製走路塵土效果 (移至此處以正確套用攝影機視角) ---
  handleDust();

  // --- 繪製角色陰影 (使用世界座標) ---
  // 在繪製角色前先畫陰影，確保陰影在角色下方
  drawShadow(characterX, characterY + 255, 100 * teleportAnimScale); // 玩家陰影 (隨傳送縮小)
  drawShadow(character2X, character2Y + 85, 90); // 提問者陰影
  drawShadow(stopPosX, stopPosY + 75, 120); // 提示者陰影

  // --- 更新無敵狀態計時器 ---
  if (isInvincible) {
    invincibleTimer--;
    if (invincibleTimer <= 0) {
      isInvincible = false;
    }
  }

  // --- 關卡相關邏輯 ---
  // [修改] 移除 if (currentLevel === 1) 限制，讓 NPC 在所有關卡都出現
  
    // --- 角色3 (提示者) 互動邏輯 ---
    // 原本是害怕的角色，現在改為提示者
    let distanceToCenter = dist(characterX, characterY, stopPosX, stopPosY);
    let showHint = distanceToCenter < stopHitThreshold;
    
    // 如果提示框關閉，重置打字機進度
    if (!showHint) typeWriterHintIndex = 0;

    // 平滑更新縮放比例 (彈出動畫)
    hintBoxScale = lerp(hintBoxScale, showHint ? 1 : 0, 0.5);

    // 移除原本的 isScared 邏輯，讓提示者保持冷靜

    // 中央角色待機動畫
    drawCenterCharacter();
    
    // --- 角色2互動邏輯 ---
    // 計算兩個角色之間的距離
    let d = dist(characterX, characterY, character2X, character2Y);
    let showQuestionBox = d < proximityThreshold;
    questionBoxScale = lerp(questionBoxScale, showQuestionBox ? 1 : 0, 0.5);

    // 如果角色1進入範圍，觸發互動
    if (d < proximityThreshold) {
      isSmiling2 = true;
      isNearQuestioner = true;
    } else {
      isNearQuestioner = false;
      typeWriterQIndex = 0; // 離開時重置題目打字機
    }

    // --- 繪製新角色 (角色2) ---
    if (isFallingDown2) {
      // 播放倒下動畫
      push();
      translate(character2X, character2Y);
      // 根據角色1的位置決定倒下時的朝向
      if (characterX < character2X) {
        scale(-1, 1);
      }
      
      if (currentLevel === 2) {
        // 第二關使用角色6 Protection 動畫 (受到攻擊時的保護動作)
        let pIndex = floor(fallDownCurrentFrame2) % numFrames6Protection;
        
        // [新增] 計算垂直偏移以對齊腳底
        let offsetY = (spriteHeight2 - spriteSheet6Protection.height * scale6) / 2;
        translate(0, offsetY);

        image(animation6Protection[pIndex], 0, 0, frameWidth6Protection * scale6, spriteSheet6Protection.height * scale6);

        // [新增] 防護罩特效
        push();
        let shieldPulse = sin(frameCount * 0.2); // 呼吸頻率
        let shieldSizeW = (frameWidth6Protection * scale6) * (1.1 + shieldPulse * 0.05);
        let shieldSizeH = (spriteSheet6Protection.height * scale6) * (1.0 + shieldPulse * 0.05);
        
        // 發光設定
        drawingContext.shadowBlur = 20;
        drawingContext.shadowColor = 'rgba(100, 200, 255, 0.8)';
        
        // 繪製防護罩 (半透明藍色光圈)
        fill(100, 200, 255, 60);
        stroke(150, 230, 255, 200);
        strokeWeight(3);
        ellipse(0, 0, shieldSizeW, shieldSizeH);
        
        // [新增] 旋轉粒子特效
        noStroke();
        let particleCount = 6; // 粒子數量
        for (let i = 0; i < particleCount; i++) {
          let angle = (frameCount * 0.15) + (i * TWO_PI / particleCount);
          // 讓粒子在防護罩邊緣旋轉
          let px = cos(angle) * (shieldSizeW / 2); 
          let py = sin(angle) * (shieldSizeH / 2);
          
          fill(255, 255, 255, 200); // 白色高亮粒子
          ellipse(px, py, 8, 8);
        }
        
        drawingContext.shadowBlur = 0;
        pop();
      } else if (currentLevel === 3) {
        // 第三關使用角色10 受傷動畫
        let currentAnim, currentCount, currentSheet, currentW;
        
        // 判斷被攻擊次數，決定使用哪一個受傷動畫
        if (char2HitCount >= 2) { // 如果被攻擊兩次(含)以上，換成 5 張圖的受傷動作
          currentAnim = animation10Hurt2;
          currentCount = numFrames10Hurt2;
          currentSheet = spriteSheet10Hurt2;
          currentW = frameWidth10Hurt2;
        } else {
          currentAnim = animation10Hurt;
          currentCount = numFrames10Hurt;
          currentSheet = spriteSheet10Hurt;
          currentW = frameWidth10Hurt;
        }

        // 計算垂直偏移以對齊腳底
        let offsetY = (spriteHeight2 - currentSheet.height * scale10) / 2;
        translate(0, offsetY);
        
        // 播放動畫 (不循環，播完一次後停止)
        let pIndex = floor(fallDownCurrentFrame2);
        if (pIndex >= currentCount) pIndex = currentCount - 1; // 鎖定在最後一幀
        
        image(currentAnim[pIndex], 0, 0, currentW * scale10, currentSheet.height * scale10);
        
      } else if (currentLevel === 1) {
        // 第一關使用角色7 (無倒下動畫，使用待機動畫代替)
        // 計算垂直偏移以對齊腳底
        let feetY = spriteHeight2 / 2; // 角色2的腳底相對位置
        let drawY = feetY - (spriteHeight7 * scale7) / 2;
        
        let frame = animation7[floor(currentFrame7)];
        image(frame, 0, drawY, frameWidth7 * scale7, spriteHeight7 * scale7);
        currentFrame7 = (currentFrame7 + animationSpeed7) % numFrames7;
      } else {
        image(fallDownAnimation2[floor(fallDownCurrentFrame2)], 0, 0);
      }
      pop();

      // 動畫播放一次後停在最後一幀
      if (currentLevel === 2) {
        // 角色6: 播放兩次防禦動作 (共 2 張圖 * 2 次 = 4 幀長度)
        if (fallDownCurrentFrame2 < numFrames6Protection * 2 - 0.1) {
          fallDownCurrentFrame2 += 0.05; // 速度 0.05
        } else {
          isFallingDown2 = false; // 動畫結束後自動恢復站立
        }
      } else if (currentLevel === 3) {
        // 角色10: 播放受傷動畫
        let maxF = (char2HitCount >= 2) ? numFrames10Hurt2 : numFrames10Hurt;
        if (fallDownCurrentFrame2 < maxF - 0.1) {
          fallDownCurrentFrame2 += 0.15; // 動畫速度
        } else {
          isFallingDown2 = false; // 動畫結束後自動恢復站立，確保玩家可以繼續答題
        }
      } else if (fallDownCurrentFrame2 < fallDownNumFrames2 - 1) {
        fallDownCurrentFrame2 += fallDownAnimationSpeed2;
      }

      // 如果角色1靠近，則恢復 (第二、三關除外，因為會自動恢復)
      if (currentLevel !== 2 && currentLevel !== 3 && d < recoveryThreshold) {
        isFallingDown2 = false;
      }
    } else if (isSmiling2) {
      // 播放微笑動畫
      push();
      translate(character2X, character2Y);
      // 根據角色1的位置決定微笑時的朝向
      if (characterX < character2X) {
        scale(-1, 1);
      }

      if (currentLevel === 2) {
        // 第二關使用角色6 (無對話動畫，使用待機動畫代替)
        // [新增] 計算垂直偏移以對齊腳底
        let offsetY = (spriteHeight2 - spriteSheet6.height * scale6) / 2;
        translate(0, offsetY);
        image(animation6[floor(frameCount * 0.15) % numFrames6], 0, 0, frameWidth6 * scale6, spriteSheet6.height * scale6);
      } else if (currentLevel === 3) {
        // 第三關使用角色10 (無對話動畫，使用待機動畫代替)
        let offsetY = (spriteHeight2 - spriteSheet10.height * scale10) / 2;
        translate(0, offsetY);
        image(animation10[floor(frameCount * 0.15) % numFrames10], 0, 0, frameWidth10 * scale10, spriteSheet10.height * scale10);
      } else if (currentLevel === 1) {
        // 第一關使用角色7 (靠近時使用 Idle 動畫)
        // 計算垂直偏移以對齊腳底
        let feetY = spriteHeight2 / 2;
        let drawY = feetY - (spriteHeight7Idle * scale7) / 2;

        let frame = animation7Idle[floor(currentFrame7Idle)];
        image(frame, 0, drawY, frameWidth7Idle * scale7, spriteHeight7Idle * scale7);
        currentFrame7Idle = (currentFrame7Idle + animationSpeed7Idle) % numFrames7Idle;
      } else {
        image(smileAnimation2[floor(smileCurrentFrame2)], 0, 0);
        
        // 持續播放微笑動畫 (原本的邏輯)
        smileCurrentFrame2 = (smileCurrentFrame2 + smileAnimationSpeed2);
        // 如果動畫播完，就停在最後一幀
        if (smileCurrentFrame2 >= smileNumFrames2) smileCurrentFrame2 = smileNumFrames2 - 1;
      }
      pop();


      // 如果玩家移開，則重置微笑
      if (d >= proximityThreshold) {
        isSmiling2 = false;
        hideButtons([btnGamePause]); // 離開時隱藏按鈕
      }
    } else {
      // 播放待機動畫，並根據角色1位置轉向
      if (currentLevel === 2) {
        // 第二關顯示角色6
        let frame = animation6[floor(currentFrame2) % numFrames6];
        // [新增] 計算垂直偏移以對齊腳底
        let offsetY = (spriteHeight2 - spriteSheet6.height * scale6) / 2;
        let drawY = character2Y + offsetY;

        if (characterX < character2X) {
          push();
          translate(character2X, drawY);
          scale(-1, 1);
          image(frame, 0, 0, frameWidth6 * scale6, spriteSheet6.height * scale6);
          pop();
        } else {
          image(frame, character2X, drawY, frameWidth6 * scale6, spriteSheet6.height * scale6);
        }
      } else if (currentLevel === 3) {
        // 第三關顯示角色10
        let frame = animation10[floor(currentFrame2) % numFrames10];
        let offsetY = (spriteHeight2 - spriteSheet10.height * scale10) / 2;
        let drawY = character2Y + offsetY;

        if (characterX < character2X) {
          push();
          translate(character2X, drawY);
          scale(-1, 1);
          image(frame, 0, 0, frameWidth10 * scale10, spriteSheet10.height * scale10);
          pop();
        } else {
          image(frame, character2X, drawY, frameWidth10 * scale10, spriteSheet10.height * scale10);
        }
      } else if (currentLevel === 1) {
        // 第一關顯示角色7
        // 計算垂直偏移以對齊腳底 (因為 character2Y 是角色2的中心點)
        let feetY = character2Y + spriteHeight2 / 2;
        let drawY = feetY - (spriteHeight7 * scale7) / 2;
        let frame = animation7[floor(currentFrame7)];

        if (characterX < character2X) {
          push();
          translate(character2X, drawY); // 使用計算後的 Y 軸位置
          scale(-1, 1);
          image(frame, 0, 0, frameWidth7 * scale7, spriteHeight7 * scale7); // 圖片原點繪製
          pop();
        } else {
          image(frame, character2X, drawY, frameWidth7 * scale7, spriteHeight7 * scale7);
        }
      } else {
        // 其他關卡顯示原本的角色2
        if (characterX < character2X) {
          push();
          translate(character2X, character2Y);
          scale(-1, 1); // 水平翻轉
          image(animation2[floor(currentFrame2)], 0, 0);
          pop();
        } else {
          // 角色1在右邊，角色2恢復正常朝向 (朝右)
          image(animation2[floor(currentFrame2)], character2X, character2Y);
        }
      }
      // 更新待機動畫的畫格
      let maxFrames = numFrames2;
      if (currentLevel === 2) maxFrames = numFrames6;
      else if (currentLevel === 3) maxFrames = numFrames10;
      
      currentFrame2 = (currentFrame2 + animationSpeed2) % maxFrames;
      currentFrame7 = (currentFrame7 + animationSpeed7) % numFrames7; // 更新角色7動畫
      hideButtons([btnGamePause]); // 確保非互動狀態按鈕隱藏
    }
  
  // --- 傳送邏輯 ---
  // 調整判定點至角色腳部附近，因為角色放大後中心點較高
  let checkY = characterY + (spriteHeight * charScale / 2) - 80;
  let distToTeleporter = dist(characterX, checkY, teleportX, teleportY - 40); // 碰撞判定的Y軸往上一點
  if (distToTeleporter < teleportRadius && !isTeleporting) {
    if (quizSolved) { // [修改] 必須答對題目才能傳送
      if (teleportSound) teleportSound.play(); // 播放傳送音效
      isTeleporting = true; // 開始傳送動畫
    } else {
      // 顯示未過關提示
      fill(255, 0, 0);
      textAlign(CENTER);
      textSize(20);
      text("請先回答問題！", characterX, characterY - 100);
    }
  }

  // 處理傳送動畫與過關邏輯
  if (isTeleporting) {
    teleportAnimScale -= 0.05; // 縮小速度
    teleportAnimAngle += 0.5; // 旋轉速度
    
    // 產生傳送粒子特效 (每幀產生 5 個)
    for (let i = 0; i < 5; i++) {
      teleportParticles.push(new TeleportParticle(characterX, characterY));
    }

    if (teleportAnimScale <= 0) {
      teleportAnimScale = 0;
      score += 50; // 過關加分
      isTeleporting = false; // [修改] 提早結束傳送狀態，避免重複觸發
      teleportAnimAngle = 0;
      
      if (currentLevel === 3) {
        gameState = 'victory'; // 通過第三關顯示勝利畫面
        gameFinalTime = floor((millis() - gameStartTime) / 1000); // 計算通關時間 (秒)
        if (bgMusic && bgMusic.isPlaying()) bgMusic.stop(); // 停止背景音樂
        if (victoryMusic) {
          victoryMusic.setVolume(0.5);
          victoryMusic.loop(); // 播放勝利音樂
        }
        if (winSound) winSound.play(); // [新增] 播放獲勝音效
        teleportAnimScale = 1; // 恢復以供下次遊玩
      } else {
        isNextLevelFlash = true; // [修改] 觸發切換關卡的閃爍特效，不立刻切換
        // [新增] 播放 su.mp3 的前 2 秒來配合閃光 (時間起點=0, 速率=1, 音量=0.8, 播放起點=0, 持續時間=2)
        if (dashSound) dashSound.play(0, 1, 0.8, 0, 2); 
      }
    }
  }

  // 更新並繪製傳送粒子
  for (let i = teleportParticles.length - 1; i >= 0; i--) {
    teleportParticles[i].update();
    teleportParticles[i].show();
    if (teleportParticles[i].isDead()) {
      teleportParticles.splice(i, 1);
    }
  }

  // 處理並繪製所有飛行道具
  // 從後往前遍歷，方便安全地從陣列中移除元素
  for (let i = projectiles.length - 1; i >= 0; i--) {
    let p = projectiles[i];
    p.x += p.speed * p.direction;
    
    if (p.direction === 1) {
      image(toolAnimation[floor(p.currentFrame)], p.x, p.y);
    } else {
      push();
      translate(p.x, p.y);
      scale(-1, 1);
      image(toolAnimation[floor(p.currentFrame)], 0, 0);
      pop();
    }
    
    // --- 飛行道具碰撞偵測 ---
    // 只有在第一關時才偵測與角色2的碰撞
    // [修改] 讓所有關卡都能擊中提問者 (雖然這會打斷答題，但保留物理互動)
      let projectileDistance = dist(p.x, p.y, character2X, character2Y);
      if (projectileDistance < projectileHitThreshold && !isFallingDown2) {
        // score += 10; // 擊中不加分，避免刷分
        isFallingDown2 = true; // 觸發倒下
        isSmiling2 = false; // 停止微笑
        fallDownCurrentFrame2 = 0; // 從第一幀開始播放
        if (currentLevel === 3) char2HitCount++; // [新增] 第三關累計攻擊次數
        projectiles.splice(i, 1); // 移除擊中的飛行道具
        continue; // 繼續下一個迴圈，避免後續的越界判斷
      }

      // 飛行道具擊中角色3（站立的角色）
      let centerHitDistance = dist(p.x, p.y, stopPosX, stopPosY);
      if (centerHitDistance < stopHitThreshold) {
        stopHitTimer = stopHitDuration; // 觸發快速動畫
        projectiles.splice(i, 1);
        continue;
      }
    

    p.currentFrame = (p.currentFrame + toolAnimationSpeed) % toolNumFrames;

    // 如果飛行道具完全離開畫布的可視範圍，就將其從陣列中移除
    // 判斷條件為：物件中心點 超出 畫布邊界 + 物件寬度的一半
    if (p.x > width + (toolFrameWidth / 2) || p.x < -(toolFrameWidth / 2)) {
      projectiles.splice(i, 1);
    }
  }

  // --- 角色1 (玩家) 繪製邏輯 ---
  // 優先處理跳躍狀態
  push(); // 開始角色繪製設定
  
  // [新增] 確保攻擊或跳躍時停止腳步聲
  if ((isPushing || isJumping) && footstepSound && footstepSound.isPlaying()) {
    footstepSound.stop();
  }

  // 應用傳送動畫縮放
  translate(characterX, characterY);
  scale(teleportAnimScale);
  rotate(teleportAnimAngle);
  translate(-characterX, -characterY);

  // 如果處於無敵狀態，讓角色閃爍 (每 10 幀切換一次透明度)
  if (isInvincible && frameCount % 10 < 5) {
    tint(255, 128); // 半透明
  }

  if (isPushing) {
    // 播放攻擊動畫
    let frame = pushAnimation[floor(pushCurrentFrame)];
    
    // 計算垂直偏移量，讓攻擊動作的腳底位置與待機動作一致 (保持在同一平面)
    // 取得待機圖片的高度作為基準
    let idleFrameHeight = animation[0].height;
    let attackFrameHeight = frame.height;
    let feetOffset = (idleFrameHeight - attackFrameHeight) * charScale / 2;

    if (facingDirection === 1) {
      image(frame, characterX, characterY + feetOffset, frame.width * charScale, frame.height * charScale);
    } else {
      push();
      translate(characterX, characterY + feetOffset);
      scale(-1, 1);
      image(frame, 0, 0, frame.width * charScale, frame.height * charScale);
      pop();
    }

    pushCurrentFrame += pushAnimationSpeed;

    // 在動畫的特定幀產生飛行道具
    if (floor(pushCurrentFrame) === 3 && !hasFired) {
      let newProjectile = {
        x: characterX + (50 * facingDirection), // 在角色前方產生
        y: characterY - 20, // 調整Y軸位置
        direction: facingDirection,
        speed: 12,
        currentFrame: 0
      };
      projectiles.push(newProjectile); // 將新道具加入陣列
      hasFired = true; // 標記本次攻擊已發射
    }

    // 動畫結束後，返回待機
    if (pushCurrentFrame >= pushNumFrames) {
      isPushing = false;
      pushCurrentFrame = 0;
    }
  } else if (isJumping) {
    // 根據目前播放的畫格計算 Y 軸位移，形成拋物線
    let jumpProgress = jumpCurrentFrame / (jumpNumFrames -1); // 0 到 1 的進度
    let currentJumpHeight = sin(jumpProgress * PI) * jumpHeight;
    let yPos = characterY - currentJumpHeight;

    let frame = jumpAnimation[floor(jumpCurrentFrame)];
    
    // 計算垂直偏移，確保跳躍圖片的基準線與待機圖片一致
    let idleFrameHeight = animation[0].height;
    let jumpFrameHeight = frame.height;
    let feetOffset = (idleFrameHeight - jumpFrameHeight) * charScale / 2;

    // 根據角色方向繪製跳躍動畫
    if (facingDirection === 1) {
      // 面向右
      image(frame, characterX, yPos + feetOffset, frame.width * charScale, frame.height * charScale);
    } else {
      // 面向左，翻轉圖片
      push();
      translate(characterX, yPos + feetOffset);
      scale(-1, 1);
      image(frame, 0, 0, frame.width * charScale, frame.height * charScale);
      pop();
    }

    // 更新跳躍動畫畫格
    jumpCurrentFrame += jumpAnimationSpeed;

    // 如果動畫播放完畢
    if (jumpCurrentFrame >= jumpNumFrames) {
      isJumping = false; // 結束跳躍狀態
      jumpCurrentFrame = 0; // 重置畫格計數器
      // 落地時產生一圈塵土
      for (let i = 0; i < 10; i++) {
        dustParticles.push(new Dust(characterX + random(-20, 20), characterY + 255));
      }
    }
  } else {
    // 非跳躍狀態下，檢查左右移動
    if (keyIsDown(RIGHT_ARROW) || isTouchRight) { // [修改] 加入觸控判斷
      facingDirection = 1; // 更新方向為右
      // 更新角色位置
      characterX += moveSpeed;
      // 產生塵土 (每 5 幀產生一個，位置在腳後跟)
      if (frameCount % 5 === 0) dustParticles.push(new Dust(characterX - 30, characterY + 255));

      // [新增] 播放走路音效
      if (footstepSound && !footstepSound.isPlaying()) {
        footstepSound.setVolume(0.4);
        footstepSound.loop();
      }

      // 計算走路動畫的垂直偏移
      let frame = walkAnimation[floor(walkCurrentFrame)];
      let idleFrameHeight = animation[0].height;
      let walkFrameHeight = frame.height;
      let feetOffset = (idleFrameHeight - walkFrameHeight) * charScale / 2;

      // 顯示走路動畫
      image(frame, characterX, characterY + feetOffset, frame.width * charScale, frame.height * charScale);
      // 更新走路動畫的畫格
      walkCurrentFrame = (walkCurrentFrame + walkAnimationSpeed) % walkNumFrames;
    } else if (keyIsDown(LEFT_ARROW) || isTouchLeft) { // [修改] 加入觸控判斷
      facingDirection = -1; // 更新方向為左
      // 更新角色位置
      characterX -= moveSpeed;
      // 產生塵土
      if (frameCount % 5 === 0) dustParticles.push(new Dust(characterX + 30, characterY + 255));

      // [新增] 播放走路音效
      if (footstepSound && !footstepSound.isPlaying()) {
        footstepSound.setVolume(0.4);
        footstepSound.loop();
      }
      
      // 計算走路動畫的垂直偏移
      let frame = walkAnimation[floor(walkCurrentFrame)];
      let idleFrameHeight = animation[0].height;
      let walkFrameHeight = frame.height;
      let feetOffset = (idleFrameHeight - walkFrameHeight) * charScale / 2;

      // 透過 translate 和 scale(-1, 1) 來水平翻轉圖片
      push(); // 儲存目前的繪圖設定
      translate(characterX, characterY + feetOffset); // 將原點移動到角色位置 (含偏移)
      scale(-1, 1); // 水平翻轉座標系
      image(frame, 0, 0, frame.width * charScale, frame.height * charScale); // 在新的原點繪製圖片
      pop(); // 恢復原本的繪圖設定

      // 更新走路動畫的畫格
      walkCurrentFrame = (walkCurrentFrame + walkAnimationSpeed) % walkNumFrames;
    } else {
      // 顯示待機動畫

      // [新增] 停止走路音效
      if (footstepSound && footstepSound.isPlaying()) {
        footstepSound.stop();
      }
      
      // 如果靠近提問者 (NPC)，自動轉向面對 NPC
      if (isNearQuestioner) {
        facingDirection = (characterX < character2X) ? 1 : -1;
      }

      let frame = animation[0]; // 鎖定第一張圖，避免因圖片對齊問題造成左右晃動
      
      // 加入呼吸效果，讓角色感覺更生動 (模擬其他角色的動態感)
      let breath = 1 + sin(frameCount * 0.15) * 0.03; // 3% 的呼吸幅度
      let displayH = frame.height * charScale * breath;
      let offsetY = (displayH - frame.height * charScale) / 2; // 計算偏移量以保持腳底著地
      
      if (facingDirection === 1) {
        image(frame, characterX, characterY - offsetY, frame.width * charScale, displayH);
      } else {
        push();
        translate(characterX, characterY - offsetY);
        scale(-1, 1);
        image(frame, 0, 0, frame.width * charScale, displayH);
        pop();
      }
      // 更新待機動畫的畫格
      // currentFrame = (currentFrame + animationSpeed) % numFrames; // 停止播放待機動畫
    }
  }
  // 限制玩家角色不能超出世界邊界
  characterX = constrain(characterX, frameWidth * charScale / 2, worldWidth - frameWidth * charScale / 2);

  pop(); // 結束角色繪製設定 (取消 tint 影響)

  pop(); // --- 結束世界物件的繪製 ---

  // --- 繪製時間/環境色彩濾鏡 (構圖與色彩 30%) ---
  push();
  noStroke();
  if (currentLevel === 2) {
    // 第二關：夕陽餘暉 (溫暖的橘紅色調，使用 OVERLAY 增強對比)
    blendMode(OVERLAY);
    fill(255, 140, 50, 70); 
    rect(0, 0, width, height);
    blendMode(BLEND); // 恢復預設混合模式以免影響 UI
  } else if (currentLevel === 3) {
    // 第三關：夜晚/科技感 (提亮顏色並大幅降低透明度，讓畫面更舒適)
    blendMode(BLEND);
    fill(40, 60, 100, 35); 
    rect(0, 0, width, height);
    blendMode(BLEND); // 恢復預設混合模式以免影響 UI
  }
  pop();

  // --- 繪製 UI 介面 (固定在螢幕上，不受攝影機影響) ---
  
  // --- 繪製生命值 UI ---
  drawHealth();

  // --- 繪製分數 UI ---
  drawScore();

  // --- 繪製關卡 UI ---
  drawLevel();

  // --- 顯示暫停按鈕 ---
  btnGamePause.position(width - 60, 20);

  // --- 繪製勾勾動畫 ---
  for (let i = checkMarkAnims.length - 1; i >= 0; i--) {
    checkMarkAnims[i].update();
    checkMarkAnims[i].show();
    if (checkMarkAnims[i].isDead()) {
      checkMarkAnims.splice(i, 1);
    }
  }

  // --- 繪製叉叉動畫 ---
  for (let i = crossMarkAnims.length - 1; i >= 0; i--) {
    crossMarkAnims[i].update();
    crossMarkAnims[i].show();
    if (crossMarkAnims[i].isDead()) {
      crossMarkAnims.splice(i, 1);
    }
  }
  
  // --- 繪製觸控按鈕 (行動裝置支援) ---
  drawTouchControls();

  // [新增] 繪製傳送點方向指示 (當傳送點在畫面外時)
  drawTeleportIndicator();

  // --- 繪製暗角效果 (增加電影質感) ---
  drawVignette();

  // --- 受傷紅光閃爍效果 ---
  if (damageFlashOpacity > 0) {
    push();
    noStroke();
    fill(255, 0, 0, damageFlashOpacity);
    rect(-20, -20, width + 40, height + 40); // 稍微加大範圍以覆蓋震動邊緣
    pop();
    damageFlashOpacity -= 10; // 逐漸淡出
  }

  // --- 答對綠光閃爍效果 ---
  if (successFlashOpacity > 0) {
    push();
    noStroke();
    fill(0, 255, 0, successFlashOpacity);
    rect(-20, -20, width + 40, height + 40);
    pop();
    successFlashOpacity -= 10; // 逐漸淡出
  }

  // --- 繪製對話框背景變暗效果 (Dimmer) ---
  // 根據對話框的開啟程度計算背景變暗的透明度
  let maxBoxScale = questionBoxScale;
  if (maxBoxScale > 0.01) {
    push(); // 這個 push/pop 是 UI 層的，不受 camera 影響
    // 繪製全螢幕半透明黑色矩形
    fill(0, 0, 0, 120 * maxBoxScale); // 最大透明度 120 (約 47%)
    noStroke();
    rect(0, 0, width, height);
    pop();
  }

  // --- 繪製提示對話框 (移至最後繪製以確保在最上層) ---
  if (hintBoxScale > 0.01) {
    push();
    // 將世界座標轉換為螢幕座標來繪製
    let screenX = stopPosX - cameraX;
    // 從對話框中心縮放
    translate(screenX, stopPosY - 105);
    scale(hintBoxScale);
    translate(-screenX, -(stopPosY - 105));
    
    // 設定陰影效果
    drawingContext.shadowOffsetX = 5;
    drawingContext.shadowOffsetY = 10;
    drawingContext.shadowBlur = 25;
    drawingContext.shadowColor = 'rgba(0, 0, 0, 0.3)';

    // 設定氣泡樣式
    fill(255); 
    // 使用漸層填充
    let gradient = drawingContext.createLinearGradient(screenX - 160, stopPosY - 170, screenX - 160, stopPosY - 40);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.98)');
    gradient.addColorStop(1, 'rgba(230, 245, 255, 0.95)');
    drawingContext.fillStyle = gradient;

    stroke(btnBorderColor); // 根據關卡主題變更邊框顏色
    strokeWeight(4);
    strokeJoin(ROUND);
    
    let boxW = 320;
    let boxH = 130;
    let boxX = screenX - boxW / 2;
    let boxY = stopPosY - 170;
    let radius = 15;

    // 繪製對話氣泡形狀
    beginShape();
    vertex(boxX + radius, boxY);
    vertex(boxX + boxW - radius, boxY);
    quadraticVertex(boxX + boxW, boxY, boxX + boxW, boxY + radius);
    vertex(boxX + boxW, boxY + boxH - radius);
    quadraticVertex(boxX + boxW, boxY + boxH, boxX + boxW - radius, boxY + boxH);
    // 尖角指向角色
    vertex(screenX + 10, boxY + boxH);
    vertex(screenX, boxY + boxH + 15); 
    vertex(screenX - 10, boxY + boxH);
    vertex(boxX + radius, boxY + boxH);
    quadraticVertex(boxX, boxY + boxH, boxX, boxY + boxH - radius);
    vertex(boxX, boxY + radius);
    quadraticVertex(boxX, boxY, boxX + radius, boxY);
    endShape(CLOSE);

    noStroke();
    textAlign(CENTER, CENTER);
    textFont('Verdana');
    let centerX = boxX + boxW / 2;
    let centerY = boxY + boxH / 2;
    
    if (quizSolved) {
      fill(46, 139, 87);
      textSize(22);
      textStyle(BOLD);
      text("🎉 恭喜答對！", centerX, centerY - 15);
      
      fill(80);
      textSize(16);
      textStyle(NORMAL);
      text("快去傳送點吧！", centerX, centerY + 20);
    } else if (currentQuestion) {
      fill(70, 130, 180);
      textSize(20);
      textStyle(BOLD);
      text("💡 提示", centerX, centerY - 25);
      
      fill(50);
      textSize(18);
      textStyle(NORMAL);
      rectMode(CORNER);
      textAlign(CENTER, TOP);
      textWrap(CHAR); // [新增] 強制以字元為單位自動換行
      
      // [修改] 移除打字機效果，一次顯示全部提示
      text(currentQuestion.hint, boxX + 20, boxY + 50, boxW - 40, boxH - 50);
    } else {
      fill(150);
      textSize(30);
      text("...", centerX, centerY);
    }
    pop();
  }

  // --- 繪製題目對話框 (移至最後繪製以確保在最上層) ---
  if (questionBoxScale > 0.01) {
    push();
    
    // 恢復為原本懸浮在角色上方的對話框位置與大小
    let screenX = character2X - cameraX;
    let boxW = 400;
    let boxH = isShowingExplanation ? 220 : 180;
    let boxX = screenX;
    let boxY = character2Y - 180;

    // 從對話框中心縮放 (彈出動畫)
    translate(boxX, boxY);
    scale(questionBoxScale);
    translate(-boxX, -boxY);

    // 恢復原本的簡潔白色樣式 (懸浮氣泡感)
    rectMode(CENTER);
    fill(255, 255, 255, 250);
    stroke(btnBorderColor); // 根據關卡主題變更邊框顏色
    strokeWeight(4);
    rect(boxX, boxY, boxW, boxH, 15);

    // 恢復文字區域位置 (移除頭像框空間)
    let textX = boxX - boxW / 2 + 20;
    let textY = boxY - boxH / 2 + 25;
    let textW = boxW - 40;

    fill(50); // 恢復深灰色文字
    noStroke();
    textAlign(LEFT, TOP);
    textFont('Verdana, sans-serif');

    if (quizSolved) {
      fill(btnBorderColor); // 根據關卡主題變更文字顏色
      textSize(20); // [修改] 調小字級與題目一致，避免超出邊框
      textStyle(BOLD);
      textLeading(32); // [新增] 統一設定行距
      let exitMsg = "✅ 回答正確！\n\n請前往畫面右側的 EXIT 傳送陣。";
      let wrappedMsg = splitTextToFit(exitMsg, textW);
      text(wrappedMsg, textX, textY);
      hideButtons();

      // [新增] 在對話框右下角加上一個閃爍的小三角形圖示，提示玩家可以前往出口
      push();
      let iconAlpha = map(sin(frameCount * 0.15), -1, 1, 80, 255); // 計算閃爍透明度
      let offsetX = sin(frameCount * 0.2) * 5; // [新增] 計算左右跳動的位移量
      let iconScale = 1 + sin(frameCount * 0.1) * 0.15; // [新增] 計算微幅縮放比例 (0.85 ~ 1.15 倍)
      let c = color(btnBorderColor);
      c.setAlpha(iconAlpha);
      fill(c);
      noStroke();
      let iconX = boxX + boxW / 2 - 25 + offsetX; 
      let iconY = boxY + boxH / 2 - 25;

      translate(iconX, iconY); // [新增] 將繪圖原點移至箭頭位置
      scale(iconScale);       // [新增] 套用縮放效果
      // 繪製一個向右的小箭頭
      beginShape();
      vertex(-10, -8); // [修改] 頂點座標改為相對於新原點 (0,0)
      vertex(8, 0);
      vertex(-10, 8);
      endShape(CLOSE);
      pop();
    } else if (isShowingExplanation && currentQuestion) {
      // --- 顯示詳解模式 ---
      if (lastAnswerCorrect) {
        fill(btnBorderColor); // 根據關卡主題變更文字顏色
        textSize(20);
        textStyle(BOLD);
        text("✅ 回答正確！", textX, textY);
      } else {
        fill(255, 100, 100); // 紅色
        textSize(20);
        textStyle(BOLD);
        text("❌ 回答錯誤！", textX, textY);
      }
      
      // 詳解內容 (深灰色)
      fill(60);
      textSize(18);
      textStyle(NORMAL);
      textLeading(28);
      
      let explainText = currentQuestion.explanation || currentQuestion.hint;
      // [修改] 使用自訂換行函式
      let wrappedExplain = splitTextToFit(explainText, textW);
      text(wrappedExplain, textX, textY + 35);
      
      // 顯示按鈕 (答對顯示下一題，答錯顯示重試)
      if (questionBoxScale > 0.9) {
        let btnY = boxY + boxH / 2 - 45; 
        if (lastAnswerCorrect) {
          btnNextQuestion.position(boxX - 22, btnY); // 箭頭按鈕置中
          if (btnRetry) btnRetry.position(-1000, -1000);
        } else {
          if (btnRetry) btnRetry.position(boxX - 45, btnY); // 重試按鈕置中
          if (btnNextQuestion) btnNextQuestion.position(-1000, -1000);
        }
        btnOption1.position(-1000, -1000); // 隱藏選項
        btnOption2.position(-1000, -1000);
      }
    } else if (currentQuestion) {
      // --- 顯示題目模式 ---
      fill(50);
      textSize(20);
      textLeading(32);
      
      // [修改] 使用自訂換行函式，確保文字絕對不會跑出框外
      let wrappedQ = splitTextToFit(currentQuestion.q, textW);
      text(wrappedQ, textX, textY);
      
      // 設定選項按鈕位置
      if (questionBoxScale > 0.9) {
        let btnY = boxY + boxH / 2 - 45;
        btnOption1.position(boxX - 160, btnY);
        btnOption2.position(boxX + 10, btnY);
        // 確保下一題按鈕隱藏
        if (btnNextQuestion) btnNextQuestion.position(-1000, -1000);
        if (btnRetry) btnRetry.position(-1000, -1000);
      } else {
        hideButtons([btnGamePause]);
      }
    }
    pop();
  } else {
    // 如果對話框完全關閉，確保按鈕隱藏
    if (!isSmiling2) hideButtons([btnGamePause]); 
  }
}

// 建立單片落葉
function createLeaf(spawnAtTop = false) {
  // [新增] 隨機決定顏色類型 (綠、黃、紅)
  let colorType = random(1);
  let leafC;
  
  if (colorType < 0.33) {
    // 綠色系 (原本的)
    leafC = color(random(90, 140), random(150, 210), random(70, 120), 180);
  } else if (colorType < 0.66) {
    // 黃色/金色系
    leafC = color(random(220, 255), random(200, 240), random(20, 80), 180);
  } else {
    // 紅色/橘色系
    leafC = color(random(200, 255), random(60, 120), random(20, 60), 180);
  }

  return {
    baseX: random(width),
    y: spawnAtTop ? random(-height, 0) : random(-height * 0.5, 0),
    size: random(14, 28),
    speedY: random(0.5, 1.2), // [修改] 減慢下落速度，營造滯空感
    swayAmplitude: random(30, 80), // [修改] 加大擺動幅度，讓路徑更優美
    swaySpeed: random(0.2, 0.6), // [修改] 減慢擺動頻率，動作更輕柔
    swayOffset: random(TWO_PI),
    rotation: random(TWO_PI),
    rotationSpeed: random(-0.01, 0.01), // [修改] 減慢自轉速度
    leafColor: leafC // [修改] 使用隨機產生的顏色
  };
}

// 更新與繪製落葉
function drawLeaves() {
  // [新增] 動態編輯技能：玩家移動會產生風力，影響落葉軌跡
  windForce = lerp(windForce, (isTouchRight || keyIsDown(RIGHT_ARROW)) ? -2 : (isTouchLeft || keyIsDown(LEFT_ARROW)) ? 2 : 0, 0.1);

  for (let i = 0; i < leaves.length; i++) {
    let leaf = leaves[i];
    leaf.y += leaf.speedY;
    leaf.swayOffset += leaf.swaySpeed * 0.02;
    leaf.rotation += leaf.rotationSpeed;
    
    // 套用風力
    leaf.baseX += windForce;

    let x = leaf.baseX + sin(leaf.swayOffset) * leaf.swayAmplitude;

    push();
    translate(x, leaf.y);
    rotate(leaf.rotation);
    fill(leaf.leafColor);
    noStroke();
    ellipse(0, 0, leaf.size * 0.6, leaf.size); // 橢圓形葉片
    pop();

    // 超出畫面後重置
    if (leaf.y - leaf.size > height) {
      leaves[i] = createLeaf(true);
    }
  }
}

// 繪製傳送陣
function drawTeleporter() {
  push();
  translate(teleportX, teleportY);

  // [新增] 根據玩家距離調整特效強度
  let d = dist(characterX, characterY, teleportX, teleportY);
  let maxDist = 400; // 開始增強特效的距離
  let speedMultiplier = constrain(map(d, maxDist, 50, 1, 4), 1, 4); // 速度倍率 (1x ~ 4x)
  let glowMultiplier = constrain(map(d, maxDist, 50, 1, 2.5), 1, 2.5); // 發光倍率 (1x ~ 2.5x)

  // 更新旋轉角度 (套用速度倍率)
  teleportAngle += 0.05 * speedMultiplier;

  // --- 1. 垂直光柱效果 (新增) ---
  let beamHeight = 400; // [修改] 加高光柱高度
  
  // [修改] 根據關卡決定顏色基調
  let baseHue;
  if (currentLevel === 1) {
    baseHue = 210; // 藍色
  } else if (currentLevel === 2) {
    baseHue = 270; // 紫色
  } else {
    baseHue = 45;  // 金黃色 (第三關)
  }

  // 讓色相在基調附近微幅波動，保留動態感但固定色系
  let hue = baseHue + sin(frameCount * 0.05) * 15;

  let colorPrimary = `hsla(${hue}, 80%, 70%, 0.6)`;
  let colorSecondary = `hsla(${hue}, 80%, 70%, 0)`;
  let colorSolid = `hsl(${hue}, 80%, 70%)`;
  let colorComplement = `hsl(${(hue + 180) % 360}, 80%, 80%)`; // 互補色

  // [新增] 地面魔法陣 (多層旋轉)
  push();
  scale(1, 0.3); // 壓扁成橢圓透視，貼合地面
  noFill();
  strokeWeight(2);
  
  // 外圈魔法陣
  stroke(colorSolid);
  drawingContext.shadowBlur = 15 * glowMultiplier; // [修改] 套用發光倍率
  drawingContext.shadowColor = colorSolid;
  push();
  rotate(teleportAngle * 0.5);
  ellipse(0, 0, teleportRadius * 3.5, teleportRadius * 3.5);
  // 畫六角星
  beginShape();
  for(let i=0; i<6; i++) {
    let angle = i * TWO_PI / 6;
    vertex(cos(angle) * teleportRadius * 1.7, sin(angle) * teleportRadius * 1.7);
  }
  endShape(CLOSE);
  pop();

  // 內圈魔法陣
  stroke(colorComplement);
  push();
  rotate(-teleportAngle);
  ellipse(0, 0, teleportRadius * 2.5, teleportRadius * 2.5);
  rectMode(CENTER);
  rect(0, 0, teleportRadius * 1.5, teleportRadius * 1.5);
  pop();
  pop(); // 結束地面魔法陣

  // 建立線性漸層 (從下到上)
  let beamGradient = drawingContext.createLinearGradient(0, 0, 0, -beamHeight);
  beamGradient.addColorStop(0, colorPrimary); // 底部較亮
  beamGradient.addColorStop(0.4, `hsla(${hue}, 80%, 60%, 0.3)`); // 中間過渡
  beamGradient.addColorStop(1, colorSecondary);   // 頂部透明
  drawingContext.fillStyle = beamGradient;
  noStroke();
  rectMode(CENTER);
  // 寬度隨呼吸變化
  let beamWidth = teleportRadius * (1.8 + sin(frameCount * 0.1) * 0.3);
  rect(0, -beamHeight/2, beamWidth, beamHeight);

  // [新增] 螺旋上升的能量線條
  noFill();
  strokeWeight(2);
  for(let i = 0; i < 3; i++) {
    let offset = i * TWO_PI / 3;
    let t = (frameCount * 0.05 * speedMultiplier + offset) % TWO_PI; // [修改] 套用速度倍率
    let y = map(t, 0, TWO_PI, 0, -beamHeight);
    let alpha = map(y, 0, -beamHeight, 1, 0);
    
    stroke(`hsla(${hue}, 100%, 80%, ${alpha})`);
    beginShape();
    for(let j = 0; j < 20; j++) {
      let py = y - j * 5;
      // 讓線條呈現螺旋狀上升
      let px = sin(py * 0.05 + frameCount * 0.1 * speedMultiplier + offset) * (beamWidth * 0.3); // [修改] 套用速度倍率
      vertex(px, py);
    }
    endShape();
  }

  // [新增] 上升的粒子光點
  noStroke();
  for(let i = 0; i < 5; i++) {
    let pOffset = i * 100;
    let pY = (frameCount * 2 * speedMultiplier + pOffset) % beamHeight; // [修改] 套用速度倍率
    let pAlpha = map(pY, 0, beamHeight, 1, 0);
    let pX = sin(pY * 0.05 + i) * beamWidth * 0.4;
    
    fill(`hsla(${hue}, 100%, 90%, ${pAlpha})`);
    ellipse(pX, -pY, random(3, 6));
  }

  // --- 2. 發光效果設定 ---
  drawingContext.shadowBlur = 30 * glowMultiplier; // [修改] 套用發光倍率
  drawingContext.shadowColor = colorSolid; // 跟隨主色調發光

  // 繪製外層旋轉的圓環
  strokeWeight(4);
  stroke(colorSolid); // 使用動態主色
  noFill();
  push();
  rotate(teleportAngle);
  for (let i = 0; i < 3; i++) {
    arc(0, 0, teleportRadius * 2, teleportRadius * 2, i * TWO_PI / 3, i * TWO_PI / 3 + PI / 4);
  }
  pop();

  // 繪製內層反向旋轉的圓環
  stroke(colorComplement); // 使用互補色或較亮的顏色
  push();
  rotate(-teleportAngle * 2);
  for (let i = 0; i < 4; i++) {
    arc(0, 0, teleportRadius * 1.2, teleportRadius * 1.2, i * TWO_PI / 4, i * TWO_PI / 4 + PI / 6);
  }
  pop();

  // 繪製中心的核心
  noStroke();
  fill(255, 255, 255); 
  // 核心呼吸效果 (套用速度倍率)
  let coreSize = teleportRadius * 0.6 + sin(frameCount * 0.2 * speedMultiplier) * 5; // [修改] 套用速度倍率
  ellipse(0, 0, coreSize, coreSize);

  // 重置發光以免影響後續繪圖
  drawingContext.shadowBlur = 0;

  // --- 3. 上方文字提示 ---
  fill(255, 255, 100); // 淡黃色文字
  textAlign(CENTER);
  textSize(20);
  textStyle(BOLD);
  let floatY = sin(frameCount * 0.1) * 5;
  text("EXIT", 0, -teleportRadius - 30 + floatY);
  
  // 箭頭
  stroke(255, 255, 100);
  strokeWeight(3);
  let arrowY = -teleportRadius - 10 + floatY;
  line(0, arrowY, 0, arrowY + 15); // 豎線
  line(0, arrowY + 15, -8, arrowY + 5); // 左撇
  line(0, arrowY + 15, 8, arrowY + 5);  // 右撇

  pop();
}

// 繪製陰影的輔助函式
function drawShadow(x, y, w) {
  push();
  noStroke();
  fill(0, 0, 0, 50); // 半透明黑色
  ellipseMode(CENTER);
  ellipse(x, y, w, 20); // 扁平的橢圓形
  pop();
}

// 繪製暗角效果的輔助函式
function drawVignette() {
  push();
  // 使用 Canvas API 建立徑向漸層
  let gradient = drawingContext.createRadialGradient(width/2, height/2, height/3, width/2, height/2, height);
  gradient.addColorStop(0, 'rgba(0,0,0,0)'); // 中心透明
  gradient.addColorStop(1, 'rgba(0,0,0,0.6)'); // 邊緣半透明黑
  drawingContext.fillStyle = gradient;
  rect(0, 0, width, height); // 覆蓋整個畫面
  pop();
}

// 使用 stop_all.png 於畫布中央播放待機動畫
function drawCenterCharacter() {
  const x = stopPosX;
  const y = stopPosY;

  if (currentLevel === 2) {
    // 檢查與角色1的距離
    let d = dist(characterX, characterY, x, y);
    let isTouched = d < stopHitThreshold;
    
    // 如果被觸碰，加快動畫速度
    if (isTouched) {
      animationSpeed9 = 0.4;
    } else {
      animationSpeed9 = 0.15;
    }

    // 偵測是否剛答對所有題目，觸發特效
    if (quizSolved && !hasTriggeredChar9Effect) {
      hasTriggeredChar9Effect = true;
      char9EffectTimer = 60; // 特效持續 60 幀 (約 1 秒)
    }

    // 根據是否答對所有題目決定動作
    // 一般狀態使用 Dialogue (6張)，答對後準備進傳送門使用原本的 Idle_3 (15張)
    let useOriginal = quizSolved; 
    let currentAnim = useOriginal ? animation9 : animation9Dialogue;
    let currentCount = useOriginal ? numFrames9 : numFrames9Dialogue;
    let currentW = useOriginal ? frameWidth9 : frameWidth9Dialogue;
    let currentH = useOriginal ? spriteSheet9.height : spriteSheet9Dialogue.height;

    let frame = currentAnim[floor(currentFrame9) % currentCount];
    let drawY = y + (spriteHeight2 - currentH * scale9) / 2; // [修改] 對齊地面高度

    // [新增] 繪製切換動作時的特效
    if (char9EffectTimer > 0) {
      push();
      translate(x, drawY - currentH * scale9 / 2); // 移至角色中心附近
      
      // 1. 金色擴散光圈
      noFill();
      let alpha = map(char9EffectTimer, 0, 60, 0, 255);
      stroke(255, 215, 0, alpha); // 金色
      strokeWeight(4);
      let size = (60 - char9EffectTimer) * 8; // 隨時間變大
      ellipse(0, 0, size, size * 0.4); // 扁平橢圓光圈
      
      // 2. 角色發光設定
      drawingContext.shadowBlur = 30;
      drawingContext.shadowColor = 'rgba(255, 223, 0, 0.8)'; // 金黃色光暈
      
      pop();
      
      char9EffectTimer--;
    }

    if (characterX < x) {
      image(frame, x, drawY, currentW * scale9, currentH * scale9);
    } else {
      push();
      translate(x, drawY);
      scale(-1, 1);
      image(frame, 0, 0, currentW * scale9, currentH * scale9);
      pop();
    }

    // 重置發光效果，避免影響其他物件
    drawingContext.shadowBlur = 0;

    // 如果被觸碰，在頭上顯示驚嘆號
    if (isTouched) {
      push();
      translate(x, drawY - 120); // 移動到頭頂位置
      // 加入縮放動畫 (呼吸效果)
      let scaleFactor = 1 + sin(frameCount * 0.3) * 0.3; 
      scale(scaleFactor);

      textAlign(CENTER, CENTER);
      textSize(60);
      textStyle(BOLD);
      fill(255, 50, 50); // 亮紅色
      stroke(255); // 白色邊框
      strokeWeight(5);
      text("!", 0, 0); // 在原點繪製
      pop();
    }
    currentFrame9 = (currentFrame9 + animationSpeed9) % currentCount;
    if (stopHitTimer > 0) stopHitTimer--;
    return;
  } else if (currentLevel === 3) {
    // 第三關顯示角色11
    const frame = animation11[floor(currentFrame11) % numFrames11];
    const currentH = spriteSheet11.height;
    const drawY = y + (spriteHeight2 - currentH * scale11) / 2; // 對齊地面高度

    // 根據角色1的位置決定朝向
    if (characterX < x) {
      // 角色1在左邊，角色11原本朝右，需翻轉朝左以面對角色1
      push();
      translate(x, drawY);
      scale(-1, 1);
      image(frame, 0, 0, frame.width * scale11, currentH * scale11);
      pop();
    } else {
      // 角色1在右邊，角色11原本朝右，直接繪製即可面對角色1
      image(frame, x, drawY, frame.width * scale11, currentH * scale11);
    }
    
    // 更新動畫幀
    currentFrame11 = (currentFrame11 + animationSpeed11) % numFrames11;
    
    // 確保不會執行後續的預設角色繪製
    return;
  }

  let anim;
  let frameIndex;
  
  if (isScared) {
    anim = scaryAnimation;
    frameIndex = floor(scaryCurrentFrame);
    scaryCurrentFrame = (scaryCurrentFrame + scaryAnimationSpeed) % scaryNumFrames;
  } else if (stopHitTimer > 0) {
    anim = fastAnimation;
    frameIndex = floor(fastCurrentFrame);
    fastCurrentFrame = (fastCurrentFrame + fastAnimationSpeed) % fastNumFrames;
    stopHitTimer -= 1;
  } else {
    anim = stopAnimation;
    frameIndex = floor(stopCurrentFrame);
    stopCurrentFrame = (stopCurrentFrame + stopAnimationSpeed) % stopNumFrames;
  }
  
  const frame = anim[frameIndex];
  
  // 根據角色1的位置決定角色3的朝向
  if (characterX < x) {
    // 角色1在左邊，角色3朝左 (正常)
    image(frame, x, y, frame.width * stopScale, frame.height * stopScale);
  } else {
    // 角色1在右邊，角色3朝右 (鏡像)
    push();
    translate(x, y);
    scale(-1, 1);
    image(frame, 0, 0, frame.width * stopScale, frame.height * stopScale);
    pop();
  }
}

// --- 生命值系統相關函式 ---

// 繪製生命值 (左上角紅點)
function drawHealth() {
  push();
  translate(30, 30); // 設定 UI 起始位置
  textSize(32); // 設定愛心大小
  textAlign(CENTER, CENTER); // 設定文字置中
  for (let i = 0; i < maxHealth; i++) {
    if (i < health) {
      fill(255, 50, 50); // 紅色代表現有生命
    } else {
      fill(100); // 灰色代表已損失生命
    }
    noStroke();
    text("❤", i * 40, 0); // 繪製愛心符號
  }
  pop();

  // 處理愛心破碎動畫
  for (let i = heartAnims.length - 1; i >= 0; i--) {
    heartAnims[i].update();
    heartAnims[i].show();
    if (heartAnims[i].isDead()) {
      heartAnims.splice(i, 1);
    }
  }
}

// 繪製分數
function drawScore() {
  push();
  textAlign(RIGHT, TOP);
  textSize(32);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text("Score: " + score, width - 30, 30);
  
  textSize(18);
  // [修改] 主題內容與創意表現：動態顯示當前關卡的 SDG 目標與專屬色彩
  let sdgText = "🎯 核心目標: SDGs 永續發展";
  let sdgColor = color(50, 255, 100);
  if (currentLevel === 1) {
    sdgText = "🎯 SDG 4: 優質教育 (Quality Education)";
    sdgColor = color(229, 36, 59); // SDG 4 官方紅
  } else if (currentLevel === 2) {
    sdgText = "🎯 SDG 10: 減少不平等 (Reduced Inequalities)";
    sdgColor = color(221, 19, 103); // SDG 10 官方桃紅
  } else if (currentLevel === 3) {
    sdgText = "🎯 SDGs 綜合: 永續教育實踐";
    sdgColor = color(253, 105, 37); // SDG 9/綜合 橘色
  }
  fill(sdgColor);
  text(sdgText, width - 30, 70);
  pop();
}

// 繪製關卡
function drawLevel() {
  // 更新縮放比例 (彈性動畫，從大變回正常大小)
  levelTextScale = lerp(levelTextScale, 1, 0.1);

  push();
  translate(width / 2, 30); // 將原點移至文字位置
  scale(levelTextScale); // 應用縮放
  textAlign(CENTER, TOP);
  textSize(32);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text("Level " + currentLevel, 0, 0); // 在原點繪製

  // --- 繪製答題進度條 ---
  if (totalLevelQuestions > 0) {
    // 計算已完成題數
    // 總數 - 剩餘佇列 - (當前正在回答的一題 ? 1 : 0)
    let completed = totalLevelQuestions - questionQueue.length - (currentQuestion ? 1 : 0);
    if (quizSolved) completed = totalLevelQuestions; // 如果已過關，則視為全部完成
    
    // 計算目標比例並使用 lerp 進行平滑動畫
    let targetRatio = completed / totalLevelQuestions;
    currentProgressRatio = lerp(currentProgressRatio, targetRatio, 0.1);
    
    // 繪製進度條背景框
    stroke(255);
    strokeWeight(2);
    fill(0, 100); // 半透明黑色背景
    rectMode(CENTER);
    rect(0, 50, 200, 14, 7); // 圓角矩形
    
    // 繪製綠色進度條
    noStroke();
    fill(50, 255, 100); // 亮綠色
    rectMode(CORNER);
    // 內縮 2px 繪製，寬度根據進度比例計算
    rect(-98, 45, 196 * currentProgressRatio, 10, 5);
  }

  pop();
}

// 玩家受傷函式
function takeDamage() {
  if (isInvincible || gameState !== 'playing') return; // 如果無敵或非遊戲中，不受傷

  health--; // 扣血
  // 加入破碎動畫 (在對應的愛心位置)
  heartAnims.push(new BrokenHeartAnim(30 + health * 40, 30));

  isInvincible = true; // 開啟無敵
  invincibleTimer = invincibleDuration; // 設定無敵時間

  // 觸發視覺回饋
  shakeTimer = 15; // 震動持續時間 (幀數)
  damageFlashOpacity = 180; // 紅光初始透明度 (0-255)

  if (health <= 0) {
    gameState = 'gameOver'; // 血量歸零，遊戲結束
    if (bgMusic && bgMusic.isPlaying()) bgMusic.stop(); // [新增] 停止原本的背景音樂
    if (gameOverSound) gameOverSound.play(); // [新增] 播放專屬失敗音效
  }
}

// 檢查答案的函式 (由按鈕觸發)
function checkAnswer(ans) {
  if (isPaused) return; // 暫停時無法答題
  if (!currentQuestion || quizSolved) return;

  totalAttempts++; // [新增] 紀錄作答次數

  if (ans === currentQuestion.a) {
    // 答對
    correctAttempts++; // [新增] 紀錄答對次數
    if (successSound) successSound.play();
    successFlashOpacity = 150; // 答對時背景閃爍綠色
    checkMarkAnims.push(new CheckMarkAnim(characterX, characterY - 300)); // 在角色頭上顯示勾勾 (調整高度)
    score += 20; // 答對加分
    lastAnswerCorrect = true; // 標記答對
    isShowingExplanation = true; // [修改] 顯示解釋，而非直接下一題
    // nextQuestion(); // 移至按鈕觸發
  } else {
    // 答錯
    if (failSound) failSound.play();
    damageFlashOpacity = 150; // 答錯時背景閃爍紅色
    crossMarkAnims.push(new CrossMarkAnim(characterX, characterY - 300)); // 在角色頭上顯示叉叉 (調整高度)
    takeDamage(); // 扣血
    shakeTimer = 20; // 答錯時觸發震動回饋
    lastAnswerCorrect = false;
    isShowingExplanation = true; // 答錯也顯示解釋
  }
}

// 隱藏按鈕的輔助函式
function hideButtons() {
  btnOption1.position(-1000, -1000);
  btnOption2.position(-1000, -1000);
  if (btnNextQuestion) btnNextQuestion.position(-1000, -1000);
  if (btnRetry) btnRetry.position(-1000, -1000);
  if (btnAbout) btnAbout.position(-1000, -1000);
  if (btnStart) btnStart.position(-1000, -1000);
  if (btnSettings) btnSettings.position(-1000, -1000);
  if (sliderVolume) sliderVolume.position(-1000, -1000);
  if (btnBack) btnBack.position(-1000, -1000);
  if (btnGamePause) btnGamePause.position(-1000, -1000);
  if (btnReturnToTitle) btnReturnToTitle.position(-1000, -1000);
  if (btnRestart) btnRestart.position(-1000, -1000);
  if (btnEnterTitle) {
    btnEnterTitle.position(-1000, -1000);
    btnEnterTitle.style('opacity', '0'); // [新增] 確保隱藏時恢復為透明，以利下次漸顯
  }
  if (btnBackToStart) btnBackToStart.position(-1000, -1000);
  if (lblPauseVolume) lblPauseVolume.hide();
  if (inputName) inputName.position(-1000, -1000); // [新增] 確保隱藏輸入框
}

// 初始化關卡題目 (第一關隨機選3題，其他關選1題)
function initLevelQuestions() {
  // 從題庫中篩選出目前關卡的題目
  let levelQuestions = questions.filter(q => q.level === currentLevel);
  updateButtonTheme(); // [新增] 根據關卡更新按鈕顏色主題
  hasTriggeredChar9Effect = false; // [新增] 重置角色9特效狀態
  
  if (currentLevel === 1 || currentLevel === 2 || currentLevel === 3) {
    // 第一、二、三關：隨機選 3 題
    let shuffled = shuffle(levelQuestions, false);
    questionQueue = shuffled.slice(0, 3);
  } else {
    // 其他關卡：隨機選 1 題
    questionQueue = [random(levelQuestions)];
  }
  
  totalLevelQuestions = questionQueue.length; // 記錄本關總題數
  currentProgressRatio = 0; // 重置進度條動畫
  
  nextQuestion(); // 載入第一題
}

// [新增] 更新按鈕主題顏色
function updateButtonTheme() {
  if (currentLevel === 1) {
    // 第一關：金色系
    btnBaseColor = '#FFD700';
    btnBorderColor = '#DAA520';
    btnShadowColor = '#B8860B';
    btnHoverColor = '#FFFACD';
  } else if (currentLevel === 2) {
    // 第二關：藍色系
    btnBaseColor = '#87CEFA'; // LightSkyBlue
    btnBorderColor = '#4682B4'; // SteelBlue
    btnShadowColor = '#4169E1'; // RoyalBlue
    btnHoverColor = '#B0E0E6'; // PowderBlue
  } else {
    // 第三關：紅色系
    btnBaseColor = '#FA8072'; // Salmon
    btnBorderColor = '#CD5C5C'; // IndianRed
    btnShadowColor = '#8B0000'; // DarkRed
    btnHoverColor = '#FFA07A'; // LightSalmon
  }

  // 應用樣式到現有按鈕
  const applyStyle = (btn) => {
    if (btn) {
      btn.style('background-color', btnBaseColor);
      btn.style('border', '2px solid ' + btnBorderColor);
      btn.style('box-shadow', '0px 4px 0px ' + btnShadowColor);
    }
  };
  applyStyle(btnOption1);
  applyStyle(btnOption2);
}

// 載入下一題
function nextQuestion() {
  isShowingExplanation = false; // 關閉解釋顯示
  
  if (questionQueue.length > 0) {
    currentQuestion = questionQueue.pop();
    quizSolved = false;
    // 更新按鈕文字
    if (btnOption1) btnOption1.html(currentQuestion.op1);
    if (btnOption2) btnOption2.html(currentQuestion.op2);
  } else {
    currentQuestion = null;
    quizSolved = true;
  }
}

// 當瀏覽器視窗大小改變時，自動調整畫布大小
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  worldWidth = Math.max(width, 2000); // [修改] 同步更新世界寬度
  // 將角色維持在畫面下方三分之一處
  characterY = height * GROUND_Y_RATIO - ((spriteHeight * charScale / 2) - (spriteHeight2 / 2));
  character2Y = height * GROUND_Y_RATIO;
  stopPosX = 800; // 固定提示者位置
  stopPosY = height * GROUND_Y_RATIO + stopOffsetY;
  
  // 重新計算傳送點位置，確保縮放時不會跑掉
  teleportX = 1600; // [修改] 固定傳送點位置
  teleportY = height * GROUND_Y_RATIO + 60;

  // 重新散佈落葉基準點，以避免縮放造成集中
  for (let i = 0; i < leaves.length; i++) {
    leaves[i].baseX = random(width);
    leaves[i].y = random(-height, height);
  }
}

// --- 觸控控制相關函式 (新增) ---

function drawTouchControls() {
  // 簡單檢測是否為行動裝置 (或直接顯示，方便觸控螢幕筆電)
  // 這裡設定為總是顯示，或可依需求改為 if (touches.length > 0 || width < 800)
  
  push();
  noStroke();
  
  // 左移動鍵 (左下)
  fill(255, isTouchLeft ? 150 : 50); // 按下時變亮
  ellipse(80, height - 80, touchBtnSize);
  fill(255);
  triangle(70, height - 80, 90, height - 95, 90, height - 65); // 左箭頭

  // 右移動鍵 (左下，靠右)
  fill(255, isTouchRight ? 150 : 50);
  ellipse(200, height - 80, touchBtnSize);
  fill(255);
  triangle(210, height - 80, 190, height - 95, 190, height - 65); // 右箭頭

  // 跳躍鍵 (右下，較高) - 對應 UP
  fill(255, 50); // 這裡只顯示外觀，按下回饋在 touchStarted 處理或這裡也可加
  ellipse(width - 80, height - 120, touchBtnSize);
  fill(255);
  text("JUMP", width - 80, height - 120);

  // 攻擊/互動鍵 (右下，較低) - 對應 DOWN
  fill(255, 50);
  ellipse(width - 200, height - 80, touchBtnSize);
  fill(255);
  text("ACT", width - 200, height - 80);
  
  pop();

  // 更新持續按壓的狀態 (左右移動)
  isTouchLeft = false;
  isTouchRight = false;
  for (let i = 0; i < touches.length; i++) {
    let t = touches[i];
    if (dist(t.x, t.y, 80, height - 80) < touchBtnSize) isTouchLeft = true;
    if (dist(t.x, t.y, 200, height - 80) < touchBtnSize) isTouchRight = true;
  }
}

// [新增] 繪製傳送點方向指示
function drawTeleportIndicator() {
  // 計算傳送點相對於目前畫面的位置
  let screenTeleportX = teleportX - cameraX;
  
  // 如果傳送點在畫面右側邊界之外 (且遊戲正在進行中)
  if (screenTeleportX > width - 40) {
    push();
    // 固定在螢幕右側邊緣垂直置中
    translate(width - 40, height / 2);
    
    // 呼吸閃爍效果
    let scaleFactor = 1 + sin(frameCount * 0.1) * 0.1;
    scale(scaleFactor);
    
    // 根據是否過關改變顏色
    if (quizSolved) {
      fill(50, 255, 100); // 綠色 (可進入)
      stroke(255);
      strokeWeight(2);
    } else {
      fill(255, 215, 0, 200); // 金色 (提示位置)
      noStroke();
    }
    
    // 繪製箭頭
    beginShape();
    vertex(-10, -15);
    vertex(15, 0);
    vertex(-10, 15);
    endShape(CLOSE);
    
    // 文字提示
    fill(255);
    noStroke();
    textAlign(CENTER);
    textSize(12);
    textStyle(BOLD);
    text("EXIT", 0, 30);
    
    // 顯示距離 (公尺)
    let distVal = floor(dist(characterX, characterY, teleportX, teleportY) / 10);
    text(distVal + "m", 0, 45);
    
    pop();
  }
}

function touchStarted() {
  // [新增] 確保音訊環境啟動 (解決移動端自動播放問題)
  if (getAudioContext().state !== 'running') {
    userStartAudio();
  }

  // [新增] 觸控略過故事
  if (gameState === 'loading') {
    if (touches.length > 0) {
      let tx = touches[0].x;
      let ty = touches[0].y;
      // 只限定觸控右上角「點擊略過」的區域才能跳過
      if (tx > width - 150 && tx < width && ty > 10 && ty < 80) {
        if (clickSound) clickSound.play();
        loadingProgress = 100;
      }
    }
  }

  // [新增] 強制在點擊時播放標題音樂 (解決部分瀏覽器嚴格限制)
  if (gameState === 'title' && titleMusic && !titleMusic.isPlaying()) {
    titleMusic.setVolume(0.5);
    titleMusic.loop();
  }

  if (gameState !== 'playing') return; // 非遊戲中不攔截，讓按鈕正常運作

  for (let i = 0; i < touches.length; i++) {
    let t = touches[i];
    
    // 檢查跳躍鍵 (右下)
    if (dist(t.x, t.y, width - 80, height - 120) < touchBtnSize) {
      if (!isJumping) isJumping = true;
    }
    
    // 檢查攻擊/互動鍵 (右下偏左)
    if (dist(t.x, t.y, width - 200, height - 80) < touchBtnSize) {
      if (!isPushing) {
        isPushing = true;
        hasFired = false;
      }
    }
  }
  
  // 防止畫面滾動 (除了點擊 DOM 按鈕的情況，但在全螢幕遊戲中通常建議禁止)
  // 注意：這可能會影響標題畫面的按鈕點擊，所以只在 playing 狀態回傳 false
  return false;
}

function touchMoved() {
  // 防止拖曳時畫面滾動
  return false;
}

// [新增] 全域滑鼠點擊事件，確保音訊環境啟動 (解決瀏覽器自動播放限制)
function mousePressed() {
  if (getAudioContext().state !== 'running') {
    userStartAudio();
  }

  // [新增] 點擊略過故事
  if (gameState === 'loading') {
    // 只限定點擊右上角「點擊略過」的區域才能跳過
    if (mouseX > width - 200 && mouseX < width && mouseY > 0 && mouseY < 100) {
      if (clickSound) clickSound.play();
      loadingProgress = 100;
    }
  }

  // [新增] 強制在點擊時播放標題音樂
  if (gameState === 'title' && titleMusic && !titleMusic.isPlaying()) {
    titleMusic.setVolume(0.5);
    titleMusic.loop();
  }
}

// 偵測單次按鍵事件來觸發跳躍
function keyPressed() {
  // --- 暫停功能 ---
  if (key === 'p' || key === 'P' || keyCode === ESCAPE) {
    if (gameState === 'playing') {
      togglePause();
      return;
    }
  }

  if (isPaused) return; // 暫停時忽略其他按鍵

  if (gameState === 'about') {
    if (keyCode === ESCAPE) {
      gameState = 'title';
    }
    return;
  }

  if (gameState === 'settings') {
    if (keyCode === ESCAPE) {
      gameState = 'title';
    }
    return;
  }

  if (gameState === 'title') {
    if (keyCode === ENTER) {
      gameState = 'introDialogue'; // [修改] Enter 鍵改為進入對話模式
      introDialogProg = 0;
      lastTypedLength = -1;
      hideButtons();
    }
    return; // 標題畫面時不處理跳躍或攻擊
  }

  if (gameState === 'gameOver') {
    if (keyCode === ENTER) {
      resetGame(); // 重置遊戲變數
    }
    return;
  }

  if (gameState === 'victory') {
    if (keyCode === ENTER) {
      resetGame(); // 重置遊戲變數
    }
    return;
  }

  if (keyCode === UP_ARROW && !isJumping) {
    isJumping = true;
  } else if (keyCode === DOWN_ARROW && !isJumping && !isPushing) { // DOWN_ARROW 是往下鍵
    isPushing = true;
    hasFired = false; // 重置發射旗標
  }
}

// 統一處理暫停/繼續的函式
function togglePause() {
  isPaused = !isPaused;
  
  if (isPaused) {
    // --- 暫停狀態 ---
    hideButtons([sliderVolume, btnRestart, btnReturnToTitle, btnGamePause, lblPauseVolume]); 
    
    // 繪製暫停遮罩與文字
    push();
    fill(0, 150); // 半透明黑色遮罩
    rect(0, 0, width, height);
    textAlign(CENTER, CENTER);

    // [新增] 暫停時停止腳步聲
    if (footstepSound && footstepSound.isPlaying()) {
      footstepSound.stop();
    }

    fill(255);
    textSize(80);
    textStyle(BOLD);
    text("PAUSED", width / 2, height / 2 - 60);
    pop();
    
    // 顯示音量滑桿與文字 (稍微往上移)
    sliderVolume.position(width / 2 - 100, height / 2 + 20);
    lblPauseVolume.html("音量: " + floor(sliderVolume.value() * 100) + "%");
    lblPauseVolume.position(width / 2 - 45, height / 2 - 20);
    lblPauseVolume.show();
    
    // 顯示按鈕 (上下排列)
    btnRestart.position(width / 2 - 80, height / 2 + 80);
    btnReturnToTitle.position(width / 2 - 80, height / 2 + 140);

    noLoop(); // 停止遊戲迴圈 (畫面凍結)
  } else {
    // --- 繼續遊戲 ---
    loop(); // 恢復遊戲迴圈
    sliderVolume.position(-1000, -1000); // 隱藏滑桿
    lblPauseVolume.hide(); // 隱藏文字
    btnRestart.position(-1000, -1000); // 隱藏按鈕
    btnReturnToTitle.position(-1000, -1000); // 隱藏回到標題按鈕
  }
}

// 開始遊戲函式
function startGame() {
  gameState = 'playing'; // 切換到遊戲狀態
  gameStartTime = millis(); // 開始計時
  hideButtons([btnGamePause]); // 隱藏標題畫面按鈕
  levelTransitionAlpha = 255; // 觸發酷炫轉場動畫

  // 停止標題音樂
  if (titleMusic && titleMusic.isPlaying()) {
    // [修改] 使用淡出效果
    titleMusic.setVolume(0, 1.5); // 1.5秒內音量降為 0
    setTimeout(() => {
      // 只有在遊戲狀態下才停止，避免切回標題後被誤停
      if (gameState === 'playing') {
        titleMusic.stop();
      }
    }, 1500);
  }

  // 播放背景音樂 (如果尚未播放)
  if (bgMusic && !bgMusic.isPlaying()) {
    bgMusic.setVolume(0.5); // 設定音量 (0.0 ~ 1.0)
    bgMusic.loop(); // 循環播放
  }
}

// 重置遊戲狀態的函式
function resetGame() {
  isPaused = false; // 確保取消暫停
  loop(); // 確保迴圈執行
  gameState = 'title'; // 回到標題畫面 (也可以改成 'playing' 直接開始)
  currentLevel = 1;
  levelTextScale = 3; // [新增] 重置遊戲時也觸發特效
  levelTransitionAlpha = 255; // [新增] 轉場淡入
  
  // 重置角色位置
  characterX = width / 2;
  characterY = height * GROUND_Y_RATIO - ((spriteHeight * charScale / 2) - (spriteHeight2 / 2));
  
  // 重置生命值
  health = maxHealth;
  isInvincible = false;
  invincibleTimer = 0;
  score = 0; // 重置分數
  gameStartTime = 0;
  gameFinalTime = 0;
  totalAttempts = 0; // [新增] 重置學習分析數據
  correctAttempts = 0;
  fireworks = []; // 清空煙火
  confetti = []; // 清空彩帶
  dustParticles = []; // 清空塵土
  items = []; // 清空道具
  heartAnims = []; // 清空愛心動畫
  checkMarkAnims = []; // 清空勾勾動畫
  crossMarkAnims = []; // 清空叉叉動畫
  shakeTimer = 0;
  damageFlashOpacity = 0;
  successFlashOpacity = 0;
  isStartingFlash = false; // [新增] 重置閃光狀態
  startingFlashAlpha = 0; // [新增]
  isNextLevelFlash = false; // [新增]
  nextLevelFlashAlpha = 0; // [新增]
  lastTypedLength = -1; // [新增] 重置打字紀錄

  hintBoxScale = 0;
  questionBoxScale = 0;
  hideButtons(); // 隱藏按鈕
  if (btnEnterTitle) btnEnterTitle.position(-1000, -1000);
  if (btnBackToStart) btnBackToStart.position(-1000, -1000);
  isShowingExplanation = false; // 重置解釋狀態
  initLevelQuestions(); // 重置題目

  // 重置 NPC 狀態
  isScared = false;
  isFallingDown2 = false;
  isSmiling2 = false;
  
  char2HitCount = 0; // [新增] 重置攻擊次數
  // 清空飛行道具
  projectiles = [];

  // 停止所有音樂
  if (bgMusic) bgMusic.stop();
  if (victoryMusic) victoryMusic.stop();
  if (footstepSound) footstepSound.stop();
  if (winSound && winSound.isPlaying()) winSound.stop(); // [新增] 確保重置時停止獲勝音效
  if (gameOverSound && gameOverSound.isPlaying()) gameOverSound.stop(); // [新增] 確保重置時停止失敗音效
  if (keyboardSound && keyboardSound.isPlaying()) keyboardSound.stop(); // [新增] 確保重置時停止打字音效

  // 播放標題音樂
  if (titleMusic) {
    if (!titleMusic.isPlaying()) {
      titleMusic.loop();
    }
    titleMusic.setVolume(0.5, 0.5); // [修改] 確保音量回復 (含淡入效果)
  }
}

// --- 煙火系統類別 ---

class Firework {
  constructor() {
    // 隨機產生鮮豔顏色
    this.color = color(random(100, 255), random(100, 255), random(100, 255));
    this.firework = new Particle(random(width), height, this.color, true);
    this.exploded = false;
    this.particles = [];
  }

  done() {
    return this.exploded && this.particles.length === 0;
  }

  update() {
    if (!this.exploded) {
      this.firework.applyForce(createVector(0, 0.25)); // 重力
      this.firework.update();
      
      // 當速度轉為向下時爆炸
      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explode();
      }
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(createVector(0, 0.2)); // 粒子重力較輕
      this.particles[i].update();
      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }
  }

  explode() {
    for (let i = 0; i < 80; i++) { // 爆炸產生 80 個粒子
      let p = new Particle(this.firework.pos.x, this.firework.pos.y, this.color, false);
      this.particles.push(p);
    }
  }

  show() {
    if (!this.exploded) {
      this.firework.show();
    }
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  }
}

// --- 愛心破碎動畫類別 ---
class BrokenHeartAnim {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.life = 255;
    this.particles = [];
    // 產生破碎粒子
    for (let i = 0; i < 8; i++) {
      this.particles.push({
        x: 0, 
        y: 0,
        vx: random(-3, 3),
        vy: random(-3, 3),
        size: random(3, 6),
        life: 255
      });
    }
  }

  update() {
    this.life -= 10;
    for (let p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.2; // 重力
      p.life -= 8;
    }
  }

  show() {
    push();
    translate(this.x, this.y);
    
    // 顯示變大並淡出的破碎愛心
    if (this.life > 0) {
      textAlign(CENTER, CENTER);
      textSize(32 + (255 - this.life) * 0.1); // 稍微變大
      fill(255, 50, 50, this.life);
      text("💔", 0, 0);
    }

    // 顯示粒子
    noStroke();
    for (let p of this.particles) {
      if (p.life > 0) {
        fill(255, 50, 50, p.life);
        ellipse(p.x, p.y, p.size);
      }
    }
    pop();
  }

  isDead() {
    return this.life <= 0 && this.particles.every(p => p.life <= 0);
  }
}

class Particle {
  constructor(x, y, col, isFirework) {
    this.pos = createVector(x, y);
    this.isFirework = isFirework;
    this.lifespan = 255;
    this.color = col;
    this.acc = createVector(0, 0);
    
    if (this.isFirework) {
      this.vel = createVector(0, random(-18, -11)); // 發射高度
    } else {
      this.vel = p5.Vector.random2D(); // 隨機爆炸方向
      this.vel.mult(random(2, 12)); // 爆炸擴散範圍
    }
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    if (!this.isFirework) {
      this.vel.mult(0.9); // 空氣阻力
      this.lifespan -= 5; // 粒子逐漸消失
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  done() {
    return this.lifespan < 0;
  }

  show() {
    if (!this.isFirework) {
      strokeWeight(4);
      // 使用原本顏色但加上透明度
      stroke(red(this.color), green(this.color), blue(this.color), this.lifespan);
    } else {
      strokeWeight(6);
      stroke(this.color);
    }
    point(this.pos.x, this.pos.y);
  }
}

// --- 彩帶類別 ---
class Confetti {
  constructor() {
    this.x = random(width);
    this.y = random(-100, -10); // 從畫面外上方開始
    this.size = random(10, 20);
    // 隨機鮮豔顏色
    this.color = color(random(100, 255), random(100, 255), random(100, 255));
    this.speedY = random(2, 6); // 下落速度
    this.swaySpeed = random(0.05, 0.15); // 左右搖擺速度
    this.swayOffset = random(TWO_PI); // 搖擺相位
    this.rotation = random(TWO_PI); // 初始角度
    this.rotationSpeed = random(-0.1, 0.1); // 旋轉速度
  }

  update() {
    this.y += this.speedY;
    this.x += sin(frameCount * this.swaySpeed + this.swayOffset) * 2; // 左右飄動
    this.rotation += this.rotationSpeed;
  }

  show() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    fill(this.color);
    noStroke();
    rectMode(CENTER);
    rect(0, 0, this.size, this.size * 0.5); // 長方形彩帶
    pop();
  }

  offScreen() {
    return this.y > height + 20;
  }
}

// --- 塵土粒子系統 ---

function handleDust() {
  for (let i = dustParticles.length - 1; i >= 0; i--) {
    dustParticles[i].update();
    dustParticles[i].show();
    if (dustParticles[i].finished()) {
      dustParticles.splice(i, 1);
    }
  }
}

class Dust {
  constructor(x, y) {
    this.pos = createVector(x, y);
    // 隨機向上的速度，帶有一點左右飄移
    this.vel = createVector(random(-1, 1), random(-2, -0.5));
    this.alpha = random(100, 200); // 初始透明度
    this.size = random(5, 12); // 初始大小
    this.growth = random(0.2, 0.5); // 變大速度
  }

  update() {
    this.pos.add(this.vel);
    this.alpha -= 8; // 逐漸消失
    this.size += this.growth; // 逐漸擴散變大
  }

  show() {
    noStroke();
    fill(210, 205, 190, this.alpha); // 灰褐色塵土
    ellipse(this.pos.x, this.pos.y, this.size);
  }

  finished() {
    return this.alpha < 0;
  }
}

// --- 道具系統 ---

function handleItems() {
  // 每 1200 幀 (約 20 秒) 隨機生成一個道具
  if (frameCount % 1200 === 0 && gameState === 'playing') {
    let type = 'health';
    items.push({
      x: random(100, width - 100),
      y: height * GROUND_Y_RATIO - 60, // 懸浮在地面上方
      baseY: height * GROUND_Y_RATIO - 60,
      type: type,
      floatOffset: random(TWO_PI),
      lifespan: 600 // [新增] 道具存在時間 (600幀 = 約10秒)
    });
  }

  for (let i = items.length - 1; i >= 0; i--) {
    let item = items[i];
    
    // [新增] 更新壽命，時間到移除
    item.lifespan--;
    if (item.lifespan <= 0) {
      items.splice(i, 1);
      continue;
    }

    // 上下漂浮動畫
    item.y = item.baseY + sin(frameCount * 0.05 + item.floatOffset) * 10;

    // [修改] 繪製道具 (加入快消失時的閃爍效果)
    if (item.lifespan > 180 || frameCount % 10 < 5) {
      push();
      translate(item.x, item.y);
      
      // 陰影
      noStroke();
      fill(0, 0, 0, 50);
      ellipse(0, 50, 40, 10); // 地面陰影

      // 繪製急救包 (回復生命)
      fill(255);
      stroke(0);
      strokeWeight(2);
      rectMode(CENTER);
      rect(0, 0, 40, 40, 8);
      fill(255, 50, 50);
      noStroke();
      rect(0, 0, 12, 28, 2);
      rect(0, 0, 28, 12, 2);
      pop();
    }

    // 碰撞偵測
    let d = dist(characterX, characterY, item.x, item.y);
    if (d < 60) {
      // 播放音效
      if (healthPackSound) {
        healthPackSound.play();
      }
      if (health < maxHealth) {
        health++;
        // 加入愛心恢復動畫 (位置對應到 UI 上的愛心)
        heartAnims.push(new HealingHeartAnim(30 + (health - 1) * 40, 30));
      }
      items.splice(i, 1); // 移除道具
    }
  }
}

// --- 愛心恢復動畫類別 ---
class HealingHeartAnim {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.life = 255;
    this.scale = 0.5;
    this.offsetY = 0;
  }

  update() {
    this.life -= 5; // 逐漸消失
    if (this.scale < 1.5) {
      this.scale += 0.05; // 逐漸變大
    }
    this.offsetY -= 1; // 向上飄浮
  }

  show() {
    push();
    translate(this.x, this.y + this.offsetY);
    scale(this.scale);
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255, 50, 50, this.life);
    noStroke();
    text("❤", 0, 0);
    pop();
  }

  isDead() {
    return this.life <= 0;
  }
}

// --- 標題畫面氣泡類別 ---
class TitleBubble {
  constructor() {
    this.x = random(width);
    this.y = height + random(10, 50); // 從畫面下方開始
    this.size = random(8, 25); // 氣泡大小
    this.speed = random(1, 3); // 上升速度
    this.swayOffset = random(TWO_PI); // 左右搖擺相位
    this.alpha = random(50, 150); // 透明度
  }

  update() {
    this.y -= this.speed;
    this.x += sin(frameCount * 0.05 + this.swayOffset) * 0.5; // 輕微左右搖擺
  }

  show() {
    noStroke();
    // 繪製氣泡本體
    fill(255, 255, 255, this.alpha);
    ellipse(this.x, this.y, this.size);
    
    // 繪製高光 (增加立體感)
    fill(255, 255, 255, this.alpha + 80);
    ellipse(this.x - this.size * 0.25, this.y - this.size * 0.25, this.size * 0.3);
  }

  isDead() {
    return this.y < -50; // 超出畫面上方則移除
  }
}

// --- 傳送粒子類別 ---
class TeleportParticle {
  constructor(x, y) {
    // 在角色周圍隨機產生，範圍稍微大一點以包覆角色
    this.pos = createVector(x + random(-50, 50), y + random(-80, 80));
    this.vel = createVector(random(-2, 2), random(-5, -1)); // 向上飄浮的速度
    this.acc = createVector(0, -0.2); // 向上加速
    this.alpha = 255;
    this.size = random(5, 12);
    this.color = color(100, 255, 255); // 青藍色光點，帶有科技感
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.alpha -= 8; // 逐漸消失
    this.size *= 0.92; // 逐漸變小
  }

  show() {
    noStroke();
    fill(red(this.color), green(this.color), blue(this.color), this.alpha);
    ellipse(this.pos.x, this.pos.y, this.size);
  }

  isDead() {
    return this.alpha <= 0;
  }
}

// --- 答錯叉叉動畫類別 ---
class CrossMarkAnim {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.life = 255;
    this.scale = 0;
    this.targetScale = 1.5;
  }

  update() {
    this.life -= 5;
    this.scale = lerp(this.scale, this.targetScale, 0.2);
    this.y -= 1; // 緩慢上浮
  }

  show() {
    push();
    translate(this.x, this.y);
    
    // [新增] 彈出時的輕微旋轉動態 (從傾斜到擺正)
    let rot = map(this.scale, 0, this.targetScale, -PI/4, 0);
    rotate(rot);
    
    scale(this.scale);
    textAlign(CENTER, CENTER);
    textFont('Arial Black'); // [新增] 使用更粗的字體以凸顯立體感
    textSize(90);
    textStyle(BOLD);
    
    // [新增] 1. 繪製 3D 厚度 (產生向右下的陰影層次)
    let thickness = 8;
    noStroke();
    for (let i = thickness; i > 0; i--) {
      fill(150, 0, 0, this.life); // 深紅色厚度
      text("X", i * 1.5, i * 1.5); // [修改] 改為 X
    }
    
    fill(255, 80, 80, this.life); // 亮粉紅色表面，對比更強
    stroke(255, this.life);
    strokeWeight(4);
    text("X", 0, 0); // [修改] 改為 X
    pop();
  }

  isDead() {
    return this.life <= 0;
  }
}

// --- 答對勾勾動畫類別 ---
class CheckMarkAnim {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.life = 255;
    this.scale = 0;
    this.targetScale = 1.5;
  }

  update() {
    this.life -= 5;
    this.scale = lerp(this.scale, this.targetScale, 0.2);
    this.y -= 1; // 緩慢上浮
  }

  show() {
    push();
    translate(this.x, this.y);
    
    // [新增] 彈出時的輕微旋轉動態 (從傾斜到擺正)
    let rot = map(this.scale, 0, this.targetScale, PI/4, 0);
    rotate(rot);

    scale(this.scale);
    textAlign(CENTER, CENTER);
    textFont('Arial Black'); // [新增] 使用更粗的字體以凸顯立體感
    textSize(90);
    textStyle(BOLD);
    
    // [新增] 1. 繪製 3D 厚度 (產生向右下的陰影層次)
    let thickness = 8;
    noStroke();
    for (let i = thickness; i > 0; i--) {
      fill(0, 120, 0, this.life); // 深綠色厚度
      text("O", i * 1.5, i * 1.5); // [修改] 改為 O
    }
    
    fill(100, 255, 100, this.life); // 亮綠色表面
    stroke(255, this.life);
    strokeWeight(4);
    text("O", 0, 0); // [修改] 改為 O
    pop();
  }

  isDead() {
    return this.life <= 0;
  }
}

// --- 繪製人物介紹畫面 ---
function drawCharacterIntro() {
  hideButtons(); // 隱藏其他不相關按鈕
  push();
  // 深色漸層背景
  let gradient = drawingContext.createRadialGradient(width / 2, height / 2, 100, width / 2, height / 2, width);
  gradient.addColorStop(0, 'rgba(20, 30, 60, 0.9)');
  gradient.addColorStop(1, 'rgba(0, 0, 20, 0.95)');
  drawingContext.fillStyle = gradient;
  rect(0, 0, width, height);

  textAlign(CENTER, TOP);
  fill(255, 220, 100);
  textSize(50);
  textStyle(BOLD);
  text("人物介紹", width / 2, 60);

  let charInfo = introCharacters[introCurrentChar];
  
  // 繪製展示台 (半透明發光圓盤)
  noStroke();
  fill(255, 255, 255, 20);
  ellipse(width / 2, height / 2 + 50, 400, 100); // [修改] 配合角色放大展示台
  fill(255, 255, 255, 40);
  ellipse(width / 2, height / 2 + 50, 260, 65); // [修改] 配合角色放大展示台

  // 繪製角色動畫 (利用已經算好的資料直接繪製)
  if (charInfo && charInfo.anim && charInfo.anim.length > 0) {
    let animArr = charInfo.anim;
    let img = animArr[floor(introAnimFrame) % animArr.length];
    let s = (charInfo.scale || 2.5) * 1.4; // [修改] 將展示畫面的角色獨立放大 1.4 倍
    
    // 計算垂直置中 (站在展示台上)
    let drawY = height / 2 + 50 - (img.height * s) / 2;
    image(img, width / 2, drawY, img.width * s, img.height * s);
    introAnimFrame += 0.15; // 播放動畫
  }

  // 繪製角色名稱
  fill(255);
  textSize(32);
  textStyle(BOLD);
  text(charInfo.name, width / 2, height / 2 + 120); // [修改] 文字稍微往下移，避免與放大的角色重疊

  // 繪製角色描述
  fill(200, 230, 255);
  textSize(20);
  textStyle(NORMAL);
  textLeading(30);
  text(charInfo.desc, width / 2, height / 2 + 170); // [修改] 文字稍微往下移

  // 顯示切換與返回按鈕
  if (introPrevBtn) introPrevBtn.position(width / 2 - 220, height / 2 - 25);
  if (introNextBtn) introNextBtn.position(width / 2 + 170, height / 2 - 25);
  if (btnBack) btnBack.position(width / 2 - 60, height / 2 + 270);
  
  pop();
}

// --- [新增] 修復卡死問題：定義缺失的文字換行函式 ---
function splitTextToFit(txt, mw) {
  let result = "";
  let currentLine = "";
  for (let i = 0; i < txt.length; i++) {
    let char = txt.charAt(i);
    if (char === '\n') {
      result += currentLine + '\n';
      currentLine = "";
      continue;
    }
    let testLine = currentLine + char;
    if (textWidth(testLine) > mw) {
      result += currentLine + '\n';
      currentLine = char;
    } else {
      currentLine = testLine;
    }
  }
  return result + currentLine;
}

// --- [新增] 關卡標題滑動特效 ---
function drawSlidingLevelTitle() {
  let lvName = "";
  let lvColor = color(255, 215, 0); // 預設金色
  
  if (currentLevel === 1) {
    lvName = "STAGE 1: SDG 4 優質教育";
    lvColor = color(255, 215, 0); // 金色
  } else if (currentLevel === 2) {
    lvName = "STAGE 2: SDG 10 減少不平等";
    lvColor = color(135, 206, 250); // 天藍色
  } else if (currentLevel === 3) {
    lvName = "FINAL STAGE: SDGs 綜合實踐";
    lvColor = color(250, 128, 114); // 珊瑚紅
  }

  // --- [修改] 三段式滑動邏輯：移入 -> 停留 -> 移出 ---
  let progress = map(levelTransitionAlpha, 255, 0, 0, 1);
  let x;

  if (progress < 0.35) {
    // 第一階段：0% ~ 35% 從右側滑入中心
    let p = map(progress, 0, 0.35, 0, 1);
    let ease = p * p * (3 - 2 * p); // Smoothstep 緩入
    x = map(ease, 0, 1, width * 1.1, width / 2);
  } else if (progress < 0.65) {
    // 第二階段：35% ~ 65% 停留在中心 (約 0.5 秒)
    x = width / 2;
  } else {
    // 第三階段：65% ~ 100% 從中心滑向左側消失
    let p = map(progress, 0.65, 1, 0, 1);
    let ease = p * p * (3 - 2 * p); // Smoothstep 緩出
    x = map(ease, 0, 1, width / 2, -width * 0.4);
  }
  
  push();
  // 背景飾條 (深色半透明)
  rectMode(CENTER);
  fill(0, 180 * (levelTransitionAlpha / 255));
  noStroke();
  rect(width / 2, height / 2, width, 100);
  
  // 繪製文字
  textAlign(CENTER, CENTER);
  textFont('Arial Black, sans-serif');
  textSize(min(60, width * 0.08));
  textStyle(BOLD);
  
  // 文字陰影感
  fill(0, 150 * (levelTransitionAlpha / 255));
  text(lvName, x + 5, height / 2 + 5);

  // [新增] 動態模糊 (Motion Blur) 殘影效果
  // 只有在移動時 (非停留階段) 才顯示殘影
  let blurSamples = 6; // 殘影數量
  // 判斷是否正在移動
  let isMoving = (progress < 0.35 || progress > 0.65);
  for (let i = 1; i <= blurSamples && isMoving; i++) {
    // 越後面的殘影越透明，且受到整體轉場透明度的影響
    let ghostAlpha = map(i, 0, blurSamples, 120, 0) * (levelTransitionAlpha / 255);
    let ghostX = x + (i * 12); // 殘影間距，數值越大拖尾越長
    fill(red(lvColor), green(lvColor), blue(lvColor), ghostAlpha);
    text(lvName, ghostX, height / 2);
  }

  // 主文字顏色
  fill(lvColor);
  text(lvName, x, height / 2);
  pop();
}
