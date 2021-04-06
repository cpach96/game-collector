Rails.application.routes.draw do
  resources :genres
  resources :games
  
  get '/test', to: 'application#test'
end
