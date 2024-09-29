import { Form } from 'react-router-dom';

export default function LoginScreen() {
  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };
  return (
    <>
      <h1>Im in login screen</h1>
      <div>
        <div className="relative mt-2 rounded-md shadow-sm">
          <Form method="post">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="johndoe@email.com"
            />
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="*********"
            />
            <button type="submit">Login</button>
          </Form>

          <a
            href="https://siddiq-payment-gzolqgctea-et.a.run.app/institution/MX3EZUlP7OXQoU3Yn3eU"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={buttonStyle}>Go to Institution</button>
          </a>
        </div>
      </div>
    </>
  );
}
