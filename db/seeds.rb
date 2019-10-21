user1 = User.create(name: "nick", email: 'nick.com', password: 'password')
doctor1 = Doctor.create( first_name: "Nick", last_name: "Marini", title: "General Sergeon", image_url: "...", bio: "Good Doc!", user_note: "let's get this fixed!", user_id: 1)

user2 = User.create(name: "bob", email: 'bob.com', password: 'password')
doctor2 = Doctor.create( first_name: "Bob", last_name: "Smith", title: "Foot Doctor", image_url: "..", bio: "Pretty good", user_note: "let's get this fixed!", user_id: 2)