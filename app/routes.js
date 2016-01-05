module.exports = function(match) {
  match('',                   					'home#index');
  match('/catalog/:page',     					'catalog#index');
  match('/product/:id',     						'catalog#show');
  match('/articles.html',  							'article#index');
  match('/article/:id',  								'article#show');
};
