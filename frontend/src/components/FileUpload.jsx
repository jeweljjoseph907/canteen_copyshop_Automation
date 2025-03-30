import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Paper, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const FileUpload = ({ files, setFiles }) => {
  const onDrop = useCallback(acceptedFiles => {
    setFiles(acceptedFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      id: Math.random().toString(36).substring(2, 9)
    })));
  }, [setFiles]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'image/*': ['.jpg', '.jpeg', '.png']
    }
  });

  const removeFile = (id) => {
    setFiles(files.filter(file => file.id !== id));
  };

  return (
    <div>
      <Paper 
        {...getRootProps()} 
        sx={{
          p: 4,
          border: '2px dashed #ccc',
          textAlign: 'center',
          cursor: 'pointer',
          mb: 2
        }}
      >
        <input {...getInputProps()} />
        <Typography>Drag & drop files here, or click to select</Typography>
        <Typography variant="caption">(PDF, DOC, DOCX, JPG, PNG)</Typography>
      </Paper>

      {files.length > 0 && (
        <List>
          {files.map(file => (
            <ListItem 
              key={file.id}
              secondaryAction={
                <IconButton edge="end" onClick={() => removeFile(file.id)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText 
                primary={file.file.name} 
                secondary={`${(file.file.size / 1024).toFixed(2)} KB`} 
              />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default FileUpload;