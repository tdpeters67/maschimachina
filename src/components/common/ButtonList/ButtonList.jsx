import './ButtonList.css'
import Button from '../Button/Button'

export default function ButtonList({ buttons }) {
    return <div className='button-list'>
        {buttons.map( b => <Button buttonText={b.text} />)}
    </div>
}