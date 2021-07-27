import React, { useRef } from 'react'

interface TodoFormProps {
    onAdd(title: String) : void
}
export const TodoForm: React.FunctionComponent<TodoFormProps> = (props) => {
    // const [title, setTitle] = useState<string>('')

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   setTitle(event.target.value)
    // }
     const ref = useRef<HTMLInputElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent) => {
      if(event.key === 'Enter') {
          props.onAdd(ref.current!.value)
          ref.current!.value = ''
      }
    }
    return (
        <div className="input-field">
            <input 
             type="text" 
             id="title"
            //  value={title}
             ref = {ref}
            //  onChange={changeHandler}
             onKeyPress = {keyPressHandler}
             />
             <label htmlFor="Title" className="active">
                 Jale doing typescript
             </label>
        </div>
    )
}