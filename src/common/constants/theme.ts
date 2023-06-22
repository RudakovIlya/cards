import { createTheme } from '@mui/material'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    radius: true
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
  },
  palette: {
    primary: {
      main: '#366EFF',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { size: 'large' },
          style: {
            maxWidth: 347,
          },
        },
        {
          props: { color: 'error' },
          style: {
            background: '#FF3636',
            '&:hover': {
              background: '#ff1616',
            },
          },
        },
        {
          props: { size: 'medium' },
          style: {
            maxWidth: 174,
            minWidth: 175,
          },
        },
        {
          props: { size: 'small' },
          style: {
            maxWidth: 113,
            minWidth: 113,
          },
        },
        {
          props: { variant: 'radius' },
          style: {
            borderRadius: 30,
          },
        },
      ],
      styleOverrides: {
        root: {
          backgroundColor: '#366EFF',
          fontSize: '1rem',
          color: '#fff',
          textTransform: 'initial',
          boxShadow:
            '0 4px 18px rgba(54, 110, 255, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
          '&:hover': {
            backgroundColor: '#205eff',
          },
        },
      },
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: 'standard', color: 'primary' },
          style: {
            color: '#000000',
          },
        },
      ],
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          margin: '0 10px',
          height: 5,
          padding: '13px 0',
          '& .MuiSlider-thumb': {
            height: 16,
            width: 16,
            '&:hover': {
              boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
            },
            '& .airbnb-bar': {
              height: 9,
              width: 1,
              backgroundColor: 'currentColor',
              marginLeft: 1,
              marginRight: 1,
            },
          },
          '& .MuiSlider-track': {
            height: 3,
          },
          '& .MuiSlider-thumb:after': {
            width: '8px',
            height: '8px',
            top: '50%',
            left: '50%',
            backgroundColor: '#fff',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: 1100,
        },
      },
    },
  },
})
