const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  try {
    res.sendFile(__dirname + '/index.html');
  } catch (error) {
    console.error("Lỗi khi đọc file index.html:", error);
    res.status(500).send("Lỗi server");
  }
});

const port = 8000;
app.listen(port, () => {
  console.log(`Ứng dụng đang chạy trên cổng ${port}`);
});