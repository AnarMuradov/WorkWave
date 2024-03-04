import { userModel } from "../Model/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export const handleLogin = async (req, res) => {
  try { 
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      res.json("User not found");
      return;
    }
    const hash = await bcrypt.compare(password, user.password);
    if (!hash) {
      res.json("wrong password");
      return;
    }
    var token = jwt.sign(
      { email, role: user.role, id: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "24h" }
    );
    res.status(200).json(token);
  } catch (error) {
    res.send(error.message);
  }
};

export const handleRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hash = await bcrypt.hash(password, 12);

    const newUser = new userModel({
      username: username,
      email: email,
      password: hash,
    });
    await newUser.save();
    const token = jwt.sign(
      { email: newUser.email, role: newUser.role, id: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "24h" }
    );
    res.status(201).json(token);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
