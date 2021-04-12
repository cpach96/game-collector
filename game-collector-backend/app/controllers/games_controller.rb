class GamesController < ApplicationController

    def index
        render :json => Game.all, :include => :genre
    end

    def destroy
        Game.find(params[:id]).destroy
        redirect_to '/games'
    end
 
end
