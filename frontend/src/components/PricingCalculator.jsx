import React from 'react';
import { Paper, Typography, Divider } from '@mui/material';

const PricingCalculator = ({ options }) => {
  const PRICES = {
    a4: { bw: 0.10, color: 0.50 },
    a3: { bw: 0.20, color: 0.75 },
    binding: 2.00,
    laminating: 1.50
  };

  const calculateTotal = () => {
    const basePrice = PRICES[options.paperSize][options.color] * options.copies;
    const bindingFee = options.binding ? PRICES.binding : 0;
    const laminatingFee = options.laminating ? PRICES.laminating : 0;
    return (basePrice + bindingFee + laminatingFee).toFixed(2);
  };

  return (
    <Paper elevation={2} sx={{ p: 2, mt: 2 }}>
      <Typography variant="h6">Order Summary</Typography>
      <Typography variant="body1">
        {options.copies} × {options.paperSize.toUpperCase()} {options.color === 'bw' ? 'B&W' : 'Color'}: 
        ${(PRICES[options.paperSize][options.color] * options.copies).toFixed(2)}
      </Typography>
      
      {options.binding && (
        <Typography variant="body1">Binding: +${PRICES.binding.toFixed(2)}</Typography>
      )}
      
      {options.laminating && (
        <Typography variant="body1">Laminating: +${PRICES.laminating.toFixed(2)}</Typography>
      )}
      
      <Divider sx={{ my: 1 }} />
      <Typography variant="h6">Total: ${calculateTotal()}</Typography>
    </Paper>
  );
};

// Must have either this (default export):
export default PricingCalculator;

// OR this (named export):
// export { PricingCalculator };
// But not both!