Rails.application.routes.draw do 
  
 # get '/test', to: 'application#test'

  get '/games', to: 'games#index'

  get '/games/:id', to: 'games#show'

  get '/genres', to: 'genres#index'

  get '/genres/:id', to: 'genres#show'


end
