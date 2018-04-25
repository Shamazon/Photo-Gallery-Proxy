import React from 'react';
import style from './dist/style/style.css'

var UserInfo = (props) => {
    var gender = Math.random() > 0.5 ? "men" : "women";
    var imgNumber = Math.floor(Math.random() * 50)
    return (
        <div className={style.userSection}>
                <img className={style.avatar} src={`https://randomuser.me/api/portraits/thumb/${gender}/${imgNumber}.jpg`} />
                <span className={style.userName}>Amazon Customer</span>
        </div>
    )
}

export default UserInfo;