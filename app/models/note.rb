class Note < ActiveRecord::Base
  # Remember to create a migration!
  validates :title, presence: true
  validates :body,  presence: true
end
