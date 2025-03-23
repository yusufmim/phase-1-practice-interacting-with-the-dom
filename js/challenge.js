document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById("counter");
    let count = 0;
    let isPaused = false;
    let interval = setInterval(incrementCounter, 1000);

    function incrementCounter() {
        if (!isPaused) {
            count++;
            counter.innerText = count;
        }
    }

    document.getElementById("plus").addEventListener("click", () => {
        count++;
        counter.innerText = count;
    });

    document.getElementById("minus").addEventListener("click", () => {
        count--;
        counter.innerText = count;
    });

    document.getElementById("heart").addEventListener("click", () => {
        let likesList = document.querySelector(".likes");
        let existingLike = document.getElementById(`like-${count}`);

        if (existingLike) {
            let likeCount = parseInt(existingLike.dataset.count) + 1;
            existingLike.dataset.count = likeCount;
            existingLike.innerText = `${count} has been liked ${likeCount} times`;
        } else {
            let likeItem = document.createElement("li");
            likeItem.id = `like-${count}`;
            likeItem.dataset.count = 1;
            likeItem.innerText = `${count} has been liked 1 time`;
            likesList.appendChild(likeItem);
        }
    });

    document.getElementById("pause").addEventListener("click", (event) => {
        isPaused = !isPaused;
        event.target.innerText = isPaused ? "resume" : "pause";
        document.getElementById("plus").disabled = isPaused;
        document.getElementById("minus").disabled = isPaused;
        document.getElementById("heart").disabled = isPaused;
        document.getElementById("submit").disabled = isPaused;
    });

    document.getElementById("comment-form").addEventListener("submit", (event) => {
        event.preventDefault();
        let commentInput = document.getElementById("comment-input");
        let commentList = document.getElementById("list");
        let newComment = document.createElement("p");
        newComment.innerText = commentInput.value;
        commentList.appendChild(newComment);
        commentInput.value = "";
    });
});
