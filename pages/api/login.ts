import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import { connectToDatabase } from '../../lib/mongodb';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        console.log('Received:', req.body); // Log the received request body

        const { db } = await connectToDatabase();
        const { username, password } = req.body;

        const user = await db.collection('users').findOne({ username });
        console.log('User found:', user); // Log the found user

        if (user && bcrypt.compareSync(password, user.password)) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}

export default handler;
