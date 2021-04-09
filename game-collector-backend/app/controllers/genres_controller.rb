class GenresController < ApplicationController

    def index
        render :json => Genre.all.to_json
    end

end
