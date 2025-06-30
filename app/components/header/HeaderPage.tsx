import React from 'react';
import './HeaderPage.css'; // Import your CSS file for styling
import { useSelector } from 'react-redux';

const HeaderPage = () => {
  const Items = useSelector((state: any) => state.cardItem.items);

  return (
    <header className='header'>
      <div className='logo'>ShoppingCard</div>
      <nav className='nav-menu'>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/products'>Products</a>
          </li>
          <li>
            <a href='/category'>Catagory</a>
          </li>
          <li>
            <a href='#contact'>Services</a>
          </li>
          <li>
            <a href='/viewCard' className='cardView'>
              Card_Item : {Items.length}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderPage;
