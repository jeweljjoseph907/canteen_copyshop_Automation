import React from 'react';
import { 
  Grid,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Divider,
  Typography
} from '@mui/material';

const OrderOptions = ({ options, setOptions }) => {
  const handleChange = (e) => {
    setOptions({
      ...options,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    });
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Printing Options
      </Typography>
      <Divider sx={{ mb: 3 }} />
      
      <Grid container spacing={3}>
        {/* Paper Size */}
        <Grid item xs={12} sm={6}>
          <TextField
            select
            label="Paper Size"
            name="paperSize"
            value={options.paperSize}
            onChange={handleChange}
            fullWidth
            required
          >
            <MenuItem value="a4">A4 (210 × 297 mm)</MenuItem>
            <MenuItem value="a3">A3 (297 × 420 mm)</MenuItem>
            <MenuItem value="letter">Letter (8.5 × 11 in)</MenuItem>
          </TextField>
        </Grid>

        {/* Color Type */}
        <Grid item xs={12} sm={6}>
          <TextField
            select
            label="Color"
            name="color"
            value={options.color}
            onChange={handleChange}
            fullWidth
            required
          >
            <MenuItem value="bw">Black & White</MenuItem>
            <MenuItem value="color">Color</MenuItem>
          </TextField>
        </Grid>

        {/* Quantity */}
        <Grid item xs={12}>
          <TextField
            label="Number of Copies"
            name="copies"
            type="number"
            inputProps={{ min: 1 }}
            value={options.copies}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>

        {/* Print Quality */}
        <Grid item xs={12} sm={6}>
          <TextField
            select
            label="Print Quality"
            name="quality"
            value={options.quality}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="standard">Standard (300 dpi)</MenuItem>
            <MenuItem value="high">High (600 dpi)</MenuItem>
            <MenuItem value="premium">Premium (1200 dpi)</MenuItem>
          </TextField>
        </Grid>

        {/* Paper Type */}
        <Grid item xs={12} sm={6}>
          <TextField
            select
            label="Paper Type"
            name="paperType"
            value={options.paperType}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="normal">Normal (80gsm)</MenuItem>
            <MenuItem value="thick">Thick (100gsm)</MenuItem>
            <MenuItem value="premium">Premium (120gsm)</MenuItem>
          </TextField>
        </Grid>

        {/* Finishing Options */}
        <Grid item xs={12}>
          <Typography variant="subtitle1" gutterBottom>
            Finishing Options
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3}>
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={options.binding} 
                    onChange={handleChange} 
                    name="binding" 
                  />
                }
                label="Spiral Binding"
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={options.laminating} 
                    onChange={handleChange} 
                    name="laminating" 
                  />
                }
                label="Laminating"
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={options.folding} 
                    onChange={handleChange} 
                    name="folding" 
                  />
                }
                label="Folding"
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={options.stapling} 
                    onChange={handleChange} 
                    name="stapling" 
                  />
                }
                label="Stapling"
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Special Instructions */}
        <Grid item xs={12}>
          <TextField
            label="Special Instructions"
            name="instructions"
            value={options.instructions}
            onChange={handleChange}
            multiline
            rows={3}
            fullWidth
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderOptions;