window.addEventListener("load", function(){
    fetch("https://budincsevity.github.io/exercise/exercise-latest.json")
        .then(response => response.json())
        .then(exerciseJson => {
            var exerciseDiv = document.getElementById('exercise');
            for(var i = 0; i < exerciseJson.days.length; i++) {
                var day = document.createElement('div');
                exerciseDiv.appendChild(day);

                for(var j = 0; j < exerciseJson.days[i].exercises.length; j++) {
                    var exercise = document.createElement('div');
                    var currentExercise = exerciseJson.days[i].exercises[j];
                    exercise.innerHTML = currentExercise.name + " 🏋️‍♂️ " + currentExercise.repetition;

                    if (currentExercise.name === "Pihenő") {
                        exercise.classList.add("pause")
                    } else {
                        exercise.classList.add("exercise")
                    }
          
                    exercise.addEventListener("click", function() {
                        this.classList.add("done");
                    })
            
                    day.appendChild(exercise);                                     
                }                                
            }
        });
});