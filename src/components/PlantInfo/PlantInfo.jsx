
function PlantInfo( { activePlant } ) {

    return (
        <ul className="CategoryList">
            {activePlant.info}
        </ul>
    );
}
export default PlantInfo;