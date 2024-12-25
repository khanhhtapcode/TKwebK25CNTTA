import express from 'express';
import bodyParser from 'body-parser';
import { GoogleGenerativeAI } from '@google/generative-ai';
import cors from 'cors';


const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
// Khai báo đường dẫn tới thư mục chứa giao diện
const path = 'C:\\Users\\KHANH\\TKwebK25CNTTA\\TKwebK25CNTTA\\TKwebK25CNTTA-main\\TKwebK25CNTTA-main\\CodeWeb\\Trangchu';
app.use(express.static(path));
// Cấu hình API Gemini
const genAI = new GoogleGenerativeAI("AIzaSyDwOKlySGXd3vjnNWdOji7SqXSVIoKanEA");

const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// Route xử lý chat
app.post('/chat', async (req, res) => {
    const { message } = req.body;

    try {
        const prompt = message;
        const result = await model.generateContent(prompt);
        console.log('API Raw Response:', result);

        // Kiểm tra và xử lý phản hồi từ API
        let reply = null;

        // Kiểm tra nếu `text` là một hàm, gọi hàm để lấy nội dung
        if (typeof result?.text === 'function') {
            reply = result.text(); // Gọi hàm để lấy nội dung
        } else if (typeof result?.text === 'string') {
            reply = result.text; // Nếu là chuỗi, lấy trực tiếp
        } else if (result?.response?.candidates?.length > 0) {
            // Trường hợp phản hồi chứa danh sách candidates
            reply = result.response.candidates[0]?.content || 'Không có phản hồi phù hợp.';
        }

        console.log('Extracted Reply:', reply);

        if (!reply) {
            throw new Error('Không tìm thấy câu trả lời từ API.');
        }

        // Trả về phản hồi cho client
        res.json({ reply });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ reply: 'Xin lỗi, chatbot gặp sự cố!' });
    }
});
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});


