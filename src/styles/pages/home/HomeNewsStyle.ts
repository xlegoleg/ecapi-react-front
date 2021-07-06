import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    titleContainer: {
        backgroundColor: `${theme.palette.secondary.main}`,
        color: `${theme.palette.primary.dark}`,
        padding: '10px 0',
    },
    title: {
        textAlign: 'center',
        fontSize: '30px',
        fontWeight: 'bolder',
        textTransform: 'uppercase',
    }
  })
})