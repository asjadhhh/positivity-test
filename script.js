document.getElementById('testForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate age (must be 10 or older)
    const age = parseInt(document.getElementById('age').value);
    if (age < 10) {
        alert("You must be at least 10 years old to take this test.");
        return;
    }

    let score = 0;

    // Collect answers for each question
    const questions = document.querySelectorAll('.question');
    questions.forEach(function(question, index) {
        const selectedOption = question.querySelector('.selected');
        if (selectedOption) {
            const answer = selectedOption.textContent;

            // Assign points based on the selected answer
            switch (answer) {
                case 'True':
                    score += 5;
                    break;
                case 'False':
                    score += 1;
                    break;
                case 'Partly True':
                    score += 3;
                    break;
                case 'Partly False':
                    score += 2;
                    break;
                case 'Neutral':
                    score += 4;
                    break;
            }
        }
    });

    // Display the result based on the score
    let resultText = '';
    if (score <= 50) {
        resultText = "You're a bit of a realist. Staying positive can be difficult at times, but that's okay!";
    } else if (score <= 75) {
        resultText = "You're generally positive, but sometimes it can be hard to keep a cheerful mindset!";
    } else if (score <= 100) {
        resultText = "You have a great outlook on life and handle challenges with optimism.";
    } else {
        resultText = "You're a true optimist! You maintain a positive attitude no matter the situation, and you inspire others!";
    }

    // Hide form and show result
    document.querySelector('form').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('resultText').textContent = resultText;
});

// Add event listeners to handle button clicks for each answer choice
document.querySelectorAll('.answer').forEach(button => {
    button.addEventListener('click', function() {
        const parent = this.parentElement;
        parent.querySelectorAll('button').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
    });
});
