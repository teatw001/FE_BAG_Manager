import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../service/login";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState(""); // Login form state
  const [loginPassword, setLoginPassword] = useState("");
  // const notify = () => toast("Wow so easy!");
  const handleLogin = async () => {
    try {
      const response = await loginUser({
        userName: loginEmail,
        password: loginPassword,
      });

      // Hiển thị thông báo khi đăng nhập thành công
      if ((response as any)?.data) {
        message.success("Đăng nhập thành công!");
        // console.log((response as any)?.data);
        localStorage.setItem("user", JSON.stringify((response as any)?.data));
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        toast.error(`Sai tên tài khoản hoặc mật khẩu`);
      }
    } catch (error) {
      // Hiển thị thông báo khi đăng nhập thất bại
      toast.error(`Đăng nhập thất bại: ${error}`);
    }
  };

  return (
    <>
      <section className="flex items-center font-family-custom leading-tight bg-[#EBEBEB] justify-center h-svh max-h-svh">
        <Form
          name="normal_login"
          className="login-form bg-white space-y-10 lg:w-[40%] items-center rounded-xl px-6 py-10  mx-2 lg:py-20 lg:px-[120px]  "
          initialValues={{ remember: true }}
          onFinish={handleLogin}
        >
          <h1 className="text-[#555] font-light  text-[30px]">ACCOUNT LOGIN</h1>
          <Form.Item
            label="EMAIL"
            name="userName"
            className="lg:w-full"
            labelCol={{ span: 24 }}
            rules={[
              { required: true, message: "Vui lòng không bỏ trống Email" },
            ]}
          >
            <Input
              className="py-3"
              prefix={
                <UserOutlined className="site-form-item-icon lg:w-full" />
              }
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            label="PASSWORD"
            name="password"
            className="lg:w-full"
            labelCol={{ span: 24 }}
            rules={[
              { required: true, message: "Vui lòng không bỏ trống Mật khẩu" },
            ]}
          >
            <Input.Password
              className="py-3"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              minLength={6}
              prefix={
                <LockOutlined className="site-form-item-icon lg:w-full" />
              }
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item className="">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Link className="login-form-forgot text-[#555]" to={""}>
              Forgot password
            </Link>
          </Form.Item>

          <Form.Item>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="login-form-button  rounded-3xl my-2  bg-black hover:bg-[#EAE8E4] text-[#FFFFFF] lg:px-16 px-10 font-semibold text-center py-3 text-[16px]"
              >
                Login
              </button>
              <span>Or</span>{" "}
              <a href="" className="text-[#555]">
                register now!
              </a>
            </div>
          </Form.Item>
        </Form>
        <ToastContainer />;
      </section>
    </>
  );
};

export default Login;
