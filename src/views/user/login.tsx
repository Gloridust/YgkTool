import React from 'react'
import { snackbar } from 'mdui'
import Axios from '../../utils/axios';
import { MD5 } from 'crypto-js';
import { getUserInfo, setUserInfo } from '../../utils/Services/UserInfo'
import SendCode from '../../utils/Services/SendCode'
import { Input } from 'mdui-in-react'

type ForgetState = any;

class Forget extends React.Component<{}, ForgetState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            email: "",
            password: null,
            xcode: null
        }
    }
    reset() {
        const { email, password, xcode } = this.state
        window.loadShow();
        Axios({
            method: 'post',
            url: '/ygktool/user/reset',
            withCredentials: false,
            data: {
                username: email,
                newPwd: password,
                xcode: xcode
            }
        }).then(response => {
            var json = JSON.parse(response.request.response);
            switch (json.code) {
                case 500:
                    snackbar({ message: '服务器错误，请联系管理员' });
                    break;
                case 2:
                    snackbar({ message: '验证码错误' });
                    break;
                case 666:
                    snackbar({ message: '修改成功，即将跳转...' });
                    setTimeout(_ => window.location.href = '/user/login', 2000)
                    break;
            }
        }).then(_ => {
            window.loadHide()
        })
    }
    render() {
        const { password, email, xcode } = this.state
        
        return <>
            
            <Input
                onValueChange={newText => {
                    this.setState({ email: newText })
                }}
                header="邮箱"
                icon="email"
                type="email"
                value={email}
            />
            <Input
                onValueChange={newText => {
                    this.setState({ password: newText })
                }}
                header="新的密码"
                icon="lock"
                type="password"
                value={password}
            />
            
            <div className={`${email === "" && "hidden"}`}>
                
                <SendCode
                    onInput={(code: any) => {
                        this.setState({ xcode: code })
                    }}
                    xcode={xcode}
                    email={email}
                />
            </div>
            
            <button
                onClick={() => {
                    this.reset()
                }}
                disabled={!xcode || !password}
                className="loadBtn mdui-ripple mdui-color-theme mdui-fab mdui-fab-fixed">
                
                <i className="mdui-icon material-icons">&#xe5ca;</i>
            </button>
        </>;
    }
}

export default Forget
