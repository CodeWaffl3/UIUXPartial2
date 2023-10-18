import './ShowMoreOfButton.css'

export default function ShowMoreOfButton({onClick, name}) {
    return (
        <div className='showMoreButton' onClick={()=>onClick(name)}>
            Show More of {name}
        </div>
    );
}
