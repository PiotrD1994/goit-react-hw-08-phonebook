import { RegisterForm } from '../components/RegisterForm/RegisterForm.jsx';

export default function Register() {
  const centerHeadingStyle = {
    textAlign: 'center',
  };

  return (
    <>
      <h2 style={centerHeadingStyle}>Registration</h2>
      <RegisterForm />
    </>
  );
}