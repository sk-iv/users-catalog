import React from 'react';
import './card.css';

const Card = ({picture, name, age, gender, location, registeredDate, email, phone}) => {
  return(

    <div className="card row no-gutters">
      <div className="col-6">
        <div className="card-image">
          <img src={picture} target="_blanc"/>
        </div>
      </div>
      <div className="col-6 align-self-center">
        <div className="card-descList">
          <h2 className="card-title">{name}</h2>
          <div className="card-descItem">
            <span className="card-descItem-term mr-2 text-muted">Возраст:</span>
            <span className="strong">{age}</span>
          </div>
          <div className="card-descItem">
            <span className="card-descItem-term mr-2 text-muted">Пол:</span>
            <span className="strong">{gender}</span>
          </div>
          <div className="card-descItem">
            <span className="card-descItem-term mr-2 text-muted">Адрес:</span>
            <span className="strong">{location}</span>
          </div>
          <div className="card-descItem">
            <span className="card-descItem-term mr-2 text-muted">Дата регистрации:</span>
            <span className="strong">{registeredDate}</span>
          </div>
          <div className="card-descItem">
            <span className="card-descItem-term mr-2 text-muted">Телефон:</span>
            <span className="strong">{phone}</span>
          </div>
          {/*
            некоторые строки выходят за границу карточки
          <div className="card-descItem">
            <span className="card-descItem-term mr-2 text-muted">Email:</span>
            <span className="strong">{email}</span>
          </div>
          */}
        </div>
      </div>
    </div>

  )
};
export default Card;
