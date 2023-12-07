import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {  faCheck  } from "@fortawesome/free-solid-svg-icons";




import DefaultLayout from './DefaultLayout/DefaultLayout'
import styles from './RegisterPage.module.scss'
import Devices from '../../../assets/images/Devices.png'
import Checkmark from '../../../assets/images/Checkmark.png'
const cx = classNames.bind(styles)
function RegisterPage() {
    const { step } = useParams()
    const navigate = useNavigate()

    const [user, setUser] = useState({})
    const handleChaneUser = (e)=>{
        setUser((prevUser=>({...prevUser,[e.target.name]:e.target.value}))
            )
    }
    console.log(user);
    return ( <>
            <DefaultLayout>
                {step || <div className={cx('wrapper')}>
                    <img src={Devices} alt='step img' className={cx('step-img')}/>
                    <div className={cx('header')}>
                        <span className={cx('step-indicator')}>Bước 1/3</span>
                        <h1 className={cx('step-title')}>Hoàn thành việc cài đặt tài khoản của bạn</h1>
                    </div>
                    <div className={cx('regContext')}>
                        Netflix được cá nhân hóa cho riêng bạn. Tạo mật khẩu để xem Netflix trên bất kỳ thiết bị nào, vào bất cứ lúc nào.
                    </div>
                    <button className={cx('btn')} onClick={()=>navigate('/register/regform')}>
                        Tiếp theo
                    </button>
                </div>}
                {(step ==='regform') && <div className={cx('wrapper', 'reg-form')}>
                    <div className={cx('header', 'reg-form')}>
                        <span className={cx('step-indicator')}>Bước 1/3</span>
                        <h1 className={cx('step-title')}>Tạo mật khẩu để bắt đầu tư cách thành viên của bạn</h1>
                    </div>
                    <div className={cx('regContext')}>
                        Netflix được cá nhân hóa cho riêng bạn. Tạo mật khẩu để xem Netflix trên bất kỳ thiết bị nào, vào bất cứ lúc nào.
                    </div>
                    <form className={cx('form')}>
                        <div className={cx('form-register')}>
                            <input type='text' name='email' value={user.name} onChange={handleChaneUser}/>
                            <label className={user.email ? cx('active'):''} >Email</label>
                        </div>
                        <div className={cx('form-register')}>
                            <input name='password' type='password' value={user.password} onChange={handleChaneUser}/>
                            <label className={user.password ? cx('active'):''}>Thêm mật khẩu</label>
                        </div>
                        <div>
                            <input type='checkbox' className={cx('checkbox')}/>
                                Vui lòng không gửi các ưu đãi đặc biệt của Netflix qua email cho tôi
                        </div>
                    </form>
                    <button className={cx('btn')} onClick={()=>navigate('/register/step2')}>
                        Tiếp theo
                    </button>
                </div> }
                {(step==='step2') && <div className={cx('wrapper')}>
                    <img src={Checkmark} alt='step img' className={cx('step-img','check')}/>
                    <div className={cx('header')}>
                        <span className={cx('step-indicator')}>Bước 2/3</span>
                        <h1 className={cx('step-title')}>Chọn gói dịch vụ của bạn.</h1>
                    </div>
                    <div className={cx('regContext')}>
                        <ul className={cx('checkmark-group')}>
                            <li>
                                <FontAwesomeIcon icon={faCheck} className={cx('icon-check')}/>
                                <span>Không yêu cầu cam kết, hủy bất kỳ lúc nào.</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheck} className={cx('icon-check')}/>
                                <span>Mọi thứ trên Netflix chỉ với mức giá thấp.</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheck} className={cx('icon-check')}/>
                               <span> Không quảng cáo, không phụ phí. Luôn luôn như vậy.</span>
                            </li>
                        </ul>
                    </div>
                    <button className={cx('btn')} onClick={()=>navigate('/register/regform')}>
                        Tiếp theo
                    </button>
                </div>}
            </DefaultLayout>
    </> );
}

export default RegisterPage;