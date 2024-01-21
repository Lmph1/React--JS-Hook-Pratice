import React, { useState } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
const InputTodo = ({todos,setTodos}) => {

    const [text, setText] = useState('')
    const [aid, setAid] = useState(2)

    const onSave = ()=>{
        let todo = {
            id: aid + 1,
            text,
            isPending: true
        }
        setTodos([...todos,todo])
        setAid(aid + 1)
    }

    return (
        <div className="my-3">
            <h1>Todo Hook</h1>
            <InputGroup className="my-3">
                <FormControl
                    onChange={(e)=>setText(e.target.value)}
                    placeholder="Todo Text"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button onClick={onSave} variant="outline-secondary" id="button-addon2">
                    Save
                </Button>
            </InputGroup>

        </div>
    )
}

export default InputTodo