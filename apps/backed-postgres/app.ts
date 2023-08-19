import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cros from "cors";
import pool from "./db";

dotenv.config();

const app: Express = express();
app.use(cros());
const port = 5000;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

// Routes

// create a todo

app.post("/todos", async (req: Request, res: Response) => {
    try {
        const { data } = req.body;
        const newTodo = await pool.query("INSERT INTO create2 (name) VALUES ($1)", [data]);
        res.json(newTodo);
    } catch (error) {
        console.log("Error", error);
    }
});

// get all todos

// update todo

// delete todo

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
