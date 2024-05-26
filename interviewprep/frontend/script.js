// script.js

document.getElementById('generate-btn').addEventListener('click', function() {
    const resume = document.getElementById('resume').value;
    const jobDescription = document.getElementById('job-description').value;

    if (resume && jobDescription) {
        generateQuestions(resume, jobDescription)
            .then(questions => displayQuestions(questions))
            .catch(error => console.error('Error generating questions:', error));
    } else {
        alert('Please provide both the resume and job description.');
    }
});

async function generateQuestions(resume, jobDescription) {
    try {
        // Placeholder logic for generating questions
        const questions = [
            `Can you tell us more about your experience in ${await extractKeyWord(resume)}?`,
            `How do your skills align with the requirements in the job description?`,
            `Can you describe a project where you applied ${await extractKeyWord(jobDescription)} skills?`,
            `Why are you interested in this role based on your resume?`
        ];
        return questions;
    } catch (error) {
        throw new Error('Failed to generate questions:', error);
    }
}

async function extractKeyWord(text) {
    // Simulate async operation using setTimeout
    return new Promise(resolve => {
        setTimeout(() => {
            // Simple keyword extraction (for demonstration purposes)
            const words = text.split(/\s+/);
            resolve(words.length > 0 ? words[0] : 'this field');
        }, 1000); // Simulate 1 second delay
    });
}

function displayQuestions(questions) {
    const questionsList = document.getElementById('questions-list');
    questionsList.innerHTML = ''; // Clear existing questions
    questions.forEach(question => {
        const li = document.createElement('li');
        li.textContent = question;
        questionsList.appendChild(li);
    });
}
