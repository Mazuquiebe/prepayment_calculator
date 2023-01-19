import React, { ReactNode, }  from "react"


interface IPropsChildren{
    children: ReactNode;
}


const Form = ({children}:IPropsChildren) => {
    return (
        <form >
            {children}
        </form>
    )
}

export default Form