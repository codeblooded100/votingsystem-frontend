const up_vote_span = document.querySelector('.up-vote');
const down_vote_span = document.querySelector('.down-vote');
let count = document.querySelector('.number');

let upVote = false;
let downVote = false;

up_vote_span.addEventListener('click', function() {

    if (downVote === true) {

        up_vote_span.style.color = "#3CBC8D";
        down_vote_span.style.color = "dimgray";
        count.innerHTML = parseInt(count.innerHTML) + 2;
        upVote = true;
        downVote = false;

    } else if (upVote === false) {
        up_vote_span.style.color = "#3CBC8D";
        count.innerHTML = parseInt(count.innerHTML) + 1;
        upVote = true;
    } else if (upVote === true) {
        up_vote_span.style.color = "dimgray";
        count.innerHTML = parseInt(count.innerHTML) - 1;
        upVote = false;
    }
});

down_vote_span.addEventListener('click', function() {

    if (upVote === true) {
        up_vote_span.style.color = "dimgray";
        down_vote_span.style.color = "#3CBC8D";
        count.innerHTML = parseInt(count.innerHTML) - 2;
        downVote = true;
        upVote = false;
    } else if (downVote === false) {
        down_vote_span.style.color = "#3CBC8D";
        count.innerHTML = parseInt(count.innerHTML) - 1;
        downVote = true;
    } else if (downVote === true) {
        down_vote_span.style.color = "dimgray";
        count.innerHTML = parseInt(count.innerHTML) + 1;
        downVote = false;
    }
});