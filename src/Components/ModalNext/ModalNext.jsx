import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './ModalNext.css'; 

export const ModalNext = () => { 


    const dispatch = useDispatch();  
    const nextModalStatus = useSelector(state=>state.nextModalStatus);
    const btnOkStatus = useSelector(state=>state.nextModalOkButtonStatus); 
    console.log(btnOkStatus);

    const inactiveNextModal = () => { 
        dispatch({type:"NEXTMODAL_SETTING", nextModalStatus:"inactivetime"}); 
    }; 

    const okBtnChanger = () => { 
        dispatch({type:"NEXT_OK_BTN_STATUS", nextModalOkButtonStatus:true});
        dispatch({type:"NEXTMODAL_SETTING", nextModalStatus:"inactive"}); 


    }
    
    return (
        

        <div className= {nextModalStatus === "inactive" ?'nextmodal' : nextModalStatus === "active" ? 'nextmodal active': "nextmodal"} >
            <div className="modalnext_content">
                <p className="nextmodaltext1">Подтвердите действие на странице pomofocuse.io</p>
                <p className="nextmodaltext2">The timer is still running, are you sure you want to switch?</p>
                <div className="nextmodalbtns">
                    <button onClick={okBtnChanger} className="nextbtnok">ОК</button>
                    <button onClick={inactiveNextModal} className="nextbtn2">Отмена</button>
                </div>
            </div>
        </div>
    )
}