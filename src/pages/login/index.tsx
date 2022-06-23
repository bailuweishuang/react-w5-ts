import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import './index.less';
const number: number = 1.77;

const LoginApp = () => {
  let navigate = useNavigate();
  const hight: number = document.body.clientHeight;
  const width: number = Math.round(hight * number);
  const [videoWidth, setVideoWidth] = useState<number>(width);
  const [videoHight, setVideoHight] = useState<number>(hight);
  useEffect(() => {
    function setVideoWAndH() {
      const hight: number = document.body.clientHeight;
      const width: number = Math.round(hight * number);
      setVideoWidth(width);
      setVideoHight(hight);
    }
    window.addEventListener('resize', setVideoWAndH);
    return () => {
      window.removeEventListener('resize', setVideoWAndH);
    };
  }, []);
  const onFinish = (values: any) => {
    console.log('Success:', values);
    window.localStorage.setItem('loggedIn', 'yes');
    navigate('/home');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="login-content">
      <div className="video-content">
        <video
          width={videoWidth}
          height={videoHight}
          autoPlay
          muted
          loop
          // controls
          src="https://design.yonyoucloud.com/static/ucf/iuap-apcom-workbench.yonbiplogin-fe/20220412-162150/static/yonbip-login.mp4"
        ></video>
      </div>
      <div className="right-content">
        <div className="right-top">
          <div className="r-t-left">
            <span>ROOKS-TS</span>
            <span>Born to create</span>
          </div>
          <div>选择语言</div>
        </div>
        <div className="right-form">
          <div className="right-form-content">
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item label="账号" name="username" rules={[{ required: true, message: '请输入账号！' }]}>
                <Input />
              </Form.Item>

              <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码！' }]}>
                <Input.Password />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>记住我</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="right-footer">
          <div className="worry">Worry about the world's worry and worry</div>
          <div className="enjoy">Enjoy the joy of the world</div>
          <div className="yueyang">《Yueyang tower to remember》--fanzhongyan</div>
        </div>
      </div>
    </div>
  );
};

export default LoginApp;
