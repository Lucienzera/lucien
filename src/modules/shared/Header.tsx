import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  header: {
    height: 60,
    backgroundColor: 'blue',
    position: 'fixed',
    width: '100vw',
    top: 0,
    zIndex: 1,
  },
});

export default function Header() {
  return (
    <div {...stylex.props(styles.header)}>
      <h2>Header</h2>
    </div>
  );
}
