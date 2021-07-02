import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    container: {
      position: 'relative',
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        zIndex: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
      }
    },
    title: {
      borderRadius: '15px',
      whiteSpace: 'nowrap',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      fontWeight: 'bold',
      fontSize: '40px',
      textTransform: 'uppercase',
      color: `${theme.palette.white.main}`,
      zIndex: 3
    }
  })
})