export const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up')
  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
        </div>
      </form>
    </div>
  )
}