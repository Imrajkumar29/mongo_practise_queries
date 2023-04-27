mongosh
use first_mongo_db
show dbs
show collections

//Create documents || if collections is
// not present it will create it

//db.collectionName.insertMany(data)
db.movies.insertMany(
[
    {
      "id": "99",
      "name": "Vikram",
      "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      "rating": 8.4,
      "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
      "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
    },
    {
      "id": "100",
      "name": "RRR",
      "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      "rating": 8.8,
      "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {
      "id": "101",
      "name": "Iron man 2",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      "rating": 7,
      "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
      "id": "102",
      "name": "No Country for Old Men",
      "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      "rating": 8.1,
      "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
      "id": "103",
      "name": "Jai Bhim",
      "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      "rating": 8.8,
      "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
      "id": "104",
      "name": "The Avengers",
      "rating": 8,
      "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
      "id": "105",
      "name": "Interstellar",
      "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      "rating": 8.6,
      "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      "id": "106",
      "name": "Baahubali",
      "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      "rating": 8,
      "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {
      "id": "107",
      "name": "Ratatouille",
      "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      "rating": 8,
      "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
    },
    {
      "name": "PS2",
      "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
      "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
      "rating": 8,
      "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
      "id": "108"
    },
    {
      "name": "Thor: Ragnarok",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
      "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
      "rating": 8.8,
      "trailer": "https://youtu.be/NgsQ8mVkN8w",
      "id": "109"
    }
  ]
)

//select * from movies; 
db.movies.find({})
db.movies.find({}).count()

//returns array with one object/document
db.movies.find({name :'RRR'})

//returns object with one document 
db.movies.findOne({name :'RRR'})
// db.movies.findOne({name :"RRR"}) this also works

db.movies.find({rating:8.8})

// OPERATOR KEY STARTS WITH $
db.movies.find({rating:{$gt: 8.5}})
//movies with rating less than 8.5
db.movies.find({rating:{$lt: 8.5}})
//less than or equal
db.movies.find({rating:{$lte: 8}})

//greater than or equal 
//select * from movies where rating >=8.6
db.movies.find({rating:{$gte: 8.6}})

//projection inclusion
//select name,rating from movies where rating <=8
db.movies.find({rating:{$lte: 8}},{name:1,rating:1})

//projection exclusion
db.movies.find({rating:{$lte: 8}},{poster:0,trailer:0})

//exclusion and inclusion cannot be done together
//one exception to this is the below case where _id is excluded
db.movies.find({rating:{$lte: 8.5}},{_id:0,name:1,rating:1})
// find movies with rating 7 or 8 or 8.8
db.movies.find({rating:{$in: [7,8.6,8.8]}},{_id:0,name:1,rating:1}) 
// not in operator nin
db.movies.find({rating:{$nin: [7,8.6,8.8]}},{_id:0,name:1,rating:1}) 

//rating exactly 8 
db.movies.find({rating:{$eq: 8}},{_id:0,name:1,rating:1}) 
db.movies.find({rating:8},{_id:0,name:1,rating:1})

//not equal to 8
db.movies.find({rating:{$ne: 8}},{_id:0,name:1,rating:1}) 

// rating>=8.5 and <=9
db.movies.find({rating:{$gte: 8.5,$lte:9}},{_id:0,name:1,rating:1}) 

//sorting 1 for asc and -1 for desc
db.movies.find({},{name:1,rating:1}).sort({rating:1})
db.movies.find({},{name:1,rating:1}).sort({rating:-1})

//top 3
db.movies.find({},{name:1,rating:1}).sort({rating:-1}).limit(3)
db.movies.find({},{name:1,rating:1}).sort({rating:-1}).limit(3).skip(3)

//compound sorting
db.movies.find({},{_id:0,name:1,rating:1}).sort({rating:-1,name:1})

db.movies.find({});
db.movies.findOne({});
db.movies.find({name:"PS2"},{name:1,language:1});

db.movies.updateMany({},{$set:{language:"english"}})
//update one updates only one record ,
// whereas we can use $ in update many to update multiple records   
db.movies.updateMany({name:{$in:["PS2","Vikram"]}},{$set:{language:"Tamil"}})

//deleteOne and deleteMany for deletion
