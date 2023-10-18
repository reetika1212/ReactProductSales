import './App.css';
import React, { useState } from "react";
import logo from './components/images/Dashboard.png';
import dashboard from './components/images/item_dashboard.png';
import product from './components/images/item_product.png';
import customer from './components/images/item_customer.png';
import income from './components/images/item_income.png';
import promote from './components/images/item_promote.png';
import help from './components/images/item_help.png';
import explore from './components/images/explore.png';
import person1 from './components/images/person1.jfif';
import profit from './components/images/profit.png';
import orders from './components/images/orders.png';
import balance from './components/images/balance.png';
import sales from './components/images/sales.png';
import inc from './components/images/inc.png';
import dec from './components/images/dec.png';
import image1 from './components/images/image1.jpg';
import image2 from './components/images/image2.jfif';
function App() {
  const [moreproduct, setMoreproduct] = useState(false);
  const [morecustomers, setMorecustomers] = useState(false);
  const [moreincome, setMoreincome] = useState(false);
  const [morepromote, setMorepromote] = useState(false);
  const [morehelp, setMorehelp] = useState(false);

  return (
    <div>
      <div className="own_container">
        <section className="dashboard">
          <div className="title_dashboard">
            <img src={logo} className="logo"/>
            <span className="title">Dashboard</span>
          </div>
          <div className="optionsmenu">
            <div className="option">
              <img src={dashboard} alt="" className="optionicon"/>
              <span className="optionspan">Dashboard</span>
            </div>
            <div className="option">
              <img src={product} alt="" className="optionicon"/>
              <span className="optionspan">Product</span>
              <button className="arrowbutton" onClick={()=>{
                setMoreproduct(!moreproduct);
                setMorecustomers(false);
                setMoreincome(false);
                setMorepromote(false);
                setMorehelp(false);
                }}>
                <img src={explore} alt="" />
              </button>
              <div>
                {
                  moreproduct &&(
                    <div className="content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vitae aut perferendis modi velit minus deleniti repellendus? Eius, debitis corporis. Placeat facilis consequatur in pariatur ad doloremque vel ratione dolorum!
                    </div>
                  )
                }
              </div>
            </div>
            <div className="option">
              <img src={customer} alt="" className="optionicon"/>
              <span className="optionspan">Customers</span>
              <button className="arrowbutton" onClick={()=>{
                setMoreproduct(false);
                setMorecustomers(!morecustomers);
                setMoreincome(false);
                setMorepromote(false);
                setMorehelp(false);
                }}>
                <img src={explore} alt="" />
              </button>
              <div>
                {
                  morecustomers &&(
                    <div className="content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vitae aut perferendis modi velit minus deleniti repellendus? Eius, debitis corporis. Placeat facilis consequatur in pariatur ad doloremque vel ratione dolorum!
                    </div>
                  )
                }
              </div>
            </div>
            <div className="option">
              <img src={income} alt="" className="optionicon"/>
              <span className="optionspan">Income</span>
              <button className="arrowbutton" onClick={()=>{
                setMoreproduct(false);
                setMorecustomers(false);
                setMoreincome(!moreincome);
                setMorepromote(false);
                setMorehelp(false);
                }}>
                <img src={explore} alt="" />
              </button>
              <div>
                {
                  moreincome &&(
                    <div className="content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vitae aut perferendis modi velit minus deleniti repellendus? Eius, debitis corporis. Placeat facilis consequatur in pariatur ad doloremque vel ratione dolorum!
                    </div>
                  )
                }
              </div>
            </div>
            <div className="option">
              <img src={promote} alt="" className="optionicon"/>
              <span className="optionspan">Promote</span>
              <button className="arrowbutton" onClick={()=>{
                setMoreproduct(false);
                setMorecustomers(false);
                setMoreincome(false);
                setMorepromote(!morepromote);
                setMorehelp(false);
                }}>
                <img src={explore} alt="" />
              </button>
              <div>
                {
                  morepromote &&(
                    <div className="content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vitae aut perferendis modi velit minus deleniti repellendus? Eius, debitis corporis. Placeat facilis consequatur in pariatur ad doloremque vel ratione dolorum!
                    </div>
                  )
                }
              </div>
            </div>
            <div className="option">
              <img src={help} alt="" className="optionicon"/>
              <span className="optionspan">Help</span>
              <button className="arrowbutton" onClick={()=>{
                setMoreproduct(false);
                setMorecustomers(false);
                setMoreincome(false);
                setMorepromote(false);
                setMorehelp(!morehelp);
                }}>
                <img src={explore} alt="" />
              </button>
              <div>
                {
                  morehelp &&(
                    <div className="content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vitae aut perferendis modi velit minus deleniti repellendus? Eius, debitis corporis. Placeat facilis consequatur in pariatur ad doloremque vel ratione dolorum!
                    </div>
                  )
                }
              </div>
            </div>
          </div>
          <div className="chat">
          <div className="person">
              <img src={person1} alt="" />
              <div className="nameanddeg">
                <span className="name">Evana</span>
                <span className="deg">Project Manager</span>
              </div>
              <button className="arrowbutton" onClick={()=>{}}>
                <img src={explore} alt="" />
              </button>
            </div>
          </div>
        </section>
        <section className="main_site">
          <div className="welcomesearch">
            <span>Hello, Shahrukh &#128075;&#127995;</span>
            <input type="text" className="search" placeholder="Search"/>
          </div>
          <div className="eobt">
            <div className="eobt_item">
              <div className="eobt_img_holder1">
                <img src={profit} alt="" className="eobt_img"/>
              </div>
              <div className="eobt_content">
                <span className="eobt_name">Earning</span>
                <span className="amount">$198k</span>
                <span className="incdec">
                  <span className="number">
                    <img src={inc} alt="" />
                    <span id="per1">
                      37.8%
                    </span>
                  </span>
                  this month
                </span>
              </div>
            </div>
            <div className="eobt_item">
              <div className="eobt_img_holder2">
                <img src={orders} alt="" className="eobt_img"/>
              </div>
              <div className="eobt_content">
                <span className="eobt_name">Orders</span>
                <span className="amount">$2.4k</span>
                <span className="incdec">
                  <span className="number">
                    <img src={dec} alt="" />
                    <span id="per2">
                      2%
                    </span>
                  </span>
                  this month
                </span>
              </div>
            </div>
            <div className="eobt_item">
              <div className="eobt_img_holder3">
                <img src={balance} alt="" className="eobt_img"/>
              </div>
              <div className="eobt_content">
                <span className="eobt_name">Balance</span>
                <span className="amount">$2.4k</span>
                <span className="incdec">
                <span className="number">
                    <img src={dec} alt="" />
                    <span id="per2">
                      2%
                    </span>
                  </span>
                  this month
                </span>
              </div>
            </div>
            <div className="eobt_item">
              <div className="eobt_img_holder4">
                <img src={sales} alt="" className="eobt_img"/>
              </div>
              <div className="eobt_content">
                <span className="eobt_name">Total Sales</span>
                <span className="amount">$88k</span>
                <span className="incdec">
                  <span className="number">
                    <img src={inc} alt="" />
                    <span id="per1">
                      11%
                    </span>
                  </span>
                  this month
                </span>
              </div>
            </div>
          </div>
          <div className="section2">
            <div className="barchartcontainer">
              <div className="overviewme">
                <span className="PSell">Overview</span>
                <select name="quantity" id="PSTime">
                  <option value="quantity">Quantity</option>
                </select>
              </div>
              <div>
                <span>Monthly Earning</span>
              </div>
              <div className="barchart">
                  <div className="month jan">JAN</div>
                  <div className="month feb">FEB</div>
                  <div className="month mar">MAR</div>
                  <div className="month apr">APR</div>
                  <div className="month may">MAY</div>
                  <div className="month jun">JUN</div>
                  <div className="month jul">JUL</div>
                  <div className="month aug">AUG</div>
                  <div className="month sep">SEP</div>
                  <div className="month oct">OCT</div>
                  <div className="month nov">NOV</div>
                  <div className="month dec">DEC</div>
              </div>
            </div>
            <div className="userdata">
                <span className="PSell">Customers</span>
                <span>Customers that buy products</span>
                <div className="div1">
                  <div className="div2">
                    <b>65%</b> Total New Customers
                  </div>
                </div>
            </div>
          </div>
          <div className="section3">
            <table className="salestable">
              <tr>
                <td colSpan={2}>
                  <span className="PSell">Product Sell</span>
                </td>
                <td className="emptyTD">
                  &nbsp;
                </td>
                <td colSpan={2}>
                  <input type="text" className="search" id="PSearch" placeholder="Search"/>
                </td>
                <td>
                  <select name="time-duration" id="PSTime">
                    <option value="30">Last 30 days</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  Product Name
                </td>
                <td className="emptyTD">
                  &nbsp;
                </td>
                <td>
                  Stock
                </td>
                <td>
                  Price
                </td>
                <td>
                  Total Sales
                </td>
              </tr>
              <tr>
                <td className="tabletop">
                <img src={image1} alt="" className="productimg"/>
                </td>
                <td className="tabletop">
                </td>
                <td className="emptyTD tabletop">
                <span className="descproduct">
                    <span className="productName">Abstract 3-D</span>
                    <span className="productdesc">Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
                  </span>
                </td>
                <td className="tabletop">32 in stock</td>
                <td className="tabletop">$45.99</td>
                <td className="tabletop">20</td>
              </tr>
              <tr>
                <td>
                <img src={image2} alt="" className="productimg"/>
                </td>
                <td>
                </td>
                <td className="emptyTD">
                <span className="descproduct">
                    <span className="productName">Sarphens Illustration</span>
                    <span className="productdesc">Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
                  </span>
                </td>
                <td>32 in stock</td>
                <td>$45.99</td>
                <td>20</td>
              </tr>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
