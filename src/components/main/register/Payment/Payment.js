import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";



import Lock from '../../../../assets/images/Lock.png'
import AMEX from '../../../../assets/images/AMEX.png'
import MASTERCARD from '../../../../assets/images/MASTERCARD.png'
import VISA from '../../../../assets/images/VISA.png'
import MOMOPAY from '../../../../assets/images/MOMOPAY.png'



import styles from './Payment.module.scss'
const cx = classNames.bind(styles)


function Payment() {
    const navigate =useNavigate()



    return (
        <>
        <div className={cx('wrapper')}>
            <img src={Lock} alt="lock" className={cx('step-img')}/>
            <div className={cx('header')}>
                <span className={cx('step-indicator')}>Bước 3/3</span>
                <h1 className={cx('step-title')}>Chọn cách thanh toán</h1>
            </div>
            <div className={cx('regContext-first')}>
                Quá trình thanh toán của bạn được mã hóa và bạn có thể thay đổi cách thanh toán bất kỳ lúc nào.
            </div>
            <div className={cx('regContext-secon')}>
                <div className={cx('context-emphasized')}>
                    An toàn để an tâm.
                </div>
                <div className={cx('context-emphasized')}>
                    Hủy trực tuyến dễ dàng.
                </div>
            </div>
            <div className={cx('secure-server-badge')}>
                <span>
                    Mã hóa đầu cuối
                </span>
                <span><FontAwesomeIcon icon={faLock} /></span>
            </div>
            <div className={cx('option-payment')}>
                <button className={cx('option')} onClick={()=>navigate('/register/creditoption')}>
                    <div className={cx('option-name-logo')}>
                        <span className={cx('option-name')}>
                            Thẻ ghi nợ hoặc thẻ tín dụng
                        </span>
                        <span className={cx('option-logo')}>
                            <img alt="logo" src={VISA}/>
                            <img alt="logo" src={MASTERCARD}/>
                            <img alt="logo" src={AMEX}/>
                        </span>
                    </div>
                    <span className={cx('arrow')}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                </button>
                <button className={cx('option')} onClick={()=>navigate('/register/mobileWalletOption')}>
                    <div className={cx('option-name-logo')}>
                        <span className={cx('option-name')}>
                            Ví điện tử
                        </span>
                        <span className={cx('option-logo')}>
                            <img alt="logo" src={MOMOPAY}/>
                            
                        </span>
                    </div>
                    <span className={cx('arrow')}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                </button>
            </div>
        </div>
        
        </>
     );
}

export default Payment;