import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { IBaseCarouselStyleProps } from '@interfaces/components/BaseCarousel';

export const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    container: {
      position: 'relative',
      overflow: 'hidden'
    },
    rail: (props: IBaseCarouselStyleProps) => ({
      display: 'grid',
      gridColumnGap: `${props.spacing} px`,
      position: 'relative',
      transition: 'transform 0.5s cubic-bezier(0.2, 1, 0.3, 1) 0s',
      gridTemplateColumns: `repeat(${props.pages}, 100%)`,
      transform: `translateX(calc(${-100 * props.page}% - ${Number(props.spacing) * props.page}px))`
    }),
    item: {
      
    }
  });
});