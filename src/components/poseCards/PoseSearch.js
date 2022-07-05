export const PoseSearch = ({setterFunction}) => {
    return (
        <div>
        <input className="poseSearch"
        onChange={
            (changeEvent) => {
                setterFunction(changeEvent.target.value)
            }
        }
            type="text" placeholder="Search Poses" />
        </div>
    )
}