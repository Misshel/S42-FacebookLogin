'use strict';

const Header = () => {
  const header = $('<header></header>');
  const img    = $('<img src="image/logo.png" alt="logo l Laboratoria">');

  header.append(img);
  return header;
}
