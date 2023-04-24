import { useCallback, useState, useRef } from 'react'
import './EmployeeCardElement.css'

export const EmployeeCardElement = ({ label, value, onSave }) => {
    const [isEdit, setIsEdit] = useState(false);
    const inputRef = useRef();

    const onSubmit = useCallback(() => {
        setIsEdit(false);
        onSave(inputRef.current.value);
    })
    const onCancel = useCallback(() => {setIsEdit(false)}, [setIsEdit])
    const onEdit = useCallback(() => {setIsEdit(true)}, [setIsEdit])

    return <div className='info-item-wrapper'>
    <div className="info-item">
        <div className="label">{label}</div>
        <div className="value">{isEdit ? <input value={value} ref={inputRef} type='text'/> : value}</div>
    </div>
    <div className="action">
        {!isEdit && <button onClick={onEdit}>Edit</button>}
        {isEdit && <>
        <button onClick={onSubmit}>Save</button>
        <button onClick={onCancel}>Cancel</button>
        </>}
    </div>
</div>
}