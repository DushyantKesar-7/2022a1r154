// components/ShortenerPage.tsx
import React, { useState } from 'react';
import { Button, TextField, Grid, Paper, Typography } from '@mui/material';
import { Log } from '../utils/Log';

export default function ShortenerPage() {
  const [urls, setUrls] = useState<Array<{
    original: string;
    short: string;
    expiry: Date;
    validity?: number;
    shortcode?: string;
  }>>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    
    // Validate URL
    if (!isValidUrl(formData.get('url') as string)) {
      Log('frontend', 'error', 'page', 'Invalid URL format');
      return;
    }

    // Generate short URL (mock implementation)
    const shortUrl = generateShortUrl();
    
    setUrls([...urls, {
      original: formData.get('url') as string,
      short: shortUrl,
      expiry: new Date(Date.now() + (Number(formData.get('validity') || 30) * 60000),
      validity: Number(formData.get('validity')) || undefined,
      shortcode: formData.get('shortcode') as string || undefined
    }]);

    Log('frontend', 'info', 'page', 'URL shortened successfully');
  };

  return (
    <Paper elevation={3} style={{ padding: '2rem', margin: '2rem' }}>
      <Typography variant="h4" gutterBottom>URL Shortener</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              name="url"
              label="Original URL"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="validity"
              type="number"
              label="Validity (minutes)"
              defaultValue={30}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="shortcode"
              label="Custom Shortcode (optional)"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Shorten URL
            </Button>
          </Grid>
        </Grid>
      </form>

      {/* Display shortened URLs */}
      {urls.map((url, index) => (
        <div key={index} style={{ marginTop: '1rem' }}>
          <Typography>Original: {url.original}</Typography>
          <Typography>Short: {url.short}</Typography>
          <Typography>Expires: {url.expiry.toLocaleString()}</Typography>
        </div>
      ))}
    </Paper>
  );
}

function isValidUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function generateShortUrl() {
  return `http://localhost:3000/${Math.random().toString(36).substring(2, 8)}`;
}