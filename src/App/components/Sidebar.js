import React, {useEffect, useRef} from 'react';
import * as Icon from 'react-feather';

function Sidebar(props) {

    const Location = useRef('')

    useEffect(() => {

    }, [])



    return (
        <div className={"sidebar"}>
            <div className="inner">
                <div className="title">METEO</div>

                <div className="body">
                    <div className="text-group">
                        <Icon.MapPin/>
                        <input placeholder = "" type="text" name="search-city" id="search-city"/>
                    </div>



                </div>

            </div>

        </div>
    );
}

export default Sidebar;