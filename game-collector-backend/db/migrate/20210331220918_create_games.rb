class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :title
      t.string :img_url
      t.string :description
      t.integer :value
      t.integer :genre_id

      t.timestamps
    end
  end
end
