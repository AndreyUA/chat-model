import avatar1 from "./avatars/1.jpg";
import avatar2 from "./avatars/2.jpg";
import avatar3 from "./avatars/3.jpg";
import avatar4 from "./avatars/4.jpg";
import avatar5 from "./avatars/5.jpg";
import avatar6 from "./avatars/6.jpg";
import avatar7 from "./avatars/7.jpg";
import avatar8 from "./avatars/8.jpg";
import avatar9 from "./avatars/9.jpg";
import avatar10 from "./avatars/10.jpg";

export const USERS = [
  {
    id: 1,
    name: "Andrey",
    lastMsg: {
      msg: "hello",
      time: new Date(),
    },
    avatar: avatar1,
    phoneNumber: "(303) 555-1111",
  },
  {
    id: 2,
    name: "Andrey",
    lastMsg: {
      msg: "hello",
      time: new Date(),
    },
    avatar: avatar2,
    phoneNumber: "(303) 555-2222",
  },
  {
    id: 3,
    name: "Andrey",
    lastMsg: {
      msg: "hello",
      time: new Date(),
    },
    avatar: avatar3,
    phoneNumber: "(303) 555-3333",
  },
  {
    id: 4,
    name: "Andrey",
    lastMsg: {
      msg: "hello",
      time: new Date(),
    },
    avatar: avatar4,
    phoneNumber: "(303) 555-4444",
  },
  {
    id: 5,
    name: "Andrey",
    lastMsg: {
      msg: "hello",
      time: new Date(),
    },
    avatar: avatar5,
    phoneNumber: "(303) 555-5555",
  },
  {
    id: 6,
    name: "Andrey",
    lastMsg: {
      msg: "hello",
      time: new Date(),
    },
    avatar: avatar6,
    phoneNumber: "(303) 555-6666",
  },
  {
    id: 7,
    name: "Andrey",
    lastMsg: {
      msg: "hello",
      time: new Date(),
    },
    avatar: avatar7,
    phoneNumber: "(303) 555-7777",
  },
  {
    id: 8,
    name: "Andrey",
    lastMsg: {
      msg: "hello",
      time: new Date(),
    },
    avatar: avatar8,
    phoneNumber: "(303) 555-8888",
  },
  {
    id: 9,
    name: "Andrey",
    lastMsg: {
      msg: "hello",
      time: new Date(),
    },
    avatar: avatar9,
    phoneNumber: "(303) 555-9999",
  },
  {
    id: 10,
    name: "Andrey",
    lastMsg: {
      msg: "hello",
      time: new Date(),
    },
    avatar: avatar10,
    phoneNumber: "(303) 555-0000",
  },
];

export const CHAT = [
  // ------------------------------------------------------
  // 1
  // ------------------------------------------------------
  {
    id: 1,
    userId: "myRandomUserId",
    friendId: 1,
    msg: "hello",
    time: new Date(),
    from: "friend",
    to: "me",
    read: true,
  },
  {
    id: 2,
    userId: "myRandomUserId",
    friendId: 1,
    msg: "hi!",
    time: new Date(),
    from: "me",
    to: "friend",
    read: true,
  },
  {
    id: 3,
    userId: "myRandomUserId",
    friendId: 1,
    msg: "how are you?",
    time: new Date(),
    from: "me",
    to: "friend",
    read: true,
  },
  {
    id: 4,
    userId: "myRandomUserId",
    friendId: 1,
    msg: "fine! what about you?",
    time: new Date(),
    from: "friend",
    to: "me",
    read: true,
  },
  {
    id: 5,
    userId: "myRandomUserId",
    friendId: 1,
    msg: "okay",
    time: new Date(),
    from: "me",
    to: "friend",
    read: false,
  },
  {
    id: 6,
    userId: "myRandomUserId",
    friendId: 1,
    msg: "shall we meet tomorrow?",
    time: new Date(),
    from: "me",
    to: "friend",
    read: false,
  },
  // ------------------------------------------------------
  // 2
  // ------------------------------------------------------
  {
    id: 8,
    userId: "myRandomUserId",
    friendId: 2,
    msg: "hi, are you busy now?",
    time: new Date(),
    from: "me",
    to: "friend",
    read: false,
  },
  // ------------------------------------------------------
  // 3
  // ------------------------------------------------------

  // EMPTY
  
  // ------------------------------------------------------
  // 4
  // ------------------------------------------------------
  {
    id: 10,
    userId: "myRandomUserId",
    friendId: 4,
    msg: "wow, finally! you are here",
    time: new Date(),
    from: "me",
    to: "friend",
    read: false,
  },
  // ------------------------------------------------------
  // 5
  // ------------------------------------------------------
  {
    id: 11,
    userId: "myRandomUserId",
    friendId: 5,
    msg: "happy birthday!",
    time: new Date(),
    from: "friend",
    to: "me",
    read: true,
  },
  {
    id: 12,
    userId: "myRandomUserId",
    friendId: 5,
    msg: "wish you good health",
    time: new Date(),
    from: "friend",
    to: "me",
    read: true,
  },
  // ------------------------------------------------------
  // 6
  // ------------------------------------------------------
  {
    id: 13,
    userId: "myRandomUserId",
    friendId: 6,
    msg: "marry christmas and a happy new year",
    time: new Date(),
    from: "friend",
    to: "me",
    read: true,
  },
  {
    id: 14,
    userId: "myRandomUserId",
    friendId: 6,
    msg: "thank you!",
    time: new Date(),
    from: "me",
    to: "friend",
    read: true,
  },
  {
    id: 15,
    userId: "myRandomUserId",
    friendId: 6,
    msg: "have a good holidays",
    time: new Date(),
    from: "me",
    to: "friend",
    read: true,
  },
  // ------------------------------------------------------
  // 7
  // ------------------------------------------------------
  {
    id: 16,
    userId: "myRandomUserId",
    friendId: 7,
    msg: "so cute avatar!",
    time: new Date(),
    from: "me",
    to: "friend",
    read: false,
  },
  // ------------------------------------------------------
  // 8
  // ------------------------------------------------------
  {
    id: 17,
    userId: "myRandomUserId",
    friendId: 8,
    msg: "so cute avatar!",
    time: new Date(),
    from: "me",
    to: "friend",
    read: true,
  },
  // ------------------------------------------------------
  // 9
  // ------------------------------------------------------
  {
    id: 18,
    userId: "myRandomUserId",
    friendId: 9,
    msg: "Is it you? We met a few day ago",
    time: new Date(),
    from: "friend",
    to: "me",
    read: true,
  },
  {
    id: 19,
    userId: "myRandomUserId",
    friendId: 9,
    msg: "sorry, but I don't remeber you",
    time: new Date(),
    from: "me",
    to: "friend",
    read: true,
  },
  {
    id: 20,
    userId: "myRandomUserId",
    friendId: 9,
    msg: "You have the wrong number",
    time: new Date(),
    from: "me",
    to: "friend",
    read: true,
  },
  // ------------------------------------------------------
  // 10
  // ------------------------------------------------------
  {
    id: 21,
    userId: "myRandomUserId",
    friendId: 10,
    msg: "what a nice fox!",
    time: new Date(),
    from: "me",
    to: "friend",
    read: true,
  },
];
