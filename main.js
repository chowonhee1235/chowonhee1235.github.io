const { LiveChat } = require("youtube-chat");

const liveChat = new LiveChat({liveId: "ylX0f4b-Nqo"})

const ok = liveChat.start()
// Emit at start of observation chat.
// liveId: string
liveChat.on("start", (liveId) => {
  console.log(`live start ${liveId}`);
})

// Emit at end of observation chat.
// reason: string?
liveChat.on("end", (reason) => {
  console.log(`live end ${reason}`);
})

// Emit at receive chat.
// chat: ChatItem
liveChat.on("chat", (chatItem) => {
  console.log(chatItem);
})

// Emit when an error occurs
// err: Error or any
liveChat.on("error", (err) => {
  console.log(`error ${err}`);
})
