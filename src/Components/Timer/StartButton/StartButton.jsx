import next from '../../../Assets/icons/Next.svg'; 
import './StartButton.css'; 



export const StartButton = ({onClick, theme, title, status, reset, nextBtnFunc}) => { 
    return(
        <>
         <div className="startdiv">
            <button onClick={onClick}  className={`startbutton ${theme} `}>{title}</button> 
            {status === "stop" && <img src={next} onClick={nextBtnFunc} className="iconnext" alt="icon" />}
        </div>
    
       </>
    )
}