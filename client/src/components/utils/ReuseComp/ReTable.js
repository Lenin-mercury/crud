import React, {Fragment} from 'react';

const ReTable = ({customers}) => {

  // console.log(customers);

    return (
        <table class="table">
        <thead>
            <tr>
            {/* <th scope="col">S.No.</th> */}
            <th scope="col">S.No.</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Medicare ID</th>
            <th scope="col">Status</th>
            <th scope="col">Agent</th>
            <th scope="col" className="cust__menu">Actions</th>
            </tr>
        </thead>
        <tbody>

    {customers.length > 0 ? (
      customers.map((customer, index) => (
        <Fragment>
        <tr>
        <th scope="row"> {index + 1} </th>
          <td>{customer.name}</td>
          <td>{customer.phone}</td>
          <td>{customer.email}</td>
          <td>{customer.address}</td>
          <td>{customer.dob}</td>
          <td>{customer.medicareID}</td>
          <td>{customer.status}</td>
          <td>{customer.user.name}</td>
         <td>
        {/* <button className="btn btn-primary cust__button" onClick={ () => edithandleClickOpen(customer) }>
            <i className="fas fa-edit"></i>
        </button>
      <button onClick={ e => deleteCustomer(customer._id) }  className="btn btn-danger cust__button">  
            <i className="fas fa-trash-alt"></i>
      </button> */}

     

        </td>           
        </tr>
        </Fragment>

      ))
         ) : (
      <h4>No customers found...</h4>
       )
   }
        </tbody>
</table>
    );
};

export default ReTable;