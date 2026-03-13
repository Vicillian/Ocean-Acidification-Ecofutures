// ------------------------------
// INTRO TEXT SYSTEM
// ------------------------------

let textNum = 0;

function swapText() {

if (textNum === 0) {

  const t1 = document.querySelector('.text1');
  const t2 = document.querySelector('.text2');

  t1.style.opacity = '0';
  t1.style.pointerEvents = 'none';

  setTimeout(() => {
    t2.style.opacity = '1';
    t2.style.pointerEvents = 'all';
  }, 500);

  textNum++;

  console.log("textNum is " + textNum);
  console.log("As he is flying away..");

  if (typeof SQUAKSQUAKSWQUAK === "function") {
    SQUAKSQUAKSWQUAK();
  }

}

else if (textNum === 1) {

  const t1 = document.querySelector('.text2');
  const t2 = document.querySelector('.text3');

  t1.style.opacity = '0';
  t1.style.pointerEvents = 'none';

  setTimeout(() => {
    t2.style.opacity = '1';
    t2.style.pointerEvents = 'all';
  }, 500);

  textNum++;

  console.log("textNum is " + textNum);
  console.log("The ocean is darker...");

}

else if (textNum === 2) {

  const t1 = document.querySelector('.text3');
  const t2 = document.querySelector('.text4');

  t1.style.opacity = '0';
  t1.style.pointerEvents = 'none';

  setTimeout(() => {
    t2.style.opacity = '1';
    t2.style.pointerEvents = 'all';
  }, 500);

  textNum++;

}

}



// ------------------------------
// ENDING DIALOGUE SYSTEM
// ------------------------------

let endingIndex = 0;

const endingDialogue = [

"Steven the Seagull is at the end of his journey, flying toward Santa Cruz Wharf where he lands in the sand to contemplate the information he gained today.",

"But.. I'm just a seagull. What can I do?",

"*Hears laughing from the side*", 

"Figure out who these humans are.",

"The fishers are spending a peaceful afternoon fishing.",

"Hey! What're you guys doing?",

"Oh, hello there seagull! We're just fishing at the wharf here.",

"We've been here since childhood and have noticed some changes in the environment.",

"Have you noticed anything seagull?",

"Why yes, I have actually!",

"I personally had to resort to eating human food when I could no longer find fish.",

"I met a Mrs. Crab whose larvae are struggling because ocean acidification weakens shells.",

"I met an elder mussel whose shell is dissolving and must now use calcite instead of aragonite.",

"Algae blooms are also making animals toxic to eat.",

"A sea lion is now afraid to eat fish because of domoic acid contamination.",

"A salmon I met was starving due to lack of food.",

"Oh wow... we never realized that.",

"Thank you for telling us.",

"You’re welcome! You can help advocate for these animals!",

"*Steven flies away*", 

"Wow... that was a lot today, huh player?",

"But everything isn't doom and gloom.",

"Being informed is better than not knowing!",

"Here are some projects helping ocean acidification:",

"Deploy Artificial Upwelling – Project Drawdown",

"drawdown.org/explorer/deploy-artificial-upwelling",

"Ocean Alkalinity Enhancement – Project Drawdown",

"drawdown.org/explorer/deploy-ocean-alkalinity-enhancement",

"*Steven flies into the sunset*"

];

function nextEndingDialogue() {
  const dialogueBox = document.getElementById("endingDialogue");

  if (endingIndex < endingDialogue.length) {
    dialogueBox.innerText = endingDialogue[endingIndex];

    // Change background when Steven flies into the sunset
    if (endingDialogue[endingIndex] === "*Steve spreads his wings and flies into the sunset.*") {
      document.body.style.backgroundImage = "url('Steve_the_Seagull_Sunet.png')";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
    }

    endingIndex++;
  }
}
