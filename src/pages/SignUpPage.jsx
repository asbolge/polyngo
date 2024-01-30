import React, { useState } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import UserService from '../services/userService';
import { ToastContainer, toast } from 'react-toastify';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const userService = new UserService();

  const handleRegistration = async () => {
    try {
      // Kullanıcı adı kontrolü
      if (userName.length < 5) {
        toast.error('Username must be at least 5 characters.');
        return;
      }

      // Şifre kontrolü
      if (password.length < 5) {
        toast.error('Password must be at least 5 characters.');
        return;
      }

      // Şifrelerin eşleşme kontrolü
      if (password !== confirmPassword) {
        toast.error('Passwords do not match.');
        return;
      }

      // E-posta format kontrolü
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error('Invalid email format.');
        return;
      }

      const response = await userService.registerUser(email, userName, password);
      if (response.success) {
        console.log('Kayıt başarıyla tamamlandı');
        toast.success('Successfully registered!');
      } else {
        alert('Kayıt Başarısız!');
        console.error('Kayıt başarısız: ', response.message);
      }
    } catch (error) {
      console.error('Hata:', error.message);
    }
  };

  return (
    <div>
      <Form>
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-first-name'
            control={Input}
            label='username'
            placeholder='username...'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Field
          id='form-input-control-error-email'
          control={Input}
          label='Email'
          placeholder='joe@schmoe.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-password'
            control={Input}
            label='Password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Field
            id='form-input-control-confirm-password'
            control={Input}
            type='password'
            label='Confirm Password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Field
          id='form-button-control-public'
          control={Button}
          content='Sign Up'
          onClick={handleRegistration}
        />
      </Form>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
