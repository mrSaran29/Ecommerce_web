import React, { useContext } from 'react';
import { myContext } from '../App';

const Admindash = () => {
  const val = useContext(myContext);

  // Inline styles for dark mode
  const containerStyle = {
    padding: '40px',
    backgroundColor: '#121212',
    minHeight: '100vh',
    color: '#f1f1f1',
    fontFamily: 'Segoe UI, sans-serif',
  };

  const titleStyle = {
    fontSize: '32px',
    fontWeight: '600',
    marginBottom: '30px',
    color: '#ffffff',
    borderBottom: '2px solid #333',
    paddingBottom: '10px',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const thStyle = {
    backgroundColor: '#1f1f1f',
    color: '#e0e0e0',
    padding: '14px 12px',
    textAlign: 'left',
    fontWeight: '600',
    fontSize: '14px',
    borderBottom: '1px solid #333',
  };

  const tdStyle = {
    backgroundColor: '#1a1a1a',
    padding: '12px',
    borderBottom: '1px solid #333',
    fontSize: '14px',
    color: '#dddddd',
    verticalAlign: 'top',
  };

  const productListStyle = {
    margin: 0,
    paddingLeft: '18px',
    listStyleType: 'circle',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>My Orders</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>S.no</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Mobile</th>
            <th style={thStyle}>Mail</th>
            <th style={thStyle}>Address</th>
            <th style={thStyle}>Payment</th>
            <th style={thStyle}>Product</th>
          </tr>
        </thead>
        <tbody>
          {val.checkdet.map((cur, index) => (
            <tr key={index}>
              <td style={tdStyle}>{index + 1}</td>
              <td style={tdStyle}>{cur.cname}</td>
              <td style={tdStyle}>{cur.cmobile}</td>
              <td style={tdStyle}>{cur.cemail}</td>
              <td style={tdStyle}>{cur.caddress}</td>
              <td style={tdStyle}>{cur.cpayment}</td>
              <td style={tdStyle}>
                <ol style={productListStyle}>
                  {cur.cproduct.map((c, i) => (
                    <li key={i}>{c.title}</li>
                  ))}
                </ol>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admindash;
