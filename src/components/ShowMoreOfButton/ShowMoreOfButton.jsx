import './ShowMoreOfButton.css'

export default function ShowMoreOfButton({onClick, name, top, left}) {
    return (
        <div className='showMoreButton' onClick={()=>onClick(name)} style={{top: top, left:left}}>
            Show More of {name}
        </div>
    );
}
