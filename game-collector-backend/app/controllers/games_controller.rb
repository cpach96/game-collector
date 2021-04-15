class GamesController < ApplicationController

    def index
        render :json => Game.all, :include => :genre
    end

    def destroy
        Game.find(params[:id]).destroy
        if
           game = Game.find_by(id: params[:delete])
           game.destroy
           render :json => {id: params[:id], message: "Record destroyed "}
        else 
            render :json => {message: "Error record does not exist"}
        end
        
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
