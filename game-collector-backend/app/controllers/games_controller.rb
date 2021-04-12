class GamesController < ApplicationController

    def index
        render :json => Game.all, :include => :genre
    end

    def destroy
        Game.find(params[:id]).destroy
        render :json => {id: params[:id], message: "Record destroyed "}
    end
 
end
