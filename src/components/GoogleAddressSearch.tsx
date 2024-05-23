import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { FaMapMarkerAlt } from "react-icons/fa";
function GoogleAddressSearch() {
    return (
        <div className="flex gap-2 items-center w-full">
            <FaMapMarkerAlt className="p-2 rounded-full text-purple-600 bg-slate-200" size={40} />
            <GooglePlacesAutocomplete
                apiKey="AIzaSyDmRzL3N0fwC2Eh3yvBlby0OxbUDgcgo5M"
                selectProps={{
                    placeholder: "Search Property",
                    isClearable: true,
                    className: "w-full",
                    onChange: (place) => {
                        console.log(place);
                    },
                }}
            />
        </div>
    );
}

export default GoogleAddressSearch;
