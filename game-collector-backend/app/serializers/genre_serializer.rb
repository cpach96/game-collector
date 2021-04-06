class GenreSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :created_at
  belongs_to :game
end
