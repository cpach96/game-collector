class GameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :img_url, :value
end
