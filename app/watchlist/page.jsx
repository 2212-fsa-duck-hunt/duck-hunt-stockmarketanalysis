'use client';

import { styled, alpha } from '@mui/material/styles';
import { InputBase, Button, FormGroup } from '@mui/material';
import { SearchIcon } from '@mui/icons-material';
import DataTable from './dataTable';


export default function Watchlist() {
  if (typeof document !== 'undefined') {
    document.body.style = 'background: #11071B';
  }

  return (
    <div>
        <h1 style={{ color: '#ffffff' }}> watchlist heh </h1>
        <DataTable />

    </div>
  )
}