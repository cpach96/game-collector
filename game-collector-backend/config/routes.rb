Rails.application.routes.draw do 
  
 # get '/test', to: 'application#test'
  resources :games, only: [:index, :destroy, :post]
  resources :genres, only: :index

end
