export const PoseSearch = ({setterFunction}) => {
    return (
        <div className="wrap">
            <form className="searchPose">
        <input className="poseSearch"
        onChange={
            (changeEvent) => {
                setterFunction(changeEvent.target.value)
            }
        }
            type="text" placeholder="Search Poses" />
            <span className="caret"></span>
            </form>
        </div>
    )
}