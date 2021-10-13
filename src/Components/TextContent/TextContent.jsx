import s from './TextContent.module.css'; 

export const TextContent = () => { 
    return(
        <div className={s.container}>
            <div className={s.box}>
            <h1 className={s.h1text}>An online Pomodoro Timer to boost your productivity</h1>
            <h3 className={s.h3text}>What is Pomofocus?</h3>
            <hr className={s.miniHr} />
            <p>Pomofocus is a customizable pomodoro timer that works on desktop & mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by Pomodoro Technique which is a time management method developed by Francesco Cirillo.</p>
            <h3 className={s.h3text}>What is Pomodoro Technique?</h3>
            <hr className={s.miniHr} />
            <p>The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student. - Wikipedia</p>
            <h3 className={s.h3text}>How to use the Pomodoro Timer?</h3>
            <hr className={s.miniHr}/>
            <ol>
                <li> <span className={s.blacktext}> Add tasks to</span> work on today</li>
                <li> <span className={s.blacktext}> Set estimate pomodoros</span> (1 = 25min of work) for each tasks</li>
                <li> <span className={s.blacktext}> Select a task</span> to work on</li>
                <li> <span className={s.blacktext}> Start timer</span> and focus on the task for 25 minutes</li>
                <li> <span className={s.blacktext}> Take a break</span> for 5 minutes when the alarm ring</li>
                <li> <span className={s.blacktext}> Iterate 3-5 until</span> you finish the tasks</li>
            </ol>
            <h3 className={s.h3text}>Iterate 3-5 until you finish the tasks</h3>
            <hr className={s.miniHr} />
            <ul>
                <li> <span className={s.blacktext}> Responsive design</span> that works with desktop and mobile</li>
                <li> <span className={s.blacktext}> Color transition</span> to switch moods time and rest time</li>
                <li> <span className={s.blacktext}> Audio notification</span> at the end of a timer period</li>
                <li> <span className={s.blacktext}> Customizable timer</span> intervals to suit your preference</li>
            </ul>
            <h3 className={s.h3text}>Download App</h3>
            <hr className={s.miniHr} />
            <ul>
                <li className={s.text}><span className={s.redtext}>For macOS</span> (zip file)</li>
                <li className={s.text}><span className={s.redtext}>For Windows</span> (exe file)</li>
            </ul>
            </div>
      </div>
    )
}