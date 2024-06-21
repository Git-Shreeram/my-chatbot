// Function to handle sending a message
async function sendMessage() {
    // Get the user input from the text field
    const userInput = document.getElementById('userInput').value;
    // Get the chat area where messages are displayed
    const chatArea = document.getElementById('chatArea');

    // Add the user's message to the chat area
    chatArea.innerHTML += `<div><strong>You:</strong> ${userInput}</div>`;

    try {
        // Send the user's message to the backend server
        const response = await fetch('http://localhost:5000/chat', { // Update the URL to match your backend server's URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userInput })
        });

        // Parse the response from the server
        const data = await response.json();
        const botMessage = data;

        // Add the bot's response to the chat area
        chatArea.innerHTML += `<div><strong>Bot:</strong> ${botMessage}</div>`;

    } catch (error) {
        // Handle errors (e.g., network issues)
        chatArea.innerHTML += `<div><strong>Error:</strong> ${error.message}</div>`;
    }

    // Clear the input field
    document.getElementById('userInput').value = '';

    // Scroll to the bottom of the chat area to show the latest messages
    chatArea.scrollTop = chatArea.scrollHeight;
}
