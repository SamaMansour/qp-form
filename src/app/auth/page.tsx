// /pages/index.tsx
"use client"; // This is a client component 👈🏽
// pages/index.tsx
// pages/index.tsx
import { useState } from 'react';
import { Form, Input, Button, Card } from 'antd';

export default function Home() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        // API call logic here
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
            <Card title="Login to Your Account" style={{ width: 400, boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius: '10px' }}>
                <Form
                    onFinish={handleSubmit}
                    layout="vertical"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}
