function submitAnswers() {
    var total = 5;
    var score = 0;
    
    //Get User Input
    var q1 = document.forms["quiz-form"]["q1"].value;
    var q2 = document.forms["quiz-form"]["q2"].value;
    var q3 = document.forms["quiz-form"]["q3"].value;
    var q4 = document.forms["quiz-form"]["q4"].value;
    var q5 = document.forms["quiz-form"]["q5"].value;
    
    //Validation
    for (var i = 1; i <= total; i++) {
        if (eval("q"+i) == null || eval("q"+i) == "") {
            alert("You missed question " + i);
            return false;
        }
    }
    
    //Set Correct Answers
    var answers = ["b", "a", "d", "b", "d"];
    
    //Check Answers
    for (var i = 1; i <= total; i++) {
        if (eval("q"+i) == answers[i - 1]) {
            score++;
        }
    }
    
    //Display Results
    var results = document.getElementById("results");
    results.innerHTML = "<h3>You scored <span>" + score + "</span> out of <span>" + total + "</span>.</h3>"
    alert("You scored " + score + " out of " + total + ".");
    if(score < 4) {
        alert("You might want to brush up on your JS fundamentals.");
    }
    return false;
}
