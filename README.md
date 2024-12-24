# Vocabulary App
A simple and intuitive mobile application built with React Native that helps users expand their vocabulary by searching for word meanings and saving them for future reference. The app uses the DictionaryAPI to fetch word definitions and stores the user's vocabulary locally using AsyncStorage.

# Features
## Search for Word Meanings: 
  Enter a word, and the app fetches its meaning from the DictionaryAPI.
## Save Words:
  Save searched words and their meanings to your personal vocabulary list.
## View Vocabulary: 
  Access a list of all saved words and their meanings.
## Delete Words:
  Remove words from your vocabulary list with a simple click.
## Offline Storage:
  All data is stored locally on your device using AsyncStorage, so your vocabulary is accessible even without an internet connection.
# Technologies Used
**React Native:** For building the cross-platform mobile app.
**AsyncStorage:** For local data storage.
**DictionaryAPI:** For fetching word definitions.
## How to Use
1. Enter a word in the input field and press the "Get Meaning & Save" button.
2. View the fetched meaning and save it to your vocabulary list.
3. Access the list of saved words and their meanings in the app.
4. Remove a word from the list by tapping the "Delete" button next to it.
## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```
