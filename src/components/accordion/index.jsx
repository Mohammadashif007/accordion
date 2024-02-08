import { useState } from "react";
import data from "./data";
import './style.css'

export default function Accordion() {

    const [selected, setSelected] = useState(null);

    const handleSingleSelection = (id) => {
        setSelected(id === selected ? null : id);
    }

    console.log(selected);

    return <div className="wrapped">
        <div className="accordion">
            {
                data && data.length > 0 ? 
                data.map(dataItem => <div className="item">
                    <div onClick={()=>handleSingleSelection(dataItem.id)} className="title">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    <div>
                        {
                            selected === dataItem.id ? <div className="content">{dataItem.answer}</div> : null
                        }
                    </div>
                </div>)
                : <div>No Data Present</div>
            }
        </div>
    </div>;
}
