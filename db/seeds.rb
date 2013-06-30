require 'faker'
10.times do
  Note.create(title: Faker::Company.bs, body: Faker::Lorem.sentences(5))
end