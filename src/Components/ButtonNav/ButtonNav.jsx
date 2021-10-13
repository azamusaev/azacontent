import style from './ButtonNav.module.css'; 

export const ButtonNav = (props) => { 
    return (
        <div className={style.container}> 
            <button className={style.btn}><img className={style.img} src={props.icon} alt="icons" /> {props.name}</button>
        </div>
    )
}

