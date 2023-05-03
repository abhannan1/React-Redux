import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
const Navbar = ({amount}) => {

//new method to access the state
//connect() is old method
//  const amount =  useSelector((state)=>state.amount)
//  const dispatch = useDispatch()



  return (
    <nav>
      <div className="nav-center">
        <h3>ReduxGear</h3>
        <div className="nav-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
          </svg>
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) =>{
  return {amount:state.amount}
}

//connect is a higher order component
//takes an argument function (mapStateToProps, map..... etc)
//takes a component
export default connect(mapStateToProps) (Navbar);
