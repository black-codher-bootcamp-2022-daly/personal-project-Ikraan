import { useForm } from 'react-hook-form';

function Signup() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      // Save user data to local storage
      localStorage.setItem('GameData', JSON.stringify(result));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        ref={register({ required: true })}
      />
      {errors.name && <span>This field is required</span>}

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        ref={register({ required: true })}
      />
      {errors.email && <span>This field is required</span>}

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        ref={register({ required: true })}
      />
      {errors.password && <span>This field is required</span>}

      <button type="submit">Sign up</button>
    </form>
  );
}
export default Signup;