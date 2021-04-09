class GamesController < ApplicationController

    def index
        render :json => Game.all.to_json, :include => :genre
    end
 
end
