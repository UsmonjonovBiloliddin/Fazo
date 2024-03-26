import { useEffect, useState } from "react";
import "./Models.scss";
import PraductService from "../../../Service/ApiService";

const Models = () => {
  const [categories, setCategories] = useState();

  const getApi = async () => {
    const response2 = await PraductService.getProduct(
      `categories/get_categories`
    );

    setCategories(response2)
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="Modellar">
      <div className="text">
        <h3>Популярные категории и модели</h3>
      </div>
      <div className="selects">
        {categories &&
          categories.map((category) => (
            <div key={category.id} className="select">
              <p>{category.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Models;
