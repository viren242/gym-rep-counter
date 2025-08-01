let countEl = document.getElementById("count-el");
let historyEl = document.getElementById("history-el");
let exerciseSelect = document.getElementById("exercise-select");

let count = 0;
let currentExercise = exerciseSelect.value;
let setsCompleted = 0;
let workoutHistory = [];

function increment() {
    count++;
    countEl.textContent = count;
}

function save() {
    if (count === 0) return;
    
    currentExercise = exerciseSelect.value;
    setsCompleted++;
    workoutHistory.push(`${currentExercise} - Set ${setsCompleted}: ${count} reps`);
    historyEl.textContent = workoutHistory.join('\n');
    
    count = 0;
    countEl.textContent = count;
}

function resetExercise() {
    currentExercise = exerciseSelect.value;
    setsCompleted = 0;
    count = 0;
    countEl.textContent = count;
}

// Initialize
countEl.textContent = count;