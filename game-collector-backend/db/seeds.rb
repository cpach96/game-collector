# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Genre.destroy_all
Game.destroy_all

rpg = Genre.create(name: "RPG")

adventure = Genre.create(name: "Adventure")

action = Genre.create(name: "Action")

Game.create(title: "The Legend of Zelda", 
    img_url:"https://cdn.gamer-network.net/2016/usgamer/zelda1header.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/long-time-coming-finishing-the-original-legend-of-zelda-in-2016.jpg",
    description: "The begininng in the acclaimed Legend of Zelda series!", value: 500, genre_id: rpg.id )

Game.create(title: "The Legend of Zelda", 
        img_url:"https://cdn.gamer-network.net/2016/usgamer/zelda1header.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/long-time-coming-finishing-the-original-legend-of-zelda-in-2016.jpg",
        description: "The begininng in the acclaimed Legend of Zelda series!", value: 500, genre_id: rpg.id )

Game.create(title: "The Legend of Zelda", 
    img_url:"https://cdn.gamer-network.net/2016/usgamer/zelda1header.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/long-time-coming-finishing-the-original-legend-of-zelda-in-2016.jpg",
    description: "The begininng in the acclaimed Legend of Zelda series!", value: 500, genre_id: rpg.id )
        
