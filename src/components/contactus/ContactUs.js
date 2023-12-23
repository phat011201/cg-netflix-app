import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import { miniLogo } from "../../assets/images";
import styles from './ContactUs.module.scss'

const cx = classNames.bind(styles)


function ContactUs() {

    const navigate = useNavigate()

    return ( <>
        <div className={cx('wrapper')}>
            <div className={cx('header-wrapper')}>
                <div className={cx('header')}>
                    <div className={cx('left-header')}>
                        <div className={cx('logo')}>{miniLogo}</div>
                        <div className={cx('help-center')}>
                            <a href="/">Trung tâm trợ giúp</a>
                        </div>
                    </div>
                    <div className={cx('right-header')}>
                        <button className={cx('btn','btn-text')}>
                            Tham gia netflix
                        </button>
                        <button className={cx('btn','btn-primary')}>
                            Đăng nhập
                        </button>
                    </div>
                </div>
            </div>
            <div className={cx('content')}>
                <h1>
                    Liên hệ với chúng tôi
                </h1>
            </div>
            <div className={cx('footer')}>
    
            </div>
        </div>
    </> );
}

export default ContactUs;