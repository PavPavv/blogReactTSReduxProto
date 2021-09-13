type Margin = '0' | '5' | '10' | '15' | '20' | '25' | '30' | '35' | '50' | '70' | '100';

interface BoxProps {
  mt?: Margin;
  mr?: Margin;
  mb?: Margin;
  ml?: Margin;
  children?: JSX.Element | null;
};

const Box = ({ mt = '0', mr = '0', mb = '0', ml = '0', children }: BoxProps): JSX.Element => {
  const classes = {
    box: {
      display: 'block',
      marginTop: `${mt}px`,
      marginRight: `${mr}px`,
      marginBottom: `${mb}px`,
      marginLeft: `${ml}px`,
    }
  };

  return (
    <div style={classes.box}>{children}</div>
  );
};

export default Box;