const questions = [
  {
    "group": 1,
    "level": 1,
    "question": "Je vais _ ma maison. A ou à?",
    "answer": "à"
  },
  {
    "group": 1,
    "level": 2,
    "question": "_'est ma chemise! S ou C?",
    "answer": "C"
  },
  {
    "group": 1,
    "level": 3,
    "question": "Comme ils _ beaucoup d'argent, nous allons aller à Rome. On ou ont?",
    "answer": "ont"
  },
  {
    "group": 1,
    "level": 4,
    "question": "Les amis de _ fils sont très stupides.Son ou sont?",
    "answer": "son",
  },
  {
    "group": 1,
    "level": 5,
    "question": "C'est quoi le sujet dans la phrase? Hier, mon ami et moi sommes allés au parc. ",
    "answer": "mon ami et moi"
  },
  {
    "group": 1,
    "level": 6,
    "question": "Mon école est _ bas. Là ou la?",
    "answer": "là"
  },
  {
    "group": 1,
    "level": 7,
    "question": "Hier j'ai mangé une pomme. Vrai(v) ou faux(f), le CP est organisée correctement. ",
    "answer": "f"
  },
  {
    "group": 1,
    "level": 8,
    "question": "_ est stupide! On ou ont?",
    "answer": "on"
  },
  {
    "group": 2,
    "level": 9,
    "question": "Hier, j’étais très fâché que tu as mangé _ les biscuits! Toutes ou tous?",
    "answer": "tous"
  },
  {
    "group": 2,
    "level": 10,
    "question": "VAS _ BAS MAINTENANT! Là ou la?",
    "answer": "là"
  },
  {
    "group": 2,
    "level": 11,
    "question": "Il _'est fait blessé. S ou c?",
    "answer": "s"
  },
  {
    "group": 2,
    "level": 12,
    "question": "Les films _ plusieurs moments intéressants. Ont ou on?",
    "answer": "ont"
  },
  {
    "group": 2,
    "level": 13,
    "question": "Ça, c'est _ crayon! Leurs ou leur?",
    "answer": "leur"
  },
  {
    "group": 2,
    "level": 14,
    "question": "Conjuge le verbe à l'impératif au 2 personne du singulier. Aller.",
    "answer": "vas"
  },
  {
    "group": 2,
    "level": 15,
    "question": "Conjuge le verbe. Vous avez mang_ ma pomme!",
    "answer": "é"
  },
  {
    "group": 2,
    "level": 16,
    "question": "C'est quoi le prédicat dan la phrase suivante? Hier, tu étais très stupide!",
    "answer": "étais très stupide"
  },
  {
    "group": 3,
    "level": 17,
    "question": "_'est mon crayon! C ou S?",
    "answer": "C"
  },
  {
    "group": 3,
    "level": 18,
    "question": "_ souliers sont à qui? Ces ou ses?",
    "answer": "ces"
  },
  {
    "group": 3,
    "level": 19,
    "question": "_ le monde aime la baguette! Tout, Tous, toute ou toutes?",
    "answer": "Tous"
  },
  {
    "group": 3,
    "level": 19,
    "question": "Conjuge le verbe. Vous êtes _ au parc. Allés ou aller?",
    "answer": "allés"
  },
  {
    "group": 3,
    "level": 20,
    "question": "C'est quoi le sujet dan la phrase suivante? C'était très stupide que tu es allé au lit à 1h30 hier!",
    "answer": "c"
  },
  {
    "group": 3,
    "level": 21,
    "question": "Je vais mang_ ma pomme! Er ou é?",
    "answer": "er"
  },
  {
    "group": 3,
    "level": 22,
    "question": "_ parents sont compétents. Leurs ou leur?",
    "answer": "leurs"
  },
  {
    "group": 3,
    "level": 23,
    "question": "_'était très stupide que tu es allé au lit à 1h30 hier! C ou S?",
    "answer": "C"
  },
  {
    "group": 3,
    "level": 24,
    "question": " _ allé. Je suis ou j'ai?",
    "answer": "je suis"
  }, 
  {
    "group":4, 
    "level":25, 
    "question":"_ avons attaqués. Complète la phrase. ", 
    "answer":"nous"
  },
  {
    "group":4, 
    "level":26, 
    "question":"Les filles ont allé. Est-ce qu'il y a un erreur? V ou f?", 
    "answer":"f"
  }, 
  {
    "group":4, 
    "level":27, 
    "question":"Je vais _ Montreal. à ou en?", 
    "answer":"à"
  }, 
  {
    "group":4, 
    "level":28, 
    "question":"Je n'aime pas _ Russie. La ou le?", 
    "answer":"la"
  }, 
  {
    "group":4, 
    "level":29, 
    "question":"Les États Unis _ des problèmes. A ou ont? ", 
    "answer":"ont"
  }, 
  {
    "group":4, 
    "level":30, 
    "question":"Nous aim_ ta mère. Complère le verbe. ", 
    "answer":"ons"
  }
]
let currentLevel = 1;
let currentQuestionIndex = 0;
let isRan = false;
let livesLost = 0;
const images = ['h1', 'h2', 'h3']

const qSpace = document.getElementById("questionSpace");
const aSpace = document.getElementById("responseSpace");
const button = document.getElementById("button");
const message = document.getElementById("message");
const level = document.getElementById("niveau");

button.addEventListener('click', function() {
  if (!isRan) {
    let mySound = new Audio('kahoot.mp3')
    mySound.loop = true;
    mySound.play()
    const q = questions[currentQuestionIndex].question;
    qSpace.innerHTML = "Question: " + q;
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.id = "input";
    aSpace.appendChild(input);
    isRan = true;
  }
});

const checkAnswer = () => {
  const userInput = document.getElementById("input").value;
  const correctAnswer = questions[currentQuestionIndex].answer;
  return userInput.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
};

const changeLevel = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    message.innerText = "Tu as gagné!!! Pourcentage: " + Math.round(((questions.length - livesLost) / questions.length) * 100) + "%";
    document.removeElement(document.getElementById("questionSpace"));
    return;
  }
  currentLevel = questions[currentQuestionIndex].level;
  qSpace.innerText = questions[currentQuestionIndex].question;
};
let points = 0;
document.addEventListener("keypress", function(e) {
  if (e.key === "Enter" && isRan && livesLost < 3) {
    if (checkAnswer()) {
      points += questions[currentQuestionIndex].group;
      message.innerText = "Correct";
      document.getElementById("score").innerText = "Score: " + points;
      level.innerText = "Niveau: " + questions[currentQuestionIndex].group;
      changeLevel();
    } else {
      points -= questions[currentQuestionIndex].group;
      message.innerText = "Incorrect";
      document.getElementById("score").innerText = "Score: " + points;
      level.innerText = "Niveau: " + questions[currentQuestionIndex].group;
      livesLost++;
      document.getElementById(images[livesLost - 1]).src = "skull.png"
      if (livesLost === 3) {
        message.innerText = "Tu as perdu!";
        document.removeElement(document.getElementById("questionSpace"));
      }

    }
  }
});
