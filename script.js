const questions = [
    "I see the positive side in difficult situations.",
    "I enjoy helping others succeed.",
    "I am confident in my abilities.",
    "I handle stress well.",
    "I forgive easily and move on.",
    "I am a good listener.",
    "I stay optimistic even in tough times.",
    "I believe in self-improvement.",
    "I work well with a team.",
    "I remain calm under pressure.",
    "I motivate others to do their best.",
    "I take responsibility for my mistakes.",
    "I express gratitude regularly.",
    "I focus on solutions rather than problems.",
    "I adapt well to change.",
    "I believe everyone deserves kindness.",
    "I am patient with others.",
    "I handle criticism constructively.",
    "I am passionate about my goals.",
    "I support my friends and family.",
    "I embrace challenges as opportunities.",
    "I stand up for what I believe in.",
    "I enjoy learning new things.",
    "I encourage others to reach their potential.",
    "I remain hopeful for the future."
];

let currentQuestion = 0;
let scores = [];

const questionText = document.getElementById("question-text");
const options = document.querySelectorAll(".option");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result");

function loadQuestion() {
    if (currentQuestion < questions.length) {
        questionText.textContent = questions[currentQuestion];
    } else {
        showResults();
    }
}

options.forEach(button => {
    button.addEventListener("click", () => {
        scores.push(parseInt(button.getAttribute("data-value")));
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            nextButton.style.display = "block";
        }
    });
});

nextButton.addEventListener("click", showResults);

function showResults() {
    const totalScore = scores.reduce((acc, val) => acc + val, 0);
    const maxScore = questions.length * 4;
    const percentage = (totalScore / maxScore) * 100;
    
    let personalityType = "";

    if (percentage >= 80) {
        personalityType = "🌟 Highly Positive Personality! You radiate positivity and inspire others.";
    } else if (percentage >= 60) {
        personalityType = "😊 Positive Personality! You generally have a positive outlook.";
    } else if (percentage >= 40) {
        personalityType = "😐 Neutral Personality! You have a balanced approach to life.";
    } else if (percentage >= 20) {
        personalityType = "🤨 Slightly Negative Personality! You could work on seeing the brighter side.";
    } else {
        personalityType = "😞 Negative Personality! Try to find positivity in small moments.";
    }

    resultContainer.innerHTML = `<p>Your Score: ${percentage.toFixed(1)}%</p><p>${personalityType}</p>`;
}

loadQuestion();
