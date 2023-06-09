import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { join } from "path";

const app = express();

// Serve static files from public folder (images, html, react js, etc)
app.use(express.static(join(process.cwd(), 'public')));

// Select environment variables file
dotenv.config({
  path: join(process.cwd(), `${process.env.NODE_ENV}.env`)
});

// Enable cors for development purposes
if (process.env.NODE_ENV === 'development') {
  app.use(cors());
}

app.use(express.json());

// Route(r)s here! ------------------------------

app.get('/hi', (req, res) => {
  res.send({ message: 'This message is brought to you by express, see server/main.js' })
})

// ----------------------------------------------

// Handle React routes
app.get('*', (req, res) => {
  res.sendFile(join(process.cwd(), 'public', 'index.html'));
});

const port = process.env.PORT || 3000;

console.log(process.env.MONGODB_URI)

mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
  app.listen(port, () => { console.log(`Listening on port ${port} in ${process.env.NODE_ENV}`) })
})

