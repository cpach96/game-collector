class GamesController < ApplicationController

    def index
        render :json => Game.all, :include => :genre
    end
 
end
