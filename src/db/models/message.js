import { v4 as uuidv4 } from "uuid";

export default class Message {
  constructor(friendId, msg, from, to) {
    this.id = uuidv4();
    this.userId = "myRandomUserId";
    this.friendId = friendId;
    this.msg = msg;
    this.time = new Date();
    this.from = from;
    this.to = to;
    this.read = false;
  }

  createMessage() {
    return {
      id: this.id,
      userId: this.userId,
      friendId: this.friendId,
      msg: this.msg,
      time: this.time,
      from: this.from,
      to: this.to,
      read: this.read,
    };
  }
}
