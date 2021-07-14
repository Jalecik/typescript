import React from 'react'

export const TodoForm: React.FunctionComponent = () => {
    return (
        <div className="input-field">
            <input type="text" id="title" />
             <label htmlFor="Title" className="active">
                 Jale doing typescript
             </label>
        </div>
    )
}