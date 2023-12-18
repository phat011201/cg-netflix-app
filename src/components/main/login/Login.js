import classNames from "classnames/bind";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { logo } from '../../../assets/images';
import styles from './Login.module.scss'

const cx = classNames.bind(styles)

function Login() {
    const navigate = useNavigate()

    const LIST_LINK = [
        {to:'/',
        title:'Câu hỏi thường gặp'},
        {to:'/',
        title:'Trung tâm trợ giúp'},
        {to:'/',
        title:'Cửa hàng Netflix'},
        {to:'/',
        title:'Điều khoản sử dụng'},
        {to:'/',
        title:'Quyền riêng tư'},
        {to:'/',
        title:'Tùy chọn cookie'},
        {to:'/',
        title:'Thông tin doanh nghiệp'},
    ]
    return ( <>
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Link>
                    {logo}
                </Link>
            </div>
            <div className={cx('login-container-wrapper')}>
                <div className={cx('login-container')}>
                    <div className={cx('login-form-container')}>
                        <h1 className={cx('login-title')}>
                            Đăng nhập
                        </h1>
                        <form className={cx('login-form')}>
                            <div className={cx('input-container')}>
                                <input type="text" className={cx('input')}/>
                                <label className={cx('label')}>
                                     Email hoặc số điện thoại
                                </label>
                            </div>
                            <div className={cx('input-container')}>
                                <input type="password" name="password" className={cx('input')}/>
                                <label className={cx('label')}>
                                     Mật khẩu
                                </label>
                            </div>
                        </form>
                        <button className={cx('btn')} onClick={()=>navigate('/browse')}>
                        Đăng nhập
                        </button>
                        <div className={cx('login-form-help')}>
                            <div>
                                <input type="checkbox" />
                                <span>Ghi nhớ tôi</span>
                            </div>
                            <div>
                                <a href="/">Bạn cần trợ giúp?</a>
                            </div>
                        </div>
                    </div>
                    <div className={cx('login-signup-now')}>
                        <span>Bạn mới tham gia Netflix <Link to='/register' className={cx('link')}>Đăng kí ngay</Link></span>
                    </div>
                </div>
            </div>
            <div className={cx('wrapper-footer')}>
                <div className={cx('footer')}>
                    <p className={cx('footer-top')}>
                        <a href='/'>Bạn có câu hỏi? Liên hệ với chúng tôi.</a>
                    </p>
                    <ul className={cx('footer-links')}>
                        {LIST_LINK.map((item,index)=>(<li key={index} className={cx('footer-link-item')}>
                            <a href={item.to} className={cx('footer-link')}>{item.title}</a>
                        </li>))}
                    </ul>
                    <div className={cx('language-selection-container')}>
                        <select   className={cx('langue-picked')}>
                            <option value='Việt Nam'>
                                Việt Nam
                            </option>
                            <option value='English'>
                                English
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        
    </> );
}

export default Login;