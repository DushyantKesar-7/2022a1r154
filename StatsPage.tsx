import React from 'react';
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Log } from '../utils/Log';

export default function StatsPage() {
  // Mock data - replace with actual data from your state/API
  const stats = [
    {
      shortUrl: 'http://localhost:3000/abc123',
      originalUrl: 'https://example.com/long-url',
      clicks: 5,
      created: new Date('2023-05-15'),
      expiry: new Date('2023-06-15'),
      clickData: [
        { timestamp: new Date('2023-05-16'), source: 'Direct', location: 'India' }
      ]
    }
  ];

  React.useEffect(() => {
    Log('frontend', 'info', 'page', 'Statistics page loaded');
  }, []);

  return (
    <Paper elevation={3} style={{ padding: '2rem', margin: '2rem' }}>
      <Typography variant="h4" gutterBottom>URL Statistics</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Short URL</TableCell>
              <TableCell>Clicks</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Expires</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stats.map((stat, index) => (
              <TableRow key={index}>
                <TableCell>{stat.shortUrl}</TableCell>
                <TableCell>{stat.clicks}</TableCell>
                <TableCell>{stat.created.toLocaleString()}</TableCell>
                <TableCell>{stat.expiry.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}