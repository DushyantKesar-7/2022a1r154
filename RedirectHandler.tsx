import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Log } from '../utils/Log';

export default function RedirectHandler() {
  const { shortcode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, you would:
    // 1. Look up the shortcode in your state/API
    // 2. Redirect to the original URL if found
    // 3. Handle errors if not found
    
    Log('frontend', 'info', 'page', `Attempting redirect for: ${shortcode}`);
    
    // Mock implementation - redirect to home after 2 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000);

    return () => clearTimeout(timer);
  }, [shortcode, navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Redirecting...</h2>
      <p>You will be redirected shortly.</p>
    </div>
  );
}