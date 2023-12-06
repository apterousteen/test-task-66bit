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

const InfoContainer = forwardRef(
  ({ newsLoading, newsErrorMsg, newsMsg }, ref) => {
    return (
      <div ref={ref} style={stackStyle}>
        {newsLoading && !newsErrorMsg && (
          <Typography variant="h6" component="p">
            Загрузка новостей...
          </Typography>
        )}
        {newsErrorMsg && (
          <Alert severity="error" sx={alertErrorStyle}>
            {newsErrorMsg}
          </Alert>
        )}
        {newsMsg && !newsErrorMsg && (
          <Typography variant="h6" component="p">
            {newsMsg}
          </Typography>
        )}
      </div>
    );
  }
);

export default InfoContainer;
