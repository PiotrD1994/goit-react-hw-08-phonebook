import { LoginForm } from '../components/LoginForm/LoginForm.jsx';

export default function Login() {
  const centerHeadingStyle = {
    textAlign: 'center',
  };

  return (
    <>
      <h1 style={centerHeadingStyle}>Login</h1>
      <LoginForm /> 
    </>
  );
}