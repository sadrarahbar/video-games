import { useState } from 'react';

function CustomerInfo() {
  const [customer, setCostumer] = useState({
    name: 'sadra',
    address: {
      city: 'nahavand',
      zipcode: 12345,
    },
  });

  const handleClick = () => {
    setCostumer({ ...customer, address: { ...customer.address, zipcode: 12 } });
  };

  return (
    <div>
      <button onClick={handleClick}>change zipcode</button>
      <div>
        {customer.name}
        <br />
        {customer.address.city}
        <br />
        {customer.address.zipcode}
      </div>
    </div>
  );
}

export default CustomerInfo;
