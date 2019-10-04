class Diagnosis < ApplicationRecord
    serialize :specializations, Array
    serialize :possible_symptoms, Array
    belongs_to :user
end
