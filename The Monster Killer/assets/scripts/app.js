const ATTACK_VALUE = 10;
const MONSTER_ATTCK_VALUE = 20;
const HEAL_VALUE = 21;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let battleLog = [];
const PLAYER_ATTACK = "player attacked";
const MONSTER_ATTACK = "monster attacked";
const PLAYER_HEALED = "player healed";
const GAME_ENDED = "game ended";
const RESET_GAME = "game resetted";
const BONUS_LIFE = "bonus life";
const DRAW_MATCH = "draw"
let userInput = parseInt(prompt("Enter the max value for your and monster's life", "100"));
while(isNaN(userInput) || userInput<=0){
  alert("please enter a real number");
  userInput = parseInt(prompt("Enter the max value for your and monster's life", "100"));
}

chosenMaxLife = userInput;
adjustHealthBars(chosenMaxLife);
function attackHandler() {
  const strengthOfPlayerAttack = 1;
  attackFunction(strengthOfPlayerAttack);
}

function strongAttackHandler() {
  const strengthOfPlayerAttack = 3;
  attackFunction(strengthOfPlayerAttack);
}

function attackFunction(strengthOfPlayerAttack) {
  const damage = dealMonsterDamage(ATTACK_VALUE, strengthOfPlayerAttack);
  currentMonsterHealth -= damage;
  writeLog(PLAYER_ATTACK, "player attacked");
  monsterAttack();
}

function healHandler() {
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("Not applicable yet");
  } else {
    currentPlayerHealth = increasePlayerHealth(HEAL_VALUE);
    writeLog(PLAYER_HEALED, "player healed");
    monsterAttack();
  }
}
function monsterAttack() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTCK_VALUE);
  currentPlayerHealth -= playerDamage;
  if(currentPlayerHealth <=0 && hasBonusLife)
  {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    writeLog(BONUS_LIFE, "bonus life");
    setPlayerHealth(currentPlayerHealth);
    alert('you get a bonus life!');
    
  }
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You Won!");
    writeLog(GAME_ENDED, "Player");
  
    reset();
    
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("It's a draw!");
    writeLog(DRAW_MATCH, "nobody");
    reset();
    
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("you lost :(");
    writeLog(GAME_ENDED, "Monster");
    reset();
  
  }
}

function reset(){
  currentPlayerHealth = chosenMaxLife;
  currentMonsterHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function writeLog(event, verdict)
{
  let battleLogEntry = {
    event : event,
    verdict : verdict,
    playerHealth : currentPlayerHealth,
    monsterHealth : currentMonsterHealth
  };
  battleLog.push(battleLogEntry);
  console.log(battleLog);
}
attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healHandler);
