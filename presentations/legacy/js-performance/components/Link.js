import glamorous from 'glamorous';

const color = '#999';
const activeColor = '#FF80E1';

export default glamorous.a({
  color,
  ':hover': { color: activeColor },
  ':visited': {
    color,
    ':hover': { color: activeColor }
  }
});