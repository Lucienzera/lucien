import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  sidebar: {
    width: 220,
    backgroundColor: 'grey',
    position: 'fixed',
    left: 0,
    top: 60,
    bottom: 0,
  },
});

export default function Sidebar() {
  return (
    <div {...stylex.props(styles.sidebar)}>
      <h2>Sidebar</h2>
    </div>
  );
}
