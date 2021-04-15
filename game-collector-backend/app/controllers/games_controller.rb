class GamesController < ApplicationController

    def index
        render :json => Game.all, :include => :genre
    end

    def destroy
        Game.find(params[:id]).destroy
        render :json => {id: params[:id], message: "Record destroyed "}
    end

    def create
        if 
        genre = Genre.find_by(name: params[:genre])
        game = Game.create(title: params[:title], img_url: params[:img_url], description: params[:description], value: params[:value], genre: genre )
        else
        genre = Genre.create(name: params[:genre])
        game = Game.create(title: params[:title], img_url: params[:img_url], description: params[:description], value: params[:value], genre: genre )
        end
        render :json => game
    end
 
end
