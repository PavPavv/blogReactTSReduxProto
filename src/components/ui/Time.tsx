import { makeStyles, Theme } from "@material-ui/core/styles";
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

//  logic
import { getTimeDaysFromNow } from "../../utils/funcs/getTimeDaysFromNow";

const useStyles = makeStyles((theme: Theme) => ({
  timeWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  timeBtn: {
    border: 0,
    outline: 'none',
    cursor: 'pointer',
    background: 'transparent',
  },
  time: {

  },
  timeIcon: {

  }
}));

const Time = (): JSX.Element => {
  const classes = useStyles();

  const time = getTimeDaysFromNow(1,11,1).toLocaleDateString();

  return (
    <div className={classes.timeWrap}>
      <button className={classes.timeBtn}>
        <QueryBuilderIcon className={classes.timeIcon} />
      </button>
      <div className={classes.time}>{time}</div>
    </div>  
  );
};

export default Time;