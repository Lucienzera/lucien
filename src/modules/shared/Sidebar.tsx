import stylex from '@stylexjs/stylex';
import { Link } from 'react-router-dom';

const styles = stylex.create({
  sidebar: {
    width: 220,
    backgroundColor: 'grey',
    position: 'fixed',
    left: 0,
    top: 60,
    bottom: 0,
  },
  listItem: {
    textDecoration: 'none',
    display: 'block',
    marginBottom: 10,
    color: {
      ':visited': 'green',
    },
    backgroundColor: {
      ':hover': 'blue',
      ':active': 'darkblue',
    },
  },
});

export default function Sidebar() {
  return (
    <div {...stylex.props(styles.sidebar)}>
      <nav>
        <Link to={`dashboard`} {...stylex.props(styles.listItem)}>
          dashboard
        </Link>
        <Link to={`dashboard`} {...stylex.props(styles.listItem)}>
          dashboard
        </Link>
        <Link to={`admin-dashboard`} {...stylex.props(styles.listItem)}>
          dashboard
        </Link>
      </nav>
    </div>
  );
}
