import { ButtonNav } from '../ButtonNav/ButtonNav'
import s from './Nav.module.css'
import Settings from '../../Assets/icons/Settings.svg'; 
import Report from '../../Assets/icons/Report.svg'; 
import { useDispatch } from 'react-redux';

export const Nav = () => { 

    const dispatch = useDispatch(); 
    const modalStatusChanger = () => { 
        dispatch({type:"MODAL_SETTING", modalStatus:false }); 
    }; 

    return(
        <div className={s.container}>
            <div className={s.box}>
            <div className={s.logotext}>Pomofocus</div>
            <div className={s.btn}>
                 <ButtonNav name = "Report" icon= {Report}/>
                 <button onClick={modalStatusChanger} className={s.btn3}><img src={Settings} alt="icons" /> Settings</button>
            </div>
            </div>
            <hr className={s.hr} />
        </div>
    )
}