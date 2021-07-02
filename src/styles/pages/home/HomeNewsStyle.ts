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
    },
    newsTitle: {
      overflow: 'hidden',
      textOverflow: 'elipsis',
      height: '65px',
      lineClamp: 2,
      boxOrient: 'vertical',
      display: 'box'
    },
    newsDescription: {
      overflow: 'hidden',
      textOverflow: 'elipsis',
      height: '140px',
      lineClamp: 7,
      boxOrient: 'vertical',
      display: 'box'
    },
    newsCard: {
      boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
      borderRadius: '0'
    },
    newsCardActions: {
      backgroundColor: theme.palette.grey[100]
    }
  })
})