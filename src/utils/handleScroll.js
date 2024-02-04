const handleScroll = () => {
  let moving = window.pageYOffset;

  setVisible(position > moving);
  setPosition(moving);
};
