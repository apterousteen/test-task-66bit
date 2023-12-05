import { Card, CardContent, CardHeader, Typography } from '@mui/material';

export default function NewsCard({ title, date, content }) {
  return (
    <Card variant="outlined" sx={{ bgcolor: 'primary.main', p: 1.5 }}>
      <CardHeader
        sx={{
          pb: 1.5,
          borderBottom: 'solid 1px',
          borderBottomColor: 'textColor.main',
          '& .MuiCardHeader-content': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
        }}
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
      <CardContent
        sx={{
          '&:last-child': {
            paddingBottom: 2,
          },
        }}
      >
        <Typography>{content}</Typography>
      </CardContent>
    </Card>
  );
}
