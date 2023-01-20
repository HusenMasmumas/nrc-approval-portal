import Radio from "assets/img/dashboard/radio.jpg";
import CardRadio from "components/card_radio/CardRadio";

const CardList = () => {
  return (
    <div>
      <div className="grid grid-cols-6 gap-3 mt-[30px] ">
        {new Array(25).fill("").map((_, index) => {
          return (
            <div key={index}>
              <CardRadio image={Radio} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
