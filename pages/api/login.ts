// pages/api/login.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/mongodb';
import User from '../../models/User'; // Adjust the import path as necessary

interface LoginRequest extends NextApiRequest {
  body: {
    username: string;
    password: string;
  };
}

interface ResponseData {
  message: string;
  user?: {
    username: string;
  };
}

export default async function handler(
  req: LoginRequest,
  res: NextApiResponse<ResponseData>
) {
  await dbConnect();

  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({ username, password }).select('-password');
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
      res.status(200).json({ message: 'Login successful', user: { username: user.username } });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
