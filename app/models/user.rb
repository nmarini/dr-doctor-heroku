class User < ApplicationRecord
    has_secure_password
    has_many :diagnoses
    validates :name, :email, :password, :birthday_year, :sex, presence: true
end
