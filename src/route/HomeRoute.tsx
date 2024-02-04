import stylex from '@stylexjs/stylex';
import { Outlet } from 'react-router-dom';
import Header from '../modules/shared/Header';
import Sidebar from '../modules/shared/Sidebar';

const styles = stylex.create({
  screen: {
    display: 'flex',
    minHeight: '100vh',
    minWidth: '100vw',
    flex: 1,
    flexDirection: 'column',
  },
  contentContainer: {
    display: 'flex',
    minHeight: '100vh',
    minWidth: '100vw',
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    paddingTop: 60,
    paddingLeft: 220,
    backgroundColor: 'red',
    margin: 0,
  },
});

export default function HomeRoute() {
  return (
    <div {...stylex.props(styles.screen)}>
      <Header />
      <div {...stylex.props(styles.contentContainer)}>
        <Sidebar />
        <div {...stylex.props(styles.container)}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
