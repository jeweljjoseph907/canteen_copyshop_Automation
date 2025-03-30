import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Paper, Button } from '@mui/material';
import FileUpload from '../components/FileUpload';
import OrderOptions from '../components/OrderOptions';
import PricingCalculator from '../components/PricingCalculator';
import { createOrder } from '../api';

const StudentView = () => {
  // State management
  const [activeStep, setActiveStep] = useState(0);
  const [orderDetails, setOrderDetails] = useState({
    files: [],
    options: {
      paperSize: 'a4',
      color: 'bw',
      copies: 1,
      quality: 'standard',
      paperType: 'normal',
      binding: false,
      laminating: false,
      folding: false,
      stapling: false,
      instructions: ''
    }
  });

  // Calculate total price function
  const calculateTotal = () => {
    const PRICES = {
      a4: { bw: 0.10, color: 0.50 },
      a3: { bw: 0.20, color: 0.75 },
      letter: { bw: 0.15, color: 0.60 },
      binding: 2.00,
      laminating: 1.50,
      folding: 0.50,
      stapling: 0.25,
      quality: {
        standard: 0,
        high: 0.10,
        premium: 0.25
      },
      paperType: {
        normal: 0,
        thick: 0.15,
        premium: 0.30
      }
    };

    const { options } = orderDetails;
    const basePrice = PRICES[options.paperSize][options.color] * options.copies;
    const bindingFee = options.binding ? PRICES.binding : 0;
    const laminatingFee = options.laminating ? PRICES.laminating : 0;
    const foldingFee = options.folding ? PRICES.folding : 0;
    const staplingFee = options.stapling ? PRICES.stapling : 0;
    const qualityFee = PRICES.quality[options.quality] * options.copies;
    const paperTypeFee = PRICES.paperType[options.paperType] * options.copies;
    
    return (basePrice + bindingFee + laminatingFee + foldingFee + staplingFee + qualityFee + paperTypeFee).toFixed(2);
  };

  // Stepper control functions
  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  // Order submission
  const handleSubmitOrder = async () => {
    try {
      const totalPrice = calculateTotal();
      const formData = new FormData();
      
      orderDetails.files.forEach(file => {
        formData.append('files', file.file);
      });
      
      formData.append('studentId', 'currentUserId'); // Replace with actual auth
      formData.append('studentName', 'Student Name'); // Replace with actual
      formData.append('options', JSON.stringify(orderDetails.options));
      formData.append('totalPrice', totalPrice);
      
      await createOrder(formData);
      alert('Order placed successfully!');
      
      // Reset form
      setActiveStep(0);
      setOrderDetails({
        files: [],
        options: {
          paperSize: 'a4',
          color: 'bw',
          copies: 1,
          quality: 'standard',
          paperType: 'normal',
          binding: false,
          laminating: false,
          folding: false,
          stapling: false,
          instructions: ''
        }
      });
    } catch (error) {
      console.error('Order submission failed:', error);
      alert('Failed to place order');
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        <Step><StepLabel>Upload Files</StepLabel></Step>
        <Step><StepLabel>Select Options</StepLabel></Step>
        <Step><StepLabel>Review & Pay</StepLabel></Step>
      </Stepper>

      {activeStep === 0 && (
        <FileUpload 
          files={orderDetails.files} 
          setFiles={(files) => setOrderDetails({...orderDetails, files})}
        />
      )}

      {activeStep === 1 && (
        <OrderOptions 
          options={orderDetails.options} 
          setOptions={(options) => setOrderDetails({...orderDetails, options})}
        />
      )}

      {activeStep === 2 && (
        <PricingCalculator options={orderDetails.options} />
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
        <Button 
          variant="outlined" 
          disabled={activeStep === 0} 
          onClick={handleBack}
        >
          Back
        </Button>
        <Button 
          variant="contained" 
          onClick={activeStep === 2 ? handleSubmitOrder : handleNext}
          disabled={
            (activeStep === 0 && orderDetails.files.length === 0) ||
            (activeStep === 1 && !orderDetails.options.copies)
          }
        >
          {activeStep === 2 ? 'Place Order' : 'Next'}
        </Button>
      </div>
    </Paper>
  );
};

export default StudentView;