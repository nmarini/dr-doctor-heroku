class Doctor < ApplicationRecord
    belongs_to :user
    validates :last_name, :uid, :user_id, presence: true
end
