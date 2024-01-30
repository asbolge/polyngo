import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Grid } from 'semantic-ui-react';
import UserService from '../services/userService';

export default function SignInPage({
  userID,
  setUserPoints,
  setIsAuthenticated,
  kullaniciAdi,
  setKullaniciAdi,
  sifre,
  setSifre,
  setUserID,
}) {
  const navigate = useNavigate();
  const userService = new UserService();

  const handleSubmit = async () => {
    try {
      const response = await userService.loginAuth(kullaniciAdi, sifre);

      // Response'dan gelen verileri kontrol ederek işlemleri gerçekleştir
      if (response.data.success) {
        // Kullanıcı girişi başarılı, handleSignIn fonksiyonunu çağırarak isAuthenticated değerini true yapabilirsiniz
        setIsAuthenticated(true);

        // Kullanıcı ID'sini setUserID ile ayarla
        setUserID(response.data.data.id);

        // Navigate to the home page
        navigate('/');

        // Fetch user points after successful authentication
        const response1 = await userService.getUserByID(response.data.data.id);
        const upgradedPoints = response1.data?.userPoints;
        console.log('upgradedPoints: ' + upgradedPoints);
        setUserPoints(upgradedPoints);

        
      } else {
        // Kullanıcı girişi başarısız, gerekli mesajları kullanıcıya gösterebilirsiniz
        alert('username or password is wrong!');
        console.error('username or password is wrong');
      }
    } catch (error) {
      // Hata durumu, isteğin başarısız olduğunu belirtir
      console.error('Hata:', error.message);
    }
  };

  useEffect(() => {
    // Sayfa yüklendiğinde input alanlarını temizle
    setKullaniciAdi('');
    setSifre('');
  }, []);

  return (
    <div>
      <Grid>
        <Grid.Column className='mx-auto' width={12}>
          <Form>
            <Form.Field
              id='form-input-control-error-email'
              control={Input}
              label='username'
              placeholder='username...'
              value={kullaniciAdi}
              onChange={(e) => setKullaniciAdi(e.target.value)}
            />
            <Form.Field
              id='form-input-control-password'
              control={Input}
              label='Password'
              type='password'
              placeholder='Password'
              value={sifre}
              onChange={(e) => setSifre(e.target.value)}
            />
            <Button onClick={handleSubmit} primary>
              Sign In
            </Button>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
}
