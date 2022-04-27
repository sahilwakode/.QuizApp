const answers = ["intensity", "feet", "time", "navigation", "Ship"];

function score(e) {
    e.preventDefault();
    let score = 0, option_num = 0;
    const options = Array.from(e.target.getElementsByClassName("ques_checkbox"));
    options.forEach((option, index) => {
        if (option.checked && answers[Math.floor(option_num / 4)] === option.value)
            score += 4;
        option_num++;
    })

    document.write("Your Performance Card");
    document.write("Score:");
    document.write(score);
}