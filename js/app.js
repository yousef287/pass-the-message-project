(function () {
    const form = document.querySelector("#message-form");

    form.addEventListener("submit", function (e) {
        const message = document.querySelector("#message");
        const messageErr = document.querySelector(".p-2.alert");
        const lastMessage = document.querySelector(".message-content");
        e.preventDefault();
        if (message.value === "") {
            messageErr.classList.add("show");
            setTimeout(() => {
                messageErr.classList.remove("show");
            }, 2000);
        } else {
            lastMessage.innerHTML = message.value;
        }
    });
})();
