// Стили компонентов

export const mainInnerContainerStyle = {
  display: 'flex',
  backgroundColor: 'secondary.main',
  p: 0,
};

export const newsFeedNewsContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  py: 3,
};

export const newsFeedLoadingButtonStyle = {
  position: 'fixed',
  m: 'auto',
  left: 0,
  right: 0,
  width: 'fit-content',
  bgcolor: 'secondary.main',
  border: '2px solid',
  borderColor: 'textColor.main',
  color: 'textColor.main',
  textTransform: 'none',
  opacity: 0.8,
  '&:hover': {
    opacity: 1,
    bgcolor: 'secondary.main',
    border: '2px solid',
    color: 'textColor.main',
  },
};

export const newsCardCardHeader = {
  pb: 1.5,
  borderBottom: 'solid 1px',
  borderBottomColor: 'textColor.main',
  '& .MuiCardHeader-content': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};

export const newsCardCardContent = {
  '&:last-child': {
    paddingBottom: 2,
  },
};

export const infoContainerStackStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  textAlign: 'center',
  paddingBottom: '56px',
};

export const infoContainerAlertErrorStyle = {
  bgcolor: 'error.main',
  '& .MuiAlert-message': {
    color: 'error.text',
  },
  '& .MuiAlert-icon': {
    color: 'error.icon',
  },
};

export const themesContainerStyle = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
  gap: 6,
};

export const themesAlertInfoStyle = {
  bgcolor: 'info.main',
  '& .MuiAlert-message': {
    color: 'info.text',
  },
  '& .MuiAlert-icon': {
    color: 'info.icon',
  },
};

export const themesAlertErrorStyle = {
  width: '65vw',
  bgcolor: 'error.main',
  '& .MuiAlert-message': {
    color: 'error.text',
  },
  '& .MuiAlert-icon': {
    color: 'error.icon',
  },
};

export const footerPaperStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
};

export const footerBottomNavStyle = {
  '& .MuiBottomNavigationAction-root, svg': {
    color: 'primary.dim',
  },
  '& .Mui-selected, .Mui-selected > svg': {
    color: 'textColor.main',
  },
  bgcolor: 'primary.main',
};

export const page404ContainerStyle = {
  m: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
