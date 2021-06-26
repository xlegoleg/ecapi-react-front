import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    container: {
      position: 'relative'
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
      boxShadow: 'inset 0px 0px 15px 25px rgb(0 0 0 / 50%), 0px 0px 15px 15px rgb(0 0 0 / 50%)'
    }
  })
})