class User < ApplicationRecord
    has_secure_password
    has_many :doctors
    validates :name, :email, presence: true
    
end
