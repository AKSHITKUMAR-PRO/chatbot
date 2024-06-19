function sendMessage() {
    var userInput = document.getElementById('userInput').value;
    var chatbox = document.getElementById('chatbox');
    
    if (userInput.trim() !== "") {
        var userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.textContent = userInput;
        chatbox.appendChild(userMessage);

        var botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.textContent = "Sorry, I'm just a static example and can't respond.";
        chatbox.appendChild(botMessage);

        document.getElementById('userInput').value = "";
        chatbox.scrollTop = chatbox.scrollHeight;
    }
}
