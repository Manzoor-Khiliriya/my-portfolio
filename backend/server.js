require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Contact = require("./models/Contact");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// DB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("DB Error:", err));

// Contact route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message)
      return res.status(400).json({ ok: false, msg: "All fields are required" });

    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    return res.json({ ok: true, msg: "Message sent successfully! I'll get back to you soon." });
  } catch (err) {
    return res.status(500).json({ ok: false, msg: "Server error, try again later" });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});
