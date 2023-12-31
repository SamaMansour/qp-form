// /pages/index.tsx
"use client"; // This is a client component 👈🏽
// pages/index.tsx
import { useFormik } from 'formik';
import { Button, Card, Form, Input, message } from 'antd';
import * as Yup from 'yup';

export default function Home() {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Please input your username!'),
            password: Yup.string().required('Please input your password!'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });

                const data = await response.json();

                if (response.ok) {
                    message.success('Login successful');
                    // Additional actions on successful login (e.g., redirect)
                } else {
                    message.error(data.message || 'Invalid username or password');
                }
            } catch (error) {
                console.error('Error:', error);
                message.error('An error occurred, please try again later');
            }
        },
    });

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
            <Card title="Login to Your Account" style={{ width: 400, boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius: '10px' }}>
                <Form layout="vertical" onFinish={formik.handleSubmit}>
                    <Form.Item label="Username" help={formik.touched.username && formik.errors.username}>
                        <Input 
                            name="username" 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur} 
                            value={formik.values.username} 
                        />
                    </Form.Item>
                    <Form.Item label="Password" help={formik.touched.password && formik.errors.password}>
                        <Input.Password 
                            name="password" 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur} 
                            value={formik.values.password} 
                        />
                    </Form.Item>
                    <Button type="primary" htmlType="submit" block disabled={formik.isSubmitting}>
                        Login
                    </Button>
                </Form>
            </Card>
        </div>
    );
}