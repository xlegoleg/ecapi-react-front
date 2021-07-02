import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useButtonsStyles = makeStyles((theme: Theme) => {
    return createStyles({
        successButton: {
            backgroundColor: theme.palette.success.main,
            color: theme.palette.white.main,
            '&:hover': {
                backgroundColor: theme.palette.success.dark
            }
        },
        errorButton: {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.white.main,
            '&:hover': {
                backgroundColor: theme.palette.error.dark
            }
        }
    })
})