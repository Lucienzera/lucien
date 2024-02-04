import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default function UserRoute() {
  return (
    <div {...stylex.props(styles.container)}>
      <h1>In user route now</h1>
    </div>
  );
}
