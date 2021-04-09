Rails.application.routes.draw do 
  
 # get '/test', to: 'application#test'
  resources :games, only: :index
  resources :genres, only: :index

end
