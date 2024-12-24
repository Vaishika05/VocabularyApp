// import React, { useState } from 'react';
// import { View, TextInput, Button, Text, StyleSheet, FlatList, Alert, TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function App() {
//   const [word, setWord] = useState('');
//   const [vocabulary, setVocabulary] = useState<{ word: string; meaning: string }[]>([]);

//   // Fetch meaning of the word
//   const fetchMeaning = async () => {
//     if (!word.trim()) {
//       Alert.alert('Error', 'Please enter a word');
//       return;
//     }

//     try {
//       const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
//       if (!response.ok) {
//         Alert.alert('Error', 'Word not found');
//         return;
//       }

//       const data = await response.json();
//       const meaning = data[0]?.meanings[0]?.definitions[0]?.definition || 'Meaning not found';
//       saveWord(word, meaning);
//     } catch (error) {
//       console.error('Error fetching meaning:', error);
//       Alert.alert('Error', 'Unable to fetch the meaning. Check your internet connection.');
//     }
//   };

//   // Save word and meaning to AsyncStorage and vocabulary list
//   const saveWord = async (word: string, meaning: string) => {
//     const newWord = { word, meaning };
//     const updatedVocabulary = [...vocabulary, newWord];
//     setVocabulary(updatedVocabulary);

//     try {
//       await AsyncStorage.setItem('vocabulary', JSON.stringify(updatedVocabulary));
//       setWord('');
//     } catch (error) {
//       console.error('Error saving word:', error);
//     }
//   };

//   // Load vocabulary from AsyncStorage
//   const loadVocabulary = async () => {
//     try {
//       const savedVocabulary = await AsyncStorage.getItem('vocabulary');
//       if (savedVocabulary) {
//         setVocabulary(JSON.parse(savedVocabulary));
//       }
//     } catch (error) {
//       console.error('Error loading vocabulary:', error);
//     }
//   };

//   // Delete word from AsyncStorage and vocabulary list
//   const deleteWord = async (wordToDelete: string) => {
//     const updatedVocabulary = vocabulary.filter(item => item.word !== wordToDelete);
//     setVocabulary(updatedVocabulary);

//     try {
//       await AsyncStorage.setItem('vocabulary', JSON.stringify(updatedVocabulary));
//     } catch (error) {
//       console.error('Error deleting word:', error);
//     }
//   };

//   React.useEffect(() => {
//     loadVocabulary();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Vocabulary App</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter a word"
//         value={word}
//         onChangeText={setWord}
//       />
//       <Button title="Get Meaning & Save" onPress={fetchMeaning} />
//       <FlatList
//         data={vocabulary}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.wordContainer}>
//             <Text style={styles.word}>
//               {item.word}: {item.meaning}
//             </Text>
//             <TouchableOpacity onPress={() => deleteWord(item.word)} style={styles.deleteButton}>
//               <Text style={styles.deleteText}>Delete</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   wordContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   word: {
//     fontSize: 18,
//   },
//   deleteButton: {
//     backgroundColor: '#ff6666',
//     padding: 5,
//     borderRadius: 5,
//   },
//   deleteText: {
//     color: '#fff',
//     fontSize: 14,
//   },
// });



import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, FlatList, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [word, setWord] = useState('');
  const [vocabulary, setVocabulary] = useState<{ word: string; meaning: string }[]>([]);

  // Fetch meaning of the word
  const fetchMeaning = async () => {
    if (!word.trim()) {
      Alert.alert('Error', 'Please enter a word');
      return;
    }

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (!response.ok) {
        Alert.alert('Error', 'Word not found');
        return;
      }

      const data = await response.json();
      const meaning = data[0]?.meanings[0]?.definitions[0]?.definition || 'Meaning not found';
      saveWord(word, meaning);
    } catch (error) {
      console.error('Error fetching meaning:', error);
      Alert.alert('Error', 'Unable to fetch the meaning. Check your internet connection.');
    }
  };

  // Save word and meaning to AsyncStorage and vocabulary list
  const saveWord = async (word: string, meaning: string) => {
    const newWord = { word, meaning };
    const updatedVocabulary = [...vocabulary, newWord];
    setVocabulary(updatedVocabulary);

    try {
      await AsyncStorage.setItem('vocabulary', JSON.stringify(updatedVocabulary));
      setWord('');
    } catch (error) {
      console.error('Error saving word:', error);
    }
  };

  // Load vocabulary from AsyncStorage
  const loadVocabulary = async () => {
    try {
      const savedVocabulary = await AsyncStorage.getItem('vocabulary');
      if (savedVocabulary) {
        setVocabulary(JSON.parse(savedVocabulary));
      }
    } catch (error) {
      console.error('Error loading vocabulary:', error);
    }
  };

  // Delete a word from the list and AsyncStorage
  const deleteWord = async (wordToDelete: string) => {
    const updatedVocabulary = vocabulary.filter(({ word }) => word !== wordToDelete);
    setVocabulary(updatedVocabulary);

    try {
      await AsyncStorage.setItem('vocabulary', JSON.stringify(updatedVocabulary));
    } catch (error) {
      console.error('Error deleting word:', error);
    }
  };

  React.useEffect(() => {
    loadVocabulary();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vocabulary App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a word"
        value={word}
        onChangeText={setWord}
      />
      <Button title="Get Meaning & Save" onPress={fetchMeaning} />
      <FlatList
        data={vocabulary}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.wordContainer}>
            <Text style={styles.word}>
              {item.word}: {item.meaning}
            </Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteWord(item.word)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  wordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  word: {
    fontSize: 16,
    flex: 1, // Ensures text doesn't overflow
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
