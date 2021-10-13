import { useSelector } from 'react-redux';
import './ModalSetting.css'; 
import { useDispatch } from 'react-redux';
import closeIcon from '../../Assets/icons/Close.svg';
import turnOff from '../../Assets/icons/turnoff.svg';
import turnOn from '../../Assets/icons/turnon.svg'; 

import {useState } from 'react';





export const ModalSetting = () => { 
       const modalStatus = useSelector(state=>state.modalStatus);
       const settingsValue = useSelector(state=>state.settingsModal);
       const timesValue = useSelector(state=>state.times);
       
       const [pomodoraInput, setPomodoraInput] = useState(25); 
        const [shortBreak , setShortBreak] = useState(5); 
        const [longBreak , setLongBreak] = useState(10);
        const [autoStartPomo, setAutoStartPomo] = useState(true); 
        const [autostatrtBreaks, setAutoStartBreaks] = useState(false); 
        const [longBreakInterval, setLongBreakInterval] = useState(4);
       console.log(settingsValue); 
       console.log(timesValue); 
       
       const dispatch = useDispatch(); 

       const modalStatusChanger2 = () => { 
            dispatch({type:"MODAL_SETTING", modalStatus:true }); 
        }; 

    const resetSettingsValues = () => {
        
        setPomodoraInput(timesValue.pomofocus)
        setShortBreak(timesValue.shortBreak)
        setLongBreak(timesValue.longBreak)
        setLongBreakInterval(settingsValue.longBreakInterval)

    }

    const disableModal = () => {
        resetSettingsValues()
        dispatch({type:"MODAL_SETTING", modalStatus:true}); 
    }; 

    //получеам данные из инпута 
    
    //функция которая получает значение на usestate
    const getPomodoraValue = (e) => { 
        setPomodoraInput(e.target.value); 
    }; 
    const getShortBreakValue = (e) => { 
        setShortBreak(e.target.value); 
    }; 
    const getLongBreakValue = (e) => { 
        setLongBreak(e.target.value); 
    }; 
    const changerAutoStartPomoValue = () => { 
        if(autoStartPomo) {
            setAutoStartPomo(false); 
        }
        else if (!autoStartPomo) {
            setAutoStartPomo(true); 
        }
    }; 
    const changerAutoStartBreaksValue = () => {
        if(autostatrtBreaks){
            setAutoStartBreaks(false); 
        } 
        else if (!autostatrtBreaks) { 
            setAutoStartBreaks(true); 
        }
    }
    const getLongBreakIntervalValue = (e) => { 
        setLongBreakInterval(e.target.value); 
    }; 
    
    

    //диспатчим значение инпутов при клике на стейт
    
    const stateValueChanger = () => {
        dispatch({type:"CHANGE_SOME_SETTING",
                  settingsModal:{longBreakInterval:longBreakInterval, 
                                 autoStartPomodoros:autoStartPomo,
                                 autoStartBreaks: autostatrtBreaks, },
                 });  
        dispatch({type:"CHANGE_TIMES", 
                  times:{pomofocus: pomodoraInput, 
                    shortBreak: shortBreak, 
                    longBreak:longBreak,}  });
        
        //функция отключает модалку            
        disableModal();
    };


       console.log(modalStatus); 
    return (
        <div onClick={modalStatusChanger2} className= {modalStatus ? 'modal' : 'modal active' }>
            <div onClick={e=>e.stopPropagation()} className={modalStatus ? 'modal_content' : 'modal_content active'}>
                <div className="desc">
                    <div className="bigtext">TIMER SETTING</div>
                    <div><img onClick={disableModal} src={closeIcon} alt="icon" /></div>
                </div>
                <hr />
                <p className="minitext">Timer (minutes)</p>
                <div className="inputsTimer">
                    <div>
                        <div className="minitext3" >Pomodoro</div>
                        <input className="miniinput" onChange={getPomodoraValue} type="number" value={pomodoraInput} />
                    </div>
                    <div>
                        <div className="minitext2">Short Breack</div>
                        <input className="miniinput2" onChange={getShortBreakValue} type="number" value={shortBreak} />
                    </div>
                    <div>
                        <div className="minitext2">Long Breack</div>
                        <input className="miniinput2" onChange={getLongBreakValue} type="number" value={longBreak} />
                    </div>
                </div>
                <hr />
                    <div className="threesettings">
                        <div className="changerbtn">
                            <p className="starttext">Auto start Breaks?</p>
                            <div className="turnbtn">
                                <img onClick={changerAutoStartPomoValue} src={autoStartPomo ? turnOn : turnOff} alt="icon" />
                                </div>
                            </div>
                        <hr />
                        <div className="changerbtn">
                            <p className="starttext" >Auto start Pomodoros?</p>
                            <div className="turnbtn">
                                <img onClick={changerAutoStartBreaksValue} src={autostatrtBreaks ? turnOn : turnOff} alt="icon" />
                            </div>
                        </div>
                        <hr />
                        <div className="changerbtn">
                            <p className="starttext">Long Break interval</p>
                            <input className="miniinput5" onChange={getLongBreakIntervalValue} type="number" value={longBreakInterval}/>
                        </div>
                        <button className="btnok" onClick={stateValueChanger}>OK</button>
                        </div>
                </div>
         </div>
    )
}