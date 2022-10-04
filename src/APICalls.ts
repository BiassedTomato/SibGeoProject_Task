import Point from "@arcgis/core/geometry/Point";
import Extent from "@arcgis/core/geometry/Extent";

var url: string = "https://localhost:44386/"

export async function getAllLocations(): Promise<JSON> {

    var data = await fetch(url + "getall")
    return await data.json()
}

export async function getLocation(id: number): Promise<JSON> {

    var data = await fetch(url + `get/${id}`)
    return await data.json()
}

export async function addNewLocation(id: number, extent: Extent, name: string): Promise<Response> {
    var data = { Latitude: extent.center.latitude, Longitude: extent.center.longitude, LocationName: name, Id: id }


    return await fetch(url + "add", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
}

export async function deleteLocation(id: number): Promise<Response> {
    return await fetch(url + `/delete/${id}`, {
        method: "DELETE"
    })
}

export async function editLocation(id: number, extent: Extent, name: string): Promise<Response> {
    var data = { Latitude: extent.center.latitude, Longitude: extent.center.longitude, LocationName: name, Id: id }


    return await fetch(url + `edit/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
}