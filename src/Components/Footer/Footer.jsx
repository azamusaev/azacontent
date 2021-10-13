import s from './Footer.module.css'; 

export const Footer = () => { 
    return(
        <div className={s.container}>
            <div className={s.box}>
                <hr  className={s.hr}/>
            <div className={s.parent}>
                <div>HOME</div>
                <div>PRIVACY</div>
                <div>CONTACT</div>
                <div>SIMPLE PAGE</div>
            </div>
            <div className={s.sociallink}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={s.author}>Made with 3 by Aza</div>
            <div className={s.copyright}>©Pomofocus 2021. All Rights Reserved.</div>
            </div>
        </div>
    )
}