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
    <>
      <h1>In admin route now</h1>
    </>
  );
}
