import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { Link, useParams } from "react-router-dom";

import { SearchContext } from "../../Context/SearchContext";
import { UserContext } from "../../Context/UserContext";

const VacancyCategoryPage = () => {
  const {token,decode} = useContext(UserContext)
    const [api, setApi] = useState([]);
    const {search,setSearch} = useContext(SearchContext)

    const [category, setCategory] = useState([]);
    const { id } = useParams();
  
    function handleWishlist(vacancyId) {

      fetch("http://localhost:3000/users/addwishlist", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id: decode.id,  vacancyId: vacancyId  }),
      });
      console.log(decode);
  
    }
    useEffect(() => {
        fetch(`http://localhost:3000/vacancycategories/${id}`)
          .then((res) => res.json())
          .then((data) => setCategory(data));
      }, []);
    useEffect(() => {
      fetch(`http://localhost:3000/vacancybycategory/${id}`)
        .then((res) => res.json())
        .then((data) => setApi(data));
    }, []);
  return (
    <section className="vacancyCategory">
    <div className="vacancyCategory_container">
      <div className="vacancyCategory_container_title">{category.category}</div>
      <div className="vacancyCategory_container_allCards">
        {api.filter((x) =>
                    x.position.toLowerCase().includes(search.toLowerCase()) ||x.company.toLowerCase().includes(search.toLowerCase())
                  )
        .map((x) => {
          return (
            <div key={x._id} className="vacancyCategory_container_allCards_card">
              <div className="vacancyCategory_container_allCards_card_content">
              <div className="vacancyCategory_container_allCards_card_content_title">
              <div className="vacancyCategory_container_allCards_card_content_title_vacancyName">
              <Link to={`/vacancydetailpage/${x._id}`}>{x.position}</Link>
              </div>
              <div className="vacancyCategory_container_allCards_card_content_title_companyName">
              {x.company}
              </div>
              <div className="vacancyCategory_container_allCards_card_content_title_published">
              <i className="fa-regular fa-calendar"></i>
              {x.date.slice(0,10)}
              </div>
              </div>
              <div className="vacancyCategory_container_allCards_card_content_salary">
              <div className="allCv_container_allCards_card_content_salary_wishlist" onClick={()=>handleWishlist(x._id)}>
             <i className="fa-regular fa-heart"></i> 
            </div>
              <div className="vacancyCategory_container_allCards_card_content_salary_slr">
              {x.salary} AZN
              </div>
              </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
  )
}

export default VacancyCategoryPage