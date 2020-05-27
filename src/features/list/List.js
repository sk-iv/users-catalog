import React from 'react';
import Card from '../card';
import './grid.css';
import moment from 'moment';

const ruGender = {
  male: "Мужской",
  female: "Женский"
};

const agetostr = (age) => {
	let txt;
	let count = age % 100;
	if (count >= 5 && count <= 20) {
		txt = 'лет';
	} else {
		count = count % 10;
		if (count == 1) {
			txt = 'год';
		} else if (count >= 2 && count <= 4) {
			txt = 'года';
		} else {
			txt = 'лет';
		}
	}
	return `${age} ${txt}`;
}

const List = ({list, loading, error}) => {
  if (loading) return <div>Loading...</div>;
  if (error) return `Error! ${list.error.message}`;
  if (!list) return "ничего нет";

  return(
      <div className="row">
        {
          list.map(el=>(
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-3" key={el.login.uuid} style={el.filtered ? {display:"none"} : {}}>
              <Card
                picture={el.picture.large}
                name={`${el.name.first} ${el.name.last}`}
                age={`${agetostr(el.dob.age)}`}
                gender={ruGender[el.gender]}
                location={`${el.location.city}, ${el.location.country}`}
                registeredDate={moment(el.registered.date).format("DD.MM.YYYY")}
                email={el.email}
                phone={el.phone}
              />
            </div>
          ))
        }
      </div>
  );
};

export default List;
