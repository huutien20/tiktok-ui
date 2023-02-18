import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1653272836951046~c5_100x100.jpeg?x-expires=1676905200&x-signature=cPdxlpsD6rCb3j240P7Fsvb7WVE%3D"
                alt="Tien"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Huu Tien</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>huutien</span>
            </div>
        </div>
    );
}

export default AccountItem;
