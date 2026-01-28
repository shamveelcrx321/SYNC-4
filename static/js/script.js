const restartBtn = document.getElementById("restartBtn");
const gameRoot = document.getElementById("gameRoot");
const form = document.getElementById("guessForm");
const input = document.getElementById("guessInput");
const submitBtn = form.querySelector("button");

restartBtn?.addEventListener("click", () => {
    gameRoot.classList.remove("fade-in");
    gameRoot.classList.add("fade-out");

    setTimeout(() => {
        fetch("/soft-reset", { method: "POST" })
            .then(res => res.json())
            .then(() => {
                document.getElementById("historyList").innerHTML = "";
                document.getElementById("attemptsLabel").innerText = "Attempts: 0";

                document.getElementById("winModal").classList.add("hidden");

                input.disabled = false;
                submitBtn.disabled = false;
                input.value = "";
                input.focus();

                gameRoot.classList.remove("fade-out");
                gameRoot.classList.add("fade-in");
            });
    }, 300);
});
const text = "Decrypt the 4-digit sequence to synchronize.";
const el = document.getElementById("hackText");

const chars = text.split("");
const output = Array(chars.length).fill(" ");

const center = Math.floor(chars.length / 2);
let offset = 0;

function centerBoxReveal() {
    offset = 0;
    output.fill(" ");
    el.textContent = output.join("");

    const interval = setInterval(() => {
        const left = center - offset;
        const right = center + offset;

        if (left >= 0) output[left] = chars[left];
        if (right < chars.length) output[right] = chars[right];

        el.textContent = output.join("");

        offset++;

        if (left < 0 && right >= chars.length) {
            clearInterval(interval);
        }
    }, 70);
}

centerBoxReveal();