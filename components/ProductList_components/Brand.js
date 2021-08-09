const Brand = ({ brandfield, brandChange }) => {

    return (
        <div className="panel" >
                <h2 className="category-sub">Brand</h2>
                <select className="selectpanel" onChange={brandChange}>
                <option selected="selected" value="">Select Brand</option>
                <option value="Safety Jogger">Safety Jogger</option>
                <option value="3M">3M</option>
                <option value="Ansell">Ansell</option>
                <option value="Ferm">Ferm</option>
                <option value="Honeywell">Honeywell</option>
                <option value="Howard Leight">Howard Leight</option>
                <option value="Hypertherm">Hypertherm</option>
                <option value="King's">King's</option>
                <option value="Stanley">Stanley</option>
                <option value="North">North</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Weldas">Weldas</option>
                <option value="MSA">MSA</option>
                <option value="Saf-Eva">Saf-Eva</option>
                <option value="Black And Decker">Black And Decker</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Lincoln Electric">Lincoln Electric</option>
                </select>


</div>


  );
};
 