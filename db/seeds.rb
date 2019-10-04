
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
diagnosis = Diagnosis.create( name: 'Chicken Pox', short_description: 'you get itchy', full_description: 'you get realllyyyyyyy ithcy', medical_condition: 'its not fun....', prof_name: 'itchy itchy red spots', treatment_description: 'dont itch', possible_symptoms: ['itchy', 'red spots'], specializations: ['general', 'skin'])
user = User.create(name: "nick", email: 'nick.com', password: 'password', birthday_year: 1990, sex: 'male')
user.diagnoses << diagnosis