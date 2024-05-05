import cross from "./assets/cross.png";
export default () => (
  <div className="fasika">
    <div className="cardFront">
      <h3 className="happy">HAPPY EASTER</h3>
      <div className="cross-contain">
        <img className="cross" src={cross} alt="" />
      </div>
    </div>
    <div className="cardInside">
      <h3 className="back">HAPPY EASTER</h3>
      <p>Hello World,</p>
      <p>
        ክርስቶስ ተንሥአ ሙታን በዐቢይ ኃይል ወስልጣን አሰሮ ለሰይጣን አግዓዞ ለአዳም ሰላም እምይእዜሰ ኮነ ፍስሐ ወሰላም
        አሜን እንኳን አብሮ አደረሰን✝️.
      </p>
      <p className="name">YOHANNES</p>
    </div>
  </div>
);
