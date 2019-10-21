class Doctor < ApplicationRecord
    belongs_to :user
    validates :first_name, :last_name, :title, :image_url, :bio, :user_id, presence: true
end
