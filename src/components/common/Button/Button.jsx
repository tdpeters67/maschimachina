import "./Button.css";

export default function Button({ buttonText, buttonType='primary' }) {
    return <div className='button-wrap'>
        <button className={`btn ${buttonType}`}>{buttonText}</button>
    </div>
}