import style from './button.module.css'

export default function Button({ children, fullWidth, ...props }){
    return(
       <button className={`${style.button} ${fullWidth && style.fullwidth}`} {...props}>{children}</button>
    )
}