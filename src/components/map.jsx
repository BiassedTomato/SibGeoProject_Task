import React, { useRef, useEffect } from "react"
import ArcGISMap from "@arcgis/core/Map"
import MapView from '@arcgis/core/views/MapView'
import { useReducer } from "react"
import Search, { SearchViewModel } from "@arcgis/core/widgets/Search";
import { getAllLocations } from "../APICalls.ts";

export const MapComponent = () => {

    var reference = useRef(null)

    useEffect(
        () => {
            const map = new ArcGISMap(
                {
                    basemap: 'topo-vector'
                }
            )

            const view = new MapView(
                {
                    container: reference.current,
                    map: map,
                    center: [65.525017, 57.161297],
                    zoom: 8
                }
            )

            const search = new Search(
                {
                    view,
                    popupEnabled: false

                });

            search.on("select-result", async (event) => {
                var p = event.result.extent.center

                
            })



            view.ui.add(search, 'top-right')


            return () => view && view.destroy()

        }
        , [])

    return (
        <div className="main-map" ref={reference}>
        </div>
    )
}