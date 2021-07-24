const Category = ({ categoryfield, categoryChange }) => {

    return (
        <div className="categories" >
                <h1>Category</h1>
                <select className="selectpanel" onChange={categoryChange}>
                <option selected="selected" value="">Select Category</option>
                <option value="Safety Shoes">Safety Shoes</option>
                <option value="Safety Gloves">Safety Gloves</option>
                <option value="Safety Mask">Safety Mask</option>
                <option value="Safety Glasses">Safety Glasses</option>
                <option value="">Safety Gloves</option>
                <option value="">Safety Mask</option>
                <option value="">Safety Glasses</option>
                <option value="">Safety Helmet</option>
                <option value="">Safety Clothes</option>
                <option value="">Safety Earmuff</option>
                <option value="">Welding Safety</option>
                <option value="">Plier</option>
                <option value="">Screwdriver</option>
                <option value="">Waterpass</option>
                <option value="">Meassuring Tape</option>
                <option value="">Wrench</option>
                <option value="">Abrasive File</option>
                <option value="">Hammer</option>
                <option value="">Cutter</option>
                <option value="">Stapler</option>
                <option value="">Handtool Set</option>
                <option value="">Drill Bit</option>
                <option value="">Magnetic Drill</option>
                <option value="">Grinding Disc</option>
                <option value="">Hypertherm Consumables</option>
                <option value="">Tungsten Electrode</option>
                <option value="">Industrial Chalk</option>
                <option value="">Industrial Marker</option>
                <option value="">Regulator</option>
                <option value="">Adaptor</option>
                <option value="">Lighting</option>
                <option value="">Welding Equipment</option>
                <option value="">Welding Machine</option>
                <option value="">Drilling Machine</option>
                <option value="">Grinding Machine</option>
                <option value="">Heat Gun</option>
                <option value="">Water Preassure</option>
                <option value="">Pneumatic Machine</option>
                <option value="">Hydraulic Pump</option>
                <option value="">Indicator Machine</option>
                </select>


</div>


  );
};
 