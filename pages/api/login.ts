// /pages/api/login.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../lib/mongodb'
import bcrypt from 'bcryptjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { db } = await connectToDatabase();
        const { username, password } = req.body;

        const user = await db.collection('users').findOne({ username });

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
