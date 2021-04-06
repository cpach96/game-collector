class GenresController < ApplicationController

    def index
        genres = Genre.all
        render json: GenreSerializer.new(genres)
    end

    def show
        genre = Genre.find_by(id: params[:id])
        options = {
            include: [:game]
        }
        render json: GenreSerializer.new(genre,options)
    end
end
