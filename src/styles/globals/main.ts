import { makeStyles } from '@material-ui/core/styles';

export const useGlobalStyles = makeStyles({
  '@global': {
    html: {
      width: '100%',
      height: '100%'
    },
    body: {
      width: '100%',
      height: '100%'
    }
  }
})