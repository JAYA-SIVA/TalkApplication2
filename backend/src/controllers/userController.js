import User from '../models/User.js';
import cloudinary from '../config/cloudinary.js';
import fs from 'fs';

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const imagePath = req.file.path;

    const result = await cloudinary.uploader.upload(imagePath, {
      folder: 'talk-app',
    });

    const user = new User({
      name,
      email,
      password,
      profileImage: result.secure_url,
    });

    await user.save();
    fs.unlinkSync(imagePath); // Remove local file

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
