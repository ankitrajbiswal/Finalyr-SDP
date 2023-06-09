import openai
import json

openai.api_key = 'af235KBcj56!3'

# Defining a function to detect the language of the text
def detect_language(text):
    response = openai.Language.create(
        documents=[text],
        model="text-davinci-003"
    )

    return response.languages[0].language

# Define a function to translate text to a target language
def translate_text(text, target_language):
    translation_response = openai.Translate.create(
        engine="davinci",
        text=text,
        target_language=target_language
    )

    return translation_response.translations[0].text

# Define a function to interact with the chatbot
def chat_with_bot():
    # Initialize the chat log
    chat_log = []

    # Start the conversation loop
    while True:
        # Prompt the user for input
        user_message = input("User: ")

        # Add the user message to the chat log
        chat_log.append(f"User: {user_message}")

        # Detect the language of the user input
        user_language = detect_language(user_message)

        # Translate the user message to English if the language is not English
        if user_language != "en":
            user_message = translate_text(user_message, "en")

        # Create a new input prompt with the user message
        input_prompt = "\n".join(chat_log)

        # Generate a response from GPT-3
        response = openai.Completion.create(
            engine='text-davinci-003',
            prompt=input_prompt,
            temperature=0.7,
            max_tokens=150,
            top_p=1.0,
            frequency_penalty=0.0,
            presence_penalty=0.0
        )

        # Extract the model's reply from the response
        model_reply = response.choices[0].text.strip()

        # Translate the model reply to the user's language if it's not English
        if user_language != "en":
            model_reply = translate_text(model_reply, user_language)

        # Add the model reply to the chat log
        chat_log.append(f"ChatBot: {model_reply}")

        # Print the model's reply
        print("ChatBot:", model_reply)

        # Check if the conversation is complete
        if 'Thank you!' in model_reply:
            break

# Example usage
print("ChatBot: Hello! How can I assist you with filling out the passport application form?")
chat_with_bot()
