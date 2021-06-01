import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import {FontAwesome5, Fontisto, MaterialCommunityIcons, Entypo, MaterialIcons} from '@expo/vector-icons';

const InputBox = () => {

  const [message, setMessage] = useState('');

  const onMicrophonePress = () => {
    console.warn('microphone');
  }

  const onSendPress = () => {

    // Send the message to the backend

    console.warn('send');
  }

  const onPress = () => {
    if (!message) onMicrophonePress();
    else onSendPress();

  }

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color="grey" />
        <TextInput
          multiline
          onChangeText={setMessage}
          placeholder="Type a message"
          style={styles.textInput}
          value={message}
        />
        <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
        {!message && <Fontisto name="camera" size={24} color="grey" style={styles.icon} />}
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          {
            !message
              ? <MaterialCommunityIcons name="microphone" size={28} color="white" />
              : <MaterialIcons name="send" size={28} color="white" />
          }
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default InputBox;
