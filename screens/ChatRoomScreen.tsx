import React from 'react';
import { useRoute } from '@react-navigation/native';
import ChatMessage from '../components/ChatMessage';
import chatRoomData from '../data/Chats';

import { FlatList, ImageBackground } from 'react-native';
import BG from '../assets/images/BG.png';
import InputBox from '../components/InputBox';

const ChatRoomScreen = () => {
  const route = useRoute();

  return (
    <ImageBackground style={{ width: '100%', height: '100%' }} source={BG}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <ChatMessage message={item}/> }
        inverted
      />
      <InputBox />
    </ImageBackground>
  );
}

export default ChatRoomScreen;
