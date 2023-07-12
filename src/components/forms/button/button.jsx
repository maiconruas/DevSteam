import style from './button.module.css'

export default function Button({ children, fullWidth }){
    return(
       <button className={`${style.button} ${fullWidth && style.fullwidth}`}>{children}</button>
    )
}