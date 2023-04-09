import express, { Request, Response } from "express";

const app = express();
const PORT = 3000; // Port number for the server to listen on

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Routes
app.get("/", (_req: Request, res: Response) => {
  res.send("<b>Hello, World! part seven</b>");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});