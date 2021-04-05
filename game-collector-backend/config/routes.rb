Rails.application.routes.draw do
  resources :genres
  resources :games
  
  root 'games#index'
end
