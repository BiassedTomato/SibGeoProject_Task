import Extent from "@arcgis/core/geometry/Extent"
import { getAllLocations,getLocation,addNewLocation,deleteLocation,editLocation } from "../APICalls.ts"

export const FavouritesTab = (props) => {


    return (
        <div id="fav-tab">
            <button onClick={()=>addNewLocation(1,new Extent(),"Testing").then(a=>console.log(a))}>
                Save
            </button>
            {props.children}
        </div>
    )
}

export const FavCard = (props) => {
    return (
        <div id="fav-card">
            <div>
                <p>{props.name}</p>

            </div>

        </div>
    )
}