import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import {
  newsCardCardContent,
  newsCardCardHeader,
} from '../styles/componentStyles';

export default function NewsCard({ title, date, content }) {
  return (
    <Card variant="outlined" sx={{ bgcolor: 'primary.main', p: 1.5 }}>
      <CardHeader
        sx={newsCardCardHeader}
        title={
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
        }
        subheader={
          <Typography variant="subtitle1" component="span" sx={{ pl: 1.5 }}>
            {date}
          </Typography>
        }
      />
      <CardContent sx={newsCardCardContent}>
        <Typography>{content}</Typography>
      </CardContent>
    </Card>
  );
}
