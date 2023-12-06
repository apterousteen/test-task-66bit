import { Alert, Typography } from '@mui/material';
import { forwardRef } from 'react';
import {
  infoContainerAlertErrorStyle,
  infoContainerStackStyle,
} from '../styles/componentStyles';

const InfoContainer = forwardRef(
  ({ newsLoading, newsErrorMsg, newsMsg }, ref) => {
    return (
      <div ref={ref} style={infoContainerStackStyle}>
        {newsLoading && !newsErrorMsg && (
          <Typography variant="h6" component="p">
            Загрузка новостей...
          </Typography>
        )}
        {newsErrorMsg && (
          <Alert severity="error" sx={infoContainerAlertErrorStyle}>
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
