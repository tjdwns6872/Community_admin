const express = require('express');
var oracledb = require("oracledb");
var dbConfig = require("./dbconfig");
const app = express();
const port = 3001;

// 간단한 API 엔드포인트 예제
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js server!' });
});

// 정적 파일 서빙 (React 빌드 파일)
app.use(express.static('../community/build'));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});