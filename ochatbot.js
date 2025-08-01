// Toggle Chatbot
function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbotContainer');
    chatbotContainer.classList.toggle('active');
  }
  
  // Send Message
  function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatbotBody = document.getElementById('chatbotBody');
  
    if (userInput.value.trim() === '') return;
  
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.classList.add('chatbot-message');
    userMessage.innerHTML = `<p>${userInput.value}</p>`;
    chatbotBody.appendChild(userMessage);
  
    // Add bot response
    const botMessage = document.createElement('div');
    botMessage.classList.add('chatbot-message', 'bot');
    botMessage.innerHTML = `<p>${getBotResponse(userInput.value)}</p>`;
    chatbotBody.appendChild(botMessage);
  
    // Clear input
    userInput.value = '';
  
    // Scroll to bottom
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
  }
  
  // Get Bot Response
  function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
  
    if (message.includes('hello') || message.includes('hi')) {
      return "Hi there! How can I assist you today?";
    } else if (message.includes('service') || message.includes('help')) {
      return "We offer services like jump-starts, tire changes, and battery replacements. What do you need help with?";
    } else if (message.includes('price') || message.includes('cost')) {
      return "Our prices vary depending on the service. Please contact us on 9794575236 or rishabhh2004@gmail.com for a detailed quote!";
    } else if (message.includes('location') || message.includes('area')) {
      return "We serve Prayagraj and surrounding areas. Check our service area page for more details.";
    } else {
      return "I'm sorry, I didn't understand that. Can you please rephrase?";
    }
  }