import { Link } from "react-router-dom";
import Login from "../../user/customer/Login";
import AuthPage from "../../component/page/AuthPage";
import RegisterGoogle from "../../user/customer/RegisterGoogle";

const LoginPage = () => {
  return (
    <div>
      <AuthPage/>
      <Login />
      <Link to="/register">
          <button>회원가입</button>
      </Link>
      <RegisterGoogle/>
    </div>
  );
};

export default LoginPage;
