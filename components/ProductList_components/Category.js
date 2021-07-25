const Category = ({ categoryfield, categoryChange }) => {

    return (
        <div className="panel" >
                <h2 className="category-sub">Category</h2>
                <select className="selectpanel" onChange={categoryChange}>
                <option selected="selected" value="">Select Category</option>
                <option value="Promo Package">Promo Package</option>
                <option value="Safety Shoes">Safety Shoes</option>
                <option value="Safety Gloves">Safety Gloves</option>
                <option value="Safety Mask">Safety Mask</option>
                <option value="Safety Glasses">Safety Glasses</option>
                <option value="Safety Helmet">Safety Helmet</option>
                <option value="Safety Clothes">Safety Clothes</option>
                <option value="Safety Earmuff">Safety Earmuff</option>
                <option value="Welding Safety">Welding Safety</option>
                <option value="Plier">Plier</option>
                <option value="Screwdriver">Screwdriver</option>
                <option value="Waterpass">Waterpass</option>
                <option value="Meassuring Tape">Meassuring Tape</option>
                <option value="Wrench">Wrench</option>
                <option value="Abrasive File">Abrasive File</option>
                <option value="Hammer">Hammer</option>
                <option value="Cutter">Cutter</option>
                <option value="Stapler">Stapler</option>
                <option value="Handtool Set">Handtool Set</option>
                <option value="Drill Bit">Drill Bit</option>
                <option value="Magnetic Drill">Magnetic Drill</option>
                <option value="Grinding Disc">Grinding Disc</option>
                <option value="Hypertherm Consumables">Hypertherm Consumables</option>
                <option value="Tungsten Electrode">Tungsten Electrode</option>
                <option value="Industrial Chalk">Industrial Chalk</option>
                <option value="Industrial Marker">Industrial Marker</option>
                <option value="Regulator">Regulator</option>
                <option value="Adaptor">Adaptor</option>
                <option value="Lighting">Lighting</option>
                <option value="Welding Equipment">Welding Equipment</option>
                <option value="Welding Machine">Welding Machine</option>
                <option value="Drilling Machine">Drilling Machine</option>
                <option value="Grinding Machine">Grinding Machine</option>
                <option value="Heat Gun">Heat Gun</option>
                <option value="Water Preassure">Water Preassure</option>
                <option value="Pneumatic Machine">Pneumatic Machine</option>
                <option value="Hydraulic Pump">Hydraulic Pump</option>
                <option value="Indicator Machine">Indicator Machine</option>
                </select>


</div>


  );
};
 