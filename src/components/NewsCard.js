import { Card, CardContent, CardHeader, Typography } from '@mui/material';

export default function NewsCard() {
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
        title="News heading"
        subheader={<Typography variant="subtitle1">14.12.2016</Typography>}
      />
      <CardContent
        sx={{
          '&:last-child': {
            paddingBottom: 2,
          },
        }}
      >
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          aliquam architecto aut consectetur deleniti dolore enim et excepturi
          facere ipsa.
        </Typography>
      </CardContent>
    </Card>
  );
}
