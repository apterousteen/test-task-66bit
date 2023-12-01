import { Alert, Stack, Typography } from '@mui/material';

const stackStyle = { width: '100%', textAlign: 'center', pb: '56px' };

const alertErrorStyle = {
  bgcolor: 'error.main',
  '& .MuiAlert-message': {
    color: 'error.text',
  },
  '& .MuiAlert-icon': {
    color: 'error.icon',
  },
};

export default function ObserverRef() {
  return (
    <Stack sx={stackStyle} spacing={2}>
      <Typography variant="h6">Loading...</Typography>
      <Alert severity="error" sx={alertErrorStyle}>
        Что-то пошло не так, попробуйте еще раз.
      </Alert>
    </Stack>
  );
}
