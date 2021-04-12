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

Game.create(title: "Super Mario 64", 
        img_url:"https://i.ebayimg.com/images/g/QSgAAOSwdklbeIMv/s-l300.jpg",
        description: "Mario's first 3D Aventure!!", value: 500, genre_id: adventure.id )

Game.create(title: "Goldeneye 007", 
    img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhOeaf_xeGnDROfWoScMtav9iwZdOu6t1Bx8rioUSqUmALkdnh1jkS1uhCBg&usqp=CAc",
    description: "James Bond comes to the Nintendo 64!", value: 500, genre_id: action.id )
        
