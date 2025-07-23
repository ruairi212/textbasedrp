let xp = 0;
let health = 100;
let gold = 50;
let current_Weapon = 0;
let fighting ;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#buttotn1");
const button2 = document.querySelector("#buttotn2");
const button3 = document.querySelector("#buttotn3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterNameText");
const monsterHealthText = document.querySelector("#monsterHealthText");

// initialise the buttons

button1.onclick = goStore;
button2.onclick = goCave
button3.onclick = fightBoss

function goStore() {
    console.log("Going to the store.")
}