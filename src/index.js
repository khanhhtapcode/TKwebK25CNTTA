const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Route chính
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Bắt đầu server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});

console.log("Ứng dụng Node.js đang chạy!");
