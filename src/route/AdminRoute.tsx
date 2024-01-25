import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    backgroundColor: 'red',
    borderRadius: 8,
    padding: 16,
    boxShadow: '0 0 16px rgba(0, 0, 0, 0.1)',
  },
});

export default function AdminRoute() {
  /*TODO: 
      This section should include checking for user cookies:
          - token value
          - date
          - role (user/admin)
  
      if cookie exists then redirect to /dashboard (user) /admin-dashboard (admin)
      if cookie does not exists then redirect to /login
      */
  return (
    <div {...stylex.props(styles.container)}>
      <h1>In admin route now</h1>
    </div>
  );
}
