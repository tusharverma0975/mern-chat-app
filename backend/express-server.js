const express = require("express");
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
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
