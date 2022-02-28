exports.getIndexPage = (req, res) => {
  res.render('index', {
    page_name: 'index',
  });
};

exports.getAboutPage = (req, res) => {
  res.render('about', {
    page_name: 'about',
  });
};

exports.getDashboardPage = (req, res) => {
  res.render('dashboard', {
    page_name: 'dashboard',
  });
};

exports.getContactPage = (req, res) => {
  res.render('contact', {
    page_name: 'contact',
  });
};
