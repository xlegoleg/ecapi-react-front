import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    container: {
      position: 'relative'
    },
    title: {
      whiteSpace: 'nowrap',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      fontWeight: 'bold',
      fontSize: '45px',
      color: `${theme.palette.white.main}`,
      boxShadow: 'inset 0px 0px 60px 55px rgb(0 0 0 / 50%), 0px 0px 15px 16px rgb(0 0 0 / 50%)'
    }
  })
})