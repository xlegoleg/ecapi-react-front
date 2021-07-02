import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    container: {
      zIndex: 100,
      position: 'absolute',
      bottom: '20px',
      left: '50%',
      display: 'flex',
      margin: 'auto',
      borderRadius: '10px',
    },
    item: {
      opacity: '0.8',
      transition: 'background-color, transform 0.4s ease-in-out',
      width: '8px',
      height: '8px',
      margin: '0px 3px',
      borderRadius: '50%',
      backgroundColor: '#e8e8e8',
      '&:hover': {
        opacity: '1',
        cursor: 'pointer'
      }
    },
    item_active: {
      transform: 'scale(1.3)',
      backgroundColor: '#fff',
      borderColor: '#000'
    }
  })
})