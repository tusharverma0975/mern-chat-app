const express = require("express");
const chats = require("./data");
const app = express();
const port = 3000;
// const www = process.env.WWW || './';
// app.use(express.static(www));
// console.log(`serving ${www}`);
// app.get('*', (req, res) => {
//     res.sendFile(`index.html`, { root: www });
// });

app.get("/", (req, res) => {
  res.send("api");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  console.log(req.params.id);
  const singleChatId = chats.find((c) => c._id === req.params.id);
  req.send(singleChatId);
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
