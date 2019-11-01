class User < ApplicationRecord
    has_secure_password
    has_many :doctors
    validates :name, :email, :password, presence: true
    
end
