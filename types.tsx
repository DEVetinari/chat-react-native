/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  ChatRoom: undefined;
  Contacts: undefined;
  Root: undefined;
  NotFound: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id: String;
  imageUri: String;
  name: String;
  status: String;
};

export type Message = {
  id: String;
  content: String;
  createdAt: String;
  user: User;
};

export type ChatRoom = {
  id: String;
  lastMessage: Message
  users: [User];
}
