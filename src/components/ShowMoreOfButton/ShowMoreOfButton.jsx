import './ShowMoreOfButton.css'

export default function ShowMoreOfButton({onClick, name}) {
    return (
        <div className='showMoreButton' onClick={onClick}>
            Show More of {name}
        </div>
    );
}
