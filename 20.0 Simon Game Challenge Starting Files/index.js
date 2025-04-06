let button_colors = ['green', 'red', 'yellow', 'blue']
let game_pattern = []
let user_click_pattern = []
let user_start = 0;
let level = 1;
let game_start = false;

function playSound(item){
    let sound = new Audio(`sounds/${item}.mp3`);
    sound.play();
}

function autoClick(color){
    $(`#${color}`).click();
}

function nextSequence(){
    $('#level-title').text(`Level ${level}`);
    level++;
    let random_number = Math.floor(Math.random() * button_colors.length);
    let random_chosen_color = button_colors[random_number]
    game_pattern.push(random_chosen_color)
    setTimeout(function () {
        autoClick(random_chosen_color)}, 100);

}


// Add press event including sound and color effect                  
button_colors.forEach(color => {
    $(`#${color}`).click(function (e) {
        playSound(color);
        $(`#${color}`).addClass('pressed');
        setTimeout(function() {
            $(`#${color}`).removeClass('pressed');
        }, 100)

        if (e.originalEvent){
            let chosen_color = $(`#${color}`).attr("id")
            user_click_pattern.push(chosen_color)
            let correct = checkAnswer(user_start)
            if (correct && game_pattern.length > user_click_pattern.length){
                user_start+=1;
            }else if (correct && game_pattern.length == user_click_pattern.length){
                user_click_pattern = [];
                user_start = 0;
                setTimeout(function () {nextSequence()}, 100);
            }else{
                game_start = false;
                user_start = 0;
                level = 1;
                user_click_pattern = [];
                game_pattern = [];
                $('body').addClass("game-over");
                setTimeout(() => {
                    $('body').removeClass("game-over")
                }, 100)
                $("#level-title").text("Game Over, Press Any key to Restart");
                playSound("wrong");
            }
        }
    })
});

function checkAnswer(start){
    return game_pattern[start] == user_click_pattern[start]
}


$(document).on("keydown", () => {
    if (!game_start){
        nextSequence();
        game_start = true;
    }

})



// while (true){

// }
// let answer = [];sdddd
// let level = 0;
// let not_end_game = true;
// level+=1;
// $("h1").text(`Level ${level}`)
// // Generate random button_colors
// let level_color = button_colors[Math.floor(Math.random() * button_colors.length)];
// // Automatically click that button
// autoClick(level_color);
// answer.push(level_color);
// let start_index = level - answer.length;

// $('.btn').click(function () {
//     let selected_color = $('.btn').attr('id')
//     if (selected_color === answer[start_index]){
//         start_index+=1;
//     }else{
//         not_end_game = false;
//         start_index = level
//     }
// })

// startGame();


