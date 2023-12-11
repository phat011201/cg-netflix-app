import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {  faCheck, faLaptop, faMobileScreenButton, faTabletScreenButton, faTv  } from "@fortawesome/free-solid-svg-icons";




import DefaultLayout from './DefaultLayout/DefaultLayout'
import styles from './Register.module.scss'
import Devices from '../../../assets/images/Devices.png'
import Checkmark from '../../../assets/images/Checkmark.png'
import Lock from '../../../assets/images/Lock.png'



const cx = classNames.bind(styles)
function Register() {
    const { step } = useParams()
    const navigate = useNavigate()

    const [user, setUser] = useState({})
    const handleChaneUser = (e)=>{
        setUser((prevUser=>({...prevUser,[e.target.name]:e.target.value}))
            )
    }
    return ( <>
            <DefaultLayout>
                {!step && <div className={cx('wrapper')}>
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
                    <img src={Checkmark} alt='step img' className={cx('step-img','small')}/>
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
                    <button className={cx('btn')} onClick={()=>navigate('/register/planform')}>
                        Tiếp theo
                    </button>
                </div>}
                {(step==='planform') && <div className={cx('plan-form-container')}>
                    <div className={cx('header-plan-form')}>
                        <span className={cx('step-indicator')}>Bước 2/3</span>
                        <h1 className={cx('step-title')}>Chọn gói dịch vụ phù hợp với bạn</h1>
                    </div>
                    <div className={cx('regContext')}>
                        <ul className={cx('checkmark-group')}>
                            <li>
                                <FontAwesomeIcon icon={faCheck} className={cx('icon-check')}/>
                                <span>Xem mọi nội dung bạn muốn. Không có quảng cáo.</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheck} className={cx('icon-check')}/>
                                <span>Đề xuất dành riêng cho bạn.</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheck} className={cx('icon-check')}/>
                               <span>Thay đổi hoặc hủy gói dịch vụ của bạn bất cứ khi nào.</span>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('plandGrid')}>
                        <div className={cx('plandGrid-header')}>
                            <div className={cx('plandGrid-selector')}>
                                <label className={cx('plandGrid-selector-choice')} for='plandGrid-choice0'>
                                    <input type='radio' name='plandChoice' className={cx('plandGrid-selector-input')} id='plandGrid-choice0'/>
                                    <span className={cx('plandGrid-selector-label')}>
                                        Di động
                                    </span>
                                </label>
                                <label className={cx('plandGrid-selector-choice')} for='plandGrid-choice0'>
                                    <input type='radio' name='plandChoice' className={cx('plandGrid-selector-input')} id='plandGrid-choice0'/>
                                    <span className={cx('plandGrid-selector-label')}>
                                        Di động
                                    </span>
                                </label>
                                <label className={cx('plandGrid-selector-choice')} for='plandGrid-choice0'>
                                    <input type='radio' name='plandChoice' className={cx('plandGrid-selector-input')} id='plandGrid-choice0'/>
                                    <span className={cx('plandGrid-selector-label')}>
                                        Di động
                                    </span>
                                </label>
                                <label className={cx('plandGrid-selector-choice')} for='plandGrid-choice0'>
                                    <input type='radio' name='plandChoice' className={cx('plandGrid-selector-input')} id='plandGrid-choice0'/>
                                    <span className={cx('plandGrid-selector-label')}>
                                        Di động
                                    </span>
                                </label>
                                
                            </div>
                        </div>
                        <table className={cx('plandGrid-feature-table')}>
                            <tbody className={cx('plandGrid-feature-table-body')}>
                                <tr className={cx('plandGrid-feature-table-row')}>
                                    <th className={cx('plandGrid-featureCell')}>Giá hàng tháng</th>
                                    <td className={cx('plandGrid-cell' )}>70.000 đ</td>
                                    <td className={cx('plandGrid-cell' )}>108.000 ₫</td>
                                    <td className={cx('plandGrid-cell' )}>220.000 ₫</td>
                                    <td className={cx('plandGrid-cell' )}>260.000 ₫</td>
                                </tr>
                                <tr className={cx('plandGrid-feature-table-row')}>
                                    <th className={cx('plandGrid-featureCell')}>Chất lưọng video</th>
                                    <td className={cx('plandGrid-cell' )}>70.000 đ</td>
                                    <td className={cx('plandGrid-cell' )}>108.000 ₫</td>
                                    <td className={cx('plandGrid-cell' )}>220.000 ₫</td>
                                    <td className={cx('plandGrid-cell' )}>260.000 ₫</td>
                                </tr>
                                <tr className={cx('plandGrid-feature-table-row')}>
                                    <th className={cx('plandGrid-featureCell')}>Độ phân giải</th>
                                    <td className={cx('plandGrid-cell' )}>70.000 đ</td>
                                    <td className={cx('plandGrid-cell' )}>108.000 ₫</td>
                                    <td className={cx('plandGrid-cell' )}>220.000 ₫</td>
                                    <td className={cx('plandGrid-cell' )}>260.000 ₫</td>
                                </tr>
                                <tr className={cx('plandGrid-feature-table-row')}>
                                    <th className={cx('plandGrid-featureCell')}>Các thiết bị có thể dùng xem</th>
                                    <td className={cx('plandGrid-cell' )}>
                                        <div>
                                                <FontAwesomeIcon icon={faMobileScreenButton} />
                                            <div>
                                                Điện thoại
                                            </div>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faTabletScreenButton} />
                                            <div>
                                                Máy tính bảng
                                            </div>
                                        </div>

                                    </td>
                                    <td className={cx('plandGrid-cell' )}>
                                        <div>
                                                <FontAwesomeIcon icon={faMobileScreenButton} />
                                            <div>
                                                Điện thoại
                                            </div>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faTabletScreenButton} />
                                            <div>
                                                Máy tính bảng
                                            </div>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faLaptop} />
                                            <div>
                                                Máy tính
                                            </div>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faTv} />
                                            <div>
                                                TV
                                            </div>
                                        </div>
                                    </td>
                                    <td className={cx('plandGrid-cell' )}>
                                        <div>
                                                <FontAwesomeIcon icon={faMobileScreenButton} />
                                            <div>
                                                Điện thoại
                                            </div>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faTabletScreenButton} />
                                            <div>
                                                Máy tính bảng
                                            </div>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faLaptop} />
                                            <div>
                                                Máy tính
                                            </div>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faTv} />
                                            <div>
                                                TV
                                            </div>
                                        </div>
                                    </td>
                                    <td className={cx('plandGrid-cell' )}>
                                        <div>
                                                <FontAwesomeIcon icon={faMobileScreenButton} />
                                            <div>
                                                Điện thoại
                                            </div>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faTabletScreenButton} />
                                            <div>
                                                Máy tính bảng
                                            </div>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faLaptop} />
                                            <div>
                                                Máy tính
                                            </div>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faTv} />
                                            <div>
                                                TV
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <small >
                                <span>
                                    Việc bạn có thể xem ở chế độ HD (720p), Full HD (1080p), Ultra HD (4K) và HDR hay không phụ thuộc vào dịch vụ internet và khả năng của thiết bị. Không phải tất cả nội dung đều có sẵn ở mọi độ phân giải. Xem <span><a href='/'>Điều khoản sử dụng</a></span> của chúng tôi để biết thêm chi tiết.
                                </span>
                                <div></div>
                                <span>
                                    Chỉ những người sống cùng bạn mới có thể dùng tài khoản của bạn. Xem trên 4 thiết bị khác nhau cùng lúc với gói Cao cấp, 2 với gói Tiêu chuẩn và 1 với gói Cơ bản và Di động.
                                </span>
                            </small>
                        </div>
                    </div>
                    <button className={cx('btn')} onClick={()=>navigate('/register/paymentPicker')}>
                        Tiếp theo
                    </button>
                </div>}
                {(step ==='paymentPicker') && <div className={cx('wrapper', 'reg-form')}>
                    <img src={Lock} alt='step img' className={cx('step-img','small')}/>
                    <div className={cx('header', 'reg-form')}>
                        <span className={cx('step-indicator')}>Bước 3/3</span>
                        <h1 className={cx('step-title')}>Chọn cách thanh toán</h1>
                    </div>
                    <div className={cx('regContext')}>
                        Quá trình thanh toán của bạn được mã hóa và bạn có thể thay đổi cách thanh toán bất kỳ lúc nào.
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
            </DefaultLayout>
    </> );
}

export default Register;