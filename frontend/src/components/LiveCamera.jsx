import React, { useEffect, useState } from "react";
import axios from "axios";

function LiveCamera() {

    const [image, setImage] = useState("");

    useEffect(() => {

        load();

        const interval = setInterval(load, 2000);

        return () => clearInterval(interval);

    }, []);

    const load = async () => {

        try {

            const res = await axios.get("http://127.0.0.1:8000/live");

            if (res.data.image) {

                setImage(
                    "http://127.0.0.1:8000/" +
                    res.data.image.replace(/\\/g, "/")
                );

            }

        } catch (e) {

            console.log(e);

        }

    };

    return (

        <div style={{

            background:"#1E293B",

            padding:"20px",

            borderRadius:"15px"

        }}>

            <h2 style={{color:"white"}}>

                🎥 Live AI Detection

            </h2>

            {

                image ?

                <img

                    src={image}

                    alt="Live"

                    style={{

                        width:"100%",

                        borderRadius:"10px"

                    }}

                />

                :

                <h3 style={{color:"white"}}>

                    Waiting for Images...

                </h3>

            }

        </div>

    );

}

export default LiveCamera;