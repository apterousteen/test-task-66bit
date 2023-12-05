import { Alert, Typography } from '@mui/material';
import { forwardRef } from 'react';

const stackStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  textAlign: 'center',
  paddingBottom: '56px',
};

const alertErrorStyle = {
  bgcolor: 'error.main',
  '& .MuiAlert-message': {
    color: 'error.text',
  },
  '& .MuiAlert-icon': {
    color: 'error.icon',
  },
};

const InfoContainer = forwardRef(({ newsLoading, newsErrorMsg }, ref) => {
  return (
    <div ref={ref} style={stackStyle}>
      {newsLoading && (
        <Typography variant="h6" component="p">
          Загрузка новостей...
        </Typography>
      )}
      {newsErrorMsg && (
        <Alert severity="error" sx={alertErrorStyle}>
          {newsErrorMsg}
        </Alert>
      )}
    </div>
  );
});

export default InfoContainer;
