import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

dotenv.config({ path: ".env" });
databaseConnection();

const app = express();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: [
        "http://localhost:3000",
        "https://your-frontend.vercel.app"
    ],
    credentials: true
}));

// routes
app.get("/", (req, res) => {
    res.send("API is running...");
});

app.use("/api/v1/user", userRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
